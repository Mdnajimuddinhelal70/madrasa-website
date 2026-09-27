import AcademicClasses from "@/components/modules/Education/AcademicClasses";
import AnnualExamination from "@/components/modules/Education/AnnualExamination";
import EducationalApproach from "@/components/modules/Education/EducationalApproach";
import EducationHero from "@/components/modules/Education/EducationHero";
import HifzProgram from "@/components/modules/Education/HifzProgram";

const EducationPage = () => {
  return (
    <div>
      <EducationHero />
      <EducationalApproach />
      <AcademicClasses />
      <HifzProgram />
      <AnnualExamination />
    </div>
  );
};

export default EducationPage;
