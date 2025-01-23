import parse from "html-react-parser";
import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import CallToAction from "@/components/shared/CallToAction";
import RippleButton from "@/components/shared/RippleButton";
import MorePackages from "@/components/vacation-destinations/MorePackages";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { vacationPackagesData } from "@/config/data";

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
      <div className="py-10 md:py-24">
        <div className="container">
          {packageDetails?.map((packages, index) => (
            <div className="col-span-3 lg:col-span-2" key={index}>
              <div className="mt-5 text-base">{parse(packages?.content)}</div>
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
