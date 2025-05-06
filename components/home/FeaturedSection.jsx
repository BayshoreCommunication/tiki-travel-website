"use client";
import React, { useState } from "react";
import Image from "next/image";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";

const featuredData = [
  {
    bgImage: "/assets/homepage/featured-1.png",
    icon: "/assets/homepage/icon-1.png",
    title: "Discover Your Next Great Journey",
    text: "Embark on an adventure that takes you to awe-inspiring destinations, from majestic mountain peaks to serene coastal havens.",
  },
  {
    bgImage: "/assets/homepage/featured-2.png",
    icon: "/assets/homepage/icon-2.png",
    title: "Unveil Nature's Hidden Wonders",
    text: "Find the beauty off the beaten path as you explore untouched landscapes and uncover the secrets of the natural world.",
  },
  {
    bgImage: "/assets/homepage/featured-3.png",
    icon: "/assets/homepage/icon-3.png",
    title: "Where Dreams Meet Destinations",
    text: "Turn your travel dreams into reality with experiences that combine breathtaking views, cultural immersion, and unforgettable memories.",
  },
  {
    bgImage: "/assets/homepage/featured8.png",
    icon: "/assets/homepage/icon-4.png",
    title: "From Peaks to Paradise",
    text: "Journey across diverse terrains, from towering summits to idyllic beaches, where every destination feels like paradise.",
  },
  {
    bgImage: "/assets/homepage/featuredImage-5.png",
    icon: "/assets/homepage/icon-5.png",
    title: "Embark on the Path Less Traveled",
    text: "Step away from the familiar and embrace the thrill of discovering unique locations that inspire awe and wonder.",
  },
  {
    bgImage: "/assets/homepage/featured-6.png",
    icon: "/assets/homepage/icon-6.png",
    title: "Dive into Scenic Serenity",
    text: "Experience tranquil beauty and rejuvenation as you explore picturesque waterways, lush forests, and vibrant landscapes.",
  },
  {
    bgImage: "/assets/homepage/featured7.png",
    icon: "/assets/homepage/icon-7.png",
    title: "Chasing Horizons, Finding Peace",
    text: "Follow the horizon to destinations where vast skies and endless vistas offer peace, adventure, and inspiration.",
  },
  {
    bgImage: "/assets/homepage/featured4.png",
    icon: "/assets/homepage/icon-8.png",
    title: "Your Gateway to Endless Exploration",
    text: "Unlock the door to a world of adventures, from thrilling expeditions to peaceful escapes, designed to ignite your inner explorer.",
  },
];

export default function FeaturedSection() {
  // Set activeIndex to accept either a number or null
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="md:mb10 mb-6 bg-white lg:mb-20 py-5 lg:py-10">
      <div className="flex flex-col  items-center py-10 px-5">
        <h2 className="text-3xl lg:text-5xl font-semibold text-center">
          Let the journey of a lifetime begin
        </h2>
        <p className="text-center text-xl md:max-w-4xl mt-3">
          Whether you're seeking thrilling mountain treks, serene beach escapes,
          or cultural immersions
        </p>
      </div>
      {/* Featured Card */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {featuredData.map((item, index) => (
          <div
            key={index}
            className="group relative overflow-hidden duration-500"
            onMouseEnter={() => setActiveIndex(index)}
          >
            <ScrollMotionEffect effect="fade-up" duration="2000">
              <div>
                <div>
                  <Image
                    src={item.bgImage}
                    alt={item.title}
                    width={540}
                    height={380}
                    className="w-full"
                  />
                </div>
                <div className="absolute bottom-0 top-0 flex w-full items-center justify-center bg-black/50 p-6 text-white duration-500 hover:bg-[#0BB4AC]">
                  <div className="flex flex-col justify-center items-center mt-36">
                    {/* <div>
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={60}
                        height={60}
                        className="w-10 2xl:w-14"
                        style={{
                          filter: "brightness(0) saturate(100%) invert(100%)",
                        }}
                      ></Image>
                    </div> */}
                    <h3 className="mt-4 mb-2 text-center text-xl font-semibold ">
                      {item.title}
                    </h3>
                    <p className=" text-center text-base opacity-70 ">
                      {item.text}
                    </p>
                  </div>
                </div>
                {/* <div
                  className={`absolute bottom-0 flex w-full items-center justify-center bg-black/70 p-6 text-white duration-300 ${
                    activeIndex === index
                      ? "invisible opacity-0"
                      : "visible opacity-100"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div>
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={40}
                        height={40}
                        className="w-6 md:w-8 2xl:w-10"
                        style={{
                          filter: "brightness(0) saturate(100%) invert(100%)",
                        }}
                      ></Image>
                    </div>
                    <h3 className="text-center text-lg font-medium 2xl:text-xl">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <div
                  className={`absolute bottom-0 flex w-full items-center justify-center bg-black/70 p-6 text-white duration-500 ${
                    activeIndex === index
                      ? "visible top-0 opacity-100"
                      : "invisible top-full opacity-0"
                  }`}
                >
                  <div className="flex flex-col justify-center items-center">
                    <div>
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={60}
                        height={60}
                        className="w-10 2xl:w-14"
                        style={{
                          filter: "brightness(0) saturate(100%) invert(100%)",
                        }}
                      ></Image>
                    </div>
                    <h3 className="mt-4 mb-2 text-center text-xl font-semibold 2xl:text-2xl">
                      {item.title}
                    </h3>
                    <p className=" text-center text-base opacity-70 2xl:text-xl">
                      {item.text}
                    </p>
                  </div>
                </div> */}
              </div>
            </ScrollMotionEffect>
          </div>
        ))}
      </div>
    </div>
  );
}
