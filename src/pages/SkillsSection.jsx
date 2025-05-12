
//File: src/components/SkillsSection.jsx




import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiHtml5, SiCss3, SiJavascript, SiReact,  SiExpress,
  SiMongodb, SiGit, SiFlask, 
  SiScikitlearn, SiNumpy, SiPandas, SiOpenai,
  SiPython, SiCplusplus,
  SiGithub,SiMysql, SiElectron
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { SiC } from "react-icons/si";

import { FiExternalLink } from "react-icons/fi";

const skills = [
  // Frontend Development
  { name: "HTML", icon: <SiHtml5 className="text-orange-500" />, type: "Markup Language", doc: "https://developer.mozilla.org/en-US/docs/Web/HTML", summary: "Defines the structure and layout of web pages." },
  { name: "CSS", icon: <SiCss3 className="text-blue-500" />, type: "Style Sheet", doc: "https://developer.mozilla.org/en-US/docs/Web/CSS", summary: "Styles HTML elements for better UI/UX." },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" />, type: "Programming Language", doc: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", summary: "Adds logic and interactivity to websites." },
  { name: "React", icon: <SiReact className="text-cyan-400" />, type: "Frontend Library", doc: "https://react.dev", summary: "Component-based UI development library." },
  // { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" />, type: "React Framework", doc: "https://nextjs.org/docs", summary: "Production-grade React framework for SSR and SSG." },
  // { name: "Redux", icon: <SiRedux className="text-purple-500" />, type: "State Management", doc: "https://redux.js.org/", summary: "Manages application state in React apps." },
  //{ name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" />, type: "CSS Framework", doc: "https://tailwindcss.com/docs", summary: "Utility-first CSS for rapid UI development." },
  //{ name: "TypeScript", icon: <SiTypescript className="text-blue-600" />, type: "Programming Language", doc: "https://www.typescriptlang.org/docs/", summary: "Superset of JavaScript that adds static typing." },
  
  // Backend Development
//  { name: "Node.js", icon: <SiNodedotjs className="text-green-600" />, type: "Backend Runtime", doc: "https://nodejs.org/en/docs", summary: "Runs JavaScript on the server." },
  { name: "Flask", icon: <SiFlask className="text-black" />, type: "Web Framework", doc: "https://flask.palletsprojects.com/en/2.1.x/", summary: "Python micro framework for building web apps." },
  //{ name: "Express", icon: <SiExpress className="text-gray-300" />, type: "Backend Framework", doc: "https://expressjs.com/", summary: "Minimalist web framework for Node.js." },
  //{ name: "FastAPI", icon: <SiFastapi className="text-teal-400" />, type: "Python API Framework", doc: "https://fastapi.tiangolo.com/", summary: "Fast and modern web framework for Python APIs." },
  { name: "Electron.js", icon: <SiElectron className="text-blue-400" />, type: "Desktop App Framework", doc: "https://www.electronjs.org/", summary: "Framework for building cross-platform desktop apps using JavaScript, HTML, and CSS." },


  // // DevOps and Hosting
  // { name: "Docker", icon: <SiDocker className="text-blue-500" />, type: "Containerization", doc: "https://docs.docker.com/", summary: "Packages apps into isolated containers." },
  // { name: "Vercel", icon: <SiVercel className="text-black dark:text-white" />, type: "Hosting Platform", doc: "https://vercel.com/docs", summary: "Deploy frontend apps with global CDN and CI/CD." },
  // { name: "Netlify", icon: <SiNetlify className="text-green-500" />, type: "Hosting Platform", doc: "https://docs.netlify.com/", summary: "Deploy and manage static websites easily." },
  // { name: "Render", icon: <SiRender className="text-purple-600" />, type: "Cloud Hosting", doc: "https://render.com/docs", summary: "Modern alternative to Heroku for hosting apps." },
  // { name: "Railway", icon: <SiRailway className="text-pink-500" />, type: "Platform", doc: "https://railway.app/docs", summary: "Cloud platform for easy app deployment." },


  // Languages and Tools
  { name: "Python", icon: <SiPython className="text-yellow-500" />, type: "Programming Language", doc: "https://docs.python.org/3/", summary: "Versatile, beginner-friendly language for automation and AI." },
  { name: "C++", icon: <SiCplusplus className="text-blue-600" />, type: "Programming Language", doc: "https://cplusplus.com/doc/", summary: "High-performance language for system-level development." },
  { name: "C", icon: <SiC className="text-blue-600" />, type: "Programming Language", doc: "https://en.cppreference.com/w/c", summary: "General-purpose language known for its efficiency and system-level programming." },

  // Databases
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" />, type: "Database", doc: "https://docs.mongodb.com/", summary: "NoSQL database for JSON-like documents." },
  { name: "MySQL", icon: <SiMysql className="text-blue-600" />, type: "Database", doc: "https://dev.mysql.com/doc/", summary: "Relational database management system for structured data." },
  //{ name: "NoSQL", icon: <SiNosql className="text-green-600" />, type: "Database", doc: "https://www.mongodb.com/nosql-explained", summary: "Non-relational database for unstructured and flexible data." },

  // Data Science and AI
  { name: "Scikit-learn", icon: <SiScikitlearn className="text-orange-400" />, type: "ML Library", doc: "https://scikit-learn.org/stable/documentation.html", summary: "Machine learning tools for predictive data analysis." },
  { name: "Pandas", icon: <SiPandas className="text-green-600" />, type: "Data Analysis Library", doc: "https://pandas.pydata.org/docs/", summary: "Handles and analyzes structured data efficiently." },
  { name: "NumPy", icon: <SiNumpy className="text-blue-400" />, type: "Numerical Library", doc: "https://numpy.org/doc/", summary: "Supports large, multi-dimensional arrays and matrices." },
  { name: "OpenAI", icon: <SiOpenai className="text-indigo-500" />, type: "AI API Provider", doc: "https://platform.openai.com/docs", summary: "AI-powered language models and generative tools." },

  // Version Control and APIs
  { name: "Git", icon: <SiGit className="text-red-500" />, type: "Version Control", doc: "https://git-scm.com/doc", summary: "Tracks code changes and supports team collaboration." },
  { name: "GitHub", icon: <SiGithub className="text-neutral-600 dark:text-neutral-300" />, type: "Version Control", doc: "https://docs.github.com/en/github", summary: "Web-based hosting service for version control using Git." },
  //  { name: "REST APIs", icon: <SiPostman className="text-orange-400" />, type: "API Design", doc: "https://learning.postman.com/docs/getting-started/introduction/", summary: "Standardized way for frontend and backend to communicate." },
  { name: "VSCode", icon: <VscVscode className="text-blue-500" />, type: "Code Editor", doc: "https://code.visualstudio.com/docs", summary: "Popular code editor with a rich ecosystem of extensions and tools." },


];

