"use client";

import { motion } from "framer-motion";

export default function MemberPageHero({ teamName }: { teamName: string }) {
  return (
    <div className="relative flex items-center justify-center py-10">
      <motion.div
        className="absolute w-72 h-72 bg-purple-700/40 rounded-full blur-[120px] -z-10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.8, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      {/*  Team Heading Text */}
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 drop-shadow-lg tracking-wide"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        {teamName}
      </motion.h1>

    </div>
  );
}