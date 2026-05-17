import Image from "next/image";
import GetAllPostData from "@/lib/GetAllPostData";
import parse from "html-react-parser";
import SectionLayout from "@/components/shared/SectionLayout";
import CardMotion from "@/components/motion/CardMotion";
import Link from "next/link";
import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import {
  getBlogBySlug,
  getBlogExcerpt,
  getBlogImage,
  getPublishedBlogPosts,
} from "@/lib/blogHelpers";

const richTextCss = `
.blog-rich-text h1,
.blog-rich-text h2,
.blog-rich-text p,
.blog-rich-text br,
.blog-rich-text nav {
  padding-top: 10px;
  padding-bottom: 10px;
  line-height: normal;
}

.blog-rich-text h1 {
  font-size: 40px;
}

.blog-rich-text h2 {
  font-size: 25px;
}

.blog-rich-text p {
  font-size: 17px;
  padding-top: 6px;
  padding-bottom: 6px;
}

.blog-rich-text ul {
  list-style-type: disc;
}

`;

export async function generateMetadata({ params }) {
  const blogPostData = await GetAllPostData();

  const blogDetails = getBlogBySlug(blogPostData?.data, params.slug);

  if (!blogDetails) {
    return {
      title: "Blog not found",
      description: "No blog post available.",
    };
  }

  const pageTitle = blogDetails?.metaTitle || blogDetails?.title;
  const shortDescription =
    blogDetails?.metaDescription || getBlogExcerpt(blogDetails, 220);
  const image = getBlogImage(blogDetails);

  return {
    title: pageTitle,
    description: shortDescription,
    alternates: {
      canonical: `/blog/${blogDetails?.slug}`,
    },
    openGraph: {
      title: pageTitle,
      description: shortDescription,
      images: [
        {
          url: image.url,
          alt: image.alt,
        },
      ],
      url: `https://tikitravelagency.com/blog/${blogDetails?.slug}`,
      type: "article",
      siteName: "Tiki Travel Agency",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: shortDescription,
      images: [image.url],
    },
  };
}

const page = async ({ params }) => {
  const blogPostData = await GetAllPostData();

  const currentBlog = getBlogBySlug(blogPostData?.data, params.slug);
  const recentBlogs = getPublishedBlogPosts(blogPostData?.data);

  if (!currentBlog) {
    return (
      <div>
        <h1>Blog not found</h1>
      </div>
    );
  }

  const postDate = (date) => {
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return formattedDate;
  };

  const title = currentBlog?.title;
  const ContentComponent = currentBlog?.ContentComponent;

  return (
    <>
      <style>{richTextCss}</style>
      <BreadcrumbSection
        bgImage={"/assets/shared/blog-breadcrumb-bg-1.png"} // Dynamic Breadcrumb Background
        title={title} // Dynamic Title
        subTitle={"Blog Details"}
      />

      <SectionLayout bg="bg-white">
        <CardMotion
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1.1,
            },
          }}
          initial={{
            opacity: 0,
            y: 100,
          }}
        >
          <div className="grid gap-12 mb-10 gird-col-1 sm:grid-cols-3">
            <div className="col-span-2">
              {ContentComponent ? (
                <ContentComponent post={currentBlog} />
              ) : (
                <DefaultBlogContent blog={currentBlog} postDate={postDate} />
              )}
            </div>

            <div className="col-span-2 sm:col-span-1 h-[100%] md:h-[1000px] overflow-y-scroll overflow-x-hidden  p-3 rounded-lg">
              <h2 className="font-medium text-3xl text-secondary border-b-2 border-gray-200 pb-4 mb-6">
                Recent Blogs
              </h2>
              {recentBlogs?.map((blogs, index) => {
                const image = getBlogImage(blogs);

                return (
                  <Link
                    className="flex md:flex-col xl:flex-row items-start xl:items-center gap-3 py-4 border-gray-200 border-b"
                    key={index}
                    href={`/blog/${blogs?.slug}`}
                  >
                    <div className="relative h-[88px] w-[112px] shrink-0 overflow-hidden bg-slate-100 lg:w-[130px]">
                      <Image
                        fill
                        sizes="130px"
                        src={image.url}
                        alt={image.alt}
                        title={image.title}
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col gap-px">
                      <h4 className="text-base lg:text-lg font-medium text-black text-left leading-tight line-clamp-2">
                        {blogs?.title}
                      </h4>
                      <p className="py-0 text-sm line-clamp-2">
                        {getBlogExcerpt(blogs, 80)}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </CardMotion>
      </SectionLayout>
    </>
  );
};

export default page;

function DefaultBlogContent({ blog, postDate }) {
  const image = getBlogImage(blog);

  return (
    <>
      <div className="flex items-center justify-between">
        <p className="text-[.9rem] md:text-[1rem] text-secondary text-left italic mt-4 ">
          {blog?.category || "Blog Post"}
        </p>
        <p className="text-[.9rem] md:text-[1rem] text-secondary text-left italic mt-4 ">
          {postDate(blog?.createdAt)}
        </p>
      </div>
      <h2
        className={`mb-0 md:mb-4 text-2xl md:text-4xl font-bold tracking-normal text-left text-[#1B2639]`}
      >
        {blog?.title}
      </h2>
      <figure>
        <Image
          width={1000}
          height={300}
          src={image.url}
          alt={image.alt}
          title={image.title}
          className="w-full h-auto bg-center bg-cover"
        />
        {image.caption ? (
          <figcaption className="mt-2 text-sm italic text-secondary/70">
            {image.caption}
          </figcaption>
        ) : null}
      </figure>

      <div className="mt-2 text-md blog-rich-text">{parse(blog?.body || "")}</div>
    </>
  );
}
