// "use client";
// import React from "react";
// import { vacationPackagesData } from "@/config/data";
// import Image from "next/image";
// import Link from "next/link";
// import { FaMapMarkerAlt, FaPlayCircle } from "react-icons/fa";

// import RippleButton from "../shared/RippleButton";
// import { FaImage } from "react-icons/fa6";

// import LightGallery from "lightgallery/react";

// // Import styles
// import "lightgallery/css/lightgallery.css";
// import "lightgallery/css/lg-zoom.css";
// import "lightgallery/css/lg-thumbnail.css";

// // Import plugins
// import lgThumbnail from "lightgallery/plugins/thumbnail";
// import lgZoom from "lightgallery/plugins/zoom";

// const VacationPackages = () => {
//   return (
//     <div className="py-10 md:py-24">
//       <div className="container ">
//         <div className="flex flex-col items-center mb-4 lg:mb-8">
//           <h1 className="text-3xl lg:text-5xl font-semibold text-center">
//             Vacation with our tailored packages
//           </h1>
//           <p className="text-center text-xl md:max-w-6xl mt-3">
//             Aloha! I’m April Espinosa, the heart and soul behind Tiki Travel
//             Agency. My journey into the world of travel began with a leap of
//             faith – my husband and I sold everything and moved to Hawaii in
//             pursuit of a life filled with spontaneity and adventure.
//           </p>
//         </div>
//         <div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//             {vacationPackagesData.map((packages, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-lg shadow-lg text-start border overflow-hidden group"
//               >
//                 <div className="overflow-hidden ">
//                   <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
//                     <Link
//                       href={packages?.image}
//                       aria-label={packages?.title}
//                       className="relative"
//                     >
//                       <Image
//                         src={packages?.image}
//                         alt={packages?.title}
//                         width={480}
//                         height={280}
//                         className="group-hover:scale-105 duration-300 w-full"
//                       ></Image>
//                       <div className=" flex items-center gap-4 absolute bottom-5 left-5">
//                         <Link
//                           href={"#"}
//                           className=" flex items-center gap-2 py-1 px-4 text-white bg-secondary hover:bg-primary hover:bg-opacity-85 duration-300 bg-opacity-70 rounded-full"
//                         >
//                           <FaImage />
//                           <span>Gallery</span>
//                         </Link>
//                         <Link
//                           href="#"
//                           className=" flex items-center gap-2 py-1 px-4 text-white bg-secondary hover:bg-primary hover:bg-opacity-85 duration-300 bg-opacity-70 rounded-full"
//                         >
//                           <FaPlayCircle />
//                           <span>Video</span>
//                         </Link>
//                       </div>
//                     </Link>
//                   </LightGallery>
//                 </div>
//                 <div className=" p-4 md:p-5 lg:p-6 ">
//                   <div className="flex items-center gap-4">
//                     <div className="flex items-center gap-1 text-base">
//                       <FaMapMarkerAlt />
//                       <p>{packages?.location}</p>
//                     </div>
//                     <Link
//                       href={packages?.locationLink}
//                       target="_blank"
//                       className="py-px px-4 border border-primary text-primary hover:bg-primary hover:text-white duration-300 text-base"
//                     >
//                       View
//                     </Link>
//                   </div>
//                   <h4 className="text-2xl font-medium text-secondary mt-3 ">
//                     {packages?.title}
//                   </h4>
//                   <p className="text-lg line-clamp-2 mt-3">
//                     {packages?.shortDesc}
//                   </p>

//                   <div className="mt-6">
//                     <RippleButton
//                       buttonText="Read More"
//                       rippleDuration={3000}
//                       href={`/vacation-destinations/${packages?.slug}`}
//                       className="!text-base !font-normal !py-2 !px-6"
//                     />
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VacationPackages;
"use client";
import React from "react";
import { vacationPackagesData } from "@/config/data";
import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaPlayCircle } from "react-icons/fa";

import RippleButton from "../shared/RippleButton";
import { FaImage } from "react-icons/fa6";

import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const plugins = [lgThumbnail, lgZoom];

const VacationPackages = () => {
  return (
    <div className="py-10 md:py-24">
      <div className="container">
        {/* Header Section */}
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
        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {vacationPackagesData.map((packages, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg text-start border overflow-hidden group"
            >
              {/* Gallery */}
              <LightGallery speed={500} plugins={plugins}>
                <Link
                  href={packages?.image || "#"}
                  aria-label={packages?.title}
                  className="relative"
                >
                  <Image
                    src={packages?.image}
                    alt={packages?.title || "Vacation Package"}
                    width={480}
                    height={280}
                    className="group-hover:scale-105 duration-300 w-full"
                    priority={index < 3} // Priority load for first few images
                  />
                  <div className="flex items-center gap-4 absolute bottom-5 left-5">
                    <Link
                      href="#"
                      className="flex items-center gap-2 py-1 px-4 text-white bg-secondary hover:bg-primary hover:bg-opacity-85 duration-300 bg-opacity-70 rounded-full"
                    >
                      <FaImage />
                      <span>Gallery</span>
                    </Link>
                  </div>
                </Link>
              </LightGallery>
              {/* Content */}
              <div className="p-4 md:p-5 lg:p-6">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 text-base">
                    <FaMapMarkerAlt />
                    <p>{packages?.location || "Unknown Location"}</p>
                  </div>
                  <Link
                    href={packages?.locationLink || "#"}
                    target="_blank"
                    className="py-px px-4 border border-primary text-primary hover:bg-primary hover:text-white duration-300 text-base"
                  >
                    View
                  </Link>
                </div>
                <h4 className="text-2xl font-medium text-secondary mt-3">
                  {packages?.title || "Vacation Package"}
                </h4>
                <p className="text-lg line-clamp-2 mt-3">
                  {packages?.shortDesc || "No description available."}
                </p>
                <div className="mt-6">
                  <RippleButton
                    buttonText="Read More"
                    rippleDuration={3000}
                    href={`/vacation-destinations/${packages?.slug || ""}`}
                    className="!text-base !font-normal !py-2 !px-6"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VacationPackages;
