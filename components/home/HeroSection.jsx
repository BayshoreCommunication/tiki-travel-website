"use client";
import React, { memo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";
import RippleButton from "../shared/RippleButton";

const HeroSection = () => {
  const [showTitleOne, setShowTitleOne] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowTitleOne((prev) => !prev);
    }, 3000); // Switch titles every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="container overflow-hidden  ">
      <div className="relative w-full  h-[500px] md:h-[680px] flex items-center justify-center">
        <Image
          className="absolute inset-0 object-cover bg-bottom w-full h-full"
          width={1920}
          height={700}
          src={"/assets/homepage/home-header-bg.jpg"}
          alt="Bg Image"
        />

        {/* Centered text */}

        <div className=" relative flex flex-col items-center justify-center w-full max-w-[1024px] mx-auto px-8 md:px-16 xl:px-0">
          <ScrollMotionEffect effect="fade-up" duration="2000">
            <h1 className="mt-4 md:mt-10 text-3xl lg:text-5xl xl:text-6xl font-semibold text-white text-center leading-snug md:leading-tight">
              Discover destinations that ignite your wanderlust.
            </h1>
          </ScrollMotionEffect>

          <ScrollMotionEffect effect="fade-up" duration="2000">
            <h4 className="mt-4 md:mt-6 text-lg md:text-xl font-normal text-white text-center leading-tight">
              Where the spirit of exploration meets expert planning. Whether
              you're seeking thrilling mountain treks, serene beach escapes, or
              cultural immersions, we offer tailor-made travel experiences that
              ignite your passion
            </h4>
          </ScrollMotionEffect>
          <ScrollMotionEffect effect="fade-up" duration="2000">
            <div className="mt-5 md:mt-8 lg:mt-12">
              <RippleButton
                buttonText="Lets Plan a Vacation"
                rippleDuration={2000}
                href="/"
              />
              {/* <Link
              href={"/appointment"}
              className="ripple text-white font-normal text-md md:text-lg bg-primary px-8 md:px-16 py-4 rounded-sm hover:bg-secondary"
            >
              Schedule A Free Case Review
            </Link> */}
            </div>
          </ScrollMotionEffect>
        </div>
      </div>
    </div>
  );
};

export default memo(HeroSection);
