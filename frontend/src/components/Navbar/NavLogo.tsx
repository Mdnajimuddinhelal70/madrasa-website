import Link from "next/link";

export default function NavLogo() {
  return (
    <Link
      href="/"
      className="group flex items-center gap-3"
      aria-label="Madrasa Home"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/15">
        <span className="text-lg font-bold text-white">M</span>
      </div>

      <div className="hidden sm:block">
        <p className="text-base font-bold leading-none text-white">Madrasa</p>

        <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white/50">
          Education & Excellence
        </p>
      </div>
    </Link>
  );
}
