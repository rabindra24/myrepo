"use client";
import React from "react";
import { Input } from "../ui/input";
import Heading from "@/utils/Heading";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import Image from "next/image";

const ContactComponent = () => {
  return (
    <section className="text-gray-300 body-font relative flex md:flex-row flex-col h-full md:px-10 px-5 ">
      <div className="container px-5 py-24   lg:w-1/2">
        <div className="flex flex-col  mb-12">
         <Heading title="Contact Us" styles="mb-3"/>
          <p className="lg:w-2/3  leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify.
          </p>
        </div>
        <div className="lg:w-full md:w-2/3 ">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm "
                >
                  Name
                </label>
                <Input type="text" id="name" name="name" className="" />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm "
                >
                  Email
                </label>
                <Input type="email" id="email" name="email" className="" />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm "
                >
                  Message
                </label>
                <Textarea id="message" name="message" className=""></Textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <Button className="sm:w-auto w-full text-white">
                Button
              </Button>
            </div>
            
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 flex w-full  items-center justify-center ">
        <Image src={'/107.gif'} width={350} height={350} alt="Contact Image " className="mx-auto " loading="lazy"/>
      </div>
    </section>
  );
};

export default ContactComponent;
