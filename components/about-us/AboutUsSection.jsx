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
    <section className="relative overflow-hidden">
      <div className="container py-10 md:py-24">
        <div className=" flex flex-col gap-4 lg:gap-10">
          <div className=" flex flex-col lg:flex-row md:items-end 2xl:items-center  gap-4 lg:gap-14">
            <div className="w-full lg:w-[40%] shrink-0 relative">
              <ScrollMotionEffect effect="fade-right" duration="2000">
                <Image
                  src="/assets/homepage/april-espinosa.png"
                  alt="April Espinosa"
                  width={630}
                  height={770}
                ></Image>

                <div className="text-white   px-10 py-5 bg-primary absolute bottom-0 border-r-8 border-t-8 border-white ">
                  {/* <div className="flex justify-center items-center gap-3">
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
                    href="https://x.com/tikitravelagenc"
                    target="_blank"
                    className="inline-block p-2 rounded bg-secondary hover:bg-primary   duration-300"
                  >
                    <FaXTwitter  className="size-5" />
                  </Link>
                  <Link
                    href="https://www.instagram.com/ "
                    target="_blank"
                    className="inline-block p-2 rounded bg-secondary hover:bg-primary   duration-300"
                  >
                    <FaInstagram className="size-5" />
                  </Link>
                  <Link
                    href="https://www.youtube.com/@TikiTravelAgency "
                    target="_blank"
                    className="inline-block p-2 rounded bg-secondary hover:bg-primary duration-300"
                  >
                    <FaYoutube className="size-5" />
                  </Link>
                </div> */}
                  <div className="flex justify-start items-center gap-3 ">
                    <Link
                      href="https://www.facebook.com/people/Tiki-Travel-Agency/61555648056008/ "
                      target="_blank"
                      className="inline-block p-3  rounded-full bg-transparent border-2 border-gray-300 hover:text-secondary hover:border-secondary duration-300"
                    >
                      <FaFacebookF className="size-5" />
                    </Link>
                    {/* <Link
                href="https://www.linkedin.com/company/ "
                target="_blank"
                className="inline-block p-3  rounded-full bg-transparent border-2 border-gray-300 hover:text-secondary hover:border-secondary duration-300"
              >
                <FaLinkedinIn className="size-5" />
              </Link> */}
                    <Link
                      href="https://www.instagram.com/tikitravelagency/?igsh=anpaYWJtbXNnNxpk&utm_source=qr# "
                      target="_blank"
                      className="inline-block p-3  rounded-full bg-transparent border-2 border-gray-300 hover:text-secondary hover:border-secondary duration-300"
                    >
                      <FaInstagram className="size-5" />
                    </Link>
                    <Link
                      href="https://x.com/tikitravelagenc"
                      target="_blank"
                      className="inline-block p-3  rounded-full bg-transparent border-2 border-gray-300 hover:text-secondary hover:border-secondary duration-300"
                    >
                      <FaXTwitter className="size-5" />
                    </Link>

                    <Link
                      href="https://www.youtube.com/@TikiTravelAgency "
                      target="_blank"
                      className="inline-block p-3  rounded-full bg-transparent border-2 border-gray-300 hover:text-secondary hover:border-secondary duration-300"
                    >
                      <FaYoutube className="size-5" />
                    </Link>
                    <Link
                      href="https://www.pinterest.com/tikitravelagency/ "
                      target="_blank"
                      className="inline-block p-3  rounded-full bg-transparent border-2 border-gray-300 hover:text-secondary hover:border-secondary duration-300"
                    >
                      <FaPinterestP className="size-5" />
                    </Link>
                  </div>
                </div>
              </ScrollMotionEffect>
            </div>
            <div className="w-full relative z-10">
              <ScrollMotionEffect effect="fade-left" duration="2000">
                <div className="flex flex-col gap-4  ">
                  <div className="bg-primary py-5 lg:py-8 px-6 lg:px-16 relative lg:top-[3%]  lg:-left-[25%] lg:border-8 border-white">
                    <h1 className="text-white font-semibold text-3xl lg:text-5xl leading-tight">
                      April Espinosa, Owner of Tiki Travel Agency
                    </h1>
                  </div>
                  <p className="text-base lg:text-lg font-normal text-secondary">
                    Aloha! I’m April Espinosa, the heart and soul behind Tiki
                    Travel Agency. My journey into the world of travel began
                    with a leap of faith – my husband and I sold everything and
                    moved to Hawaii in pursuit of a life filled with spontaneity
                    and adventure.
                  </p>
                  <p className="text-base lg:text-lg font-normal text-secondary">
                    From there, fueled by a deep-seated passion for unveiling
                    the beauty of Hawaii, our travels have carried us across the
                    vast expanse of the Pacific, from the enchanting shores of
                    Australia and New Zealand to the bustling streets of Japan,
                    with Vietnam next on our horizon.
                  </p>
                  <p className="text-base lg:text-lg font-normal text-secondary">
                    But my wanderlust doesn’t end there. I’ve also explored the
                    pristine beaches of the Caribbean and the vibrant culture of
                    Mexico. Whether it’s soaking in the allure of a new
                    destination or diving into an exhilarating adventure, I’m
                    always eager to embrace the unknown.
                  </p>
                  <p className="text-base lg:text-lg font-normal text-secondary">
                    It’s this passion for exploration that led me to create Tiki
                    Travel Agency. With a focus on curating personalized travel
                    experiences, we specialize in crafting journeys that
                    resonate with your desires, whether it includes exploring
                    the electric energy of Tokyo’s streets or the tranquil
                    shores of Kauai. At Tiki Travel Agency, we’re not just in
                    the business of planning vacations; we’re here to ignite
                    your wanderlust and craft unforgettable adventures tailored
                    just for you.
                  </p>
                </div>
              </ScrollMotionEffect>
            </div>
          </div>
          <div className=" flex flex-col gap-4">
            <ScrollMotionEffect effect="fade-up" duration="1500">
              <p className="text-base lg:text-lg font-normal text-secondary">
                So come, join me as we embark on a journey together. Let’s turn
                your travel dreams into reality and create memories that will
                last a lifetime. Get ready to explore, discover, and immerse
                yourself in the wonders of the world with Tiki Travel Agency by
                your side.
              </p>
            </ScrollMotionEffect>
            <ScrollMotionEffect effect="fade-up" duration="2500">
              <p className="text-base lg:text-lg font-normal text-secondary">
                So come, join me as we embark on a journey together. Let’s turn
                your travel dreams into reality and create memories that will
                last a lifetime. Get ready to explore, discover, and immerse
                yourself in the wonders of the world with Tiki Travel Agency by
                your side.
              </p>
            </ScrollMotionEffect>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
