import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaYoutube, FaTwitter, FaInstagram, FaDiscord } from "react-icons/fa";

const HeroSection: React.FC = () => {
  return (
    <div className="m-0 p-0 box-border relative min-h-screen w-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative flex-1 flex items-center justify-center text-white overflow-hidden">
        {/* Fixed Background Video */}
        <video
          src="/bg.mp4"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ minWidth: "100vw", minHeight: "100vh", position: "fixed", zIndex: -1 }}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Overlay for darkening */}
        <div className="absolute inset-0 bg-black/40" style={{ position: "fixed", zIndex: 0 }}></div>

        {/* content and cube */}
        <div className="relative flex items-center justify-center w-full px-4 py-12" style={{ position: "relative", zIndex: 1 }}>
          <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl">
            {/* Text Content on Left */}
            <div className="text-center md:text-left order-2 md:order-none">
              <h1 className="text-5xl md:text-8xl font-bold mb-3" style={{ fontFamily: "Roboto"}}>
                TEZOS
              </h1>
              <h2 className="text-2xl md:text-4xl font-bold mb-8" style={{ fontFamily: "'Roboto', sans-serif" }}>
                &nbsp;JAMIA HAMDARD
              </h2>
              <div className="ml-[5px]"><p className="text-lg ml-[2px] md:text-xl mb-8 max-w-xl mx-auto md:mx-0">
              A student-driven blockchain community at <b>Jamia Hamdard</b>, fostering innovation, research, and real-world applications on the Tezos blockchain.
              </p></div>


              {/* somcial media */}
              <div className="flex justify-center md:justify-start space-x-4">
                <a href="https://github.com/tezosjh" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-2xl cursor-pointer hover:text-gray-300" />
                </a>
                <a href="https://www.linkedin.com/company/tezos-club-jamia-hamdard/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-2xl cursor-pointer hover:text-gray-300" />
                </a>
                <a href="https://chat.whatsapp.com/KE7NMuGrncu3KTfSpvFqmo" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className="text-2xl cursor-pointer hover:text-gray-300" />
                </a>
                <a href="https://www.youtube.com/@TezosJH" target="_blank" rel="noopener noreferrer">
                  <FaYoutube className="text-2xl cursor-pointer hover:text-gray-300" />
                </a>
                <a href="https://x.com/tezosclubjh" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="text-2xl cursor-pointer hover:text-gray-300" />
                </a>
                <a href="https://www.instagram.com/tezosclub.jh/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-2xl cursor-pointer hover:text-gray-300" />
                </a>
                <a href="https://discord.gg/DHMfYMfu" target="_blank" rel="noopener noreferrer">
                  <FaDiscord className="text-2xl cursor-pointer hover:text-gray-300" />
                </a>
              </div>
            </div>

            {/* 3D Cube PNG*/}
            <div className="w-64 h-64 md:w-96 md:h-96 flex-shrink-0 mb-8 md:mb-0 md:ml-12 order-1 md:order-none">
              <img
                src="/cube6.png"
                alt="3D Cube"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;