import React from "react";

import CallToAction from "@/components/shared/CallToAction";
import BlogMainSection from "@/components/blog/BlogMainSection";
import BreadcrumbSection from "@/components/shared/BreadcrumbSection";

export const metadata = {
  title: "",
  description: "",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-USA",
    },
  },
  openGraph: {
    images: "/opengraph-image.jpg",
  },
};

const page = async () => {
  return (
    <>
      <BreadcrumbSection
        bgImage={"/assets/shared/blog-breadcrumb-bg.png"}
        title={"Blogs"}
      />

      <BlogMainSection />
      <CallToAction />
    </>
  );
};

export default page;
