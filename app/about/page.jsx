// import Clients from "@/components/shared/Clients";

import AboutUsSection from "@/components/about-us/AboutUsSection.jsx";
import NewsLetter from "@/components/about-us/NewsLetter.jsx";
import OurValues from "@/components/about-us/OurValues.jsx";
import Partners from "@/components/about-us/Partners.jsx";
import WhatPeopleSay from "@/components/home/WhatPeopleSay.jsx";
import BreadcrumbSection from "@/components/shared/BreadcrumbSection.jsx";
import CallToAction from "@/components/shared/CallToAction.jsx";

export const metadata = {
  title: "Tiki Travel Agency",
  description:
    "Tiki Travel Agency creates customized vacation itineraries for travel to Hawaii and Asia. Tiki Travel Agency believes that travel should be more than just a vacation; it should be an immersive adventure.",
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
