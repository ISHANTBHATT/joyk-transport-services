// "use client";
// import React, { useState, useRef, useEffect } from "react";
// import Datepicker from "react-tailwindcss-datepicker";
// import { useRouter } from "next/navigation";
// import { motion } from "framer-motion";
// import { fadeIn } from "../../../variants";
// import { CiSearch } from "react-icons/ci";
// import { useSession } from "next-auth/react";
// import { SyncLoader } from "react-spinners";
// import Link from "next/link";
// const senegalLocations = [
//   "Dakar",
//   "Saint-Louis",
//   "Thiès",
//   "Ziguinchor",
//   "Kaolack",
//   "Touba",
//   "Mbour",
//   "Tambacounda",
//   "Diourbel",
//   "Kolda",
//   "Sédhiou",
//   "Matam",
//   "Kédougou",
//   "Cap Skirring",
//   "Blaise Diagne International Airport",
// ];
// function Booking() {
//   //   {
//   //   pickup: existingpickup,
//   //   dropoff: existingdropoff,
//   //   date: existingdate,
//   //   time: existingtime,
//   // }
//   const timeInputRef = useRef(null);
//   const [hasAnimated, setHasAnimated] = useState(false);
//   const [formData, setFormData] = useState({
//     pickup: "",
//     dropoff: "",
//     passengers: 1,
//     cars: 1,
//     date: "",
//     time: "",
//     returnTrip: false,
//     returnDate: "",
//   });
//   const [pickupSuggestions, setPickupSuggestions] = useState([]);
//   const [destinationSuggestions, setDestinationSuggestions] = useState([]);
//   const router = useRouter();
//   const { data: session, status } = useSession();
//   const [value, setValue] = useState({
//     startDate: null,
//     endDate: null,
//   });
//   const [isInitialized, setIsInitialized] = useState(false);
//   // console.log("value -->", value);
//   useEffect(() => {
//     const savedFormData = localStorage.getItem("bookingData");
//     if (savedFormData) {
//       const parsedData = JSON.parse(savedFormData);
//       setFormData(parsedData);

//       if (parsedData.date) {
//         const formattedDate = parsedData.date.split("T")[0];
//         // console.log("formattedDate --->", formattedDate);
//         setValue({
//           startDate: formattedDate,
//           endDate: formattedDate,
//         });
//         // console.log("value --->", value);
//       }
//     }
//     setIsInitialized(true);
//   }, []);
//   useEffect(() => {
//     // Save formData to localStorage whenever it changes
//     if (isInitialized) {
//       localStorage.setItem("bookingData", JSON.stringify(formData));
//       console.log(
//         "Updated bookingData in localStorage",
//         localStorage.getItem("bookingData")
//       );
//     }
//   }, [formData, isInitialized]);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     if (name === "passengers") {
//       const passengerCount = parseInt(value, 10);
//       const carCount = Math.ceil(passengerCount / 3);
//       setFormData((prevState) => ({
//         ...prevState,
//         passengers: passengerCount,
//         cars: carCount,
//       }));
//     } else {
//       setFormData((prevState) => ({
//         ...prevState,
//         [name]: type === "checkbox" ? checked : value,
//       }));
//     }
//     if (name === "pickup") {
//       const filteredPickupSuggestions = senegalLocations.filter((location) =>
//         location.toLowerCase().includes(value.toLowerCase())
//       );
//       setPickupSuggestions(filteredPickupSuggestions);
//     }
//     if (name === "dropoff") {
//       const filteredDestinationSuggestions = senegalLocations.filter(
//         (location) => location.toLowerCase().includes(value.toLowerCase())
//       );
//       setDestinationSuggestions(filteredDestinationSuggestions);
//     }
//     // localStorage.setItem("bookingData", JSON.stringify(formData));
//     // console.log("changing data", localStorage.getItem("bookingData"));
//   };
//   const handleSuggestionClick = (name, suggestion) => {
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: suggestion,
//     }));
//     if (name === "pickup") setPickupSuggestions([]);
//     if (name === "dropoff") setDestinationSuggestions([]);
//   };
//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   // localStorage.setItem("bookingFormData", JSON.stringify(formData));
//   //   const response = await fetch("/api/bookings", {
//   //     method: "POST",
//   //     headers: { "Content-Type": "application/json" },
//   //     body: JSON.stringify({ ...formData, userId: session.user.id }),
//   //   });
//   //   const data = await response.json();
//   //   if (data.success) {
//   //     alert("Booking successful!");
//   //     router.push("/history");
//   //   } else {
//   //     alert("Booking failed. Please try again.");
//   //   }
//   // };

