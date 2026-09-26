import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { getAllTeachers } from "@/services/teacher/GetAllTeachers";
import { ITeacher } from "@/types/user.interface";

const TeachersPreview = async () => {
  const response = await getAllTeachers();

  const teachers: ITeacher[] = response.data || [];

  const featuredTeachers = teachers.slice(0, 3);

  return (
    <section className="bg-muted/40 py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            Our Teachers
          </p>

          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Meet Our Dedicated Teachers
          </h2>

          <p className="mt-4 leading-7 text-muted-foreground">
            Our dedicated teachers are committed to providing quality education,
            guidance, and care to help students grow in knowledge and character.
          </p>
        </div>

        {/* Teachers */}
        {featuredTeachers.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredTeachers.map((teacher) => {
              const teacherId = teacher._id;
              const teacherImage = teacher.picture?.[0];

              if (!teacherId) return null;

              return (
                <Card
                  key={teacherId}
                  className="group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  {/* Teacher Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    {teacherImage ? (
                      <Image
                        src={teacherImage}
                        alt={teacher.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-muted-foreground">
                        No Image
                      </div>
                    )}
                  </div>

                  {/* Teacher Information */}
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-semibold">{teacher.name}</h3>

                    {teacher.currentPosition && (
                      <p className="mt-2 text-sm text-muted-foreground">
                        {teacher.currentPosition}
                      </p>
                    )}

                    <Button asChild className="mt-5">
                      <Link href={`/single-teacher/${teacherId}`}>
                        View Profile
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        ) : (
          <div className="py-10 text-center text-muted-foreground">
            No teachers found.
          </div>
        )}

        {/* View All Teachers */}
        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/teachers">
              View All Teachers
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeachersPreview;
