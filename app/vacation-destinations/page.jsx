import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import VacationPackages from "@/components/vacation-destinations/VacationPackages";

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
        bgImage={"/assets/vacation-destinations/vd-breadcrumb-bg1.png"}
        title={"Vacation Destinations"}
      />
      <VacationPackages />
    </>
  );
};

export default page;
