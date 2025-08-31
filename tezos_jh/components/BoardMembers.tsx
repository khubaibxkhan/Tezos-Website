interface BoardMember {
  id: number;
  name: string;
  position: string;
  image: string;
  github: string;
  linkedin: string;
  email: string;
}

export default function BoardMembers() {
  const boardMembers: BoardMember[] = [
    {
      id: 1,
      name: "Md Aasif",
      position: "Community Lead",
      image: "/md-aasif4.jpg", // Replace with your actual image path
      github: "https://github.com/MdAasif09",
      linkedin: "https://www.linkedin.com/in/md-aasif",
      email: "mailto:syedaasif009@gmail.com",
    },
    {
      id: 2,
      name: "Rahul Singh",
      position: "Chairperson",
      image: "/rahul-singh1.jpg", // Replace with your actual image path
      github: "https://github.com/RahulSH004",
      linkedin: "https://www.linkedin.com/in/rahul-singh111 ",
      email: "mailto:rs739025@gmail.com",
    },
    {
      id: 3,
      name: "Sana Siddiqui",
      position: "Community Co-Lead",
      image: "/sana-sid.jpg", // Replace with your actual image path
      github: "https://github.com/Sanasid89",
      linkedin: "https://www.linkedin.com/in/sana-sid-421ab1277",
      email: "mailto:-siddiquesana239@gmail.com",
    }
  ];

  return (
    <section className="py-16 px-4 bg-transparent min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Core Members
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-purple-300 mx-auto rounded-full"></div>
        </div>

        {/* Board Members - Horizontal Layout on Desktop */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 justify-center items-center">
          {boardMembers.map((member) => (
            <div
              key={member.id}
              className="group relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border-2 border-purple-800/30 hover:border-purple-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-3 w-full max-w-sm lg:max-w-xs"
              style={{ boxShadow: '0 10px 30px rgba(147, 51, 234, 0.3), 0 0 20px rgba(147, 51, 234, 0.2)', transform: 'perspective(1000px) rotateX(5deg)' }}
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Card Content */}
              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="w-36 h-36 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-purple-600 group-hover:border-purple-400 transition-all duration-500 group-hover:scale-110">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  {/* Glow behind image */}
                  <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Member Details */}
                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-purple-300 font-medium text-sm md:text-base tracking-wide">
                    {member.position}
                  </p>
                </div>

                {/* Social Icons */}
                <div className="flex space-x-4 mt-4">
                  <a href={member.github} target="_blank" rel="noopener noreferrer">
                    <svg className="w-6 h-6 text-white hover:text-purple-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.091-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.447-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 7.844c.85.004 1.705.114 2.504.334 1.909-1.295 2.747-1.026 2.747-1.026.545 1.377.201 2.394.099 2.647.64.698 1.03 1.591 1.03 2.682 0 3.841-2.337 4.687-4.565 4.935.359.308.678.916.678 1.847 0 1.332-.012 2.405-.012 2.732 0 .267.18.577.688.479C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                    </svg>
                  </a>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <svg className="w-6 h-6 text-white hover:text-purple-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.012-3.05-1.864-3.05-1.865 0-2.149 1.451-2.149 2.953v5.701h-3v-11h2.881v1.524h.041c.4-.753 1.379-1.545 2.833-1.545 3.033 0 3.592 1.997 3.592 4.593v6.428z"/>
                    </svg>
                  </a>
                  <a href={member.email} target="_blank" rel="noopener noreferrer">
                    <svg className="w-6 h-6 text-white hover:text-purple-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </a>
                </div>

                {/* Decorative line */}
                <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Corner decorations */}
              <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-purple-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-purple-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}