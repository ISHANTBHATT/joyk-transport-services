// "use client";
// import React, { useEffect, useState } from "react";
// import { signIn, useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import { MdArrowOutward } from "react-icons/md";
// import { FcGoogle } from "react-icons/fc";
// import Link from "next/link";
// import { FaEye } from "react-icons/fa";
// import { IoEyeOffSharp } from "react-icons/io5";
// import { ClipLoader, SyncLoader } from "react-spinners";
// function Page() {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [showpassword, setShowpassword] = useState(false);
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   // const [isRegistering, setIsRegistering] = useState(false);
//   const [isloading, setIsloading] = useState(false);
//   const [error, setError] = useState("");
//   const router = useRouter();
//   const { data: session, status } = useSession();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     // if (isRegistering) {
//     // Register
//     // console.log(password == confirmPassword);
//     if (password !== confirmPassword) {
//       setError((prev) => ({
//         ...prev,
//         passwordMismatch: "Passwords do not match",
//       }));
//       return;
//     }
//     setIsloading(true);

//     // const res = await fetch("/api/send-verification", {
//     //   method: "POST",
//     //   headers: { "Content-Type": "application/json" },
//     //   body: JSON.stringify({ username, email, password }),
//     // });

//     const res = await fetch("/api/register", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ username, email, password }),
//     });
//     const data = await res.json();

//     if (data.success) {
//       // If registration is successful, log in
//       signIn("credentials", { email, password, callbackUrl: "/booking" });
//     } else {
//       setError(data.message || "Registration failed");
//       alert(data.message || "Registration failed");
//     }
//     setIsloading(false);
//     // }
//   };
//   if (session) {
//     router.push("/booking");
//     return null;
//   }

//   if (status === "loading") {
//     return <SyncLoader />;
//   }

