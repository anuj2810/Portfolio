
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Download, ExternalLink } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Typewriter } from "react-simple-typewriter";
import {
  SiLeetcode,
  SiGeeksforgeeks,
  SiGithub,
  SiCodeforces,
  SiCodechef,
  SiHackerrank,
} from "react-icons/si";
import hero_img from "../assets/hero.jpg";
import resumePDF from "../assets/Anuj_Resume.pdf";


const codingProfiles = [
  {
    name: "LeetCode",
    icon: <SiLeetcode className="text-yellow-500 text-4xl" />,
    description: "300+ DSA problems solved",
    link: "https://leetcode.com/u/aryan07mzp/",
    summary: "Regularly solves algorithmic challenges and participates in weekly contests on LeetCode.",
    bg: "bg-yellow-50 dark:bg-gray-800",
  },
  {
    name: "GeeksforGeeks",
    icon: <SiGeeksforgeeks className="text-green-600 text-4xl" />,
    description: "Coding Score: 100+ | Institute Rank: Top 50",
    link: "https://auth.geeksforgeeks.org/user/aryan07mzp/",
    summary: "Top GfG contributor with high coding score and consistent problem-solving activity.",
    bg: "bg-green-50 dark:bg-gray-800",
  },
  {
    name: "GitHub",
    icon: <SiGithub className="text-black dark:text-white text-4xl" />,
    description: "Open-source contributor | Projects & daily commits",
    link: "https://github.com/anuj2810",
    summary: "Maintains multiple open-source repositories and contributes to community projects.",
    bg: "bg-gray-100 dark:bg-gray-900",
  },
  {
    name: "Codeforces",
    icon: <SiCodeforces className="text-blue-500 text-4xl" />,
    description: "Real Life based Problems | Pupil",
    link: "https://codeforces.com/profile/aryan07mzp",
    summary: "Participates in contests and solves competitive programming problems on Codeforces.",
    bg: "bg-blue-50 dark:bg-gray-800",
  },
  {
    name: "CodeChef",
    icon: <SiCodechef className="text-orange-500 text-4xl" />,
    description: "2★ Coder | Long Challenges & Starters",
    link: "https://www.codechef.com/users/aryan07mzp",
    summary: "Regular participant in CodeChef contests with a 3-star rating.",
    bg: "bg-orange-50 dark:bg-gray-800",
  },
  {
    name: "HackerRank",
    icon: <SiHackerrank className="text-green-500 text-4xl" />,
    description: "1★ Problem Solving | Beginner",
    link: "https://www.hackerrank.com/aryan07mzp",
    summary: "Achieved 5-star rank in problem solving and completed various certifications.",
    bg: "bg-green-100 dark:bg-gray-800",
  },
];

