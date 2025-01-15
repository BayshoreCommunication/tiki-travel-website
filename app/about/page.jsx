// import Clients from "@/components/shared/Clients";

import AboutUsSection from "@/components/about-us/AboutUsSection.jsx";
import NewsLetter from "@/components/about-us/NewsLetter.jsx";
import OurValues from "@/components/about-us/OurValues.jsx";
import Partners from "@/components/about-us/Partners.jsx";
import WhatPeopleSay from "@/components/home/WhatPeopleSay.jsx";
import BreadcrumbSection from "@/components/shared/BreadcrumbSection.jsx";
import CallToAction from "@/components/shared/CallToAction.jsx";

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
        bgImage={"/assets/shared/about-breadcrumb.png"}
        title={"About Us"}
      />
      <AboutUsSection />
      <OurValues />
      <Partners />
      <WhatPeopleSay />
      <CallToAction />
      <NewsLetter />
    </>
  );
};

export default page;
