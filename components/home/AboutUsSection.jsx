import React from "react";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";
import RippleButton from "../shared/RippleButton";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

const AboutUsSection = () => {
  return (
    <section className="relative">
      <div className="container pb-10 md:pb-24">
        <div className=" flex flex-col lg:flex-row items-center gap-5 lg:gap-14">
          <div className="w-full lg:w-[40%] shrink-0 relative">
            <ScrollMotionEffect effect="fade-right" duration="2000">
              <Image
                src="/assets/homepage/april-espinosa.png"
                alt="April Espinosa"
                width={630}
                height={770}
              ></Image>

              <div className="text-white   px-10 py-5 bg-primary absolute bottom-0 border-r-8 border-t-8 border-white ">
                <div className="flex justify-center items-center gap-3">
                  <Link
                    href="https://www.facebook.com/ "
                    target="_blank"
                    className="inline-block p-2 rounded bg-secondary hover:bg-primary   duration-300"
                  >
                    <FaFacebookF className="size-5" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/ "
                    target="_blank"
                    className="inline-block p-2 rounded bg-secondary hover:bg-primary   duration-300"
                  >
                    <FaLinkedinIn className="size-5" />
                  </Link>
                  <Link
                    href="https://x.com/ "
                    target="_blank"
                    className="inline-block p-2 rounded bg-secondary hover:bg-primary   duration-300"
                  >
                    <FaTwitter className="size-5" />
                  </Link>
                  <Link
                    href="https://www.instagram.com/ "
                    target="_blank"
                    className="inline-block p-2 rounded bg-secondary hover:bg-primary   duration-300"
                  >
                    <FaInstagram className="size-5" />
                  </Link>
                  <Link
                    href="https://www.youtube.com/ "
                    target="_blank"
                    className="inline-block p-2 rounded bg-secondary hover:bg-primary duration-300"
                  >
                    <FaYoutube className="size-5" />
                  </Link>
                </div>
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
                  Aloha! I’m April Espinosa, the heart and soul behind Tiki
                  Travel Agency. My journey into the world of travel began with
                  a leap of faith – my husband and I sold everything and moved
                  to Hawaii in pursuit of a life filled with spontaneity and
                  adventure.
                </p>
                <p className="text-lg lg:text-xl font-normal text-secondary">
                  From there, fueled by a deep-seated passion for unveiling the
                  beauty of Hawaii, our travels have carried us across the vast
                  expanse of the Pacific, from the enchanting shores of
                  Australia and New Zealand to the bustling streets of Japan,
                  with Vietnam next on our horizon.
                </p>
                <p className="text-lg lg:text-xl font-normal text-secondary">
                  But my wanderlust doesn’t end there. I’ve also explored the
                  pristine beaches of the Caribbean and the vibrant culture of
                  Mexico. Whether it’s soaking in the allure of a new
                  destination or diving into an exhilarating adventure, I’m
                  always eager to embrace the unknown.
                </p>
                <div>
                  <RippleButton
                    buttonText="More About Us"
                    rippleDuration={2000}
                    href="/"
                    className="mt-5 "
                  />
                </div>
              </div>
            </ScrollMotionEffect>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 lg:bottom-10 right-10 w-[200px] lg:w-[400px]">
        <ScrollMotionEffect effect="fade-in" duration="2000">
          <Image
            src="/assets/homepage/paper-plane-2.png"
            alt="paper plane"
            width={320}
            height={180}
            className=""
          ></Image>
        </ScrollMotionEffect>
      </div>
    </section>
  );
};

export default AboutUsSection;
