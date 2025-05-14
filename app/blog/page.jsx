import React from "react";

import CallToAction from "@/components/shared/CallToAction";
import BlogMainSection from "@/components/blog/BlogMainSection";
import BreadcrumbSection from "@/components/shared/BreadcrumbSection";

export const metadata = {
  title: "Tiki Travel Agency",
  description:
    "Tiki Travel Agency creates customized vacation itineraries for travel to Hawaii and Asia. Tiki Travel Agency believes that travel should be more than just a vacation; it should be an immersive adventure. ",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-USA",
    },
  },
  openGraph: {
    url: "https://www.tikitravelagency.com",
    images: "/opengraph-image.jpg",
    locale: "en_US",
    type: "website",
  },
};

const page = async () => {
  return (
    <>
      <BreadcrumbSection
        bgImage={"/assets/shared/blog-breadcrumb-bg-1.png"}
        title={"Blogs"}
      />

      <BlogMainSection />
      <CallToAction />
    </>
  );
};

export default page;
