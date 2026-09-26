import ContactForm from "@/components/modules/Contact/ContactForm";
import ContactHero from "@/components/modules/Contact/ContactHero";
import ContactInfo from "@/components/modules/Contact/ContactInfo";

const ContactPage = () => {
  return (
    <div>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
    </div>
  );
};

export default ContactPage;
