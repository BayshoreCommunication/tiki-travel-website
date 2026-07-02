import GetAllPostData from "@/lib/GetAllPostData";
import { getPublishedBlogPosts } from "@/lib/blogHelpers";
import { vacationPackagesData } from "@/config/data";

export default async function sitemap() {
  const baseUrl = "https://www.tikitravelagency.com";

  // 1. Static Routes
  const staticRoutes = [
    "",
    "/about",
    "/blog",
    "/contact",
    "/cookie-policy",
    "/disclaimers",
    "/privacy-policy",
    "/terms-and-conditions",
    "/testimonials",
    "/vacation-destinations",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  // 2. Dynamic Blog Routes
  let blogRoutes = [];
  try {
    const blogPostData = await GetAllPostData();
    const publishedBlogs = getPublishedBlogPosts(blogPostData?.data || []);
    blogRoutes = publishedBlogs.map((blog) => ({
      url: `${baseUrl}/blog/${blog.slug}`,
      lastModified: new Date(blog.updatedAt || blog.createdAt || new Date()).toISOString(),
      changeFrequency: "weekly",
      priority: 0.6,
    }));
  } catch (error) {
    console.error("Error generating blog routes for sitemap:", error);
  }

  // 3. Dynamic Vacation Package Routes
  const packageRoutes = (vacationPackagesData || []).map((pkg) => ({
    url: `${baseUrl}/vacation-destinations/${pkg.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes, ...packageRoutes];
}