//   const handleGoogleLogin = () => {
//     signIn("google", { callbackUrl: "/booking" });
//   };
//   const handleShow = () => {
//     setShowpassword(!showpassword);
//   };
//   return (
//     <div className="mx-auto my-20 flex flex-col gap-8">
//       <div className="flex flex-col mx-auto w-full gap-4 text-center">
//         <p className="text-4xl font-semibold">Creat Account</p>
//         <p className="text-sm">
//           Sign in with this account across the following sites.
//         </p>
//       </div>
//       <form className="m-auto w-96" onSubmit={handleSubmit}>
//         <div className="flex flex-col gap-6">
//           <div>
//             <div class="relative">
//               <input
//                 type="username"
//                 id="username"
//                 className="peer p-4 w-full bg-gray-100 border-transparent rounded-lg text-sm placeholder:text-transparent focus:outline-none focus:ring-1 focus:border-orange-500 focus:ring-orange-500 disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
//                 placeholder=""
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 required
//               />
//               <label
//                 for="username"
//                 className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0]  peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:scale-90 peer-focus:translate-x-0.5 peer-focus:-translate-y-1.5 peer-focus:text-gray-500  peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:translate-x-0.5 peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500 "
//               >
//                 Username
//               </label>
//             </div>
//           </div>
//           <div>
//             <div class="relative">
//               <input
//                 type="email"
//                 id="email"
//                 className="peer p-4 w-full bg-gray-100 border-transparent rounded-lg text-sm placeholder:text-transparent focus:outline-none focus:ring-1 focus:border-orange-500 focus:ring-orange-500 disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
//                 placeholder=""
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//               <label
//                 for="email"
//                 className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0]  peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:scale-90 peer-focus:translate-x-0.5 peer-focus:-translate-y-1.5 peer-focus:text-gray-500  peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:translate-x-0.5 peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500 "
//               >
//                 Email
//               </label>
//             </div>
//           </div>
//           <div>
//             <div class="relative">
//               <input
//                 type={showpassword ? "text" : "password"}
//                 id="password"
//                 className="peer p-4 w-full bg-gray-100 border-transparent rounded-lg text-sm placeholder:text-transparent focus:outline-none focus:ring-1 focus:border-orange-500 focus:ring-orange-500 disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
//                 placeholder=""
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//               <label
//                 for="password"
//                 className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0]  peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:scale-90 peer-focus:translate-x-0.5 peer-focus:-translate-y-1.5 peer-focus:text-gray-500  peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:translate-x-0.5 peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500 "
//               >
//                 Password
//               </label>
//               <div className=" absolute right-4 top-5 z-[10]">
//                 {showpassword ? (
//                   <FaEye onClick={handleShow} />
//                 ) : (
//                   <IoEyeOffSharp onClick={handleShow} />
//                 )}
//               </div>
//             </div>
//           </div>
//           <div>
//             <div
//               className={`relative rounded-lg ${
//                 error.passwordMismatch
//                   ? "border-red-600 border-2"
//                   : "border-none"
//               }`}
//             >
//               <input
//                 type={showpassword ? "text" : "password"}
//                 id="confirmpassword"
//                 className="peer p-4 w-full bg-gray-100 border-transparent rounded-lg text-sm placeholder:text-transparent focus:outline-none focus:ring-1 focus:border-orange-500 focus:ring-orange-500 disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
//                 placeholder=""
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 required
//               />
//               <label
//                 for="confirmpassword"
//                 className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0]  peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:scale-90 peer-focus:translate-x-0.5 peer-focus:-translate-y-1.5 peer-focus:text-gray-500  peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:translate-x-0.5 peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500 "
//               >
//                 Confirm Password
//               </label>
//               <div className=" absolute right-4 top-5 z-[10]">
//                 {showpassword ? (
//                   <FaEye onClick={handleShow} />
//                 ) : (
//                   <IoEyeOffSharp onClick={handleShow} />
//                 )}
//               </div>
//             </div>
//           </div>
//           {/* <div>
//             <div>
//               <label for="phone">Phone</label>
//               <input id="phone" type="tel" placeholder="" />
//             </div>
//           </div> */}
//           <div>
//             <button className="mt-10 relative flex gap-2 h-[50px] w-full items-center justify-center overflow-hidden bg-black text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0  before:bg-orange-600 before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-full rounded-lg">
//               {isloading ? (
//                 <>
//                   <ClipLoader color="#ffffff" />
//                 </>
//               ) : (
//                 <>
//                   <span className="relative z-10 ">Creat Account</span>
//                   <MdArrowOutward className="z-10 " />
//                 </>
//               )}
//               {/* <span className="relative z-10 ">Creat Account</span>
//               <MdArrowOutward className="z-10 " /> */}
//             </button>
//           </div>
//           <div>
//             <div className="flex items-center gap-4">
//               {/* <div className=""></div> */}
//               <hr className="w-40" />
//               <span>OR</span>
//               <hr className="w-44" />
//             </div>
//             <div>
//               <button
//                 onClick={handleGoogleLogin}
//                 className="mt-10 relative flex gap-2 h-[50px] w-full items-center justify-start overflow-hidden bg-black text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:bg-blue-600 before:duration-500 before:ease-out hover:shadow-blue-600 hover:before:h-56 hover:before:w-full rounded-lg"
//               >
//                 <FcGoogle className="z-10 w-32 h-6" />
//                 <span className="relative z-10 ">Continue Google</span>
//               </button>
//             </div>
//             {/* <div>
//               <a href="#">Continue Facebook</a>
//             </div> */}
//           </div>
//           <div className="text-center text-sm">
//             <span>Already have an account? </span>
//             <Link href="/login">
//               <span href="#" className=" hover:text-primary">
//                 Login
//               </span>
//             </Link>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Page;

