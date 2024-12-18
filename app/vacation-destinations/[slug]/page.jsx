import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import CallToAction from "@/components/shared/CallToAction";
import RippleButton from "@/components/shared/RippleButton";
import MorePackages from "@/components/vacation-destinations/MorePackages";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const page = () => {
  return (
    <>
      <BreadcrumbSection
        bgImage={"/assets/vacation-destinations/vd-details-breadcrumb-bg.png"}
        title={"Cherry Blossoms"}
        subTitle={"Vacation Destinations"}
      />
      {/* Main Content */}
      <div className="py-10 md:py-24">
        <div className="container">
          <div>
            {/* ============ Practice Area Details =========== */}
            <div className="w-full flex flex-col gap-4 md:gap-6 lg:gap-10">
              <div className="flex flex-col">
                <h1 className="font-semibold text-3xl md:text-4xl lg:text-4xl text-secondary">
                  Cherry Blossoms Adventure in Japan 🌸
                </h1>
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 justify-between border-b pb-4 pt-2 items-center">
                  <p className="text-base md:text-lg">
                    Discover Japan's breathtaking cherry blossoms during
                    spring—an unforgettable journey through culture, beauty, and
                    nature.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 text-base">
                      <FaMapMarkerAlt />
                      <p className="text-base md:text-lg">Kyoto, Japan</p>
                    </div>
                    <Link
                      href="https://maps.google.com/?q=Kyoto,Japan"
                      target="_blank"
                      className="py-px px-6 border border-primary text-primary hover:bg-primary hover:text-white duration-300 text-base md:text-lg"
                    >
                      View
                    </Link>
                  </div>
                </div>
                <div className="w-full h-[600px] overflow-hidden relative mt-4">
                  <Image
                    src="/assets/vacation-destinations/cherry-blossoms-japan.png"
                    width={1920}
                    height={1080}
                    alt="cherry-blossoms-japan"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                </div>
              </div>

              <p className="text-base md:text-lg">
                Japan transforms into a wonderland of pink and white blossoms
                during the iconic cherry blossom (sakura) season. Whether you're
                exploring Tokyo's vibrant parks, Kyoto's historic temples, or
                Hokkaido's serene landscapes, the blossoms provide a mesmerizing
                backdrop to the country's rich cultural heritage. This trip
                offers a perfect mix of nature, tradition, and local
                experiences.
              </p>

              <div>
                <p className="text-xl md:text-2xl font-bold mb-4 text-secondary">
                  Tour Highlights
                </p>
                <div className="text-base md:text-lg">
                  <ul className="list-disc pl-5 space-y-4">
                    <li>
                      <span className="font-medium pr-1 text-secondary">
                        🌸 Tokyo's Ueno Park:
                      </span>
                      Witness the stunning cherry blossoms in one of Tokyo's
                      most popular parks.
                    </li>
                    <li>
                      <span className="font-medium pr-1 text-secondary">
                        🏯 Kyoto's Philosopher's Path:
                      </span>
                      Walk through tranquil pathways lined with cherry trees and
                      visit stunning temples.
                    </li>
                    <li>
                      <span className="font-medium pr-1 text-secondary">
                        🚂 Train Journey to Mt. Fuji:
                      </span>
                      Ride scenic trains with views of cherry blossoms and
                      majestic Mt. Fuji.
                    </li>
                    <li>
                      <span className="font-medium pr-1 text-secondary">
                        🎎 Traditional Experiences:
                      </span>
                      Take part in tea ceremonies, wear a kimono, and experience
                      cultural delights.
                    </li>
                    <li>
                      <span className="font-medium pr-1 text-secondary">
                        🌄 Hokkaido's Late Blooms:
                      </span>
                      Visit Hokkaido for fewer crowds and extended cherry
                      blossom seasons.
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <p className="text-xl md:text-2xl font-bold mb-4 text-secondary">
                  What's Included?
                </p>
                <div className="text-base md:text-lg">
                  <ul className="list-disc pl-5 space-y-4">
                    <li>
                      Guided tours across top cherry blossom destinations.
                    </li>
                    <li>
                      5-star accommodations with breakfast and themed dinners.
                    </li>
                    <li>
                      Scenic train rides, entrance fees, and local
                      transportation.
                    </li>
                    <li>Professional guides fluent in Japanese and English.</li>
                  </ul>
                </div>
              </div>

              <div>
                <p className="text-xl md:text-2xl font-bold mb-4 text-secondary">
                  Best Time to Visit
                </p>
                <div className="text-base md:text-lg">
                  <ul className="list-disc pl-5 space-y-4">
                    <li>
                      <span className="font-medium pr-1 text-secondary">
                        Mid-March to Early April:
                      </span>
                      Southern and central Japan (Tokyo, Kyoto).
                    </li>
                    <li>
                      <span className="font-medium pr-1 text-secondary">
                        Late April to Early May:
                      </span>
                      Northern regions like Hokkaido.
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <p className="text-xl md:text-2xl font-bold mb-4 text-secondary">
                  Who is This Tour For?
                </p>
                <div className="text-base md:text-lg">
                  <ul className="list-disc pl-5 space-y-4">
                    <li>
                      Perfect for nature lovers, photographers, couples, and
                      anyone eager to experience Japan’s cultural charm during
                      its magical season.
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <p className="text-xl md:text-2xl font-bold mb-4 text-secondary">
                  Price
                </p>
                <div className="text-base md:text-lg">
                  <ul className="list-disc pl-5 space-y-4">
                    <li>
                      Starting from{" "}
                      <span className="text-primary font-semibold">$3,200</span>{" "}
                      per person. (Includes all guided tours, meals, and
                      accommodation.)
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <p className="text-xl md:text-2xl font-bold mb-4 text-secondary">
                  Book Your Spot Today!
                </p>
                <div className="text-base md:text-lg">
                  <ul className="list-disc pl-5 space-y-4">
                    <li>
                      Embrace the beauty of Japan's sakura season and create
                      lifelong memories. 🌸
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6">
                <RippleButton
                  buttonText="Book Your Adventure Today"
                  rippleDuration={1000}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* More Packages */}
      <MorePackages />
      <CallToAction />
    </>
  );
};

export default page;
