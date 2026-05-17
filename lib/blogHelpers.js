export function stripHtml(value = "") {
  return String(value)
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function getBlogExcerpt(blog, limit = 180) {
  const source = blog?.excerpt || blog?.metaDescription || blog?.body || "";
  const text = stripHtml(source);

  if (text.length <= limit) {
    return text;
  }

  return `${text.slice(0, limit).replace(/\s+\S*$/, "")}...`;
}

export function getPublishedBlogPosts(posts = [], limit) {
  const publishedPosts = posts
    .filter((post) => post?.published === true)
    .sort((a, b) => {
      const priorityDiff =
        (b?.latestBlogPriority || 0) - (a?.latestBlogPriority || 0);

      if (priorityDiff !== 0) {
        return priorityDiff;
      }

      return new Date(b?.createdAt || 0) - new Date(a?.createdAt || 0);
    });

  return typeof limit === "number" ? publishedPosts.slice(0, limit) : publishedPosts;
}

export function getBlogBySlug(posts = [], slug) {
  return posts.find(
    (post) => post?.slug === slug || post?.aliases?.includes(slug)
  );
}

export function getBlogImage(blog) {
  return {
    url: blog?.featuredImage?.image?.url || "/assets/shared/blog-1.png",
    alt:
      blog?.featuredImage?.altText ||
      blog?.title ||
      "Tiki Travel Agency blog image",
    title:
      blog?.featuredImage?.title ||
      blog?.title ||
      "Tiki Travel Agency blog image",
    caption: blog?.featuredImage?.caption,
    description: blog?.featuredImage?.description,
  };
}
