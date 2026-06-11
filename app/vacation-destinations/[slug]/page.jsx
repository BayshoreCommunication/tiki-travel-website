import parse from "html-react-parser";
import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import CallToAction from "@/components/shared/CallToAction";
import MorePackages from "@/components/vacation-destinations/MorePackages";
import React from "react";
import { vacationPackagesData } from "@/config/data";
import RippleButton from "@/components/shared/RippleButton";

export async function generateMetadata({ params }) {
  // Find the package details dynamically based on the slug
  const packageDetails = vacationPackagesData?.find(
    (service) => service.slug === params.slug
  );

  if (!packageDetails) {
    return {
      title: "Package not found",
      description: "The requested package does not exist.",
    };
  }

  // Extract dynamic values for metadata
  const { title, shortDesc, image, slug } = packageDetails;

  return {
    title: title || "Vacation Package", // Fallback title
    description:
      shortDesc ||
      "Discover our exciting vacation packages for unforgettable experiences.", // Fallback description
    openGraph: {
      title: title || "Vacation Package",
      description:
        shortDesc ||
        "Discover our exciting vacation packages for unforgettable experiences.",
      images: [
        {
          url: image || "/default-og-image.jpg", // Fallback image
          width: 1200,
          height: 600,
          alt: title || "Vacation Package Image",
        },
      ],
      url: `https://www.tikitravelagency.com/vacation-destinations/${slug}`,
      type: "article",
      site_name: "Tiki Travel Website",
    },
  };
}

const page = async ({ params }) => {
  const packageDetails = vacationPackagesData?.filter(
    (packages) => packages.slug === params.slug
  );

  if (!packageDetails || packageDetails.length === 0) {
    notFound();
  }

  // Extract the dynamic bgImage from the filtered packageDetails
  const bgImage = packageDetails[0]?.image;

  return (
    <>
      <BreadcrumbSection
        bgImage={bgImage} // Dynamic Background Image
        title={packageDetails[0]?.title} // Dynamic Title
        subTitle={"Vacation Destinations"}
      />
      {/* Main Content */}
      <div className="py-10 md:py-14">
        <div className="container">
          {packageDetails?.map((packages, index) => (
            <div className="col-span-3 lg:col-span-2" key={index}>
              <div className="mt-5 text-base">{parse(packages?.content)}</div>
              <div className="mt-6">
                <RippleButton
                  buttonText="Book Your Adventure Today"
                  rippleDuration={1000}
                  href="https://calendly.com/espinosa-april/30min?month=2025-01"
                  target="_blank"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* More Packages */}
      <MorePackages />
      <CallToAction />
    </>
  );
};

export default page;
