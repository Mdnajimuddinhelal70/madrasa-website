import AboutSection from "@/components/modules/home/AboutSection";
import DonorsSection from "@/components/modules/home/DonorsSection";
import FeaturesSection from "@/components/modules/home/FeaturesSection";
import GraduatesSection from "@/components/modules/home/GraduatesSection";
import HeroSection from "@/components/modules/home/HeroSection";
import ManagementSection from "@/components/modules/home/ManagementSection";
import NoticeSection from "@/components/modules/home/NoticeSection";
import TeachersSection from "@/components/modules/home/TeachersSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TeachersSection />
      <AboutSection />
      <FeaturesSection />
      <ManagementSection />
      <DonorsSection />
      <GraduatesSection />
      <NoticeSection />
    </>
  );
}
