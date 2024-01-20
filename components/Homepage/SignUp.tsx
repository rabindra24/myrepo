import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import "./style.css";

const SignUp = () => {
  return (
    <div className="py-20 md:px-20 px-5 flex justify-between md:flex-row flex-col bg-[#13163A]  l-sign-up">
      <h3 className="text-white font-bold text-4xl max-w-[600px]">
        Sign Up To Get The Latest Digital Trends
      </h3>
      <div className="flex gap-4 max-md:mt-5">
        <Input
          type={"text"}
          placeholder="Enter your Email"
          className="bg-transparent text-white border-2 relative border-white outline-none z-10"
        />
        <Button className="text-white bg-transparent border-2 border-white hover:bg-transparent">Sign Up</Button>
      </div>
      <div></div>
    </div>
  );
};

export default SignUp;
