import React from "react";
import { Fade } from "react-awesome-reveal";
import celtic from "../assets/celtic2.webp";
import band from "../assets/band.jpg";

const Hire = () => {
  return (
    <div className="bg-medBackground dark:bg-medDarkBackground min-h-screen">
      <Fade cascade damping={0.1} triggerOnce>
        <h1 className="text-4xl text-center mt-8 mb-8 text-gray-800 dark:text-primaryText">
          Services Offered
        </h1>
      </Fade>
      <div className="flex justify-center items-center">
        <hr className="w-3/4 border-2 mt-4 mb-4 border-gray-800 dark:border-borderColor mt-12 mb-12"></hr>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center pb-20">
        <div className="w-3/4 md:w-2/3 lg:w-1/2 text-xl text-gray-800 dark:text-secondaryText">
          <Fade cascade damping={0.1} triggerOnce>
            <h2 className="text-4xl text-center mb-4">Solo Performances</h2>
            <p>
              Aaron is available for solo performances at various events,
              including weddings, funerals, corporate events, and private
              parties. With a wide repertoire and a deep passion for bagpiping,
              Aaron will add a unique and memorable touch to your event.
            </p>
          </Fade>
          <Fade cascade damping={0.1} triggerOnce>
            <h2 className="text-4xl text-center mb-4 mt-6">
              Bands and Ensembles
            </h2>
            <p className="mb-2">
              Aaron is a versatile musician with connections to various bands
              and ensembles. Whether you're looking for a traditional Celtic
              band or something with a modern twist, we have you covered:
            </p>
            <ul className="list-disc list-inside ml-4 mb-6">
              <li className="mb-2">
                <strong>The Grinning Barretts:</strong> A high-energy Celtic
                punk band that brings a modern edge to traditional Celtic music.
                Perfect for festivals, pubs, and lively events.
              </li>
              <li className="mb-2">
                <strong>Mid Island Competition Pipe and Drum Band:</strong> A
                traditional pipe and drum band ideal for parades, ceremonies,
                and cultural celebrations.
              </li>
              <li className="mb-2">
                <strong>Collaborative Ensembles:</strong> We can arrange
                performances with other talented musicians, including fiddlers,
                guitarists, and more, to create a customized celtic musical
                experience for your event.
              </li>
            </ul>
            <div className="flex justify-center items-center">
              <hr className="w-3/4 md:w-full border-2 mt-8 mb-8 border-gray-800 dark:border-borderColor"></hr>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src={band}
                alt="an image of a pipe and drum band walking down a pathway"
                className="w-full md:w-3/4 border-2 border-linkBackground rounded-lg"
              ></img>
              <p className="text-gray-800 dark:text-accentColor">Mid Island Competition Pipe Band</p>
            </div>
            <div className="flex justify-center items-center">
              <hr className="w-3/4 md:w-full border-2 mt-8 mb-8 border-gray-800 dark:border-borderColor"></hr>
            </div>
          </Fade>
          <Fade cascade damping={0.1} triggerOnce>
            <h2 className="text-4xl text-center mb-4">
              Teaching and Workshops
            </h2>
            <p className="mb-2">
              In addition to performances, Aaron offers teaching and workshops
              for individuals and groups. These sessions can be tailored to meet
              the needs of beginners or advanced players:
            </p>
            <ul className="list-disc list-inside ml-4 mb-6">
              <li className="mb-2">
                <strong>Private Lessons:</strong> One-on-one instruction
                focusing on technique, repertoire, and performance skills.
              </li>
              <li className="mb-2">
                <strong>Group Workshops:</strong> Interactive workshops for
                schools, community groups, or corporate team-building events.
              </li>
              <li className="mb-2">
                <strong>Online Lessons:</strong> Flexible online lessons for
                those who prefer to learn from the comfort of their home.
              </li>
            </ul>
          </Fade>
          <Fade cascade damping={0.1} triggerOnce>
            <h2 className="text-4xl text-center mb-4">
              Special Projects and Collaborations
            </h2>
            <p>
              Aaron is always open to special projects and collaborations.
              Whether you need a bagpiper for a recording session, a unique
              musical project, or a special event, we can work together to
              create something extraordinary.
            </p>

            <div className="flex justify-center items-center">
              <hr className="w-3/4 md:w-full border-2 mt-8 mb-8 border-gray-800 dark:border-borderColor"></hr>
            </div>
            <div className="flex items-center justify-center">
              <img
                src={celtic}
                className="w-2/3 md:w-1/3 rounded-lg border-2 border-linkBackground"
                alt="a picture of Aaron standing in a grassy field of a highland games competition playing the bagpipes"
              ></img>
            </div>
            <div className="flex justify-center items-center">
              <hr className="w-3/4 md:w-full border-2 mt-8 mb-8 border-gray-800 dark:border-borderColor mt-12 mb-12"></hr>
            </div>
            <p className="text-center mt-8 font-bold">
              Interested in any of our services or want to learn more? Contact
              Aaron today to discuss your needs and how we can help make your
              event unforgettable!
            </p>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Hire;
