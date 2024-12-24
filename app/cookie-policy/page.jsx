import CookiePolicy from "@/components/cookie-policy/CookiePolicy";
import HeroSection from "@/components/home/HeroSection";
import CallToAction from "@/components/shared/CallToAction";
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
    images: "/opengraph-image.jpg",
  },
};

const page = () => {
  return (
    <>
      <CookiePolicy />
      <CallToAction />
    </>
  );
};

export default page;
