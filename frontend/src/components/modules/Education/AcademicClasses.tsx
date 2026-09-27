import { Card, CardContent } from "@/components/ui/card";
import { BookOpenCheck } from "lucide-react";

const classes = [
  {
    number: "01",
    title: "Class One",
    description:
      "Foundation-level education with basic academic, Islamic, and Quranic learning.",
  },
  {
    number: "02",
    title: "Class Two",
    description:
      "Developing essential academic skills alongside Quranic and Islamic education.",
  },
  {
    number: "03",
    title: "Class Three",
    description:
      "Strengthening academic knowledge, Arabic learning, and Islamic understanding.",
  },
  {
    number: "04",
    title: "Class Four",
    description:
      "Building stronger academic foundations with continued Quranic and Islamic studies.",
  },
  {
    number: "05",
    title: "Class Five",
    description:
      "Preparing students for the next stage through balanced academic and Islamic education.",
  },
];

const AcademicClasses = () => {
  return (
    <section className="bg-muted/40 py-12 sm:py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            Academic Classes
          </p>

          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            Education from Class One to Five
          </h2>

          <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
            Our madrasa provides structured education from Class One through
            Class Five, combining general academic learning with Quranic and
            Islamic education.
          </p>
        </div>

        {/* Classes */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {classes.map((item) => (
            <Card
              key={item.number}
              className="group h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <CardContent className="p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  {/* Number */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
                    {item.number}
                  </div>

                  <BookOpenCheck className="h-6 w-6 text-primary/60 transition-colors group-hover:text-primary" />
                </div>

                <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicClasses;
