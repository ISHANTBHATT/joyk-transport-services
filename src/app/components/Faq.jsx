// "use client";
// import React, { useState } from "react";
// import { IoMdAddCircleOutline } from "react-icons/io";
// import { HiOutlineMinusCircle } from "react-icons/hi";
// const faqdata = [
//   {
//     id: "1",
//     ques: "How do I create an account?",
//     ans: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free 30-minute onboarding call to get you up and running. Book a call here.",
//   },
//   {
//     id: "2",
//     ques: "How do I earn Easy Ride Rewards points?",
//     ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed acenim id lectus semper ultricies.",
//   },
//   {
//     id: "3",
//     ques: "How can I add my credit card on the app for payments?",
//     ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed acenim id lectus semper ultricies.",
//   },
//   {
//     id: "4",
//     ques: "How do I become a Captain?",
//     ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed acenim id lectus semper ultricies.",
//   },
//   {
//     id: "5",
//     ques: "Where can I get more information, support or make a claim?",
//     ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed acenim id lectus semper ultricies.",
//   },
// ];
// function Faq() {
//   const [openFaq, setOpenFaq] = useState(null);
//   const [showMore, setShowMore] = useState(false);

//   const toggleFaq = (id) => {
//     setOpenFaq((prev) => (prev === id ? null : id));
//   };

//   const toggleMore = () => {
//     setShowMore(!showMore);
//   };
//   return (
//     <div
//       style={{
//         backgroundImage: 'url("/images/bg-faqs.png")',
//         backgroundSize: "contain",
//         backgroundRepeat: "no-repeat",
//         backgroundPosition: "left -100px bottom 50px",
//       }}
//       className="py-8"
//     >
//       <h2 className="text-5xl font-bold  mb-4 mt-16 text-center">
//         Frequently Asked Questions
//       </h2>
//       <div className="lg:px-80 pt-10">
//         {faqdata.map((e) => (
//           <div key={e.id} className=" p-6 mt-4 border-b-[1px]">
//             <div className="flex items-center justify-between mb-4">
//               <div className="flex items-center">
//                 <h3 className=" text-lg font-bold">{e.ques}</h3>
//               </div>
//               <button onClick={() => toggleFaq(e.id)} className=" font-medium">
//                 {openFaq === e.id ? (
//                   <HiOutlineMinusCircle className="w-8 h-8" />
//                 ) : (
//                   <IoMdAddCircleOutline className="w-8 h-8" />
//                 )}
//               </button>
//             </div>
//             {openFaq === e.id && (
//               <p className="text-zinc-500 ml-4 transition-transform duration-300">
//                 {e.ans}
//               </p>
//             )}
//           </div>
//         ))}
//       </div>

//       <div className="flex items-center">
//         <button
//           onClick={toggleMore}
//           className="bg-orange-500 px-4 py-2 rounded-md font-medium hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mt-8 mx-auto"
//         >
//           Load more
//         </button>
//       </div>
//       {/* <div
//         style={{
//           backgroundImage: 'url("/images/bg-faqs.png")',
//           backgroundSize: "contain",
//           backgroundRepeat: "no-repeat",
//           backgroundPosition: "center",
//           transform: "rotate(20deg)",
//           overflow: "hidden",
//         }}
//         className="absolute inset-0 w-full h-full z-0 overflow-hidden"
//       ></div> */}
//     </div>
//   );
// }

// export default Faq;

"use client";
import React, { useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { HiOutlineMinusCircle } from "react-icons/hi";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";
const faqdata = [
  {
    id: "1",
    ques: "How do I create an account?",
    ans: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free 30-minute onboarding call to get you up and running. Book a call here.",
  },
  {
    id: "2",
    ques: "How do I earn Easy Ride Rewards points?",
    ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed acenim id lectus semper ultricies.",
  },
  {
    id: "3",
    ques: "How can I add my credit card on the app for payments?",
    ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed acenim id lectus semper ultricies.",
  },
  {
    id: "4",
    ques: "How do I become a Captain?",
    ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed acenim id lectus semper ultricies.",
  },
  {
    id: "5",
    ques: "Where can I get more information, support or make a claim?",
    ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed acenim id lectus semper ultricies.",
  },
];

function Faq() {
  const [openFaq, setOpenFaq] = useState(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const toggleFaq = (id) => {
    setOpenFaq((prev) => (prev === id ? null : id));
  };

  return (
    <div
      style={{
        backgroundImage: 'url("/images/bg-faqs.png")',
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left -100px bottom 50px",
      }}
      className="py-8"
    >
      <motion.h2
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        animate={hasAnimated ? "show" : "hidden"}
        exit="hidden"
        onViewportEnter={() => {
          if (!hasAnimated) {
            setHasAnimated(true);
          }
        }}
        className="text-5xl font-bold mb-4 mt-16 text-center"
      >
        Frequently Asked Questions
      </motion.h2>
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        animate={hasAnimated ? "show" : "hidden"}
        exit="hidden"
        onViewportEnter={() => {
          if (!hasAnimated) {
            setHasAnimated(true);
          }
        }}
        className="lg:px-80 pt-10"
      >
        {faqdata.map((e) => (
          <div key={e.id} className="p-6 mt-4 border-b-[1px]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">{e.ques}</h3>
              <button
                onClick={() => toggleFaq(e.id)}
                className="font-medium transform transition-transform duration-500 ease-in-out"
                style={{
                  transform:
                    openFaq === e.id ? "rotate(180deg)" : "rotate(0deg)",
                }}
              >
                {openFaq === e.id ? (
                  <HiOutlineMinusCircle className="w-8 h-8" />
                ) : (
                  <IoMdAddCircleOutline className="w-8 h-8" />
                )}
              </button>
            </div>
            <div
              className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                openFaq === e.id ? "max-h-screen" : "max-h-0"
              }`}
            >
              <p className="text-zinc-500 ml-4">{e.ans}</p>
            </div>
          </div>
        ))}
      </motion.div>

      <div className="flex items-center">
        <button className="bg-orange-500 text-white px-4 py-2 rounded-md font-medium hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 mt-8 mx-auto">
          Load more
        </button>
      </div>
    </div>
  );
}

export default Faq;
