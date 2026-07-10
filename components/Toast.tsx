"use client";

type Props = {
  message: string;
};

export default function Toast({ message }: Props) {
  return (
    <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[999] bg-white text-black px-6 py-4 rounded-xl shadow-2xl font-semibold animate-bounce">
      ✅ {message}
    </div>
  );
}