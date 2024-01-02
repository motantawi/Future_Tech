"use client";

import { useLanguage } from "@/context/language_themeProvider";
import { useLang } from "@/hooks";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const data = useLang();
  if (!data || typeof data !== "object") {
    console.error("Error: Invalid langData from useLang()");
    return null;
  }

  const {
    CONTACT_US_TITLE,
    CONTACT_US_TITLE_TWO,
    CONTACT_US_DESCRIPTION,
    FORM_TITLE,
    INPUT_NAME,
    INPUT_EMAIL,
    INPUT_MESSAGE,
    FORM_BUTTON,
    ADDRESS_TITLE,
    ADDRESS_DESCRIPTION,
    PHONE_DESCRIPTION,
    EMAIL_DESCRIPTION,
    WORK_TITLE,
    WORK_DESCRIPTION,
  } = data;
  const { language } = useLanguage();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section
      dir={language === "ar" ? "rtl" : "ltr"}
      className="bg-blue-50 dark:bg-gray-900"
      id="contact"
      data-aos="fade-up"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="800"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-4">
          <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
            <p className="text-base font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-200">
              {CONTACT_US_TITLE}
            </p>
            <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
              {CONTACT_US_TITLE_TWO}
            </h2>
          </div>
        </div>
        <div className="flex items-stretch justify-center">
          <div className="grid md:grid-cols-2">
            <div className="h-full md:pr-6">
              <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">
                {CONTACT_US_DESCRIPTION}
              </p>
              <ul className="mb-6 md:mb-0">
                <li className="flex gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                      <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                    </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                      {ADDRESS_TITLE}
                    </h3>
                    <p className="text-gray-600 dark:text-slate-400 w-60">
                      {ADDRESS_DESCRIPTION}
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                      <path d="M15 7a2 2 0 0 1 2 2" />
                      <path d="M15 3a6 6 0 0 1 6 6" />
                    </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                      {CONTACT_US_TITLE}
                    </h3>
                    <p className="text-gray-600 dark:text-slate-400">
                      {PHONE_DESCRIPTION}
                    </p>
                    <p className="text-gray-600 dark:text-slate-400">
                      {EMAIL_DESCRIPTION}
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <a
                        href="/"
                        className="text-gray-500 transition-colors duration-300 hover:text-blue-600"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-5"
                        >
                          <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                        </svg>
                      </a>
                      <a
                        href="/"
                        className="text-gray-500 transition-colors duration-300 hover:text-pink-500"
                      >
                        <svg
                          viewBox="0 0 30 30"
                          fill="currentColor"
                          className="h-6"
                        >
                          <circle cx={15} cy={15} r={4} />
                          <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                        </svg>
                      </a>
                      <a
                        href="/"
                        className="text-gray-500 transition-colors duration-300 hover:text-blue-800"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-5"
                        >
                          <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                      <path d="M12 7v5l3 3" />
                    </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                      {WORK_TITLE}
                    </h3>
                    <p className="text-gray-600 dark:text-slate-400">
                      {WORK_DESCRIPTION}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
              <h2 className="mb-4 text-2xl font-bold">{FORM_TITLE}</h2>
              <form id="contactForm" onSubmit={handleSubmit}>
                <div className="mb-6">
                  <div className="mx-0 mb-1 sm:mb-4">
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label
                        htmlFor="name"
                        className="pb-1 text-xs uppercase tracking-wider"
                      />
                      <input
                        minLength={3}
                        value={formData.name}
                        onChange={handleChange}
                        required
                        type="text"
                        id="name"
                        autoComplete="given-name"
                        placeholder={INPUT_NAME}
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                        name="name"
                      />
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label
                        htmlFor="email"
                        className="pb-1 text-xs uppercase tracking-wider"
                      />
                      <input
                        value={formData.email}
                        onChange={handleChange}
                        required
                        type="email"
                        id="email"
                        autoComplete="email"
                        placeholder={INPUT_EMAIL}
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                        name="email"
                      />
                    </div>
                  </div>
                  <div className="mx-0 mb-1 sm:mb-4">
                    <label
                      htmlFor="textarea"
                      className="pb-1 text-xs uppercase tracking-wider"
                    />
                    <textarea
                      value={formData.message}
                      onChange={handleChange}
                      minLength={10}
                      required
                      id="textarea"
                      name="message"
                      cols={30}
                      rows={5}
                      placeholder={INPUT_MESSAGE}
                      className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0"
                  >
                    {FORM_BUTTON}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
