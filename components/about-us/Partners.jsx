import React from "react";

import Marquee from "react-fast-marquee";

const Partners = () => {
  const partnersData = [
    {
      logo: "/assets/partners/partner-1.png",
    },
    {
      logo: "/assets/partners/partner-2.png",
    },
    {
      logo: "/assets/partners/partner-3.png",
    },
    {
      logo: "/assets/partners/partner-4.png",
    },
    {
      logo: "/assets/partners/partner-5.png",
    },
    {
      logo: "/assets/partners/partner-6.png",
    },
    {
      logo: "/assets/partners/partner-1.png",
    },
    {
      logo: "/assets/partners/partner-2.png",
    },
    {
      logo: "/assets/partners/partner-3.png",
    },
    {
      logo: "/assets/partners/partner-4.png",
    },
    {
      logo: "/assets/partners/partner-5.png",
    },
    {
      logo: "/assets/partners/partner-6.png",
    },
  ];

  return (
    <div className="bg-white px-2 md:px-8 my-10 md:my-16">
      <Marquee
        pauseOnHover={true}
        speed={80}
        gradient={true}
        gradientWidth={80}
      >
        <div className="flex  justify-between item-center gap-x-12">
          {partnersData.map((partner, index) => (
            <img
              key={index}
              src={partner.logo}
              alt={`Partner Logo ${index + 1}`}
              className=""
              width={180}
              height={60}
            />
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Partners;
