"use client";

import HeroSection from "@/components/hero";
import Navbar from "@/components/Navbar";





export default function Home() {
  return (
    <div>
      {/* Navbar stays fixed at the top */}
      <Navbar />

      {/* Page content */}
      <main className="">
        {/*  Add Hero Section later */}
        <HeroSection />
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold">Welcome to Tezos JH</h1>
        </section> 

        {/* Team Section */}
      </main>
    </div>
  );
}