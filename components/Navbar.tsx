export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-lg border-b border-white/10">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        <a
          href="/"
          className="text-3xl font-black tracking-[0.25em] hover:opacity-80 duration-300"
        >
          SI
        </a>

        <div className="flex items-center gap-10 uppercase tracking-[0.2em] text-sm">

          <a href="/" className="hover:text-gray-400 duration-300">
            Home
          </a>

          <a href="#" className="hover:text-gray-400 duration-300">
            Shop
          </a>

          <a href="#" className="hover:text-gray-400 duration-300">
            About
          </a>

          <a href="#" className="hover:text-gray-400 duration-300">
            Contact
          </a>

        </div>

      </div>

    </nav>
  );
}