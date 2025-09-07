"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); // detect current route

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation Variants
  const navVariants = {
    hidden: { y: -80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, staggerChildren: 0.1 },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const links = [
    { name: "Home", path: "/" },
    { name: "Members", path: "/members" },
    { name: "Events", path: "/events" },
    { name: "Blogs", path: "/blogs" },
    { name: "Connect", path: "/connect" },
  ];

  return (
    <motion.nav
      variants ={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md shadow-lg bg-black/40" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.1 }} className="cursor-pointer">
          <Link href="/">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-10 md:h-12 lg:h-14 w-auto"
            />
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 text-white tracking-wide">
          {links.map((link, idx) => (
            <motion.div
              key={idx}
              variants={linkVariants}
              whileHover={{ scale: 1.1 }}
              className={`text-base transition-colors relative ${
                pathname === link.path ? "text-purple-400" : ""
              }`}
            >
              <Link
                href={link.path}// 👈 only Members in new tab
              >
                {link.name}
              </Link>

              {/* underline animation if active (skip for Members since it’s new tab) */}
              {pathname === link.path && link.name !== "Members" && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 -bottom-1 h-[2px] w-full bg-purple-400 rounded"
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Join Us Button (Desktop) */}
        <motion.div
          className="hidden md:block"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          <button
            className="relative bg-gradient-to-r from-purple-500 to-pink-500 
                       text-white py-2 px-6 rounded-full font-medium
                       shadow-md transition-all duration-500
                       hover:shadow-xl hover:from-pink-500 hover:to-purple-500
                       hover:scale-105 focus:outline-none"
          >
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSez2eFOWo1-tg3415GIub6zA4LhOSeAW35FSe4pbOaAJ7W6Ew/viewform">Join Us</a>
          </button>
        </motion.div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden text-white hover:text-purple-300">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden bg-black/90 backdrop-blur-md text-white uppercase text-sm tracking-wider px-6 py-6 space-y-5"
          >
            {links.map((link, idx) => (
              <motion.div
                key={idx}
                variants={linkVariants}
                whileHover={{ scale: 1.05, color: "#a855f7" }}
                onClick={() => setMenuOpen(false)}
              >
                <Link
                  href={link.path}
                  target={link.name === "Members" ? "_blank" : "_self"}
                  rel={link.name === "Members" ? "noopener noreferrer" : undefined}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}

            {/* Mobile Button */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="w-full relative bg-gradient-to-r from-purple-500 to-pink-500 
                         text-white px-5 py-2 rounded-full font-semibold text-sm
                         shadow-md transition-all duration-500
                         hover:shadow-xl hover:from-pink-500 hover:to-purple-500
                         hover:scale-105 focus:outline-none"
            >
              Join Us
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;