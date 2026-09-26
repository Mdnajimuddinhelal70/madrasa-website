import { Card, CardContent } from "@/components/ui/card";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Address",
    value:
      "Birendranagar, Norsingpur, Doara Bazar, sunamganj, Sylhet, Bangladesh",
    description: "Visit us at our madrasa campus",
  },
  {
    icon: Phone,
    title: "Phone Number",
    value: "+880 1796427670",
    description: "Call us during office hours",
  },
  {
    icon: Mail,
    title: "Email Address",
    value: "alarafahibtatimkhana.com",
    description: "Send us your questions anytime",
  },
  {
    icon: Clock3,
    title: "Office Hours",
    value: "sun - Thursday",
    description: "9:00 AM - 5:00 PM",
  },
];

const ContactInfo = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            Get In Touch
          </p>

          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            Contact Information
          </h2>

          <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
            We&apos;re always happy to hear from you. You can reach us through
            phone, email, or visit our madrasa directly.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((item) => {
            const Icon = item.icon;

            return (
              <Card
                key={item.title}
                className="group transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <CardContent className="flex h-full flex-col items-center p-6 text-center">
                  {/* Icon */}
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold">{item.title}</h3>

                  {/* Value */}
                  <p className="mt-2 break-words text-sm font-medium">
                    {item.value}
                  </p>

                  {/* Description */}
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
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

export default ContactInfo;
