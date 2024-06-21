import React, { useState, useEffect } from "react";
import image1 from '../assets/piper1mc.jpg';
import image2 from '../assets/piper2mc.jpg';
import image3 from '../assets/piper3mc.jpg';
import image4 from '../assets/piper4mc.jpg';
import image5 from '../assets/piper5mc.jpg';
import image6 from '../assets/piper6mc.jpg';
import image7 from '../assets/piper7mc.jpg';
import image8 from '../assets/piper8mc.jpg';
import image9 from '../assets/piper9.jpg';
import image10 from '../assets/piper10cs.jpg';
import image11 from '../assets/piper11cs.jpg';
import image12 from '../assets/piper12cs.jpg';
import image13 from '../assets/piper13cs.jpg';
import image14 from '../assets/piper14.jpg';
import image15 from '../assets/piper15.jpg';
import image16 from '../assets/piper16.jpg';
import image17 from '../assets/piper17.jpg';
import image18 from '../assets/piper18mh.jpg';
import image19 from '../assets/piper19mh.jpg';
import image20 from '../assets/piper20mh.jpg';



const images = [
  { src: image1, credit: "Photo by Matt Carter" },
  { src: image2, credit: "Photo by Matt Carter" },
  { src: image3, credit: "Photo by Matt Carter" },
  { src: image4, credit: "Photo by Matt Carter" },
  { src: image5, credit: "Photo by Matt Carter" },
  { src: image6, credit: "Photo by Matt Carter" },
  { src: image7, credit: "Photo by Matt Carter" },
  { src: image8, credit: "Photo by Matt Carter" },
  { src: image9, credit: "Photo by Finding Charlotte Photography", link: "https://www.findingcharlotte.ca/", },
  {
    src: image10,
    credit: "Photo by Colin Smith Takes Pics",
    link: "https://www.colinsmithtakespics.com/home",
  },
  {
    src: image11,
    credit: "Photo by Colin Smith Takes Pics",
    link: "https://www.colinsmithtakespics.com/home",
  },
  {
    src: image12,
    credit: "Photo by Colin Smith Takes Pics",
    link: "https://www.colinsmithtakespics.com/home",
  },
  {
    src: image13,
    credit: "Photo by Colin Smith Takes Pics",
    link: "https://www.colinsmithtakespics.com/home",
  },
  { src: image14, credit: "Photo by Christine Bergen" },
  { src: image15, credit: "Photo by Christine Bergen" },
  { src: image16, credit: "Photo by Christine Bergen" },
  { src: image17, credit: "Photo by Christine Bergen" },
  {
    src: image18,
    credit: "Photo by Meaghan Harvey",
    link: "https://meaghanharveyphoto.com/",
  },
  {
    src: image19,
    credit: "Photo by Meaghan Harvey",
    link: "https://meaghanharveyphoto.com/",
  },
  {
    src: image20,
    credit: "Photo by Meaghan Harvey",
    link: "https://meaghanharveyphoto.com/",
  },

  // Add more image objects here
];

const Slideshow = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000); // Change image every 3 seconds
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="w-full h-[500px] overflow-hidden relative">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full flex flex-col justify-end transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
            >
              <div className="flex justify-center items-center w-full h-full">
                <img
                  src={image.src}
                  alt={`Slide ${index}`}
                  className="max-h-full object-contain"
                />
              </div>
              <div className="bg-black bg-opacity-50 text-white p-2 text-center">
                {image.link ? (
                  <a href={image.link} target="_blank" rel="noopener noreferrer" className="underline">
                    {image.credit}
                  </a>
                ) : (
                  image.credit
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Slideshow;