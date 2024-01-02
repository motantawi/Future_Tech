"use client";

import { useEffect, useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import Link from "next/link";
import LangSwitch from "../LangSwitch";
import { useTheme } from "next-themes";
import { useLang } from "@/hooks";
import { allData } from "@/data";
import { useLanguage } from "@/context/language_themeProvider";

const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);
  const { links } = allData();
  const { language } = useLanguage();
  const { theme, setTheme } = useTheme();
  const langData = useLang() || {};
  const { APP_NAME } = langData;

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 720 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {links.map((link) => {
        return (
          <Typography
            key={link.id}
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal"
            onClick={() => setOpenNav(false)}
          >
            <Link
              style={{
                letterSpacing: "1px",
              }}
              href={link.url}
              className="flex items-center text-[16.5px] font-semibold dark:text-white"
            >
              {link.label}
            </Link>
          </Typography>
        );
      })}
    </ul>
  );

  return (
    <Navbar
      dir={language === "ar" ? "rtl" : "ltr"}
      className="sticky top-0 z-[100] h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 shadow-lg bg-gray dark:bg-blue-900 dark:border-blue-900 opacity-100"
    >
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="/"
          className="mr-4 cursor-pointer py-1.5 font-extrabold text-2xl md:text-4xl text-blue-800 dark:text-white"
        >
          {APP_NAME}
        </Typography>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>
          <div className="flex items-center gap-x-1">
            {theme === "dark" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white cursor-pointer"
                onClick={() => setTheme("light")}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-blue-900 cursor-pointer"
                onClick={() => setTheme("dark")}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                />
              </svg>
            )}
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6 dark:text-white"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 dark:text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>

          <LangSwitch />
        </div>
      </div>
      <Collapse open={openNav}>{navList}</Collapse>
    </Navbar>
  );
};

export default NavBar;
