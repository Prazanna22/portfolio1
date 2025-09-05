import about from "../assets/about.jpg";
import { useState, useEffect } from "react";
import { Contact } from "./Contact";
import { Education } from "./Education";
import { Project } from "./Project";
import { Skills } from "./Skills";
import { About } from "./About";

export const Home = () => {

  return (
    <>
      <div className="max-w-full" id="0">
        <div className=" bg-[#ffffff]  ">
          <section className="relative min-h-screen flex flex-col justify-start md:justify-center py-10 md:py-10 items-center bg-white overflow-hidden">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-full h-full pattern-dots pattern-black pattern-size-4 pattern-opacity-100"></div>
            </div>

            {/* Floating elements */}
            <div className="absolute top-20 left-10 w-6 h-6 rounded-full bg-black opacity-10 animate-float"></div>
            <div className="absolute top-1/3 right-16 w-8 h-8 border border-black opacity-10 animate-float-slow"></div>
            <div className="absolute bottom-1/4 left-20 w-10 h-10 border border-black opacity-5 animate-float-reverse"></div>

            {/* Binary code decorative elements */}
            <div className="absolute top-28 right-28 text-xs opacity-10 font-mono select-none pointer-events-none">
              01000100 01010101 01010010 01000111 01000001
            </div>
            <div className="absolute bottom-40 left-24 text-xs opacity-10 font-mono select-none pointer-events-none">
              01010000 01010010 01000001 01010011 01000001 01001110 01001110 01000001
            </div>

            <div className="max-w-7xl mx-auto text-center text-[#000000] relative z-10  px-5 ">
              <h2 className="text-lg uppercase tracking-widest text-gray-700 animate-fade-in">
                HELLO, I'M
              </h2>

              {/* Animated name with typing effect */}
              <h1 className="font-extrabold text-[56px] py-4 md:py-2 uppercase sm:text-[80px] md:text-[100px] lg:text-[112px] crosshatch-flipped animate-fade-in-delay">
                U Durga Prasanna
              </h1>

              <h2 className="text-base md:text-lg uppercase tracking-widest my-5 md:my-10 text-black animate-fade-in-delay">
                Full-time dreamer, part-time debugger.
                <br />
                Somehow still building cool stuff.
              </h2>

              <h1 className="transition-all duration-1000 ease-out transform "></h1>
              <button className="text-white font-medium border-2 border-black bg-black py-2 my-6 px-8 hover:bg-white hover:text-black transition-all duration-300 animate-fade-in-delay">
                <a href="U.Durga_Prasanna.pdf" download="U.Durga_Prasanna.pdf"> Resume</a>
              </button>

              {/* Enhanced scroll indicator */}
              <a href="#1" className="group">
                <div className="w-6 h-10 border-2 border-black rounded-full mt-8 flex justify-center items-start mx-auto animate-bounce cursor-pointer group-hover:scale-110 transition-transform">
                  <div className="w-1 h-3 bg-black rounded-full mt-1 animate-pulse group-hover:bg-gray-600 transition-colors"></div>
                </div>
                <p className="text-xs mt-2 opacity-0 group-hover:opacity-70 transition-opacity">Explore more</p>
              </a>
            </div>

            {/* Decorative corner elements */}
            <div className="absolute top-0 left-0 w-24 h-24">
              <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-black opacity-20"></div>
            </div>
            <div className="absolute bottom-0 right-0 w-24 h-24">
              <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-black opacity-20"></div>
            </div>

            
          </section>



          <About />
          <Education />
          <Skills />
          <Project />
          <Contact />

        </div >
      </div >

    </>
  );

};