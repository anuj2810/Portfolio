



import React from "react";
import profilePic from "../assets/profile.jpg"; // Your profile image path
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaXTwitter } from "react-icons/fa6";
import { FaReact,  FaGit, FaCss3Alt, FaJsSquare,  } from "react-icons/fa";
import {  FaPython } from "react-icons/fa";
import {  SiCplusplus,SiMysql,SiMongodb, SiFlask,  SiScikitlearn, SiNumpy, SiPandas, SiHtml5, SiOpenai } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";
import { VscVscode } from "react-icons/vsc";
import { SiC } from "react-icons/si";
const Profile = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-12 px-6 sm:px-8 md:px-16">
      {/* Hero Section */}
      <motion.section
        className="flex flex-col md:flex-row items-center justify-center md:justify-start mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="md:w-[20%] w-40 mb-6 md:mb-0 my-20 mx-auto">
          <img src={profilePic} alt="Profile" className="w-full h-auto rounded-full border-6 border-indigo-600 shadow-lg" />
        </div>
        <div className="md:w-2/3 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-semibold text-indigo-600 tracking-tight mb-4">Anuj Shubham Arya </h1>
          <p className="text-lg md:text-2xl text-gray-800 dark:text-gray-200 mt-2"> Software Developer | Bridging Code & Design for Better User Experiences</p>
          <p className="text-gray-600 dark:text-gray-400 mt-2 mb-6 max-w-xl mx-auto md:mx-0">
            Passionate software developer dedicated to solving real-world problems through 
            efficient and user-centric digital solutions. With a strong focus on writing 
            clean, maintainable code and building scalable systems, I aim to create 
            meaningful technology that makes everyday life easier and more intuitive.
          </p>
          <div className="flex justify-center md:justify-start space-x-6">
            <a href="https://github.com/anuj2810" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-2xl text-gray-600 dark:text-gray-200 hover:text-indigo-600" />
            </a>
            <a href="https://www.linkedin.com/in/imanuj-arya" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl text-gray-600 dark:text-gray-200 hover:text-indigo-600" />
            </a>
            <a href="https://x.com/aryan07mzp" target="_blank" rel="noopener noreferrer">
              <FaXTwitter className="text-2xl text-gray-600 dark:text-gray-200 hover:text-indigo-600" />
            </a>
          </div>
        </div>
      </motion.section>

            {/* Personal Info Section */}
            <motion.section className="mb-20" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }}>
              <h2 className="text-3xl font-semibold text-indigo-600 mb-8 text-center"> 👤Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                  <p className="text-gray-700 dark:text-gray-300 pt-2"><strong>Name:</strong> Anuj Shubham Arya</p>
                  <p className="text-gray-700 dark:text-gray-300"><strong>Email:</strong> aryan07vns@gmail.com</p>
                  <p className="text-gray-700 dark:text-gray-300"><strong>Location:</strong> New Delhi, India</p>
                  <p className="text-gray-700 dark:text-gray-300"><strong>Languages:</strong> English, Hindi</p>
                  <p className="text-gray-700 dark:text-gray-300"><strong>Personality :</strong> Curious, Consistent, Creative</p>
                  <p className="text-gray-700 dark:text-gray-300"><strong>Interests : </strong> AI/ML, Open-Source Contribution, Coding Challenges</p>
                  <p className="text-gray-700 dark:text-gray-300 pb-2"><strong>Career Goal : </strong> To become a Software developer contributing to impact software solutions</p>

                </div>
              </div>
            </motion.section>

            <motion.section className="mb-20" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }}>
              <h2 className="text-3xl font-semibold text-indigo-600 mb-8 text-center"> 🌟 Career Objective</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-indigo-600 mb-2"> 👤 Passionate Software Developer </h3>
                  <p className=" text-gray-800 dark:text-gray-200 mb-6 px-5 leading-relaxed">
                    Harnessing my skills in Software Development, 🤖 AI/ML, and 🧠 
                    Problem-Solving to craft scalable, innovative and user-centric 
                    digital solutions.
                    My mission is to build technology that tackles 🌍 real-world challenges and 
                    drives impactful change across the tech industry and enhances user experiences. 💡  

                  </p>
                </div>
              </div>
            </motion.section>


            {/* Education Section */}
            <motion.section className="mb-16" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.6 }}>
        <h2 className="text-3xl font-semibold text-indigo-600 mb-8 text-center">📝 Education </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-indigo-600">🎓B.Tech in Computer Science & Engineering (2022 - 2026)</h3>
            <p className="text-gray-600 dark:text-gray-400">RAJ KUMAR GOEL INSTITUTE OF TECHNOLOGY , Ghaziabad , 201017   affiliated to <br />
            Dr. A.P.J. Abdul Kalam Technical University( AKTU ), Lucknow </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-indigo-600">📚 Senior Secondary (12th Grade)</h3>
            <p className="text-gray-600 dark:text-gray-400">
              School : The Ideal New Star English School, Varanasi<br />
              Board: CBSE <br />
              Passing Year : 2021
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-indigo-600">📖 Secondary (10th Grade)</h3>
            <p className="text-gray-600 dark:text-gray-400">
              School : Mahatama J.F. Public School, Varanasi<br />
              Board: CBSE <br />
              Passing Year : 2019
          </p>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        className="mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <h2 className="text-3xl font-semibold text-indigo-600 mb-8 text-center"> 💻 Skills & Technologies</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
              { name: "C", icon: <SiC />, level: "80%" },
              { name: "C++", icon: <SiCplusplus />, level: "80%" },
              { name: "Python", icon: <FaPython />, level: "75%" },            
              { name: "HTML5", icon: <SiHtml5 />, level: "70%" },
              { name: "CSS", icon: <FaCss3Alt />, level: "75%" },
              { name: "JavaScript", icon: <FaJsSquare />, level: "50%" },
              //{ name: "Tailwind CSS", icon: <SiTailwindcss />, level: "60%" },
              { name: "React", icon: <FaReact />, level: "65%" },
              { name: "Flask", icon: <SiFlask />, level: "60%" },
      
              
