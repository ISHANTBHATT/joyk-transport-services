import React, { useState, useEffect } from "react";
import Img from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "../../../variants";
import { SyncLoader } from "react-spinners";
function Banner({ key, title, img, desc }) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasAnimated, setHasAnimated] = useState(false);
  useEffect(() => {
    const imgElement = new Image();
    imgElement.src = img;
    imgElement.onload = () => setIsLoading(false);
  }, [img]);

  return (
    <section
      className="h-[60vh] lg:h-screen relative flex md:justify-center"
      id="home"
    >
      {isLoading && (
        // <div className="absolute inset-0 flex justify-center items-center z-10">
        //   <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-14 w-14"></div>
        // </div>
        <div className="absolute inset-0 flex justify-center items-center z-10">
          <SyncLoader />
        </div>
        // <SyncLoader />
      )}
      <div
        key={img}
        // variants={fadeIn("up", 0.1)}
        // initial="hidden"
        // whileInView="show"
        // exit="hidden"
        className="w-full h-full absolute top-0 left-0 "
      >
        <Img
          src={img}
          alt=""
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>
      {/* <motion.img
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView="show"
        exit="hidden"
        src={img}
        alt=""
        className="w-full h-full object-cover absolute top-0 left-0"
      /> */}
      <div className="px-4 lg:px-4  py-0 lg:py-20 flex-1 flex flex-col z-[1] items-center justify-center ml-10 md:ml-40">
        <motion.p
          key={key}
          variants={fadeIn("up", 1.4)}
          initial="hidden"
          animate={hasAnimated ? "show" : "hidden"}
          exit="hidden"
          onViewportEnter={() => {
            if (!hasAnimated) {
              setHasAnimated(true);
            }
          }}
          className="text-sm lg:text-base  text-white w-full font-harlow"
        >
          Where Would You Like To Go?
        </motion.p>
        {/* <p
          key={title}
          // variants={fadeIn("left", 2)}
          // initial="hidden"
          // whileInView="show"
          // exit="hidden"
          className="text-[50px]  lg:text-[100px] font-extrabold text-white w-full font-harlow"
        >
          {title}
        </p> */}

        <motion.p
          key={key}
          variants={fadeIn("up", 1.4)}
          initial="hidden"
          animate={hasAnimated ? "show" : "hidden"}
          exit="hidden"
          onViewportEnter={() => {
            if (!hasAnimated) {
              setHasAnimated(true);
            }
          }}
          className="text-[30px]  lg:text-[50px] text-textColor font-bold text-left text-white w-full"
        >
          Your Personal
          <br />
          Chauffeur Services
        </motion.p>
      </div>
    </section>
  );
}

export default Banner;
