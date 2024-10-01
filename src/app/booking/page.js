import React from "react";
import Booking from "../components/Booking";
import { FaCar } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
function Page() {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="relative w-full h-full flex justify-center">
        <Booking />
      </div>
      <div className="w-full md:px-20">
        <div className="flex flex-col lg:flex-row shadow p-8 justify-between">
          <div className="">
            <p className="text-3xl font-semibold">RIDE</p>
            <p className="text-gray-500 text-sm">
              Reliable ride at the best price.
            </p>
            <div className="flex flex-col mt-8 gap-2">
              <div className="flex gap-4 items-center">
                <IoPeople className="h-6 w-6" />
                <input
                  className="appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="passengers"
                  type="number"
                  min="1"
                  name="passengers"
                  // value={formData.passengers}
                  // onChange={handleChange}
                  required
                />
              </div>
              <p className="text-sm text-gray-500">Passengers</p>
            </div>
            <div className="flex flex-col mt-8 gap-2">
              <div className="flex gap-4 items-center">
                <FaCar className="h-6 w-6" />
                <input
                  className="appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="passengers"
                  type="number"
                  min="1"
                  name="passengers"
                  // value={formData.passengers}
                  // onChange={handleChange}
                  required
                />
              </div>
              <p className="text-sm text-gray-500">Cars</p>
            </div>
          </div>
          <div>
            <img src="/images/img-vehicle.png" />
          </div>
          <div className="flex flex-col justify-between pe-20 gap-10 lg:gap-0">
            <div className="flex flex-col">
              <div className="flex gap-2 items-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.38551 6.8424L1 2.45688L2.45688 1L6.45688 5H17.8712L19.802 9.78483L22.0001 11.2599V20H21.4569L23 21.5431L21.5431 23L18.5431 20H16V18H8V20H2.0001V11.2599L4.19816 9.78483L5.38551 6.8424ZM14.5431 16L13.5431 15H9V13H11.5431L10.5431 12H4.5L4.0001 12.3263V13H7V15H4.0001V18H6V16H14.5431ZM18 16H17.4569L15 13.5431V13H14.4569L13.4569 12H19.5L20.0001 12.3263V13H17V15H20.0001V18H19.4569L18 16.5431V16ZM8.54312 10L6.8498 8.30668L6.2 10H8.54312ZM17.8 10H11.4569L8.45688 7H16.649L17.8 10Z"
                    fill="#191919"
                  ></path>
                </svg>
                <div className="text-white p-2 text-xs bg-gray-700 rounded">
                  <p>Free cancellation</p>
                </div>
              </div>
              <p className="text-gray-500 text-sm">
                Up to 12 hour before pickup time.
              </p>
            </div>
            <div className="flex">
              <p className="font-semibold w-full pt-4 text-center">
                $ <span className="text-3xl">23</span>.99
              </p>
              <button className=" relative flex gap-2 h-[50px] w-full items-center justify-center overflow-hidden bg-black text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0  before:bg-orange-600 before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-full rounded-lg">
                <span className="relative z-10 ">Book</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
