

import React, { useState } from "react";
import {
  FaGraduationCap,
  FaCode,
  FaHeart,
  FaAward,
  FaBriefcase,
  FaUser,
  FaChevronDown,
  FaChevronUp,
  FaFolderOpen,
} from "react-icons/fa";
import devImage from "../assets/bgImg.png";
import { motion } from "framer-motion";
import profilePic from "../assets/self5.jpg"; // ✅ make sure yahi image hai tumhari


const sections = [
  {
    title: " Personal Info",
    icon: <FaUser />,
    content: (
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
        {/* LEFT: Info List */}
        <ul className="list-disc pl-5 space-y-2 flex-1">
          <li><strong>Name:</strong> Anuj Shubham Arya</li>
          <li><strong>Location:</strong> Mirzapur, UP, India</li>
          <li><strong>Languages:</strong> Hindi, English</li>
          <li><strong>Personality:</strong> Curious, Consistent, Creative</li>
          <li><strong>Interests:</strong> AI/ML, Open-Source Contribution, Coding Challenges</li>
          <li><strong>Career Goal:</strong> To become a Software developer contributing to impact software solutions</li>
        </ul>

        {/* RIGHT: Profile Photo */}
        <img
          src={profilePic}
          alt="Anuj Shubham Arya"
          className="w-32 h-32 absolute right-20 top-4 rounded-full object-cover border-1 border-indigo-500 shadow-md hidden md:block"
        />
        <img
          src={profilePic}
          alt="Anuj Shubham Arya"
          className="w-12 h-12 absolute right-12 top-6 rounded-full object-cover border-1 border-indigo-500 shadow-md block md:hidden"
        />
      </div>
    ),
  },

  {
    title: " Education",
    icon: <FaGraduationCap />,
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>B.Tech in CSE -AKTU University (2022-2026)</li>
        <li>12th - The Ideal New Star English School ( PCM )</li>
        <li>10th - Mahatama J.F. Public School </li>
      </ul>
    ),
  },
  {
    title: " Skills",
    icon: <FaCode />,
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>Programming-Language : C, C++, Python  </li>
        <li>Frontend : HTML, CSS, React.js, Tailwind CSS</li>
        <li>Backend : Flask, Express.js, Electron.js</li>
        <li>Database : MongoDB, MySQL</li>
        <li>Soft-Skills : Effective Communicator, Critical-Thinking, Problem-Solving, Decision Making </li>

      </ul>
    ),
    },
  {
    title: " Hobbies",
    icon: <FaHeart />,
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>🧠 Exploring new tech and tools</li>
        <li>📚 Reading tech articles and blogs to stay updated</li>
        <li>♟️ Playing chess to enhance logical thinking and strategy</li>
        <li>💻 Participating in online coding challenges and hackathons</li>
        <li>🎮 Gaming, 🎬 Watching Movies, 🏍️ Bike Riding</li>
        
      </ul>
    ),
  },
  {
    title: " Achievements and Certifications",
    icon: <FaAward />,
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>🎓 Coursera Certified : Programming in Python</li>
        <li>📜 NPTEL Certified :  The Joy of Computing using Python</li>
        <li>🔢 Solved more than 300+ (DSA) problems on LeetCode, GFG, Codechef</li>
        <li>💻 DSA in C++ and Python</li>
        
      </ul>
    ),
  },
  {
    title: "Projects",
    icon: <FaFolderOpen />,
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>📰 Fake News Detection</li>
        <li>💰 The Expense Tracker</li>
        <li>🎮 Tic Tac Toe game</li>
        <li>🐍 Snake Mania Game</li>
        <li>🏫 College Website</li>
        
      </ul>
    ),
  },
  {
    title: "  Experience ",
    icon: <FaBriefcase />,
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>🚀 Fresher, but actively building projects and gaining hands-on experience through coding challenges and internships.</li>
      </ul>
    ),
  },
  
];

const Section = ({ sectionData, isOpen, onToggle }) => (
  <div
    className="bg-white/80 dark:bg-gray-800/60 backdrop-blur-lg shadow-xl rounded-3xl p-6 transition-all duration-300 ease-in-out hover:shadow-2xl"
    onClick={onToggle}
  >
    <div className="flex items-center justify-between cursor-pointer">
      <div className="flex items-center gap-3 text-xl font-semibold text-indigo-600 dark:text-indigo-400">
        {sectionData.icon}
        {sectionData.title}
      </div>
      <div>
        {isOpen ? (
          <FaChevronUp className="text-gray-600 dark:text-gray-300" />
        ) : (
          <FaChevronDown className="text-gray-600 dark:text-gray-300" />
        )}
      </div>
    </div>
    {isOpen && (
      <div className="mt-4 text-gray-700 dark:text-gray-200 text-base leading-relaxed">
        {sectionData.content}
      </div>
    )}
  </div>
);

export default function AboutSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="relative min-h-screen pt-[80px] bg-gradient-to-br from-white via-gray-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-8xl mx-auto px-6 mt-10 flex flex-col lg:flex-row relative">

        {/* LEFT: Fixed Header + Scrollable Sections */}
        <div className="lg:w-1/2 pr-4 relative h-[calc(90vh-80px)]">
          {/* Fixed Heading */}
          <div className="sticky top-0 z-20 bg-gradient-to-br from-white via-gray-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-4">
            <h2 className="text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-600 dark:from-purple-400 dark:to-indigo-300">
              About Me
            </h2>
          </div>

          {/* Scrollable Content */}
          <div className="mt-6   overflow-y-auto h-[calc(100%-100px)] space-y-6 pr-2 pb-24 custom-scroll">
            {sections.map((section, index) => (
              <Section
                key={index}
                sectionData={section}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              />
            ))}
          </div>
        </div>

        {/* RIGHT: Background Image Side */}
        
        <motion.div
          className="hidden md:flex justify-center sticky top-20 pl-20 pr-12 pt-4 h-fit w-[650px] xl:w-[700px]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <img
            src={devImage}
            alt="Developer"
            className="w-full h-auto rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)]"
          />
        </motion.div>






      </div>
    </section>
  );
}



