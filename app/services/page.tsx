import React from "react";
import Heading from "@/utils/Heading";
import Image from "next/image";
import ContactComponent from "@/components/common/ContactComponent";
import ServiceSection from "@/components/Homepage/ServiceSection";

const Service = () => {
  return (
    <div className="relative top-0 min-h-screen bg-background">
      <div className="w-full h-full bg-red-500 ">
        <Image
          src={"/contact_banner.jpg"}
          width={600}
          height={300}
          alt="contact_banner"
          className="w-full m h-[40vh]  absolute top-0 -z-1"
        />
      </div>
      <div className="md:w-[80%] w-[90%] mx-auto bg-opacity-15 backdrop-blur-lg rounded-xl md:p-14 p-5 top-28 relative mb-10">
        <Heading title="Services" styles="mb-5" />
        <div>
          liquid laboriosam porro quibusdam temporibus ipsa quaerat autem
          molestiae est mollitia, aliquam eligendi maiores odio minus ad?
          Asperiores, reprehenderit culpa neque maiores libvoluptatum laboriosam
          praesentium laborum dolores ab facilis modi libero harum consequatur
          quam adipisci error ullam officiis quod hic, autem possimus
          reprehenderit!
        </div>
      </div>
      <ServiceSection notitle={true} />
      <ContactComponent />
    </div>
  );
};

export default Service;
