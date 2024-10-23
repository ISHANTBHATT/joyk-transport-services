// "use client";
// import { useRef } from "react";
// import {
//   motion,
//   useScroll,
//   useSpring,
//   useTransform,
//   useMotionValue,
//   useVelocity,
//   useAnimationFrame,
// } from "framer-motion";
// import { wrap } from "@motionone/utils";
// const partnersdata = [
//   {
//     id: "1",
//     name: "Peter H.",
//     desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore.",
//   },
//   {
//     id: "2",
//     name: "Lanny B.",
//     desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor.",
//   },
//   {
//     id: "3",
//     name: "Jen S.",
//     desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor.",
//   },
//   {
//     id: "4",
//     name: "Paul A,",
//     desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor.",
//   },
//   {
//     id: "5",
//     name: "Cindy J.",
//     desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam.",
//   },
//   {
//     id: "6",
//     name: "Danica W.",
//     desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam.",
//   },
// ];

// function ParallaxText({ children, baseVelocity = 100 }) {
//   const baseX = useMotionValue(0);
//   const { scrollY } = useScroll();
//   const scrollVelocity = useVelocity(scrollY);
//   const smoothVelocity = useSpring(scrollVelocity, {
//     damping: 50,
//     stiffness: 400,
//   });
//   const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
//     clamp: false,
//   });

//   const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

//   const directionFactor = useRef(1);
//   useAnimationFrame((t, delta) => {
//     let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

//     if (velocityFactor.get() < 0) {
//       directionFactor.current = -1;
//     } else if (velocityFactor.get() > 0) {
//       directionFactor.current = 1;
//     }

//     moveBy += directionFactor.current * moveBy * velocityFactor.get();

//     baseX.set(baseX.get() + moveBy);
//   });

//   return (
//     <div className="parallax parallax overflow-hidden tracking-[-2px] leading-[0.8] m-0 whitespace-nowrap flex flex-nowrap">
//       <motion.div
//         className="scroller scroller font-semibold uppercase text-[64px] flex whitespace-nowrap flex-nowrap font-plaster text-primary"
//         style={{
//           x,
//           fontStyle: "normal",
//           WebkitFontSmoothing: "antialiased",
//         }}
//       >
//         <span className="block mr-24">{children} </span>
//         <span className="block mr-24">{children} </span>
//         <span className="block mr-24">{children} </span>
//         <span className="block mr-24">{children} </span>
//       </motion.div>
//     </div>
//   );
// }

// export default function Testimonials() {
//   return (
//     <section>
//       <div className="flex-col justify-center text-center py-10">
//         <h1 className="text-5xl text-textcolor font-bold">OUR PARTNERS</h1>
//       </div>
//       <ParallaxText baseVelocity={-2}>
//         <div className="flex gap-14">
//           {partnersdata.map((partner) => (
//             // <div key={partner.id} className="w-40 h-44 flex items-center">
//             //   <img src={partner.logo} className="" />
//             // </div>
//             <div key={partner.id} className="w-40 h-44 flex items-center">
//               <p>{partner.name}</p>
//               {/*  <p>{partner.desc}</p> */}
//             </div>
//           ))}
//         </div>
//       </ParallaxText>
//     </section>
//   );
// }

// "use client";
// import { useState } from "react";

// const people = [
//   {
//     name: "Paul A.",
//     title: "Founder of XYZ",
//     image: "/images/paul.jpg",
//     description:
//       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis.",
//   },
//   {
//     name: "Claude O.",
//     title: "Founder of XYZ",
//     image: "/images/claude.jpg",
//     description:
//       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt.",
//   },
//   {
//     name: "Max Q.",
//     title: "Founder of XYZ",
//     image: "/images/max.jpg",
//     description:
//       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis.",
//   },
//   {
//     name: "Cindy J.",
//     title: "Founder of XYZ",
//     image: "/images/cindy.jpg",
//     description:
//       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam.",
//   },
//   {
//     name: "Jeff R.",
//     title: "Founder of XYZ",
//     image: "/images/jeff.jpg",
//     description:
//       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam aspernatur corporis!",
//   },
//   {
//     name: "Garrett P.",
//     title: "Founder of XYZ",
//     image: "/images/garrett.jpg",
//     description:
//       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia.",
//   },
//   {
//     name: "Xavier C.",
//     title: "Founder of XYZ",
//     image: "/images/xavier.jpg",
//     description:
//       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam aspernatur.",
//   },
// ];

// export default function Home() {
//   const [selectedPerson, setSelectedPerson] = useState(null);

