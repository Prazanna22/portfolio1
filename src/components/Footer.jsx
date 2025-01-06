import React from 'react'
import linkedin from '../assets/linkedin.png'
import instagram from '../assets/instagram.png'
import github from '../assets/github.png';
export const Footer = () => {
  return (
    <>
      <div className="bg-[#ffffff] ">
        <div className="">
          <div className="my-10 flex justify-center flex-col items-center">
            <h1 className=' font-bold text-xl'>Social Media</h1>
            <div className="flex gap-10 my-8 items-center">
              <a href="https://www.linkedin.com/in/durgaprasannau"><img src={linkedin} alt="" className='w-6  ' /></a>
              <a href="https://www.instagram.com/iam_prazanna/"><img src={instagram} alt="" className='w-8 ' /></a>
              <a href="https://github.com/Prazanna22"><img src={github} alt="" className='w-8 ' /></a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
