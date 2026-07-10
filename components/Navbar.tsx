"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        <Link
          href="/"
          className="text-3xl font-black tracking-[0.25em]"
        >
          SI
        </Link>

        <div className="flex gap-8 uppercase tracking-[0.15em] text-sm">

          <Link href="/">Home</Link>

          <Link href="/shop">Shop</Link>

          <Link href="/#about">About</Link>

          <Link href="/#contact">Contact</Link>

          <Link
            href="/cart"
            className="font-semibold"
          >
            Cart ({totalItems})
          </Link>

        </div>

      </div>
    </nav>
  );
}