export default function HeroSection() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const thirdSectionRef = useRef(null);
  const firstSectionRef = useRef(null);

  const handleArrowClick = () => {
    setIsScrolled(true);
    thirdSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleBackClick = () => {
    setIsScrolled(false);
    firstSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleCardClick = (index) => {
    setActiveModal(index);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <>

    {/* // from here code for laptop and larger screens  */}
    <div className="hidden xl:block">
      <motion.section
        key="hero"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.5 }}
        className="relative h-[calc(100vh-63px)] grid grid-cols-1  md:grid-cols-2 gap-6 px-6 
        sm:px-12 pt-24  bg-gradient-to-br from-indigo-50 via-white to-indigo-100 
        dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
      >
      
        {/* Left Scrollable Section */}
        <div className="flex flex-col gap-10 overflow-y-auto pr-3 pt-3 max-h-[calc(100vh-90px)] custom-scrollbar">
          {/* First Part */}
          <motion.div
            ref={firstSectionRef}
            className={`text-center md:text-left pl-6 md:pl-12 border-l-4 border-indigo-500 ${isScrolled ? "hidden" : "block"}`}
            animate={{ x: [-10, 10] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 3,
              ease: "easeInOut",
            }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                <Typewriter
                  words={["Anuj Shubham Arya"]}
                  loop={1}
                  cursor
                  cursorStyle="_"
                  typeSpeed={120}
                  deleteSpeed={0}
                  delaySpeed={2000}
                />
              </span>
            </h1>

            <motion.div
              className="mt-4 text-xl sm:text-2xl font-mono text-indigo-700 dark:text-indigo-300 h-14"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <Typewriter
                words={[
                  "Software Developer",
                  "UI/UX Enthusiast",
                  "Problem Solver",
                  "Tech Lover by Passion, Developer by Choice",
                ]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </motion.div>

            <motion.p
              className="mt-6 text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-xl mx-auto md:mx-0 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              A passionate Software Developer who thrives on solving complex 
              problems, continuously upgrading with the latest technologies, 
              and building seamless, user-friendly apps with strong logic and 
              a hunger to learn
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
              className="mt-8"
            >
              <a
                href={resumePDF}
                download="Anuj_Resume.pdf"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-7 rounded-full transition-all shadow-xl"
              >
                Download Resume
                <Download className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          {!isScrolled && (
            <motion.div
              className="relative flex flex-col items-start gap-4 px-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              <div
                onClick={handleArrowClick}
                className="text-indigo-600 text-6xl font-extrabold cursor-pointer mb-10 px-60 transition-transform duration-300 hover:scale-125 hover:text-indigo-800 animate-bounce"
                title="Scroll Down"
              >
                ↓
              </div>
            </motion.div>
          )}
            {/* </div> */}

          {/* Coding Profiles */}
          {isScrolled && (
            <motion.div
              ref={thirdSectionRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="px-4 sm:px-8 lg:px-16 py-10"
            >
              <div className="flex justify-start fixed top-24 left-4 z-10">
                <button
                  onClick={handleBackClick}
                  className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:from-indigo-600 hover:to-purple-700 transition-all"
                >
                  ← Back
                </button>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
                My Coding Profiles
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {codingProfiles.map((profile, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className={`relative rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all cursor-pointer flex flex-col items-center text-center ${profile.bg}`}
                    onClick={() => handleCardClick(index)}
                  >
                    <div className="absolute top-4 right-4">
                      <a
                        href={profile.link}
                        onClick={(e) => e.stopPropagation()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 transition-transform duration-200 hover:scale-110 cursor-pointer"
                        title="Visit"
                      >
                        <ExternalLink />
                      </a>
                    </div>
                    {profile.icon}
                    <h3 className="text-xl font-semibold mt-4 text-gray-800 dark:text-white">{profile.name}</h3>
                    <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">{profile.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Modal */}
              {activeModal !== null && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-2xl w-[90%] max-w-md text-center">
                    <h3 className="text-2xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">
                      {codingProfiles[activeModal].name}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 text-md mb-6">
                      {codingProfiles[activeModal].summary}
                    </p>
                    <button
                      onClick={closeModal}
                      className="mt-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded-full transition"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}

              {/* About Me Section */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative bg-gradient-to-br from-white to-indigo-50 dark:from-gray-800 dark:to-gray-900 shadow-2xl rounded-3xl p-8 sm:p-10 md:p-12 max-w-5xl mx-auto border border-gray-200 dark:border-gray-700 mt-16"
              >
                <h2 className="text-4xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-6 text-center">
                  About Me
                </h2>
                <p className="text-gray-800 dark:text-gray-200 text-lg sm:text-xl leading-relaxed text-center">
                  I’m a passionate Software Developer who enjoys building clean, efficient, and 
                  visually engaging applications. From crafting smooth user experiences on the 
                  frontend to developing strong, scalable backend systems, I focus on creative 
                  solutions that make an impact.
                  <br /><br />
                  When I'm not coding, I'm exploring new tech, solving DSA problems, or sharing knowledge. Let’s collaborate and build something impactful together!
                </p>
                <div className="flex flex-wrap justify-center gap-6 mt-8">
                  <a href="https://x.com/aryan07vns" target="_blank" rel="noopener noreferrer">
                    <FaXTwitter className="w-7 h-7 text-blue-500 hover:text-blue-700 transition-transform duration-200 hover:scale-110 cursor-pointer" />
                  </a>
                  <a href="https://github.com/anuj2810" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="w-7 h-7 text-gray-700 dark:text-white hover:text-black transition-transform duration-200 hover:scale-110 cursor-pointer" />
                  </a>
                  <a href="https://www.linkedin.com/in/imanuj-arya/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="w-7 h-7 text-blue-700 hover:text-blue-800 transition-transform duration-200 hover:scale-110 cursor-pointer" />
                  </a>
                  <a href="mailto:aryan07vns@gmail.com">
                    <FaEnvelope className="w-7 h-7 text-red-500 hover:text-red-700 transition-transform duration-200 hover:scale-110 cursor-pointer" />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>

        {/* Here is right section image ok */}
          <div 
            className="fixed top-[100px]  right-5 h-[70vh] w-[50%] px-6 pt-10 overflow-hidden">
              <div className="w-full h-full relative rounded-xl overflow-hidden shadow-2xl">
                <img
                  src={hero_img}
                  alt="Tech Background"
                  className="absolute inset-0 w-full h-full object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-black/40 rounded-xl"></div>
                <div className="relative z-10 text-white p-6 text-2xl font-bold text-center">
                  Inspired by Technology
                </div>
              </div>
            </div>
          

      </motion.section>
    </div>

    {/* // from here code for the smaller screen less than laptop screen  size ok  */}
    <div className=" block xl:hidden ">
      <motion.section
      key="hero"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.5 }}
      className="  md:grid-cols-1 
      px-6 sm:pl-12 pt-20 pb-12 mt-10 bg-gradient-to-br 
      from-indigo-50 via-white to-indigo-100 dark:from-gray-900 dark:via-gray-800 
      dark:to-gray-900"
    >
      {/* Left Scrollable Section */}
          <div className="flex-col overflow-y-auto overflow-x-hidden pt-3 max-h-[calc(100vh)]">
      {/* First Part - Visible on smaller screens */}
      <motion.div
        ref={firstSectionRef}
        className={`text-center md:text-left pl-6 md:pl-12 border-l-4 border-indigo-500 ${isScrolled ? "hidden" : "block"} `}
        animate={{ x: [-10, 10] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 3,
          ease: "easeInOut",
        }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <Typewriter
              words={["Anuj Shubham Arya"]}
              loop={1}
              cursor
              cursorStyle="_"
              typeSpeed={120}
              deleteSpeed={0}
              delaySpeed={2000}
            />
          </span>
        </h1>

        <motion.div
          className="mt-4 text-xl sm:text-2xl font-mono text-indigo-700 dark:text-indigo-300 h-14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Typewriter
            words={[
              "Software Developer",
              "UI/UX Enthusiast",
              "Problem Solver",
              "Tech Lover by Passion, Developer by Choice",
            ]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </motion.div>

        <motion.p
          className="mt-6 text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-xl mx-auto md:mx-0 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          A passionate Software Developer who thrives on solving complex problems, continuously upgrading with the latest technologies,
          and building seamless, user-friendly apps with strong logic and a hunger to learn.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="mt-8"
        >
          <a
            href={resumePDF}
            download="Anuj_Resume.pdf"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-7 rounded-full transition-all shadow-xl"
          >
            Download Resume
            <Download className="w-5 h-5" />
          </a>
        </motion.div>
      </motion.div>

      {/* Right Image - Visible only on small screens */}
      {!isScrolled && (
        <div className="px-6 pt-10 overflow-hidden ">
          <div className="w-full h-[200px] relative rounded-xl overflow-hidden shadow-2xl">
            <img
              src={hero_img} 
              alt="Tech Background"
              className="absolute inset-0 w-full h-full object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-black/40 rounded-xl"></div>
            <div className="relative z-10 text-white p-6 text-2xl font-bold text-center">
              Inspired by Technology
            </div>
          </div>
        </div>
      )}

      {/* Scroll Arrow - Visible on smaller screens */}
      {!isScrolled && (
        <motion.div
          className="relative flex flex-col mt-2 items-center justify-center text-center gap-4 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          <div
            onClick={handleArrowClick}
            className="text-indigo-600 text-6xl font-extrabold cursor-pointer transition-transform duration-300 hover:scale-125 hover:text-indigo-800 animate-bounce"
            title="Scroll Down"
          >
            ↓
          </div>
        </motion.div>
      )}


        {/* Coding Profiles */}
        {isScrolled && (
          <motion.div
            ref={thirdSectionRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="px-4 sm:px-8 lg:px-16 py-10"
          >
            <div className="flex justify-start fixed top-24 left-4 z-10">
              <button
                onClick={handleBackClick}
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:from-indigo-600 hover:to-purple-700 transition-all"
              >
                ← Back
              </button>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
              My Coding Profiles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
              {codingProfiles.map((profile, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={`relative rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all cursor-pointer flex flex-col items-center text-center ${profile.bg}`}
                  onClick={() => handleCardClick(index)}
                >
                  <div className="absolute top-4 right-4">
                    <a
                      href={profile.link}
                      onClick={(e) => e.stopPropagation()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 transition-transform duration-200 hover:scale-110 cursor-pointer"
                      title="Visit"
                    >
                      <ExternalLink />
                    </a>
                  </div>
                  {profile.icon}
                  <h3 className="text-xl font-semibold mt-4 text-gray-800 dark:text-white">{profile.name}</h3>
                  <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">{profile.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Modal */}
            {activeModal !== null && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-2xl w-[90%] max-w-md text-center">
                  <h3 className="text-2xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">
                    {codingProfiles[activeModal].name}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-md mb-6">
                    {codingProfiles[activeModal].summary}
                  </p>
                  <button
                    onClick={closeModal}
                    className="mt-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded-full transition"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}

            {/* About Me Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative bg-gradient-to-br from-white to-indigo-50 dark:from-gray-800 dark:to-gray-900 shadow-2xl rounded-3xl p-8 sm:p-10 md:p-12 max-w-5xl mx-auto border border-gray-200 dark:border-gray-700 mt-16"
            >
              <h2 className="text-4xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-6 text-center">
                About Me
              </h2>
              <p className="text-gray-800 dark:text-gray-200 text-lg sm:text-xl leading-relaxed text-center">
                I’m a passionate Software Developer who enjoys building clean, efficient, and visually engaging applications. 
                From problem-solving to working with cutting-edge technologies, I strive for excellence in every line of code.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mt-8">
                    <a href="https://x.com/aryan07vns" target="_blank" rel="noopener noreferrer">
                      <FaXTwitter className="w-7 h-7 text-blue-500 hover:text-blue-700 transition-transform duration-200 hover:scale-110 cursor-pointer" />
                    </a>
                    <a href="https://github.com/anuj2810" target="_blank" rel="noopener noreferrer">
                      <FaGithub className="w-7 h-7 text-gray-700 dark:text-white hover:text-black transition-transform duration-200 hover:scale-110 cursor-pointer" />
                    </a>
                    <a href="https://www.linkedin.com/in/imanuj-arya/" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className="w-7 h-7 text-blue-700 hover:text-blue-800 transition-transform duration-200 hover:scale-110 cursor-pointer" />
                    </a>
                    <a href="mailto:aryan07vns@gmail.com">
                      <FaEnvelope className="w-7 h-7 text-red-500 hover:text-red-700 transition-transform duration-200 hover:scale-110 cursor-pointer" />
                    </a>
                  </div>
            </motion.div>
          </motion.div>
        )}
      </div>

    
      </motion.section>
    </div>

  
  </>
  );
}

