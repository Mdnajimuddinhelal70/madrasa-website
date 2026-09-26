import {
  BookOpen,
  GraduationCap,
  HeartHandshake,
  Home,
  Users,
  Utensils,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const facilities = [
  {
    icon: Home,
    title: "Residential Facility",
    description:
      "Students have access to a supportive residential environment with suitable accommodation facilities.",
  },
  {
    icon: Utensils,
    title: "Food & Care",
    description:
      "The madrasa provides food support for students. Orphan students can receive this support completely free of charge.",
  },
  {
    icon: BookOpen,
    title: "Islamic Education",
    description:
      "Students receive Islamic education in a disciplined and nurturing environment with a focus on Qur'an and Islamic values.",
  },
  {
    icon: GraduationCap,
    title: "Educational Environment",
    description:
      "We provide a learning environment that encourages students to develop knowledge, discipline, and good character.",
  },
  {
    icon: HeartHandshake,
    title: "Support for Orphans",
    description:
      "Special care and support are available for orphan and financially disadvantaged students according to their needs.",
  },
  {
    icon: Users,
    title: "Student Care & Guidance",
    description:
      "Teachers and staff provide regular guidance, supervision, and care to help students grow in a safe environment.",
  },
];

const Facilities = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            Our Facilities
          </p>

          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Facilities We Provide
          </h2>

          <p className="mt-4 leading-7 text-muted-foreground">
            We are committed to providing our students with a supportive
            environment where they can learn, live, and grow with proper care
            and guidance.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((facility) => {
            const Icon = facility.icon;

            return (
              <Card
                key={facility.title}
                className="group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <CardContent className="p-6">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-xl font-semibold">{facility.title}</h3>

                  <p className="mt-3 leading-7 text-muted-foreground">
                    {facility.description}
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

export default Facilities;
