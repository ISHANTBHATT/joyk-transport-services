"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { MdArrowOutward } from "react-icons/md";
import { ClipLoader } from "react-spinners";
import Image from "next/image";
function Page() {
  const { data: session, status } = useSession();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (status == "authenticated") {
      setName(session.user.name);
      setEmail(session.user.email);
    }
  }, []);

  const handleSubmit = async () => {
    setIsLoading(true);
    await fetch("/api/contact-form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userEmail: email,
        userName: name,
        subject: subject,
        message: message,
      }),
    });
    setIsLoading(false);
  };
  return (
    <div>
      <div className="px-8 md:px-32  py-12 text-white bg-test2 w-full ">
        <p className="text-5xl "> Contact Us</p>
        <p className="mt-4">
          <Link href="/">Home -</Link>
          <Link href="contact-us">
            <span> Contact Us</span>
          </Link>
        </p>
      </div>
      {/* <div className=""> */}
      {/* <Image
          src="/images/10.png"
          alt=""
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        /> */}
      <div
        className="flex justify-end py-10 md:py-20 md:px-20 min-h-[80vh]"
        style={{
          // backgroundImage: 'url("/images/10.png")',
          backgroundImage: 'url("/images/building.jpeg")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="flex  gap-10  w-full h-full justify-end text-xl">
          <div className="flex items-center">
            <img src="/images/office-icon.png" className="w-32 h-32" />
          </div>

          <div className="flex flex-col gap-2 justify-center">
            <p className="font-bold">Senegal Office</p>
            <p>116 Cite Sonatel Zac Mbao, Dakar-Senegal</p>
            <p>+221-78 750 79 89</p>
            <p>joykmultiservices@gmail.com</p>
          </div>
        </div>
      </div>
      {/* </div> */}
      <div className="flex flex-col lg:flex-row my-20 mx-10">
        <div className="w-full  flex flex-col gap-8">
          <div className="flex flex-col mx-auto w-full gap-4 text-center">
            <p className="text-4xl font-semibold">Leave us your info</p>
          </div>
          <form onSubmit={handleSubmit} className="mx-auto w-3/4">
            <div className="flex flex-col gap-6">
              <div>
                <div class="relative">
                  <input
                    type="text"
                    id="username"
                    autoComplete="name"
                    className="peer p-4 w-full bg-gray-100 border-transparent rounded-lg text-sm placeholder:text-transparent focus:outline-none focus:ring-1 focus:border-orange-500 focus:ring-orange-500 disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
                    placeholder=""
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <label
                    for="username"
                    className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0]  peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:scale-90 peer-focus:translate-x-0.5 peer-focus:-translate-y-1.5 peer-focus:text-gray-500  peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:translate-x-0.5 peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500 "
                  >
                    Name
                  </label>
                </div>
              </div>
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
                    type="text"
                    id="subject"
                    className="peer p-4 w-full bg-gray-100 border-transparent rounded-lg text-sm placeholder:text-transparent focus:outline-none focus:ring-1 focus:border-orange-500 focus:ring-orange-500 disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
                    placeholder=""
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                  />
                  <label
                    for="subject"
                    className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0]  peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:scale-90 peer-focus:translate-x-0.5 peer-focus:-translate-y-1.5 peer-focus:text-gray-500  peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:translate-x-0.5 peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500 "
                  >
                    Subject
                  </label>
                </div>
              </div>
              <div>
                <div class="relative">
                  <textarea
                    type="text"
                    id="message"
                    className="peer p-4 w-full bg-gray-100 border-transparent rounded-lg text-sm placeholder:text-transparent focus:outline-none focus:ring-1 focus:border-orange-500 focus:ring-orange-500 disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
                    placeholder=""
                    rows="4"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                  <label
                    for="message"
                    className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0]  peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:scale-90 peer-focus:translate-x-0.5 peer-focus:-translate-y-1.5 peer-focus:text-gray-500  peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:translate-x-0.5 peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500 "
                  >
                    Message
                  </label>
                </div>
              </div>
              {/* <div>
            <div>
              <label for="phone">Phone</label>
              <input id="phone" type="tel" placeholder="" />
            </div>
          </div> */}
              <div>
                <button
                  type="submit"
                  className="mt-10 relative flex gap-2 h-[50px] w-full items-center justify-center overflow-hidden bg-black text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0  before:bg-orange-600 before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-full rounded-lg"
                >
                  {isLoading ? (
                    <>
                      <ClipLoader color="#ffffff" />
                    </>
                  ) : (
                    <>
                      <span className="relative z-10 ">Get In Touch</span>
                      <MdArrowOutward className="z-10 " />
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="my-20">
          <iframe
            className="w-full h-96 lg:w-96 lg:h-96 "
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184982.45225558482!2d-17.138209156616632!3d14.708384528162094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec19734ec275127%3A0x41805825cedae53!2sBlaise%20Diagne%20International%20Airport!5e0!3m2!1sen!2sin!4v1727426327769!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Page;
