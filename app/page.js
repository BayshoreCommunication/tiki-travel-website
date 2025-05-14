import AboutDetails from "@/components/home/AboutDetails";
import FeaturedSection from "@/components/home/FeaturedSection";
import HeroSection from "@/components/home/HeroSection";
import AboutUsSection from "@/components/home/AboutUsSection";
import WhatPeopleSay from "@/components/home/WhatPeopleSay";
import CallToAction from "@/components/shared/CallToAction";
import BlogSection from "@/components/home/BlogSection";

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

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <FeaturedSection />
      <AboutUsSection />
      <AboutDetails />
      <WhatPeopleSay />
      <CallToAction />
      <BlogSection />
    </main>
  );
}
