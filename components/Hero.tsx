import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center px-6">

        <p className="uppercase tracking-[10px] text-gray-500 mb-8">
          STREETWEAR
        </p>

        <h1 className="text-7xl md:text-9xl font-black leading-none">
          STREET ISSUE
        </h1>

        <h2 className="text-xl md:text-2xl tracking-[0.5em] text-gray-300 mt-8">
          WEAR THE ISSUE.
        </h2>

        <p className="text-gray-500 max-w-xl mx-auto mt-8 leading-8">
          Built for those who move different.
        </p>

        <div className="mt-12 flex justify-center">
          <Link
            href="/shop"
            className="inline-flex items-center border border-white px-10 py-4 uppercase tracking-[0.3em] hover:bg-white hover:text-black transition duration-300"
          >
            Shop Now
          </Link>
        </div>

      </div>
    </section>
  );
}