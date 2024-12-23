"use client";
import React, { useState } from "react";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";
import Image from "next/image";
import { FaPlay } from "react-icons/fa6";

const AboutDetails = () => {
  const [videoSrc, setVideoSrc] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (src) => {
    setVideoSrc(src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setVideoSrc("");
    setIsModalOpen(false);
  };

  return (
    <section className="relative">
      <div className="container py-10 md:pb-24">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-14">
          <div className="w-full lg:w-[40%] shrink-0">
            <div className="relative">
              <ScrollMotionEffect effect="fade-left" duration="2000">
                <Image
                  src="/assets/homepage/about.png"
                  alt="April Espinosa"
                  width={800}
                  height={770}
                />
              </ScrollMotionEffect>
              <div className="absolute left-[4%] md:-left-[8%] bottom-3 md:bottom-10 z-10">
                <ScrollMotionEffect effect="fade-left" duration="2000">
                  <button
                    className="group relative w-[100px] h-[100px]"
                    // onClick={() => openModal("youtube video link")}
                  >
                    <div className="p-1 border-3 border-primary rounded-full border-dotted animate-spin duration-[10s] absolute inset-0 m-auto w-[100px] h-[100px]"></div>
                    <div className="absolute inset-0 m-auto w-[90px] h-[90px] bg-primary group-hover:bg-secondary group-hover:!bg-opacity-100 flex items-center justify-center rounded-full">
                      <FaPlay className="text-white text-3xl" />
                    </div>
                  </button>
                </ScrollMotionEffect>
              </div>
            </div>
          </div>
          <div>
            <ScrollMotionEffect effect="fade-right" duration="2000">
              <div className="flex flex-col gap-4 w-full ">
                <h2 className="text-secondary font-semibold text-3xl lg:text-5xl leading-tight mb-3">
                  Let's Book Your Next Cruise with Tiki Travel
                </h2>
                <ul className="space-y-5 text-gray-500 list-none list-inside dark:text-gray-400">
                  <li>
                    <p className="text-xl lg:text-2xl mb-2 font-medium text-secondary">
                      01. All-Inclusive Luxury:
                    </p>
                    <p className="text-lg lg:text-xl">
                      Indulge in gourmet dining, entertainment, and stunning
                      views – all in one place.
                    </p>
                  </li>
                  <li>
                    <p className="text-xl lg:text-2xl mb-2 font-medium text-secondary">
                      02. Variety of Destinations:
                    </p>
                    <p className="text-lg lg:text-xl">
                      From tropical islands to historic cities, there is a
                      cruise for every traveler.
                    </p>
                  </li>
                  <li>
                    <p className="text-xl lg:text-2xl mb-2 font-medium text-secondary">
                      03. Endless Entertainment:
                    </p>
                    <p className="text-lg lg:text-xl">
                      Enjoy Broadway shows, water slides, and more – there is
                      something for everyone.
                    </p>
                  </li>
                  <li>
                    <p className="text-xl lg:text-2xl mb-2 font-medium text-secondary">
                      04. Convenience:
                    </p>
                    <p className="text-lg lg:text-xl">
                      Unpack once and let the adventure begin, with easy
                      departure ports worldwide.
                    </p>
                  </li>
                </ul>
                <div className="mt-3">
                  <a
                    href="#"
                    className="text-primary font-medium text-xl py-2 border-b-2 border-primary hover:text-secondary hover:border-secondary transition-all duration-500"
                  >
                    Let's get ready to sail!
                  </a>
                </div>
              </div>
            </ScrollMotionEffect>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-lg overflow-hidden max-w-[800px] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-white text-2xl font-bold z-10"
              onClick={closeModal}
            >
              ×
            </button>
            <iframe
              id="video"
              src={`${videoSrc}?autoplay=1&modestbranding=1&showinfo=0`}
              title="YouTube video"
              className="w-full h-[450px]"
              allow="autoplay"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutDetails;
