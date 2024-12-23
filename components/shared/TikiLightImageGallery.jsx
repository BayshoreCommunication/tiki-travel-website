"use client";
import React from "react";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import { vacationPackagesData } from "@/config/data";

const TikiLightImageGallery = ({ initialIndex = 0 }) => {
  const images = vacationPackagesData.map((packages) => ({
    src: packages?.image, // Correctly referencing the image URL
  }));

  return (
    <div>
      <Carousel
        images={images}
        index={initialIndex} // Start the carousel at the provided index
        style={{ height: 500, width: 800 }}
        className=""
      />
    </div>
  );
};

export default TikiLightImageGallery;
