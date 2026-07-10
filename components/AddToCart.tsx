"use client";

import { useCart } from "@/context/CartContext";

type Props = {
  product: {
    id: string;
    name: string;
    price: number;
    image_url: string;
  };
};

export default function AddToCart({ product }: Props) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() =>
        addToCart({
          ...product,
          quantity: 1,
        })
      }
      className="w-full bg-white text-black py-4 rounded-xl font-semibold hover:bg-neutral-200 transition"
    >
      Add to Cart
    </button>
  );
}