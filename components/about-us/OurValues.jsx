import React from "react";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";

const features = [
  {
    id: 1,
    title: "Explore with Confidence",
    description:
      "We've experienced each destination first-hand, so we can guide you confidently. Our team's insights ensure that every recommendation is backed by personal knowledge, so you feel prepared and excited for each step of your journey.",
  },
  {
    id: 2,
    title: "Tailored Adventure",
    description:
      "No two travelers are alike, and neither are our trips. We design each itinerary to reflect your unique interests and passions, delivering a deeply personalized travel experience that speaks to your dreams and desires.",
  },
  {
    id: 3,
    title: "Unmatched Support",
    description:
      "Your comfort and happiness are our priorities. We offer dedicated concierge service to support you throughout your trip, quickly addressing any issues so you can relax and fully enjoy your time abroad.",
  },
  {
    id: 4,
    title: "Insider Access",
    description:
      "Thanks to our close relationships with top vendors, we connect you with exclusive experiences, discounts, and unique access. Traveling with us means you enjoy VIP treatment and unforgettable opportunities.",
  },
  {
    id: 5,
    title: "Stress-Free Planning",
    description:
      "Leave the details to us! We handle everything from booking to logistics, taking the stress out of planning so that all you have to do is look forward to your adventure.",
  },
  {
    id: 6,
    title: "Commitment to Quality",
    description:
      "We partner with only the best, ensuring your accommodations, guides, and experiences meet the highest standards. Your trust is important to us, and we go the extra mile to deliver an exceptional travel experience every time.",
  },
];

const OurValues = () => {
  return (
    <div className=" bg-[#F5F5F5] ">
      <div className="container py-10 md:py-24">
        <div className="flex flex-col items-center mb-4">
          <h2 className="text-3xl lg:text-5xl font-semibold text-center">
            Our Values
          </h2>
          <p className="text-center text-xl md:max-w-4xl mt-3">
            Whether you're seeking thrilling mountain treks, serene beach
            escapes, or cultural immersions
          </p>
        </div>
        {/* Mapping the features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {features.map((feature, index) => (
            <div>
              <ScrollMotionEffect effect="fade-up" duration="2000" key={index}>
                <div className="p-5 md:p-8 shadow-md rounded-lg bg-white text-gray-700 md:min-h-[265px] hover:scale-105 duration-500">
                  <div>
                    {" "}
                    <h3 className="text-xl font-semibold text-primary  mb-1">
                      {feature.id.toString().padStart(2, "0")}
                    </h3>
                    <h3 className="text-2xl font-semibold text-secondary  mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>{" "}
                  </div>
                </div>
              </ScrollMotionEffect>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurValues;
