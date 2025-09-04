"use client";

import { motion } from "framer-motion";
import { Member } from "@/data/teamData";

export default function MemberList({
  members,
  onSelectMember,
}: {
  members: Member[];
  onSelectMember: (member: Member) => void;
}) {
  return (
    <div className="bg-black/40 rounded-lg p-4 shadow-xl border border-purple-700 backdrop-blur-md">
      <h2 className="text-xl font-bold mb-4 text-purple-400">Members</h2>
      <ul className="space-y-3">
        {members.map((member, index) => (
          <motion.li
            key={index}
            className="cursor-pointer flex items-center gap-3 p-3 rounded-md hover:bg-purple-800/40 transition border border-transparent hover:border-purple-700"
            onClick={() => onSelectMember(member)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-14 h-16 object-cover rounded-md border border-purple-600"
            />
            <span className="font-medium">{member.name}</span>
            <span className="font-extrabold text-red-400">{member.position}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}