


import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Profile from "./components/Profile";  
import HeroSection from "./components/HeroSection";

import AboutSection from "./pages/AboutSection";
import SkillsSection from "./pages/SkillsSection";
import ProjectsSection from "./pages/ProjectsSection";
import ContactSection from "./pages/ContactSection";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/skills" element={<SkillsSection />} />
        <Route path="/projects" element={<ProjectsSection />} />
        <Route path="/contact" element={<ContactSection />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
 // const location = useLocation();

  //const isHome = location.pathname === "/";

  return (

    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-sans"
    >
      <Navbar />
      <main className="flex-1"
       >
        <AnimatedRoutes />
      </main>

      {/* Footer should stay at the bottom */}
      <Footer className="flex-shrink-0" />
    </div>
    


  );
}




