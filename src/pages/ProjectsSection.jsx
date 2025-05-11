


// File: src/components/ProjectsSection.jsx

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const projects = [
    {
    title: "Fake News Detector",
    description: "A smart AI-based system that detects misleading or false news using Python, Machine Learning, and Flask web framework.",
    image: "../images/FakeNewsWeb.jpg",
    link: "https://github.com/anuj2810/Projects/tree/77950c680a2978fc3c56650e148dc1e8f964e744/NEWS_DETECTION",
    specs: "Tech Stack: Python, Flask, Scikit-learn, Pandas\nFeatures: Real-time news analysis, fake/real classification, intuitive UI, and detailed result explanation."
  },
  {
    title: "Expense Tracker App",
    description: "A user-friendly React application for tracking personal expenses with real-time balance updates and categorized spending insights.",
    image: "../images/the-expense-tracker.jpg",
    link: "https://github.com/anuj2810/Projects/tree/77950c680a2978fc3c56650e148dc1e8f964e744/The_Expense_Tracker",
    specs: "Tech Stack: React, JavaScript, CSS\nFeatures: Add/remove expenses, category-wise tracking, live balance calculation, responsive UI"
  },
  {
    title: "Portfolio Website",
    description: "A clean and modern personal portfolio built using HTML, CSS, and JavaScript, featuring smooth interactions and a responsive layout.",
    image: "../images/Portfolio-Website.jpg",
    link: "https://github.com/anuj2810/Portfolio.git",
    specs: "Tech Stack: HTML, CSS, JavaScript\nFeatures: Light/Dark mode toggle, Animated transitions, Fully responsive design, Smooth scroll navigation"
  },
  {
    title: "College Website",
    description: "A responsive and interactive college website built using HTML, CSS, and JavaScript. Includes sections like About, Courses, Events, and Contact.",
    image: "../images/college-website.jpg",
    link: "https://github.com/anuj2810/Projects/tree/703105653ea65bfff274caaa8d18d9cb559eb461/College_Website",
    specs: "Tech Stack: HTML, CSS, JavaScript\nFeatures: Responsive layout, Smooth navigation, Interactive UI"
  },

  {
    title: "Snake Mania Game",
    description: "A classic Snake game recreated using HTML, CSS, and JavaScript with smooth controls, increasing difficulty, and retro-style visuals.",
    image: "../images/snake-mania.jpg",
    link: "https://github.com/anuj2810/Projects/tree/77950c680a2978fc3c56650e148dc1e8f964e744/Snake_Mania",
    specs: "Tech Stack: HTML, CSS, JavaScript\nFeatures: Grid-based movement, Score tracking, Speed scaling, Game over detection"
  },
  {
    title: "Tic Tac Toe",
    description: "A simple yet interactive Tic Tac Toe game built using HTML, CSS, and JavaScript. Designed with smooth gameplay and responsive design.",
    image: "../images/tic-tac-toe.jpg",
    link: "https://github.com/anuj2810/Projects/tree/77950c680a2978fc3c56650e148dc1e8f964e744/Tic_Tac_Toe",
    specs: "Tech Stack: HTML, CSS, JavaScript\nFeatures: Two-player mode, Win detection, Draw handling, Responsive UI"
  },
  {
    title: "Data Storage",
    description: "A simple and clean web app to store and view data entries using only HTML and CSS. Perfect for static content management or personal logs.",
    image: "../images/data-storage.jpg",
    link: "https://github.com/anuj2810/Projects/tree/77950c680a2978fc3c56650e148dc1e8f964e744/Data_Storage",
    specs: "Tech Stack: HTML, CSS\nFeatures: Static data display, Clean UI, Lightweight and fast"
  },
   
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="h-screen flex flex-col bg-gradient-to-b from-white via-gray-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Sticky Title */}
      <div className="sticky top-16 z-20 bg-opacity-70 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700 py-4 pt-8 px-6 shadow-sm">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 dark:text-white">
          🛠️ Projects Showcase
        </h2>
      </div>

      {/* Scrollable Cards */}
      <motion.div
        key="projects"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.5 }}
        className="flex-1 overflow-y-auto px-6 py-24"
      >
        <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 pb-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, rotate: 0.5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="relative rounded-2xl bg-white/30 dark:bg-gray-800/40 shadow-xl backdrop-blur-lg border border-gray-300 dark:border-gray-700 hover:shadow-2xl hover:bg-white/40 hover:dark:bg-gray-800/60 transition-all duration-300 group cursor-pointer"
              onClick={() => openModal(project)}
            >
              <div className="overflow-hidden rounded-t-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-indigo-700 dark:text-indigo-400 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  View Project <FiExternalLink className="ml-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Modal for Project Details */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white dark:bg-gray-900 w-full max-w-4xl rounded-2xl p-8 shadow-xl backdrop-blur-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-3xl font-semibold text-indigo-700 dark:text-indigo-400 mb-6">
              {selectedProject.title} - Details
            </h3>
            <div className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300">{selectedProject.specs}</p>
              <div className="flex justify-end space-x-4">
                <button
                  className="px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}




