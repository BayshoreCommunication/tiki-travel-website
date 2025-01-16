"use client";
import React, { useState } from "react";
import { vacationPackagesData } from "@/config/data";
import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaPlayCircle, FaImage } from "react-icons/fa";
import RippleButton from "../shared/RippleButton";
import { Button } from "@nextui-org/react";
import TikiLightImageGallery from "../shared/TikiLightImageGallery";
import TikiLightVideoGallery from "../shared/TikiLightVideoGallery";

const VacationPackages = () => {
  const [showGallery, setShowGallery] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [galleryType, setGalleryType] = useState(null); // Track which type of gallery to show

  const handleImageGalleryOpen = (index) => {
    setCurrentImageIndex(index);
    setGalleryType("image");
    setShowGallery(true);
  };

  // const handleVideoGalleryOpen = (index) => {
  //   setCurrentVideoIndex(index);
  //   setGalleryType("video");
  //   setShowGallery(true);
  // };

  const handleGalleryClose = () => {
    setShowGallery(false);
    setGalleryType(null); // Reset gallery type
  };

  return (
    <div className="py-10 md:py-24">
      <div className="container">
        <div className="flex flex-col items-center mb-4 lg:mb-8">
          <h1 className="text-3xl lg:text-5xl font-semibold text-center">
            Vacation with our tailored packages
          </h1>
          <p className="text-center text-xl md:max-w-6xl mt-3">
            Aloha! I am April Espinosa and I started Tiki Travel Agency because
            I believe travel has the power to transform lives. Tiki Travel
            Agency creates unforgettable journeys that inspire adventure and
            connection.
          </p>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {vacationPackagesData.map((packages, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg text-start border overflow-hidden group"
              >
                <div className="overflow-hidden relative">
                  <Link href={`/vacation-destinations/${packages?.slug}`}>
                    <Image
                      src={packages?.image}
                      alt={packages?.title}
                      width={480}
                      height={280}
                      className="group-hover:scale-105 duration-300 w-full"
                    />
                  </Link>
                  {/* <div className="flex items-center gap-4 absolute bottom-5 left-5">
                    <button
                      onClick={() => handleImageGalleryOpen(index)}
                      className="flex items-center gap-2 py-1 px-4 text-white bg-secondary hover:bg-primary hover:bg-opacity-85 duration-300 bg-opacity-70 rounded-full"
                    >
                      <FaImage />
                      <span>Gallery</span>
                    </button>
                    <button
                      onClick={() => handleVideoGalleryOpen(index)}
                      className="flex items-center gap-2 py-1 px-4 text-white bg-secondary hover:bg-primary hover:bg-opacity-85 duration-300 bg-opacity-70 rounded-full"
                    >
                      <FaPlayCircle />
                      <span>Video</span>
                    </button>
                  </div> */}
                </div>
                <div className="p-4 md:p-5 lg:p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 text-base">
                      <FaMapMarkerAlt />
                      <p>{packages?.location}</p>
                    </div>
                    {/* <Link
                      href={packages?.locationLink}
                      target="_blank"
                      className="py-px px-4 border border-primary text-primary hover:bg-primary hover:text-white duration-300 text-base"
                    >
                      View
                    </Link> */}
                  </div>
                  <h4 className="text-2xl font-medium text-secondary mt-3">
                    {packages?.title}
                  </h4>
                  <p className="text-lg line-clamp-2 mt-3">
                    {packages?.shortDesc}
                  </p>
                  <div className="mt-6">
                    <RippleButton
                      buttonText="Read More"
                      rippleDuration={3000}
                      href={`/vacation-destinations/${packages?.slug}`}
                      className="!text-base !font-normal !py-2 !px-6"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* LightGallery Modal */}
      {showGallery && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
          onClick={handleGalleryClose}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            {galleryType === "image" && (
              <TikiLightImageGallery initialIndex={currentImageIndex} />
            )}
            {/* {galleryType === "video" && (
              <TikiLightVideoGallery initialIndex={currentVideoIndex} />
            )} */}
          </div>
        </div>
      )}
    </div>
  );
};

export default VacationPackages;