//   if (status === "loading") {
//     return (
//       <div className="flex justify-center w-full">
//         <SyncLoader />
//       </div>
//     );
//   }
//   // if (status === "unauthenticated") {
//   //   router.push("/login");
//   //   return null;
//   // }
//   const handleSvgClick = () => {
//     // Trigger the input focus when the SVG is clicked
//     timeInputRef.current.click();
//   };
//   const handleSearch = () => {
//     localStorage.setItem("bookingData", JSON.stringify(formData));
//     router.push("/booking");
//   };

//   // console.log(formData);

//   return (
//     <motion.div
//       variants={fadeIn("up", 1.8)}
//       initial="hidden"
//       // whileInView="show"
//       animate={hasAnimated ? "show" : "hidden"}
//       exit="hidden"
//       onViewportEnter={() => {
//         if (!hasAnimated) {
//           setHasAnimated(true);
//         }
//       }}
//       className="bg-white p-4 lg:rounded-full shadow-md flex flex-col lg:flex-row items-center justify-between relative lg:absolute bottom-4 z-[1] gap-8 lg:h-28 h-full w-[80%]"
//     >
//       <div className="flex items-center lg:ml-6 w-full lg:w-auto">
//         <div className="w-full lg:w-auto">
//           <p className="text-gray-500 text-sm ml-3">Date</p>
//           <Datepicker
//             asSingle={true}
//             value={value}
//             // onChange={(newValue) => setValue(newValue)}
//             onChange={(newValue) => {
//               setValue(newValue); // Update Datepicker value
//               setFormData((prevState) => ({
//                 ...prevState,
//                 date: newValue.startDate, // Set formData date value from Datepicker
//               }));
//             }}
//             showShortcuts={true}
//             primaryColor={"orange"}
//             // theme={"light"}
//             inputClassName="w-full rounded-md border lg:border-none px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
//             toggleClassName="absolute right-0 h-full px-3 text-gray-400 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed"
//           />
//         </div>
//       </div>

//       <div className="flex items-center w-full lg:w-auto">
//         <div className="w-full lg:w-auto">
//           <p className="text-gray-500 text-sm ml-4">Time</p>
//           <input
//             className="custom-time-input appearance-none rounded-lg w-full py-2 px-3 text-gray-400 leading-tight border lg:border-none focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
//             id="time"
//             type="time"
//             name="time"
//             value={formData.time}
//             onChange={handleChange}
//             required
//           />

//           {/* <p className="font-medium">08 AM : 00</p> */}
//         </div>
//       </div>

//       <div className="flex items-center w-full lg:w-auto">
//         <div className="bg-gray-100 rounded-full p-2 mx-2">
//           <svg
//             className="w-6 h-6 text-gray-600 transform rotate-180"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M13 7l5 5m0 0l-5 5m5-5H6"
//             />
//           </svg>
//         </div>
//         <div className="w-full">
//           <p className="text-gray-500 text-sm ml-3">From</p>
//           <input
//             className="appearance-none border lg:border-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
//             id="pickup"
//             name="pickup"
//             value={formData.pickup}
//             onChange={handleChange}
//             required
//             type="text"
//             placeholder="Enter pickup location"
//           />
//           {pickupSuggestions.length > 0 && (
//             <ul className="absolute bg-white border rounded mt-1 w-96 max-h-40 overflow-y-auto z-10">
//               {pickupSuggestions.map((suggestion, index) => (
//                 <li
//                   key={index}
//                   className="cursor-pointer p-2 hover:bg-gray-200"
//                   onClick={() => handleSuggestionClick("pickup", suggestion)}
//                 >
//                   {suggestion}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//       </div>

