import { Card, CardContent } from "@/components/ui/card";
import {
  BookCheck,
  CalendarCheck,
  ClipboardCheck,
  GraduationCap,
} from "lucide-react";

const assessmentItems = [
  {
    icon: BookCheck,
    title: "Regular Learning",
    description:
      "Students are regularly guided and evaluated throughout the academic year.",
  },
  {
    icon: ClipboardCheck,
    title: "Academic Assessment",
    description:
      "Students' academic progress is assessed according to their class and level.",
  },
  {
    icon: CalendarCheck,
    title: "Annual Examination",
    description:
      "An annual examination is conducted at the end of the academic year to evaluate overall learning.",
  },
  {
    icon: GraduationCap,
    title: "Student Progress",
    description:
      "Assessment helps teachers and guardians understand students' progress and areas for improvement.",
  },
];

const AnnualExamination = () => {
  return (
    <section className="bg-muted/40 py-12 sm:py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            Assessment
          </p>

          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            Annual Examination & Assessment
          </h2>

          <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
            We follow regular learning and assessment practices to understand
            students&apos; academic progress throughout the year.
          </p>
        </div>

        {/* Assessment Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {assessmentItems.map((item) => {
            const Icon = item.icon;

            return (
              <Card
                key={item.title}
                className="group h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-lg font-semibold">{item.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AnnualExamination;
