import { supabase } from "@/lib/supabase";

export default async function ShopPage() {
  const { data: products, error } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <main className="min-h-screen bg-black text-white px-8 py-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-3">Shop</h1>
        <p className="text-neutral-400 mb-12">
          Discover the latest Street Issue pieces.
        </p>

        {error && (
          <p className="text-red-500">Failed to load products.</p>
        )}

        {!products || products.length === 0 ? (
          <div className="border border-neutral-800 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-semibold mb-2">
              No products yet
            </h2>
            <p className="text-neutral-400">
              Upload your first product from the admin dashboard.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="border border-neutral-800 rounded-2xl overflow-hidden"
              >
                <div className="h-80 bg-neutral-900 flex items-center justify-center">
                  {product.image_url ? (
                    <img
                      src={product.image_url}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-neutral-500">
                      No Image
                    </span>
                  )}
                </div>

                <div className="p-5">
                  <h2 className="text-xl font-semibold">
                    {product.name}
                  </h2>

                  <p className="text-neutral-400 mt-2">
                    ₦{product.price.toLocaleString()}
                  </p>

                  <button className="mt-5 w-full border border-white py-3 hover:bg-white hover:text-black transition">
                    View Product
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}