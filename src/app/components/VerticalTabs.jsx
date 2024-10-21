// "use client";
// import { useState } from "react";

// const VerticalTabs = () => {
//   const [activeTab, setActiveTab] = useState(1);

//   return (
//     // <div className="flex-col flex-wrap p-40 bg-[#ff5000] text-white">
//     //   <p className="text-5xl">How It Works</p>
//     //   <div className="flex">
//     //     <div className="border-e border-gray-200 ">
//     //       <nav
//     //         className="flex flex-col space-y-2"
//     //         aria-label="Tabs"
//     //         role="tablist"
//     //         aria-orientation="horizontal"
//     //       >
//     //         <button
//     //           type="button"
//     //           className={`${
//     //             activeTab === 1
//     //               ? "border-blue-500 text-blue-600 dark:text-blue-600"
//     //               : ""
//     //           } py-1 pe-4 inline-flex items-center gap-x-2 border-e-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-500`}
//     //           onClick={() => setActiveTab(1)}
//     //           id="vertical-tab-with-border-item-1"
//     //           aria-selected={activeTab === 1}
//     //           aria-controls="vertical-tab-with-border-1"
//     //           role="tab"
//     //         >
//     //           Tab 1
//     //         </button>
//     //         <button
//     //           type="button"
//     //           className={`${
//     //             activeTab === 2
//     //               ? "border-blue-500 text-blue-600 dark:text-blue-600"
//     //               : ""
//     //           } py-1 pe-4 inline-flex items-center gap-x-2 border-e-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-500`}
//     //           onClick={() => setActiveTab(2)}
//     //           id="vertical-tab-with-border-item-2"
//     //           aria-selected={activeTab === 2}
//     //           aria-controls="vertical-tab-with-border-2"
//     //           role="tab"
//     //         >
//     //           Tab 2
//     //         </button>
//     //         <button
//     //           type="button"
//     //           className={`${
//     //             activeTab === 3
//     //               ? "border-blue-500 text-blue-600 dark:text-blue-600"
//     //               : ""
//     //           } py-1 pe-4 inline-flex items-center gap-x-2 border-e-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-500`}
//     //           onClick={() => setActiveTab(3)}
//     //           id="vertical-tab-with-border-item-3"
//     //           aria-selected={activeTab === 3}
//     //           aria-controls="vertical-tab-with-border-3"
//     //           role="tab"
//     //         >
//     //           Tab 3
//     //         </button>
//     //       </nav>
//     //     </div>

