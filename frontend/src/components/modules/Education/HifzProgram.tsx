import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, CheckCircle2, Heart, Sparkles } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: BookOpen,
    title: "Quran Memorization",
    description:
      "Students are guided through a structured approach to memorizing the Holy Quran.",
  },
  {
    icon: CheckCircle2,
    title: "Tajweed & Recitation",
    description:
      "Students learn proper Quranic pronunciation, recitation, and Tajweed rules.",
  },
  {
    icon: Heart,
    title: "Islamic Values",
    description:
      "Quranic learning is supported by Islamic values, discipline, good manners, and character development.",
  },
  {
    icon: Sparkles,
    title: "Individual Guidance",
    description:
      "Teachers provide guidance and attention according to each student's learning progress.",
  },
];

const HifzProgram = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Image */}
          <div className="relative overflow-hidden rounded-xl">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="https://res.cloudinary.com/dpgjlcycl/image/upload/v1790526607/Gemini_Generated_Image_7fuh7y7fuh7y7fuh_eibwve.jpg"
                alt="Quran learning at our madrasa"
                fill
                priority
                className="object-cover"
              />
            </div>

            <div className="absolute inset-0 bg-black/10" />
          </div>

          {/* Content */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              Hifz-ul-Quran
            </p>

            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
              Quran Memorization & Islamic Learning
            </h2>

            <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
              Our madrasa provides an environment where students can learn the
              Holy Quran, develop proper recitation skills, and grow with
              Islamic values and good character.
            </p>

            {/* Features */}
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {features.map((item) => {
                const Icon = item.icon;

                return (
                  <Card key={item.title} className="h-full">
                    <CardContent className="p-5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <Icon className="h-5 w-5" />
                        </div>

                        <h3 className="font-semibold">{item.title}</h3>
                      </div>

                      <p className="mt-3 text-sm leading-6 text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HifzProgram;
