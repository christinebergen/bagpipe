import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#DFDCD5] shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex flex-col">
          <Link to="/">
            <img src={logo} alt="Bagpipe Lessons" className="h-24 md:h-48" />{" "}
          </Link>
          <h1 className="text-xl md:text-3xl">Celtic Coast Bagpiper</h1>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="text-gray-800 hover:text-white focus:outline-none"
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

        <div className={`hidden md:flex md:text-2xl space-x-4`}>
          <Link className="text-gray-800 hover:text-white" to="/">
            Home
          </Link>
          <Link className="text-gray-800 hover:text-white" to="/about">
            About
          </Link>
          <Link className="text-gray-800 hover:text-white" to="/lessons">
            Lessons
          </Link>
          <Link className="text-gray-800 hover:text-white" to="/hire">
            Hire for Events
          </Link>
          <Link className="text-gray-800 hover:text-white" to="/contact">
            Contact
          </Link>
        </div>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-[#DFDCD5]`}>
        <div className="flex flex-col items-start p-4 space-y-2">
          <Link
            className="text-gray-800 hover:text-white"
            to="/"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            className="text-gray-800 hover:text-white"
            to="/about"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            className="text-gray-800 hover:text-white"
            to="/lessons"
            onClick={() => setIsOpen(false)}
          >
            Lessons
          </Link>
          <Link
            className="text-gray-800 hover:text-white"
            to="/hire"
            onClick={() => setIsOpen(false)}
          >
            Hire for Events
          </Link>
          <Link
            className="text-gray-800 hover:text-white"
            to="/contact"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