//     //     <div className="ms-3">
//     //       <div
//     //         id="vertical-tab-with-border-1"
//     //         role="tabpanel"
//     //         aria-labelledby="vertical-tab-with-border-item-1"
//     //         className={activeTab === 1 ? "" : "hidden"}
//     //       >
//     //         <p className="text-gray-500 dark:text-neutral-400">
//     //           This is the{" "}
//     //           <em className="font-semibold text-gray-800 dark:text-neutral-200">
//     //             first
//     //           </em>{" "}
//     //           item's tab body.
//     //         </p>
//     //       </div>
//     //       <div
//     //         id="vertical-tab-with-border-2"
//     //         role="tabpanel"
//     //         aria-labelledby="vertical-tab-with-border-item-2"
//     //         className={activeTab === 2 ? "" : "hidden"}
//     //       >
//     //         <p className="text-gray-500 dark:text-neutral-400">
//     //           This is the{" "}
//     //           <em className="font-semibold text-gray-800 dark:text-neutral-200">
//     //             second
//     //           </em>{" "}
//     //           item's tab body.
//     //         </p>
//     //       </div>
//     //       <div
//     //         id="vertical-tab-with-border-3"
//     //         role="tabpanel"
//     //         aria-labelledby="vertical-tab-with-border-item-3"
//     //         className={activeTab === 3 ? "" : "hidden"}
//     //       >
//     //         <p className="text-gray-500 dark:text-neutral-400">
//     //           This is the{" "}
//     //           <em className="font-semibold text-gray-800 dark:text-neutral-200">
//     //             third
//     //           </em>{" "}
//     //           item's tab body.
//     //         </p>
//     //       </div>
//     //     </div>
//     //   </div>
//     // </div>
//     // <section className="bg-orange-500 text-white py-20 px-6">
//     //   <div className="container mx-auto">
//     //     <h2 className="text-4xl font-bold mb-12">How It Works</h2>
//     //     <div className="flex flex-wrap lg:flex-nowrap">
//     //       <div className="lg:w-1/2">
//     //         <ul className="space-y-8">
//     //           <li className="flex items-start">
//     //             <div className="rounded-full bg-white w-6 h-6 flex items-center justify-center mr-4">
//     //               <span className="text-orange-500 font-bold text-xs">1</span>
//     //             </div>
//     //             <div>
//     //               <h3 className="text-xl font-bold mb-2">Create Your Route</h3>
//     //               <p className="text-gray-200">
//     //                 Enter your pickup & dropoff locations or the number of hours
//     //                 you wish to book a car and driver for
//     //               </p>
//     //             </div>
//     //           </li>
//     //           <li className="flex items-start">
//     //             <div className="rounded-full bg-white w-6 h-6 flex items-center justify-center mr-4">
//     //               <span className="text-orange-500 font-bold text-xs">2</span>
//     //             </div>
//     //             <div>
//     //               <h3 className="text-xl font-bold mb-2">
//     //                 Choose Vehicle For You
//     //               </h3>
//     //               <p className="text-gray-200">
//     //                 On the day of your ride, you will receive two email and SMS
//     //                 updates - one informing you that.
//     //               </p>
//     //             </div>
//     //           </li>
//     //           <li className="flex items-start">
//     //             <div className="rounded-full bg-white w-6 h-6 flex items-center justify-center mr-4">
//     //               <span className="text-orange-500 font-bold text-xs">3</span>
//     //             </div>
//     //             <div>
//     //               <h3 className="text-xl font-bold mb-2">Enjoy The Journey</h3>
//     //               <p className="text-gray-200">
//     //                 After your ride has taken place, we would appreciate it if
//     //                 you could rate your car and driver.
//     //               </p>
//     //             </div>
//     //           </li>
//     //         </ul>
//     //       </div>
//     //       <div className="lg:w-1/2 lg:pl-16 mt-12 lg:mt-0">
//     //         <div className="relative">
//     //           <img
//     //             src="/path/to/your/laptop-mockup.png"
//     //             alt="Laptop Mockup"
//     //             className="rounded-lg shadow-lg"
//     //           />
//     //           {/* You can replace this with a video or animation if you prefer */}
//     //         </div>
//     //       </div>
//     //     </div>
//     //   </div>
//     // </section>
//   );
// };

// export default VerticalTabs;

// "use client";
// import { useState } from "react";

// const VerticalTabs = () => {
//   const [activeStep, setActiveStep] = useState(1);

//   const steps = [
//     {
//       id: 1,
//       title: "Create Your Route",
//       description:
//         "Enter your pickup & dropoff locations or the number of hours you wish to book a car and driver for",
//       icon: (
//         <svg
//           className="w-3.5 h-3.5 text-green-500 dark:text-green-400"
//           aria-hidden="true"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 16 12"
//         >
//           <path
//             stroke="currentColor"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M1 5.917 5.724 10.5 15 1.5"
//           />
//         </svg>
//       ),
//     },
//     {
//       id: 2,
//       title: "Choose Vehicle For You",
//       description:
//         "On the day of your ride, you will receive two email and SMS updates - one informing you that.",
//       icon: (
//         <svg
//           className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400"
//           aria-hidden="true"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="currentColor"
//           viewBox="0 0 20 16"
//         >
//           <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" />
//         </svg>
//       ),
//     },
//     {
//       id: 3,
//       title: "Enjoy The Journey",
//       description:
//         "After your ride has taken place, we would appreciate it if you could rate your car and driver.",
//       icon: (
//         <svg
//           className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400"
//           aria-hidden="true"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="currentColor"
//           viewBox="0 0 18 20"
//         >
//           <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
//         </svg>
//       ),
//     },
//     // {
//     //   id: 4,
//     //   title: "Confirmation",
//     //   description: "Step details here",
//     //   icon: (
//     //     <svg
//     //       className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400"
//     //       aria-hidden="true"
//     //       xmlns="http://www.w3.org/2000/svg"
//     //       fill="currentColor"
//     //       viewBox="0 0 18 20"
//     //     >
//     //       <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z" />
//     //     </svg>
//     //   ),
//     // },
//   ];

