"use client";
import React, { useState } from "react";
// import { MdVerifiedUser } from "react-icons/md";
// import { FaSackDollar } from "react-icons/fa6";
import { TbClock24 } from "react-icons/tb";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { FaCar } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

function Info() {
  const { language, changeLanguage } = useLanguage();

  const t = translations[language];
  const cardData = [
    {
      id: 1,
      Icon: TbClock24,
      title: `${t.Info.title}`,
      desc: `${t.Info.desc}`,
    },
    {
      id: 2,
      Icon: FaMoneyCheckDollar,
      title: `${t.Info.title2}`,
      desc: `${t.Info.desc2}`,
    },
    {
      id: 3,
      Icon: FaCar,
      title: `${t.Info.title3}`,
      desc: `${t.Info.desc3}`,
    },
  ];
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
        {t.Info.headline}
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
        className="bg-test2 w-full p-4 md:p-10 xl:p-20 rounded-md flex flex-col md:flex-row gap-8 md:gap-0 text-white text-2xl sm:text-4xl"
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
          className="w-full md:w-1/2 "
        >
          <p className="text-3xl xl:text-5xl text-center md:text-left">
            {t.Info.subtitle}
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
            <p className="text-sm sm:text-xl">{t.Info.field}</p>
          </div>
          <div className="flex-col">
            <p>97</p>
            <p className="text-sm sm:text-xl">{t.Info.field2}</p>
          </div>
          <div className="flex-col">
            <p>13K</p>
            <p className="text-sm sm:text-xl">{t.Info.field3}</p>
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
