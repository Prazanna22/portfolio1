import React from 'react'
import js from '../assets/js.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import react from '../assets/react.png';
import figma from '../assets/figma.png';
import tailwind from '../assets/tailwind.png';
//import node from '../assets/nodejs.png';
//import express from '../assets/express.png';
import python from '../assets/python.png';
import java from '../assets/java.png';
import git from '../assets/git.png';
import github from '../assets/github.png';
//import postman from '../assets/postman.png';
import database from '../assets/mysql.png';

export const Skills = () => {
    return (
        <>
            <div className="py-10 " id='3'>
                <h1 className="font-extrabold text-5xl text-[#000] my-14 uppercase text-center" >Skill Set</h1>
                <h1 className="font-bold sm:text-2xl text-2xl text-black">Languages</h1>
                <div className="grid grid-cols-3  md:grid-cols-5 gap-4 px-5 py-4">
                    <div className="flex gap-2 items-center  p-2 flex-col">
                        <img src={java} alt="" className="w-8 sm:w-12" />
                        {/* <h1>REACT</h1> */}
                    </div>
                    <div className="flex gap-2 items-center  p-2 flex-col">
                        <img src={python} alt="" className="w-8 sm:w-12" />
                        {/* <h1>TAILWIND</h1> */}
                    </div>
                    <div className="flex gap-2 items-center  p-2 flex-col">
                        <img src={html} alt="" className="w-8 sm:w-12" />
                        {/* <h1>HTML</h1> */}
                    </div>
                    <div className="flex gap-2 items-center  p-2 flex-col">
                        <img src={css} alt="" className="w-8 sm:w-12" />
                        {/* <h1>CSS</h1> */}
                    </div>
                    <div className="flex gap-2 items-center  p-2 flex-col">
                        <img src={js} alt="" className="w-8 sm:w-12" />
                        {/* <h1>JAVASCRIPT</h1> */}
                    </div>

                </div>

                <div className="pt-8">
                    <h1 className="font-bold sm:text-2xl text-2xl text-black">Frameworks & Database</h1>
                    <div className="grid grid-cols-3  md:grid-cols-3 gap-4 px-20 py-4">
                        <div className="flex gap-2 items-center  p-2 flex-col">
                            <img src={react} alt="" className="w-8 sm:w-12" />
                            {/* <h1>REACT</h1> */}
                        </div>
                        <div className="flex gap-2 items-center  p-2 flex-col">
                            <img src={tailwind} alt="" className="w-8 sm:w-12" />
                            {/* <h1>TAILWIND</h1> */}
                        </div>
                        
                        <div className="flex gap-2 items-center  p-2 flex-col">
                            <img src={database} alt="" className="w-8 sm:w-12" />
                            {/* <h1 className='my-2 font-semibold text-sm text-center'>Oracle SQL</h1> */}
                        </div>


                    </div>
                </div>
                <div className="pt-8 ">
                    <h1 className="font-bold sm:text-2xl text-2xl text-black">Tools</h1>
                    <div className="grid grid-cols-3 md:grid-cols-3 gap-4 px-20  py-4">
                        

                        <div className="flex gap-2 items-center  p-2 flex-col">
                            <img src={git} alt="" className="w-8 sm:w-12" />
                            {/* <h1>JAVASCRIPT</h1> */}
                        </div>
                        <div className="flex gap-2 items-center  p-2 flex-col">
                            <img src={github} alt="" className="w-8 sm:w-12" />
                            {/* <h1>REACT</h1> */}
                        </div>
                        <div className=" gap-2 items-center  p-2 flex flex-col ">
                            <img src={figma} alt="" className="w-8 sm:w-12" />
                            {/* <h1>Figma</h1> */}
                        </div>
                    </div>
                </div>

            </div>

            {/* <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="py-10">
                    <div className="flex items-center">
                        <img src={html} alt="" className='w-12'/>
                        <h1>Html</h1>
                        <p>Intermediate</p>
                    </div>
                </div>
                <div className=""></div>
            </div> */}
        </>
    )
}
