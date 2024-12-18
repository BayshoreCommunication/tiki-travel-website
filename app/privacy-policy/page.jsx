import HeroSection from "@/components/home/HeroSection";
import PrivacyPolicy from "@/components/privacy-policy/PrivacyPolicy";
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
      <HeroSection />
      <PrivacyPolicy />
      <CallToAction />
    </>
  );
};

export default page;
