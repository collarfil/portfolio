import React from "react";
import {
  SiDotnet,
  SiAngular,
  SiBlazor,
  SiReact,
  SiMysql,
  SiLaravel,
  SiPython,
  SiGit,
  SiGithub,
  
} from "react-icons/si";

// CORRECT: Microsoft SQL Server icon is available in Font Awesome
import { FaMicrosoft } from "react-icons/fa";
import { motion } from "framer-motion";

const skills = [
  { name: "C# / .NET", icon: <SiDotnet size={40} className="text-purple-500" /> },
  { name: "RESTful API", icon: <SiDotnet size={40} className="text-cyan-400" /> },
  { name: "Angular", icon: <SiAngular size={40} className="text-red-500" /> },
  { name: "Blazor", icon: <SiBlazor size={40} className="text-purple-400" /> },
  { name: "SQL Server", icon: <FaMicrosoft size={40} className="text-blue-500" /> },
  { name: "Laravel", icon: <SiLaravel size={40} className="text-red-500" /> },
  { name: "MySQL", icon: <SiMysql size={40} className="text-green-500" /> },
  { name: "React", icon: <SiReact size={40} className="text-blue-400" /> },
  { name: "Python", icon: <SiPython size={40} className="text-yellow-300" /> },
  { name: "Git", icon: <SiGit size={40} className="text-orange-500" /> },
  { name: "Azure", icon: <FaMicrosoft size={40} className="text-blue-500" /> },
  { name: "GitHub", icon: <SiGithub size={40} className="text-white" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg hover:bg-gray-700 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
            >
              {skill.icon}
              <p className="mt-2 text-lg">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;