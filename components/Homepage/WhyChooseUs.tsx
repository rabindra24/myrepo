import { newServices } from "@/constant/contant";
import Image from "next/image";

import "./style.css";

const WhyChooseUs = () => {
  return (
    <div className="py-10 bg-white">
      <div className="flex md:flex-row flex-col items-center justify-between md:px-20 px-5">
        <div className="md:pr-20  w-full items-start md:py-10 py-5 space-y-3">
          <h3 className="text-[#00B9FF] font-bold md:text-2xl text-xl">
            Why The Alpha Rig
          </h3>
          <p className="text-[#1B2C5C] md:text-5xl  text-3xl">
            Explore Our Web Design Services
          </p>
        </div>
        <div className="max-w-[600px] ">
          <p className="mb-5 text-lg text-gray-800">
            As a full-service digital agency, we handle all of your digital
            needs under one roof. Our custom web design services include
            thorough research and planning, bespoke designs and digital
            strategies tailored to grow your reach, drive traffic and encourage
            engagement.
          </p>
          {/* <div className=" text-[#020817]  font-bold flex w-full ">
            <Link href={"/"}>
              <span> Continue Reading </span>
              <ArrowRight className="inline-flex" />
            </Link>
          </div> */}
        </div>
      </div>
      <div>
        <div className="md:px-0 px-5  py-20">
          <div className="grid grid-cols-1 md:grid-cols-5 ">
            {newServices.map((item, idx) => (
              <div
                className="works_cardhover relative md:w-auto w-full top-0 md:h-[400px] h-[150px] hover:h-[300px] lg:hover:h-[400px] transition-all duration-500"
                key={idx}
              >
                <Image
                  className="h-[100%] w-full absolute top-0   object-cover  z-2 myimg"
                  width={400}
                  height={250}
                  src={item.image}
                  alt="projects"
                />
                <div className="floatUp bg-opacity-15 "></div>

                <div className="w-full h-full bg-black relative  z-10 bg-opacity-30"></div>
                <h3 className="text-white text-xl font-bold z-10 w-full absolute text-center  bottom-5 hoverHead">
                  {item.title}
                </h3>

                <div className="contentUp text-white">
                  <h3 className="font-bold text-lg text-white">{item.title}</h3>
                  <p className="text-thin">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
