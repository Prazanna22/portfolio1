import React from 'react'
import linkedin from '../assets/linkedin.png'
import instagram from '../assets/instagram.png'
import github from '../assets/github.png'

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            {/* Simple social links */}
            <div className="flex space-x-10 mb-8">
              <a 
                href="https://www.linkedin.com/in/durgaprasannau" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transform transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                <img src={linkedin} alt="LinkedIn" className="w-7 h-7" />
              </a>
              
              <a 
                href="https://www.instagram.com/iam_prazanna/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transform transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                <img src={instagram} alt="Instagram" className="w-8 h-8" />
              </a>
              
              <a 
                href="https://github.com/Prazanna22" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transform transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                <img src={github} alt="GitHub" className="w-8 h-8" />
              </a>
            </div>

            {/* Email */}
            {/* <div className="mb-8 text-center">
              <a 
                href="mailto:durgaprasanna2204@gmail.com" 
                className="text-black text-lg font-medium hover:underline"
              >
                durgaprasanna2204@gmail.com
              </a>
            </div> */}

            {/* Copyright */}
            <div className="text-center">
              <p className="text-sm text-gray-600">
                © {currentYear} Durga Prasanna U
              </p>
            </div>

            {/* Decorative divider */}
            <div className="w-24 h-0.5 bg-black my-6"></div>

            {/* Quote */}
            <p className="text-sm text-gray-500 italic text-center max-w-md">
              "Turning ideas into interactive experiences"
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}