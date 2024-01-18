import { works } from "@/constant/contant";
import Heading from "@/utils/Heading";
import Image from "next/image";
import React from "react";
import "./style.css";

const Works = () => {
  return (
    <div className="md:px-16 px-5 bg-background py-20">
      <Heading title="Works" styles="mb-10"/>
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {works.map((item, idx) => (
          <div className="works_cardhover overflow-hidden " key={idx}>
            <Image
              className="h-[100%] max-w-full rounded-lg"
              width={400}
              height={250}
              src={item.image}
              alt="projects"
            />
            <div className="floatUp bg-opacity-15 backdrop-blur-sm">
              <h3 className="font-bold text-[2rem] text-white">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Works;
