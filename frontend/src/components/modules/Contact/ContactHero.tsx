import Image from "next/image";

const ContactHero = () => {
  return (
    <section className="relative flex min-h-[400px] items-center overflow-hidden md:min-h-[600px]">
      <Image
        src="https://res.cloudinary.com/dpgjlcycl/image/upload/v1790444062/Gemini_Generated_Image_ofdx4mofdx4mofdx_cfyhqd.jpg"
        alt="Contact our madrasa"
        fill
        priority
        className="object-cover"
      />
    </section>
  );
};

export default ContactHero;
