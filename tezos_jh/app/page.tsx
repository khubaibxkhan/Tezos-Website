"use client";

import BoardMembers from "@/components/BoardMembers";
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
        </section> 
        < BoardMembers />

        {/* Team Section */}
      </main>
    </div>
  );
}