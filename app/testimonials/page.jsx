import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import CallToAction from "@/components/shared/CallToAction";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";
import React from "react";

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
    images: "/opengraph-image.jpg",
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
