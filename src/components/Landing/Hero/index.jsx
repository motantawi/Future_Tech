"use client";

import { useLanguage } from "@/context/language_themeProvider";
import { useLang } from "@/hooks";
import React, { useEffect, useState } from "react";

const servicesIcons = [
  {
    name: "SEO",
    class: "-bottom-[118%] left-[32%] md:-bottom-[115%] md:left-[36%]",
    image: "/images/icons/seo.svg",
    animation: "fade-right",
  },
  {
    name: "UI/UX",
    class: "-top-[1rem] md:top-0 -right-[108%]",
    image: "/images/icons/ux-interface.png",
    animation: "fade-down",
  },
  {
    name: "Desktop",
    class: "-top-16 -left-[5.5rem] md:-top-16 md:-left-32",
    image: "/images/icons/desktop.svg",
    animation: "fade-down",
  },
  {
    name: "Web",
    class: "-top-[12.2rem] left-[3.2rem] md:-top-[16.5rem] md:left-24",
    image: "/images/icons/web.svg",
    animation: "fade-left",
  },
  {
    name: "Hosting",
    class: "-top-10 -left-[5.5rem] md:-top-7 md:-left-32",
    image: "/images/icons/hosting.png",
    animation: "fade-up",
  },
  {
    name: "Mobile",
    class: "-top-[5rem] md:-top-20 -right-[108%]",
    image: "/images/icons/mobile.svg",
    animation: "fade-up",
  },
];
const Hero = () => {
  const { language } = useLanguage();

  const { HERO_ONE, HERO_TWO, HERO_THREE, HERO_FOUR, HERO_BUTTON } = useLang();

  const [windowWidth, setWindowWidth] = useState(
    typeof document !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  return (
    <div
      className="flex justify-center container xl:justify-between items-center min-h-screen mb-52 xl:max-w-[95rem] mx-auto flex-col xl:flex-row relative lg:px-10 px-2"
      id="home"
    >
      <div
        className="w-full xl:w-[45%] items-center flex flex-col mt-20 lg:mt-0 gap-5 md:py-32 xl:py-0"
        dir={language === "ar" ? "rtl" : "ltr"}
      >
        <h3 className="text-center xl:text-start text-xl text-blue-900 dark:text-blue-700 font-semibold">
          {HERO_ONE}
        </h3>
        <h1 className="text-4xl md:text-6xl text-gray-900 dark:text-white leading-tight">
          {HERO_TWO} <br />
          <span className="relative top-2 font-bold text-blue-900 dark:text-blue-700">
            {HERO_THREE}
          </span>
        </h1>
        <p className="text-center lg:text-start text-sm text-gray-700 dark:text-gray-200 font-semibold mt-2">
          {HERO_FOUR}
        </p>
        <button className="w-full md:w-[60%] mt-2 bg-blue-900 px-6 py-3 text-xl font-bold uppercase rounded-md text-white">
          {HERO_BUTTON}
        </button>
      </div>

      <div
        className={`xl:w-fit relative top-48 xl:top-auto xl:absolute  xl:right-40 mb-80 xl:mb-0`}
      >
        <div className="w-[170px] h-[170px] sm:w-[250px] sm:h-[250px] md:h-[280px]  md:w-[280px] rounded-full">
          <img
            src="/images/logo.png"
            className="rounded-full h-full w-full shadow-lg shadow-gray-500 dark:shadow-gray-800"
            data-aos="zoom-out"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          />
        </div>
        <div className="absolute w-full rounded-full h-full top-0 bottom-0">
          {servicesIcons.map((icon, index) => {
            return (
              <div
                key={index}
                className={`${
                  windowWidth >= 720 ? "hexagon" : "medium-hexagon"
                } absolute ${icon.class} flex flex-col items-center p-1`}
                data-aos={icon.animation}
                data-aos-easing="ease-out-cubic"
                data-aos-duration="800"
              >
                <img
                  src={icon.image}
                  alt={icon.name}
                  className="w-[1.9rem] md:w-12 relative z-10 bottom-2"
                />
                <h1 className="text-black relative bottom-2 z-10">
                  {icon.name}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hero;
