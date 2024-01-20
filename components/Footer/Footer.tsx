import { FooterLinks } from "@/constant/contant";
import Link from "next/link";
import React from "react";
import './style.css'

const Footer = () => {
  return (
    <footer className="text-white body-font footerBackground py-10">
      <div className="container px-5 py-14 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <span className="flex title-font font-medium items-center md:justify-start justify-center ">
           
            <span className=" text-2xl">The AlphaRig</span>
          </span>
          <p className="text-sm ">
            {/* Air plant banjo lyft occupy retro adaptogen indego */}
          </p>
          <p className=" mt-5 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} The Alpha Rig
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          {FooterLinks.map(({ links, title },idx) => (
            <div className="lg:w-1/3 md:w-1/2 w-full px-4" key={idx}>
              <h2 className="title-font font-bold   tracking-widest text-lg mb-3">
                {title}
              </h2>
              <nav className="list-none mb-10">
                {links.map((item,idx) => (
                  <li key={`${idx}` + item.subTitle}>
                    <Link href={item.link} className="">
                      {item.subTitle}
                    </Link>
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
