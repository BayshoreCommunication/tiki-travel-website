import Image from "next/image";
import React from "react";
import SectionLayout from "../shared/SectionLayout";
import Link from "next/link";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";
// import GetAllPostData from "@/lib/GetAllPostData";
import parse from "html-react-parser";
import { MdOutlineDateRange } from "react-icons/md";

const BlogMainSection = async () => {
  // const blogPostData = await GetAllPostData();

  // const postDate = (date) => {
  //   const formattedDate = new Date(date).toLocaleDateString("en-US", {
  //     year: "numeric",
  //     month: "long",
  //     day: "numeric",
  //   });
  //   return formattedDate;
  // };

  return (
    <section className="bg-white">
      <div className="container py-10 md:py-14">
        <div>
          <div className="mb-4 md:mb-8 flex flex-col lg:flex-row gap-3 lg:gap-8 justify-center lg:justify-between items-center ">
            <div>
              <ScrollMotionEffect effect="fade-up" duration="2000">
                <h1 className="text-3xl md:text-5xl font-semibold ">
                  Follow our adventures!
                </h1>
              </ScrollMotionEffect>
            </div>
            <div className="w-full lg:w-[56%]  bg-white  ">
              <ScrollMotionEffect effect="fade-up" duration="2000">
                <p className="text-base lg:text-lg  text-center lg:text-start">
                  Welcome to Tiki Travel Agency! We’re here to help you “Travel
                  the world, your way.” From tips to guides and stories, our
                  blog has all you need. Let’s make travel easy and
                  unforgettable—explore with us!
                </p>
              </ScrollMotionEffect>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="flex flex-col gap-8 w-[66%] shrink-0">
              {/* {blogPostData?.data
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
                          <div className="text-sm text-gray-500 flex items-center justify-between">
                            <span> {blogs?.category || "Blog post"}</span>
                            <div className="flex items-center gap-1 text-base">
                              <MdOutlineDateRange />

                              <p className="text-base md:text-lg">
                                {postDate(blogs?.createdAt)}
                              </p>
                            </div>
                          </div>
                          <h1 className="text-2xl font-medium text-black mt-3 text-start line-clamp-2">
                            {blogs?.title}
                          </h1>
                          <div className="text-base md:text-lg text-start mt-3 md:text-left  line-clamp-3 ">
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
                ))} */}
              <div className="group border block">
                <div>
                  <div className="w-full h-[400px] overflow-hidden relative">
                    <Image
                      src="/assets/shared/blog-1.png"
                      alt="Blog Image"
                      layout="fill"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      priority
                    />
                  </div>

                  <div className="px-10 py-10">
                    <div className="text-sm text-gray-500 flex items-center justify-between">
                      <div className="flex items-center gap-1 text-base">
                        <MdOutlineDateRange />
                        <p className="text-base md:text-lg">20 December 2024</p>
                      </div>
                    </div>
                    <h1 className="text-2xl font-medium text-black mt-3 text-start line-clamp-2">
                      How to Plan the Ultimate Backpacking Adventure
                    </h1>
                    <p className="text-base md:text-lg text-start mt-3 md:text-left line-clamp-3">
                      Whether you're seeking thrilling mountain treks, serene
                      beach escapes, or cultural immersions, we offer
                      tailor-made travel experiences that ignite your passion...
                    </p>
                    <div className="mt-5 flex justify-start">
                      <Link
                        href="#"
                        className="text-primary font-medium text-lg py-px border-b-2 border-primary hover:text-secondary hover:border-secondary transition-all duration-500"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group border block">
                <div>
                  <div className="w-full h-[400px] overflow-hidden relative">
                    <Image
                      src="/assets/shared/blog-1.png"
                      alt="Blog Image"
                      layout="fill"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      priority
                    />
                  </div>

                  <div className="px-10 py-10">
                    <div className="text-sm text-gray-500 flex items-center justify-between">
                      <div className="flex items-center gap-1 text-base">
                        <MdOutlineDateRange />
                        <p className="text-base md:text-lg">20 December 2024</p>
                      </div>
                    </div>
                    <h1 className="text-2xl font-medium text-black mt-3 text-start line-clamp-2">
                      How to Plan the Ultimate Backpacking Adventure
                    </h1>
                    <p className="text-base md:text-lg text-start mt-3 md:text-left line-clamp-3">
                      Whether you're seeking thrilling mountain treks, serene
                      beach escapes, or cultural immersions, we offer
                      tailor-made travel experiences that ignite your passion...
                    </p>
                    <div className="mt-5 flex justify-start">
                      <Link
                        href="#"
                        className="text-primary font-medium text-lg py-px border-b-2 border-primary hover:text-secondary hover:border-secondary transition-all duration-500"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className="p-8 bg-slate-200">
                  <Image
                    src="/assets/shared/april.png"
                    alt="april"
                    width={350}
                    height={400}
                    className="w-full"
                  ></Image>
                  <h2 className="text-3xl font-mono mt-4 text-center">
                    Shinjuku April
                  </h2>
                </div>
                <div className="mt-4">
                  <p className="mb-3">
                    Aloha! I’m April Espinosa, the heart and soul behind Tiki
                    Travel Agency. My journey into the world of travel began
                    with a leap of faith – my husband and I sold everything and
                    moved to Hawaii in pursuit of a life filled with spontaneity
                    and adventure.
                  </p>
                  <p>
                    From there, fueled by a deep-seated passion for unveiling
                    the beauty of Hawaii, our travels have carried us across the
                    vast expanse of the Pacific, from the enchanting shores of
                    Australia and New Zealand to the bustling streets of Japan,
                    with Vietnam next on our horizon.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogMainSection;
