import React from "react";
import image1 from "../assets/piper18mh.jpg";
import Discography from "./Discography";

const About = () => {
  return (
    <div className="bg-[#B8B5AE]">
      <h1 className="text-4xl text-center mb-8">About Aaron</h1>
      <div className="flex lg:flex-row flex-col justify-center items-center">
        <div className="w-full md:w-1/3 mr-10 text-xl">
          <p>
            With nearly 30 years of experience, Aaron is an invaluable resource
            in the Vancouver Island bagpiping scene. He has recently competed as a solo
            bagpiper at the grade 2 level and has been the bagpiper for the
            Celtic Punk band{" "}
            <a href="https://www.thegrinningbarretts.com/" className="">
              {" "}
              The Grinning Barretts
            </a>{" "}
            for almost 8 years. If you're looking for a versatile bagpiper,
            Aaron is your guy! His passion for bagpiping has also led him to
            play the Irish whistle, where he has become a sought-after
            performer. Together with his wife, he hosts a weekly Traditional
            Irish Music Session in their hometown of Nanaimo, BC.
          </p>
          <br></br>
          <p>
            In addition to solo competitions, Aaron has competed with pipe and
            drum bands, performed at numerous special occasions (including his
            own wedding), and even played his bagpipes at the Ring of Brodgar in
            the Orkney Islands. As a teenager, he traveled to Scotland with his
            long time bagpipe instructor, Bill Grant, and competed in solo
            competition. He cherishes his early years with Legion Branch 53
            Duncan Pipes and Drums, where he enjoyed listening to the war
            veterans' stories.
          </p>
          <br></br>
          <p>
            Aaron's polished playing and remarkable talent for mastering the
            bagpipes can be attributed to his instructors Carol Fowler, Bill
            Grant, Angus G. MacLeod, and James Barrie, many of whom were trained
            by legendary bagpipers in Scotland.
          </p>
          <br></br>
          <p></p>
          <p>
            Aaron has recently rekindled his passion for teaching bagpipes, a
            role he first embraced as a teenager with the Legion Pipe band. He
            finds great joy in instructing and watching his students grow and
            evolve.
          </p>
        </div>
        <div className="w-1/3 ml-10">
          <img src={image1}></img>
          <div className="text-center">
            <p>Photo by: </p>
            <a href="https://meaghanharveyphoto.com/" className="">
              {" "}
              Meaghan Harvey Photography
            </a>
          </div>
        </div>
      </div>
      <p className="text-center"></p>
      <Discography />
    </div>
  );
};

export default About;
