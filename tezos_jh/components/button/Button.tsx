"use client";

import { motion } from "framer-motion";

export default function Button({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05, backgroundColor: "#6b21a8" }}
      whileTap={{ scale: 0.95 }}
      className="px-4 py-2 min-w-[120px] text-sm font-semibold text-white bg-purple-800/70 hover:bg-purple-700 transition-all rounded-lg shadow-md border border-purple-600 text-center"
    >
      {text}
    </motion.button>
  );
}
