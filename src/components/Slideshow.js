import React, { useState, useEffect } from "react";
import image1 from "../assets/piper1mc.jpg";
import image2 from "../assets/piper2mc.jpg";
import image3 from "../assets/piper3mc.jpg";
import image4 from "../assets/piper4mc.jpg";
import image5 from "../assets/piper5mc.jpg";
import image6 from "../assets/piper6mc.jpg";
import image7 from "../assets/piper7mc.jpg";
import image8 from "../assets/piper8mc.jpg";
import image9 from "../assets/piper9.jpg";
import image10 from "../assets/piper10cs.jpg";
import image11 from "../assets/piper11cs.jpg";
import image12 from "../assets/piper12cs.jpg";
import image13 from "../assets/piper13cs.jpg";
import image14 from "../assets/piper14.jpg";
import image15 from "../assets/piper15.jpg";
import image16 from "../assets/piper16.jpg";
import image17 from "../assets/piper17.jpg";
import image18 from "../assets/piper18mh.jpg";
import image19 from "../assets/piper19mh.jpg";

const photographers = {
  mattCarter: { title: "Matt Carter" },
  findingCharlotte: {
    title: "Finding Charlotte Photography",
    link: "https://www.findingcharlotte.ca/",
  },
  colinSmith: {
    title: "Colin Smith Takes Pics",
    link: "https://www.colinsmithtakespics.com/home",
  },
  christineBergen: { title: "Christine Bergen" },
  meaghanHarvey: { title: "Meaghan Harvey", link: "https://meaghanharveyphoto.com/" },
};

const images = [
  { src: image1, photographer: "mattCarter" },
  { src: image2, photographer: "mattCarter" },
  { src: image3, photographer: "mattCarter" },
  { src: image4, photographer: "mattCarter" },
  { src: image5, photographer: "mattCarter" },
  { src: image6, photographer: "mattCarter" },
  { src: image7, photographer: "mattCarter" },
  { src: image8, photographer: "mattCarter" },
  { src: image9, photographer: "findingCharlotte" },
  { src: image10, photographer: "colinSmith" },
  { src: image11, photographer: "colinSmith" },
  { src: image12, photographer: "colinSmith" },
  { src: image13, photographer: "colinSmith" },
  { src: image14, photographer: "christineBergen" },
  { src: image15, photographer: "christineBergen" },
  { src: image16, photographer: "christineBergen" },
  { src: image17, photographer: "christineBergen" },
  { src: image18, photographer: "meaghanHarvey" },
  { src: image19, photographer: "meaghanHarvey" },
  
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    console.log("Current Index:", currentIndex);
    console.log("Current Image:", images[currentIndex]);
    console.log("Current Photographer:", photographers[images[currentIndex].photographer]);
  }, [currentIndex]);

  const currentImage = images[currentIndex];
  const photographer = photographers[currentImage.photographer];

  return (
    <div className="flex justify-center items-center">
      <div className="w-full h-[500px] overflow-hidden relative">
        <div className="absolute inset-0 w-full h-full flex flex-col justify-end transition-opacity duration-1000 opacity-100">
          <div className="flex justify-center items-center w-full h-full">
            <img
              src={currentImage.src}
              alt={`Slide ${currentIndex}`}
              className="max-h-full object-contain border-2 border-linkBackground rounded-lg"
            />
          </div>
          <div className="flex justify-center items-center">
            <div className="w-3/4 md:w-1/2 mt-2 text-lg text-gray-800 dark:text-accentColor font-bold p-2 text-center">
              {photographer?.link ? (
                <a
                  href={photographer.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >Photo By:&nbsp; 
                  {photographer.title}
                </a>
              ) : (
                <span>Photo By: {photographer.title}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