"use client";
import React, { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { MdArrowOutward } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { FaEye } from "react-icons/fa";
import { IoEyeOffSharp } from "react-icons/io5";
import { ClipLoader, SyncLoader } from "react-spinners";

function Page() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showpassword, setShowpassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState("");

  const [verificationCode, setVerificationCode] = useState("");
  const [verificationSent, setVerificationSent] = useState(false);
  const [expectedVerificationCode, setExpectedVerificationCode] = useState("");

  const router = useRouter();
  const { data: session, status } = useSession();

  const handleSendVerification = async () => {
    setError("");
    setIsloading(true);
    try {
      const res = await fetch("/api/send-verification", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.success) {
        setVerificationSent(true);
        setExpectedVerificationCode(data.verificationCode);
        alert("Verification email sent. Please check your inbox.");
      } else {
        setError(data.message || "Failed to send verification email");
      }
    } catch (error) {
      setError("An error occurred while sending verification email");
      console.error("Verification email error:", error);
    }
    setIsloading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    console.log("Form submitted");
    // console.log(typeof verificationCode);
    // console.log(typeof expectedVerificationCode);
    if (!verificationSent) {
      setError("Please verify your email first");
      return;
    }

    if (String(verificationCode) !== String(expectedVerificationCode)) {
      console.log("run");
      setError("Invalid verification code");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setIsloading(true);
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          password,
          verificationCode,
        }),
      });
      const data = await res.json();

      if (data.success) {
        await signIn("credentials", {
          name,
          email,
          password,
          callbackUrl: "/booking",
        });
      } else {
        setError(data.message || "Registration failed");
        console.error("Registration error:", data);
      }
    } catch (error) {
      setError("An error occurred during registration");
      console.error("Registration error:", error);
    }
    setIsloading(false);
  };

  if (session) {
    router.push("/booking");
    return null;
  }

  if (status === "loading") {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <SyncLoader />
      </div>
    );
  }

  const handleGoogleLogin = () => {
    signIn("google", { callbackUrl: "/booking" });
  };

  const handleShow = () => {
    setShowpassword(!showpassword);
  };

  return (
    <div className="mx-auto my-20 flex flex-col gap-8">
      <div className="flex flex-col mx-auto w-full gap-4 text-center">
        <p className="text-4xl font-semibold">Create Account</p>
        <p className="text-sm">
          Sign in with this account across the following sites.
        </p>
      </div>
      <form className="m-auto w-96" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-6">
          <div>
            <div className="relative">
              <input
                type="text"
                id="name"
                className="peer p-4 w-full bg-gray-100 border-transparent rounded-lg text-sm placeholder:text-transparent focus:outline-none focus:ring-1 focus:border-orange-500 focus:ring-orange-500 disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
                placeholder=""
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label
                htmlFor="name"
                className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0]  peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:scale-90 peer-focus:translate-x-0.5 peer-focus:-translate-y-1.5 peer-focus:text-gray-500  peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:translate-x-0.5 peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500"
              >
                Name
              </label>
            </div>
          </div>
          <div>
            <div className="relative">
              <input
                type="email"
                id="email"
                className="peer p-4 w-full bg-gray-100 border-transparent rounded-lg text-sm placeholder:text-transparent focus:outline-none focus:ring-1 focus:border-orange-500 focus:ring-orange-500 disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
                placeholder=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label
                htmlFor="email"
                className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0]  peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:scale-90 peer-focus:translate-x-0.5 peer-focus:-translate-y-1.5 peer-focus:text-gray-500  peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:translate-x-0.5 peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500"
              >
                Email
              </label>
            </div>
          </div>
          {!verificationSent && (
            <div>
              <button
                type="button"
                onClick={handleSendVerification}
                className="mt-2 relative flex gap-2 h-[50px] w-full items-center justify-center overflow-hidden bg-orange-500 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:bg-orange-600 before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-full rounded-lg"
              >
                {isloading ? (
                  <ClipLoader color="#ffffff" />
                ) : (
                  <>
                    <span className="relative z-10">
                      Send Verification Email
                    </span>
                    <MdArrowOutward className="z-10" />
                  </>
                )}
              </button>
            </div>
          )}
          {verificationSent && (
            <p className="text-sm text-green-600">
              Verification email sent. Please check your inbox.
            </p>
          )}
          {error && <div className="text-red-500 text-sm">{error}</div>}

          {verificationSent && (
            <>
              <div>
                {/* <input
                id="verification-code"
                name="verificationCode"
                type="number"
                required
                className="peer p-4 w-full bg-gray-100 border-transparent rounded-lg text-sm placeholder:text-transparent focus:outline-none focus:ring-1 focus:border-orange-500 focus:ring-orange-500 disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
                placeholder="Enter verification code"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
              />
              <label
                htmlFor="password"
                className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0]  peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:scale-90 peer-focus:translate-x-0.5 peer-focus:-translate-y-1.5 peer-focus:text-gray-500  peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:translate-x-0.5 peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500"
              >
                Verification Code
              </label> */}
                <div className="relative">
                  <input
                    id="verification-code"
                    name="verificationCode"
                    type="number"
                    required
                    className="peer p-4 w-full bg-gray-100 border-transparent rounded-lg text-sm placeholder:text-transparent focus:outline-none focus:ring-1 focus:border-orange-500 focus:ring-orange-500 disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
                    placeholder="Enter verification code"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                  />
                  <label
                    htmlFor="email"
                    className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0]  peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:scale-90 peer-focus:translate-x-0.5 peer-focus:-translate-y-1.5 peer-focus:text-gray-500  peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:translate-x-0.5 peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500"
                  >
                    Verification Code
                  </label>
                </div>
              </div>
              <div>
                <div className="relative">
                  <input
                    type={showpassword ? "text" : "password"}
                    id="password"
                    className="peer p-4 w-full bg-gray-100 border-transparent rounded-lg text-sm placeholder:text-transparent focus:outline-none focus:ring-1 focus:border-orange-500 focus:ring-orange-500 disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
                    placeholder=""
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <label
                    htmlFor="password"
                    className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0]  peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:scale-90 peer-focus:translate-x-0.5 peer-focus:-translate-y-1.5 peer-focus:text-gray-500  peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:translate-x-0.5 peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500"
                  >
                    Password
                  </label>
                  <div className="absolute right-4 top-5 z-[10]">
                    {showpassword ? (
                      <FaEye onClick={handleShow} />
                    ) : (
                      <IoEyeOffSharp onClick={handleShow} />
                    )}
                  </div>
                </div>
              </div>
              <div>
                <div className="relative rounded-lg">
                  <input
                    type={showpassword ? "text" : "password"}
                    id="confirmpassword"
                    className="peer p-4 w-full bg-gray-100 border-transparent rounded-lg text-sm placeholder:text-transparent focus:outline-none focus:ring-1 focus:border-orange-500 focus:ring-orange-500 disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
                    placeholder=""
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                  <label
                    htmlFor="confirmpassword"
                    className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0]  peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:scale-90 peer-focus:translate-x-0.5 peer-focus:-translate-y-1.5 peer-focus:text-gray-500  peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:translate-x-0.5 peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500"
                  >
                    Confirm Password
                  </label>
                  <div className="absolute right-4 top-5 z-[10]">
                    {showpassword ? (
                      <FaEye onClick={handleShow} />
                    ) : (
                      <IoEyeOffSharp onClick={handleShow} />
                    )}
                  </div>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="mt-10 relative flex gap-2 h-[50px] w-full items-center justify-center overflow-hidden bg-black text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0  before:bg-orange-600 before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-full rounded-lg"
                >
                  {isloading ? (
                    <ClipLoader color="#ffffff" />
                  ) : (
                    <>
                      <span className="relative z-10">Create Account</span>
                      <MdArrowOutward className="z-10" />
                    </>
                  )}
                </button>
              </div>
            </>
          )}

          <div>
            <div className="flex items-center gap-4">
              <hr className="w-40" />
              <span>OR</span>
              <hr className="w-44" />
            </div>
            <div>
              <button
                type="button"
                onClick={handleGoogleLogin}
                className="mt-10 relative flex gap-2 h-[50px] w-full items-center justify-start overflow-hidden bg-black text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:bg-blue-600 before:duration-500 before:ease-out hover:shadow-blue-600 hover:before:h-56 hover:before:w-full rounded-lg"
              >
                <FcGoogle className="z-10 w-32 h-6" />
                <span className="relative z-10">Continue with Google</span>
              </button>
            </div>
          </div>
          <div className="text-center text-sm">
            <span>Already have an account? </span>
            <Link href="/login">
              <span className="hover:text-primary">Login</span>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Page;
