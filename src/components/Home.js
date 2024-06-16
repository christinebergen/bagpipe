import React from "react";
import Slideshow from "./Slideshow";

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl text-center mb-8">Welcome to Bagpipe Lessons</h1>
      <p className="text-center">
        Learn to play the bagpipes from a professional instructor.
      </p>
      <Slideshow />
    </div>
  );
};

export default Home;
