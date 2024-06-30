import React from "react";
import Slideshow from "./Slideshow";

const Home = () => {
  return (
    <div className="container mx-auto p-4 mb-8">
      <div className="bg-[#DFDCD5] shadow-md rounded-md p-10 mb-8">
        <h2 className="text-2xl md:text-4xl text-center mb-4 font-bold">
          Celtic Sounds of Nanaimo: Bagpiper for Hire, Expert Instruction, and
          Music Connections
        </h2>
        <div className="flex justify-center items-center">
          <hr className="w-3/4 border-2 mt-4 mb-4 border-[#B8B5AE]"></hr>
        </div>
        <p className="text-center text-md md:text-xl">
          Whether you're seeking a small Celtic musical ensemble, a Pipes and
          Drums band, a Celtic punk band, a piper to add a special touch to your
          event, or want to master the bagpipes yourself, Celtic Coast Bagiper
          Aaron Bergen is your go-to expert.
        </p>
      </div>
      <Slideshow />
    </div>
  );
};

export default Home;
