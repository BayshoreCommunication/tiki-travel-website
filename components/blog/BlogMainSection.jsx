import Image from "next/image";
import React from "react";
import SectionLayout from "../shared/SectionLayout";
import Link from "next/link";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";
import GetAllPostData from "@/lib/GetAllPostData";
import parse from "html-react-parser";

const BlogMainSection = async () => {
  const blogPostData = await GetAllPostData();

  const postDate = (date) => {
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return formattedDate;
  };

  return (
    <section className="bg-white">
      <div className="container py-10 md:py-20">
        <div>
          <ScrollMotionEffect effect="fade-up" duration="2000">
            <h2 className="text-stone-950 !font-semibold text-3xl md:text-5xl mb-1 md:mb-12 text-center">
              Our Recent Blog Post
            </h2>
          </ScrollMotionEffect>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8  justify-center text-center h-full">
              {blogPostData?.data
                ?.filter((pub, no) => pub.published === true)
                ?.map((blogs, index) => (
                  <ScrollMotionEffect
                    effect="fade-up"
                    duration="2000"
                    key={index}
                  >
                    <Link href={`/blog/${blogs?.slug}`} key={index}>
                      <div className=" bg-white shadow-md rounded-md">
                        <Image
                          width={1800}
                          height={300}
                          src={blogs?.featuredImage?.image?.url}
                          alt={blogs?.featuredImage?.altText}
                          className="bg-center bg-cover"
                        />
                        <div className="pt-2 pb-8 px-4">
                          <div className="text-sm text-gray-500 flex items-center mt-1 justify-between">
                            <span> {blogs?.category || "Blog post"}</span>
                            <span> {postDate(blogs?.createdAt)}</span>
                          </div>
                          <h1 className="font-semibold  text-2xl text-black text-center md:text-left mt-5 line-clamp-2">
                            {blogs?.title}
                          </h1>
                          <div className="text-md text-black text-center md:text-left mt-2 line-clamp-2 ">
                            {parse(blogs?.body)}
                          </div>
                          <div className="mt-6 flex justify-center md:justify-start">
                            <Link
                              href={`/blog/${blogs?.slug}`}
                              className="text-secondary font-normal text-lg bg-none px-4 py-2 rounded-full hover:bg-secondary hover:text-white border-2 border-secondary  "
                            >
                              Read More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </ScrollMotionEffect>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogMainSection;
