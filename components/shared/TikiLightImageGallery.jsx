"use client";
import React from "react";
import LightGallery from "lightgallery/react";

// Import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// Import plugins
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import Image from "next/image";
import Link from "next/link";
import { vacationPackagesData } from "@/config/data";

const TikiLightImageGallery = () => {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  return (
    <div className="gallery-container">
      <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail, lgZoom]}>
        {vacationPackagesData.map((packages, index) => (
          <Link key={index} href={packages?.image} aria-label={packages?.title}>
            <Image
              alt={packages?.title}
              src={packages?.image}
              width={1920}
              height={1080}
              onError={(e) =>
                (e.target.src =
                  "/assets/vacation-destinations/cherry-blossoms-japan.png")
              }
            />
          </Link>
        ))}
      </LightGallery>
    </div>
  );
};

export default TikiLightImageGallery;
// "use client";
// import {} from "react";
// import LightGallery from "lightgallery/react"; // Correct import
// import lgZoom from "lightgallery/plugins/zoom";
// import lgThumbnail from "lightgallery/plugins/thumbnail";

// import "lightgallery/css/lightgallery.css"; // LightGallery styles
// import "lightgallery/css/lg-zoom.css";
// import "lightgallery/css/lg-thumbnail.css";

// export const TikiLightImageGallery = () => {
//   const onInit = useCallback((detail) => {
//     if (detail?.instance) {
//       console.log("LightGallery initialized");
//     }
//   }, []);

//   return (
//     <div className="gallery-container">
//       <LightGallery
//         onInit={onInit}
//         plugins={[lgZoom, lgThumbnail]}
//         closable={true}
//         showMaximizeIcon={true}
//         speed={400} // Correct prop for slide animation speed
//         thumbnail={true}
//         thumbWidth={130}
//         thumbHeight={100}
//         thumbMargin={6}
//         dynamic={true}
//         dynamicEl={[
//           {
//             src: "https://via.placeholder.com/800x600",
//             responsive: "https://via.placeholder.com/800x600",
//             thumb: "https://via.placeholder.com/150x100",
//             subHtml: `
//               <div class="lightGallery-captions">
//                 <h4>Photo by <a href="https://unsplash.com/@dann" target="_blank">Dan</a></h4>
//                 <p>Published on November 13, 2018</p>
//               </div>
//             `,
//           },
//           {
//             src: "https://via.placeholder.com/900x700",
//             responsive: "https://via.placeholder.com/900x700",
//             thumb: "https://via.placeholder.com/150x100",
//             subHtml: `
//               <div class="lightGallery-captions">
//                 <h4>Beautiful Scenery</h4>
//                 <p>Captured in 2023</p>
//               </div>
//             `,
//           },
//         ]}
//         hash={false}
//         elementClassNames="inline-gallery-container"
//       />
//     </div>
//   );
// };
