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

"use client";
import { useState } from "react";

const people = [
  {
    name: "Paul A.",
    title: "Founder of XYZ",
    image: "/images/paul.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis.",
  },
  {
    name: "Claude O.",
    title: "Founder of XYZ",
    image: "/images/claude.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt.",
  },
  {
    name: "Max Q.",
    title: "Founder of XYZ",
    image: "/images/max.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis.",
  },
  {
    name: "Cindy J.",
    title: "Founder of XYZ",
    image: "/images/cindy.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam.",
  },
  {
    name: "Jeff R.",
    title: "Founder of XYZ",
    image: "/images/jeff.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam aspernatur corporis!",
  },
  {
    name: "Garrett P.",
    title: "Founder of XYZ",
    image: "/images/garrett.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia.",
  },
  {
    name: "Xavier C.",
    title: "Founder of XYZ",
    image: "/images/xavier.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam aspernatur.",
  },
];

export default function Home() {
  const [selectedPerson, setSelectedPerson] = useState(null);

  const handlePersonClick = (person) => {
    setSelectedPerson(person);
  };

  return (
    <div className=" text-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        {/* <h1 className="text-4xl font-bold mb-8">Our Team</h1> */}
        <div className="flex flex-wrap gap-8">
          {people.map((person) => (
            <div
              key={person.name}
              className="bg-primary rounded-lg shadow-lg cursor-pointer w-[450px]"
              onClick={() => handlePersonClick(person)}
            >
              {/* <img
                src={person.image}
                alt={person.name}
                className="w-full rounded-t-lg"
              /> */}
              {/* <img
                // src={person.image}
                // alt={person.name}
                src="/images/quote.png"
                className="w-8"
              /> */}
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{person.name}</h2>
                <p className="">{person.title}</p>
                <p className="">{person.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* {selectedPerson && (
          <div className="mt-16 bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-4">{selectedPerson.name}</h2>
            <p className="text-gray-400 mb-4">{selectedPerson.title}</p>
            <p className="text-gray-400">{selectedPerson.description}</p>
          </div>
        )} */}
      </div>
    </div>
  );
}
