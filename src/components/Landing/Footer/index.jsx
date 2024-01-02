"use client";

import { useLanguage } from "@/context/language_themeProvider";
import { useLang } from "@/hooks";
import React from "react";

const Footer = () => {
  const { FOOTER_DESCRIPTION, PRIVACY, TERMS } = useLang();
  const { language } = useLanguage();

  return (
    <div
      className="px-4 pt-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 lg:flex-row">
        <p className="text-sm text-gray-600">{FOOTER_DESCRIPTION}</p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row md:gap-3">
          <li>
            <a
              href="/"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              {PRIVACY}
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              {TERMS}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
