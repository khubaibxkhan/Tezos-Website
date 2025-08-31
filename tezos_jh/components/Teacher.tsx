'use client';

import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Teachers } from 'next/font/google';

interface TeacherC {
  id: number;
  name: string;
  position: string;
  image: string;
  github?: string;
  linkedin?: string;
  email?: string;
}

const TeacherC: React.FC = () => {
  // Sample data - replace with your actual data
  const profiles: TeacherC[] = [
    {
      id: 1,
      name: "Tabish Mufti",
      position: "Teacher Co-ordinator",
      image: "/sir.jpg",
      github: "#",
      linkedin: "#",
      email: "#"
    },
    {
      id: 2,
      name: "Gautami Tripathi",
      position: "Teacher Co-ordinator",
      image: "/gautmi_mam.jpg",
      github: "#",
      linkedin: "#",
      email: "#"
    }
  ];

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Meet Our Teachers
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r mb-[40px] from-purple-500 to-purple-300 mx-auto rounded-full"></div>
      </div>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-3xl mx-auto px-2 sm:px-0">
        {profiles.map((profile) => (
          <div
            key={profile.id}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-xl border border-purple-500/30 overflow-hidden hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105 group"
          >
            {/* Image Section */}
            <div className="relative h-40 sm:h-48 bg-gradient-to-br from-purple-600/20 to-blue-600/20 flex items-center justify-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-purple-500/50 group-hover:border-purple-400 transition-colors duration-300">
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative network pattern overlay */}
              <div className="absolute inset-0 opacity-10">
                <div className="w-full h-full bg-gradient-to-br from-purple-400/10 to-blue-400/10"></div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-4 sm:p-6 text-center">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                {profile.name}
              </h3>
              <p className="text-gray-400 text-sm mb-3 sm:mb-4 font-medium">
                {profile.position}
              </p>

              {/* Social Links */}
              <div className="flex justify-center space-x-4">
                {profile.github && (
                  <a
                    href={profile.github}
                    className="w-10 h-10 bg-gray-700/50 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors duration-300 group/icon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5 text-gray-300 group-hover/icon:text-white" />
                  </a>
                )}
                {profile.linkedin && (
                  <a
                    href={profile.linkedin}
                    className="w-10 h-10 bg-gray-700/50 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300 group/icon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-5 h-5 text-gray-300 group-hover/icon:text-white" />
                  </a>
                )}
                {profile.email && (
                  <a
                    href={`mailto:${profile.email}`}
                    className="w-10 h-10 bg-gray-700/50 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors duration-300 group/icon"
                  >
                    <Mail className="w-5 h-5 text-gray-300 group-hover/icon:text-white" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherC;