import React from "react";
import SectionLayout from "../shared/SectionLayout";
import CardMotion from "../motion/CardMotion";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import GetAllPostData from "@/lib/GetAllPostData";
import Link from "next/link";

const BlogSection = async () => {
  const blogPostData = await GetAllPostData();

  const postDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const renderBlogPosts = () => {
    return blogPostData?.data
      ?.filter((pub, index) => pub.published && index < 3)
      ?.map((blog, index) => (
        <Link href={`/blog/${blog.slug}`} key={index}>
          <Card shadow="sm" radius="none" isPressable>
            <CardBody className="p-0">
              <Image
                shadow="none"
                radius="none"
                width="100%"
                className="w-full object-cover h-[300px]"
                src={blog.featuredImage?.image?.url}
                alt={blog.featuredImage?.altText}
              />
            </CardBody>
            <CardFooter className="text-small block text-left">
              <p className="text-default-500 block">
                {postDate(blog.createdAt)}
              </p>
              <h2 className="text-default-500 text-lg font-bold line-clamp-2 mt-2">
                {blog.title}
              </h2>
              <div className="flex justify-center md:justify-start mx-auto items-center  my-4">
                <Link
                  href={`/blog/${blog.slug}`}
                  className="text-secondary font-normal text-lg bg-none px-4 py-1 rounded-full hover:bg-secondary hover:text-white border-2 border-secondary "
                >
                  Read More
                </Link>
              </div>
            </CardFooter>
          </Card>
        </Link>
      ));
  };

  return (
    <SectionLayout bg="bg-slate-50">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <CardMotion
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 1.1 },
            }}
            initial={{ opacity: 0, y: 100 }}
          >
            <div className="">
              <h2
                className={`text-stone-950 font-bold text-3xl md:text-5xl mt-5 mb-4 text-center md:text-left`}
              >
                Our Recent Blogs
              </h2>
            </div>
          </CardMotion>
          <CardMotion
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 1.1 },
            }}
            initial={{ opacity: 0, y: 100 }}
          >
            <div className="flex justify-end md:visible invisible">
              <div className="mt-3"></div>
              <Link
                href={"/blog"}
                className="text-primary font-medium text-xl py-2 border-b-2 border-primary hover:text-secondary hover:border-secondary transition-all duration-500 "
              >
                Read All Blogs
              </Link>
            </div>
          </CardMotion>
        </div>
        <CardMotion
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1.1 },
          }}
          initial={{ opacity: 0, y: 100 }}
        >
          <div className="gap-4 grid grid-cols-1 sm:grid-cols-3 mt-0 md:mt-12">
            {renderBlogPosts()}
          </div>
        </CardMotion>
        <CardMotion
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1.1 },
          }}
          initial={{ opacity: 0, y: 100 }}
        >
          <div className="flex justify-center md:invisible mt-12 md:mt-[-60px] visible">
            <Link
              href={"/blog"}
              className="text-secondary font-normal text-lg bg-none px-4 py-2 rounded-full hover:bg-secondary hover:text-white border-2 border-secondary  "
            >
              Read All Blogs
            </Link>
          </div>
        </CardMotion>
      </div>
    </SectionLayout>
  );
};

export default BlogSection;