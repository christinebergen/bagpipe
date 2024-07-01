import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#DFDCD5] shadow-inner py-4 ">
      <div  className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
        <div id="footer" className="text-center md:text-left lg:pl-10">
          <p className="text-gray-800">&copy; 2024 Celtic Coast Bagpiper</p>
        </div>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 lg:pr-10">
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
    </footer>
  );
};

export default Footer;

