import React, { useEffect, useState } from "react";

const servicesIcons = [
  {
    name: "SEO",
    class: "-bottom-[112%] left-[37%]",
    image: "/images/icons/seo.svg",
  },
  {
    name: "UI/UX",
    class: " top-[4.1rem] md:top-24 -right-[108%]",
    image: "/images/icons/ux-interface.png",
  },
  {
    name: "Desktop",
    class: "top-5 -left-24 md:top-10 md:-left-32",
    image: "/images/icons/desktop.svg",
  },
  {
    name: "Web",
    class: "-top-[12.2rem] left-[5.3rem] md:-top-[16.5rem] md:left-32",
    image: "/images/icons/web.svg",
  },
];

const Hero = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="flex justify-center container lg:justify-between items-center min-h-screen mb-52 lg:max-w-[90rem] mx-auto flex-wrap-reverse lg:flex-nowrap relative px-3"
      data-aos="zoom-in"
    >
      <div className="flex flex-col mt-52 lg:mt-0 gap-3">
        <h3 className="text-xl text-blue-900 dark:text-blue-700 font-semibold">
          SPREADING WINGS OF TECHNOLOGY
        </h3>
        <h1 className="text-6xl text-gray-900 dark:text-white leading-tight">
          We make you <br />
          <span className="font-bold text-blue-900 dark:text-blue-700">
            "Go Digital"
          </span>
        </h1>
        <p className="text-sm text-gray-700 dark:text-gray-200 font-semibold">
          Creativity is our Passion & We Transform you Digitally.
        </p>
        <button className="w-44 bg-blue-900 px-6 py-4 text-xl font-bold uppercase rounded-full text-white">
          Call us
        </button>
      </div>

      <div className="w-fit rounded-full relative top-52 lg:top-auto lg:absolute lg:right-40 mb-80 lg:mb-0 ">
        <div className="w-[170px] h-[170px] sm:w-[250px] sm:h-[250px] md:h-[350px]  md:w-[350px] rounded-full bg-blue-400">
          <img
            src="/images/logo.png"
            className="rounded-full h-full w-full shadow-lg shadow-gray-500 dark:shadow-gray-800"
            data-aos="zoom-in"
          />
        </div>
        <div className="absolute w-full rounded-full h-full top-0 bottom-0 animate-spin">
          {servicesIcons.map((icon, index) => {
            return (
              <div
                key={index}
                className={`${
                  windowWidth >= 720 ? "hexagon" : "medium-hexagon"
                } absolute ${
                  icon.class
                } flex flex-col items-center p-1 animate-spin_reverse`}
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