export default function SkillsSection() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const categories = [
    { title: " Programming Languages  ", skills: skills.slice(6, 9) },
    { title: "Frontend Development", skills: skills.slice(0, 4) },
    { title: "Backend Development", skills: skills.slice(4, 6) },
  //  { title: "DevOps and Hosting", skills: skills.slice(9, 12) },
  
    { title: "Database", skills: skills.slice(9, 11) },
    { title: "Data Science and AI", skills: skills.slice(11, 15) },
    { title: "Tools  and Technology", skills: skills.slice(15, 18) }
  ];

  return (
    <div className="h-screen flex flex-col bg-gradient-to-b from-gray-100 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Sticky Header */}
      <div className="sticky top-16 z-20 bg-opacity-70 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700 pb-4 pt-6 px-6 shadow-sm">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 dark:text-white">
          🚀 My Skill Arsenal
        </h2>
      </div>

      {/* Scrollable Grid */}
      <motion.div
        key="skills"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 overflow-y-auto px-6 pt-24"
      >
        {categories.map((category, index) => (
          <div key={index} className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{category.title}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pb-16">
              {category.skills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  onClick={() => setSelectedSkill(skill)}
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.07, duration: 0.5 }}
                  className="relative rounded-2xl bg-white/30 dark:bg-gray-800/40 shadow-xl backdrop-blur-lg p-6 text-center border border-gray-300 dark:border-gray-700 hover:border-transparent hover:shadow-2xl transition-all duration-300 hover:bg-white/40 hover:dark:bg-gray-800/60 cursor-pointer"
                >
                  <div className="text-5xl mb-4">{skill.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{skill.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{skill.type}</p>

                  {/* External Link Icon + Tooltip */}
                  <div className="absolute top-3 right-3">
                    <a
                      href={skill.doc}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-indigo-500 transition"
                    >
                      <div className="relative group">
                        <FiExternalLink size={18} />
                        <span className="absolute -top-8 -right-4 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition pointer-events-none z-50">
                          View Docs
                        </span>
                      </div>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-900 text-black dark:text-white rounded-2xl shadow-lg p-6 w-[90%] max-w-md"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-4xl">{selectedSkill.icon}</div>
                <div>
                  <h2 className="text-2xl font-bold">{selectedSkill.name}</h2>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{selectedSkill.type}</p>
                </div>
              </div>

              <p className="text-base text-gray-700 dark:text-gray-300 mb-4">
                {selectedSkill.summary}
              </p>

              <a
                href={selectedSkill.doc}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-indigo-500 hover:underline text-sm"
              >
                Read Official Docs <FiExternalLink className="ml-1" />
              </a>

              <button
                onClick={() => setSelectedSkill(null)}
                className="mt-6 block ml-auto bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}