//              { name: "Node.js", icon: <FaNodeJs />, level: "80%" },
              
              //{ name: "Database", icon: <FaDatabase />, level: "70%" },
              
              { name: "MongoDB", icon: <SiMongodb />, level: "50%" },
              { name: "MySQL", icon: <SiMysql />, level: "55%" },
//              { name: "Server", icon: <FaServer />, level: "75%" },
              //{ name: "FastAPI", icon: <SiFastapi />, level: "70%" },
//              { name: "Vercel", icon: <SiVercel />, level: "90%" },
//              { name: "Netlify", icon: <SiNetlify />, level: "90%" },
//            { name: "Docker", icon: <FaDocker />, level: "80%" },
              
//              { name: "Redux", icon: <SiRedux />, level: "75%" },
//              { name: "Next.js", icon: <SiNextdotjs />, level: "80%" },
//              { name: "TypeScript", icon: <SiTypescript />, level: "70%" },
//              { name: "Heroku", icon: <SiHeroku />, level: "85%" },
//              { name: "Render", icon: <SiRender />, level: "80%" },
//              { name: "Railway", icon: <SiRailway />, level: "75%" },
              { name: "Scikit-learn", icon: <SiScikitlearn />, level: "60%" },
              { name: "NumPy", icon: <SiNumpy />, level: "65%" },
              { name: "Pandas", icon: <SiPandas />, level: "55%" },
              { name: "OpenAI", icon: <SiOpenai />, level: "60%" },
              { name: "Git", icon: <FaGit />, level: "65%" },
              { name: "GitHub", icon: <FaGithub />, level: "60%" },              
              { name: "VS Code", icon: <VscVscode />, level: "60%" },
              
            ].map(({ name, icon, level }) => (
            <div className="skill-card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex items-center space-x-4">
              <div className="text-4xl text-indigo-600">{icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-indigo-600">{name}</h3>
                <div className="w-full h-2 bg-gray-300 dark:bg-gray-700 rounded-full mt-2">
                  <div className="h-2 bg-indigo-600 rounded-full" style={{ width: level }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Achievements Section */}
      <motion.section
        className="mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <h2 className="text-3xl font-semibold text-indigo-600 mb-8 text-center">🏆 Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="achievement-card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex items-start gap-4 relative">
            {/* Image on the left */}
            <img
              src="../images/lc_badge.jpg" // Replace with actual image path
              alt="Bootcamp"
              className="w-16 h-16 object-cover rounded-md"
            />

            {/* Content on the right */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-indigo-600"> Received LeetCode Batch </h3>
              <p className="text-gray-600 dark:text-gray-400">
                SOLVING PROBLEMS 50+ DAYS IN 2025
              </p>
            </div>

            {/* External link icon */}
            <a
              href="https://leetcode.com/medal/?showImg=0&id=6573138&isLevel=false"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 text-indigo-500 hover:text-indigo-700"
            >
              <FiExternalLink size={20} />
            </a>
          </div>

          <div className="achievement-card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex items-start gap-4 relative">
            {/* Image on the left */}
            <img
              src="../images/leetcode.png" // Replace with actual image path
              alt="Bootcamp"
              className="w-16 h-16 object-cover rounded-md"
            />

            {/* Content on the right */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-indigo-600"> 🔢 Solved more than 300+ (DSA) problems on LeetCode </h3>
              <p className="text-gray-600 dark:text-gray-400">
                
              </p>
            </div>

            {/* External link icon */}
            <a
              href="https://leetcode.com/u/aryan07mzp/"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 text-indigo-500 hover:text-indigo-700"
            >
              <FiExternalLink size={20} />
            </a>
          </div>
          
        </div>
      </motion.section>

      {/* Certifications Section */}
<motion.section
  className="mb-16"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1, delay: 0.9 }}
>
  <h2 className="text-3xl font-semibold text-indigo-600 mb-8 text-center">📜 Certifications</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Card 1 */}
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold text-indigo-500 mb-2">🎓 Coursera : Programming in Python</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">Provided by Coursera • 2023</p>
      <a
        href="https://coursera.org/share/f5c7f10c178a01c1f570a6b9d99449ce"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
      >
        View Certificate
      </a>
    </div>

    {/* Card 2 */}
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold text-indigo-500 mb-2">📜 NPTEL(Swayam) : The Joy of Computing using Python</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">Provided by NPTEL • 2024</p>
      <a
        href="https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS57S66970020930357538"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
      >
        View Certificate
      </a>
    </div>
  </div>
</motion.section>


      {/* Projects Section */}
      <motion.section
        className="mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
      >
        <h2 className="text-3xl font-semibold text-indigo-600 mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            
              { 
                name: "📰 Fake News Detection", 
                description: "Developed a machine learning-based system for detecting fake news articles by analyzing content and context." 
              },
              { 
                name: "💰 The Expense Tracker", 
                description: "Built a  expense tracking app that helps users manage their finances with  real-time data and records." 
              },
              { 
                name: "🏫 College Website", 
                description: "Designed and developed a simple college website to see college profiles, Fees and courses with a responsive UI." 
              },
              { 
                name: "🎮 Tic Tac Toe game", 
                description: "Created a simple, interactive Tic Tac Toe game with a clean UI, playable by multiple users." 
              },
              { 
                name: "🐍 Snake Mania Game", 
                description: "Developed a fun, interactive Snake game with smooth gameplay, leaderboard integration, and real-time scoring." 
              }

 
        ].map(({ name, description }) => (
            <div className="project-card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-indigo-600">{name}</h3>
              <p className="text-gray-600 dark:text-gray-400">{description}</p>
            </div>
          ))}
        </div>
      </motion.section>

            {/* Hobbies Section */}
            <motion.section className="mb-16" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.7 }}>
        <h2 className="text-3xl font-semibold text-indigo-600 mb-8 text-center">Hobbies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {['🧠 Exploring new tech and tools', '🎮Gaming', '🏍️Travelling', '📚 Reading tech articles and blogs to stay updated', '🤖 AI Experiments','💻 Participating in online coding challenges and hackathons',' 🎬 Watching Movies'].map(hobby => (
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <p className="text-gray-700 dark:text-gray-300 font-medium text-lg">{hobby}</p>
            </div>
          ))}
        </div>
      </motion.section>

      
      <motion.section
        className="text-center px-4 py-12 hover:scale-105 md:px-8 bg-gradient-to-r from-indigo-50 via-indigo-100 to-indigo-200 rounded-lg shadow-md dark:bg-gray-900 dark:from-gray-800 dark:to-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
      >
        <h2 className="text-3xl font-semibold text-indigo-600 dark:text-indigo-300 mb-6">Summary</h2>
        <p className="text-lg text-gray-800 dark:text-gray-100 leading-relaxed mb-6">
          I’m <span className="text-indigo-600 font-semibold">Anuj Shubham Arya</span>, a passionate and consistent software developer based in New Delhi, India. With a deep interest in designing intelligent, reliable, and high-performance software systems, I work across a wide range of technologies including <span className="font-semibold text-indigo-600">React.js</span> for frontend and <span className="font-semibold text-indigo-600">Python</span> for backend logic and ML integration. My focus is on writing clean, maintainable code and building real-world solutions that make an impact.
        </p>

        <p className="text-lg text-gray-800 dark:text-gray-100 leading-relaxed mb-6">
          I’ve worked on projects like a <span className="text-indigo-600 font-semibold">Fake News Detection system</span>, integrating machine learning and web development seamlessly to create intuitive and useful applications.
        </p>

        <p className="text-lg text-gray-800 dark:text-gray-100 leading-relaxed mb-6">
          I constantly sharpen my problem-solving skills through competitive programming on <span className="text-indigo-600 font-semibold">LeetCode</span>, <span className="text-indigo-600 font-semibold">Codeforces</span>, <span className="text-indigo-600 font-semibold">CodeChef</span>, and <span className="text-indigo-600 font-semibold">HackerRank</span>. I also contribute to <span className="text-indigo-600 font-semibold">open-source</span> projects, which allows me to collaborate, learn, and give back to the community.
        </p>

        <p className="text-lg text-gray-800 dark:text-gray-100 leading-relaxed">
          I’m driven by curiosity, motivated by challenges, and always eager to build something meaningful that leaves a lasting impact.
        </p>
      </motion.section>

      

      <motion.section
        className="text-center my-10 px-6 py-8 bg-white dark:bg-gray-800 rounded-lg shadow-xl transform transition-all duration-500 hover:scale-105"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <h2 className="text-4xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-5">
          Thank You for Visiting! 🙏
        </h2>
        <p className="text-lg text-gray-800 dark:text-gray-200 mb-6 px-20 leading-relaxed">
          I truly appreciate you taking the time to explore my work. If you'd like to connect, collaborate, or discuss future opportunities, feel free to reach out. I’m always excited to collaborate and grow in the ever-evolving world of tech!
        </p>
        <p className="text-lg text-gray-800 dark:text-gray-200 mb-6 leading-relaxed">
          Have a wonderful day ahead! 😊
        </p>
        <a
          href="mailto:your.email@example.com"
          className="inline-flex items-center bg-indigo-600 text-white py-3 px-10 rounded-full shadow-lg hover:bg-indigo-700 transition-colors duration-300 transform hover:scale-105"
        >
          <img
            src="https://static.vecteezy.com/system/resources/previews/016/716/465/non_2x/gmail-icon-free-png.png" // You can change this URL to your image's URL
            alt="Gmail Logo"
            className="w-6 h-6 mr-3"
          />
          Get in Touch
        </a>
      </motion.section>


      
    </div>
  );
};

