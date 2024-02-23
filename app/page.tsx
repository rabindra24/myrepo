import ContactSection from "@/components/Homepage/ContactSection";
import HowToChoose from "@/components/Homepage/HowToChoose";
import Landing from "@/components/Homepage/Landing";
import SignUp from "@/components/Homepage/SignUp";
import WebServices from "@/components/Homepage/WebServices";
import WhyChooseUs from "@/components/Homepage/WhyChooseUs";

export default function Home() {
  return (
    <main className="bg-white text-gray-800">
      <Landing />
      <WhyChooseUs/>
      <WebServices/>
      <HowToChoose/>
      <SignUp/>
      <ContactSection/>
    </main>
  );
}
