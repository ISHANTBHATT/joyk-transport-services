//working
"use client";
import React, { useState, useRef, useEffect } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";
import { CiSearch } from "react-icons/ci";
import { useSession } from "next-auth/react";
import { SyncLoader } from "react-spinners";
import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

const senegalLocations = [
  "Dakar",
  "Pikine",
  "Guédiawaye",
  "Rufisque",
  "Mermoz-Sacré-Cœur",
  "Saint-Louis",
  "Richard Toll",
  "Podor",
  "Dagana",
  "Gandiol",
  "Thiès",
  "Tivaouane",
  "Mbour",
  "Saly",
  "Khombole",
  "Kaolack",
  "Nioro du Rip",
  "Kaffrine",
  "Guinguinéo",
  "Ziguinchor",
  "Oussouye",
  "Kafountine",
  "Bignona",
  "Cap Skirring",
  "Diourbel",
  "Touba",
  "Mbacké",
  "Fatick",
  "Foundiougne",
  "Sokone",
  "Passy",
  "Kédougou",
  "Bandafassi",
  "Salemata",
  "Saraya",
  "Kolda",
  "Vélingara",
  "Médina Yoro Foulah",
  "Matam",
  "Kanel",
  "Ranérou",
  "Louga",
  "Linguère",
  "Kébémer",
  "Tambacounda",
  "Goudiry",
  "Koumpentoum",
  "Bakel",
  "Sédhiou",
  "Marsassoum",
  "Goudomp",
  "Îles de la Madeleine",
  "Lac Retba (Pink Lake)",
  "Djoudj National Bird Sanctuary",
  "Niokolo-Koba National Park",
  "Fathala Wildlife Reserve",
  "Gorée Island (UNESCO World Heritage Site)",
  "Blaise Diagne International Airport",
];
function Booking({ bookingData, setBookingData }) {
  const { language, changeLanguage } = useLanguage();
  const t = translations[language];

  const [hasAnimated, setHasAnimated] = useState(false);

  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);
  const router = useRouter();
  const { data: session, status } = useSession();
  // const date = new Date(bookingData.date);
  // const inputdate = date.toISOString().split("T")[0];
  // console.log("session phone", session.user.phone);
  const [value, setValue] = useState({
    startDate: bookingData.date ? new Date(bookingData.date) : null,
    endDate: bookingData.date ? new Date(bookingData.date) : null,
  });
  useEffect(() => {
    // If bookingData.date is updated, ensure it reflects in the datepicker
    setValue({
      startDate: bookingData.date ? new Date(bookingData.date) : null,
      endDate: bookingData.date ? new Date(bookingData.date) : null,
    });
  }, [bookingData.date]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setBookingData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (name === "pickup") {
      const filteredPickupSuggestions = senegalLocations.filter((location) =>
        location.toLowerCase().includes(value.toLowerCase())
      );
      setPickupSuggestions(filteredPickupSuggestions);
    }
    if (name === "dropoff") {
      const filteredDestinationSuggestions = senegalLocations.filter(
        (location) => location.toLowerCase().includes(value.toLowerCase())
      );
      setDestinationSuggestions(filteredDestinationSuggestions);
    }
    // localStorage.setItem("bookingData", JSON.stringify(bookingData));
  };
  const handleSuggestionClick = (name, suggestion) => {
    setBookingData((prevState) => ({
      ...prevState,
      [name]: suggestion,
    }));
    if (name === "pickup") setPickupSuggestions([]);
    if (name === "dropoff") setDestinationSuggestions([]);
  };

  if (status === "loading") {
    return (
      <div className="flex justify-center w-full">
        <SyncLoader />
      </div>
    );
  }
  const handleSearch = () => {
    localStorage.setItem("bookingData", JSON.stringify(bookingData));
    router.push("/booking");
  };
  // console.log("bookingData -->", bookingData);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // console.log(bookingData.date);
  return (
    <motion.div
      variants={fadeIn("up", 1.8)}
      initial="hidden"
      // whileInView="show"
      animate={hasAnimated ? "show" : "hidden"}
      exit="hidden"
      onViewportEnter={() => {
        if (!hasAnimated) {
          setHasAnimated(true);
        }
      }}
      className="bg-white p-4 lg:rounded-full shadow-md flex flex-col lg:flex-row items-center justify-between relative lg:absolute bottom-4 z-[1] gap-8 lg:h-28 h-full w-[80%]"
    >
      <div className="flex items-center lg:ml-6 w-full lg:w-auto">
        <div className="w-full lg:w-auto">
          <p className="text-gray-500 text-sm ml-3">Date</p>
          <Datepicker
            asSingle={true}
            value={value}
            onChange={(newValue) => {
              setValue(newValue); // Update Datepicker value
              const formattedDate = newValue.startDate
                ? new Date(newValue.startDate).toDateString()
                : null;
              setBookingData((prevState) => ({
                ...prevState,
                date: formattedDate, // Store only the date part
              }));
            }}
            required={true}
            showShortcuts={true}
            primaryColor={"orange"}
            minDate={today}
            // theme={"light"}
            inputClassName="w-full rounded-md border lg:border-none px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
            toggleClassName="absolute right-0 h-full px-3 text-gray-400 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed"
          />
        </div>
      </div>

      <div className="flex items-center w-full lg:w-auto">
        <div className="relative w-full lg:w-auto">
          <p className="text-gray-500 text-sm ml-4">{t.Booking.time}</p>
          <input
            className="custom-time-input appearance-none w-full px-3 py-2 h-10 text-gray-700 border lg:border-none rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
            id="time"
            type="time"
            name="time"
            value={bookingData.time || ""}
            onChange={handleChange}
            required
          />
          {!bookingData.time && (
            <span className="sm:hidden absolute left-3 top-[66%] transform -translate-y-1/2 text-gray-400 pointer-events-none">
              --:--
            </span>
          )}
        </div>
      </div>

      <div className="flex items-center w-full lg:w-auto">
        <div className="bg-gray-100 rounded-full p-2 mx-2">
          <svg
            className="w-6 h-6 text-gray-600 transform rotate-180"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </div>
        <div className="w-full">
          <p className="text-gray-500 text-sm ml-3">{t.Booking.from}</p>
          <input
            className="appearance-none border lg:border-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
            id="pickup"
            name="pickup"
            value={bookingData.pickup || ""}
            onChange={handleChange}
            required
            type="text"
            placeholder={t.Booking.pickup}
          />
          {pickupSuggestions.length > 0 && (
            <ul className="absolute bg-white border rounded mt-1 w-96 max-h-40 overflow-y-auto z-10">
              {pickupSuggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="cursor-pointer p-2 hover:bg-gray-200"
                  onClick={() => handleSuggestionClick("pickup", suggestion)}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="flex items-center w-full lg:w-auto">
        <div className="bg-gray-100 rounded-full p-2 mx-2">
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </div>
        <div className="w-full">
          <p className="text-gray-500 text-sm ml-3">{t.Booking.to}</p>
          <input
            className=" appearance-none rounded border lg:border-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
            id="dropoff"
            type="text"
            placeholder={t.Booking.destination}
            name="dropoff"
            value={bookingData.dropoff || ""}
            onChange={handleChange}
            required
          />
          {destinationSuggestions.length > 0 && (
            <ul className="absolute bg-white border rounded mt-1 w-96 max-h-40 overflow-y-auto z-10">
              {destinationSuggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="cursor-pointer p-2 hover:bg-gray-200"
                  onClick={() => handleSuggestionClick("dropoff", suggestion)}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="flex items-center w-full lg:w-auto">
        {/* <Link href="/booking"> */}
        <button
          onClick={handleSearch}
          className="bg-black w-full lg:w-auto text-white text-lg py-4 px-6 rounded-full hover:bg-gray-800 flex gap-2 items-center"
        >
          <CiSearch className="h-6 w-6" /> {t.Booking.Search}
        </button>
        {/* </Link> */}
      </div>
    </motion.div>
  );
}

export default Booking;
