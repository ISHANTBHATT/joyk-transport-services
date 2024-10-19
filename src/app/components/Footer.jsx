"use client";
import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";

function Footer() {
  const [hasAnimated, setHasAnimated] = useState(false);
  return (
    <footer className="font-sans tracking-wide bg-black pt-10 pb-4 px-14 lg:px-20 xl:px-40">
      <div className="flex flex-col lg:flex-row flex-1 gap-20">
        <div>
          {/* <h4 className="text-gray-100 font-bold text-lg">About Us</h4>
          <p className="text-sm mt-6 text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            gravida, mi eu pulvinar cursus, sem elit interdum mauris dipiscing
            elit. Aenean gravida, mi eu pulvinar cursus...{" "}
            <a
              href="javascript:void(0)"
              className="text-sm font-semibold text-[#007bff]"
            >
              Read more
            </a>
          </p> */}
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
            className="flex flex-col lg:flex-row"
          >
            <div className="w-full flex justify-center lg:justify-normal">
              <img src="/images/logo1.jpeg" className="w-32 h-32" />
            </div>

            <p className="text-sm mt-6 text-gray-300 lg:px-10 text-justify">
              We specialize in offering reliable and convenient cab services for
              seamless travel between the Blaise Diagne International Airport,
              Senegal, and any city in Senegal, as well as from any city in
              Senegal to the Blaise Diagne International Airport, Senegal
              {/* <a
                href="javascript:void(0)"
                className="text-sm font-semibold text-[#007bff]"
              >
                Read more
              </a> */}
            </p>
          </motion.div>

          <motion.ul
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            // whileInView="show"
            animate={hasAnimated ? "show" : "hidden"}
            exit="hidden"
            onViewportEnter={() => {
              if (!hasAnimated) {
                setHasAnimated(true);
              }
            }}
            className="grid md:grid-cols-3 mt-12 gap-6"
          >
            <li className="flex items-center max-sm:mb-8">
              <div className="bg-[#343538] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <CiLocationOn className="w-6 h-6 text-white" />
              </div>
              <a href="" className="text-gray-100 text-sm ml-4">
                <span className="block text-xl text-primary font-bold">
                  Address
                </span>
                <span className="font-bold">
                  116 Cite Sonatel Zac Mbao, Dakar-Senegal
                </span>
              </a>
            </li>
            <li className="flex items-center max-sm:mb-8">
              <div className="bg-[#343538] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="#fff"
                  viewBox="0 0 482.6 482.6"
                >
                  <path
                    d="M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4 24.9 11.8 58.2 25.8 95.3 28.2 2.3.1 4.5.2 6.8.2 24.9 0 44.9-8.6 61.2-26.3.1-.1.3-.3.4-.5 5.8-7 12.4-13.3 19.3-20 4.7-4.5 9.5-9.2 14.1-14 21.3-22.2 21.3-50.4-.2-71.9l-60.1-60.1c-10.2-10.6-22.4-16.2-35.2-16.2-12.8 0-25.1 5.6-35.6 16.1l-35.8 35.8c-3.3-1.9-6.7-3.6-9.9-5.2-4-2-7.7-3.9-11-6-32.6-20.7-62.2-47.7-90.5-82.4-14.3-18.1-23.9-33.3-30.6-48.8 9.4-8.5 18.2-17.4 26.7-26.1 3-3.1 6.1-6.2 9.2-9.3 10.8-10.8 16.6-23.3 16.6-36s-5.7-25.2-16.6-36l-29.8-29.8c-3.5-3.5-6.8-6.9-10.2-10.4-6.6-6.8-13.5-13.8-20.3-20.1-10.3-10.1-22.4-15.4-35.2-15.4-12.7 0-24.9 5.3-35.6 15.5l-37.4 37.4c-13.6 13.6-21.3 30.1-22.9 49.2-1.9 23.9 2.5 49.3 13.9 80 17.5 47.5 43.9 91.6 83.1 138.7zm-72.6-216.6c1.2-13.3 6.3-24.4 15.9-34l37.2-37.2c5.8-5.6 12.2-8.5 18.4-8.5 6.1 0 12.3 2.9 18 8.7 6.7 6.2 13 12.7 19.8 19.6 3.4 3.5 6.9 7 10.4 10.6l29.8 29.8c6.2 6.2 9.4 12.5 9.4 18.7s-3.2 12.5-9.4 18.7c-3.1 3.1-6.2 6.3-9.3 9.4-9.3 9.4-18 18.3-27.6 26.8l-.5.5c-8.3 8.3-7 16.2-5 22.2.1.3.2.5.3.8 7.7 18.5 18.4 36.1 35.1 57.1 30 37 61.6 65.7 96.4 87.8 4.3 2.8 8.9 5 13.2 7.2 4 2 7.7 3.9 11 6 .4.2.7.4 1.1.6 3.3 1.7 6.5 2.5 9.7 2.5 8 0 13.2-5.1 14.9-6.8l37.4-37.4c5.8-5.8 12.1-8.9 18.3-8.9 7.6 0 13.8 4.7 17.7 8.9l60.3 60.2c12 12 11.9 25-.3 37.7-4.2 4.5-8.6 8.8-13.3 13.3-7 6.8-14.3 13.8-20.9 21.7-11.5 12.4-25.2 18.2-42.9 18.2-1.7 0-3.5-.1-5.2-.2-32.8-2.1-63.3-14.9-86.2-25.8-62.2-30.1-116.8-72.8-162.1-127-37.3-44.9-62.4-86.7-79-131.5-10.3-27.5-14.2-49.6-12.6-69.7z"
                    data-original="#000000"
                  />
                </svg>
              </div>
              <a href="" className="text-gray-100 text-sm ml-4">
                <span className="block text-xl text-primary font-bold">
                  Call Our Office
                </span>
                <span className="font-bold">+221-78 750 79 89</span>
              </a>
            </li>
            <li className="flex items-center">
              <div className="bg-[#343538] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="#fff"
                  viewBox="0 0 479.058 479.058"
                >
                  <path
                    d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                    data-original="#000000"
                  />
                </svg>
              </div>
              <a href="" className="text-gray-100 text-sm ml-4">
                <span className="block text-xl text-primary font-bold">
                  Mail
                </span>
                <span className="font-bold">joykmultiservices@gmail.com</span>
              </a>
            </li>
          </motion.ul>
        </div>

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
          className="flex "
        >
          <ul className="flex  mt-8 space-x-4">
            <li className="hover:bg-[#343538] h-10 w-10 rounded-full flex items-center justify-center shrink-0 hover:-translate-y-1 transition-transform duration-300">
              <a href="">
                <FaFacebookF className="text-white " />
              </a>
            </li>
            <li className="hover:bg-[#343538] h-10 w-10 rounded-full flex items-center justify-center shrink-0 hover:-translate-y-1 transition-transform duration-300">
              <a href="">
                <FaLinkedinIn className="text-white" />
              </a>
            </li>
            <li className="hover:bg-[#343538] h-10 w-10 rounded-full flex items-center justify-center shrink-0 hover:-translate-y-1 transition-transform duration-300">
              <a href="">
                <FaInstagram className="text-white" />
              </a>
            </li>
            <li className="hover:bg-[#343538] h-10 w-10 rounded-full flex items-center justify-center shrink-0 hover:-translate-y-1 transition-transform duration-300">
              <a href="">
                <FaXTwitter className="text-white" />
              </a>
            </li>
          </ul>
        </motion.div>
      </div>

      <div className="lg:flex lg:item-center mt-12 border-t-[1px] border-gray-600 pt-2">
        <ul className="flex flex-wrap gap-4 md:gap-20">
          <li>
            <a href="" className="text-gray-300 hover:text-gray-100 text-sm">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="" className="text-gray-300 hover:text-gray-100 text-sm">
              Privacy Policy
            </a>
          </li>
          {/* <li>
            <a href="" className="text-gray-300 hover:text-gray-100 text-sm">
              Security
            </a>
          </li> */}
        </ul>

        <p className="text-sm text-gray-300 lg:ml-auto max-lg:mt-6">
          Copyright © 2024 Joyk Multiservices Group. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
