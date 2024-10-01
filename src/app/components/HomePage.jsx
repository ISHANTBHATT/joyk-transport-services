import React from "react";
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
  return (
    <div>
      <HomeCarousel />
      <div className="w-full h-full flex justify-center">
        <Booking />
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
