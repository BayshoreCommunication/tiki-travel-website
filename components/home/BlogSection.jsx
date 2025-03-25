import Image from "next/image";
import React from "react";
import Link from "next/link";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";
import { MdOutlineDateRange } from "react-icons/md";
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
          <div className="mb-3 md:mb-8 flex flex-col lg:flex-row gap-3 lg:gap-8 justify-center lg:justify-between items-center ">
            <div>
              <ScrollMotionEffect effect="fade-up" duration="2000">
                <h2 className="text-3xl md:text-5xl font-semibold">
                  See our latest blog!
                </h2>
              </ScrollMotionEffect>
            </div>
            <div className="hidden md:block">
              <ScrollMotionEffect effect="fade-up" duration="2000">
                <div className="flex justify-end">
                  <Link
                    href="/blog"
                    className="text-primary font-medium text-base lg:text-xl py-2 px-6 border-2 border-primary hover:text-white hover:bg-primary transition-all duration-500 "
                  >
                    Read All Blogs
                  </Link>
                </div>
              </ScrollMotionEffect>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8  justify-center text-center h-full">
              {blogPostData?.data
                ?.filter((pub) => pub.published === true)
                ?.slice(-3) // Slices the last 3 blog posts
                ?.map((blogs, index) => (
                  <Link
                    href={`/blog/${blogs?.slug}`}
                    key={index}
                    className="group border block bg-white  "
                  >
                    <div className="w-full h-[250px] overflow-hidden relative">
                      <Image
                        src={blogs?.featuredImage?.image?.url}
                        alt={blogs?.featuredImage?.altText}
                        layout="fill"
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        priority
                      />
                    </div>
                    <div className="px-6 py-6">
                      <div className="text-sm text-gray-500 flex items-center justify-between">
                        <div className="flex items-center gap-1 text-base">
                          <MdOutlineDateRange />
                          <p className="text-base md:text-lg">
                            {postDate(blogs?.createdAt)}
                          </p>
                        </div>
                      </div>
                      <h1 className="text-2xl font-medium text-black mt-2 text-start line-clamp-2">
                        {blogs?.title}
                      </h1>
                      <p className="text-base md:text-lg text-start mt-2 line-clamp-3">
                        {parse(blogs?.body)}
                      </p>

                      <div className="mt-3 flex justify-start">
                        <Link
                          href={`/blog/${blogs?.slug}`}
                          className="text-primary font-medium text-lg py-px border-b-2 border-primary hover:text-secondary hover:border-secondary transition-all duration-500"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
          <ScrollMotionEffect effect="fade-up" duration="2000">
            <div className="flex justify-center  md:hidden visible md:invisible mt-10">
              <Link
                href={"#"}
                className="text-primary font-medium text-base lg:text-xl py-2 px-6 border-2 border-primary hover:text-white hover:bg-primary transition-all duration-500 "
              >
                Read All Blogs
              </Link>
            </div>
          </ScrollMotionEffect>
        </div>
      </div>
    </section>
  );
};

export default BlogMainSection;
