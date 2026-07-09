"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function NewProductPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("tops");
  const [stock, setStock] = useState("1");

  const [image, setImage] = useState<File | null>(null);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    if (!image) {
      alert("Please choose an image.");
      return;
    }

    setLoading(true);

    const slug = name
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

    const fileExt = image.name.split(".").pop();

    const fileName = `${Date.now()}.${fileExt}`;

    const filePath = fileName;

    const { error: uploadError } =
      await supabase.storage
        .from("products")
        .upload(filePath, image);

    if (uploadError) {
      setLoading(false);
      alert(uploadError.message);
      return;
    }

    const {
      data: publicUrlData,
    } = supabase.storage
      .from("products")
      .getPublicUrl(filePath);

    const image_url =
      publicUrlData.publicUrl;

    const { error } =
      await supabase
        .from("products")
        .insert([
          {
            name,
            slug,
            description,
            category,
            stock: Number(stock),
            price: Number(price),
            featured: true,
            image_url,
          },
        ]);

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Product Published!");

    router.push("/shop");
    router.refresh();
  }

  return (
    <main className="min-h-screen bg-black text-white px-8 py-12">
      <div className="max-w-xl mx-auto">

        <h1 className="text-4xl font-bold mb-8">
          Add Product
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <input
            required
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg bg-neutral-900 p-4 outline-none"
          />

          <textarea
            required
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full rounded-lg bg-neutral-900 p-4 h-36 outline-none"
          />

          <input
            required
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full rounded-lg bg-neutral-900 p-4 outline-none"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-lg bg-neutral-900 p-4"
          >
            <option value="tops">Tops</option>
            <option value="bottoms">Bottoms</option>
          </select>

          <input
            required
            type="number"
            placeholder="Stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            className="w-full rounded-lg bg-neutral-900 p-4 outline-none"
          />

          <div>
            <label className="block mb-2 text-sm text-neutral-400">
              Product Image
            </label>

            <input
              required
              type="file"
              accept="image/*"
              onChange={(e) =>
                setImage(
                  e.target.files
                    ? e.target.files[0]
                    : null
                )
              }
              className="w-full rounded-lg bg-neutral-900 p-4"
            />
          </div>

          <button
            disabled={loading}
            type="submit"
            className="w-full bg-white text-black py-4 rounded-lg font-semibold hover:bg-neutral-200 transition"
          >
            {loading ? "Publishing..." : "Publish Product"}
          </button>

        </form>

      </div>
    </main>
  );
}