


import React, { useState, useRef, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {  X , MoreVertical  } from "lucide-react";
import profilePic from "../assets/self5.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [notifications] = useState(1);
  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");
  const profileRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];



return (
  <nav className="fixed top-0 w-full z-50 bg-white/70 dark:bg-gray-900/80 backdrop-blur-md shadow-md border-b border-gray-200 dark:border-gray-800">
    <div className="w-full px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">

  {/* Logo */}
  <div className="flex items-center cursor-pointer" onClick={() => navigate("/")}>
    <img src="/po_f2.jpg" alt="Logo" className="w-8 h-8 mr-2 rounded-full border border-indigo-600" />
    <h1 className="text-xl sm:text-2xl font-bold text-indigo-600 tracking-wide">Portfolio</h1>
  </div>

  {/* Desktop Nav Links */}
  <ul className="hidden md:flex ml-auto space-x-8 text-gray-800 dark:text-gray-100 font-medium tracking-wide text-base">
    {navLinks.map((link) => (
      <li key={link.name}>
        <NavLink
          to={link.path}
          className={({ isActive }) =>
            `transition-all duration-200 hover:text-indigo-600 ${
              isActive ? "text-indigo-600 font-semibold" : ""
            }`
          }
        >
          {link.name}
        </NavLink>
      </li>
    ))}
  </ul>

  {/* Right Controls */}
  <div className="flex items-center space-x-3 sm:space-x-4">

    {/* Theme Toggle */}
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="text-gray-800 dark:text-white p-2 rounded-full focus:outline-none hover:bg-gray-200 rounded-full dark:hover:bg-gray-700 transition-colors duration-300 px-1 py-1"
    >
      {darkMode ? "🌞" : "🌙"}
    </button>

    {/* Profile */}
    <div className="relative" ref={profileRef}>
      <img
        src={profilePic}
        alt="Profile"
        onClick={() => setProfileOpen(!profileOpen)}
        className="w-12 h-12 rounded-full border-2 border-indigo-600 cursor-pointer hover:scale-105 transition-transform"
      />
      {notifications > 0 && (
        <div className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1 py-0.5">
          {notifications}
        </div>
      )}

      {/* Dropdown */}
      {profileOpen && (
        <div className="absolute right-0 mt-3 w-72 sm:w-80 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-4 sm:p-6 z-50 transition-all duration-300 animate-fade-in-down">
          <div className="flex items-center mb-4">
            <img
              src={profilePic}
              alt="Profile"
              className="w-16 h-16 rounded-full border-2 border-indigo-600"
            />
            <div className="ml-4">
              <h2 className="text-lg font-semibold text-indigo-600">Anuj Shubham Arya</h2>
              <p className="text-sm text-gray-700 dark:text-gray-300">Software Developer</p>
            </div>
          </div>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
            Passionate Software Developer skilled in building efficient,
            user-focused applications. I love transforming ideas into real-world
            digital solutions through clean code and smart problem-solving.
          </p>
          <button
            onClick={() => {
              setProfileOpen(false);
              navigate("/profile");
            }}
            className="w-full text-sm text-indigo-600 hover:underline py-2 rounded-md"
          >
            View Profile
          </button>
        </div>
      )}
    </div>

    {/* Hamburger Button */}
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="md:hidden text-gray-800 dark:text-white focus:outline-none"
    >
      {isOpen ? <X size={28} /> : <MoreVertical  size={28} />}
    </button>
  </div>
</div>


    {/* Mobile Menu */}
    {isOpen && (
      <div className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 px-4 pb-6 pt-2 transition-all duration-300">
        <ul className="space-y-4 text-gray-800 dark:text-gray-100 font-medium text-base tracking-wide">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block transition-colors duration-200 hover:text-indigo-600 ${
                    isActive ? "text-indigo-600 font-semibold" : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    )}
  </nav>

    

);



};

export default Navbar;
