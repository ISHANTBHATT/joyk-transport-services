// // components/Carousel.js
// "use client";
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import Image from "next/image";

// const HomeCarousel = () => {
//   return (
//     <div className="max-w-7xl mx-auto p-4">
//       <Swiper
//         slidesPerView={1}
//         spaceBetween={10}
//         navigation
//         pagination={{ clickable: true }}
//         breakpoints={{
//           640: {
//             slidesPerView: 2,
//             spaceBetween: 20,
//           },
//           768: {
//             slidesPerView: 3,
//             spaceBetween: 30,
//           },
//           1024: {
//             slidesPerView: 4,
//             spaceBetween: 40,
//           },
//         }}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <Image
//             src="/images/banner.png"
//             alt="Image 1"
//             width={400}
//             height={200}
//             className="object-cover"
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <Image
//             src="/images/banner2.png"
//             alt="Image 2"
//             width={400}
//             height={200}
//             className="object-cover"
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <Image
//             src="/images/banner3.png"
//             alt="Image 3"
//             width={400}
//             height={200}
//             className="object-cover"
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <Image
//             src="/images/banner4.png"
//             alt="Image 4"
//             width={400}
//             height={200}
//             className="object-cover"
//           />
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// };

// export default HomeCarousel;

"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import './styles.css';

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Banner from "./Banner";
const carouseldata = [
  { id: "1", img: "/images/banner.png" },
  { id: "2", img: "/images/banner2.png" },
  { id: "3", img: "/images/banner3.png" },
];
export default function HomeCarousel() {
  return (
    <>
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          width: 40px;
          height: 40px;
          background-color: rgba(
            0,
            0,
            0,
            0.5
          ); /* Optional: add background color */
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          top: 35%; /* Vertically center */
          transform: translateY(
            -50%
          ); /* Adjust for proper vertical alignment */
        }
        .swiper-button-next {
          left: 230px; /* Margin right */
        }
        .swiper-button-prev {
          left: 180px; /* Margin left */
        }
        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 16px; /* Adjust arrow size */
          color: white; /* Adjust arrow color */
        }
        @media (max-width: 768px) {
          .swiper-button-next {
            left: 110px;
          }
          .swiper-button-prev {
            left: 60px;
          }
        }
      `}</style>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {carouseldata.map((data) => (
          <SwiperSlide>
            <Banner key={data.id} img={data.img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}