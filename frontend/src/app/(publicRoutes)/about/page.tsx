import AboutIntroduction from "@/components/modules/About/AboutIntroduction";
import Facilities from "@/components/modules/About/Facilities";
import PrincipalMessage from "@/components/modules/About/PrincipalMessage";
import TeachersPreview from "@/components/modules/About/TeachersPreview";
import AboutHero from "../../../components/modules/About/AboutHero";

const AboutPage = () => {
  return (
    <div>
      <AboutHero />
      <AboutIntroduction />
      <PrincipalMessage />
      <Facilities />
      <TeachersPreview />
    </div>
  );
};

export default AboutPage;
