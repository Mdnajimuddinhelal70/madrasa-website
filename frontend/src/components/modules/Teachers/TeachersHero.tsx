const TeachersHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#2c0202]/95 ">
      {/* Decorative Elements */}
      <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-white/5 blur-2xl" />
      <div className="absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center md:py-24">
        <div className="mx-auto max-w-3xl text-white">
          {/* Breadcrumb */}
          <div className="mb-5 flex items-center justify-center gap-2 text-sm text-emerald-100/80">
            <span>Home</span>
            <span>/</span>
            <span>Teachers</span>
          </div>

          {/* Small Quote */}
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-emerald-200">
            Guiding Hearts, Inspiring Minds
          </p>

          {/* Heading */}
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Our Dedicated Teachers
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-emerald-50/90 sm:text-lg">
            A great teacher does more than teach a lesson — they inspire
            students to seek knowledge, build good character, and walk the path
            of righteousness.
          </p>

          {/* Bottom Quote */}
          <div className="mx-auto mt-8 h-px w-16 bg-emerald-300/60" />

          <p className="mt-5 text-sm italic text-emerald-100/80 sm:text-base">
            “Education enlightens the mind, while good character shapes the
            future.”
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeachersHero;