//   return (
//     <div
//       className="py-40 ps-40 bg-[#ff5000] text-white "
//       style={{
//         backgroundImage: 'url("/images/line.png")',
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <p className="text-5xl pb-16">How It Works</p>
//       <div className="flex gap-10">
//         <ol className="relative  border-s-4 border-gray-200 w-2/5 h-[350px]">
//           {steps.map((step) => (
//             <li key={step.id} className="mb-10 ms-6">
//               <span
//                 className={`absolute flex items-center justify-center w-8 h-8 ${
//                   activeStep >= step.id ? "bg-green-200 " : "bg-gray-100 "
//                 } rounded-full -start-4 ring-4 ring-white `}
//               >
//                 {step.icon}
//               </span>
//               <h3 className="font-medium leading-tight text-xl">
//                 {step.title}
//               </h3>
//               <p className="text-lg py-6">{step.description}</p>
//             </li>
//           ))}
//         </ol>
//         <div className="flex flex-1 w-full">
//           <div className="flex items-center justify-center">
//             <img
//               src="./images/laptop.png"
//               className="hover:-translate-y-2 transition-transform duration-300"
//             />
//           </div>
//           <div>
//             <img src="./images/desktop.png" />
//           </div>
//           <div>
//             <img src="./images/desktop2.png" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VerticalTabs;

// "use client";
// import { useState } from "react";

// const VerticalTabs = () => {
//   const [activeStep, setActiveStep] = useState(1);

//   const steps = [
//     {
//       id: 1,
//       title: "Create Your Route",
//       description:
//         "Enter your pickup & dropoff locations or the number of hours you wish to book a car and driver for",
//       icon: (
//         <svg
//           className="w-3.5 h-3.5 text-green-500 dark:text-green-400"
//           aria-hidden="true"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 16 12"
//         >
//           <path
//             stroke="currentColor"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M1 5.917 5.724 10.5 15 1.5"
//           />
//         </svg>
//       ),
//     },
//     {
//       id: 2,
//       title: "Choose Vehicle For You",
//       description:
//         "On the day of your ride, you will receive two email and SMS updates - one informing you that.",
//       icon: (
//         <svg
//           className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400"
//           aria-hidden="true"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="currentColor"
//           viewBox="0 0 20 16"
//         >
//           <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0-2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0-2Z" />
//         </svg>
//       ),
//     },
//     {
//       id: 3,
//       title: "Enjoy The Journey",
//       description:
//         "After your ride has taken place, we would appreciate it if you could rate your car and driver.",
//       icon: (
//         <svg
//           className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400"
//           aria-hidden="true"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="currentColor"
//           viewBox="0 0 18 20"
//         >
//           <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
//         </svg>
//       ),
//     },
//   ];

//   const images = [
//     "./images/laptop.png",
//     "./images/desktop.png",
//     "./images/desktop2.png",
//   ];

//   return (
//     <div
//       className="py-40 ps-40 bg-[#ff5000] text-white"
//       style={{
//         backgroundImage: 'url("/images/line.png")',
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <p className="text-5xl pb-16">How It Works</p>
//       <div className="flex gap-10">
//         <ol className="relative border-s-4 border-gray-200 w-2/5 h-[350px]">
//           {steps.map((step) => (
//             <li
//               key={step.id}
//               className="mb-10 ms-6 cursor-pointer"
//               onClick={() => setActiveStep(step.id)}
//             >
//               <span
//                 className={`absolute flex items-center justify-center w-8 h-8 ${
//                   activeStep >= step.id ? "bg-green-200 " : "bg-gray-100 "
//                 } rounded-full -start-4 ring-4 ring-white `}
//               >
//                 {step.icon}
//               </span>
//               <h3
//                 className={`font-medium leading-tight text-xl ${
//                   activeStep === step.id ? "text-white" : "text-[#ffb999]"
//                 }`}
//               >
//                 {step.title}
//               </h3>
//               <p
//                 className={`text-lg py-6 ${
//                   activeStep === step.id ? "text-white" : "text-[#ffb999]"
//                 }`}
//               >
//                 {step.description}
//               </p>
//             </li>
//           ))}
//         </ol>
//         <div className="flex flex-1 w-full justify-center">
//           <img
//             src={images[activeStep - 1]} // Display the current image based on the active step
//             alt="Step Image"
//             className="hover:-translate-y-2 transition-transform duration-300"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VerticalTabs;

