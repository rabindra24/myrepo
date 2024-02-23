import ContactSection from "@/components/Homepage/ContactSection";
import SignUp from "@/components/Homepage/SignUp";
import './style.css'

const Contact = () => {
  return (
    <section className="l-sign-up body-font relative flex flex-col min-h-screen py-20">
      <ContactSection/>
      <SignUp/>
    </section>
  );
};

export default Contact;
