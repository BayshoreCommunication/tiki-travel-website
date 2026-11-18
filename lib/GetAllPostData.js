import { japanCruiseOrLandTourPost } from "@/components/static-blogs/blogs/japan-cruis-or-land-tour";
import { peruItineraryPost } from "@/components/static-blogs/blogs/machu-picchu-cusco-the-sacred-valley-and-rainbow-mountain";
import { whyWorkingWithATravelAdvisorPost } from "@/components/static-blogs/blogs/why-working-with-a-travel-advisor-Is-the-best-investment";
import { whyUseTravelAdvisorPost } from "@/components/static-blogs/blogs/Why Use a Travel Advisor";

const BLOG_API_URL = "https://backend-tiki-travel-website.vercel.app/site/blog";
const DEFAULT_PAGE_LIMIT = 100;

const staticBlogPosts = [
  whyWorkingWithATravelAdvisorPost,
  japanCruiseOrLandTourPost,
  whyUseTravelAdvisorPost,
  peruItineraryPost,
];

function mergeBlogPosts(remotePosts = []) {
  const postsBySlug = new Map();

  remotePosts.forEach((post) => {
    if (post?.slug) {
      postsBySlug.set(post.slug, post);
    }
  });

  staticBlogPosts.forEach((post) => {
    if (post?.slug) {
      postsBySlug.set(post.slug, post);
    }
  });

  return Array.from(postsBySlug.values());
}

async function fetchBlogPage(page, fetchOptions) {
  const response = await fetch(
    `${BLOG_API_URL}?limit=${DEFAULT_PAGE_LIMIT}&page=${page}`,
    {
      ...fetchOptions,
      signal: AbortSignal.timeout(5000),
    }
  );

  if (!response.ok) {
    return null;
  }

  return response.json();
}

export default async function GetAllPostData(options = {}) {
  const fetchOptions =
    options?.cache === "no-store"
      ? { cache: "no-store" }
      : { next: { revalidate: 200 } };

  try {
    const firstPageData = await fetchBlogPage(1, fetchOptions);

    if (!firstPageData) {
      return { data: mergeBlogPosts() };
    }

    const remotePosts = Array.isArray(firstPageData?.data)
      ? [...firstPageData.data]
      : [];
    const totalPages = Number(firstPageData?.pagination?.totalPages) || 1;

    if (totalPages > 1) {
      const remainingPages = await Promise.all(
        Array.from({ length: totalPages - 1 }, (_, index) =>
          fetchBlogPage(index + 2, fetchOptions)
        )
      );

      remainingPages.forEach((pageData) => {
        if (Array.isArray(pageData?.data)) {
          remotePosts.push(...pageData.data);
        }
      });
    }

    return {
      ...firstPageData,
      data: mergeBlogPosts(remotePosts),
    };
  } catch (error) {
    return { data: mergeBlogPosts() };
  }
}
