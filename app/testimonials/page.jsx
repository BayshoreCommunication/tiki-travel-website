import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import CallToAction from "@/components/shared/CallToAction";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";
import React from "react";

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
    url: "https://www.tikitravelagency.com",
    images: "/opengraph-image.jpg",
    locale: "en_US",
    type: "website",
  },
};

const page = () => {
  return (
    <>
      <BreadcrumbSection
        bgImage={"/assets/shared/testimonials.jpg"}
        title={"Testimonials"}
      />
      <TestimonialsSection />
      <CallToAction />
    </>
  );
};

export default page;
