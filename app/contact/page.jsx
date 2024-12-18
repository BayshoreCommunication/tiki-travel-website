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
    images: "/opengraph-image.jpg",
  },
};

const page = () => {
  return (
    <>
      <BreadcrumbSection title={"Contact Us"} />
      <ContactSection />
      <GoogleMapSection />
      <FAQ />
    </>
  );
};

export default page;
