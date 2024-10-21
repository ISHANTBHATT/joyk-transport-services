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
    ques: "How do I book a cab?",
    ans: `<p>A. Search your vehicle As per the Number of passengers and your comfort, you can select the vehicle
We offer three types of vehicles Sadan, 4x4, Van</p>
<br/>
<ul>
<li><b>Sedan:</b> Comfortable for 3 passengers
This Sadan comfortably accommodates up to three passengers. If your group exceeds three, an additional cab will be added to ensure a comfortable experience for everyone.
</li>
<li>
<b>4x4:</b> Comfortable for 3 passengers
This 4x4 comfortably accommodates up to three passengers. If your group exceeds three, an additional cab will be added to ensure a comfortable experience for everyone.
</li>
<li>
<b>Van:</b> Comfortable for 14 passengers
This Van comfortably accommodates up to three passengers. If your group exceeds three, an additional van will be added to ensure a comfortable experience for everyone.
</li>
</ul>
<br/>
<p>B. Signup / Sign In :-
If you're a new user, sign up by entering your basic details. If you're an existing user, please log in with your credentials
</p>
<br/>
<p>C. Book Your Ride :- Select Your Pickup and Drop-off Locations
</p>
<br/>
<p>D. Enjoy your Ride! :- Sit back, relax, and let us take you there and feel free to reach out if you need anything during your ride (CONTACT US - +221-78 750 79 89)
</p>
`,
  },
  {
    id: "2",
    ques: "How do we know our ride is confirmed?",
    ans: "After booking you will get a confirmation email from our team. Simultaneously you can also login to your account and see the booking confirmation",
  },
  {
    id: "3",
    ques: "What types of vehicles do you offer?",
    ans: `<p>We offer three types of vehicles:</p>
    <br/>
<ul>
<li><b>Sedan:</b> Comfortable for 3 passengers,
This Sadan comfortably accommodates up to three passengers. If your group exceeds three, an additional cab will be added to ensure a comfortable experience for everyone.
</li>
<br/>
<li><b>4*4:</b> Comfortable for 3 passengers,
This 4*4 comfortably accommodates up to three passengers. If your group exceeds three, an additional cab will be added to ensure a comfortable experience for everyone.
</li>
<br/>
<li><b>Van:</b> Comfortable for 14 passengers,
	This Van comfortably accommodates up to fourteen passengers. If your group exceeds fourteen, an additional van will be added to ensure a comfortable experience for everyone.
</li>
</ul>
  `,
  },
  {
    id: "4",
    ques: "Can I schedule a ride in advance?",
    ans: `<p>Yes, we can schedule ride well in advance,</p>
<ul>
<br/>

<li>
<b>Booking Availability:</b>
<li class="list-disc ml-5"> <b>Advance Booking:</b> Book your ride at least 12 hours before landing.</li>
<li class="list-disc ml-5"> <b>Booking Flexibility:</b> No maximum days for prior bookings.</li>
</li>

<li>
<br/>
<b>Select Your Date and Time:</b>
Use the calendar input to choose your booking times that meet these requirements.
</li>

<li>
<br/>
<b>After Booking:</b>
Once you enter your date and time and click the "Book" button, you'll see: "Thank you for booking! We will send a confirmation email soon.
</li>
</ul>
`,
  },
  {
    id: "5",
    ques: "Is there any discount for the return journey?",
    ans: "Yes, You can enjoy a 10% discount on your return trip with us! Just select the return trip option when booking your vehicle",
  },
  {
    id: "6",
    ques: "Is there a cancellation policy?",
    ans: `Yes, We allow users to cancel rides up to 12 hours before arrival via a simple “Cancel Ride” button in their booking history`,
  },
  {
    id: "7",
    ques: "How will I make payment for my ride?",
    ans: `Payment can be made after the ride via Cash or by Wave transfer or OrangeMoney transfer`,
  },
];

function Faq() {
  const [openFaq, setOpenFaq] = useState(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [visibleFaqs, setVisibleFaqs] = useState(5);
  const toggleFaq = (id) => {
    setOpenFaq((prev) => (prev === id ? null : id));
  };

  const loadMore = () => {
    setVisibleFaqs((prev) => Math.min(prev + 5, faqdata.length));
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
        className="lg:px-40 xl:px-80 pt-10"
      >
        {faqdata.slice(0, visibleFaqs).map((e) => (
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
              <div
                className="text-zinc-500 ml-4"
                dangerouslySetInnerHTML={{ __html: e.ans }}
              ></div>
              {/* <p className="text-zinc-500 ml-4">{e.ans}</p> */}
            </div>
          </div>
        ))}
      </motion.div>
      {visibleFaqs < faqdata.length && (
        <div className="flex items-center">
          <button
            onClick={loadMore}
            className="bg-orange-500 text-white px-4 py-2 rounded-md font-medium hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 mt-8 mx-auto"
          >
            Load more
          </button>
        </div>
      )}
    </div>
  );
}

export default Faq;
