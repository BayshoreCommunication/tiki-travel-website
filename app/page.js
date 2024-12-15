import AboutDetails from "@/components/home/AboutDetails";
import FeaturedSection from "@/components/home/FeaturedSection";
import HeroSection from "@/components/home/HeroSection";
import AboutUsSection from "@/components/home/AboutUsSection";
import WhatPeopleSay from "@/components/home/WhatPeopleSay";
import CallToAction from "@/components/shared/CallToAction";
import BlogSection from "@/components/home/BlogSection";

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
