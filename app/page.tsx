import Contact from "@/components/common/Contact";
import Landing from "@/components/Homepage/Landing";
import Process from "@/components/Homepage/Process";
import ServiceSection from "@/components/Homepage/ServiceSection";
import Testomonials from "@/components/Homepage/Testomonials";
import Works from "@/components/Homepage/Works";
import Navbar from "@/components/Navbar/Navbar";
import Team from "@/utils/Team";

export default function Home() {
  return (
    <main className="bg-background">
      <Landing />
      <ServiceSection />
      <Works />
      <Process />
      <Team />
      <Testomonials/>
      <Contact/>
    </main>
  );
}
