const WelcomeSection = () => {
  return (
    <section className="rounded-2xl bg-amber-200 p-6 text-black shadow-sm md:p-8">
      <p className="mb-2 text-sm font-medium text-black">
        Madrasa Management System
      </p>

      <h2 className="text-2xl font-bold md:text-3xl">
        Welcome to Your Dashboard
      </h2>

      <p className="mt-2 max-w-2xl text-sm leading-6 text-black md:text-base">
        Manage your madrasa teachers, students, and other important information
        from one place.
      </p>
    </section>
  );
};

export default WelcomeSection;
