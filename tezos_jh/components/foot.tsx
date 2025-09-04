import React, { useState } from "react";
import { 
  Github, Linkedin, Twitter, Instagram, Mail, Heart, ExternalLink, Users, Calendar, Code, 
  Mic, Handshake, BookOpen, Award, ArrowRight, MapPin, Phone, Globe, Zap, Target,
  ChevronRight, Star, Rocket, Play, Download, MessageCircle, Youtube
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const socialLinks = [
    { 
      name: 'GitHub', 
      icon: Github, 
      url: 'https://github.com/JamiaHamdardTezos', 
      color: 'from-gray-600 to-gray-400',
      hoverColor: 'hover:shadow-gray-500/25',
      description: 'Open source projects & code'
    },
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      url: 'https://linkedin.com/company/jamia-hamdard-tezos-society', 
      color: 'from-blue-600 to-blue-400',
      hoverColor: 'hover:shadow-blue-500/25',
      description: 'Professional network & updates'
    },
    { 
      name: 'Twitter', 
      icon: Twitter, 
      url: 'https://twitter.com/JHTezos', 
      color: 'from-sky-500 to-blue-400',
      hoverColor: 'hover:shadow-sky-500/25',
      description: 'Latest news & announcements'
    },
    { 
      name: 'WhatsApp', 
      icon: MessageCircle, 
      url: 'https://wa.me/+919876543210', 
      color: 'from-green-600 to-green-400',
      hoverColor: 'hover:shadow-green-500/25',
      description: 'Quick chat & community'
    },
    { 
      name: 'YouTube', 
      icon: Youtube, 
      url: 'https://youtube.com/@JamiaHamdardTezos', 
      color: 'from-red-600 to-red-400',
      hoverColor: 'hover:shadow-red-500/25',
      description: 'Tutorials & event recordings'
    },
    { 
      name: 'Discord', 
      icon: Users, 
      url: 'https://discord.gg/jhtezos', 
      color: 'from-indigo-600 to-purple-400',
      hoverColor: 'hover:shadow-indigo-500/25',
      description: 'Join our dev community'
    },
    { 
      name: 'Instagram', 
      icon: Instagram, 
      url: 'https://instagram.com/jh_tezos_society', 
      color: 'from-pink-600 to-purple-400',
      hoverColor: 'hover:shadow-pink-500/25',
      description: 'Behind the scenes & events'
    }
  ];

  const quickActions = [
    { 
      title: 'Call for Speakers', 
      icon: Mic, 
      description: 'Share your blockchain expertise', 
      action: 'Apply Now',
      color: 'from-emerald-500 to-teal-400'
    },
    { 
      title: 'Sponsor Us', 
      icon: Handshake, 
      description: 'Partner with the future of blockchain', 
      action: 'Become Sponsor',
      color: 'from-amber-500 to-orange-400'
    },
    { 
      title: 'Join Community', 
      icon: Users, 
      description: 'Be part of 500+ blockchain enthusiasts', 
      action: 'Join Discord',
      color: 'from-purple-500 to-indigo-400'
    },
    { 
      title: 'Blog & Articles', 
      icon: BookOpen, 
      description: 'Read insights & tutorials', 
      action: 'Read Articles',
      color: 'from-rose-500 to-pink-400'
    }
  ];

  return (
    <div className="bg-slate-900 relative w-full overflow-hidden">
      {/* Connect with Us Section */}
      <section className="relative">
        {/* Animated gradient background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-slate-900/95 to-indigo-900/90"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
          {/* Floating orbs */}
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-56 h-56 bg-indigo-500/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-pink-500/5 rounded-full blur-xl animate-pulse delay-500"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-2 mb-8">
              <Zap className="text-purple-400" size={16} />
              <span className="text-purple-300 text-sm font-medium">Building the Future on Blockchain</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
              Connect with
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                Innovation
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
              Join India's most dynamic blockchain society where students, developers, and enthusiasts 
              come together to shape the decentralized future with <span className="text-purple-400 font-semibold">Tezos technology</span>.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {[
                { number: '100+', label: 'Members' },
                { number: '25+', label: 'Events' },
                { number: '15+', label: 'Workshops' },
                { number: '50+', label: 'Projects' }
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-purple-300 text-sm uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions Grid - Fully Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 mb-16">
            {quickActions.map((action, idx) => {
              const IconComponent = action.icon;
              return (
                <div
                  key={idx}
                  className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${action.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  <div className="relative">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${action.color} rounded-xl flex items-center justify-center mb-3 sm:mb-4`}>
                      <IconComponent className="text-white" size={20} />
                    </div>
                    <h3 className="text-white font-semibold text-base sm:text-lg mb-2">{action.title}</h3>
                    <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">{action.description}</p>
                    <button className="group/btn flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-300">
                      <span className="text-xs sm:text-sm font-medium">{action.action}</span>
                      <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Social Media Section with Enhanced Hover Effects */}
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-white mb-4">Follow Our Journey</h3>
            <p className="text-gray-400 mb-12 text-lg">Connect with us across all platforms</p>
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-6 max-w-6xl mx-auto">
              {socialLinks.map((social, idx) => {
                const IconComponent = social.icon;
                return (
                  <div key={idx} className="flex justify-center">
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group relative block transform transition-all duration-500 hover:scale-110 ${social.hoverColor} w-full max-w-[140px]`}
                      onMouseEnter={() => setHoveredSocial(idx)}
                      onMouseLeave={() => setHoveredSocial(null)}
                    >
                      {/* Glowing background effect */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${social.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-500 scale-125`}></div>
                      
                      {/* Main card */}
                      <div className="relative bg-white/5 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-500 min-h-[100px] sm:min-h-[120px] flex flex-col items-center justify-center">
                        <IconComponent 
                          size={28} 
                          className="text-white group-hover:scale-125 transition-all duration-500 mb-2" 
                        />
                        <span className="text-white text-xs sm:text-sm font-medium group-hover:text-purple-200 transition-colors duration-300 text-center">
                          {social.name}
                        </span>
                        
                        {/* Floating badge */}
                        <div className="absolute -top-2 -right-2 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                          <ExternalLink size={10} className="text-white" />
                        </div>
                      </div>
                      
                      {/* Tooltip */}
                      {hoveredSocial === idx && (
                        <div className="absolute -bottom-14 sm:-bottom-16 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-3 sm:px-4 py-2 rounded-lg backdrop-blur-sm border border-white/10 whitespace-nowrap z-10 animate-fadeIn max-w-[200px] text-center">
                          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black/90 rotate-45"></div>
                          {social.description}
                        </div>
                      )}
                    </a>
                  </div>
                );
              })}
            </div>
            
            {/* Social Stats - Fully Responsive */}
            <div className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto">
              {[
                { platform: 'Discord', count: '100+', label: 'Active Members' },
                { platform: 'GitHub', count: '25+', label: 'Repositories' },
                { platform: 'YouTube', count: '5K+', label: 'Views' },
                { platform: 'LinkedIn', count: '10K+', label: 'Impressions' }
              ].map((stat, idx) => (
                <div key={idx} className="text-center group cursor-pointer p-4 rounded-xl hover:bg-white/5 transition-all duration-300">
                  <div className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                    {stat.count}
                  </div>
                  <div className="text-purple-300 text-sm font-medium">{stat.platform}</div>
                  <div className="text-gray-400 text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Mail className="text-purple-400" size={24} />
              <span className="text-gray-300 text-lg">Get in touch</span>
            </div>
            <a
              href="mailto:tezossociety@jamiahamdard.ac.in"
              className="text-2xl font-semibold text-purple-400 hover:text-purple-300 transition-colors duration-300"
            >
              tezosjh@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* Advanced Main Footer */}
      <footer className="bg-slate-900 border-t border-slate-800/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-4 space-y-6">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center">
                    <Code className="text-white" size={28} />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center">
                    <Star size={12} className="text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Tezos Society
                  </h3>
                  <p className="text-gray-400 font-medium">Jamia Hamdard</p>
                </div>
              </div>
              
              <p className="text-gray-400 leading-relaxed">
                India's premier student-led blockchain society, empowering the next generation of 
                developers to build revolutionary decentralized applications on the Tezos ecosystem.
              </p>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <MapPin size={16} className="text-purple-400" />
                  <span>New Delhi, India</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Globe size={16} className="text-purple-400" />
                  <span>Global Community</span>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="lg:col-span-2 space-y-6">
              <h4 className="text-lg font-bold text-white flex items-center space-x-2">
                <Target size={18} className="text-purple-400" />
                <span>Explore</span>
              </h4>
              <ul className="space-y-3">
                {[
  { name: 'Home', href: '#home' },
  { name: 'members', href: '/members' },
  { name: 'Events', href: '#events' },
  { name: 'Credits', href: '/credits' },
  { name: 'Bootcamps', href: '#bootcamps' },
  { name: 'Hackathons', href: '#hackathons' },
  { name: 'Team', href: '#team' },
  { name: 'Alumni', href: '#alumni' },
].map(({ name, href }) => (
  <li key={name}>
    <a
      href={href}
      className="group flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-all duration-300"
    >
      <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
      <span>{name}</span>
    </a>
  </li>
))}

              </ul>
            </div>

            {/* Programs */}
            <div className="lg:col-span-3 space-y-6">
              <h4 className="text-lg font-bold text-white flex items-center space-x-2">
                <Rocket size={18} className="text-purple-400" />
                <span>Programs</span>
              </h4>
              <div className="space-y-4">
                {[
                  { name: 'Blockchain Bootcamp', status: 'Upcoming', color: 'bg-emerald-500' },
                  { name: 'Smart Contract Workshop', status: 'Live', color: 'bg-red-500' },
                  { name: 'DeFi Masterclass', status: 'Registration Open', color: 'bg-blue-500' },
                  { name: 'NFT Development', status: 'Coming Soon', color: 'bg-purple-500' }
                ].map((program, idx) => (
                  <div key={idx} className="flex items-center justify-between group cursor-pointer">
                    <div>
                      <div className="text-white text-sm font-medium group-hover:text-purple-400 transition-colors duration-300">
                        {program.name}
                      </div>
                      <div className="flex items-center space-x-2 mt-1">
                        <div className={`w-2 h-2 ${program.color} rounded-full animate-pulse`}></div>
                        <span className="text-xs text-gray-400">{program.status}</span>
                      </div>
                    </div>
                    <Play size={16} className="text-gray-400 group-hover:text-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack & Resources */}
            <div className="lg:col-span-3 space-y-6">
              <h4 className="text-lg font-bold text-white">Tech Stack & Resources</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="text-white text-sm font-semibold mb-3">Technologies</h5>
                  <div className="flex flex-wrap gap-2">
                    {['Tezos', 'Michelson', 'LIGO', 'SmartPy', 'Beacon', 'Temple Wallet'].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-slate-800 to-slate-700 hover:from-purple-600 hover:to-pink-600 text-gray-300 hover:text-white text-xs rounded-full transition-all duration-300 cursor-pointer hover:scale-105 border border-slate-600 hover:border-transparent"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h5 className="text-white text-sm font-semibold mb-3">Resources</h5>
                  <div className="space-y-2">
                    {['Documentation', 'Tutorials', 'Code Samples', 'Case Studies'].map((resource) => (
                      <a
                        key={resource}
                        href="#"
                        className="group flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors duration-300"
                      >
                        <Download size={14} />
                        <span className="text-sm">{resource}</span>
                        <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* University Banner - Responsive */}
          <div className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-slate-800">
            <div className="bg-gradient-to-r from-purple-900/20 to-indigo-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center">
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 mb-4">
                <Award className="text-purple-400" size={24} />
                <div>
                  <h5 className="text-xl sm:text-2xl font-bold text-white">Jamia Hamdard University</h5>
                  <p className="text-purple-300 text-sm sm:text-base">Fostering Innovation in Blockchain & Web3</p>
                </div>
              </div>
              <p className="text-gray-400 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
                Recognized as one of India's leading institutions for technology education, 
                supporting student-led initiatives that drive innovation in emerging technologies.
              </p>
            </div>
          </div>
        </div>

        {/* Ultra Modern Bottom Bar */}
        <div className="border-t border-slate-800/50 bg-slate-900/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
              
              {/* Copyright */}
              <div className="flex items-center space-x-3 text-gray-400 text-sm">
                <Heart size={16} className="text-purple-400 animate-pulse" />
                <span>© {currentYear} Jamia Hamdard Tezos Society</span>
                <span className="hidden md:inline">•</span>
                <span className="hidden md:inline">Crafted with passion by our dev team</span>
              </div>
              
                            <div className="flex items-center space-x-6">
                <div className="flex space-x-3">
                  {socialLinks.slice(0, 4).map((social, idx) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={idx}
                        href={social.url}
                        className={`group relative text-gray-400 hover:text-white transition-all duration-300 hover:scale-125 p-2 rounded-lg hover:bg-white/5 ${social.hoverColor}`}
                        aria-label={social.name}
                      >
                        <div className={`absolute inset-0 bg-gradient-to-r ${social.color} rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                        <IconComponent size={20} className="relative z-10" />
                        
                        {/* Mini tooltip */}
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                          {social.name}
                        </div>
                      </a>
                    );
                  })}
                  
                  {/* More platforms button */}
                  <div className="relative group">
                    <button className="text-gray-400 hover:text-purple-400 transition-all duration-300 hover:scale-125 p-2 rounded-lg hover:bg-purple-500/10">
                      <span className="text-sm font-medium">+{socialLinks.length - 4}</span>
                    </button>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      More platforms
                    </div>
                  </div>
                </div>
                
                {/* Legal Links */}
                <div className="hidden lg:flex items-center space-x-4 text-xs text-gray-500">
                  <a href="#privacy" className="hover:text-purple-400 transition-colors duration-300">Privacy</a>
                  <span>•</span>
                  <a href="#terms" className="hover:text-purple-400 transition-colors duration-300">Terms</a>
                  <span>•</span>
                  <a href="#conduct" className="hover:text-purple-400 transition-colors duration-300">Code of Conduct</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export { Footer };
export default Footer;