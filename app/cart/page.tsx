"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <main className="min-h-screen bg-black text-white px-8 py-16">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-black mb-10">
          Your Cart
        </h1>

        {cart.length === 0 ? (
          <div className="border border-neutral-800 rounded-2xl p-12 text-center">

            <h2 className="text-3xl font-bold">
              Your cart is empty
            </h2>

            <p className="text-neutral-400 mt-4">
              Add some Street Issue pieces.
            </p>

          </div>
        ) : (
          <>
            <div className="space-y-6">

              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-6 border border-neutral-800 rounded-xl p-5"
                >

                  <div className="relative w-28 h-28 rounded-lg overflow-hidden bg-neutral-900">

                    {item.image_url ? (
                      <Image
                        src={item.image_url}
                        alt={item.name}
                        fill
                        unoptimized
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-neutral-500">
                        No Image
                      </div>
                    )}

                  </div>

                  <div className="flex-1">

                    <h2 className="text-2xl font-bold">
                      {item.name}
                    </h2>

                    <p className="text-neutral-400 mt-2">
                      ₦{item.price.toLocaleString()}
                    </p>

                    <div className="flex items-center gap-4 mt-5">

                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="w-10 h-10 border border-white rounded-lg hover:bg-white hover:text-black transition cursor-pointer"
                      >
                        -
                      </button>

                      <span className="text-xl font-bold">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="w-10 h-10 border border-white rounded-lg hover:bg-white hover:text-black transition cursor-pointer"
                      >
                        +
                      </button>

                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="mt-5 text-red-500 hover:text-red-400 transition cursor-pointer"
                    >
                      Remove
                    </button>

                  </div>

                  <div className="text-right">

                    <p className="text-xl font-semibold">
                      ₦{(
                        item.price * item.quantity
                      ).toLocaleString()}
                    </p>

                  </div>

                </div>
              ))}

            </div>

            <div className="mt-10 border-t border-neutral-800 pt-8 flex justify-between items-center">

              <h2 className="text-3xl font-bold">
                Total
              </h2>

              <p className="text-3xl font-bold">
                ₦{total.toLocaleString()}
              </p>

            </div>

            <button className="mt-8 w-full bg-white text-black py-4 rounded-xl font-bold hover:bg-neutral-200 transition cursor-pointer">
              Proceed to Checkout
            </button>

          </>
        )}

      </div>
    </main>
  );
}