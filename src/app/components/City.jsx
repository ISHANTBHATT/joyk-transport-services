"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";
function City() {
  const { language, changeLanguage } = useLanguage();
  const t = translations[language];
  const [hasAnimated, setHasAnimated] = useState(false);
  return (
    <div
      className="flex flex-col md:flex-row w-full p-8 md:p-20 lg:p-28 xl:p-40"
      style={{
        backgroundImage: 'url("/images/maps.png")',
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center right",
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
        className="grid grid-rows-2 grid-flow-col gap-4 w-full"
      >
        <div className="row-span-2 col-span-2 relative">
          <Image
            src="/images/Monument.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="right"
            className="absolute inset-0 rounded-md hover:-translate-y-2 transition-transform duration-300"
          />
        </div>
        <div className="col-span-2 relative">
          <Image
            src="/images/airport3.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="absolute inset-0 rounded-md hover:-translate-y-2 transition-transform duration-300"
          />
        </div>
        <div className="row-span-1 col-span-2 w-full h-60 relative">
          <Image
            src="/images/happy-person.png"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 rounded-md hover:-translate-y-2 transition-transform duration-300"
          />
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
        className="flex w-full items-center justify-center py-2 md:ps-20 lg:ps-28 xl:ps-40"
      >
        <div className="flex-col">
          <h2 className="text-2xl md:text-3xl font-bold ">
            {t.city.title}
            <br />
            <p className="text-base text-gray-600 ">{t.city.subtitle}</p>
          </h2>
          <p className="mt-4 text-gray-600">{t.city.desc}</p>
          <Link href="booking">
            <button className="mt-10 relative flex gap-2 h-[50px] w-60 items-center justify-center overflow-hidden bg-black text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-64 rounded-lg">
              <span className="relative z-10 ">{t.city.button} </span>
              <MdArrowOutward className="z-10" />
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default City;
