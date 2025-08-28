"use client";

import Navbar from "@/components/navbar";


export default function Home() {
  return (
    <div>
      {/* Navbar stays fixed at the top */}
      <Navbar />

      {/* Page content */}
      <main className="pt-20 px-6">
        {/*  Add Hero Section later */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold">Welcome to Tezos JH</h1>
          <p className="text-gray-600 mt-4">
            Empowering students through blockchain & innovation 🚀
          </p>
        </section>

        {/* Team Section */}
      </main>
    </div>
  );
}