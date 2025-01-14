import React from "react";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";
import RippleButton from "../shared/RippleButton";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";

const AboutUsSection = () => {
  return (
    <section className="relative">
      <div className="container pb-10 md:pb-24">
        <div className=" flex flex-col lg:flex-row items-center gap-5 lg:gap-14">
          <div className="w-full lg:w-[40%] shrink-0 relative">
            <ScrollMotionEffect effect="fade-right" duration="2000">
              <Image
                src="/assets/homepage/april-espinosa-1.png"
                alt="April Espinosa"
                width={630}
                height={770}
              ></Image>

              <div className="flex justify-evenly items-center gap-3 pt-8">
                <Link
                  href="https://www.facebook.com/people/Tiki-Travel-Agency/61555648056008/ "
                  target="_blank"
                  className="inline-block p-3  lg:p-4 rounded-full bg-transparent border border-gray-300 hover:text-primary hover:border-primary   duration-300"
                >
                  <FaFacebookF className="size-5 lg:size-6" />
                </Link>
                {/* <Link
                href="https://www.linkedin.com/company/ "
                target="_blank"
                className="inline-block p-3  lg:p-4 rounded-full bg-transparent border border-gray-300 hover:text-primary hover:border-primary   duration-300"
              >
                <FaLinkedinIn className="size-5 lg:size-6" />
              </Link> */}
                <Link
                  href="https://www.instagram.com/tikitravelagency/?igsh=anpaYWJtbXNnNxpk&utm_source=qr# "
                  target="_blank"
                  className="inline-block p-3  lg:p-4 rounded-full bg-transparent border border-gray-300 hover:text-primary hover:border-primary   duration-300"
                >
                  <FaInstagram className="size-5 lg:size-6" />
                </Link>
                <Link
                  href="https://x.com/tikitravelagenc"
                  target="_blank"
                  className="inline-block p-3  lg:p-4 rounded-full bg-transparent border border-gray-300 hover:text-primary hover:border-primary   duration-300"
                >
                  <FaXTwitter className="size-5 lg:size-6" />
                </Link>

                <Link
                  href="https://www.youtube.com/@TikiTravelAgency "
                  target="_blank"
                  className="inline-block p-3  lg:p-4 rounded-full bg-transparent border border-gray-300 hover:text-primary hover:border-primary duration-300"
                >
                  <FaYoutube className="size-5 lg:size-6" />
                </Link>
                <Link
                  href="https://www.pinterest.com/tikitravelagency/ "
                  target="_blank"
                  className="inline-block p-3  lg:p-4 rounded-full bg-transparent border border-gray-300 hover:text-primary hover:border-primary duration-300"
                >
                  <FaPinterestP className="size-5 lg:size-6" />
                </Link>
              </div>
            </ScrollMotionEffect>
          </div>
          <div className="w-full relative z-10">
            <ScrollMotionEffect effect="fade-left" duration="2000">
              <div className="flex flex-col gap-4  ">
                <div className="bg-primary py-5 lg:py-8 px-6 lg:px-16 relative lg:top-[3%]  lg:-left-[25%] lg:border-8 border-white">
                  <h2 className="text-white font-semibold text-3xl lg:text-5xl leading-tight">
                    April Espinosa, Owner of Tiki Travel Agency
                  </h2>
                </div>
                <p className="text-lg lg:text-xl font-normal text-secondary">
                  Aloha! I’m April Espinosa, the heart behind Tiki Travel
                  Agency. My journey started when my husband and I sold
                  everything to move to Hawaii, chasing a life full of adventure
                  and spontaneity.
                </p>
                <p className="text-lg lg:text-xl font-normal text-secondary">
                  Since living in Hawaii, my travels have taken me from the
                  stunning shores of Australia and New Zealand to the
                  cultural-rich countries of Japan, Vietnam, and Bali. I’ve also
                  explored the colorful streets and ancient wonders of Mexico
                  from the ruins of Chichen Itza to the lively markets of
                  Oaxaca.
                </p>
                <p className="text-lg lg:text-xl font-normal text-secondary">
                  This love for travel inspired me to create Tiki Travel Agency,
                  where we specialize in crafting personalized experiences that
                  reflect your unique desires.
                </p>
                <div>
                  <RippleButton
                    buttonText="More About Us"
                    rippleDuration={2000}
                    href="/about"
                    className="mt-5 "
                  />
                </div>
              </div>
            </ScrollMotionEffect>
          </div>
        </div>
      </div>
      {/* <div className="absolute bottom-0 lg:bottom-10 right-10 w-[200px] lg:w-[400px]">
        <ScrollMotionEffect effect="fade-in" duration="2000">
          <Image
            src="/assets/homepage/paper-plane-2nd.png"
            alt="paper plane"
            width={320}
            height={180}
            className=""
          ></Image>
        </ScrollMotionEffect>
      </div> */}
    </section>
  );
};

export default AboutUsSection;
