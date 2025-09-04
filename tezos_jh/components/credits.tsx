import React, { useState, useEffect } from 'react';
import { Users, Award, Heart, Github } from 'lucide-react';

interface TeamMember {
  name: string;
  role?: string;
}

const Credits: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const teamMembers: TeamMember[] = [
    { name: 'Khubaib', role: 'Lead Developer' },
    { name: 'Tahaa', role: 'Frontend Developer' },
    { name: 'Aatika', role: 'UI/UX Designer' },
    { name: 'Laiba Zeeai', role: 'Backend Developer' },
    { name: 'Heba', role: 'Content Manager' },
    { name: 'Areeba', role: 'Quality Assurance' },
    { name: 'Rakshanda', role: 'Project Coordinator' },
    { name: 'Raina', role: 'Research Analyst' }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-12">
          <div className={`text-center transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl mb-6 shadow-lg">
              <Award className="w-8 h-8 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h1>
            
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              The talented individuals who brought this project to life
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Stats Section */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 transform transition-all duration-700 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow duration-300">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-xl mb-4">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">{teamMembers.length}</div>
            <div className="text-gray-600">Contributors</div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow duration-300">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-4">
              <Github className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">React</div>
            <div className="text-gray-600">Technology</div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow duration-300">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-xl mb-4">
              <Heart className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">2024</div>
            <div className="text-gray-600">Built in</div>
          </div>
        </div>

        {/* Team Grid */}
        <div className={`transform transition-all duration-700 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Development Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Avatar */}
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-4 mx-auto shadow-md group-hover:shadow-lg transition-shadow duration-300">
                  <span className="text-white font-bold text-xl">
                    {member.name.charAt(0).toUpperCase()}
                  </span>
                </div>
                
                {/* Content */}
                <div className="text-center">
                  <h3 className="text-gray-900 font-semibold text-lg mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Acknowledgment Section */}
        <div className={`bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100 text-center transform transition-all duration-700 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <Heart className="w-8 h-8 text-red-500 mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Special Thanks
          </h3>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed mb-6">
            This website was created through the collaborative effort of our dedicated tech society members. 
            Each person brought their unique skills and passion to make this project a success.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span className="bg-gray-50 px-4 py-2 rounded-full">Frontend Development</span>
            <span className="bg-gray-50 px-4 py-2 rounded-full">Backend Development</span>
            <span className="bg-gray-50 px-4 py-2 rounded-full">UI/UX Design</span>
            <span className="bg-gray-50 px-4 py-2 rounded-full">Quality Assurance</span>
            <span className="bg-gray-50 px-4 py-2 rounded-full">Project Management</span>
          </div>
        </div>

        {/* Footer */}
        <div className={`text-center mt-16 transform transition-all duration-700 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="text-gray-500 text-sm mb-4">
            © 2025 Tezos Jamia Hamdard. Built with dedication and teamwork.
          </div>
          <div className="w-20 h-0.5 bg-gradient-to-r from-purple-500 to-purple-600 mx-auto rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Credits;