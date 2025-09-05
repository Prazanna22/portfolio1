import React from 'react'

export const Navbar = () => {
  return (<>
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur-md border-b border-gray-200 px-10 md:px-20">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-5 ">
        {/* Logo / Branding */}
        <div className="text-lg uppercase tracking-widest  text-black">
          .Portfolio
        </div>

        {/* Call to action */}
        <a
          href="#5"
          className="hidden md:block text-white font-medium border border-black bg-black py-1.5 px-4 rounded-md hover:bg-white hover:text-black transition-all duration-300"
        >
          Let’s Talk
        </a>
      </div>
    </header>

  </>
  )
}
