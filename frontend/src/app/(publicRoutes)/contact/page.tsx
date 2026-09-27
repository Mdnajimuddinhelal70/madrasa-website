import ContactForm from "@/components/modules/Contact/ContactForm";
import ContactHero from "@/components/modules/Contact/ContactHero";
import ContactInfo from "@/components/modules/Contact/ContactInfo";
import ContactLocation from "@/components/modules/Contact/ContactLocation";

const ContactPage = () => {
  return (
    <div>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <ContactLocation />
    </div>
  );
};

export default ContactPage;
