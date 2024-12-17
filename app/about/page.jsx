// import Clients from "@/components/shared/Clients";

import AboutUsSection from "@/components/about-us/AboutUsSection";
import OurValues from "@/components/about-us/OurValues";
import Partners from "@/components/about-us/Partners";
import WhatPeopleSay from "@/components/home/WhatPeopleSay";
import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import CallToAction from "@/components/shared/CallToAction";

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
      <BreadcrumbSection
        bgImage={"/assets/shared/breadcrumb-bg.png"}
        title={"About Us"}
      />
      <AboutUsSection />
      <OurValues />
      <Partners />
      <WhatPeopleSay />
      <CallToAction />
    </>
  );
};

export default page;
