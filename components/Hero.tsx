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

        <a
          href="#shop"
          className="inline-block mt-12 border border-white px-10 py-4 uppercase tracking-[0.3em] hover:bg-white hover:text-black duration-300"
        >
          Shop Collection
        </a>

      </div>

    </section>
  );
}