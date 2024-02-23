import React from "react";
import Image from "next/image";
import "./styles.css";
import ContactSection from "@/components/Homepage/ContactSection";
import SignUp from "@/components/Homepage/SignUp";
import WhyChooseUs from "@/components/Homepage/WhyChooseUs";
import { ArrowBigRight } from "lucide-react";
import { designProcess } from "@/constant/contant";

const Cards = ({ content, direction, key }: any) => {
  return (
    <div
      className={`flex ${direction} flex-col l-sign-up outline-none md:px-20 py-10  px-5   border-none relative top-0 z-20`}
      key={key}
    >
      <div className="flex-1  flex flex-col justify-center ">
        <h3 className="text-[#029ccf] md:text-5xl text-2xl mb-4 font-bold">
          {content.title}
        </h3>
        <p className="md:text-md text-md font-regular text-white">
          Before we put pen to paper or start on your digital design, rather, we
          conduct thorough research into your industry, competitors and target
          market to gather insights that will inform your custom digital
          strategy.
        </p>
        <p className="font-bold py-3">In this phase, we:</p>
        <ul className="space-y-2">
          {content.list.map((item: string, index: number) => (
            <li
              className="flex gap-2 md:text-md text-sm text-white text-md"
              key={index}
            >
              <ArrowBigRight className="text-white" /> {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1">
        <Image
          src={content.image}
          width={300}
          height={300}
          alt="sevice"
          className="w-full"
        />
      </div>
    </div>
  );
};

const Service = () => {
  return (
    <div className="relative top-0 min-h-screen l-sign-up">
      {designProcess.map((item, index) => (
        <Cards
          content={item}
          direction={`${
            (index + 1) % 2 == 0 ? "md:flex-row-reverse" : "md:flex-row"
          }`}
          key={index}
        />
      ))}
      <WhyChooseUs />
      <SignUp />
      <ContactSection />
    </div>
  );
};

export default Service;
