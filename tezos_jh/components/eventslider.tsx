import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CarouselSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Sample event data - replace with your actual events
  const events = [
    {
      id: 1,
      title: "Pathfinder’25 ",
      date: "27th August 2025",
      description: "Introducing Tezos JH club for the new students",
      image: "/events/pathfinder.jpg"
    },
    {
      id: 2,
      title: "Build on Azure (Microsoft)",
      date: "4th September 2024",
      description: "Revealing the tezos website, and introducing Blockchain, Devops,Cybersecurity",
      image: "/events/azure.jpg"
    },
    {
      id: 3,
      title: "Profile Building ",
      date: "2nd October 2024",
      description: "Version control and collaborative coding",
      image: "/events/profile.jpg"
    },
    {
      id: 4,
      title: "Hacktoberfest: Build-a-thon",
      date: "15th October 2024",
      description: "Web development, open-source contributions",
      image: "/e4.png"
    },
    {
      id: 5,
      title: "Supermove Tour with Spheron x Aptos",
      date: "15th October 2024",
      description: "Web3 wallet integration and Aptos deployment.",
      image: "/e5.png"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % events.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, events.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + events.length) % events.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-transparent py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white mb-6">
            Past Events
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-purple-300 mx-auto rounded-full"></div>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative overflow-hidden rounded-3xl border-4 border-purple-800/40 shadow-2xl shadow-purple-500/20"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Main Carousel */}
          <div className="relative h-96 md:h-[600px]">
            {events.map((event, index) => (
              <div
                key={event.id}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === currentSlide 
                    ? 'opacity-100 translate-x-0' 
                    : index < currentSlide 
                      ? 'opacity-0 -translate-x-full' 
                      : 'opacity-0 translate-x-full'
                }`}
              >
                {/* Background Image */}
                <div className="relative w-full h-full group">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
                  
                  {/* Content Overlay - Only visible on hover */}
                  <div className="absolute inset-0 flex items-end p-8 md:p-12 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-8 group-hover:translate-y-0">
                    <div className="text-white max-w-2xl">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-4 text-purple-300 text-sm md:text-base">
                          <span className="px-3 py-1 bg-purple-600/30 rounded-full border border-purple-400/30">
                            {event.date}
                          </span>
                          <span>{event.location}</span>
                        </div>
                        
                        <h3 className="text-2xl md:text-4xl font-bold text-white leading-tight">
                          {event.title}
                        </h3>
                        
                        <p className="text-gray-200 text-lg md:text-xl leading-relaxed">
                          {event.description}
                        </p>
                        
                        <button className="mt-6 px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Hover Indicator */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-black/50 backdrop-blur-sm rounded-full p-3 border border-purple-400/30">
                      <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 backdrop-blur-sm hover:bg-black/70 text-white rounded-full border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 backdrop-blur-sm hover:bg-black/70 text-white rounded-full border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25"
          >
            <ChevronRight size={24} />
          </button>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-black/50">
            <div 
              className="h-full bg-gradient-to-r from-purple-500 to-purple-300 transition-all duration-700 ease-out"
              style={{ width: `${((currentSlide + 1) / events.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex justify-center mt-8 space-x-3 md:space-x-4">
          {events.map((event, index) => (
            <button
              key={event.id}
              onClick={() => goToSlide(index)}
              className={`relative group transition-all duration-300 ${
                index === currentSlide ? 'scale-110' : 'hover:scale-105'
              }`}
            >
              <div className={`w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                index === currentSlide 
                  ? 'border-purple-400 shadow-lg shadow-purple-500/50' 
                  : 'border-purple-600/40 hover:border-purple-500/60'
              }`}>
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              {/* Active indicator */}
              {index === currentSlide && (
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-purple-400 rounded-full"></div>
              )}
            </button>
          ))}
        </div>

        {/* Auto-play indicator */}
        <div className="text-center mt-8">
          <div className="flex items-center justify-center space-x-2 text-purple-300">
            <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              isAutoPlaying ? 'bg-purple-400 animate-pulse' : 'bg-gray-600'
            }`}></div>
            <span className="text-sm">
              {isAutoPlaying ? 'Auto-playing' : 'Paused on hover'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselSlider;