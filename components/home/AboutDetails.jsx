"use client";

import Image from "next/image";
import { Link } from "@nextui-org/react";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";

const AboutDetails = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/assets/homepage/Cruise.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Content */}
      <div className="relative z-10 container py-20 lg:py-32">
        <ScrollMotionEffect effect="fade-up" duration="2000">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-white font-bold text-4xl md:text-6xl leading-tight">
              Let's Book Your Next Cruise
              <br />
              with Tiki Travel
            </h2>

            <p className="mt-6 max-w-3xl mx-auto text-lg text-white/80 leading-8">
              Sail to breathtaking destinations, enjoy luxury accommodations,
              world-class dining, and unforgettable entertainment—all with one
              seamless booking experience.
            </p>
          </div>
        </ScrollMotionEffect>

        <ScrollMotionEffect effect="fade-up" duration="2200">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-16">
            {[
              {
                image: "/assets/homepage/Cruise-1.png",
                title: "All-Inclusive Luxury",
                desc: "Indulge in gourmet dining, entertainment, and stunning ocean views—all in one place.",
              },
              {
                image: "/assets/homepage/Cruise-2.png",
                title: "Variety of Destinations",
                desc: "From tropical islands to historic cities, discover unforgettable journeys worldwide.",
              },
              {
                image: "/assets/homepage/Cruise-3.png",
                title: "Endless Entertainment",
                desc: "Enjoy live shows, pools, water slides, nightlife, and activities for every traveler.",
              },
              {
                image: "/assets/homepage/Cruise-4.png",
                title: "Stress-Free Travel",
                desc: "Unpack once and let your floating resort take you from destination to destination.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-8 text-center text-white transition-all duration-300 hover:bg-white/20 hover:-translate-y-2"
              >
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full border border-white/30 bg-white/5">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={42}
                    height={42}
                  />
                </div>

                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>

                <p className="text-white/80 leading-7">{item.desc}</p>
              </div>
            ))}
          </div>
        </ScrollMotionEffect>

        <ScrollMotionEffect effect="fade-up" duration="2400">
          <div className="flex justify-center mt-14">
            <Link
              href="https://calendly.com/espinosa-april/30min?month=2025-01"
              target="_blank"
              className="rounded-full bg-primary px-10 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-secondary hover:scale-105"
            >
              Let's Get Ready to Sail →
            </Link>
          </div>
        </ScrollMotionEffect>
      </div>
    </section>
  );
};

export default AboutDetails;
