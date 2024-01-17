import Image from "next/image";
import React from "react";
import Heading from "./Heading";

const Team = () => {
  const arr = [1, 2, 3, 3];
  return (
    <div>
      {/* <!-- component --> */}
      <div className="py-20 ">
        <div className="container  px-6 md:px-12 ">
          <div className="mb-16 ">
            <Heading title="Our Team" styles="mb-3"/>
            <p className="text-gray-600 lg:w-8/12 max-w-[700px]">
              The alpharig prides its people are some of the brightest minds
              and most experienced executives in business.
            </p>
          </div>
          <div className="grid gap-12 items-center md:grid-cols-3 lg:grid-cols-4 grid-cols-2">
            {arr.map((item,idx) => (
              <div className="space-y-4" key={idx}>
                <Image
                  className=" mx-auto object-cover rounded-xl w-full h-40 lg:w-64 lg:h-64"
                  src="https://tailus.io/sources/blocks/classic/preview/images/woman1.jpg"
                  alt="woman"
                  loading="lazy"
                  width={150}
                  height={150}
                />
                <div>
                  <h4 className="md:text-2xl text-md">Rabindra Nath Mahato</h4>
                  <span className="block text-sm text-gray-500">
                    CEO-Founder
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;

// https://tailus.io/sources/blocks/classic/preview/images/woman1.jpg