//   const handlePersonClick = (person) => {
//     setSelectedPerson(person);
//   };

//   return (
//     <div className=" text-white min-h-screen">
//       <div className="container mx-auto px-4 py-16">
//         {/* <h1 className="text-4xl font-bold mb-8">Our Team</h1> */}
//         <div className="flex flex-wrap gap-8">
//           {people.map((person) => (
//             <div
//               key={person.name}
//               className="bg-primary rounded-lg shadow-lg cursor-pointer w-[450px]"
//               onClick={() => handlePersonClick(person)}
//             >
//               {/* <img
//                 src={person.image}
//                 alt={person.name}
//                 className="w-full rounded-t-lg"
//               /> */}
//               {/* <img
//                 // src={person.image}
//                 // alt={person.name}
//                 src="/images/quote.png"
//                 className="w-8"
//               /> */}
//               <div className="p-6">
//                 <h2 className="text-2xl font-bold mb-2">{person.name}</h2>
//                 <p className="">{person.title}</p>
//                 <p className="">{person.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* {selectedPerson && (
//           <div className="mt-16 bg-gray-800 rounded-lg shadow-lg p-8">
//             <h2 className="text-3xl font-bold mb-4">{selectedPerson.name}</h2>
//             <p className="text-gray-400 mb-4">{selectedPerson.title}</p>
//             <p className="text-gray-400">{selectedPerson.description}</p>
//           </div>
//         )} */}
//       </div>
//     </div>
//   );
// }

import Image from "next/image";
import { useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";
import { FaStar } from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

const Testimonial = () => {
  const { language, changeLanguage } = useLanguage();
  const t = translations[language];
  const people = t.people;

  const [hasAnimated, setHasAnimated] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0); // Updated to start from 0 index

  const handleNextSlide = () => {
    if (currentSlide < people.length - 1) {
      setCurrentSlide((prevSlide) => prevSlide + 1);
    }
  };

  const handlePreviousSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prevSlide) => prevSlide - 1);
    }
  };

  return (
    <div className="relative bg-test2 text-white flex flex-col md:flex-row justify-between gap-8 items-center px-10 sm:px-20 min-h-screen py-10 md:py-0">
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
        className="w-full"
      >
        <div className="mb-4">
          <div className="flex items-center">
            <div className="bg-white text-primary rounded-md p-6 mr-4">
              {/* <span className="text-7xl">“</span> */}
              <FaQuoteLeft className="text-2xl" />
            </div>
            <div>
              <h3 className="font-bold">{people[currentSlide].name}</h3>
              {/* <p className="text-sm">{people[currentSlide].title}</p> */}
              <div className="flex text-yellow-400">
                {Array(people[currentSlide].stars)
                  .fill()
                  .map((_, i) => (
                    <FaStar key={i} />
                  ))}
              </div>
            </div>
          </div>
        </div>
        <p className="text-3xl mb-4">{people[currentSlide].description}</p>
        <div className="flex justify-between items-center mt-10">
          <button
            onClick={handlePreviousSlide}
            className="text-sm"
            disabled={currentSlide === 0} // Disable if on first slide
          >
            {currentSlide > 0 ? "Previous" : ""}
          </button>
          <div className="text-sm">
            <span>{`0${currentSlide + 1}`}</span>
            <span className="mx-2">/</span>
            <span>{`0${people.length}`}</span>
          </div>
          <button
            onClick={handleNextSlide}
            className="text-sm"
            disabled={currentSlide === people.length - 1} // Disable if on last slide
          >
            {currentSlide < people.length - 1 ? "Next" : ""}
          </button>
        </div>
      </motion.div>
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
        className="w-full flex justify-center md:justify-end z-[1]"
      >
        <div className="relative w-80 sm:w-96 h-80 sm:h-96 ">
          <Image
            // src={people[currentSlide].image}
            src="/images/team.png"
            alt="people"
            layout="fill"
            objectFit="cover"
            className="rounded-lg hover:-translate-y-2 transition-transform duration-300"
          />
          {/* <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-full">
            <button className="text-orange-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M9.75 6a.75.75 0 011.5 0v6.19l2.22-2.22a.75.75 0 111.06 1.06l-3.5 3.5a.75.75 0 01-1.06 0l-3.5-3.5a.75.75 0 111.06-1.06l2.22 2.22V6z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div> */}
        </div>
      </motion.div>
      <img
        src="/images/bg-testimonials.png"
        className=" absolute top-10 right-80"
      />
    </div>
  );
};

export default Testimonial;
