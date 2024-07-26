import React from "react";
import image1 from "../assets/piper2mc.jpg";
import { Fade } from "react-awesome-reveal";

const Lessons = () => {
  return (
    <div className="bg-medBackground dark:bg-medDarkBackground min-h-screen">
      <Fade cascade damping={0.1} triggerOnce>
        <h1 className="text-4xl text-center mt-8 mb-8 text-gray-800 dark:text-primaryText">
          Bagpipe Lessons with Piper Aaron
        </h1>
      </Fade>
      <div className="flex flex-col justify-center items-center">
        <div className="w-3/4 md:w-2/3 lg:w-1/2 text-xl text-gray-800 dark:text-secondaryText">
          <Fade cascade damping={0.1} triggerOnce>
            <h2 className="text-4xl text-center mb-4">Beginner Lessons</h2>
            <p>
              Are you new to the world of bagpipes? Our beginner lessons will
              introduce you to the fundamentals, including:
            </p>
            <ul className="list-disc list-inside ml-4 mb-6">
              <li>
                <strong>Basic Music Theory:</strong> Understanding the musical
                notes and rhythms used in bagpiping.
              </li>
              <li>
                <strong>Instrument Familiarization:</strong> Learning about the
                parts of the bagpipe and how they work together.
              </li>
              <li>
                <strong>Basic Techniques:</strong> Mastering the essential
                finger movements and blowing techniques.
              </li>
              <li>
                <strong>Simple Tunes:</strong> Playing your first few tunes to
                build confidence and enjoyment.
              </li>
            </ul>
            <div className="flex justify-center items-center">
              <hr className="w-3/4 md:w-full border-2 mt-4 mb-4 border-gray-800 dark:border-borderColor"></hr>
            </div>
          </Fade>
          <Fade cascade damping={0.1} triggerOnce>
            <h2 className="text-4xl text-center mb-4">Intermediate Lessons</h2>
            <p>
              For those with some experience, our intermediate lessons focus on
              improving your skills and expanding your repertoire:
            </p>
            <ul className="list-disc list-inside ml-4 mb-6">
              <li>
                <strong>Advanced Fingering Techniques:</strong> Enhancing your
                dexterity and speed.
              </li>
              <li>
                <strong>Complex Tunes:</strong> Learning more intricate melodies
                and expanding your musical range.
              </li>
              <li>
                <strong>Maintenance and Tuning:</strong> Understanding how to
                maintain your bagpipe and keep it in tune for optimal
                performance.
              </li>
              <li>
                <strong>Performance Skills:</strong> Tips and techniques for
                playing confidently in front of an audience.
              </li>
            </ul>
            <div className="flex justify-center items-center">
              <hr className="w-3/4 md:w-full border-2 mt-4 mb-4 border-gray-800 dark:border-borderColor"></hr>
            </div>
          </Fade>
          <Fade cascade damping={0.1} triggerOnce>
            <h2 className="text-4xl text-center mb-4">Advanced Lessons</h2>
            <p>
              Experienced pipers can take their playing to the next level with
              our advanced lessons:
            </p>
            <ul className="list-disc list-inside ml-4 mb-6">
              <li>
                <strong>Composition and Arrangement:</strong> Creating your own
                tunes and arrangements.
              </li>
              <li>
                <strong>Competitive Piping:</strong> Preparing for competitions
                with advanced strategies and performance critiques.
              </li>
              <li>
                <strong>Collaborative Music:</strong> Playing with other
                musicians, including participation in a Celtic punk band.
              </li>
            </ul>
            <div className="flex justify-center items-center">
              <hr className="w-3/4 md:w-full border-2 mt-4 mb-4 border-gray-800 dark:border-borderColor"></hr>
            </div>
          </Fade>
          <Fade cascade damping={0.1} triggerOnce>
            <h2 className="text-4xl text-center mb-4">
              Why Choose Celtic Coast Bagpiper Aaron?
            </h2>
            <ul className="list-disc list-inside ml-4 mb-6">
              <li>
                <strong>Personalized Instruction:</strong> Lessons are
                customized to fit your learning style and pace.
              </li>
              <li>
                <strong>Experienced Teacher:</strong> Aaron has years of
                experience both teaching and performing.
              </li>
              <li>
                <strong>Flexible Scheduling:</strong> Convenient lesson times to
                fit your busy schedule.
              </li>
              <li>
                <strong>Supportive Environment:</strong> A positive and
                encouraging atmosphere to foster your growth as a musician.
              </li>
            </ul>

            <p className="text-center text-2xl font-bold pt-8">
              Ready to start your bagpipe journey or take your skills to new
              heights? Contact Aaron today to schedule your first lesson!
            </p>
          </Fade>
        </div>
        <Fade cascade damping={0.1} triggerOnce>
          <div className="w-full flex justify-center mt-20 mb-20">
            <div className="w-2/3 md:w-1/3">
              <img src={image1} alt="Aaron playing the bagpipes" className="w-full" />
              <p className="text-center text-gray-800 dark:text-accentColor text-lg font-bold">
                Photo By: Matt Carter
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Lessons;
