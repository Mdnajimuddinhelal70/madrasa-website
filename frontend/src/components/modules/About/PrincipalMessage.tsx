import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const PrincipalMessage = () => {
  return (
    <section className="bg-muted/40 py-12 sm:py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            Principal&apos;s Message
          </p>

          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            A Message From Our Principal
          </h2>

          <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
            Our commitment is to nurture knowledgeable, responsible, and morally
            strong students through quality education and Islamic values.
          </p>
        </div>

        {/* Message Card */}
        <Card className="mx-auto max-w-5xl overflow-hidden">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-[280px_1fr]">
              {/* Principal Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden md:aspect-auto md:min-h-[400px]">
                <Image
                  src="https://res.cloudinary.com/dpgjlcycl/image/upload/f_auto,q_auto,w_800/v1790441693/najimpic_idm0nm.png"
                  alt="Principal of our Madrasa"
                  fill
                  priority
                  sizes="(max-width: 767px) 100vw, 280px"
                  className="object-cover object-top"
                />
              </div>

              {/* Message */}
              <div className="p-6 sm:p-8 md:p-10 lg:p-12">
                <div className="mb-4 text-4xl leading-none text-primary sm:mb-6">
                  “
                </div>

                <blockquote className="text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8 md:text-lg">
                  It is our responsibility to provide our students with an
                  environment where they can gain knowledge, develop good
                  character, and understand the values of Islam. We believe that
                  true education is not only about academic achievement, but
                  also about building honesty, discipline, compassion, and
                  responsibility.
                </blockquote>

                {/* Principal Info */}
                <div className="mt-7 flex items-center gap-4 sm:mt-8">
                  <Avatar className="h-12 w-12 sm:h-14 sm:w-14">
                    <AvatarImage
                      src="https://res.cloudinary.com/dpgjlcycl/image/upload/f_auto,q_auto,w_150/v1790441693/najimpic_idm0nm.png"
                      alt="Principal"
                    />

                    <AvatarFallback>PR</AvatarFallback>
                  </Avatar>

                  <div>
                    <h3 className="font-semibold">Principal Name</h3>

                    <p className="text-xs text-muted-foreground sm:text-sm">
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