export default Profile;


// "use client";

// import { motion } from "framer-motion";
// import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

// const Profile = () => {
//   const personalInfo = [
//     { label: "Email", value: "your.email@example.com", icon: <FaEnvelope /> },
//     { label: "Phone", value: "+91 1234567890", icon: <FaPhone /> },
//     { label: "Location", value: "Your City, India", icon: <FaMapMarkerAlt /> },
//   ];

//   const skills = [
//     { name: "JavaScript", level: "Expert" },
//     { name: "React", level: "Advanced" },
//     { name: "Node.js", level: "Intermediate" },
//     { name: "Python", level: "Expert" },
//     { name: "Tailwind CSS", level: "Advanced" },
//     { name: "MongoDB", level: "Intermediate" },
//   ];

//   const education = [
//     {
//       degree: "B.Tech in Computer Science",
//       institution: "XYZ University",
//       year: "2021 - 2025",
//     },
//     {
//       degree: "Intermediate",
//       institution: "ABC College",
//       year: "2019 - 2021",
//     },
//   ];

//   const hobbies = [
//     "Reading Tech Blogs",
//     "Gaming",
//     "Travelling",
//     "Photography",
//     "AI Experiments",
//   ];

//   const projects = [
//     {
//       name: "Fake News Detection",
//       description: "AI-powered app to detect fake news from web sources.",
//       link: "#",
//     },
//     {
//       name: "Portfolio Website",
//       description: "Personal website built with React and Tailwind CSS.",
//       link: "#",
//     },
//     {
//       name: "Weather App",
//       description: "Simple weather app using OpenWeatherMap API.",
//       link: "#",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white px-6 py-10">
//       {/* Header */}
//       <motion.div
//         className="text-center mb-12"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <img
//           src="/profile.jpg"
//           alt="Profile"
//           className="w-32 h-32 mx-auto rounded-full mb-4 shadow-lg border-4 border-indigo-500"
//         />
//         <h1 className="text-4xl font-bold">Anuj Shubham Arya</h1>
//         <p className="text-indigo-500 mt-2">Full Stack Developer & AI Enthusiast</p>
//       </motion.div>

