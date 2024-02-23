import ContactSection from "@/components/Homepage/ContactSection";
import SignUp from "@/components/Homepage/SignUp";
import Team from "@/utils/Team";
import React from "react";

const About = () => {
  return (
    <div className="relative top-0 min-h-screen l-sign-up">
      <Team/>
      <SignUp/>
      <ContactSection/>
    </div>
  );
};

export default About;
