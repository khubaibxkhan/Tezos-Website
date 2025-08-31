"use client";

import BoardMembers from "@/components/BoardMembers";
import TeamButton from "@/components/button/TeamButtons";
import CarouselSlider from "@/components/eventslider";
import HeroSection from "@/components/hero";
import Navbar from "@/components/Navbar";
import TeacherC from "@/components/Teacher";
import TeamSliderCards from "@/components/teamslider";






export default function Home() {
  return (
    <div>
      {/* Navbar stays fixed at the top */}
      <Navbar />

      {/* Page content */}
      <main className="">
        {/*  Add Hero Section later */}
        <HeroSection /> 
        <TeacherC />
        < BoardMembers />
        < TeamSliderCards />
        < CarouselSlider />
        
        {/* Team Section */}
      </main>
    </div>
  );
}