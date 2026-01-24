import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    

    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-900 text-white px-6 md:px-16"
    >
      {/* Left content */}
      <motion.div
        className="flex-1 text-center md:text-left"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Hi, I’m <span className="text-blue-400">Collins Felix Aigbekhai</span>
        </h1>
        <p className="text-lg md:text-xl mb-6 text-gray-300">
          A passionate <span className="text-blue-300 font-semibold">Software Developer</span> specializing in .NET, Angular, Blazor, React and modern web applications.
        </p>

        <div className="flex gap-4 justify-center md:justify-start">
          <Link
            to="projects"
            smooth
            duration={600}
            className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg shadow-md transition-all"
          >
            View Projects
          </Link>
          <Link
            to="contact"
            smooth
            duration={600}
            className="cursor-pointer border border-blue-400 hover:bg-blue-400 hover:text-white text-blue-300 font-medium py-2 px-4 rounded-lg transition-all"
          >
            Contact Me
          </Link>
        </div>
      </motion.div>

      {/* Right content: Profile Image */}
      <motion.div
        className="flex-1 flex justify-center mt-10 md:mt-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <img
          src="/assets/profile.jpg" // ✅ works from public/assets
          alt="Collins Aigbekhai"
          className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg border-4 border-blue-500"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
