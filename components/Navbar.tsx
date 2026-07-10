"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);

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

        {/* Desktop */}

        <div className="hidden md:flex gap-8 uppercase tracking-[0.15em] text-sm items-center">

          <Link href="/">Home</Link>

          <Link href="/shop">Shop</Link>

          <Link href="/#about">About</Link>

          <Link href="/#contact">Contact</Link>

          <Link
            href="/cart"
            className="flex items-center gap-2 font-semibold"
          >
            <ShoppingCart size={18} />

            ({totalItems})
          </Link>

        </div>

        {/* Mobile */}

        <div className="md:hidden flex items-center gap-5">

          <Link
            href="/cart"
            className="relative"
          >
            <ShoppingCart size={24} />

            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-white text-black text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}

          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="cursor-pointer"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black px-8 py-6 flex flex-col gap-6 uppercase tracking-[0.15em] text-sm">

          <Link
            href="/"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>

          <Link
            href="/shop"
            onClick={() => setOpen(false)}
          >
            Shop
          </Link>

          <Link
            href="/#about"
            onClick={() => setOpen(false)}
          >
            About
          </Link>

          <Link
            href="/#contact"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>

        </div>
      )}

    </nav>
  );
}