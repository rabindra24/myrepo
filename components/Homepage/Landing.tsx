import Image from "next/image";
import React from "react";
import Link from "next/link";
// import { Bungee_Outline } from "next/font/google";

// const bungee = Bungee_Outline({weight : ["400"], subsets : ['latin']})


const Landing = () => {
  return (
    <div className="relative md:min-h-[200vh] h-[100vh] overflow-hidden">
      <div className=" absolute top-0 left-0 w-full">
        <video
          src="background_video.mp4"
          loop
          autoPlay
          muted
          className=" sm:flex hidden"
        ></video>
        <Image
          src={"/home-hero-m.webp"}
          width={1000}
          height={2000}
          alt="hello how are you"
          className="sm:hidden w-full h-full z-10"
        />
      </div>
      <div className="relative top-32 text-center">
        <h1 className=" font-regular md:text-[3rem] text-[1.5rem] text-white ">Top Web Design Agency</h1>
        <h2 className={`font-bold md:text-[4.5rem] text-[3rem] text-white `}>We Grow Brands Online</h2>
        <p className=" md:font-thin font-normal md:text-[2rem] max-w-[700px] mx-auto  text-white mb-10">
          {" "}
          Custom Websites, Branding & Digital Marketing Solutions{" "}
        </p>

        <Link href={'/contact'} className=" c-btn font-bold -primary-v2 -dark -see hover:bg-transparent hover:text-white py-3 px-10 ImportantWhite">Contact us</Link>
      </div>
    </div>
  );
};

export default Landing;
