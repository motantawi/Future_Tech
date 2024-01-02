"use client";

import { useTheme } from "next-themes";
import React, { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const { theme, setTheme } = useTheme();

  theme === "system" ? setTheme("light") : null;

  const [language, setLanguage] = useState(() => {
    if (typeof document !== "undefined") {
      !localStorage.getItem("lang") ? localStorage.setItem("lang", "ar") : null;
      const storedLanguage = localStorage.getItem("lang");

      return storedLanguage || "ar";
    }
    return "ar";
  });

  const switchLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem("lang", newLanguage);
  };

  useEffect(() => {}, [language]);

  return (
    <LanguageContext.Provider value={{ language, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  return context;
};
