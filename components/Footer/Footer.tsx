import { FooterLinks } from "@/constant/contant";
import React from "react";

const Footer = () => {
  return (
    <footer className="text-gray-300 body-font bg-background py-10">
      <div className="container px-5 py-14 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <span className="flex title-font font-medium items-center md:justify-start justify-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">The AlphaRig</span>
          </span>
          <p className="text-sm text-gray-500">
            Air plant banjo lyft occupy retro adaptogen indego
          </p>
          <p className="text-gray-500 mt-5 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} The Alpha Rig
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          {FooterLinks.map(({ links, title },idx) => (
            <div className="lg:w-1/3 md:w-1/2 w-full px-4" key={idx}>
              <h2 className="title-font font-medium  tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                {links.map((item,idx) => (
                  <li key={`${idx}` + item.subTitle}>
                    <a className="text-gray-600 hover:text-gray-800">
                      {item.subTitle}
                    </a>
                  </li>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
