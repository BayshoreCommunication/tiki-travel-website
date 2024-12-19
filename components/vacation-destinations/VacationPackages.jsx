import React from "react";
import { vacationPackagesData } from "@/config/data";
import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import RippleButton from "../shared/RippleButton";

const VacationPackages = () => {
  return (
    <div className="py-10 md:py-24">
      <div className="container ">
        <div className="flex flex-col items-center mb-4 lg:mb-8">
          <h1 className="text-3xl lg:text-5xl font-semibold text-center">
            Vacation with our tailored packages
          </h1>
          <p className="text-center text-xl md:max-w-6xl mt-3">
            Aloha! I’m April Espinosa, the heart and soul behind Tiki Travel
            Agency. My journey into the world of travel began with a leap of
            faith – my husband and I sold everything and moved to Hawaii in
            pursuit of a life filled with spontaneity and adventure.
          </p>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {vacationPackagesData.map((packages, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg text-start border overflow-hidden group"
              >
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
                  <h4 className="text-2xl font-medium text-secondary mt-3 ">
                    {packages?.title}
                  </h4>
                  <p className="text-lg line-clamp-2 mt-3">
                    {packages?.shortDesc}
                  </p>

                  <div className="mt-6">
                    <RippleButton
                      buttonText="Read More"
                      rippleDuration={3000}
                      href={`/vacation-destinations/${packages?.slug}`}
                      className="!text-base !font-normal !py-2 !px-6"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VacationPackages;
