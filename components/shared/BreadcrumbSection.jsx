import React from "react";
import Link from "next/link";
import CardMotion from "../motion/CardMotion";

const BreadcrumbSection = ({
  bgImage = "/assets/shared/about-breadcrumb.png",
  title,
  subTitle,
}) => {
  return (
    <div className="container">
      <div
        className="relative bg-opacity-85 w-full h-[500px] overflow-hidden"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center lg:justify-start  z-10 bg-gradient-to-r from-[#070707]/70 to-transparent">
          <CardMotion
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 1.1,
              },
            }}
            initial={{
              opacity: 0,
              x: -100,
            }}
          >
            {" "}
            <div className="w-full px-8 lg:px-20 text-center lg:text-start">
              <h1 className="text-white font-bold text-3xl lg:text-5xl mb-1 lg:mb-3 max-w-3xl w-full  ">
                {title}
              </h1>

              <nav className="flex items-center" aria-label="Breadcrumb">
                <ol className="flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                  <li>
                    <Link
                      href="/"
                      className="text-lg font-medium text-stone-200 hover:text-primary"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-3 h-3 mx-1 rtl:rotate-180 text-stone-50"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                      aria-hidden="true"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                    <span className="text-lg font-medium text-primary ms-1 md:ms-2">
                      {subTitle || title}
                    </span>
                  </li>
                </ol>
              </nav>
            </div>
          </CardMotion>
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbSection;
