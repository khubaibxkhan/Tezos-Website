"use client";

import { motion } from "framer-motion";
import {
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaXTwitter,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa6";
import { Member } from "@/data/teamData";

export default function MemberDetails({ member }: { member: Member }) {
  // Social links array
  const socialLinks = [
    {
      icon: <FaInstagram />,
      link: member.instagram,
      color: "hover:text-pink-500",
    },
    {
      icon: <FaLinkedin />,
      link: member.linkedin,
      color: "hover:text-blue-500",
    },
    {
      icon: <FaWhatsapp />,
      link: member.whatsapp,
      color: "hover:text-green-500",
    },
    {
      icon: <FaXTwitter />,
      link: member.x,
      color: "hover:text-gray-400",
    },
    {
      icon: <FaGithub />,
      link: member.github,
      color: "hover:text-white",
    },
    {
      icon: <FaEnvelope />,
      link: member.gmail,
      color: "hover:text-red-500",
    },
  ];

  return (
    <motion.div
      className="w-full max-w-3xl bg-black/70 rounded-3xl p-12 shadow-2xl border border-purple-700 flex flex-col items-center backdrop-blur-xl transition-all duration-300"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, type: "spring" }}
    >
      {/* Member Image */}
      <motion.img
        src={member.image}
        alt={member.name}
        className="w-72 h-96 object-cover rounded-2xl border-2 border-purple-600 shadow-lg"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        whileHover={{ scale: 1.08 }}
      />

      {/* Name & Course */}
      <motion.h2 className="mt-6 text-3xl font-extrabold text-purple-300">
        {member.name}
      </motion.h2>
      <motion.p className="text-lg text-gray-400">{member.course}</motion.p>

      {/* Social Icons */}
      <motion.div className="flex gap-8 mt-8 text-3xl">
        {socialLinks.map((social, i) => (
          <motion.a
            key={i}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`${social.color} transition-transform`}
            whileHover={{ y: -6, scale: 1.15 }}
          >
            {social.icon}
          </motion.a>
        ))}
      </motion.div>

      {/* Bio */}
      <motion.p className="mt-8 text-center text-gray-300 text-lg leading-relaxed max-w-2xl">
        {member.bio}
      </motion.p>
    </motion.div>
  );
}