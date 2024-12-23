"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { vacationPackagesData } from "@/config/data";
import { Autoplay, Navigation, Mousewheel, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";
import RippleButton from "../shared/RippleButton";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaImage } from "react-icons/fa6";
import TikiLightImageGallery from "../shared/TikiLightImageGallery";

const MorePackagesSlider = ({ className }) => {
  const [showGallery, setShowGallery] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageGalleryOpen = (index) => {
    setCurrentImageIndex(index);
    setShowGallery(true);
  };

  const handleGalleryClose = () => {
    setShowGallery(false);
  };

  return (
    <div className={` ${className}`}>
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={20}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            centeredSlides: false,
          },
          1024: {
            slidesPerView: 3,
            centeredSlides: true,
          },
          1280: {
            slidesPerView: 4,
            centeredSlides: true,
          },
        }}
        modules={[Autoplay, Navigation, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {vacationPackagesData.map((packages, index) => (
          <SwiperSlide
            key={index}
            className="bg-white rounded-lg shadow-lg text-start border overflow-hidden group"
          >
            <div className="overflow-hidden relative">
              <Image
                src={packages?.image}
                alt={packages?.title}
                width={480}
                height={280}
                className="group-hover:scale-105 duration-300 w-full"
              />
              <div className="flex items-center gap-4 absolute bottom-5 left-5">
                <button
                  onClick={() => handleImageGalleryOpen(index)}
                  className="flex items-center gap-2 py-1 px-4 text-white bg-secondary hover:bg-primary hover:bg-opacity-85 duration-300 bg-opacity-70 rounded-full"
                >
                  <FaImage />
                  <span>Gallery</span>
                </button>
              </div>
            </div>
            <div className="p-4 md:p-5 lg:p-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 text-base">
                  <FaMapMarkerAlt />
                  <p>{packages?.location}</p>
                </div>
                <Link
                  href={packages?.locationLink}
                  target="_blank"
                  className="py-px px-4 border border-primary text-primary hover:bg-primary hover:text-white duration-300 text-base"
                >
                  View
                </Link>
              </div>
              <h4 className="text-2xl font-medium text-secondary mt-3">
                {packages?.title}
              </h4>
              <p className="text-lg line-clamp-2 mt-3">{packages?.shortDesc}</p>
              <div className="mt-6">
                <RippleButton
                  buttonText="Read More"
                  rippleDuration={3000}
                  href={`/vacation-destinations/${packages?.slug}`}
                  className="!text-base !font-normal !py-2 !px-6"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* LightGallery Modal */}
      {showGallery && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
          onClick={handleGalleryClose}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <TikiLightImageGallery initialIndex={currentImageIndex} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MorePackagesSlider;
