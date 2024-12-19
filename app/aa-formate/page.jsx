import LightImageGallery from "@/components/shared/LightImageGallery";

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
      <LightImageGallery />
    </>
  );
};

export default page;
