import Image from "next/image";
import React from "react";
import Heading from "./Heading";

const Team = () => {
  const arr = [1, 2, 3, 3];
  return (
    <div>
      <div className="py-20 text-center">
        <div className="container  px-6 md:px-12 ">
          <div className="mb-16 text-center">
            <Heading
              title="Meet The Leadership Team"
              styles="mb-3 text-center "
            />
            <p className="text-gray-400 lg:w-8/12 max-w-[700px] mx-auto">
              Top industry with proven experience who are hands-on in managing
              projects
            </p>
          </div>
          <div className="grid gap-12 items-center md:grid-cols-3 lg:grid-cols-4 grid-cols-2">
            {arr.map((item, idx) => (
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
        <div className="py-10 px-5">
          <h4 className="text-[#04E4FF] md:text-5xl text-3xl font-bold ">Got Talent?</h4>
          <p className="font-semibold py-5 text-xl  text-white text-center">
            We are always seeking talented people with passion, experience and
            the ability to <span className="text-[#04E4FF]">make a difference </span> for our clients.
            <br />
            If you’re interested in joining the The Alpha Rig team, send your
          resume and cover letter to <span className="text-[#04E4FF]">thealpharig@gmail.com</span>
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Team;

// https://tailus.io/sources/blocks/classic/preview/images/woman1.jpg
