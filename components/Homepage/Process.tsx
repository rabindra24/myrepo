import Image from "next/image";
import React from "react";
import { designProcess } from "@/constant/contant";
import Heading from "@/utils/Heading";

const Process = () => {
  return (
    <section className=" bg-background md:px-10 px-3">
      <Heading title="Design Process" styles="mb-10" />
      <div className="container px-5  mx-auto flex flex-wrap ">
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 relative  rounded-lg h-100 ">
          <Image
            alt="feature"
            className="object-cover sticky top-10 bottom-10 object-center rounded-lg h-auto w-full"
            src="/design.gif"
            width={600}
            height={600}
          />
        </div>
        <div className="flex flex-col flex-wrap  -mb-10 lg:w-1/2 lg:pl-12 lg:text-left ">
          {designProcess.map((item, idx) => (
            <div
              className="flex flex-col bg-secondary hover:bg-primary p-5 rounded-md mb-10 "
              key={idx}
            >
              <div className="flex   h-full w-full items-center gap-2">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-background font-bold text-primary mb-5">
                  {/* <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                  </svg> */}
                  0{idx + 1}
                </div>
                <h2 className="text-lg title-font font-medium mb-3">
                  {item.title}
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
