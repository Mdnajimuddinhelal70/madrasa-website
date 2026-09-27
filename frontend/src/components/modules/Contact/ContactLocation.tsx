import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const ContactLocation = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            Find Us
          </p>

          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            Visit Our Madrasa
          </h2>

          <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
            We welcome students, guardians, visitors, and well-wishers to visit
            our madrasa and learn more about our educational environment.
          </p>
        </div>

        {/* Map + Address */}
        <div className="grid overflow-hidden rounded-xl border bg-card lg:grid-cols-[1.5fr_1fr]">
          {/* Google Map */}
          <div className="min-h-[350px] w-full sm:min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5110.007543821968!2d91.65992358449991!3d25.090993491938377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3750ef0067aa7703%3A0x7a0cdf5ec631f4e5!2sBirendranagar%20Uttar%20moholla%20jame%20Masjid!5e0!3m2!1sen!2sbd!4v1790445179992!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Birendranagar Madrasa Location"
              className="min-h-[350px] w-full sm:min-h-[400px]"
            />
          </div>

          {/* Address Information */}
          <Card className="rounded-none border-0 shadow-none">
            <CardContent className="flex h-full flex-col justify-center p-6 sm:p-8 lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                Our Location
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Birendranagar Al-Arafah
                <br />
                Ibteda&apos;i Hafizia Madrasa
              </h3>

              <p className="mt-5 text-sm leading-7 text-muted-foreground">
                Birendranagar, Sylhet, Bangladesh
              </p>

              <div className="mt-6 flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />

                <p className="text-sm leading-6 text-muted-foreground">
                  Our madrasa is located in a peaceful environment where
                  students can learn, live, and develop their Islamic knowledge
                  and character.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactLocation;
