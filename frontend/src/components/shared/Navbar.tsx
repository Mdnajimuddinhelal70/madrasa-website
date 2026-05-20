"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#2c0202]/95 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <h1 className="text-xl font-bold">Madrasa</h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/teachers">Teachers</Link>
            <Link href="/courses">Courses</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/create-teacher">Create Teacher</Link>
            <Link href="/login">Login</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#2c0202]/95 px-4 pb-4 space-y-2">
          <Link href="/" className="block">
            Home
          </Link>
          <Link href="/about" className="block">
            About
          </Link>
          <Link href="/teachers" className="block">
            Teachers
          </Link>
          <Link href="/courses" className="block">
            Courses
          </Link>
          <Link href="/contact" className="block">
            Contact
          </Link>
          <Link href="/login" className="block">
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}
