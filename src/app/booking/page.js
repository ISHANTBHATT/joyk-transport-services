// "use client";
// import React, { useEffect, useState } from "react";
// import Booking from "../components/Booking";
// import { FaCar } from "react-icons/fa";
// import { IoPeople } from "react-icons/io5";
// import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";
// function Page() {
//   const [bookingData, setBookingData] = useState({});
//   const { data: session, status } = useSession();
//   const router = useRouter();
//   // const handleBookingData = (data) => {
//   //   setBookingData(data);
//   //   console.log("Received booking data:", data);
//   // };
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "passengers") {
//       const passengerCount = parseInt(value, 10);
//       const carCount = Math.ceil(passengerCount / 3);
//       setBookingData((prevState) => ({
//         ...prevState,
//         passengers: passengerCount,
//         cars: carCount,
//       }));
//     } else {
//       setBookingData((prevState) => ({
//         ...prevState,
//         [name]: value,
//       }));
//     }
//     // console.log("bookingData -->", bookingData);
//   };

//   useEffect(() => {
//     const savedFormData = localStorage.getItem("bookingData");
//     if (savedFormData) {
//       // const parsedData = JSON.parse(savedFormData);
//       setBookingData(JSON.parse(savedFormData));
//     }
//   }, []);
//   // useEffect(() => {
//   //   if (Object.keys(bookingData).length > 0) {
//   //     localStorage.setItem("bookingData", JSON.stringify(bookingData));
//   //   }
//   // }, [bookingData]);
//   // console.log("bookingData -->", bookingData);
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("bookingData -->", bookingData);
//     // if (status === "authenticated") {
//     //   const response = await fetch("/api/bookings", {
//     //     method: "POST",
//     //     headers: { "Content-Type": "application/json" },
//     //     body: JSON.stringify({ ...bookingData, userId: session.user.id }),
//     //   });
//     //   const data = await response.json();
//     //   if (data.success) {
//     //     alert("Booking successful!");
//     //     router.push("/booking-history");
//     //   } else {
//     //     alert("Booking failed. Please try again.");
//     //   }
//     // } else {
//     //   router.push("/login");
//     //   return null;
//     // }
//   };
//   return (
//     <div className="w-full py-20 lg:py-40">
//       <div className="relative w-full h-full flex justify-center">
//         <Booking />
//       </div>
//       <div className="w-full md:px-20">
//         <div className="flex flex-col lg:flex-row shadow p-8 justify-between">
//           <div className="">
//             <p className="text-3xl font-semibold">RIDE</p>
//             <p className="text-gray-500 text-sm">
//               Reliable ride at the best price.
//             </p>
//             <div className="flex flex-col mt-8 gap-2">
//               <div className="flex gap-4 items-center">
//                 <IoPeople className="h-6 w-6" />
//                 <input
//                   className="appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                   id="passengers"
//                   type="number"
//                   min="1"
//                   name="passengers"
//                   value={bookingData.passengers}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <p className="text-sm text-gray-500">Passengers</p>
//             </div>
//             <div className="flex flex-col mt-8 gap-2">
//               <div className="flex gap-4 items-center">
//                 <FaCar className="h-6 w-6" />
//                 <input
//                   className="appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                   id="cars"
//                   type="number"
//                   min="1"
//                   name="cars"
//                   value={bookingData.cars}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <p className="text-sm text-gray-500">Cars</p>
//             </div>
//           </div>
//           <div>
//             <img src="/images/img-vehicle.png" />
//           </div>
//           <div className="flex flex-col justify-between pe-20 gap-10 lg:gap-0">
//             <div className="flex flex-col">
//               <div className="flex gap-2 items-center">
//                 <svg
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     fill-rule="evenodd"
//                     clip-rule="evenodd"
//                     d="M5.38551 6.8424L1 2.45688L2.45688 1L6.45688 5H17.8712L19.802 9.78483L22.0001 11.2599V20H21.4569L23 21.5431L21.5431 23L18.5431 20H16V18H8V20H2.0001V11.2599L4.19816 9.78483L5.38551 6.8424ZM14.5431 16L13.5431 15H9V13H11.5431L10.5431 12H4.5L4.0001 12.3263V13H7V15H4.0001V18H6V16H14.5431ZM18 16H17.4569L15 13.5431V13H14.4569L13.4569 12H19.5L20.0001 12.3263V13H17V15H20.0001V18H19.4569L18 16.5431V16ZM8.54312 10L6.8498 8.30668L6.2 10H8.54312ZM17.8 10H11.4569L8.45688 7H16.649L17.8 10Z"
//                     fill="#191919"
//                   ></path>
//                 </svg>
//                 <div className="text-white p-2 text-xs bg-gray-700 rounded">
//                   <p>Free cancellation</p>
//                 </div>
//               </div>
//               <p className="text-gray-500 text-sm">
//                 Up to 12 hour before pickup time.
//               </p>
//             </div>
//             <div className="flex">
//               <p className="font-semibold w-full pt-4 text-center">
//                 $ <span className="text-3xl">23</span>.99
//               </p>
//               <button
//                 onClick={handleSubmit}
//                 className=" relative flex gap-2 h-[50px] w-full items-center justify-center overflow-hidden bg-black text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0  before:bg-orange-600 before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-full rounded-lg"
//               >
//                 <span className="relative z-10 ">Book</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Page;

//working
// "use client";
// import React, { useEffect, useState, useMemo } from "react";
// import Booking from "../components/Booking";
// import { FaCar } from "react-icons/fa";
// import { IoPeople } from "react-icons/io5";
// import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import { ClipLoader } from "react-spinners";

// function Page() {
//   const [bookingData, setBookingData] = useState({
//     pickup: "",
//     dropoff: "",
//     passengers: 1,
//     cars: 1,
//     date: "",
//     time: "",
//     returnTrip: false,
//     returnDate: "",
//     price: "",
//   });
//   const [isloading, setIsloading] = useState(false);

//   const { data: session, status } = useSession();
//   const router = useRouter();

//   // Load booking data from localStorage on component mount
//   useEffect(() => {
//     const savedFormData = localStorage.getItem("bookingData");
//     if (savedFormData) {
//       setBookingData(JSON.parse(savedFormData));
//     }
//   }, []);

//   const calculatePrice = useMemo(() => {
//     let price = 23.99;
//     if (bookingData.returnTrip) {
//       price *= bookingData.cars;
//       price *= 2;
//       price = price * 0.9;
//       // price = price - price * 0.1;
//     } else {
//       price *= bookingData.cars;
//     }
//     // bookingData.price = price.toFixed(2);
//     return price.toFixed(2);
//   }, [bookingData.returnTrip, bookingData.cars]);
//   // Update localStorage whenever bookingData changes
//   // useEffect(() => {
//   //   if (Object.keys(bookingData).length > 0) {
//   //     localStorage.setItem("bookingData", JSON.stringify(bookingData));
//   //   }
//   // }, [bookingData]);

//   useEffect(() => {
//     setBookingData((prevState) => ({
//       ...prevState,
//       price: calculatePrice,
//     }));
//   }, [calculatePrice]);

//   // Handle form changes
//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     if (name === "passengers") {
//       const passengerCount = parseInt(value, 10);
//       const carCount = Math.ceil(passengerCount / 3);
//       setBookingData((prevState) => ({
//         ...prevState,
//         passengers: passengerCount,
//         cars: carCount,
//       }));
//     } else {
//       setBookingData((prevState) => ({
//         ...prevState,
//         // [name]: value,
//         [name]: type === "checkbox" ? checked : value,
//       }));
//     }
//   };

//   // console.log(session.user.name);
//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // console.log(session.user.name);

//     setIsloading(true);
//     if (status === "authenticated") {
//       const response = await fetch("/api/bookings", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ ...bookingData, userId: session.user.id }),
//       });

//       const data = await response.json();
//       console.log("bookingData -->", bookingData.price);

//       if (data.success) {
//         // Send email after successful booking
//         const dataid = data.data._id;
//         await fetch("/api/send-email", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             dataid,
//             bookingData,
//             userEmail: session.user.email, // User's email from session
//             userName: session.user.name, // User's name from session
//           }),
//         });
//         alert("Booking successful! A confirmation email has been sent.");
//         router.push("/booking-history");
//       }
//       // if (data.success) {
//       //   alert("Booking successful!");
//       //   router.push("/booking-history");
//       // }
//       else {
//         alert("Booking failed. Please try again.");
//       }
//     } else {
//       router.push("/login");
//       return null;
//     }

//     setIsloading(false);
//     localStorage.removeItem("bookingData");
//   };

//   const formatDateTimeLocal = (date) => {
//     const d = new Date(date);
//     const year = d.getFullYear();
//     const month = String(d.getMonth() + 1).padStart(2, "0");
//     const day = String(d.getDate()).padStart(2, "0");
//     const hours = String(d.getHours()).padStart(2, "0");
//     const minutes = String(d.getMinutes()).padStart(2, "0");
//     return `${year}-${month}-${day}T${hours}:${minutes}`;
//   };

//   // console.log("bookingData date -->", new Date(bookingData.date));
//   return (
//     <div className="w-full py-20 lg:py-40">
//       <div className="relative w-full h-full flex justify-center">
//         {/* Pass bookingData and handleChange to Booking component */}
//         <Booking bookingData={bookingData} setBookingData={setBookingData} />
//       </div>
//       <div className="w-full md:px-20">
//         <div className="flex flex-col lg:flex-row shadow p-8 justify-between">
//           <div className="">
//             <p className="text-3xl font-semibold">RIDE</p>
//             <p className="text-gray-500 text-sm">
//               Reliable ride at the best price.
//             </p>
//             <div className="flex flex-col mt-8 gap-2">
//               <div className="flex gap-4 items-center">
//                 <IoPeople className="h-6 w-6" />
//                 <input
//                   className="appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                   id="passengers"
//                   type="number"
//                   min="1"
//                   name="passengers"
//                   value={bookingData.passengers}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <p className="text-sm text-gray-500">Passengers</p>
//             </div>
//             <div className="flex flex-col mt-8 gap-2">
//               <div className="flex gap-4 items-center">
//                 <FaCar className="h-6 w-6" />
//                 <input
//                   className="appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                   id="cars"
//                   type="number"
//                   min="1"
//                   name="cars"
//                   value={bookingData.cars}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <p className="text-sm text-gray-500">Cars</p>
//             </div>
//           </div>
//           <div>
//             <img src="/images/img-vehicle.png" />
//           </div>
//           <div className="flex flex-col justify-between pe-20 gap-10 lg:gap-0">
//             <div className="flex flex-col">
//               <div className="flex gap-2 items-center">
//                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
//                   <svg
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       fill-rule="evenodd"
//                       clip-rule="evenodd"
//                       d="M5.38551 6.8424L1 2.45688L2.45688 1L6.45688 5H17.8712L19.802 9.78483L22.0001 11.2599V20H21.4569L23 21.5431L21.5431 23L18.5431 20H16V18H8V20H2.0001V11.2599L4.19816 9.78483L5.38551 6.8424ZM14.5431 16L13.5431 15H9V13H11.5431L10.5431 12H4.5L4.0001 12.3263V13H7V15H4.0001V18H6V16H14.5431ZM18 16H17.4569L15 13.5431V13H14.4569L13.4569 12H19.5L20.0001 12.3263V13H17V15H20.0001V18H19.4569L18 16.5431V16ZM8.54312 10L6.8498 8.30668L6.2 10H8.54312ZM17.8 10H11.4569L8.45688 7H16.649L17.8 10Z"
//                       fill="#191919"
//                     ></path>
//                   </svg>
//                 </svg>
//                 <div className="text-white p-2 text-xs bg-gray-700 rounded">
//                   <p>Free cancellation</p>
//                 </div>
//               </div>
//               <p className="text-gray-500 text-sm">
//                 Up to 12 hour before pickup time.
//               </p>
//             </div>
//             <div className="flex flex-col">
//               <div className="flex flex-col gap-2 items-center">
//                 <label className="flex items-center">
//                   <input
//                     type="checkbox"
//                     name="returnTrip"
//                     checked={bookingData.returnTrip}
//                     onChange={handleChange}
//                     className="form-checkbox h-5 w-5 text-indigo-600"
//                   />
//                   <span className="ml-2 text-gray-700">
//                     Book a return trip (10% discount)
//                   </span>
//                 </label>
//                 {bookingData.returnTrip && (
//                   <div className="mb-4">
//                     <label
//                       className="block text-gray-500 text-sm mb-2 ml-4"
//                       htmlFor="returnDate"
//                     >
//                       Return Date and Time
//                     </label>
//                     <input
//                       className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                       id="returnDate"
//                       type="datetime-local"
//                       name="returnDate"
//                       value={bookingData.returnDate}
//                       onChange={handleChange}
//                       min={formatDateTimeLocal(bookingData.date)}
//                       required
//                     />
//                   </div>
//                 )}
//               </div>
//             </div>
//             <div className="flex">
//               <p className="font-semibold w-full pt-4 text-center">
//                 $ <span className="text-3xl">{calculatePrice}</span>
//               </p>
//               <button
//                 onClick={handleSubmit}
//                 className="relative flex gap-2 h-[50px] w-full items-center justify-center  overflow-hidden bg-black text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0  before:bg-orange-600 before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-full rounded-lg"
//               >
//                 {isloading ? (
//                   <>
//                     <ClipLoader color="#ffffff" />
//                   </>
//                 ) : (
//                   <>
//                     <span className="relative z-10 ">Book</span>
//                   </>
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Page;

// "use client";
// import React, { useEffect, useState, useMemo } from "react";
// import Booking from "../components/Booking";
// import { FaCar } from "react-icons/fa";
// import { IoPeople } from "react-icons/io5";
// import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import { ClipLoader } from "react-spinners";

// function Page() {
//   const [bookingData, setBookingData] = useState({
//     pickup: "",
//     dropoff: "",
//     passengers: 1,
//     cars: 1,
//     date: "",
//     time: "",
//     returnTrip: false,
//     returnDate: "",
//     returnTime: "",
//     price: "",
//     vehicleType: "",
//   });
//   const [isloading, setIsloading] = useState(false);

//   const { data: session, status } = useSession();
//   const router = useRouter();

//   // Load booking data from localStorage on component mount
//   useEffect(() => {
//     const savedFormData = localStorage.getItem("bookingData");
//     if (savedFormData) {
//       setBookingData(JSON.parse(savedFormData));
//     }
//   }, []);

//   const calculatePrice = useMemo(() => {
//     let basePrice;
//     switch (bookingData.vehicleType) {
//       case "sedan":
//         basePrice = 50;
//         break;
//       case "4x4":
//         basePrice = 100;
//         break;
//       case "van":
//         basePrice = 100;
//         break;
//       default:
//         basePrice = 50;
//     }
//     let price = basePrice * bookingData.cars;
//     if (bookingData.vehicleType === "van" && bookingData.passengers > 5) {
//       price += (bookingData.passengers - 5) * 20;
//     }
//     if (bookingData.returnTrip) {
//       price *= 2;
//       price = price * 0.9;
//       // price = price - price * 0.1;
//     }
//     // bookingData.price = price.toFixed(2);
//     return price.toFixed(2);
//   }, [
//     bookingData.vehicleType,
//     bookingData.returnTrip,
//     bookingData.cars,
//     bookingData.passengers,
//   ]);

//   // Update localStorage whenever bookingData changes
//   // useEffect(() => {
//   //   if (Object.keys(bookingData).length > 0) {
//   //     localStorage.setItem("bookingData", JSON.stringify(bookingData));
//   //   }
//   // }, [bookingData]);

//   useEffect(() => {
//     setBookingData((prevState) => ({
//       ...prevState,
//       price: calculatePrice,
//     }));
//   }, [calculatePrice]);

//   // Handle form changes
//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     if (name === "passengers") {
//       let seats;
//       switch (bookingData.vehicleType) {
//         // case "sedan":
//         //   seats = 3;
//         //   break;
//         // case "4x4":
//         //   seats = 3;
//         //   break;
//         case "van":
//           seats = 14;
//           break;
//         default:
//           seats = 3;
//       }
//       const passengerCount = parseInt(value, 10);
//       const carCount = Math.ceil(passengerCount / seats);
//       setBookingData((prevState) => ({
//         ...prevState,
//         passengers: passengerCount,
//         cars: carCount,
//       }));
//     } else {
//       setBookingData((prevState) => ({
//         ...prevState,
//         // [name]: value,
//         [name]: type === "checkbox" ? checked : value,
//       }));
//     }
//   };

//   // console.log(session.user.name);
//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // console.log(session.user.name);
//     setIsloading(true);
//     // console.log(bookingData.vehicleType);
//     if (
//       bookingData.returnTrip &&
//       (!bookingData.returnDate || !bookingData.returnTime)
//     ) {
//       alert(
//         "Please enter both return date and return time for the return trip."
//       );
//       setIsloading(false);
//       return;
//     }

//     if (status === "authenticated") {
//       const response = await fetch("/api/bookings", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ ...bookingData, userId: session.user.id }),
//       });

//       const data = await response.json();
//       // console.log("bookingData -->", bookingData.price);

//       if (data.success) {
//         // Send email after successful booking
//         const dataid = data.data._id;
//         await fetch("/api/send-email", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             dataid,
//             bookingData,
//             userEmail: session.user.email,
//             userName: session.user.name,
//           }),
//         });
//         alert("Booking successful! A confirmation email has been sent.");
//         router.push("/booking-history");
//       }
//       // if (data.success) {
//       //   alert("Booking successful!");
//       //   router.push("/booking-history");
//       // }
//       else {
//         alert("Booking failed. Please try again.");
//       }
//     } else {
//       router.push("/login");
//       return null;
//     }

//     setIsloading(false);
//     localStorage.removeItem("bookingData");
//     console.log("booked");
//   };

//   const formatDateTimeLocal = (date) => {
//     const d = new Date(date);
//     const year = d.getFullYear();
//     const month = String(d.getMonth() + 1).padStart(2, "0");
//     const day = String(d.getDate()).padStart(2, "0");
//     // const hours = String(d.getHours()).padStart(2, "0");
//     // const minutes = String(d.getMinutes()).padStart(2, "0");
//     return `${year}-${month}-${day}`;
//     // return `${year}-${month}-${day}T${hours}:${minutes}`;
//   };

//   // console.log("bookingData date -->", new Date(bookingData.date));
//   return (
//     <div className="w-full py-20 lg:py-40">
//       <div className="relative w-full h-full flex justify-center">
//         {/* Pass bookingData and handleChange to Booking component */}
//         <Booking bookingData={bookingData} setBookingData={setBookingData} />
//       </div>
//       <div className="w-full md:px-20">
//         <form>
//           <div className="flex flex-col lg:flex-row shadow p-8 justify-between">
//             <div className="">
//               <p className="text-3xl font-semibold">RIDE</p>
//               <p className="text-gray-500 text-sm">
//                 Reliable ride at the best price.
//               </p>
//               <div className="flex flex-col mt-8 gap-2">
//                 <div className="flex gap-4 items-center">
//                   <IoPeople className="h-6 w-6" />
//                   <input
//                     className="appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                     id="passengers"
//                     type="number"
//                     min="1"
//                     name="passengers"
//                     value={bookingData.passengers}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//                 <p className="text-sm text-gray-500">Passengers</p>
//               </div>
//               <div className="flex flex-col mt-8 gap-2">
//                 <div className="flex gap-4 items-center">
//                   <FaCar className="h-6 w-6" />
//                   <input
//                     className="appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                     id="cars"
//                     type="number"
//                     min="1"
//                     name="cars"
//                     value={bookingData.cars}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//                 <p className="text-sm text-gray-500">Cars</p>
//               </div>
//             </div>
//             <div className="flex flex-col items-center">
//               {bookingData.vehicleType ? (
//                 <img src={`/images/${bookingData.vehicleType}.png`} alt="" />
//               ) : (
//                 <img src="/images/sedan.png" alt="" />
//               )}

//               <select
//                 name="vehicleType"
//                 value={bookingData.vehicleType}
//                 onChange={handleChange}
//                 className="w-full p-2 border border-gray-300 rounded-md"
//               >
//                 <option value="">Select the Vehicle Type</option>
//                 <option value="sedan">Sedan</option>
//                 <option value="4x4">4x4</option>
//                 <option value="van">Van</option>
//               </select>
//             </div>
//             <div className="flex flex-col justify-between  gap-10 lg:gap-0 mt-6 lg:mt-0">
//               <div className="flex flex-col">
//                 <div className="flex gap-2 items-center">
//                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
//                     <svg
//                       width="24"
//                       height="24"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         fill-rule="evenodd"
//                         clip-rule="evenodd"
//                         d="M5.38551 6.8424L1 2.45688L2.45688 1L6.45688 5H17.8712L19.802 9.78483L22.0001 11.2599V20H21.4569L23 21.5431L21.5431 23L18.5431 20H16V18H8V20H2.0001V11.2599L4.19816 9.78483L5.38551 6.8424ZM14.5431 16L13.5431 15H9V13H11.5431L10.5431 12H4.5L4.0001 12.3263V13H7V15H4.0001V18H6V16H14.5431ZM18 16H17.4569L15 13.5431V13H14.4569L13.4569 12H19.5L20.0001 12.3263V13H17V15H20.0001V18H19.4569L18 16.5431V16ZM8.54312 10L6.8498 8.30668L6.2 10H8.54312ZM17.8 10H11.4569L8.45688 7H16.649L17.8 10Z"
//                         fill="#191919"
//                       ></path>
//                     </svg>
//                   </svg>
//                   <div className="text-white p-2 text-xs bg-gray-700 rounded">
//                     <p>Free cancellation</p>
//                   </div>
//                 </div>
//                 <p className="text-gray-500 text-sm">
//                   Up to 12 hour before pickup time.
//                 </p>
//               </div>
//               <div className="flex flex-col mt-4">
//                 <div className="flex flex-col gap-2 ">
//                   <label className="flex items-center">
//                     <input
//                       type="checkbox"
//                       name="returnTrip"
//                       checked={bookingData.returnTrip}
//                       onChange={handleChange}
//                       className="form-checkbox h-5 w-5 text-indigo-600"
//                     />
//                     <span className="ml-2 text-gray-700">
//                       Book a return trip (10% discount)
//                     </span>
//                   </label>
//                   {bookingData.returnTrip && (
//                     <div className="mb-4">
//                       <label
//                         className="block text-gray-500 text-sm mb-2"
//                         htmlFor="returnDate"
//                       >
//                         Return Date and Time
//                       </label>
//                       <input
//                         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                         id="returnDate"
//                         type="date"
//                         name="returnDate"
//                         value={bookingData.returnDate}
//                         onChange={handleChange}
//                         min={formatDateTimeLocal(bookingData.date)}
//                         required
//                       />
//                       <input
//                         className="mt-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                         id="returnTime"
//                         type="time"
//                         name="returnTime"
//                         value={bookingData.returnTime}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>
//                   )}
//                 </div>
//               </div>
//               <div className="flex">
//                 <p className="font-semibold w-full pt-4 text-center">
//                   $ <span className="text-3xl">{calculatePrice}</span>
//                 </p>
//                 <button
//                   onClick={handleSubmit}
//                   className="relative flex gap-2 h-[50px] w-full items-center justify-center  overflow-hidden bg-black text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0  before:bg-orange-600 before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-full rounded-lg"
//                 >
//                   {isloading ? (
//                     <>
//                       <ClipLoader color="#ffffff" />
//                     </>
//                   ) : (
//                     <>
//                       <span className="relative z-10 ">Book</span>
//                     </>
//                   )}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Page;

"use client";

import React, { useEffect, useState, useMemo } from "react";
import Booking from "../components/Booking";
import { FaCar } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ClipLoader } from "react-spinners";
import { MdAirlineSeatReclineNormal, MdFlight } from "react-icons/md";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

