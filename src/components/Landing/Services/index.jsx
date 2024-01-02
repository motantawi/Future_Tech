import { Carousel, IconButton } from "@material-tailwind/react";
import Link from "next/link";
import React from "react";

import { allData } from "@/data";
import { useLanguage } from "@/context/language_themeProvider";
import { useLang } from "@/hooks";

const Services = () => {
  const { services } = allData();
  const { language } = useLanguage();
  const { SERVICES_TITLE, CARD_FOOTER } = useLang();

  return (
    <div className="container mx-auto max-w-[90rem] pb-36" id="services">
      <h1 className="text-center mb-20 text-5xl font-bold">{SERVICES_TITLE}</h1>
      <Carousel
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-3 w-3 cursor-pointer rounded-full transition-colors content-[''] ${
                  activeIndex === i
                    ? "bg-gray-900 dark:bg-white"
                    : "bg-gray-400 dark:bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
        loop={true}
        autoplay={true}
        autoplayDelay={4000}
        className="rounded-xl"
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handlePrev}
            className="!absolute top-2/4 left-4 -translate-y-2/4 hover:bg-gray-300 dark:hover:bg-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6 text-black dark:text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handleNext}
            className="!absolute top-2/4 !right-4 -translate-y-2/4 hover:bg-gray-300 dark:hover:bg-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6 text-black dark:text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </IconButton>
        )}
      >
        {services.map(({ title, imgUrl, description }, index) => {
          return (
            <div
              className="h-[500px] md:h-[650px] w-full mx-auto max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col"
              key={index}
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="800"
            >
              <img
                src={imgUrl}
                alt={title}
                className="object-cover object-center w-full h-[50%] rounded-ss-lg rounded-se-lg"
              />
              <div
                className="flex flex-grow w-full"
                dir={language === "ar" ? "rtl" : "ltr"}
              >
                <div className="flex flex-col justify-between px-4 py-6 bg-gray-200  dark:bg-gray-800 border-2 dark:border-none rounded-ee-lg rounded-es-lg w-full">
                  <div>
                    <div className="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-blue-600">
                      {title}
                    </div>
                    <p className="mb-4">{description}</p>
                  </div>
                  <div>
                    <Link
                      href="#"
                      className="inline-block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600"
                    >
                      {CARD_FOOTER} -&gt;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Services;

// const theme = {
//   carousel: {
//     defaultProps: {

//       navigation:
//       autoplay: false,
//       autoplayDelay: 5000,
//       transition: {
//         type: "tween",
//         duration: 0.5,
//       },
//       loop: false,
//       className: "",
//     },

//   },
// };
