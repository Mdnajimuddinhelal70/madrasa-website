import Image from "next/image";

const EducationHero = () => {
  return (
    <section className="relative flex min-h-[400px] items-center overflow-hidden md:min-h-[600px]">
      <Image
        src="https://res.cloudinary.com/dpgjlcycl/image/upload/v1790525656/Gemini_Generated_Image_a6p4efa6p4efa6p4_knmpbf.jpg"
        alt="Education at our madrasa"
        fill
        priority
        className="object-cover object-top"
      />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center text-white">
          {/* Breadcrumb */}
          <div className="mb-4 flex items-center justify-center gap-2 text-sm text-white/80">
            <span>Home</span>
            <span>/</span>
            <span>Education</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Our Education
          </h1>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">
            We provide a balanced educational environment combining Quranic,
            Islamic, Arabic, and general education to nurture knowledgeable,
            disciplined, and morally responsible students.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EducationHero;
