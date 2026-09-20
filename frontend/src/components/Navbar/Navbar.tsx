"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import NavLogo from "./NavLogo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      <nav className="relative border-b border-white/10 bg-[#2c0202]/95 text-white shadow-lg shadow-black/5 backdrop-blur-xl">
        {/* Subtle top highlight */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-[72px] items-center justify-between">
            {/* Logo */}
            <NavLogo />

            {/* Desktop Navigation */}
            <DesktopNav />

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={toggleMenu}
              className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-white transition-all duration-300 hover:bg-white/10 lg:hidden"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div id="mobile-navigation">
          <MobileNav isOpen={isOpen} onClose={closeMenu} />
        </div>
      </nav>
    </header>
  );
}
