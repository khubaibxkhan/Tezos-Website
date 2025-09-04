import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Code, Camera, Palette, BarChart3, Shield, Users } from 'lucide-react';

interface Team {
  id: number;
  name: string;
  description: string;
  image: string;
  details: string;
  memberCount: number;
  technologies: string[];
  icon: React.ReactNode;
  color: string;
}

const TeamSliderCards: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Teams data
  const teams: Team[] = [
    {
      id: 1,
      name: "CONTENT TEAM",
      description: "Transforming ideas into words that inform, inspire, and spark innovation. ",
      image: "/tech.jpg",
      details: "The Content Team gives ideas a powerful voice, turning abstract thoughts into impactful words. They craft engaging narratives around innovation, technology, and community, ensuring every message is clear, meaningful, and inspiring. Through their work, vision transforms into stories that connect deeply with people.",
      memberCount: 6,
      technologies: ["Hashnode", "Medium", "Conversational AI",],
      icon: <Code className="w-6 h-6" />,
      color: "bg-blue-500"
    },
    {
      id: 2,
      name: "GRAPHICS TEAM",
      description: "Designing visuals that capture imagination and make innovation unforgettable.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      details: " The Graphics Team turns creativity into visuals that speak louder than words. From posters to digital designs, they capture the spirit of technology and community. Their designs leave lasting impressions, making every initiative stand out with clarity, imagination, and originality.",
      memberCount: 4,
      technologies: ["Adobe Illustrator", "Affinity", "Figma", "Canva"],
      icon: <Camera className="w-6 h-6" />,
      color: "bg-purple-500"
    },
    {
      id: 3,
      name: "TECH TEAM",
      description: "Driving innovation with technology that empowers, connects, and creates impact.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
      details: " The Tech Team is the backbone of innovation, powering seamless digital solutions and technical excellence. They build, optimize, and manage platforms that ensure smooth functioning. With problem-solving skills and creativity, they transform technology into tools that empower ideas and drive growth.",
      memberCount: 6,
      technologies: ["Next js", "Tailwind", "Node js", "", "InVision"],
      icon: <Palette className="w-6 h-6" />,
      color: "bg-pink-500"
    },
    {
      id: 4,
      name: "MEDIA TEAM",
      description: "Capturing stories, preserving moments, and amplifying voices that matter.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      details: " The Media Team preserves milestones and memories through the lens of creativity. They capture stories with photography, videography, and production, amplifying voices and highlighting achievements. Their work ensures that every initiative is remembered, celebrated, and shared with audiences beyond the moment.",
      memberCount: 4,
      technologies: ["Python", "R", "Tableau", "Google Analytics", "SQL"],
      icon: <BarChart3 className="w-6 h-6" />,
      color: "bg-green-500"
    },
    {
      id: 5,
      name: "Social Media Team",
      description: "Building digital presence with creativity, consistency, and meaningful connections.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
      details: "The Social Media Team carries the community’s voice into the digital world. Through engaging posts, creative campaigns, and consistent interaction, they shape a strong online presence. Their efforts foster awareness, connection, and engagement, making technology and innovation accessible to all.",
      memberCount: 7,
      technologies: ["Penetration Testing", "Firewall Management", "Encryption", "SIEM"],
      icon: <Shield className="w-6 h-6" />,
      color: "bg-red-500"
    },
    {
      id: 6,
      name: "Public Relations (PR) Team",
      description: "Building trust, creating connections, and strengthening community image everywhere.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
      details: "The PR Team bridges connections between the community and the wider world. They manage communication with professionalism, expand outreach, and ensure a strong, positive image. Through trust and relationship-building, they amplify initiatives and create networks that strengthen the brand.",
      memberCount: 0,
      technologies: ["Penetration Testing", "Firewall Management", "Encryption", "SIEM"],
      icon: <Shield className="w-6 h-6" />,
      color: "bg-red-500"
    },
    {
      id: 7,
      name: "Event Management Team",
      description: "Turning ideas into seamless events and unforgettable experiences",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
      details: " The Event Management Team transforms vision into experiences that inspire. From planning to flawless execution, they ensure every gathering, seminar, or workshop is impactful and seamless. Their dedication to detail turns ideas into events that bring people together meaningfully.s",
      memberCount: 0,
      technologies: ["Penetration Testing", "Firewall Management", "Encryption", "SIEM"],
      icon: <Shield className="w-6 h-6" />,
      color: "bg-red-500"
    }
  ];

  const totalSlides = teams.length;

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleCardClick = (teamId: number) => {
    // Navigate to members page
    window.location.href = `/members/${teamId}`;
  };

  return (
    
    <div className="w-full max-w-2xl mx-auto p-4">

        <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
        Our Teams
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r mb-[40px] from-purple-500 to-purple-300 mx-auto rounded-full"></div>
      </div>


      <div className="relative">
        {/* Main Slider Container */}
        <div className="relative overflow-hidden rounded-2xl bg-transparent">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {teams.map((team) => (
              <div
                key={team.id}
                className="w-full flex-shrink-0 cursor-pointer group"
                onClick={() => handleCardClick(team.id)}
              >
                <div className="relative bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm overflow-hidden transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-purple-500/50 group-hover:-translate-y-2 shadow-lg shadow-purple-500/30 border border-purple-500/20">
                  {/* Image Section */}
                  <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                    <img
                      src={team.image}
                      alt={team.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    
                    {/* Team Icon & Member Count */}
                    <div className="absolute top-4 left-4 flex items-center space-x-2">
                      <div className={`${team.color} p-2 rounded-lg text-white`}>
                        {team.icon}
                      </div>
                    </div>
                    
                    <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 px-3 py-1 rounded-full text-sm font-medium">
                      <Users className="w-4 h-4 inline mr-1" />
                      {team.memberCount} members
                    </div>

                    {/* Team Name Overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1">
                        {team.name}
                      </h3>
                      <p className="text-white/90 text-sm sm:text-base">
                        {team.description}
                      </p>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-4 sm:p-6">
                    <div className="space-y-4">
                      {/* Team Details */}
                      <p className="text-gray-200 leading-relaxed text-sm sm:text-base">
                        {team.details}
                      </p>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-sm font-semibold text-white mb-2">
                          Key Technologies:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {team.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className={`${team.color} text-white px-3 py-1 rounded-full text-xs font-medium`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* View Members Button */}
                      <div className="pt-4">
                        <div className="inline-flex items-center text-sm font-medium group-hover:underline">
                          <span className={`${team.color.replace('bg-', 'text-')}`}>
                            View Team Members
                          </span>
                          <ChevronRight className={`w-4 h-4 ml-1 transition-transform group-hover:translate-x-1 ${team.color.replace('bg-', 'text-')}`} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-purple-500/20 hover:bg-purple-500/40 backdrop-blur-sm p-2 rounded-full shadow-lg shadow-purple-500/30 transition-all duration-200 hover:scale-105 z-10 border border-purple-500/30"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-purple-500/20 hover:bg-purple-500/40 backdrop-blur-sm p-2 rounded-full shadow-lg shadow-purple-500/30 transition-all duration-200 hover:scale-105 z-10 border border-purple-500/30"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {teams.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex
                ? 'bg-purple-500 scale-125 shadow-lg shadow-purple-500/50'
                : 'bg-white/30 hover:bg-white/50 border border-purple-300/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="mt-4 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1">
        <div 
          className="bg-purple-500 h-1 rounded-full transition-all duration-500"
          style={{ width: `${((currentIndex + 1) / totalSlides) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default TeamSliderCards;