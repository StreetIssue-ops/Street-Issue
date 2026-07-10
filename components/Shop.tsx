 export default function Shop() {
  return (
    <section
      id="shop"
      className="bg-black text-white py-28 px-8"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-black mb-16">
          SHOP
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="border border-white/20 hover:border-white transition-all duration-300 p-20 rounded-xl">
            <h3 className="text-4xl font-bold mb-4">
              TOPS
            </h3>

            <p className="text-gray-400">
              Shirts and tees.
            </p>
          </div>

          <div className="border border-white/20 hover:border-white transition-all duration-300 p-20 rounded-xl">
            <h3 className="text-4xl font-bold mb-4">
              BOTTOMS
            </h3>

            <p className="text-gray-400">
              Jorts and sweatpants.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}