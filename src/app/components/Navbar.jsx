// "use client";
// import { useSession, signOut } from "next-auth/react";
// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";
// import { IoMdMenu } from "react-icons/io";
// import { RxCross2 } from "react-icons/rx";

// export default function Header() {
//   const { data: session, status } = useSession();
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const handleLogout = () => {
//     signOut({ callbackUrl: "/" });
//   };

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <header className="sticky h-20 top-0 bg-white shadow-md z-50 items-center flex sm:px-6">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between">
//           {/* Header Left */}
//           <div className="flex items-center">
//             <div className="w-full">
//               <Link href="/">
//                 <div className="flex">
//                   <Image
//                     alt="luxride"
//                     src="/images/logo.jpeg"
//                     width={100}
//                     height={100}
//                     className="h-20 w-auto"
//                   />
//                 </div>
//               </Link>
//             </div>
//           </div>

//           {/* Main Navigation */}
//           <nav className="hidden md:flex">
//             <ul className="flex space-x-12">
//               <li>
//                 <Link href="/">
//                   <p className="text-black hover:text-primary">Home</p>
//                 </Link>
//               </li>
//               <li className="relative group">
//                 <Link href="/about">
//                   <p className="text-black hover:text-primary">About Us</p>
//                 </Link>
//                 {/* Submenu */}
//                 <ul className="absolute left-0 pt-6 hidden group-hover:block text-white py-2 w-80">
//                   <li className="bg-black">
//                     <Link href="/booking">
//                       <p className="block px-2 py-2 hover:bg-[#2f3134] hover:text-primary">
//                         Book Vehicle
//                       </p>
//                     </Link>
//                   </li>
//                   <li className="bg-black">
//                     <Link href="/booking-history">
//                       <p className="block px-2 py-2 hover:bg-[#2f3134] hover:text-primary">
//                         Booking History
//                       </p>
//                     </Link>
//                   </li>
//                   <li className="bg-black">
//                     <Link href="/invoice">
//                       <p className="block px-2 py-2 hover:bg-[#2f3134] hover:text-primary">
//                         Invoice
//                       </p>
//                     </Link>
//                   </li>
//                 </ul>
//               </li>
//               <li>
//                 <Link href="/our-service">
//                   <p className="text-black hover:text-primary">Our Services</p>
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/contact-us">
//                   <p className="text-black hover:text-primary">Contact</p>
//                 </Link>
//               </li>
//             </ul>
//           </nav>

//           {/* Header Right */}
//           <div className="flex items-center space-x-4">
//             {/* Login & Register Buttons */}
//             {status === "authenticated" ? (
//               <>
//                 <img
//                   src={session.user.image || "/images/user-icon.png"}
//                   className="rounded-full w-10 h-10"
//                   alt="User"
//                 />
//                 <button
//                   onClick={handleLogout}
//                   className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-orange-600"
//                 >
//                   Logout
//                 </button>
//               </>
//             ) : (
//               <>
//                 <Link href="/login">
//                   <button className="bg-black text-white text-xs sm:text-sm py-[10px] px-6 rounded-full hover:bg-gray-800">
//                     Log In
//                   </button>
//                 </Link>
//                 <Link href="/register">
//                   <button className="bg-black text-white text-xs sm:text-sm py-[10px] px-6 rounded-full hover:bg-gray-800">
//                     Sign Up
//                   </button>
//                 </Link>
//               </>
//             )}

//             {/* Language Dropdown */}
//             <div className="ml-6 flex items-center group">
//               <span className="text-black cursor-pointer text-sm">EN</span>
//               <div className="absolute w-32 -right-4 hidden group-hover:block bg-white shadow-lg py-2 mt-28 mr-4">
//                 <ul>
//                   <li>
//                     <Link href="#">
//                       <div className="flex items-center px-4 py-2 hover:bg-gray-100">
//                         <img
//                           src="/images/en.png"
//                           alt="English"
//                           className="w-6 h-4 mr-2 rounded-sm"
//                         />
//                         English
//                       </div>
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="#">
//                       <div className="flex items-center px-4 py-2 hover:bg-gray-100">
//                         <img
//                           src="/images/fr.png"
//                           alt="French"
//                           className="w-6 h-4 mr-2 rounded-sm"
//                         />
//                         French
//                       </div>
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//               <button onClick={toggleMobileMenu} className="md:hidden ml-6">
//                 {isMobileMenuOpen ? (
//                   <RxCross2 className="h-6 w-6" />
//                 ) : (
//                   <IoMdMenu className="h-6 w-6" />
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="fixed inset-0 z-50 bg-white">
//           <div className="flex flex-col h-full">
//             <div className="flex justify-between items-center p-4 border-b">
//               <Link href="/">
//                 <Image
//                   alt="luxride"
//                   src="/images/logo.jpeg"
//                   width={100}
//                   height={100}
//                   className="h-16 w-auto"
//                 />
//               </Link>
//               <button onClick={toggleMobileMenu}>
//                 <RxCross2 className="h-6 w-6" />
//               </button>
//             </div>
//             <nav className="flex-grow">
//               <ul className="flex flex-col space-y-4 p-4">
//                 <li>
//                   <Link href="/" onClick={toggleMobileMenu}>
//                     <p className="text-black hover:text-primary text-lg">
//                       Home
//                     </p>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/about" onClick={toggleMobileMenu}>
//                     <p className="text-black hover:text-primary text-lg">
//                       About Us
//                     </p>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/booking" onClick={toggleMobileMenu}>
//                     <p className="text-black hover:text-primary text-lg">
//                       Book Vehicle
//                     </p>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/booking-history" onClick={toggleMobileMenu}>
//                     <p className="text-black hover:text-primary text-lg">
//                       Booking History
//                     </p>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/invoice" onClick={toggleMobileMenu}>
//                     <p className="text-black hover:text-primary text-lg">
//                       Invoice
//                     </p>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/our-service" onClick={toggleMobileMenu}>
//                     <p className="text-black hover:text-primary text-lg">
//                       Our Services
//                     </p>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/contact-us" onClick={toggleMobileMenu}>
//                     <p className="text-black hover:text-primary text-lg">
//                       Contact
//                     </p>
//                   </Link>
//                 </li>
//               </ul>
//             </nav>
//             <div className="p-4 border-t">
//               {status === "authenticated" ? (
//                 <button
//                   onClick={() => {
//                     handleLogout();
//                     toggleMobileMenu();
//                   }}
//                   className="w-full text-center py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-orange-600"
//                 >
//                   Logout
//                 </button>
//               ) : (
//                 <div className="space-y-2 flex flex-col">
//                   <Link href="/login" onClick={toggleMobileMenu}>
//                     <button className="w-full bg-black text-white text-sm py-[10px] px-6 rounded-full hover:bg-gray-800">
//                       Log In
//                     </button>
//                   </Link>
//                   <Link href="/register" onClick={toggleMobileMenu}>
//                     <button className="w-full bg-black text-white text-sm py-[10px] px-6 rounded-full hover:bg-gray-800">
//                       Sign Up
//                     </button>
//                   </Link>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

// "use client";

// import { useSession, signOut } from "next-auth/react";
// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";
// import { IoMdMenu } from "react-icons/io";
// import { RxCross2 } from "react-icons/rx";
// import { useTranslation } from "next-i18next";
// import { useRouter } from "next/router";

// export default function Header() {
//   const { data: session, status } = useSession();
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const { t, i18n } = useTranslation();
//   const router = useRouter();

//   const handleLogout = () => {
//     signOut({ callbackUrl: "/" });
//   };

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const changeLanguage = (lng) => {
//     i18n.changeLanguage(lng);
//     router.push(router.pathname, router.asPath, { locale: lng });
//   };

//   return (
//     <header className="sticky h-20 top-0 bg-white shadow-md z-50 items-center flex sm:px-6">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between">
//           {/* Header Left */}
//           <div className="flex items-center">
//             <div className="w-full">
//               <Link href="/">
//                 <div className="flex">
//                   <Image
//                     alt="luxride"
//                     src="/images/logo.jpeg"
//                     width={100}
//                     height={100}
//                     className="h-20 w-auto"
//                   />
//                 </div>
//               </Link>
//             </div>
//           </div>

//           {/* Main Navigation */}
//           <nav className="hidden md:flex">
//             <ul className="flex space-x-12">
//               <li>
//                 <Link href="/">
//                   <p className="text-black hover:text-primary">{t("home")}</p>
//                 </Link>
//               </li>
//               <li className="relative group">
//                 <Link href="/about">
//                   <p className="text-black hover:text-primary">
//                     {t("aboutUs")}
//                   </p>
//                 </Link>
//                 {/* Submenu */}
//                 <ul className="absolute left-0 pt-6 hidden group-hover:block text-white py-2 w-80">
//                   <li className="bg-black">
//                     <Link href="/booking">
//                       <p className="block px-2 py-2 hover:bg-[#2f3134] hover:text-primary">
//                         {t("bookVehicle")}
//                       </p>
//                     </Link>
//                   </li>
//                   <li className="bg-black">
//                     <Link href="/booking-history">
//                       <p className="block px-2 py-2 hover:bg-[#2f3134] hover:text-primary">
//                         {t("bookingHistory")}
//                       </p>
//                     </Link>
//                   </li>
//                   <li className="bg-black">
//                     <Link href="/invoice">
//                       <p className="block px-2 py-2 hover:bg-[#2f3134] hover:text-primary">
//                         {t("invoice")}
//                       </p>
//                     </Link>
//                   </li>
//                 </ul>
//               </li>
//               <li>
//                 <Link href="/our-service">
//                   <p className="text-black hover:text-primary">
//                     {t("ourServices")}
//                   </p>
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/contact-us">
//                   <p className="text-black hover:text-primary">
//                     {t("contact")}
//                   </p>
//                 </Link>
//               </li>
//             </ul>
//           </nav>

//           {/* Header Right */}
//           <div className="flex items-center space-x-4">
//             {/* Login & Register Buttons */}
//             {status === "authenticated" ? (
//               <>
//                 <img
//                   src={session.user.image || "/images/user-icon.png"}
//                   className="rounded-full w-10 h-10"
//                   alt="User"
//                 />
//                 <button
//                   onClick={handleLogout}
//                   className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-orange-600"
//                 >
//                   {t("logout")}
//                 </button>
//               </>
//             ) : (
//               <>
//                 <Link href="/login">
//                   <button className="bg-black text-white text-xs sm:text-sm py-[10px] px-6 rounded-full hover:bg-gray-800">
//                     {t("login")}
//                   </button>
//                 </Link>
//                 <Link href="/register">
//                   <button className="bg-black text-white text-xs sm:text-sm py-[10px] px-6 rounded-full hover:bg-gray-800">
//                     {t("signUp")}
//                   </button>
//                 </Link>
//               </>
//             )}

//             {/* Language Dropdown */}
//             <div className="ml-6 flex items-center group">
//               <span className="text-black cursor-pointer text-sm">
//                 {i18n.language.toUpperCase()}
//               </span>
//               <div className="absolute w-32 -right-4 hidden group-hover:block bg-white shadow-lg py-2 mt-28 mr-4">
//                 <ul>
//                   <li>
//                     <button
//                       onClick={() => changeLanguage("en")}
//                       className="w-full"
//                     >
//                       <div className="flex items-center px-4 py-2 hover:bg-gray-100">
//                         <img
//                           src="/images/en.png"
//                           alt="English"
//                           className="w-6 h-4 mr-2 rounded-sm"
//                         />
//                         English
//                       </div>
//                     </button>
//                   </li>
//                   <li>
//                     <button
//                       onClick={() => changeLanguage("fr")}
//                       className="w-full"
//                     >
//                       <div className="flex items-center px-4 py-2 hover:bg-gray-100">
//                         <img
//                           src="/images/fr.png"
//                           alt="French"
//                           className="w-6 h-4 mr-2 rounded-sm"
//                         />
//                         Français
//                       </div>
//                     </button>
//                   </li>
//                 </ul>
//               </div>
//               <button onClick={toggleMobileMenu} className="md:hidden ml-6">
//                 {isMobileMenuOpen ? (
//                   <RxCross2 className="h-6 w-6" />
//                 ) : (
//                   <IoMdMenu className="h-6 w-6" />
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="fixed inset-0 z-50 bg-white">
//           <div className="flex flex-col h-full">
//             <div className="flex justify-between items-center p-4 border-b">
//               <Link href="/">
//                 <Image
//                   alt="luxride"
//                   src="/images/logo.jpeg"
//                   width={100}
//                   height={100}
//                   className="h-16 w-auto"
//                 />
//               </Link>
//               <button onClick={toggleMobileMenu}>
//                 <RxCross2 className="h-6 w-6" />
//               </button>
//             </div>
//             <nav className="flex-grow">
//               <ul className="flex flex-col space-y-4 p-4">
//                 <li>
//                   <Link href="/" onClick={toggleMobileMenu}>
//                     <p className="text-black hover:text-primary text-lg">
//                       {t("home")}
//                     </p>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/about" onClick={toggleMobileMenu}>
//                     <p className="text-black hover:text-primary text-lg">
//                       {t("aboutUs")}
//                     </p>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/booking" onClick={toggleMobileMenu}>
//                     <p className="text-black hover:text-primary text-lg">
//                       {t("bookVehicle")}
//                     </p>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/booking-history" onClick={toggleMobileMenu}>
//                     <p className="text-black hover:text-primary text-lg">
//                       {t("bookingHistory")}
//                     </p>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/invoice" onClick={toggleMobileMenu}>
//                     <p className="text-black hover:text-primary text-lg">
//                       {t("invoice")}
//                     </p>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/our-service" onClick={toggleMobileMenu}>
//                     <p className="text-black hover:text-primary text-lg">
//                       {t("ourServices")}
//                     </p>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/contact-us" onClick={toggleMobileMenu}>
//                     <p className="text-black hover:text-primary text-lg">
//                       {t("contact")}
//                     </p>
//                   </Link>
//                 </li>
//               </ul>
//             </nav>
//             <div className="p-4 border-t">
//               {status === "authenticated" ? (
//                 <button
//                   onClick={() => {
//                     handleLogout();
//                     toggleMobileMenu();
//                   }}
//                   className="w-full text-center py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-orange-600"
//                 >
//                   {t("logout")}
//                 </button>
//               ) : (
//                 <div className="space-y-2 flex flex-col">
//                   <Link href="/login" onClick={toggleMobileMenu}>
//                     <button className="w-full bg-black text-white text-sm py-[10px] px-6 rounded-full hover:bg-gray-800">
//                       {t("login")}
//                     </button>
//                   </Link>
//                   <Link href="/register" onClick={toggleMobileMenu}>
//                     <button className="w-full bg-black text-white text-sm py-[10px] px-6 rounded-full hover:bg-gray-800">
//                       {t("signUp")}
//                     </button>
//                   </Link>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

//working
"use client";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

export default function Header() {
  const { data: session, status } = useSession();
  const { language, changeLanguage } = useLanguage();

  const t = translations[language];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    signOut({ callbackUrl: "/" });
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLanguageChange = (lang) => {
    changeLanguage(lang);
  };

  return (
    <header className="sticky h-20 top-0 bg-white shadow-md z-50 items-center flex sm:px-6">
      <div className="w-full mx-auto px-4">
        <div className="flex items-center justify-between gap-4">
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
          </div>

          {/* Main Navigation */}
          <nav className="hidden md:flex text-xs lg:text-base">
            <ul className="flex space-x-12">
              <li>
                <Link href="/">
                  <p className="text-black hover:text-primary">
                    {t.Navigation.home}
                  </p>
                </Link>
              </li>
              <li className="relative group">
                <Link href="/about-us">
                  <p className="text-black hover:text-primary">
                    {t.Navigation.aboutUs}
                  </p>
                </Link>
                {/* Submenu */}
              </li>
              <li className="relative group">
                {/* <Link href="/"> */}
                <p className="text-black hover:text-primary">
                  {t.Navigation.ourServices}
                </p>
                {/* </Link> */}
                {/* <ul className="absolute left-0 pt-6 hidden group-hover:block text-white py-2 w-80">
                  <li className="bg-black">
                    <Link href="/booking">
                      <p className="block px-2 py-2 hover:bg-[#2f3134] hover:text-primary">
                        {t.bookVehicle}
                      </p>
                    </Link>
                  </li>
                  <li className="bg-black">
                    <Link href="/booking-history">
                      <p className="block px-2 py-2 hover:bg-[#2f3134] hover:text-primary">
                        {t.bookingHistory}
                      </p>
                    </Link>
                  </li>
                </ul> */}
                <ul className="absolute left-0 pt-2 hidden group-hover:block text-black bg-white rounded-md shadow-lg w-80">
                  <li>
                    <Link href="/booking">
                      <p className="block px-4 py-2 hover:bg-gray-100 hover:text-primary rounded-t-md">
                        {t.Navigation.bookVehicle}
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/booking-history">
                      <p className="block px-4 py-2 hover:bg-gray-100 hover:text-primary rounded-b-md">
                        {t.Navigation.bookingHistory}
                      </p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/contact-us">
                  <p className="text-black hover:text-primary">
                    {t.Navigation.contact}
                  </p>
                </Link>
              </li>
            </ul>
          </nav>

          {/* Header Right */}
          <div className="flex items-center space-x-5">
            {/* Login & Register Buttons */}
            {status === "authenticated" ? (
              <>
                <img
                  src={session.user.image || "/images/user-icon.png"}
                  className="rounded-full w-10 h-10"
                  alt="User"
                />
                <button
                  onClick={handleLogout}
                  className=" whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-orange-600"
                >
                  {t.Navigation.logout}
                </button>
              </>
            ) : (
              <>
                <Link href="/login">
                  <button className="bg-black text-white text-xs sm:text-sm py-[10px] px-6 rounded-full hover:bg-gray-800">
                    {t.Navigation.login}
                  </button>
                </Link>
                <Link href="/register">
                  <button className="bg-black text-white text-xs sm:text-sm py-[10px] px-6 rounded-full hover:bg-gray-800">
                    {t.Navigation.signup}
                  </button>
                </Link>
              </>
            )}

            {/* Language Dropdown */}
            <div className=" flex items-center group">
              <span className="text-black cursor-pointer text-sm">
                {language.toUpperCase()}
              </span>
              <div className="absolute w-32 -right-4 hidden group-hover:block bg-white shadow-lg py-2 mt-28 mr-4">
                <ul>
                  <li>
                    <button
                      onClick={() => handleLanguageChange("en")}
                      className="w-full text-left"
                    >
                      <div className="flex items-center px-4 py-2 hover:bg-gray-100">
                        <img
                          src="/images/en.png"
                          alt="English"
                          className="w-6 h-4 mr-2 rounded-sm"
                        />
                        English
                      </div>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleLanguageChange("fr")}
                      className="w-full text-left"
                    >
                      <div className="flex items-center px-4 py-2 hover:bg-gray-100">
                        <img
                          src="/images/fr.png"
                          alt="French"
                          className="w-6 h-4 mr-2 rounded-sm"
                        />
                        French
                      </div>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <button onClick={toggleMobileMenu} className="md:hidden ">
              {isMobileMenuOpen ? (
                <RxCross2 className="h-6 w-6" />
              ) : (
                <IoMdMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-4 border-b">
              <Link href="/">
                <Image
                  alt="luxride"
                  src="/images/logo.jpeg"
                  width={100}
                  height={100}
                  className="h-16 w-auto"
                />
              </Link>
              <button onClick={toggleMobileMenu}>
                <RxCross2 className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex-grow">
              <ul className="flex flex-col space-y-4 p-4">
                <li>
                  <Link href="/" onClick={toggleMobileMenu}>
                    <p className="text-black hover:text-primary text-lg">
                      {t.Navigation.home}
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" onClick={toggleMobileMenu}>
                    <p className="text-black hover:text-primary text-lg">
                      {t.Navigation.aboutUs}
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="/booking" onClick={toggleMobileMenu}>
                    <p className="text-black hover:text-primary text-lg">
                      {t.Navigation.bookVehicle}
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="/booking-history" onClick={toggleMobileMenu}>
                    <p className="text-black hover:text-primary text-lg">
                      {t.Navigation.bookingHistory}
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" onClick={toggleMobileMenu}>
                    <p className="text-black hover:text-primary text-lg">
                      {t.Navigation.contact}
                    </p>
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="p-4 border-t">
              {status === "authenticated" ? (
                <button
                  onClick={() => {
                    handleLogout();
                    toggleMobileMenu();
                  }}
                  className="w-full text-center py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-orange-600"
                >
                  {t.Navigation.logout}
                </button>
              ) : (
                <div className="space-y-2 flex flex-col">
                  <Link href="/login" onClick={toggleMobileMenu}>
                    <button className="w-full bg-black text-white text-sm py-[10px] px-6 rounded-full hover:bg-gray-800">
                      {t.Navigation.login}
                    </button>
                  </Link>
                  <Link href="/register" onClick={toggleMobileMenu}>
                    <button className="w-full bg-black text-white text-sm py-[10px] px-6 rounded-full hover:bg-gray-800">
                      {t.Navigation.signup}
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

//test

// "use client";
// import { useSession, signOut } from "next-auth/react";
// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";
// import { IoMdMenu } from "react-icons/io";
// import { RxCross2 } from "react-icons/rx";
// import { useRouter, usePathname } from "next/navigation";
// import { useLocale, useTranslations } from "next-intl";

// export default function Header() {
//   const { data: session, status } = useSession();

//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const router = useRouter();
//   const pathname = usePathname();
//   const locale = useLocale();
//   const t = useTranslations("Navigation");

//   const handleLogout = () => {
//     signOut({ callbackUrl: "/" });
//   };

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const changeLanguage = (newLocale) => {
//     const currentPath = pathname.split("/").slice(2).join("/");
//     router.push(`/${newLocale}/${currentPath}`);
//   };

//   return (
//     <header className="sticky h-20 top-0 bg-white shadow-md z-50 items-center flex sm:px-6">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between">
//           {/* Header Left */}
//           <div className="flex items-center">
//             <div className="w-full">
//               <Link href="/">
//                 <div className="flex">
//                   <Image
//                     alt="luxride"
//                     src="/images/logo.jpeg"
//                     width={100}
//                     height={100}
//                     className="h-20 w-auto"
//                   />
//                 </div>
//               </Link>
//             </div>
//           </div>

//           {/* Main Navigation */}
//           <nav className="hidden md:flex">
//             <ul className="flex space-x-12">
//               <li>
//                 <Link href="/">
//                   <p className="text-black hover:text-primary">{t("home")}</p>
//                 </Link>
//               </li>
//               <li className="relative group">
//                 <Link href="/about-us">
//                   <p className="text-black hover:text-primary">
//                     {t("aboutUs")}
//                   </p>
//                 </Link>
//                 {/* Submenu */}
//               </li>
//               <li className="relative group">
//                 {/* <Link href="/"> */}
//                 <p className="text-black hover:text-primary">
//                   {t("ourServices")}
//                 </p>
//                 {/* </Link> */}
//                 {/* <ul className="absolute left-0 pt-6 hidden group-hover:block text-white py-2 w-80">
//                   <li className="bg-black">
//                     <Link href="/booking">
//                       <p className="block px-2 py-2 hover:bg-[#2f3134] hover:text-primary">
//                         {t.bookVehicle}
//                       </p>
//                     </Link>
//                   </li>
//                   <li className="bg-black">
//                     <Link href="/booking-history">
//                       <p className="block px-2 py-2 hover:bg-[#2f3134] hover:text-primary">
//                         {t.bookingHistory}
//                       </p>
//                     </Link>
//                   </li>
//                 </ul> */}
//                 <ul className="absolute left-0 pt-2 hidden group-hover:block text-black bg-white rounded-md shadow-lg w-80">
//                   <li>
//                     <Link href="/booking">
//                       <p className="block px-4 py-2 hover:bg-gray-100 hover:text-primary rounded-t-md">
//                         {t("bookVehicle")}
//                       </p>
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="/booking-history">
//                       <p className="block px-4 py-2 hover:bg-gray-100 hover:text-primary rounded-b-md">
//                         {t("bookingHistory")}
//                       </p>
//                     </Link>
//                   </li>
//                 </ul>
//               </li>
//               <li>
//                 <Link href="/contact-us">
//                   <p className="text-black hover:text-primary">
//                     {t("contact")}
//                   </p>
//                 </Link>
//               </li>
//             </ul>
//           </nav>

//           {/* Header Right */}
//           <div className="flex items-center space-x-4">
//             {/* Login & Register Buttons */}
//             {status === "authenticated" ? (
//               <>
//                 <img
//                   src={session.user.image || "/images/user-icon.png"}
//                   className="rounded-full w-10 h-10"
//                   alt="User"
//                 />
//                 <button
//                   onClick={handleLogout}
//                   className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-orange-600"
//                 >
//                   {t("logout")}
//                 </button>
//               </>
//             ) : (
//               <>
//                 <Link href="/login">
//                   <button className="bg-black text-white text-xs sm:text-sm py-[10px] px-6 rounded-full hover:bg-gray-800">
//                     {t("login")}
//                   </button>
//                 </Link>
//                 <Link href="/register">
//                   <button className="bg-black text-white text-xs sm:text-sm py-[10px] px-6 rounded-full hover:bg-gray-800">
//                     {t("signup")}
//                   </button>
//                 </Link>
//               </>
//             )}

//             {/* Language Dropdown */}
//             <div className="ml-6 flex items-center group">
//               <span className="text-black cursor-pointer text-sm">
//                 {locale.toUpperCase()}
//               </span>
//               <div className="absolute w-32 -right-4 hidden group-hover:block bg-white shadow-lg py-2 mt-28 mr-4">
//                 <ul>
//                   <li>
//                     <button
//                       onClick={() => changeLanguage("en")}
//                       className="w-full text-left"
//                     >
//                       <div className="flex items-center px-4 py-2 hover:bg-gray-100">
//                         <img
//                           src="/images/en.png"
//                           alt="English"
//                           className="w-6 h-4 mr-2 rounded-sm"
//                         />
//                         English
//                       </div>
//                     </button>
//                   </li>
//                   <li>
//                     <button
//                       onClick={() => changeLanguage("fr")}
//                       className="w-full text-left"
//                     >
//                       <div className="flex items-center px-4 py-2 hover:bg-gray-100">
//                         <img
//                           src="/images/fr.png"
//                           alt="French"
//                           className="w-6 h-4 mr-2 rounded-sm"
//                         />
//                         French
//                       </div>
//                     </button>
//                   </li>
//                 </ul>
//               </div>
//               <button onClick={toggleMobileMenu} className="md:hidden ml-6">
//                 {isMobileMenuOpen ? (
//                   <RxCross2 className="h-6 w-6" />
//                 ) : (
//                   <IoMdMenu className="h-6 w-6" />
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="fixed inset-0 z-50 bg-white">
//           <div className="flex flex-col h-full">
//             <div className="flex justify-between items-center p-4 border-b">
//               <Link href="/">
//                 <Image
//                   alt="luxride"
//                   src="/images/logo.jpeg"
//                   width={100}
//                   height={100}
//                   className="h-16 w-auto"
//                 />
//               </Link>
//               <button onClick={toggleMobileMenu}>
//                 <RxCross2 className="h-6 w-6" />
//               </button>
//             </div>
//             <nav className="flex-grow">
//               <ul className="flex flex-col space-y-4 p-4">
//                 <li>
//                   <Link href="/" onClick={toggleMobileMenu}>
//                     <p className="text-black hover:text-primary text-lg">
//                       {t("home")}
//                     </p>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/about-us" onClick={toggleMobileMenu}>
//                     <p className="text-black hover:text-primary text-lg">
//                       {t("aboutUs")}
//                     </p>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/booking" onClick={toggleMobileMenu}>
//                     <p className="text-black hover:text-primary text-lg">
//                       {t("bookVehicle")}
//                     </p>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/booking-history" onClick={toggleMobileMenu}>
//                     <p className="text-black hover:text-primary text-lg">
//                       {t("bookingHistory")}
//                     </p>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/contact-us" onClick={toggleMobileMenu}>
//                     <p className="text-black hover:text-primary text-lg">
//                       {t("contact")}
//                     </p>
//                   </Link>
//                 </li>
//               </ul>
//             </nav>
//             <div className="p-4 border-t">
//               {status === "authenticated" ? (
//                 <button
//                   onClick={() => {
//                     handleLogout();
//                     toggleMobileMenu();
//                   }}
//                   className="w-full text-center py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-orange-600"
//                 >
//                   {t("logout")}
//                 </button>
//               ) : (
//                 <div className="space-y-2 flex flex-col">
//                   <Link href="/login" onClick={toggleMobileMenu}>
//                     <button className="w-full bg-black text-white text-sm py-[10px] px-6 rounded-full hover:bg-gray-800">
//                       {t("login")}
//                     </button>
//                   </Link>
//                   <Link href="/register" onClick={toggleMobileMenu}>
//                     <button className="w-full bg-black text-white text-sm py-[10px] px-6 rounded-full hover:bg-gray-800">
//                       {t("signup")}
//                     </button>
//                   </Link>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }
