"use client";
import React from "react";
import LightGallery from "lightgallery/react";

// Import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// Import plugins
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import Image from "next/image";
import Link from "next/link";
import { vacationPackagesData } from "@/config/data";

const LightImageGallery = () => {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  return (
    <div className="gallery-container">
      <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail, lgZoom]}>
        {vacationPackagesData.map((packages, index) => (
          <Link key={index} href={packages?.image} aria-label={packages?.title}>
            <Image
              alt={packages?.title}
              src={packages?.image}
              width={1920}
              height={1080}
              onError={(e) =>
                (e.target.src =
                  "/assets/vacation-destinations/cherry-blossoms-japan.png")
              }
            />
          </Link>
        ))}
      </LightGallery>
    </div>
  );
};

export default LightImageGallery;
