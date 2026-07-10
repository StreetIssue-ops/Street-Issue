import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] bg-black/70 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        <Link
          href="/"
          className="text-3xl font-black tracking-[0.25em] hover:opacity-80 transition"
        >
          SI
        </Link>

        <div className="flex items-center gap-10 uppercase tracking-[0.2em] text-sm">

          <Link
            href="/"
            className="hover:text-gray-400 transition"
          >
            Home
          </Link>

          <Link
            href="/shop"
            className="hover:text-gray-400 transition"
          >
            Shop
          </Link>

          <Link
            href="/#about"
            className="hover:text-gray-400 transition"
          >
            About
          </Link>

          <Link
            href="/#contact"
            className="hover:text-gray-400 transition"
          >
            Contact
          </Link>

        </div>

      </div>
    </nav>
  );
}