import { projects } from "../data/projects";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="p-6 rounded-2xl shadow-lg bg-gray-100 dark:bg-gray-800"
          >
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-3">{p.description}</p>
            <div className="flex flex-wrap gap-2 text-sm mb-3">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a href={p.link} className="text-blue-500 hover:underline" target="_blank">
                Code
              </a>
              <a href={p.live} className="text-blue-500 hover:underline" target="_blank">
                Live
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
