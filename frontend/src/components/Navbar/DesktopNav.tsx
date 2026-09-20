"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { loginItem, navItems } from "./nav.config";

export default function DesktopNav() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <div className="hidden items-center gap-2 lg:flex">
      <div className="flex items-center rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-md">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`group relative flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                active
                  ? "bg-white text-[#2c0202] shadow-sm"
                  : "text-white/75 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Icon
                size={16}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:scale-110"
              />

              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>

      <Link
        href={loginItem.href}
        className="ml-2 flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#2c0202] shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90"
      >
        <loginItem.icon size={17} />
        {loginItem.label}
      </Link>
    </div>
  );
}
