import React from "react";

import GetAllPostData from "@/lib/GetAllPostData";
import Head from "next/head";
import CallToAction from "@/components/shared/CallToAction";
import BlogMainSection from "@/components/blog/BlogMainSection";
import BreadcrumbSection from "@/components/shared/BreadcrumbSection";

const page = async () => {
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
    <>
      <BreadcrumbSection
        bgImage={"/assets/shared/blog-breadcrumb-bg.png"}
        title={"Blogs"}
      />

      <BlogMainSection blogPostData={blogPostData} />
      <CallToAction />
    </>
  );
};

export default page;
