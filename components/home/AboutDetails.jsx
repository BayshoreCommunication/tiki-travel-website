import React from "react";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";
import RippleButton from "../shared/RippleButton";
import Image from "next/image";
import { Link } from "@nextui-org/react";

const AboutDetails = () => {
  return (
    <section className="relative">
      <div className="container py-10 md:pb-24">
        <div className=" flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-14">
          <div className="w-full lg:w-[50%] shrink-0">
            <div>
              <ScrollMotionEffect effect="fade-left" duration="2000">
                <Image
                  src="/assets/homepage/about.png"
                  alt="April Espinosa"
                  width={800}
                  height={770}
                ></Image>
              </ScrollMotionEffect>
            </div>
          </div>
          <div>
            <ScrollMotionEffect effect="fade-right" duration="2000">
              <div className="flex flex-col gap-4 w-full ">
                <h2 className="text-secondary font-semibold text-3xl lg:text-5xl leading-tight mb-3">
                  Lets Book Your Next Cruise with Tiki Travel
                </h2>
                <ul class="space-y-5 text-gray-500 list-none list-inside dark:text-gray-400">
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
                  <Link
                    href="#"
                    className="text-primary font-medium text-xl py-2 border-b-2 border-primary hover:text-secondary hover:border-secondary transition-all duration-500"
                  >
                    Let's get ready to sail!
                  </Link>
                </div>
              </div>
            </ScrollMotionEffect>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDetails;
