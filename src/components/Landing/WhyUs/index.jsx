import { allData } from "@/data";
import { useLang } from "@/hooks";
import React from "react";

const WhyUs = () => {
  const { WHYUS_TITLE, WHYUS_TITLE_TWO, WHYUS_DESCRIPTION } = useLang();
  const { listOfFeatures } = allData();

  return (
    <section
      id="features"
      className="relative block px-6 py-10 md:pb-40 md:py-20 md:px-10 mb-40 bg-gray-50 dark:bg-gray-800"
      data-aos="fade-up"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="800"
    >
      <div className="relative mx-auto max-w-5xl text-center">
        <span className="dark:text-gray-200 my-3 flex items-center justify-center font-medium uppercase tracking-wider">
          {WHYUS_TITLE}
        </span>
        <h2 className="block w-full bg-gradient-to-b from-gray-600 to-gray-900 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl dark:text-white">
          {WHYUS_TITLE_TWO}
        </h2>
        <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-600 dark:text-gray-400">
          {WHYUS_DESCRIPTION}
        </p>
      </div>
      <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
        {listOfFeatures.map(({ id, title, svgIcon, description }) => {
          return (
            <div
              className="rounded-md border p-8 text-center shadow dark:bg-gray-900"
              key={id}
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="800"
            >
              <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border">
                {svgIcon()}
              </div>
              <h3 className="mt-6 text-gray-900 dark:text-white">{title}</h3>
              <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-600 dark:text-gray-400">
                {description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhyUs;
