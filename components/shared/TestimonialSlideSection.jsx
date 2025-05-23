// "use client";
// import React, { useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import TestimonialSlider from "./TestimonialSlider";
// import { FaQuoteRight } from "react-icons/fa";
// import { FaArrowLeft } from "react-icons/fa6";
// import { FaArrowRight } from "react-icons/fa6";

// import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import SectionLayout from "./SectionLayout";

// const TestimonialSlideSection = ({ className }) => {
//   // Refs for navigation buttons
//   const prevButtonRef = useRef(null);
//   const nextButtonRef = useRef(null);

//   return (
//     <div className={`my-3 md:my-4  ${className}`}>
//       <div className="flex items-center">
//         {/* <button
//           ref={prevButtonRef}
//           className=" text-white hover:text-gray-100 p-3 border-1 border-white rounded-full"
//         >
//           <FaArrowLeft size={14} />
//         </button> */}
//         <Swiper
//           cssMode={true}
//           mousewheel={true}
//           keyboard={true}
//           modules={[Navigation, Pagination, Mousewheel, Keyboard]}
//           navigation={{
//             prevEl: prevButtonRef.current,
//             nextEl: nextButtonRef.current,
//           }}
//           onBeforeInit={(swiper) => {
//             // Attach the navigation buttons to Swiper when it's initialized
//             swiper.params.navigation.prevEl = prevButtonRef.current;
//             swiper.params.navigation.nextEl = nextButtonRef.current;
//             swiper.navigation.init();
//             swiper.navigation.update();
//           }}
//           className="mySwiper"
//         >
//           {[1, 2, 3, 4, 5].map((el, index) => (
//             <SwiperSlide key={index}>
//               <div className="w-full lg:w-[80%] text-center mx-auto flex flex-col gap-2 lg:gap-5">
//                 <div className=" flex items-center justify-center">
//                   <FaQuoteRight className="size-7  text-white mb-1" />
//                 </div>
//                 <div className="flex justify-center items-center mt-[-20px]">
//                   {Array(5)
//                     .fill()
//                     .map((_, index) => (
//                       <span key={index} className="text-yellow-500 text-2xl">
//                         &#9733;
//                       </span>
//                     ))}
//                 </div>
//                 <p className="text-sm md:text-xl font-normal  text-white">
//                   April at Tiki Travel Agency is amazing! She listens to what
//                   you want and turns it into an unforgettable vacation.
//                 </p>
//                 <div className="">
//                   <h4 className="font-bold text-white text-center text-2xl">
//                     Diane F.
//                   </h4>
//                   {/* <p className="text-md  text-white mt-1">
//                     Words cannot express
//                   </p> */}
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//         {/* <button
//           className=" text-white hover:text-gray-100 p-3 border-1 border-white rounded-full"
//           ref={nextButtonRef}
//         >
//           <FaArrowRight size={14} />
//         </button> */}
//       </div>
//     </div>
//   );
// };

// export default TestimonialSlideSection;
"use client";
import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { testimonialsData } from "@/config/data";
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TestimonialSlideSection = ({ className }) => {
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiperInstance = swiperRef.current.swiper;
      swiperInstance.params.navigation.prevEl = prevButtonRef.current;
      swiperInstance.params.navigation.nextEl = nextButtonRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, []);

  return (
    <div className={`my-6 md:my-8 ${className}`}>
      <div className="flex items-center gap-4">
        <button
          ref={prevButtonRef}
          className="text-white hover:text-gray-100 p-3 border border-white rounded-full hidden lg:block"
        >
          <FaArrowLeft size={20} />
        </button>
        <Swiper
          ref={swiperRef}
          keyboard={true}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }} // Correct way to enable autoplay
          loop={true}
          grabCursor={true}
          centeredSlides={true}
          modules={[Autoplay, Navigation, Mousewheel, Keyboard]}
          className="mySwiper w-full"
        >
          {[...testimonialsData].reverse().map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="px-2 md:p-8 lg:p-10  text-center  ">
                <p className="text-base md:text-lg font-normal md:font-semibold text-white mb-4 text-justify">
                  {testimonial.review}
                </p>
                <div className="text-yellow-500 mb-2 text-xl">
                  {"★".repeat(testimonial.rating)}
                </div>
                <p className="font-semibold text-white text-lg md:text-xl">
                  {testimonial.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          ref={nextButtonRef}
          className="text-white hover:text-gray-100 p-3 border border-white rounded-full hidden lg:block"
        >
          <FaArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlideSection;
