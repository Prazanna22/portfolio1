import React from 'react'

export const Navbar = () => {
  return (
    <>
      <div className="bg-[#fff] hidden md:block sticky top-0 z-20 ">
        <div className="">
          <nav className='flex justify-between px-5 sm:px-24 lg:px-36 py-5'>

            <ul className='flex gap-10 font-semibold'>
              <li><a href="#0" className='text-black hover:text-[#000]'>Home</a></li>
              <li><a href="#1" className='text-black hover:text-[#000]'>About</a></li>
              <li><a href="#2" className='text-black hover:text-[#000]'>Eduction</a></li>
              <li><a href="#3" className='text-black hover:text-[#000]'>Skills</a></li>
              <li><a href="#4" className='text-black hover:text-[#000]'>Projects</a></li>
            </ul>
            <div className="list-none ">
              <li><a href="#5" className='text-white hover:text-[#000] hover:bg-white py-1 px-3 border bg-black border-[#000]'>Let's Talk</a></li>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}
