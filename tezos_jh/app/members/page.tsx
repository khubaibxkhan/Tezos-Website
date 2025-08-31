"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import MemberPageHero from "@/components/MemberPageHero";
import MemberList from "@/components/MemberList";
import MemberDetails from "@/components/MemberDetails";
import TeamButton from "@/components/button/TeamButtons";
import { teamData, Member } from "@/data/teamData";

export default function MembersPage() {
  const [selectedTeam, setSelectedTeam] = useState<string>("Tech Team");
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  const members = teamData[selectedTeam] || [];

  return (
    <div className="min-h-screen relative text-white flex flex-col overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black via-purple-950 to-black" />

      {/* Floating Glows */}
      <motion.div
        className="absolute top-20 left-20 w-72 h-72 bg-purple-700 rounded-full blur-[150px] opacity-30 -z-10"
        animate={{ x: [0, 40, -30, 0], y: [0, -30, 40, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-pink-600 rounded-full blur-[180px] opacity-20 -z-10"
        animate={{ x: [0, -50, 30, 0], y: [0, 40, -30, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Hero */}
      <MemberPageHero teamName={selectedTeam} />

      {/* Layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Desktop Sidebar */}
        <motion.div
          className="hidden md:flex w-1/3 flex-col bg-black/50 border-r border-purple-800 p-6 overflow-y-auto backdrop-blur-md"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6">
            <TeamButton
              onTeamSelect={(team) => {
                setSelectedTeam(team);
                setSelectedMember(null);
              }}
            />
          </div>
          <MemberList members={members} onSelectMember={setSelectedMember} />
        </motion.div>

        {/* Mobile Layout */}
        <div className="flex flex-col w-full md:hidden p-4 gap-4">
          <TeamButton
            onTeamSelect={(team) => {
              setSelectedTeam(team);
              setSelectedMember(null);
            }}
          />
          <motion.div
            className="bg-black/40 rounded-lg p-4 shadow-xl border border-purple-700 backdrop-blur-md"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <MemberList members={members} onSelectMember={setSelectedMember} />
          </motion.div>
          {selectedMember ? (
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <MemberDetails member={selectedMember} />
            </motion.div>
          ) : (
            <motion.div
              className="text-gray-400 text-center text-lg py-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Select a member to view details ✨
            </motion.div>
          )}
        </div>

        {/* Desktop Details */}
        <motion.div
          className="hidden md:flex flex-1 items-center justify-center p-8"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {selectedMember ? (
            <MemberDetails member={selectedMember} />
          ) : (
            <motion.div
              className="text-gray-400 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Select a member to view details ✨
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}