import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div className="relative w-full h-[300px] md:h-[400px]">
          <Image
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
            alt="About Madrasa"
            fill
            className="object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            About Our Madrasa
          </h2>

          <p className="text-gray-600 mb-4">
            Our madrasa provides quality Islamic education combined with modern
            knowledge. We focus on building strong moral values and academic
            excellence.
          </p>

          <p className="text-gray-600 mb-6">
            With experienced teachers and a peaceful environment, we guide
            students towards a bright and successful future.
          </p>

          <Link
            href="/about"
            className="inline-block bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
          >
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
}
