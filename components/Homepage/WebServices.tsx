"use client";

import React, { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { ArrowBigRight } from "lucide-react";
import { designProcess } from "@/constant/contant";

const WebServices = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  return (
    <div className="flex flex-col w-full h-full  bg-white px-2">
      <div className="content md:text-center space-y-3 px-5 ">
        <h2 className="text-[#3B7BCE]  font-bold md:text-5xl text-4xl">
          Our Website Design Process
        </h2>
        <p className="max-w-[700px] mx-auto md:text-lg text-md w-full text-gray-500">
          How to create a website tailored to your unique business goals? Take a
          look at our design process that helps us deliver customized and
          goal-oriented digital solutions.
        </p>
      </div>
      <div className="md:w-[90%] mx-auto md:px-10 w-[100%]">
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="">
            {designProcess.map((item, index) => (
              <CarouselItem key={index} className="outline-none border-none">
                <Card className=" border-none">
                  <CardContent className="flex md:flex-row flex-col outline-none md:px-20 py-10  bg-white text-[#1B2C5C]  border-none">
                    <div className="flex-1  flex flex-col justify-center">
                      <h3 className="text-[#029ccf] md:text-4xl text-2xl mb-4 font-bold">
                        {item.title}
                      </h3>
                      <p className="md:text-md text-sm font-regular ">
                        {item.description}
                      </p>
                      <p className="font-bold py-3">In this phase, we:</p>
                      <ul className="space-y-2">
                        {item.list.map((item, index) => (
                          <li className="flex gap-2 md:text-md text-sm" key={item+index}>
                            <ArrowBigRight className="text-[#3FC2EE]" /> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex-1">
                      <Image
                        src={item.image}
                        width={300}
                        height={300}
                        alt="sevice"
                        className="w-full"
                      />
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="md:flex absolute left-0 bg-white" />
          <CarouselNext className="md:flex absolute right-0 bg-white" />
        </Carousel>
      </div>
    </div>
  );
};

export default WebServices;
