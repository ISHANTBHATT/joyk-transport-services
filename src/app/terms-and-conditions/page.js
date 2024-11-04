"use client";
import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

function Page() {
  const { language, changeLanguage } = useLanguage();
  const t = translations[language];
  return (
    <div className="my-10 space-y-5 text-gray-500">
      <p className="text-test font-bold text-2xl mx-2 md:mx-10 lg:mx-40">
        {t.terms.heading}
      </p>
      <hr className="w-full h-2 " />
      <div className="my-10 mx-2 md:mx-10 lg:mx-40 space-y-5">
        <p className="text-test font-bold text-4xl ">{t.title}</p>

        <p>{t.terms.p0}</p>

        <p>{t.terms.p1}</p>

        <p className="text-test font-bold text-4xl ">{t.terms.t1}</p>

        <p className="text-test font-bold text-2xl ">{t.terms.p2}</p>

        <p>{t.terms.p3}</p>

        <p className="text-test font-bold text-2xl ">{t.terms.p4}</p>

        <p>{t.terms.p5}</p>

        <ul className=" mx-8 space-y-5 list-disc">
          <li>
            <span className="text-test font-semibold">{t.terms.p60} </span>
            {t.terms.p6}
          </li>
          <li>
            <span className="text-test font-semibold">{t.terms.p70} </span>
            {t.terms.p7}
          </li>
          <li>
            <span className="text-test font-semibold">{t.terms.p80} </span>
            {t.terms.p8}
          </li>
          <li>
            <span className="text-test font-semibold">{t.terms.p90} </span>
            {t.terms.p9}
          </li>
          <li>
            <span className="text-test font-semibold">{t.terms.p100} </span>
            {t.terms.p10}
          </li>
          <li>
            <span className="text-test font-semibold">{t.terms.p110} </span>
            {t.terms.p11}
          </li>
          <li>
            <span className="text-test font-semibold">{t.terms.p120} </span>
            {t.terms.p12}
          </li>
          <li>
            <span className="text-test font-semibold">{t.terms.p130} </span>
            {t.terms.p13}{" "}
            <a
              target="_blank"
              href="https://www.joykmultiservices.com/"
              className="underline text-blue-500"
            >
              https://www.joykmultiservices.com/
            </a>
          </li>
          <li>
            <span className="text-test font-semibold">{t.terms.p140} </span>
            {t.terms.p14}
          </li>
        </ul>

        <p className="text-test font-bold text-4xl ">{t.terms.t2}</p>
        <p>{t.terms.p15}</p>
        <p>{t.terms.p16}</p>
        <p>{t.terms.p17}</p>
        <p>{t.terms.p18}</p>
        <p>{t.terms.p19}</p>

        <p className="text-test font-bold text-4xl ">{t.terms.t3}</p>
        <p>{t.terms.p20}</p>
        <p>{t.terms.p21}</p>
        <p>{t.terms.p22}</p>

        <p className="text-test font-bold text-4xl ">{t.terms.t4}</p>
        <p>{t.terms.p23}</p>
        <p>{t.terms.p24}</p>

        <p className="text-test font-bold text-4xl ">{t.terms.t5}</p>
        <p>{t.terms.p25}</p>
        <p>{t.terms.p26}</p>
        <p>{t.terms.p27}</p>

        <p className="text-test font-bold text-4xl ">{t.terms.t6}</p>
        <p>{t.terms.p28}</p>
        <p>{t.terms.p29}</p>
        <p>{t.terms.p30}</p>

        <p className="text-test font-bold text-4xl ">{t.terms.t7}</p>
        <p>{t.terms.p31}</p>

        <p className="text-test font-bold text-4xl ">{t.terms.t8}</p>
        <p>{t.terms.p32}</p>
        <p className="text-test font-bold text-4xl ">{t.terms.t9}</p>
        <p>{t.terms.p33}</p>
        <p className="text-test font-bold text-4xl ">{t.terms.t10}</p>
        <p>{t.terms.p34}</p>
        <p className="text-test font-bold text-4xl ">{t.terms.t11}</p>
        <p className="text-test font-bold text-2xl ">{t.terms.p35}</p>
        <p>{t.terms.p36}</p>
        <p className="text-test font-bold text-2xl ">{t.terms.p37}</p>
        <p>{t.terms.p38}</p>
        <p className="text-test font-bold text-4xl ">{t.terms.t12}</p>
        <p>{t.terms.p39}</p>
        <p className="text-test font-bold text-4xl ">{t.terms.t13}</p>
        <p>{t.terms.p40}</p>
        <p>{t.terms.p41}</p>

        <p className="text-test font-bold text-4xl ">{t.terms.t14}</p>
        <p>{t.terms.p42}</p>
        <ul className="mx-8 space-y-5 list-disc">
          <li>{t.terms.p43}</li>
          <li>
            {t.terms.p44}{" "}
            <a
              href="https://www.joykmultiservices.com/contact-us"
              className=" underline text-blue-500"
              target="_blank"
            >
              https://www.joykmultiservices.com/contact-us
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Page;
