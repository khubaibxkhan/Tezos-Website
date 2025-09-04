"use client";

import BoardMembers from "@/components/BoardMembers";
import TeamButton from "@/components/button/TeamButtons";
import CarouselSlider from "@/components/eventslider";
import Footer from "@/components/foot";
import HeroSection from "@/components/hero";
import Navbar from "@/components/Navbar";
import TeacherC from "@/components/Teacher";
import TeamSliderCards from "@/components/teamslider";
import Credits from "./credits/page";






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
        < Footer />
        
        {/* Team Section */}
      </main>
    </div>
  );
}