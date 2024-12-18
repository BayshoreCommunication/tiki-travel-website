import React from "react";
import RippleButton from "../shared/RippleButton";
import MorePackagesSlider from "./MorePackagesSlider";
import Link from "next/link";

const MorePackages = () => {
  return (
    <div className="bg-[#F5F5F5] py-10 lg:py-20">
      <div className="container">
        <div className=" flex items-center justify-between mb-4">
          <h2 className="text-3xl lg:text-5xl font-semibold">More Packages</h2>
          <div className="flex justify-end md:visible invisible">
            <Link
              href={"/vacation-packages"}
              className="text-primary font-medium text-xl py-2 px-6 border-2 border-primary hover:text-white hover:bg-primary transition-all duration-500 "
            >
              View All Packages
            </Link>
          </div>
        </div>
      </div>
      <MorePackagesSlider />
      <div className="flex justify-center md:invisible mt-12 md:mt-[-60px] visible">
        <Link
          href={"/vacation-packages"}
          className="text-primary font-medium text-xl py-2 px-6 border-2 border-primary hover:text-white hover:bg-primary transition-all duration-500 "
        >
          View All Packages
        </Link>
      </div>
    </div>
  );
};

export default MorePackages;
