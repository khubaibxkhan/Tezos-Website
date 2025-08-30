export default function BoardMembers() {
  const boardMembers = [
    {
      id: 1,
      name: "Md Aasif",
      position: "Community Lead",
      image: "/md-aasif.jpg", // Replace with your actual image path
    },
    {
      id: 2,
      name: "Rahul Singh",
      position: "Chairperson",
      image: "/rahul-singh.jpg", // Replace with your actual image path
    },
    {
      id: 3,
      name: "Sana Sid",
      position: "Community Co-Lead",
      image: "/sana-sid.jpg", // Replace with your actual image path
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

                {/* Decorative line */}
                <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Corner decorations */}
              <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-purple-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-purple-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom decoration */}
        {/*<div className="flex justify-center mt-16">
          <div className="flex space-x-3">
            <div className="w-4 h-4 bg-purple-500 rounded-full animate-pulse"></div>
            <div className="w-4 h-4 bg-purple-400 rounded-full animate-pulse"></div>
            <div className="w-4 h-4 bg-purple-300 rounded-full animate-pulse"></div>
          </div>
        </div>*/}
      </div>
    </section>
  );
}