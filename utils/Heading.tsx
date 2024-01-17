import React from "react";

const Heading = ({ title, styles }: { title: string; styles?: string }) => {
  return (
    <h2
      className={`${styles} text-[2.5rem] ml-2 lg:ml-0 lg:text-5xl font-bold text-white`}
    >
      {title}
    </h2>
  );
};

export default Heading;
