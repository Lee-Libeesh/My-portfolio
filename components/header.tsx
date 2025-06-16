"use client";
import React, { useEffect, useState } from "react";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  // On mount, check localStorage for theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.body.classList.add("dark-mode");
    }
  }, []);

  // Update body class and localStorage when darkMode changes
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <header
      id="header"
      className="fixed top-5 left-1/2 h-[3.5rem] max-w-dvw
       -translate-x-1/2 rounded-full border-white border-opacity-40
        bg-white bg-opacity-80 shadow-lg backdrop-blur-md z-50">
      <div className="flex items-center justify-between h-full px-4 font-bold">
        <nav className="space-x-10">
          <a href="#home" className="text-gray-600 hover:text-gray-800">
            Home
          </a>
          <a href="#about" className="text-gray-600 hover:text-gray-800">
            About
          </a>
          <a href="#projects" className="text-gray-600 hover:text-gray-800">
            Projects
          </a>
          <a href="#skills" className="text-gray-600 hover:text-gray-800">
            Skills
          </a>
          <a href="#experience" className="text-gray-600 hover:text-gray-800">
            Experience
          </a>
          <a href="#contact" className="text-gray-600 hover:text-gray-800">
            Contact
          </a>
        </nav>
      </div>
    </header>   
    
  );
}
