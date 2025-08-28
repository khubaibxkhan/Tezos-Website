"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // npm install lucide-react

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "KhubaibAhmadKhan_Resume.pdf";
    link.click();
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-black/50 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-3xl md:text-4xl lg:5xl font-light m-0">
          Portfolio 
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex text-3xl space-x-10 text-white tracking-wider">
          <a href="#home" className="text-base tracking-wider transition-colors hover:text-gray-300 z-50">Home</a>
          <a href="#about_me" className="text-base tracking-wider transition-colors hover:text-gray-300 z-50">About Me</a>
          <a href="#skills" className="text-base tracking-wider transition-colors hover:text-gray-300 z-50">Skills</a>
          <a href="#projects" className="text-base tracking-wider transition-colors hover:text-gray-300 z-50">Projects</a>
          <a href="#experience" className="text-base tracking-wider transition-colors hover:text-gray-300 z-50">Experience</a>
          <a href="#connect" className="text-base tracking-wider transition-colors hover:text-gray-300 z-50">Connect</a>
        </div>

        {/* Resume Button (Desktop) */}
        <div className="hidden md:block">
          <button
            onClick={handleResumeDownload}
            className="bg-[#a7a7a7] text-black py-3 px-8 rounded-full border-none font-medium transition-all duration-500 hover:bg-white z-10"
          >
            Resume
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-white">
         <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-md text-white uppercase text-sm tracking-wider px-6 py-4 space-y-4">
          <a href="#home" className="block hover:text-yellow-400" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about_me" className="block hover:text-yellow-400" onClick={() => setMenuOpen(false)}>About Me</a>
          <a href="#skills" className="block hover:text-yellow-400" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#projects" className="block hover:text-yellow-400" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#experience" className="block hover:text-yellow-400" onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="#connect" className="block hover:text-yellow-400" onClick={() => setMenuOpen(false)}>Connect</a>
          <button
            onClick={() => {
              handleResumeDownload();
              setMenuOpen(false);
            }}
            className="bg-gray-200 text-black px-5 py-1 rounded-full font-semibold text-sm hover:bg-gray-300 transition w-full"
          >
            Resume
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
