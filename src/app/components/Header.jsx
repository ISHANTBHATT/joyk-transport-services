// components/Header.js
"use client";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const { data: session, status } = useSession();
  const handleLogout = () => {
    signOut({ callbackUrl: "/" });
  };
  return (
    <header className="sticky h-20 top-0 bg-white shadow-md z-50 items-center flex px-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Header Left */}
          <div className="flex items-center">
            <div className="w-full">
              <Link href="/">
                <div className="flex">
                  <Image
                    alt="luxride"
                    src="/images/logo.jpeg"
                    width={100}
                    height={100}
                    className="h-20 w-auto"
                  />
                </div>
              </Link>
            </div>

            {/* Main Navigation */}

            {/* Burger Icon */}
            <div className="block xl:hidden">
              <span className="cursor-pointer">
                {/* Add your burger icon here */}
                <div className="burger-icon burger-icon-white">
                  <span className="burger-icon-mid"></span>
                  <span className="burger-icon-bottom"></span>
                </div>
              </span>
            </div>
          </div>
          <nav className="hidden xl:block">
            <ul className="flex space-x-12">
              <li>
                <Link href="/">
                  <p className="text-black hover:text-primary">Home</p>
                </Link>
              </li>
              <li className="relative group">
                <Link href="/about">
                  <p className="text-black hover:text-primary">About Us</p>
                </Link>
                {/* Submenu */}
                <ul className="absolute left-0 pt-6 hidden group-hover:block text-white  py-2 w-80">
                  <li className="bg-black">
                    <Link href="/booking">
                      <p className="block px-2 py-2 hover:bg-[#2f3134] hover:text-primary ">
                        Book Vehicle
                      </p>
                    </Link>
                  </li>
                  <li className="bg-black">
                    <Link href="/booking-history">
                      <p className="block px-2 py-2 hover:bg-[#2f3134] hover:primary ">
                        Booking History
                      </p>
                    </Link>
                  </li>
                  <li className="bg-black">
                    <Link href="/invoice">
                      <p className="block px-2 py-2 hover:bg-[#2f3134] hover:text-primary">
                        Invoice
                      </p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/our-service">
                  <p className="text-black hover:text-primary">Our Services</p>
                </Link>
              </li>
              <li>
                <Link href="/contact-us">
                  <p className="text-black hover:text-primary">Contact</p>
                </Link>
              </li>
            </ul>
          </nav>
          {/* Header Right */}
          <div className="flex items-center space-x-4">
            {/* Login & Register Buttons */}
            {status === "authenticated" ? (
              <>
                {session.user.image ? (
                  <>
                    {/* <span className="text-sm text-gray-700 mr-4"> */}
                    <img
                      src={session.user.image}
                      className=" rounded-full w-10 h-10"
                    />
                    {/* </span> */}
                    <button
                      onClick={handleLogout}
                      className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-orange-600"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    {/* <span className="text-sm text-gray-700 mr-4"> */}
                    <img
                      src="/images/user-icon.png"
                      className=" rounded-full w-10 h-10"
                    />
                    {/* </span> */}
                    <button
                      onClick={handleLogout}
                      className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-orange-600"
                    >
                      Logout
                    </button>
                  </>
                )}
              </>
            ) : (
              <>
                <Link href="/login">
                  <button className="bg-black text-white text-sm py-[10px] px-6 rounded-full hover:bg-gray-800">
                    Log In
                  </button>
                </Link>
                <Link href="/register">
                  <button className="bg-black text-white text-sm py-[10px] px-6 rounded-full hover:bg-gray-800">
                    Sign Up
                  </button>
                </Link>
              </>
            )}

            {/* Language Dropdown */}
            <div className="ml-6 relative group">
              <span className="text-black cursor-pointer text-sm">EN</span>
              <div className="absolute w-32 -right-4 hidden group-hover:block bg-white shadow-lg py-2">
                <ul>
                  <li>
                    <Link href="#">
                      <div className="flex items-center px-4 py-2 hover:bg-gray-100">
                        <img
                          src="/images/en.png"
                          alt="English"
                          className="w-6 h-4 mr-2 rounded-sm"
                        />
                        English
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <div className="flex items-center px-4 py-2 hover:bg-gray-100">
                        <img
                          src="/images/fr.png"
                          alt="French"
                          className="w-6 h-4 mr-2 rounded-sm"
                        />
                        French
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
