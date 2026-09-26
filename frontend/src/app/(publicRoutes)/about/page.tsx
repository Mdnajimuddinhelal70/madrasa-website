import AboutIntroduction from "@/components/modules/About/AboutIntroduction";
import PrincipalMessage from "@/components/modules/About/PrincipalMessage";
import AboutHero from "../../../components/modules/About/AboutHero";

const AboutPage = () => {
  return (
    <div>
      <AboutHero />
      <AboutIntroduction />
      <PrincipalMessage />
    </div>
  );
};

export default AboutPage;
