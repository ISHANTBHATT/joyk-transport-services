"use client";
import React, { useState, useEffect } from "react";
import HomeCarousel from "./HomeCarousel";
import Booking from "./Booking";
import Info from "./Info";
import VerticalTabs from "./VerticalTabs";
import Faq from "./Faq";
import Testimonials from "./Testimonials";
import City from "./City";
import CarBanner from "./CarBanner";
import Footer from "./Footer";
import Test from "./Test";

function HomePage() {
  // const [bookingData, setBookingData] = useState(() => {
  //   // Load data from localStorage or set to default values
  //   const storedData = localStorage.getItem("bookingData");
  //   return storedData
  //     ? JSON.parse(storedData)
  //     : {
  //         pickup: "",
  //         dropoff: "",
  //         passengers: 1,
  //         cars: 1,
  //         date: "",
  //         time: "",
  //         returnTrip: false,
  //         returnDate: "",
  //       };
  // });

  // useEffect(() => {
  //   // Save bookingData to localStorage whenever it changes
  //   localStorage.setItem("bookingData", JSON.stringify(bookingData));
  // }, [bookingData]);
  const [bookingData, setBookingData] = useState({
    pickup: "",
    dropoff: "",
    passengers: 1,
    cars: 1,
    date: "",
    time: "",
    returnTrip: false,
    returnDate: "",
  });

  // useEffect(() => {
  //   // Check if window is defined to prevent SSR issues
  //   if (typeof window !== "undefined") {
  //     const storedData = localStorage.getItem("bookingData");
  //     if (storedData) {
  //       setBookingData(JSON.parse(storedData));
  //     }
  //   }
  // }, []);

  // useEffect(() => {
  //   // Save bookingData to localStorage whenever it changes
  //   if (typeof window !== "undefined") {
  //     localStorage.setItem("bookingData", JSON.stringify(bookingData));
  //   }
  // }, [bookingData]);

  return (
    <div>
      <HomeCarousel />
      <div className="w-full h-full flex justify-center">
        <Booking bookingData={bookingData} setBookingData={setBookingData} />
      </div>
      <Info />
      <VerticalTabs />
      {/* <Testimonials /> */}
      <City />
      <Faq />
      <CarBanner />
      {/* <Test /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default HomePage;
