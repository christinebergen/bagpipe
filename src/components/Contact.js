import React from "react";
import facebook from "../assets/facebook.png";
import insta from "../assets/insta.png";
import email from "../assets/email.png";
import gig from "../assets/gig.png";
import darkemail from "../assets/emaildark.png";

const Contact = () => {
  return (
    <div className="bg-medBackground dark:bg-medDarkBackground min-h-screen">
      <h1 className="text-4xl text-center mt-8 mb-8 text-gray-800 dark:text-primaryText">
        Contact Aaron
      </h1>
      <div className="flex justify-center items-center">
        <hr className="w-3/4 border-2 mt-4 mb-4 border-gray-800 dark:border-borderColor mt-12 mb-12"></hr>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-3/4 md:w-2/3 lg:w-1/2 text-gray-800 dark:text-secondaryText text-center">
          <p className="text-xl mb-8">
            Aaron is here to help! Whether you have questions about his lessons,
            services, or availability, feel free to reach out. You can contact
            him via the methods below, and he will get back to you as soon as
            possible.
          </p>
          <div className="bg-lightBackground shadow-2xl dark:bg-darkBackground rounded-lg px-8 pt-6 pb-8 mb-4">
            <h2 className="text-2xl mb-4 mt-4 text-gray-800 dark:text-primaryText font-bold">
              E-mail:
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center md:mb-8">
              <img
                src={email}
                alt="Email icon"
                className="w-12 h-12 md:mr-8 dark:hidden"
              />
              <img
                src={darkemail}
                alt="Email icon"
                className="w-12 h-12 md:mr-8 hidden dark:block"
              />
              <a
                href="mailto:aaron.bergen@telus.net"
                className="text-blue-700 text-2xl dark:text-accentColor underline hover:font-bold"
              >
                aaron.bergen@telus.net
              </a>
            </div>

            <p className="mb-4">
              <strong className="text-2xl mb-4 text-gray-800 dark:text-primaryText">
                Contact Aaron on Gig Salad:
              </strong>
            </p>
            <a
              href="https://www.gigsalad.com/aaron_bergen_nanaimo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center mb-4"
            >
              <img
                src={gig}
                alt="gig salad icon"
                className="w-12 h-12 rounded-3xl"
              />
            </a>

            <p className="mb-4">
              <strong className="text-2xl mb-4 text-gray-800 dark:text-primaryText">
                Social Media:
              </strong>
            </p>

            <div className="flex flex-row justify-center">
              {/* <a
                href="https://www.facebook.com/aaron.bergen.90"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center w-16 h-16 justify-center "
              >
                <img src={facebook} alt="Facebook" className="w-12 h-12" />
              </a> */}

              <a
                href="https://www.instagram.com/piper_bergen/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center "
              >
                <img src={insta} alt="Instagram Icon" className="w-12 h-12" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
