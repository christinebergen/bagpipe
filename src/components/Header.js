import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/piperlogo.webp";

const Header = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="Bagpipe Lessons" className="h-16" />{" "}
          {/* Adjust the class names as needed */}
        </Link>
        <div className="flex space-x-4">
          <Link className="text-gray-300 hover:text-white" to="/">
            Home
          </Link>
          <Link className="text-gray-300 hover:text-white" to="/about">
            About
          </Link>
          <Link className="text-gray-300 hover:text-white" to="/lessons">
            Lessons
          </Link>
          <Link className="text-gray-300 hover:text-white" to="/hire">
            Hire for Events
          </Link>
          <Link className="text-gray-300 hover:text-white" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
