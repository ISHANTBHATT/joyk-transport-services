import Image from "next/image";
import HomeCarousel from "./components/HomeCarousel";
import Booking from "./components/Booking";
import HomePage from "./components/HomePage";

export default function Home() {
  return (
    <div className=" min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* <HomeCarousel />
      <Booking /> */}
      <HomePage />
    </div>
  );
}
