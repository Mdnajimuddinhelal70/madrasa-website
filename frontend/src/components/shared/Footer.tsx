import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-green-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
        {/* 1. About */}
        <div>
          <h2 className="text-xl font-bold mb-4">Our Madrasa</h2>
          <p className="text-sm text-gray-200">
            We provide quality Islamic education with modern knowledge. Our goal
            is to build strong moral values and a bright future.
          </p>
        </div>

        {/* 2. Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>

          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/teachers">Teachers</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* 3. Contact */}
        <div>
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>

          <div className="space-y-3 text-sm">
            <p className="flex items-center gap-2">
              <Phone size={16} /> +880 1XXXXXXXXX
            </p>

            <p className="flex items-center gap-2">
              <Mail size={16} /> info@madrasa.com
            </p>

            {/* Social */}
            <div className="flex gap-4 mt-4">
              <a href="#" className="hover:text-yellow-300">
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-green-700 text-center py-4 text-sm text-gray-300">
        © {new Date().getFullYear()} Our Madrasa. All rights reserved.
      </div>
    </footer>
  );
}
