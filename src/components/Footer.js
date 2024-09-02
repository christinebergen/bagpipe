import React from "react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  const getLinkClass = (path) => {
    return location.pathname === path
      ? "font-bold underline dark:text-white" // Active link color
      : "text-gray-800 hover:text-gray-600 dark:text-white";
  };

  return (
    <footer className="bg-lightBackground dark:bg-darkBackground py-4 dark:shadow-lg pt-10">
      <div className="flex justify-center">
        <div className="w-full md:w-2/3 text-center">
          <p className="italic text-gray-800 dark:text-white">
            Aaron respectfully acknowledges that he lives, works, and plays on the
            traditional and unceded territories of the Coast Salish peoples,
            including the territories of the Snuneymuxw, Snaw-naw-as, and
            Stzuminus First Nations.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center">
              <hr className="w-3/4 border-1 mt-4 mb-4 border-gray-600 rounded dark:border-borderColor mt-12 mb-12"></hr>
            </div>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
        <div id="footer" className="text-center md:text-left lg:pl-10">
          <p className="text-gray-800 text-2xl dark:text-white">
            &copy; 2024 Celtic Coast Bagpiper
          </p>
        </div>
        <div className="flex flex-wrap md:flex-row justify-center items-center text-2xl flex-row gap-4 lg:pr-10">
          <Link className={getLinkClass("/")} to="/">
            Home
          </Link>
          <Link className={getLinkClass("/about")} to="/about">
            About
          </Link>
          <Link className={getLinkClass("/lessons")} to="/lessons">
            Lessons
          </Link>
          <Link className={getLinkClass("/hire")} to="/hire">
            Hire for Events
          </Link>
          <Link className={getLinkClass("/contact")} to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
