import ContactComponent from "@/components/common/ContactComponent";
import ContactSection from "@/components/Homepage/ContactSection";
import HowToChoose from "@/components/Homepage/HowToChoose";
import Landing from "@/components/Homepage/Landing";
import Process from "@/components/Homepage/Process";
import ServiceSection from "@/components/Homepage/ServiceSection";
import SignUp from "@/components/Homepage/SignUp";
import Testomonials from "@/components/Homepage/Testomonials";
import WebServices from "@/components/Homepage/WebServices";
import WhyChooseUs from "@/components/Homepage/WhyChooseUs";
import Works from "@/components/Homepage/Works";
import Team from "@/utils/Team";

export default function Home() {
  return (
    <main className="bg-white text-gray-800">
      <Landing />
      {/* <ServiceSection /> */}
      {/* <Works /> */}
      {/* <Process /> */}
      {/* <Testomonials/> 
      <ContactComponent/> */}
      {/* <Team /> */}
      <WhyChooseUs/>
      <WebServices/>
      <SignUp/>
      <ContactSection/>
      {/* <HowToChoose/> */}
    </main>
  );
}
