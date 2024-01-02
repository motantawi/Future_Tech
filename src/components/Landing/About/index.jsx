import { useLanguage } from "@/context/language_themeProvider";
import { useLang } from "@/hooks";
import React from "react";

const About = () => {
  const { ABOUT_TITLE, ABOUT_DESCRIPTION } = useLang();
  const { language } = useLanguage();
  return (
    <section
      className="bg-gray-50 my-40 dark:bg-gray-800"
      id="about"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="800"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="max-w-lg" data-aos="fade-right">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              {ABOUT_TITLE}
            </h2>
            <p className="mt-4 text-gray-700 text-lg dark:text-gray-400">
              {ABOUT_DESCRIPTION}
            </p>
          </div>
          <div className="mt-12 md:mt-0" data-aos="fade-left">
            <img
              src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
              alt="About Us Image"
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
