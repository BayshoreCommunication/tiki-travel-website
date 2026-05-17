import { japanCruiseOrLandTourPost } from "@/components/static-blogs/blogs/japan-cruis-or-land-tour";

const staticBlogPosts = [japanCruiseOrLandTourPost];

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

export default async function GetAllPostData() {
  try {
    const bloData = await fetch(
      "https://backend-tiki-travel-website.vercel.app/site/blog",
      {
        next: { revalidate: 200 },
      }
    );

    if (!bloData.ok) {
      return { data: mergeBlogPosts() };
    }

    const remoteBlogData = await bloData.json();

    return {
      ...remoteBlogData,
      data: mergeBlogPosts(remoteBlogData?.data),
    };
  } catch (error) {
    return { data: mergeBlogPosts() };
  }
}
