import React, { useEffect, useRef } from 'react'
import js from '../assets/js.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import react from '../assets/react.png';
import figma from '../assets/figma.png';
import tailwind from '../assets/tailwind.png';
import redux from "../assets/redux.png"
import typescript from "../assets/typescript.png"
import springboot from '../assets/springboot.png';
import python from '../assets/python.png';
import java from '../assets/java.png';
import git from '../assets/git.png';
import github from '../assets/github.png';
import postman from '../assets/postman.png';
import database from '../assets/mysql.png';

export const Skills = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const dividerRef = useRef(null);
  const skillsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate heading
            if (headingRef.current) {
              headingRef.current.style.opacity = '1';
              headingRef.current.style.transform = 'translateY(0)';
            }
            
            // Animate divider
            if (dividerRef.current) {
              setTimeout(() => {
                dividerRef.current.style.width = '80px';
              }, 300);
            }
            
            // Animate skills with staggered delay
            skillsRef.current.forEach((skill, index) => {
              if (skill) {
                setTimeout(() => {
                  skill.style.opacity = '1';
                  skill.style.transform = 'scale(1) translateY(0)';
                }, 500 + (index * 100));
              }
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Add refs to skill items
  const addToRefs = (el) => {
    if (el && !skillsRef.current.includes(el)) {
      skillsRef.current.push(el);
    }
  };

  return (
    <>
      <div className="py-10  px-5 md:px-0" id='3' ref={sectionRef}>
        <div className="max-w-7xl mx-auto">
          <h1 
            ref={headingRef}
            className="font-extrabold text-4xl md:text-5xl text-black uppercase text-center mb-4 opacity-0 transform -translate-y-6 transition-all duration-700 ease-out"
          >
            Skills
          </h1>
          <div 
            ref={dividerRef}
            className="w-0 h-1 bg-black mx-auto mb-12 transition-all duration-1000 ease-out"
          ></div>
          <div className='py-2 md:py-4'>

            <div className="grid grid-cols-3 lg:grid-cols-5 justify-items-center gap-3 sm:gap-5 md:gap-6">
              {[
                { img: java, name: "Java" },
                { img: html, name: "HTML" },
                { img: css, name: "CSS" },
                { img: js, name: "JavaScript" },
                { img: react, name: "React.js" },
                { img: springboot, name: "Spring Boot" },
                { img: redux, name: "Redux" },
                { img: tailwind, name: "Tailwind CSS" },
                { img: typescript, name: "TypeScript" },
                { img: git, name: "Git" },
                { img: github, name: "GitHub" },
                { img: database, name: "MySQL" },
                { img: postman, name: "Postman" },
              ].map((skill, index) => (
                <div
                  ref={addToRefs}
                  key={index}
                  className="flex flex-col items-center justify-center bg-white shadow-md rounded-2xl p-6 w-20 h-20 sm:w-24 sm:h-24 md:w-36 md:h-36 transition-all duration-500 ease-out opacity-0 transform scale-0 translate-y-10 hover:scale-105 hover:shadow-xl"
                >
                  <img 
                    src={skill.img} 
                    alt={skill.name} 
                    className="w-8 sm:w-10 lg:w-14 mb-3 transition-transform duration-300" 
                  />
                  <h1 className="font-semibold text-black text-center text-xs sm:text-base">
                    {skill.name}
                  </h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}