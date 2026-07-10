import { notFound } from "next/navigation";
import Image from "next/image";
import { supabase } from "@/lib/supabase";
import AddToCartButton from "@/components/AddToCartButton";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;

  const { data: product, error } = await supabase
    .from("products")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white px-8 py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">

        <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-neutral-900">

          {product.image_url ? (
            <Image
              src={product.image_url}
              alt={product.name}
              fill
              unoptimized
              className="object-cover"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-neutral-500">
              No Image Available
            </div>
          )}

        </div>

        <div className="flex flex-col justify-center">

          <h1 className="text-5xl font-black">
            {product.name}
          </h1>

          <p className="text-3xl mt-6">
            ₦{product.price.toLocaleString()}
          </p>

          <p className="text-neutral-400 mt-8 leading-8">
            {product.description}
          </p>

          <p className="mt-8">
            Stock: {product.stock}
          </p>

          <AddToCartButton
            product={{
              id: product.id,
              name: product.name,
              price: product.price,
              image_url: product.image_url ?? "",
            }}
          />

        </div>

      </div>
    </main>
  );
}