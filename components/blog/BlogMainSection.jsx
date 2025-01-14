import Image from "next/image";
import React from "react";
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
        {/* Hero Section */}
        <div className="mb-4 md:mb-8 flex flex-col lg:flex-row gap-3 lg:gap-8 justify-center lg:justify-between items-center">
          <div>
            <ScrollMotionEffect effect="fade-up" duration="2000">
              <h1 className="text-3xl md:text-5xl font-semibold">
                Follow our adventures!
              </h1>
            </ScrollMotionEffect>
          </div>
          <div className="w-full lg:w-[56%] bg-white">
            <ScrollMotionEffect effect="fade-up" duration="2000">
              <p className="text-base lg:text-lg text-center lg:text-start">
                Welcome to Tiki Travel Agency! We’re excited to assist you in
                exploring the world on your own terms.” From tips to guides and
                stories, our blog has all you need. Let’s make travel easy and
                unforgettable—explore with us!
              </p>
            </ScrollMotionEffect>
          </div>
        </div>

        {/* Blog Posts Section */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Blog Grid */}
          <div className="flex flex-col gap-8 w-[66%] shrink-0">
            {blogPostData?.data
              ?.filter((pub) => pub.published === true)
              ?.map((blogs, index) => (
                <div key={index} className="group border block bg-white  ">
                  <div className="w-full h-[400px] overflow-hidden relative">
                    <Image
                      src={blogs?.featuredImage?.image?.url}
                      alt={blogs?.featuredImage?.altText}
                      layout="fill"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      priority
                    />
                  </div>
                  <div className="px-10 py-10">
                    <div className="text-sm text-gray-500 flex items-center justify-between">
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
                    <p className="text-base md:text-lg text-start mt-3 line-clamp-3">
                      {parse(blogs?.body)}
                    </p>

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
              ))}
          </div>

          {/* Sidebar Section */}
          <div>
            <div className="p-8 bg-slate-200">
              <Image
                src="/assets/shared/april.png"
                alt="april"
                width={350}
                height={400}
                className="w-full"
              />
              <h2 className="text-3xl font-mono mt-4 text-center">
                Shinjuku April
              </h2>
            </div>
            <div className="mt-4">
              <p className="mb-3">
                Why do I love traveling to Japan? It’s such a unique mix of old
                and new. One day you’re wandering through peaceful temples in
                Kyoto, and the next, you’re exploring Tokyo’s vibrant
                neighborhoods filled with lights, energy, and life.
              </p>
              <p>
                And the food? It’s everywhere, and there’s always something new
                to try—whether it’s a steaming bowl of ramen or a creamy matcha
                dessert. The people are kind, the scenery is stunning, and every
                day feels like a new adventure. Japan has a way of surprising
                you at every turn.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogMainSection;
