import about from "../assets/about.jpg";
import { useState, useEffect } from "react";
import { Contact } from "./Contact";
import { Education } from "./Education";
import { Project } from "./Project";
import { Skills } from "./Skills";

export const Home = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const titles = [
    "Frontend Developer",
    "Full Stack Enthusiast",
    "React Developer",
    "Creative Coder"
  ];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % titles.length;
      const fullText = titles[i];

      setText(isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 75 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, titles]);


  return (
    <>
      <div className="max-w-full px-5 sm:px-10 md:px-20" id="0">
        <div className=" bg-[#ffffff]  ">
          <div className="py-10 md:py-20 px-5 sm:px-10 md:px-20">
            <div className="pt-10 pb-10">
              <div className=" flex items-center flex-col justify-center text-[#000000]  ">
                <h2 className="text-lg uppercase tracking-widest mb-4 text-gray-700">HELLO, I'M</h2>

                <h1 className="font-extrabold text-[56px] uppercase md:tracking-normal sm:text-[80px] lg:text-[100px]  md:text-[100px] text-center crosshatch-flipped">Durga prasanna U </h1>
                {/* <h1 className="font-extrabold text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-center">Durga Prasanna U</h1> */}
                <p className="py-10 font-normal text-xl sm:text-2xl text-center text-black min-h-[60px]">
                  <span className="font-medium">{"<> "}</span>
                  {text}
                  <span className="animate-pulse">|</span>
                  <span className="font-medium">{" </>"}</span>
                </p>
                <a href="#1" id="1"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg></a>
              </div>
            </div>
          </div>
          <section id="about" className="py-16 md:py-24 px-5 sm:px-10 md:px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="order-2 md:order-1">
                <h1 className="font-extrabold text-4xl text-black mb-6 uppercase">About Me</h1>
                <div className="h-1 w-16 bg-black mb-8"></div>
                <p className="font-normal text-gray-700 text-justify text-md md:text-lg leading-relaxed lg:leading-10 mb-8">
                  Hey there! I'm Durga Prasanna U, a frontend developer in the making with a passion
                  for creating cool and functional web interfaces. I love working with HTML, CSS, JavaScript,
                  and React.js to bring ideas to life and make websites look great on any device.
                </p>
                <p className="font-normal text-gray-700 text-justify text-md md:text-lg leading-relaxed lg:leading-10 mb-8">
                  I'm currently finishing up my Bachelor's in Computer Science and have worked on some
                  fun projects like a Coffee Shop E-Com website and a News aggregator app. I'm always
                  learning something new and looking to improve my skills, whether it's through coding
                  or collaborating with others.
                </p>
                <h1 className="transition-all duration-1000 ease-out transform "></h1>
                <button className="text-white font-medium border-2 border-black bg-black py-2 px-8 hover:bg-white hover:text-black transition-all duration-300">
                  <a href="U.Durga_Prasanna.pdf" download="U.Durga_Prasanna.pdf"> Resume</a>
                </button>

              </div>



              <div className="order-1 md:order-2 flex justify-center md:justify-end">
                <div className="relative">
                  <div className="absolute -inset-4 border-2 border-black rounded-lg"></div>
                  <img
                    src={about}
                    alt="Durga Prasanna"
                    className="relative w-full max-w-md rounded-lg z-10"
                  />
                </div>
              </div>
            </div>
          </section>
          <Education />
          <Skills />
          <Project />
          <Contact />

        </div>
      </div>

    </>
  );

};