export default function Component() {
  const { language, changeLanguage } = useLanguage();
  const t = translations[language];
  const [bookingData, setBookingData] = useState({
    pickup: "",
    dropoff: "",
    passengers: 1,
    cars: 1,
    date: "",
    time: "",
    returnTrip: false,
    returnDate: "",
    returnTime: "",
    price: "",
    vehicleType: "",
    flight: "",
  });
  const [isloading, setIsloading] = useState(false);

  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    const savedFormData = localStorage.getItem("bookingData");
    if (savedFormData) {
      setBookingData(JSON.parse(savedFormData));
    }
  }, []);

  const calculatePrice = useMemo(() => {
    let basePrice;
    switch (bookingData.vehicleType) {
      case "sedan":
        basePrice = 50;
        basePrice = basePrice * bookingData.cars;
        break;
      case "4x4":
        basePrice = 100;
        basePrice = basePrice * bookingData.cars;
        break;
      case "van":
        basePrice = 100;
        const vans = Math.ceil(bookingData.passengers / 14);
        let totalExtraPassengers = 0;
        for (let i = 0; i < vans; i++) {
          const passengersInThisVan = Math.min(
            bookingData.passengers - i * 14,
            14
          );
          if (passengersInThisVan > 5) {
            totalExtraPassengers += passengersInThisVan - 5;
          }
        }
        basePrice = basePrice * vans + totalExtraPassengers * 20;
        break;
      default:
        basePrice = 50;
        basePrice = basePrice * bookingData.cars;
    }
    let price = basePrice;

    if (bookingData.returnTrip) {
      price *= 2;
      price = price * 0.9;
    }
    return price.toFixed(2);
  }, [
    bookingData.vehicleType,
    bookingData.returnTrip,
    bookingData.passengers,
    bookingData.cars,
  ]);

  useEffect(() => {
    setBookingData((prevState) => ({
      ...prevState,
      price: calculatePrice,
    }));
  }, [calculatePrice]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "passengers") {
      let carCount;
      const passengerCount = parseInt(value, 10);
      switch (bookingData.vehicleType) {
        case "van":
          carCount = Math.ceil(passengerCount / 14);
          break;
        default:
          carCount = Math.ceil(passengerCount / 3);
      }
      setBookingData((prevState) => ({
        ...prevState,
        passengers: passengerCount,
        cars: carCount,
      }));
    } else if (name === "vehicleType") {
      let carCount;
      if (value === "van") {
        carCount = Math.ceil(bookingData.passengers / 14);
      } else {
        carCount = Math.ceil(bookingData.passengers / 3);
      }
      setBookingData((prevState) => ({
        ...prevState,
        vehicleType: value,
        cars: carCount,
      }));
    } else {
      setBookingData((prevState) => ({
        ...prevState,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsloading(true);
    if (
      bookingData.returnTrip &&
      (!bookingData.returnDate || !bookingData.returnTime)
    ) {
      alert(
        "Please enter both return date and return time for the return trip."
      );
      setIsloading(false);
      return;
    }

    if (status === "authenticated") {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...bookingData, userId: session.user.id }),
      });

      const data = await response.json();
      // console.log(session.user.phone);
      if (data.success) {
        const dataid = data.data._id;
        await fetch("/api/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            dataid,
            bookingData,
            userEmail: session.user.email,
            userName: session.user.name,
            phone: session.user.phone,
          }),
        });
        alert("Booking successful! A confirmation email has been sent.");
        router.push("/booking-history");
      } else {
        alert("Booking failed. Please try again.");
      }
    } else {
      router.push("/login");
      return null;
    }

    setIsloading(false);
    localStorage.removeItem("bookingData");
  };

  const formatDateTimeLocal = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  const formatDateForInput = (date) => {
    return date ? date.split("T")[0] : "";
  };
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="relative w-full h-full flex justify-center">
        <Booking bookingData={bookingData} setBookingData={setBookingData} />
      </div>
      <div className="w-full md:px-20">
        <form>
          <div className="flex flex-col lg:flex-row shadow p-8 justify-between gap-4">
            <div className="">
              <p className="text-3xl font-semibold">{t.Booking.Ride}</p>
              <p className="text-gray-500 text-sm">{t.Booking.Reliable}</p>
              <div className="flex flex-col mt-8 gap-2">
                <div className="flex gap-4 items-center">
                  <IoPeople className="h-6 w-6" />
                  <input
                    className="appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="passengers"
                    type="number"
                    min="1"
                    name="passengers"
                    value={bookingData.passengers}
                    onChange={handleChange}
                    required
                  />
                </div>
                <p className="text-sm text-gray-500">{t.Booking.Passengers}</p>
              </div>
              <div className="flex flex-col mt-8 gap-2">
                <div className="flex gap-4 items-center">
                  <FaCar className="h-6 w-6" />
                  <input
                    className="appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="cars"
                    type="number"
                    min="1"
                    name="cars"
                    value={bookingData.cars}
                    onChange={handleChange}
                    required
                  />
                </div>
                <p className="text-sm text-gray-500">{t.Booking.Cars}</p>
              </div>
              <div className="flex flex-col mt-8 gap-2">
                <div className="flex gap-4 items-center">
                  <MdFlight className="h-6 w-6" />
                  <input
                    className="appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="flight"
                    type="text"
                    min="1"
                    name="flight"
                    value={bookingData.flight}
                    onChange={handleChange}
                    required
                  />
                </div>
                <p className="text-sm text-gray-500">{t.Booking.Flight}</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              {bookingData.vehicleType ? (
                <img src={`/images/${bookingData.vehicleType}.png`} alt="" />
              ) : (
                <img src="/images/sedan.png" alt="" />
              )}

              <select
                name="vehicleType"
                value={bookingData.vehicleType}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">{t.Booking.Select}</option>
                <option value="sedan">Sedan</option>
                <option value="4x4">4x4</option>
                <option value="van">Van</option>
              </select>
            </div>
            <div className="flex flex-col justify-between gap-10 lg:gap-4 mt-6 lg:mt-0 lg:pt-14">
              <div className="flex flex-col">
                <div className="flex gap-2 items-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.38551 6.8424L1 2.45688L2.45688 1L6.45688 5H17.8712L19.802 9.78483L22.0001 11.2599V20H21.4569L23 21.5431L21.5431 23L18.5431 20H16V18H8V20H2.0001V11.2599L4.19816 9.78483L5.38551 6.8424ZM14.5431 16L13.5431 15H9V13H11.5431L10.5431 12H4.5L4.0001 12.3263V13H7V15H4.0001V18H6V16H14.5431ZM18 16H17.4569L15 13.5431V13H14.4569L13.4569 12H19.5L20.0001 12.3263V13H17V15H20.0001V18H19.4569L18 16.5431V16ZM8.54312 10L6.8498 8.30668L6.2 10H8.54312ZM17.8 10H11.4569L8.45688 7H16.649L17.8 10Z"
                        fill="#191919"
                      ></path>
                    </svg>
                  </svg>
                  <div className="text-white p-2 text-xs bg-gray-700 rounded ml-1.5">
                    <p>{t.Booking.Free}</p>
                  </div>
                </div>
                <p className="text-gray-500 text-sm pt-3">
                  {t.Booking.cancellation}
                </p>
              </div>
              <div className="flex flex-col">
                <div className="flex gap-2 items-center">
                  <MdAirlineSeatReclineNormal className="text-3xl" />
                  <div className="text-white p-2 text-xs bg-gray-700 rounded">
                    <p>
                      {t.Booking.Passengers}{" "}
                      {bookingData.vehicleType === "van" ? 14 : 3}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-col gap-2 ">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="returnTrip"
                      checked={bookingData.returnTrip}
                      onChange={handleChange}
                      className="form-checkbox h-5 w-5 text-indigo-600"
                    />
                    <span className="ml-2 text-gray-700">
                      {t.Booking.discount}
                    </span>
                  </label>
                  {bookingData.returnTrip && (
                    <div className="mb-4">
                      <label
                        className="block text-gray-500 text-sm mb-2"
                        htmlFor="returnDate"
                      >
                        {t.Booking.return}
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="returnDate"
                        type="date"
                        name="returnDate"
                        value={formatDateForInput(bookingData.returnDate)}
                        // value={bookingData.returnDate}
                        onChange={handleChange}
                        min={formatDateTimeLocal(bookingData.date)}
                        required
                      />
                      <input
                        className="mt-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="returnTime"
                        type="time"
                        name="returnTime"
                        value={bookingData.returnTime}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="flex">
                <p className="font-semibold w-full pt-4 text-center">
                  $ <span className="text-3xl">{calculatePrice}</span>
                </p>
                <button
                  onClick={handleSubmit}
                  className="relative flex gap-2 h-[50px] w-full items-center justify-center  overflow-hidden bg-black text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0  before:bg-orange-600 before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-full rounded-lg"
                >
                  {isloading ? (
                    <>
                      <ClipLoader color="#ffffff" />
                    </>
                  ) : (
                    <>
                      <span className="relative z-10 ">{t.Booking.Book}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
