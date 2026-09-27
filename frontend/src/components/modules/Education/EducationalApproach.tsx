import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, GraduationCap, Languages } from "lucide-react";

const approaches = [
  {
    icon: BookOpen,
    title: "Quranic & Islamic Education",
    description:
      "Students are guided in Quran recitation, memorization, Tajweed, and essential Islamic knowledge to help them develop strong faith and good character.",
  },
  {
    icon: Languages,
    title: "Arabic Language",
    description:
      "Students receive basic Arabic language education to improve their reading, writing, understanding, and connection with the language of the Quran.",
  },
  {
    icon: GraduationCap,
    title: "General Education",
    description:
      "Alongside Islamic education, students receive general academic education appropriate to their level, including Bangla, English, Mathematics, and other subjects.",
  },
];

const EducationalApproach = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            Our Approach
          </p>

          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            A Balanced Approach to Education
          </h2>

          <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
            Our educational approach combines Islamic values with essential
            academic knowledge to support the intellectual and moral development
            of our students.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {approaches.map((item) => {
            const Icon = item.icon;

            return (
              <Card
                key={item.title}
                className="group h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <CardContent className="p-6 text-center sm:p-8">
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="text-xl font-semibold">{item.title}</h3>

                  <p className="mt-4 text-sm leading-7 text-muted-foreground">
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

export default EducationalApproach;
