import LightImageGallery from "@/components/shared/TikiLightImageGallery";
import Testing from "@/components/testing/Testing";

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
      {/* <BreadcrumbSection /> */}
      <Testing />
    </>
  );
};

export default page;
