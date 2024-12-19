import Image from "next/image";
import React from "react";
import SectionLayout from "../shared/SectionLayout";
import Link from "next/link";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";
import GetAllPostData from "@/lib/GetAllPostData";
import parse from "html-react-parser";
import { MdOutlineDateRange } from "react-icons/md";

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
                    href={"/blog"}
                    className="text-primary font-medium text-base lg:text-xl py-2 px-6 border-2 border-primary hover:text-white hover:bg-primary transition-all duration-500 "
                  >
                    Read All Blogs
                  </Link>
                </div>
              </ScrollMotionEffect>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8  justify-center text-center h-full">
              {blogPostData?.data
                ?.filter((pub, no) => pub.published === true)
                ?.map((blogs, index) => (
                  <ScrollMotionEffect
                    effect="fade-up"
                    duration="2000"
                    key={index}
                  >
                    <div className="group" key={index}>
                      <div className="flex flex-col md:flex-row  gap-4">
                        <div className="relative w-full h-[280px] md:max-w-[260px] overflow-hidden shrink-0">
                          <Image
                            src={
                              blogs?.featuredImage?.image?.url ||
                              "/fallback-image.png"
                            }
                            alt={
                              blogs?.featuredImage?.altText || "Featured Image"
                            }
                            layout="fill"
                            className="object-cover object-center group-hover:scale-105 duration-500"
                            priority
                          />
                        </div>

                        <div className="">
                          <div className="text-sm text-gray-500 flex items-center mt-1 justify-between">
                            {/* <span> {blogs?.category || "Blog post"}</span> */}
                            <div className="flex items-center gap-1 text-base">
                              <MdOutlineDateRange />

                              <p className="text-base md:text-lg">
                                {postDate(blogs?.createdAt)}
                              </p>
                            </div>
                          </div>
                          <h1 className="text-2xl font-medium text-secondary mt-3 text-start line-clamp-2">
                            {blogs?.title}
                          </h1>
                          <div className="text-base md:text-lg  mt-3 text-left  line-clamp-3 ">
                            {parse(blogs?.body)}
                          </div>
                          <div className="mt-5 flex justify-start">
                            <Link
                              href={`/blog/${blogs?.slug}`}
                              className="text-primary font-medium text-lg py-px border-b-2 border-primary hover:text-secondary hover:border-secondary transition-all duration-500"
                            >
                              Read More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollMotionEffect>
                ))}
            </div>
          </div>
          <ScrollMotionEffect effect="fade-up" duration="2000">
            <div className="flex justify-center  md:hidden visible md:invisible mt-10">
              <Link
                href={"/blog"}
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
