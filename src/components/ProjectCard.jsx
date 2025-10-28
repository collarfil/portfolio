import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectCard = ({ project }) => (
  <motion.div
    className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow duration-300"
    whileHover={{ scale: 1.03 }}
  >
    <img
      src={project.image}
      alt={project.title}
      className="rounded-lg mb-4 w-full h-48 object-cover"
    />
    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
    <p className="text-gray-600 dark:text-gray-300 mb-3">{project.description}</p>
    <div className="flex gap-4">
      {project.github && (
        <a href={project.github} target="_blank" className="text-blue-500 flex items-center gap-1">
          <FaGithub /> Code
        </a>
      )}
      {project.demo && (
        <a href={project.demo} target="_blank" className="text-green-500 flex items-center gap-1">
          <FaExternalLinkAlt /> Demo
        </a>
      )}
    </div>
  </motion.div>
);

export default ProjectCard;
