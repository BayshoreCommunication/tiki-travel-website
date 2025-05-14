// import HeroSection from "@/components/home/HeroSection";
import HeroSection from "@/components/home/HeroSection";
import CallToAction from "@/components/shared/CallToAction";
import TermsAndConditions from "@/components/terms-and-conditions/TermsAndConditions";
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
      <TermsAndConditions />
      <CallToAction />
    </>
  );
};

export default page;
