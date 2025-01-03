"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { FaEye } from "react-icons/fa";
import { IoEyeOffSharp } from "react-icons/io5";
import { ClipLoader, SyncLoader } from "react-spinners";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

function Page() {
  const { language, changeLanguage } = useLanguage();
  const t = translations[language];
  const [email, setEmail] = useState("");
  const [showpassword, setShowpassword] = useState(false);
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState("");
  const [isloading, setIsloading] = useState(false);
  const router = useRouter();
  const { data: session, status } = useSession();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsloading(true);
    // if (isRegistering) {
    //   // Register
    //   const res = await fetch("/api/register", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ email, password }),
    //   });
    //   const data = await res.json();
    //   if (data.success) {
    //     // If registration is successful, log in
    //     signIn("credentials", { email, password, callbackUrl: "/booking" });
    //   } else {
    //     setError(data.message || "Registration failed");
    //     alert(data.message || "Registration failed");
    //   }
    // } else {

    // Login
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    setIsloading(false);
    if (result.error) {
      setError("Invaild email or password");
      alert(result.error);
    } else {
      router.push("/booking");
    }
    // }
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
        <p className="text-4xl font-semibold">{t.login.title}</p>
        {/* <p className="text-sm">
          Sign in with this account across the following sites.
        </p> */}
      </div>
      {error && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <span className="block sm:inline">{error}</span>
        </div>
      )}
      <form className="m-auto w-96" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-6">
          <div>
            <div class="relative">
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
                for="email"
                className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0]  peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:scale-90 peer-focus:translate-x-0.5 peer-focus:-translate-y-1.5 peer-focus:text-gray-500  peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:translate-x-0.5 peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500 "
              >
                Email
              </label>
            </div>
          </div>
          <div>
            <div class="relative">
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
                for="password"
                className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0]  peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:scale-90 peer-focus:translate-x-0.5 peer-focus:-translate-y-1.5 peer-focus:text-gray-500  peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:translate-x-0.5 peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500 "
              >
                {t.register.password}
              </label>
              <div className=" absolute right-4 top-5 z-[10]">
                {showpassword ? (
                  <FaEye onClick={handleShow} />
                ) : (
                  <IoEyeOffSharp onClick={handleShow} />
                )}
              </div>
            </div>
          </div>
          <div>
            <button className="mt-10 relative flex gap-2 h-[50px] w-full items-center justify-center overflow-hidden bg-black text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0  before:bg-orange-600 before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-full rounded-lg">
              {isloading ? (
                <>
                  <ClipLoader color="#ffffff" />
                </>
              ) : (
                <>
                  <span className="relative z-10 ">{t.login.title}</span>
                  <MdArrowOutward className="z-10 " />
                </>
              )}
            </button>
          </div>
          <div>
            <div className="flex items-center gap-4">
              {/* <div className=""></div> */}
              <hr className="w-40" />
              <span>{t.register.or}</span>
              <hr className="w-44" />
            </div>
            <div>
              <button
                onClick={handleGoogleLogin}
                className="mt-10 relative flex gap-2 h-[50px] w-full items-center justify-start overflow-hidden bg-black text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:bg-blue-600 before:duration-500 before:ease-out hover:shadow-blue-600 hover:before:h-56 hover:before:w-full rounded-lg"
              >
                <FcGoogle className="z-10 w-32 h-6" />
                <span className="relative z-10 ">{t.register.google}</span>
              </button>
            </div>
            {/* <div>
              <a href="#">Continue Facebook</a>
            </div> */}
          </div>
          <div className="text-center text-sm">
            <span>{t.login.signedup} </span>
            <Link href="/register">
              <span className=" hover:text-primary">
                {t.login.createaccount}
              </span>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Page;
