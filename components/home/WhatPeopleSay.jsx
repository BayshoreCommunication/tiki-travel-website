import Image from "next/image";
import Link from "next/link";
import React from "react";
import TestimonialSlideSection from "../shared/TestimonialSlideSection";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";
import RippleButton from "../shared/RippleButton";

const WhatPeopleSay = () => {
  return (
    <div className="relative w-full overflow-hidden ">
      <Image
        className="absolute inset-0 object-cover bg-center w-full h-full"
        width={1920}
        height={700}
        src="/assets/homepage/homebannerbg.jpg"
        alt="Header background"
      />

      <div className="container pt-10 md:py-20 ">
        <div className="relative flex flex-col items-center justify-center w-full h-full z-40">
          <ScrollMotionEffect effect="fade-right" duration="2000">
            <h1 className="font-semibold text-3xl md:text-5xl text-white text-center md:text-left">
              What People Say
            </h1>
          </ScrollMotionEffect>

          <ScrollMotionEffect effect="fade-left" duration="2000">
            <p className="text-md text-white max-w-[700px] text-center mt-6">
              {`Professionally handling Property Damage Claims, we’re committed to protecting both your space and your peace of mind in times of need.`}
            </p>
          </ScrollMotionEffect>

          <ScrollMotionEffect effect="fade-up" duration="2000">
            <div className="mx-0 flex justify-center items-center my-10 px-2 sm:px-6 lg:px-8">
              <div className="bg-primary w-full max-w-[400px] md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1200px] rounded-lg p-4 md:p-6 lg:p-8">
                <TestimonialSlideSection />
              </div>
            </div>
          </ScrollMotionEffect>

          {/* <ScrollMotionEffect effect="fade-up" duration="2000">
            <div className="mt-px lg:mt-3">
              <Link
                href="#"
                className="text-primary font-medium text-xl py-2 border-b-2 border-primary hover:text-secondary hover:border-secondary transition-all duration-500"
              >
                View All Reviews
              </Link>
            </div>
            <div className="mt-5">
              <RippleButton
                buttonText=" View All Reviews"
                rippleDuration={2000}
                href="#"
              />
            </div>
          </ScrollMotionEffect> */}
          <Image
            src="/assets/homepage/paper-plane-2.png"
            alt="paper plane"
            width={320}
            height={180}
            className="absolute bottom-[20%] -right-[6%] -z-10 hidden lg:block"
          ></Image>
        </div>
      </div>
      <Image
        src="/assets/homepage/paper-plane-1.png"
        alt="paper plane"
        width={320}
        height={180}
        className="absolute -bottom-5 left-[6%] z-10 hidden lg:block"
      ></Image>
    </div>
  );
};

export default WhatPeopleSay;
