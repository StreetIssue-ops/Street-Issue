"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {
  const { cart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const message = encodeURIComponent(
    `Hi Street Issue,

I've completed payment for my order.

Kindly confirm my payment.

Thank you.`
  );

  return (
    <main className="min-h-screen bg-black text-white px-8 py-16">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-5xl font-black mb-10">
          Checkout
        </h1>

        <div className="border border-neutral-800 rounded-2xl p-8">

          <h2 className="text-3xl font-bold mb-8">
            Order Summary
          </h2>

          <div className="space-y-6">

            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between border-b border-neutral-800 pb-4"
              >
                <div>
                  <p className="font-semibold">
                    {item.name}
                  </p>

                  <p className="text-neutral-400">
                    Qty: {item.quantity}
                  </p>
                </div>

                <p>
                  ₦{(
                    item.price * item.quantity
                  ).toLocaleString()}
                </p>
              </div>
            ))}

          </div>

          <div className="flex justify-between mt-8 text-3xl font-bold">

            <p>Total</p>

            <p>₦{total.toLocaleString()}</p>

          </div>

        </div>

        <div className="mt-10 border border-neutral-800 rounded-2xl p-8">

          <h2 className="text-3xl font-bold mb-6">
            Secure Bank Transfer
          </h2>

          <div className="space-y-5 text-lg">

            <div>
              <p className="text-neutral-400">
                Bank
              </p>

              <p className="font-semibold">
                United Bank for Africa (UBA)
              </p>
            </div>

            <div>
              <p className="text-neutral-400">
                Account Name
              </p>

              <p className="font-semibold">
                Alamutu Mohammed Bashir Oluwatumininu
              </p>
            </div>

            <div>
              <p className="text-neutral-400">
                Account Number
              </p>

              <p className="font-semibold text-2xl tracking-widest">
                2214537811
              </p>
            </div>

          </div>

        </div>

        <div className="mt-10 border border-yellow-500/30 bg-yellow-500/10 rounded-2xl p-6">

          <h3 className="font-bold text-xl">
            Payment Notice
          </h3>

          <p className="text-neutral-300 mt-3 leading-8">
            Your order is reserved for 30 minutes after checkout.
            Once payment has been confirmed, we'll begin processing
            and preparing your Street Issue order.
          </p>

        </div>

        <Link
          href={`https://wa.me/2347047727119?text=${message}`}
          target="_blank"
          className="block w-full mt-10 bg-white text-black text-center py-5 rounded-xl font-bold hover:bg-neutral-200 transition"
        >
          Send Payment Receipt on WhatsApp
        </Link>

      </div>

    </main>
  );
}