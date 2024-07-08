import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logoLight from "../assets/logo.jpg";
import logoDark from "../assets/dark.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModeEnabled = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (darkModeEnabled) {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    }
  }, []);

  return (
    <nav className="bg-lightBackground shadow-2xl dark:bg-darkBackground">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex flex-col md:flex-row md:items-center">
        <Link to="/">
            <img
              src={isDarkMode ? logoDark : logoLight}
              alt="Bagpipe Lessons"
              className="h-24 md:h-48"
            />
          </Link>
          
          <h1 className="text-xl md:text-3xl dark:text-white">Celtic Coast Bagpiper</h1>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="text-gray-800 hover:text-white focus:outline-none dark:text-white"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        <div className="hidden md:flex md:text-2xl space-x-4">
          <Link className="text-gray-800 hover:text-white dark:text-white" to="/">
            Home
          </Link>
          <Link className="text-gray-800 hover:text-white dark:text-white" to="/about">
            About
          </Link>
          <Link className="text-gray-800 hover:text-white dark:text-white" to="/lessons">
            Lessons
          </Link>
          <Link className="text-gray-800 hover:text-white dark:text-white" to="/hire">
            Hire for Events
          </Link>
          <Link className="text-gray-800 hover:text-white dark:text-white" to="/contact">
            Contact
          </Link>
        </div>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-lightBackground dark:bg-darkBackground`}>
        <div className="flex flex-col items-start p-4 space-y-2">
          <Link className="text-gray-800 hover:text-white dark:text-white" to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link className="text-gray-800 hover:text-white dark:text-white" to="/about" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link className="text-gray-800 hover:text-white dark:text-white" to="/lessons" onClick={() => setIsOpen(false)}>
            Lessons
          </Link>
          <Link className="text-gray-800 hover:text-white dark:text-white" to="/hire" onClick={() => setIsOpen(false)}>
            Hire for Events
          </Link>
          <Link className="text-gray-800 hover:text-white dark:text-white" to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;