"use client";
import { useState } from "react";
import { FaSearchLocation } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "../../../variants";
const VerticalTabs = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [direction, setDirection] = useState(0); // To track slide direction
  const [hasAnimated, setHasAnimated] = useState(false);
  const steps = [
    {
      id: 1,
      title: "Book Your Ride",
      description: "Select Your Pickup and Drop Location ",
      icon: (
        <svg
          className="w-3.5 h-3.5 text-green-500"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 16 12"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5.917 5.724 10.5 15 1.5"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Signup / Sign In",
      description:
        "If you're a new user, sign up by entering your basic details. If you're an existing user, please log in with your credentials",
      icon: (
        <svg
          className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 16"
        >
          <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0-2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0-2Z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Choose Vehicle For You",
      description:
        "As per the Number of passengers and your comfort, you can select the vehicle We offer three types of vehicles Sadan, 4*4, Van",
      icon: <FaSearchLocation className="text-gray-400" />,
    },
    {
      id: 4,
      title: "Enjoy your Ride!",
      description:
        "Sit back, relax, and let us take you there and feel free to reach out if you need anything during your ride (CONTACT US -+221-78 750 79 89)",
      icon: (
        <svg
          className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 20"
        >
          <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
        </svg>
      ),
    },
  ];

  const images = [
    "./images/laptop.png",
    "./images/desktop2.png",
    "./images/desktop1.png",
    "./images/ride.png",
  ];

  const changeStep = (newStep) => {
    if (newStep > activeStep) {
      setDirection(1); // Moving forward
    } else {
      setDirection(-1); // Moving backward
    }
    setActiveStep(newStep);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    }),
  };

  return (
    <div
      className="py-40 p-8 lg:ps-40 bg-test2 text-white"
      style={{
        backgroundImage: 'url("/images/line.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.p
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        // whileInView="show"
        animate={hasAnimated ? "show" : "hidden"}
        exit="hidden"
        onViewportEnter={() => {
          if (!hasAnimated) {
            setHasAnimated(true);
          }
        }}
        className="text-5xl pb-16"
      >
        How It Works
      </motion.p>
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        // whileInView="show"
        animate={hasAnimated ? "show" : "hidden"}
        exit="hidden"
        onViewportEnter={() => {
          if (!hasAnimated) {
            setHasAnimated(true);
          }
        }}
        className="flex flex-col-reverse lg:flex-row gap-10"
      >
        <ol className="relative border-s-4 h-full border-gray-200 w-full lg:w-2/5  pl-4">
          {steps.map((step) => (
            <li
              key={step.id}
              className="mb-6 ms-6 cursor-pointer"
              onClick={() => changeStep(step.id)}
            >
              <span
                className={`absolute flex items-center justify-center w-8 h-8 ${
                  activeStep >= step.id ? "bg-green-200 " : "bg-gray-100 "
                } rounded-full -start-4 ring-4 ring-white `}
              >
                {step.icon}
              </span>
              <h3
                className={`font-medium leading-tight text-2xl ${
                  activeStep === step.id ? "text-white" : "text-neutral-500"
                }`}
              >
                {step.title}
              </h3>
              <p
                className={`text-base py-4 ${
                  activeStep === step.id ? "text-white" : "text-neutral-500"
                }`}
              >
                {step.description}
              </p>
            </li>
          ))}
        </ol>
        <div className="flex flex-1 w-full justify-center relative hover:-translate-y-2 transition-transform duration-300 overflow-hidden">
          <AnimatePresence initial={false} custom={direction} className="">
            <motion.img
              key={activeStep}
              src={images[activeStep - 1]}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className=""
            />
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default VerticalTabs;
