"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { vacationPackagesData } from "@/config/data";
import { Autoplay, Navigation, Mousewheel, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import RippleButton from "../shared/RippleButton";
import { FaMapMarkerAlt } from "react-icons/fa";

const MorePackagesSlider = ({ className }) => {
  return (
    <div className={`  ${className}`}>
      <div className="flex items-center">
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
          pagination={{
            clickable: true,
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
            <SwiperSlide key={index} className="p-4">
              <div className="bg-white rounded-lg shadow-lg text-start border overflow-hidden group">
                <div className="overflow-hidden">
                  <Image
                    src={packages?.image}
                    alt={packages?.title}
                    width={480}
                    height={280}
                    className="group-hover:scale-105 duration-300 w-full"
                  ></Image>
                </div>
                <div className=" p-4 md:p-5 lg:p-6 ">
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
                  <h4 className="text-2xl font-medium text-black mt-3 line-clamp-1">
                    {packages?.title}
                  </h4>
                  <p className="text-lg line-clamp-2 mt-3">
                    {packages?.shortDesc}
                  </p>

                  <div className="mt-6">
                    <RippleButton
                      buttonText="Read More"
                      rippleDuration={3000}
                      href={packages?.slug}
                      className="!text-base !font-normal !py-2 !px-6"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MorePackagesSlider;
