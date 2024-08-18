import React from "react";
import Slideshow from "./Slideshow";
import image1 from "../assets/piper18mh.jpg";
import Divider from "../components/Divider";
import celtic1 from "../assets/celtic1.webp";
import email from "../assets/email.png";
import skye from "../assets/skye.png";

const Home = () => {
  return (
    <div className="container mx-auto p-4 mb-8">
      <div className="bg-lightBackground dark:bg-darkBackground shadow-md dark:shadow-lg rounded-md p-10 mb-8">
        <h2 className="text-2xl md:text-4xl text-center mb-4 font-bold text-gray-800 dark:text-white">
          Celtic Sounds of Nanaimo: Bagpiper for Hire, Expert Instruction, and
          Music Connections
        </h2>
        <div className="flex justify-center items-center">
          <hr className="w-3/4 border-2 mt-4 mb-4 border-gray-800 dark:border-borderColor"></hr>
        </div>
        <p className="text-center text-md md:text-xl text-gray-800 dark:text-white">
          Whether you're seeking a small Celtic musical ensemble, a Pipes and
          Drums band, a Celtic punk band, a piper to add a special touch to your
          event, or want to learn the bagpipes yourself, Celtic Coast Bagiper
          Aaron Bergen is your go-to expert.
        </p>
      </div>
      <Slideshow />

      <div className="flex flex-col md:flex-row m-10 md:m-20 gap-8">
        <a
          href="/about"
          className="border-2 md:w-1/2 rounded-md shadow-lg p-4 flex flex-col items-center text-center border-linkBackground dark:border-borderColor bg-lightBackground dark:bg-darkBackground"
        >
          <img
            src={image1}
            className="w-2/3 md:w-1/4 h-auto border-2 border-linkBackground rounded-lg"
          />
          <h1 className="text-4xl text-center mt-8 text-gray-800 dark:text-primaryText">
            About Aaron
          </h1>

          <p className="text-center text-md md:text-xl text-gray-800 dark:text-white mt-4">
            Discover Aaron's journey and learn how his passion, experience, and
            dedication have shaped his path. Click here to explore his story
          </p>
        </a>

        <a
          href="/hire"
          className="border-2 md:w-1/2 rounded-md shadow-lg p-4 flex flex-col items-center text-center border-linkBackground dark:border-borderColor bg-lightBackground dark:bg-darkBackground"
        >
          <img src={celtic1} className="w-2/3 md:w-1/3 h-auto rounded-lg" />
          <h1 className="text-4xl text-center mt-8 text-gray-800 dark:text-primaryText">
            Hire Aaron
          </h1>

          <p className="text-center text-md md:text-xl text-gray-800 dark:text-white mt-4">
            Aaron is a versatile musician. Whether you're looking for a piper to
            pipe you in at a special event, an energetic celtic punk band, or a
            pipes and drums ensemble, Aaron has the connections to make this
            happen. Click here to learn more.
          </p>
        </a>
      </div>
      <div className="flex flex-col md:flex-row m-10 md:m-20 gap-8">
        <a
          href="/lessons"
          className="border-2 md:w-1/2 rounded-md shadow-lg p-4 flex flex-col items-center text-center border-linkBackground dark:border-borderColor bg-lightBackground dark:bg-darkBackground"
        >
          <img
            src={skye}
            className="w-2/3 md:w-1/3 h-auto mt-4 border-2 border-linkBackground rounded-lg"
          />
          <h1 className="text-4xl text-center mt-8 text-gray-800 dark:text-primaryText">
            Bagpipe Lessons
          </h1>

          <p className="text-center text-md md:text-xl text-gray-800 dark:text-white mt-4">
            Whether you've always wanted to learn to play the pipes or you want
            to see if the pipes are a good fit for you, Aaron's convenient and
            flexible bagpipe lessons can help you get started. He can also help
            you prepare for the exciting world of competition if you'd like to
            compete.
          </p>
        </a>
        <a
          href="/contact"
          className="border-2 md:w-1/2 rounded-md shadow-lg p-4 flex flex-col items-center text-center border-linkBackground dark:border-borderColor bg-lightBackground dark:bg-darkBackground"
        >
          <img src={email} className="w-2/3 md:w-1/4 h-auto" />
          <h1 className="text-4xl text-center mt-8 text-gray-800 dark:text-primaryText">
            Contact Aaron
          </h1>

          <p className="text-center text-md md:text-xl text-gray-800 dark:text-white mt-4">
            Have questions? Want to book your first bagpipe lesson? Click here
            to send him a message and get in touch.
          </p>
        </a>
      </div>
    </div>
  );
};

export default Home;
