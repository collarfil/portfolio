import React from "react";
import {
  SiReact,
  SiBlazor,
  SiDotnet,
  SiPython,
  SiHtml5,
  SiCss3,
  SiMysql, // used to represent Database
} from "react-icons/si";

import { motion } from "framer-motion";

const skills = [
  { name: "React", icon: <SiReact size={40} className="text-blue-400" /> },
  { name: "Blazor", icon: <SiBlazor size={40} className="text-purple-400" /> },
  { name: "RESTful API", icon: <SiDotnet size={40} className="text-cyan-400" /> },
  { name: "Database", icon: <SiMysql size={40} className="text-green-500" /> },
  { name: "C# / .NET", icon: <SiDotnet size={40} className="text-purple-500" /> },
  { name: "Python", icon: <SiPython size={40} className="text-yellow-300" /> },
  { name: "HTML5", icon: <SiHtml5 size={40} className="text-orange-500" /> },
  { name: "CSS3", icon: <SiCss3 size={40} className="text-blue-600" /> },
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
