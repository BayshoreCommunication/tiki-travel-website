import React from "react";
import RippleButton from "../shared/RippleButton";
import MorePackagesSlider from "./MorePackagesSlider";

const MorePackages = () => {
  return (
    <div className="bg-[#F5F5F5] py-10 lg:py-20">
      <div className="container">
        <div className=" flex items-center justify-between">
          <h2 className="text-3xl lg:text-5xl font-semibold">More Packages</h2>
          <RippleButton buttonText="View All" />
        </div>
      </div>
      <MorePackagesSlider />
    </div>
  );
};

export default MorePackages;
