import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const AboutIntroduction = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          {/* Image */}
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="https://res.cloudinary.com/dpgjlcycl/image/upload/v1790437444/Gemini_Generated_Image_lcgdcilcgdcilcgd_dqegct.jpg"
              alt="Our Madrasa"
              width={800}
              height={600}
              className="h-[350px] w-full object-cover md:h-[450px]"
            />
          </div>

          {/* Content */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              About Our Madrasa
            </p>

            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Building Knowledge, Character & Islamic Values
            </h2>

            <p className="mt-5 leading-7 text-muted-foreground">
              Our madrasa is committed to providing quality Islamic education in
              a caring, disciplined, and inspiring environment. We aim to help
              students develop strong knowledge, good character, and a sense of
              responsibility.
            </p>

            <p className="mt-4 leading-7 text-muted-foreground">
              Alongside Islamic studies, we focus on academic development, moral
              values, discipline, and practical skills so that our students can
              become responsible and beneficial members of society.
            </p>

            {/* Highlights */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-5">
                  <h3 className="text-2xl font-bold text-primary">Quality</h3>

                  <p className="mt-1 text-sm text-muted-foreground">
                    Quality Education
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-5">
                  <h3 className="text-2xl font-bold text-primary">Values</h3>

                  <p className="mt-1 text-sm text-muted-foreground">
                    Islamic Values
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntroduction;