//       {/* Personal Info */}
//       <motion.section
//         className="mb-16"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1, delay: 0.3 }}
//       >
//         <h2 className="text-3xl font-semibold text-indigo-600 mb-8 text-center">
//           Personal Information
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {personalInfo.map((item, index) => (
//             <div
//               key={index}
//               className="flex items-center space-x-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow"
//             >
//               <div className="text-indigo-600 text-xl">{item.icon}</div>
//               <div>
//                 <p className="font-semibold">{item.label}</p>
//                 <p className="text-sm text-gray-600 dark:text-gray-300">
//                   {item.value}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </motion.section>

//       {/* Skills */}
//       <motion.section
//         className="mb-16"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1, delay: 0.4 }}
//       >
//         <h2 className="text-3xl font-semibold text-indigo-600 mb-8 text-center">
//           Skills
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {skills.map((skill, index) => (
//             <div
//               key={index}
//               className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center"
//             >
//               <p className="text-xl font-semibold text-indigo-600">{skill.name}</p>
//               <p className="text-gray-600 dark:text-gray-300">{skill.level}</p>
//             </div>
//           ))}
//         </div>
//       </motion.section>

//       {/* Education */}
//       <motion.section
//         className="mb-16"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1, delay: 0.5 }}
//       >
//         <h2 className="text-3xl font-semibold text-indigo-600 mb-8 text-center">
//           Education
//         </h2>
//         <div className="space-y-6">
//           {education.map((edu, index) => (
//             <div
//               key={index}
//               className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
//             >
//               <p className="text-xl font-semibold text-indigo-600">{edu.degree}</p>
//               <p>{edu.institution}</p>
//               <p className="text-gray-600 dark:text-gray-300">{edu.year}</p>
//             </div>
//           ))}
//         </div>
//       </motion.section>

//       {/* Projects */}
//       <motion.section
//         className="mb-16"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1, delay: 0.6 }}
//       >
//         <h2 className="text-3xl font-semibold text-indigo-600 mb-8 text-center">
//           Featured Projects
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
//             >
//               <h3 className="text-2xl font-semibold text-indigo-600 mb-2">
//                 {project.name}
//               </h3>
//               <p className="mb-2 text-gray-700 dark:text-gray-300">
//                 {project.description}
//               </p>
//               <a
//                 href={project.link}
//                 className="text-blue-500 hover:underline"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 View Project
//               </a>
//             </div>
//           ))}
//         </div>
//       </motion.section>

//       {/* Hobbies */}
//       <motion.section
//         className="mb-16"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1, delay: 0.7 }}
//       >
//         <h2 className="text-3xl font-semibold text-indigo-600 mb-8 text-center">
//           Hobbies
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {hobbies.map((hobby, index) => (
//             <div
//               key={index}
//               className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow text-center"
//             >
//               <p className="text-xl font-semibold text-indigo-600">{hobby}</p>
//             </div>
//           ))}
//         </div>
//       </motion.section>
//     </div>
//   );
// };

// export default Profile;



