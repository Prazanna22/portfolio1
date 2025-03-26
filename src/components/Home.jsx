//import dp from "../assets/dp1.png";
import { useState } from "react";
import about from "../assets/about.jpg";

import { Contact } from "./Contact";
import { Education } from "./Education";
import { Project } from "./Project";
import { Skills } from "./Skills";

export const Home = () => {
  const name = "Durga Prasanna U";
  const [flipped, setFlipped] = useState(Array(name.length).fill(false));

  const triggerWaveFlip = () => {
    name.split("").forEach((_, i) => {
      setTimeout(() => {
        setFlipped((prev) => {
          const updated = [...prev];
          updated[i] = true;
          return updated;
        });
      }, i * 100); // 100ms delay between each flip
    });
  };

  return (
    <>
      <div className="max-w-full" id="0">
        <div className=" bg-[#b8e3e8] px-5 sm:px-10 lg:px-20 xl:px-36 ">
          <div className="py-10 md:py-20">
            <div className="pt-10 pb-10">
              <div className=" flex items-center flex-col justify-center text-[#B85042]  ">
                {/* <h1 className="font-extrabold text-[60px] sm:text-[80px] lg:text-[120px] md:text-[120px] text-center">
                  {name.split("").map((char, i) => (
                    <span
                      key={i}
                      onMouseEnter={triggerWaveFlip}
                      className={`crosshatch-base transition-all duration-500 ${flipped[i] ? "crosshatch-flipped" : ""
                        }`}
                    >
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
                </h1> */}
                <h1 className="font-extrabold text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-center">Durga Prasanna U</h1>
                <p className="py-14 font-normal  text-xl sm:text-2xl text-center text-[#8da3b4]">Aspiring Frontend Developer</p>
                <a href="#1" id="1"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg></a>
              </div>
            </div>
          </div>
          <div className="py-0" id="1">
            <div className="grid grid-cols-1  md:grid-cols-2 gap-1  justify-center items-center" >
              <div className=" w-full flex flex-col items-center sm:items-start justify-center ">
                <h1 className="font-extrabold text-5xl text-[#000] mb-5 md:mb-0 uppercase text-center">About me</h1>
                <p className="font-normal my-6 md:my-8  text-justify text-md  md:text-md  leading-[30px] md:leading-[40px] ">Hey there! I’m Durga Prasanna U, a frontend developer in the making, with a passion
                  for creating cool and functional web interfaces. I love working with HTML, CSS, JavaScript, and React.js to bring ideas to life and make
                  websites look great on any device.
                  I’m currently finishing up my Bachelor’s in Computer Science and have worked on some fun projects like a Coffee Shop E-Com website  and an
                  News aggregator app. I’m always learning something new and looking to improve my skills, whether it's through coding or collaborating with others..</p>
                <button className="text-white font-medium border-[2px] border-[#000] bg-[#000] py-1.5 my-6 px-10 hover:border-3  hover:bg-transparent hover:text-[#000]"><a href="resume.pdf" download="resume.pdf">Resume</a></button>
              </div>
              <div className=" w-full  flex items-center justify-center py-4 md:py-0  mb-10">
                <img src={about} alt="" className="w-[350px]  " />
              </div>
            </div>
          </div>
          <Education />
          <Skills />
          <Project />
          <Contact />

        </div>
      </div>

    </>
  );

};