//       <div className="flex items-center w-full lg:w-auto">
//         <div className="bg-gray-100 rounded-full p-2 mx-2">
//           <svg
//             className="w-6 h-6 text-gray-600"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M13 7l5 5m0 0l-5 5m5-5H6"
//             />
//           </svg>
//         </div>
//         <div className="w-full">
//           <p className="text-gray-500 text-sm ml-3">To</p>
//           <input
//             className=" appearance-none rounded border lg:border-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
//             id="dropoff"
//             type="text"
//             placeholder="Enter destination"
//             name="dropoff"
//             value={formData.dropoff}
//             onChange={handleChange}
//             required
//           />
//           {destinationSuggestions.length > 0 && (
//             <ul className="absolute bg-white border rounded mt-1 w-96 max-h-40 overflow-y-auto z-10">
//               {destinationSuggestions.map((suggestion, index) => (
//                 <li
//                   key={index}
//                   className="cursor-pointer p-2 hover:bg-gray-200"
//                   onClick={() => handleSuggestionClick("dropoff", suggestion)}
//                 >
//                   {suggestion}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//       </div>

//       <div className="flex items-center w-full lg:w-auto">
//         {/* <Link href="/booking"> */}
//         <button
//           onClick={handleSearch}
//           className="bg-black w-full lg:w-auto text-white text-lg py-4 px-6 rounded-full hover:bg-gray-800 flex gap-2 items-center"
//         >
//           <CiSearch className="h-6 w-6" /> Search
//         </button>
//         {/* </Link> */}
//       </div>
//     </motion.div>
//   );
// }

// export default Booking;

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
const senegalLocations = [
  "Dakar",
  "Saint-Louis",
  "Thiès",
  "Ziguinchor",
  "Kaolack",
  "Touba",
  "Mbour",
  "Tambacounda",
  "Diourbel",
  "Kolda",
  "Sédhiou",
  "Matam",
  "Kédougou",
  "Cap Skirring",
  "Blaise Diagne International Airport",
];
function Booking({ bookingData, setBookingData }) {
  const [hasAnimated, setHasAnimated] = useState(false);

  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);
  const router = useRouter();
  const { data: session, status } = useSession();
  // const date = new Date(bookingData.date);
  // const inputdate = date.toISOString().split("T")[0];
  // console.log("date -->", inputdate);
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
    router.push("/booking");
  };

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
            // onChange={(newValue) => setValue(newValue)}
            onChange={(newValue) => {
              setValue(newValue); // Update Datepicker value
              setBookingData((prevState) => ({
                ...prevState,
                date: newValue.startDate
                  ? new Date(newValue.startDate).toISOString()
                  : null, // Set formData date value from Datepicker
              }));
            }}
            required={true}
            showShortcuts={true}
            primaryColor={"orange"}
            // theme={"light"}
            inputClassName="w-full rounded-md border lg:border-none px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
            toggleClassName="absolute right-0 h-full px-3 text-gray-400 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed"
          />
        </div>
      </div>

      <div className="flex items-center w-full lg:w-auto">
        <div className="w-full lg:w-auto">
          <p className="text-gray-500 text-sm ml-4">Time</p>
          <input
            className="custom-time-input appearance-none rounded-lg w-full py-2 px-3 text-gray-400 leading-tight border lg:border-none focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
            id="time"
            type="time"
            name="time"
            value={bookingData.time || ""}
            onChange={handleChange}
            required
          />

          {/* <p className="font-medium">08 AM : 00</p> */}
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
          <p className="text-gray-500 text-sm ml-3">From</p>
          <input
            className="appearance-none border lg:border-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
            id="pickup"
            name="pickup"
            value={bookingData.pickup || ""}
            onChange={handleChange}
            required
            type="text"
            placeholder="Enter pickup location"
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
          <p className="text-gray-500 text-sm ml-3">To</p>
          <input
            className=" appearance-none rounded border lg:border-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
            id="dropoff"
            type="text"
            placeholder="Enter destination"
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
          <CiSearch className="h-6 w-6" /> Search
        </button>
        {/* </Link> */}
      </div>
    </motion.div>
  );
}

export default Booking;
