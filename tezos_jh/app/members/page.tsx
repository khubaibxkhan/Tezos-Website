"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Crown, Mail, Phone, MapPin, Github, Linkedin, Twitter, Users, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import { teamData, Member } from "@/data/teamData";

export default function MembersPage() {
  const [selectedTeam, setSelectedTeam] = useState<string>("Tech Team");
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  const members = teamData[selectedTeam] || [];
  const teams = Object.keys(teamData);

  // Function to check if member should have crown (head, cohead, coordinator roles)
  const shouldShowCrown = (role: string) => {
    const crownRoles = ['head', 'co-head', 'cohead', 'coordinator', 'lead', 'director'];
    return crownRoles.some(crownRole => role.toLowerCase().includes(crownRole));
  };

  const TeamSelector = () => (
    <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
      {teams.map((team) => (
        <motion.button
          key={team}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setSelectedTeam(team);
            setSelectedMember(null);
          }}
          className={`group relative px-6 py-3 rounded-2xl font-semibold transition-all duration-300 overflow-hidden ${
            selectedTeam === team
              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30'
              : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white backdrop-blur-sm border border-white/20'
          }`}
        >
          <span className="relative z-10 flex items-center space-x-2">
            <Users className="w-4 h-4" />
            <span>{team}</span>
          </span>
          {selectedTeam !== team && (
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/20 to-pink-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          )}
        </motion.button>
      ))}
    </div>
  );

  const MemberCard = ({ member, isSelected, onClick }: { member: Member, isSelected: boolean, onClick: (member: Member) => void }) => (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onClick(member)}
      className={`group cursor-pointer p-6 rounded-2xl border backdrop-blur-md transition-all duration-300 ${
        isSelected
          ? 'bg-gradient-to-br from-purple-600/20 to-pink-600/20 border-purple-500/50 shadow-xl shadow-purple-500/20'
          : 'bg-white/5 hover:bg-white/10 border-white/10 hover:border-purple-500/30'
      }`}
    >
      <div className="flex items-start space-x-4">
        <div className="relative flex-shrink-0">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center border border-purple-500/30 overflow-hidden">
            {member.image ? (
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-2xl font-bold text-purple-300">
                {member.name.charAt(0)}
              </span>
            )}
          </div>
          {shouldShowCrown(member.position) && (
            <motion.div 
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-yellow-500 p-1.5 rounded-full shadow-lg"
            >
              <Crown className="w-4 h-4 text-white" />
            </motion.div>
          )}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2 mb-1">
            {shouldShowCrown(member.position) && (
              <Crown className="w-4 h-4 text-yellow-400 flex-shrink-0" />
            )}
            <h3 className="text-white font-bold text-lg truncate group-hover:text-purple-200 transition-colors">
              {member.name}
            </h3>
          </div>
          <p className="text-purple-300 text-sm font-medium mb-2 truncate">
            {member.position}
          </p>
          <div className="flex items-center space-x-2">
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-green-400 rounded-full"
            />
            <span className="text-xs text-green-400 font-medium">Active</span>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const MemberDetails = ({ member }: { member: Member }) => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/20 overflow-hidden max-w-2xl mx-auto"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600/30 via-pink-600/20 to-purple-600/30 p-8 text-center">
        <div className="relative inline-block mb-6">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="w-32 h-32 rounded-3xl bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center border-4 border-purple-500/30 overflow-hidden shadow-2xl"
          >
            {member.image ? (
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-4xl font-bold text-purple-300">
                {member.name.charAt(0)}
              </span>
            )}
          </motion.div>
          {shouldShowCrown(member.position) && (
            <motion.div 
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 p-3 rounded-2xl shadow-2xl"
            >
              <Crown className="w-8 h-8 text-white" />
            </motion.div>
          )}
        </div>
        
        <div className="flex items-center justify-center space-x-3 mb-3">
          {shouldShowCrown(member.position) && (
            <Crown className="w-6 h-6 text-yellow-400" />
          )}
          <h2 className="text-3xl font-bold text-white">
            {member.name}
          </h2>
        </div>
        
        <div className="inline-block bg-gradient-to-r from-purple-500/40 to-pink-500/40 backdrop-blur-sm border border-purple-400/30 rounded-2xl px-6 py-2 mb-4">
          <p className="text-purple-200 font-semibold text-lg">{member.position}</p>
        </div>
        
        {member.bio && (
          <p className="text-gray-300 leading-relaxed max-w-lg mx-auto">
            {member.bio}
          </p>
        )}
      </div>

      {/* Contact Information */}
      <div className="p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {member.gmail && (
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10"
            >
              <div className="flex items-center space-x-3">
                <div className="bg-purple-500/20 p-2 rounded-xl">
                  <Mail className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Email</p>
                  <p className="text-white font-medium break-all">{member.gmail}</p>
                </div>
              </div>
            </motion.div>
          )}
          
          {member.phone && (
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10"
            >
              <div className="flex items-center space-x-3">
                <div className="bg-green-500/20 p-2 rounded-xl">
                  <Phone className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Phone</p>
                  <p className="text-white font-medium">{member.phone}</p>
                </div>
              </div>
            </motion.div>
          )}
          
          {member.location && (
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 sm:col-span-2"
            >
              <div className="flex items-center space-x-3">
                <div className="bg-blue-500/20 p-2 rounded-xl">
                  <MapPin className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Location</p>
                  <p className="text-white font-medium">{member.location}</p>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Social Links */}
        {(member.github || member.linkedin || member.x) && (
          <div className="flex justify-center space-x-4">
            {member.github && (
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={`https://github.com/${member.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-gray-600/20 p-3 rounded-2xl transition-all duration-300 border border-white/10 hover:border-gray-500/30"
              >
                <Github className="w-6 h-6 text-gray-300 hover:text-white" />
              </motion.a>
            )}
            {member.linkedin && (
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={`https://linkedin.com/in/${member.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-blue-600/20 p-3 rounded-2xl transition-all duration-300 border border-white/10 hover:border-blue-500/30"
              >
                <Linkedin className="w-6 h-6 text-gray-300 hover:text-white" />
              </motion.a>
            )}
            {member.x && (
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={`https://twitter.com/${member.x}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-cyan-600/20 p-3 rounded-2xl transition-all duration-300 border border-white/10 hover:border-cyan-500/30"
              >
                <Twitter className="w-6 h-6 text-gray-300 hover:text-white" />
              </motion.a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
      {/* Import your existing Navbar */}
      <Navbar />
      
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ 
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-3xl" 
        />
      </div>

      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative py-20 px-4 text-center"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Meet Our Team
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed mb-8">
            Discover the talented individuals driving innovation at Tezos Society
          </p>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-block bg-white/5 backdrop-blur-sm border border-white/20 rounded-full px-8 py-4"
          >
            <div className="flex items-center space-x-3 text-white">
              <Users className="w-6 h-6 text-purple-400" />
              <span className="text-2xl font-semibold">{selectedTeam}</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Desktop Layout */}
        <div className="hidden lg:flex gap-8 min-h-[600px]">
          {/* Left Panel */}
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-1/3 space-y-6"
          >
            {/* Team Selector */}
            <div className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <Users className="w-5 h-5 text-purple-400" />
                <span>Select Team</span>
              </h3>
              <TeamSelector />
            </div>
            
            {/* Members List */}
            <div className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-6 flex-1 max-h-[500px] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white flex items-center space-x-2">
                  <Sparkles className="w-6 h-6 text-purple-400" />
                  <span>Members</span>
                </h3>
                <div className="bg-purple-500/20 backdrop-blur-sm rounded-full px-3 py-1 text-sm text-purple-300 font-medium">
                  {members.length}
                </div>
              </div>
              {/* Member Cards List */}
              <div className="space-y-3">
                {members.map((member) => (
                  <MemberCard
                    key={member.name}
                    member={member}
                    isSelected={selectedMember?.name === member.name}
                    onClick={setSelectedMember}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Panel - Member Details */}
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex items-start justify-center pt-6"
          >
            {selectedMember ? (
              <MemberDetails member={selectedMember} />
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-center py-20 max-w-lg"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-12">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Users className="w-20 h-20 text-purple-400 mx-auto mb-6 opacity-50" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-300 mb-4">Select a Team Member</h3>
                  <p className="text-gray-500 leading-relaxed">
                    Choose a member from the left panel to view their detailed profile.
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-6">
          {/* Team Selector */}
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-6"
          >
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
              <Users className="w-5 h-5 text-purple-400" />
              <span>Select Team</span>
            </h3>
            <TeamSelector />
          </motion.div>
          
          {/* Members Grid */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white flex items-center space-x-2">
                <Sparkles className="w-6 h-6 text-purple-400" />
                <span>Team Members</span>
              </h3>
              <div className="bg-purple-500/20 backdrop-blur-sm rounded-full px-3 py-1 text-sm text-purple-300 font-medium">
                {members.length}
              </div>
            </div>
            {/* Member Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {members.map((member) => (
                <MemberCard
                  key={member.name}
                  member={member}
                  isSelected={selectedMember?.name === member.name}
                  onClick={setSelectedMember}
                />
              ))}
            </div>
          </motion.div>
          
          {/* Selected Member Details */}
          {selectedMember ? (
            <MemberDetails member={selectedMember} />
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center py-12 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10"
            >
              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity }
                }}
              >
                <Users className="w-16 h-16 text-purple-400 mx-auto mb-4 opacity-50" />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-300 mb-2">Select a Team Member</h3>
              <p className="text-gray-500">Tap on any member above to view their details</p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}