"use client";

import React, { useState, useEffect } from 'react';
import { Users, Heart, Sparkles, Code2, Palette, FileText, ExternalLink } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  icon: React.ReactNode;
  color: string;
  linkedin?: string;
  image?: string; // Optional image URL
}

const Credits: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const teamMembers: TeamMember[] = [
    { 
      name: 'Khubaib', 
      role: 'Lead Developer', 
      icon: <Code2 className="w-5 h-5" />, 
      color: 'from-purple-500 to-violet-600',
      linkedin: 'https://linkedin.com/in/khubaib',
      // image: '/path-to-khubaib-image.jpg' // Add image path here
    },
    { 
      name: 'Taaha', 
      role: 'Developer', 
      icon: <Code2 className="w-5 h-5" />, 
      color: 'from-violet-500 to-purple-600',
      linkedin: 'https://linkedin.com/in/taha',
      // image: '/path-to-taha-image.jpg'
    },
    { 
      name: 'Aatika kamal', 
      role: 'Developer', 
      icon: <Code2 className="w-5 h-5" />, 
      color: 'from-purple-500 to-fuchsia-600',
      linkedin: 'https://linkedin.com/in/aatika',
      // image: '/path-to-aatika-image.jpg'
    },
    { 
      name: 'Laiba Zeeai', 
      role: 'Developer', 
      icon: <Code2 className="w-5 h-5" />, 
      color: 'from-fuchsia-500 to-purple-600',
      linkedin: 'https://linkedin.com/in/laiba-zeeai',
      // image: '/path-to-laiba-image.jpg'
    },
    { 
      name: 'Heba Faisal', 
      role: 'Content Manager', 
      icon: <FileText className="w-5 h-5" />, 
      color: 'from-pink-500 to-violet-600',
      linkedin: 'https://linkedin.com/in/heba-faisal',
      // image: '/path-to-heba-image.jpg'
    },
    { 
      name: 'Areeba Aslam', 
      role: 'Content Manager', 
      icon: <FileText className="w-5 h-5" />, 
      color: 'from-violet-500 to-pink-600',
      linkedin: 'https://linkedin.com/in/areeba',
      // image: '/path-to-areeba-image.jpg'
    },
    { 
      name: 'Rakshanda Noor', 
      role: 'UI/UX Designer', 
      icon: <Palette className="w-5 h-5" />, 
      color: 'from-indigo-500 to-purple-600',
      linkedin: 'https://linkedin.com/in/rakshanda',
      // image: '/path-to-rakshanda-image.jpg'
    },
    { 
      name: 'Raina Maryam', 
      role: 'UI/UX Designer', 
      icon: <Palette className="w-5 h-5" />, 
      color: 'from-purple-500 to-indigo-600',
      linkedin: 'https://linkedin.com/in/raina',
      // image: '/path-to-raina-image.jpg'
    }
  ];

  const technologies = ['Next.js', 'React', 'Tailwind CSS', 'HTML5'];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleCardClick = (member: TeamMember) => {
    if (member.linkedin) {
      window.open(member.linkedin, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 relative overflow-hidden">
      {/* Beautiful Dark Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Bubbles */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-64 h-64 bg-violet-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 left-1/3 w-64 h-64 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
        
        {/* Floating Hearts */}
        <div className="absolute top-32 right-32 text-purple-400 opacity-30 animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}>
          <Heart className="w-8 h-8 fill-current" />
        </div>
        <div className="absolute bottom-40 left-20 text-violet-400 opacity-30 animate-bounce" style={{animationDelay: '1.5s', animationDuration: '3s'}}>
          <Heart className="w-6 h-6 fill-current" />
        </div>
        <div className="absolute top-1/2 left-16 text-fuchsia-400 opacity-30 animate-bounce" style={{animationDelay: '3s', animationDuration: '3s'}}>
          <Heart className="w-5 h-5 fill-current" />
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: 'linear-gradient(rgba(147, 51, 234, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(147, 51, 234, 0.3) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Header Section */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full mb-8 shadow-xl shadow-purple-500/50 hover:scale-110 transition-transform duration-300">
            <Sparkles className="w-10 h-10 text-white animate-pulse" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent mb-6">
            Our Amazing Team
          </h1>
          
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 via-violet-500 to-fuchsia-500 mx-auto mb-8 rounded-full"></div>
          
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Meet the wonderful people who crafted this website with passion, creativity, and lots of love ❤️
          </p>
          
          <p className="text-purple-300 text-sm mt-4 opacity-80">
            Click on any card to visit their LinkedIn profile
          </p>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-gray-800/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-700/50 text-center hover:shadow-2xl hover:scale-105 hover:border-purple-500/50 transition-all duration-300 group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-500 rounded-2xl mb-6 shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent mb-3">{teamMembers.length}</div>
            <div className="text-gray-300 font-medium">Talented Members</div>
          </div>
          
          <div className="bg-gray-800/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-700/50 text-center hover:shadow-2xl hover:scale-105 hover:border-violet-500/50 transition-all duration-300 group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-2xl mb-6 shadow-lg group-hover:shadow-violet-500/50 transition-all duration-300">
              <Code2 className="w-8 h-8 text-white" />
            </div>
            <div className="text-4xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent mb-3">{technologies.length}</div>
            <div className="text-gray-300 font-medium">Technologies Used</div>
          </div>
          
          <div className="bg-gray-800/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-700/50 text-center hover:shadow-2xl hover:scale-105 hover:border-fuchsia-500/50 transition-all duration-300 group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-fuchsia-500 to-pink-500 rounded-2xl mb-6 shadow-lg group-hover:shadow-fuchsia-500/50 transition-all duration-300">
              <Heart className="w-8 h-8 text-white fill-current" />
            </div>
            <div className="text-4xl font-bold bg-gradient-to-r from-fuchsia-400 to-pink-400 bg-clip-text text-transparent mb-3">2025</div>
            <div className="text-gray-300 font-medium">Made With Love</div>
          </div>
        </div>

        {/* Technologies Section */}
        <div className={`text-center mb-16 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h3 className="text-2xl font-bold text-white mb-8">Built With Modern Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-800/60 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-gray-700/50 hover:shadow-xl hover:scale-110 hover:border-purple-500/50 transition-all duration-300 group cursor-pointer"
              >
                <span className="text-gray-300 font-medium group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-violet-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Team Grid */}
        <div className={`transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl font-bold text-center text-white mb-12">Our Development Family</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`bg-gray-800/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-700/50 text-center transition-all duration-500 cursor-pointer group relative overflow-hidden ${
                  hoveredCard === index ? 'scale-110 shadow-2xl border-purple-500/70' : 'hover:scale-105 hover:shadow-2xl hover:border-purple-500/50'
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => handleCardClick(member)}
              >
                {/* Click indicator */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="w-4 h-4 text-purple-400" />
                </div>

                {/* Profile Image or Avatar */}
                <div className="relative mb-6 mx-auto">
                  {member.image ? (
                    <div className={`w-20 h-20 rounded-full overflow-hidden shadow-xl transition-all duration-500 group-hover:shadow-2xl ${
                      hoveredCard === index ? 'animate-pulse ring-4 ring-purple-500/50' : ''
                    }`}>
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to gradient avatar if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = target.nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                      {/* Fallback gradient avatar */}
                      <div className={`w-20 h-20 bg-gradient-to-r ${member.color} rounded-full flex items-center justify-center shadow-xl transition-all duration-500 group-hover:shadow-2xl ${
                        hoveredCard === index ? 'animate-pulse' : ''
                      }`} style={{display: 'none'}}>
                        <span className="text-white font-bold text-2xl">
                          {member.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                    </div>
                  ) : (
                    // Default gradient avatar
                    <div className={`w-20 h-20 bg-gradient-to-r ${member.color} rounded-full flex items-center justify-center shadow-xl transition-all duration-500 group-hover:shadow-2xl ${
                      hoveredCard === index ? 'animate-pulse ring-4 ring-purple-500/50' : ''
                    }`}>
                      <span className="text-white font-bold text-2xl">
                        {member.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                  )}
                </div>
                
                {/* Role Icon */}
                <div className={`inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r ${member.color} rounded-xl mb-4 shadow-lg opacity-90 group-hover:opacity-100 transition-all duration-300`}>
                  <div className="text-white">
                    {member.icon}
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-white font-bold text-xl mb-2 group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-violet-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {member.name}
                </h3>
                <p className="text-gray-300 font-medium group-hover:text-gray-100 transition-colors duration-300">
                  {member.role}
                </p>

                {/* LinkedIn indicator */}
                {member.linkedin && (
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-xs text-purple-300 flex items-center justify-center gap-1">
                      <ExternalLink className="w-3 h-3" />
                      <span>View LinkedIn</span>
                    </div>
                  </div>
                )}

                {/* Hover Hearts */}
                {hoveredCard === index && (
                  <div className="absolute inset-0 pointer-events-none">
                    <Heart className="absolute top-2 left-2 w-4 h-4 text-pink-400 fill-current animate-ping" />
                    <Heart className="absolute bottom-2 right-2 w-3 h-3 text-purple-400 fill-current animate-ping" style={{animationDelay: '0.5s'}} />
                    <Heart className="absolute top-1/2 right-2 w-2 h-2 text-violet-400 fill-current animate-ping" style={{animationDelay: '1s'}} />
                  </div>
                )}

                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${member.color} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Love Message */}
        <div className={`bg-gradient-to-r from-gray-800/80 via-purple-900/80 to-gray-800/80 backdrop-blur-sm rounded-3xl p-12 mt-16 text-center shadow-2xl border border-gray-700/50 transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex justify-center items-center gap-3 mb-6">
            <Heart className="w-8 h-8 text-red-400 fill-current animate-pulse" />
            <Heart className="w-10 h-10 text-pink-400 fill-current animate-pulse" style={{animationDelay: '0.5s'}} />
            <Heart className="w-8 h-8 text-red-400 fill-current animate-pulse" style={{animationDelay: '1s'}} />
          </div>
          
          <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent mb-6">
            Made with Love by Our Amazing Society Team
          </h3>
          
          <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto mb-8">
            Every line of code, every design element, and every feature was crafted with passion, dedication, and lots of love. 
            This project represents not just our technical skills, but the beautiful collaboration and friendship within our tech society family. ✨
          </p>

          <div className="flex justify-center items-center gap-2 text-gray-400">
            <Heart className="w-5 h-5 text-pink-400 fill-current" />
            <span className="font-medium">© 2025 Tech Society</span>
            <Heart className="w-5 h-5 text-pink-400 fill-current" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Credits;