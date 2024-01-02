import Link from "next/link";
import React from "react";

const Services = () => {
  return (
    <section
      className="flex flex-col justify-center max-w-6xl min-h-screen px-4 py-10 mx-auto sm:px-6"
      id="services"
      data-aos="fade-up"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="800"
    >
      <div className="flex flex-wrap items-center justify-between mb-8">
        <h2 className="mr-10 text-4xl font-bold leading-none md:text-5xl">
          Services
        </h2>
      </div>
      <div className="flex flex-wrap -mx-4">
        {services.map(({ title, imgUrl }, index) => {
          return (
            <div
              className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col"
              key={index}
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="800"
            >
              <img
                src={imgUrl}
                alt={title}
                className="object-cover object-center w-full h-48"
              />
              <div className="flex flex-grow">
                <div className="flex flex-col justify-between px-4 py-6 bg-white  dark:bg-gray-800 border dark:border-none">
                  <div>
                    <div className="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-blue-600">
                      {title}
                    </div>
                    <p className="mb-4">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Nulla delectus corporis commodi aperiam, amet cupiditate?
                    </p>
                  </div>
                  <div>
                    <Link
                      href="#"
                      className="inline-block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600"
                    >
                      Read More -&gt;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;

const services = [
  {
    title: "Web Development",
    imgUrl: "/images/web.jpg",
  },
  {
    title: "Mobile Development",
    imgUrl: "/images/mobile.png",
  },
  {
    title: "Desktop Development",
    imgUrl: "/images/desktop.jpg",
  },
  {
    title: "Web Design",
    imgUrl: "/images/ux.jpg",
  },
  {
    title: "SEO Optimization",
    imgUrl: "/images/seo.jpeg",
  },
];
