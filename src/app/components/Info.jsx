"use client";
import React, { useState } from "react";
import { MdVerifiedUser } from "react-icons/md";
import { FaSackDollar } from "react-icons/fa6";
import { FaCar } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";
const cardData = [
  {
    id: 1,
    Icon: MdVerifiedUser,
    title: "Safety First",
    desc: "Both you and your shipments will travel with professional drivers. Always with the highest quality standards.",
  },
  {
    id: 2,
    Icon: FaSackDollar,
    title: "Prices With No Surprises",
    desc: "Both you and your shipments will travel with professional drivers. Always with the highest quality standards.",
  },
  {
    id: 3,
    Icon: FaCar,
    title: "Private Travel Solutions",
    desc: "Both you and your shipments will travel with professional drivers. Always with the highest quality standards.",
  },
];
function Info() {
  const [hasAnimated, setHasAnimated] = useState(false);
  return (
    <div className="w-full p-2 md:p-10 lg:p-20">
      <motion.p
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        animate={hasAnimated ? "show" : "hidden"}
        exit="hidden"
        onViewportEnter={() => {
          if (!hasAnimated) {
            setHasAnimated(true);
          }
        }}
        className="text-center text-3xl md:text-4xl lg:text-5xl text-gray-700 font-medium flex items-center justify-center"
      >
        Make Your Trip Your Way With Us
      </motion.p>
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
        className="flex flex-col lg:flex-row gap-6 px-10"
      >
        {cardData.map((e) => (
          <Card key={e.id} Icon={e.Icon} title={e.title} desc={e.desc} />
        ))}
      </motion.div>
      <div
        className="bg-[#E95440] w-full p-4 md:p-10 xl:p-20 rounded-md flex flex-col md:flex-row gap-8 md:gap-0 text-white text-2xl sm:text-4xl"
        style={{
          backgroundImage: 'url("/images/bg-showcase.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
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
          className="w-full md:w-3/5 "
        >
          <p className="text-3xl xl:text-5xl text-center md:text-left">
            Showcase some impressive numbers.
          </p>
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
          className="flex flex-1 gap-10 sm:gap-20 w-full justify-center"
        >
          <div className="flex-col">
            <p className="">285</p>
            <p className="text-sm sm:text-xl">Vehicles</p>
          </div>
          <div className="flex-col">
            <p>97</p>
            <p className="text-sm sm:text-xl">Awards</p>
          </div>
          <div className="flex-col">
            <p>13K</p>
            <p className="text-sm sm:text-xl">Happy Customer</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

const Card = ({ key, Icon, title, desc }) => {
  return (
    <div className="flex-col py-8">
      <div className="flex justify-center">
        <div className="p-2 rounded-full bg-[#FDEEEC] w-16 h-16 flex items-center justify-center">
          <Icon className="h-10 w-10 hover:-translate-y-2 transition-transform duration-300" />
        </div>
      </div>

      <p className="flex justify-center pt-6 pb-4 text-lg font-medium">
        {title}
      </p>
      <p className="text-center text-gray-600">{desc}</p>
    </div>
  );
};
export default Info;
