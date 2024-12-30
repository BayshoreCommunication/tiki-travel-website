"use client";
import React from "react";
import Accordion from "./Accordion";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";

const FAQ = () => {
  return (
    <section className="py-10 lg:py-16 xl:py-20 px-6 xl:px-0 bg-white overflow-hidden">
      <div className="container">
        <div className="section-title mb-[30px] ">
          <ScrollMotionEffect effect="fade-up" duration="2000">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-secondary text-center mb-5">
                Frequently Asked Questions
              </h1>
              <p className="text-base lg:text-lg font-normal text-secondary">
                Answers to Common Inquiries About Our Services
              </p>
            </div>
          </ScrollMotionEffect>
        </div>
        <div className="w-full pt-4 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-20">
          <div>
            <ScrollMotionEffect effect="fade-up" duration="2000">
              <Accordion
                title="What services does Tiki Travel Agency offer?"
                answer="From Hawaii to Asia, to Safari, the Caribbean and Europe we specialize in full-service travel planning and itineraries!"
              />
            </ScrollMotionEffect>
            <ScrollMotionEffect effect="fade-up" duration="2000">
              <Accordion
                title="How do I prepare my itinerary as per my needs?"
                answer="Absolutely! We design personalized journeys to suit your desires and requirements."
              />
            </ScrollMotionEffect>
            <ScrollMotionEffect effect="fade-up" duration="2000">
              <Accordion
                title="What kind of trips can you plan with it?"
                answer="Depending on your chosen destination, we can arrange family vacations, honeymoons, luxury getaways, adventure trips, group tours and more."
              />
            </ScrollMotionEffect>
          </div>
          <div>
            <ScrollMotionEffect effect="fade-up" duration="2000">
              <Accordion
                title="Can you help with arranging flights and accommodations?"
                answer="Sure, we plan for key aspects like flights, hotels, transportation, and activities to create barrier-free experiences."
              />
            </ScrollMotionEffect>
            <ScrollMotionEffect effect="fade-up" duration="2000">
              <Accordion
                title="What destinations do you focus on?"
                answer="We specialize in Hawaii, Asia, Safari destinations, the Caribbean and Europe and provide best in class expertise for each of these regions."
              />
            </ScrollMotionEffect>
            <ScrollMotionEffect effect="fade-up" duration="2000">
              <Accordion
                title="Are you able to assist travelers with last-minute travel plans?"
                answer="Yes, we do our best to help with last minute travel requests and will rush to create a great itinerary."
              />
            </ScrollMotionEffect>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
