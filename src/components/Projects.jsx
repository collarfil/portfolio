import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects";

const Projects = () => (
  <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-900">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-semibold mb-10">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
