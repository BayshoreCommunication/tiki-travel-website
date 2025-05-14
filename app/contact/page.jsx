import ContactSection from "@/components/contact-us/ContactSection";
import FAQ from "@/components/contact-us/FAQ";
import GoogleMapSection from "@/components/contact-us/GoogleMapSection";
import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import CallToAction from "@/components/shared/CallToAction";

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
        bgImage={"/assets/shared/contact-breadcrumb-bg-1.png"}
        title={"Contact Us"}
      />
      <ContactSection />
      {/* <GoogleMapSection /> */}
      <FAQ />
    </>
  );
};

export default page;
