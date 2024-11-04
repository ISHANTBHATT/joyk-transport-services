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
        {t.Policy.heading}
      </p>
      <hr className="w-full h-2 " />
      <div className="my-10 mx-2 md:mx-10 lg:mx-40 space-y-5">
        <p className="text-test font-bold text-4xl ">{t.Policy.title}</p>

        <p>{t.Policy.p0}</p>

        <p>{t.Policy.p1}</p>

        <p>{t.Policy.p2}</p>

        <p className="text-test font-bold text-4xl ">{t.Policy.t1}</p>

        <p className="text-test font-bold text-2xl ">{t.Policy.p3}</p>

        <p>{t.Policy.p4}</p>

        <p className="text-test font-bold text-2xl ">{t.Policy.p5}</p>

        <p>{t.Policy.p6}</p>

        <ul className=" mx-8 space-y-5 list-disc">
          <li>
            <span className="text-test font-semibold">{t.Policy.p700} </span>
            {t.Policy.p7}
          </li>
          <li>
            <span className="text-test font-semibold">{t.Policy.p800} </span>
            {t.Policy.p8}
          </li>
          <li>
            <span className="text-test font-semibold">{t.Policy.p900} </span>
            {t.Policy.p9}
          </li>
          <li>
            <span className="text-test font-semibold">{t.Policy.p1000} </span>
            {t.Policy.p10}
          </li>
          <li>
            <span className="text-test font-semibold">{t.Policy.p1100} </span>
            {t.Policy.p11}
          </li>
          <li>
            <span className="text-test font-semibold">{t.Policy.p1200} </span>
            {t.Policy.p12}
          </li>
          <li>
            <span className="text-test font-semibold">{t.Policy.p1300} </span>
            {t.Policy.p13}
          </li>
          <li>
            <span className="text-test font-semibold">{t.Policy.p1400} </span>
            {t.Policy.p14}
          </li>
          <li>
            <span className="text-test font-semibold">{t.Policy.p1500} </span>
            {t.Policy.p15}
          </li>
          <li>
            <span className="text-test font-semibold">{t.Policy.p1600} </span>
            {t.Policy.p16}
          </li>
          <li>
            <span className="text-test font-semibold">{t.Policy.p1700} </span>
            {t.Policy.p17}{" "}
            <a
              target="_blank"
              href="https://www.joykmultiservices.com/"
              className="underline text-blue-500"
            >
              https://www.joykmultiservices.com/
            </a>
          </li>
          <li>
            <span className="text-test font-semibold">{t.Policy.p1800} </span>
            {t.Policy.p18}
          </li>
        </ul>

        <p className="text-test font-bold text-4xl ">{t.Policy.t2}</p>

        <p className="text-test font-bold text-2xl ">{t.Policy.p19}</p>

        <p className="text-test font-bold text-xl ">{t.Policy.p20}</p>
        <p>{t.Policy.p21}</p>

        <ul className="mx-8 space-y-5 list-disc">
          <li>{t.Policy.p22}</li>
          <li>{t.Policy.p23}</li>
          <li>{t.Policy.p24}</li>
          <li>{t.Policy.p25}</li>
        </ul>
        <p className="text-test font-bold text-xl ">{t.Policy.t3}</p>
        <p>{t.Policy.p26}</p>
        <p>{t.Policy.p27}</p>
        <p>{t.Policy.p28}</p>
        <p>{t.Policy.p29}</p>

        <p className="text-test font-bold text-xl ">{t.Policy.t4}</p>
        <p>{t.Policy.p30}</p>

        <ul className="mx-8 space-y-5 list-disc">
          <li>
            <span className="text-test font-semibold">{t.Policy.p31} </span>
            {t.Policy.p33}
          </li>
          <li>
            <span className="text-test font-semibold">{t.Policy.p34} </span>
            {t.Policy.p35}
          </li>
        </ul>
        <p>{t.Policy.p36}</p>
        <p>{t.Policy.p37}</p>
        <ul className="text-gray-500 mx-8 space-y-5 list-disc">
          <li>
            <span className="text-test font-semibold">{t.Policy.h1}</span>
            <br />
            <span>{t.Policy.s1}</span>
            <br />
            <span>{t.Policy.sb1}</span>
            <br />
            {t.Policy.d1}
          </li>
          <li>
            <span className="text-test font-semibold">{t.Policy.h2}</span>
            <br />
            <span>{t.Policy.s2}</span>
            <br />
            <span>{t.Policy.sb2}</span>
            <br />
            {t.Policy.d2}
          </li>
          <li>
            <span className="text-test font-semibold">{t.Policy.h3}</span>
            <br />
            <span>{t.Policy.s3}</span>
            <br />
            <span>{t.Policy.sb3}</span>
            <br />
            {t.Policy.d3}
          </li>
        </ul>
        <p>{t.Policy.p38}</p>

        <p className="text-test font-bold text-2xl ">{t.Policy.t5}</p>
        <p>{t.Policy.p39}</p>

        <ul className="mx-8 space-y-5 list-disc">
          <li>
            <span className="text-test font-semibold">{t.Policy.sub1} </span>
            {t.Policy.p40}
          </li>
          <li>
            <span className="text-test font-semibold">{t.Policy.sub2} </span>
            {t.Policy.p41}
          </li>
          <li>
            <span className="text-test font-semibold">{t.Policy.sub3} </span>
            {t.Policy.p42}
          </li>
          <li>
            <span className="text-test font-semibold">{t.Policy.sub4} </span>
            {t.Policy.p43}
          </li>
          <li>
            <span className="text-test font-semibold">{t.Policy.sub5} </span>
            {t.Policy.p44}
          </li>
          <li>
            <span className="text-test font-semibold">{t.Policy.sub6} </span>
            {t.Policy.p45}
          </li>
          <li>
            <span className="text-test font-semibold">{t.Policy.sub7} </span>
            {t.Policy.p46}
          </li>
          <li>
            <span className="text-test font-semibold">{t.Policy.sub8} </span>
            {t.Policy.p47}
          </li>
        </ul>
        <p>{t.Policy.p48}</p>
        <ul className="mx-8 space-y-5 list-disc">
          <li>
            <span className="text-test font-semibold">{t.Policy.sub9} </span>
            {t.Policy.p49}
          </li>
          <li>
            <span className="text-test font-semibold">{t.Policy.sub10} </span>
            {t.Policy.p50}
          </li>
          <li>
            <span className="text-test font-semibold">{t.Policy.sub11} </span>
            {t.Policy.p51}
          </li>
          <li>
            <span className="text-test font-semibold">{t.Policy.sub12} </span>
            {t.Policy.p52}
          </li>
          <li>
            <span className="text-test font-semibold">{t.Policy.sub13} </span>
            {t.Policy.p53}
          </li>
          <li>
            <span className="text-test font-semibold">{t.Policy.sub14} </span>
            {t.Policy.p54}
          </li>
        </ul>
        <p className="text-test font-bold text-2xl ">{t.Policy.t6}</p>
        <p>{t.Policy.p55}</p>
        <p>{t.Policy.p56}</p>
        <p className="text-test font-bold text-2xl ">{t.Policy.t7}</p>
        <p>{t.Policy.p57}</p>
        <p>{t.Policy.p58}</p>
        <p>{t.Policy.p59}</p>
        <p className="text-test font-bold text-2xl ">{t.Policy.t8}</p>
        <p>{t.Policy.p60}</p>
        <p>{t.Policy.p61}</p>
        <p>{t.Policy.p62}</p>
        <p>{t.Policy.p63}</p>

        <p className="text-test font-bold text-2xl ">{t.Policy.t9}</p>
        <p className="text-test font-bold text-xl ">{t.Policy.sub15}</p>
        <p>{t.Policy.p64}</p>
        <p className="text-test font-bold text-xl ">{t.Policy.sub16}</p>
        <p>{t.Policy.p65}</p>
        <p className="text-test font-bold text-xl ">{t.Policy.sub17}</p>
        <p>{t.Policy.p66}</p>
        <ul className="mx-8 space-y-5 list-disc">
          <li>{t.Policy.p67}</li>
          <li>{t.Policy.p68}</li>
          <li>{t.Policy.p69}</li>
          <li>{t.Policy.p70}</li>
          <li>{t.Policy.p71}</li>
        </ul>
        <p className="text-test font-bold text-2xl ">{t.Policy.t10}</p>
        <p>{t.Policy.p72}</p>
        <p className="text-test font-bold text-2xl ">{t.Policy.t11}</p>
        <p>{t.Policy.p73}</p>
        <p>{t.Policy.p74}</p>

        <p className="text-test font-bold text-2xl ">{t.Policy.t12}</p>
        <p>{t.Policy.p75}</p>
        <p>{t.Policy.p76}</p>

        <p className="text-test font-bold text-2xl ">{t.Policy.t13}</p>
        <p>{t.Policy.p77}</p>
        <p>{t.Policy.p78}</p>
        <p>{t.Policy.p79}</p>

        <p className="text-test font-bold text-2xl ">{t.Policy.t14}</p>
        <p>{t.Policy.p80}</p>
        <ul className="mx-8 space-y-5 list-disc">
          <li>{t.Policy.p81}</li>
        </ul>
      </div>
    </div>
  );
}

export default Page;
