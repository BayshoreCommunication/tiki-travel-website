import React from "react";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";

const Mailchimp = () => {
  return (
    <div className="container py-8 md:py-10">
      <div className="flex flex-col justify-center items-center gap-6 lg:gap-12 text-secondary text-center p-6 lg:px-20 lg:py-24">
        <ScrollMotionEffect effect="fade-up" duration="1000">
          <h4 className="text-3xl md:text-5xl font-semibold leading-tight max-w-[1024px] mx-auto">
            Plan Your Next Adventure With Confidence By Joining Our Monthly
            Newsletter
          </h4>
        </ScrollMotionEffect>
      </div>
    </div>
  );
};

export default Mailchimp;
