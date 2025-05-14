import ContactSection from "@/components/contact-us/ContactSection";
import FAQ from "@/components/contact-us/FAQ";
import GoogleMapSection from "@/components/contact-us/GoogleMapSection";
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
