import Link from "next/link";

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-black text-white px-8 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-2">Street Issue Admin</h1>

        <p className="text-neutral-400 mb-10">
          Manage your products and future drops.
        </p>

        <div className="grid md:grid-cols-3 gap-6">

          {/* Products */}
          <div className="border border-neutral-800 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-2">
              Products
            </h2>

            <p className="text-neutral-400 mb-6">
              Add, edit and remove products.
            </p>

            <Link
              href="/admin/new"
              className="block w-full text-center border border-white py-3 rounded hover:bg-white hover:text-black transition"
            >
              + Add Product
            </Link>
          </div>

          {/* Orders */}
          <div className="border border-neutral-800 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-2">
              Orders
            </h2>

            <p className="text-neutral-400 mb-6">
              View customer orders.
            </p>

            <button className="w-full border border-neutral-700 py-3 rounded opacity-50 cursor-not-allowed">
              Coming Soon
            </button>
          </div>

          {/* Settings */}
          <div className="border border-neutral-800 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-2">
              Settings
            </h2>

            <p className="text-neutral-400 mb-6">
              Store settings and configuration.
            </p>

            <button className="w-full border border-neutral-700 py-3 rounded opacity-50 cursor-not-allowed">
              Coming Soon
            </button>
          </div>

        </div>
      </div>
    </main>
  );
}