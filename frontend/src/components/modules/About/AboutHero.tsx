import Image from "next/image";

const AboutHero = () => {
  return (
    <section className="relative flex min-h-[400px] items-center overflow-hidden md:min-h-[600px]">
      {/* Background Image */}
      <Image
        src="https://res.cloudinary.com/dpgjlcycl/image/upload/v1790434939/Gemini_Generated_Image_i5rmshi5rmshi5rm_xusi51.jpg"
        alt="Madrasa building"
        fill
        priority
        className="object-cover"
      />
    </section>
  );
};

export default AboutHero;
