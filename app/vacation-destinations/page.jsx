import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import VacationPackages from "@/components/vacation-destinations/VacationPackages";

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
        bgImage={"/assets/vacation-destinations/vd-breadcrumb-bg1.png"}
        title={"Vacation Destinations"}
      />
      <VacationPackages />
    </>
  );
};

export default page;
