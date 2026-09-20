"use client";

import { X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { loginItem, navItems } from "./nav.config";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const pathname = usePathname();

  if (!isOpen) return null;

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <div className="lg:hidden">
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close navigation"
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px]"
      />

      {/* Mobile Panel */}
      <div className="absolute left-0 right-0 top-full z-50 border-t border-white/10 bg-[#2c0202]/98 px-4 pb-5 pt-4 shadow-2xl backdrop-blur-xl">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
            Navigation
          </span>

          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-2 text-white/60 transition hover:bg-white/10 hover:text-white"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <div className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                  active
                    ? "bg-white text-[#2c0202]"
                    : "text-white/75 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Icon size={18} />

                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>

        <div className="my-4 h-px bg-white/10" />

        <Link
          href={loginItem.href}
          onClick={onClose}
          className="flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-[#2c0202] transition hover:bg-white/90"
        >
          <loginItem.icon size={18} />
          {loginItem.label}
        </Link>
      </div>
    </div>
  );
}
