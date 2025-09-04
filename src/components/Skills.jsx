import React from 'react'
import js from '../assets/js.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import react from '../assets/react.png';
import figma from '../assets/figma.png';
import tailwind from '../assets/tailwind.png';
import redux from "../assets/redux.png"
import typescript from "../assets/typescript.png"
import springboot from '../assets/springboot.png';
//import express from '../assets/express.png';
import python from '../assets/python.png';
import java from '../assets/java.png';
import git from '../assets/git.png';
import github from '../assets/github.png';
import postman from '../assets/postman.png';
import database from '../assets/mysql.png';

export const Skills = () => {
    return (
        <>
            <div className="py-10 px-0 xl:px-20" id='3'>
                <h1 className="font-extrabold text-4xl md:text-5xl text-black uppercase text-center mb-4">
                        Skills
                    </h1>
                    <div className="w-20 h-1 bg-black mx-auto mb-12"></div>
                <div className='py-2 md:py-4'>
                    
                    {/* <h1 className="font-bold sm:text-2xl text-2xl text-black text-center md:text-left">Languages</h1> */}
                    <div className="flex flex-wrap justify-center gap-6 sm:gap-12 md:gap-16  ">
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
                                key={index}
                                className="flex flex-col items-center justify-center bg-white shadow-md rounded-2xl p-6 w-20 h-20 sm:w-24 sm:h-24    md:w-36 md:h-36 transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                            >
                                
                                <img src={skill.img} alt={skill.name} className="w-8 sm:w-10 lg:w-14 mb-3" />
                                <h1 className="font-semibold text-black text-center text-xs sm:text-base">
                                    {skill.name}
                                </h1>
                            </div>
                        ))}
                    </div>



                    {/* <div className="grid grid-cols-3  md:grid-cols-4 gap-4 px-5 md:px-20 md:py-8 ">

                        <div className="flex gap-4 items-center p-4 flex-col">
                            <img src={springboot} alt="" className="w-10 sm:w-12" />
                            <h1 className='font-medium'>SpringBoot</h1>
                        </div>
                        <div className="flex gap-4 items-center p-4 flex-col">
                            <img src={redux} alt="" className="w-10 sm:w-12" />
                            <h1 className='font-medium'>Redux</h1>
                        </div>
                        <div className="flex gap-4 items-center p-4 flex-col">
                            <img src={tailwind} alt="" className="w-10 sm:w-12" />
                            <h1 className='font-medium'>Tailwind Css</h1>
                        </div>
                        <div className="flex gap-4 items-center p-4 flex-col">
                            <img src={typescript} alt="" className="w-10 sm:w-12" />
                            <h1 className='font-medium'>Typescript</h1>
                        </div>
                    </div>
                    <div className="grid grid-cols-4 md:grid-cols-4 justify-center gap-4 px-5 md:px-20  md:py-8">
                        <div className="flex gap-4 items-center p-4 flex-col">
                            <img src={git} alt="" className="w-10 sm:w-12" />
                            <h1 className='font-medium'>Git</h1>
                        </div>
                        <div className="flex gap-4 items-center p-4 flex-col">
                            <img src={github} alt="" className="w-10 sm:w-12" />
                            <h1 className='font-medium'>Github</h1>
                        </div>
                        <div className="flex gap-4 items-center p-4 flex-col">
                            <img src={database} alt="" className="w-10 sm:w-12" />
                            <h1 className='font-medium'>MySql</h1>

                        </div>
                        <div className="flex gap-4 items-center p-4 flex-col">
                            <img src={postman} alt="" className="w-10 sm:w-12" />
                            <h1 className='font-medium'>Postman</h1>

                        </div>
                    </div> */}

                </div>


            </div>


        </>
    )
}
