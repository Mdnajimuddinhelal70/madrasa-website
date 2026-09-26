import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const PrincipalMessage = () => {
  return (
    <section className="bg-muted/40 py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            Principal@apos;s Message
          </p>

          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            A Message From Our Principal
          </h2>

          <p className="mt-4 leading-7 text-muted-foreground">
            Our commitment is to nurture knowledgeable, responsible, and morally
            strong students through quality education and Islamic values.
          </p>
        </div>

        {/* Message Card */}
        <Card className="mx-auto max-w-5xl overflow-hidden">
          <CardContent className="p-0">
            <div className="grid items-center md:grid-cols-[280px_1fr]">
              {/* Principal Image */}
              <div className="relative h-[300px] md:h-full md:min-h-[400px]">
                <Image
                  src="https://res.cloudinary.com/dpgjlcycl/image/upload/v1790441693/najimpic_idm0nm.png"
                  alt="Principal of our Madrasa"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Message */}
              <div className="p-6 md:p-10 lg:p-12">
                <div className="mb-6 text-4xl leading-none text-primary">“</div>

                <blockquote className="text-base leading-8 text-muted-foreground md:text-lg">
                  It is our responsibility to provide our students with an
                  environment where they can gain knowledge, develop good
                  character, and understand the values of Islam. We believe that
                  true education is not only about academic achievement, but
                  also about building honesty, discipline, compassion, and
                  responsibility.
                </blockquote>

                {/* Principal Info */}
                <div className="mt-8 flex items-center gap-4">
                  <Avatar className="h-14 w-14">
                    <AvatarImage src="/images/principal.jpg" alt="Principal" />

                    <AvatarFallback>PR</AvatarFallback>
                  </Avatar>

                  <div>
                    <h3 className="font-semibold">Principal Name</h3>

                    <p className="text-sm text-muted-foreground">
                      Principal, Our Madrasa
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PrincipalMessage;
