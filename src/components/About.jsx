import React, { useEffect, useRef } from 'react'
import about from "../assets/about.jpg";

export const About = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const dividerRef = useRef(null);
  const textRefs = useRef([]);
  const imageRef = useRef(null);
  const frameRef = useRef(null);

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
                dividerRef.current.style.width = '64px';
              }, 300);
            }
            
            // Animate text paragraphs
            textRefs.current.forEach((ref, index) => {
              if (ref) {
                setTimeout(() => {
                  ref.style.opacity = '1';
                  ref.style.transform = 'translateY(0)';
                }, 500 + (index * 200));
              }
            });
            
            // Animate image and frame
            if (imageRef.current && frameRef.current) {
              setTimeout(() => {
                imageRef.current.style.opacity = '1';
                imageRef.current.style.transform = 'scale(1)';
                frameRef.current.style.opacity = '1';
                frameRef.current.style.transform = 'translate(16px, 16px ,16px,16px)';
              }, 1000);
            }
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

  // Add refs to text paragraphs
  const addToRefs = (el) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  return (
    <div ref={sectionRef}>
      <section className="py-20 px-5 sm:px-20 md:px-32" id="1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h1 
              ref={headingRef}
              className="font-extrabold text-4xl text-black mb-6 uppercase opacity-0 transform translate-y-6 transition-all duration-700 ease-out"
            >
              About Me
            </h1>
            <div 
              ref={dividerRef}
              className="h-1 w-0 bg-black mb-8 transition-all duration-1000 ease-out"
            ></div>
            <p 
              ref={addToRefs}
              className="font-normal text-gray-700 text-justify text-md md:text-md leading-relaxed lg:leading-8 mb-6 opacity-0 transform translate-y-6 transition-all duration-700 ease-out"
            >
              Hey, I'm <span className="font-semibold">Durga Prasanna U</span> — a Computer Science graduate who
              somehow survived Java, Spring Boot, and endless debugging sessions. I spend most of my time
              building web apps with React, Redux, Tailwind, and occasionally convincing MySQL not to crash.
            </p>

            <p 
              ref={addToRefs}
              className="font-normal text-gray-700 text-justify text-md md:text-md leading-relaxed lg:leading-8 mb-6 opacity-0 transform translate-y-6 transition-all duration-700 ease-out"
            >
              I've worked on fun stuff like a <span className="font-semibold">Bike Rental App</span> (yes, with
              actual bookings), a <span className="font-semibold">Coffee Shop E-Commerce Site</span>  (fueled by too
              much caffeine), and a <span className="font-semibold">News Aggregator</span> app (because reading 10
              different sites separately is boring). Oh, and I even survived an internship where I built dashboards
              in React without breaking production — mostly.
            </p>

            <p 
              ref={addToRefs}
              className="font-normal text-gray-700 text-justify text-md md:text-md leading-relaxed lg:leading-8 mb-6 opacity-0 transform translate-y-6 transition-all duration-700 ease-out"
            >
              When I'm not coding, I'm probably breaking something so I can "fix" it better. Looking for the next
              place where I can turn coffee into code, bugs into features, and ideas into cool projects.
            </p>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-md">
              {/* Image with proper border containment */}
              <div 
                ref={frameRef}
                className="absolute -inset-4 border-2 border-black rounded-lg opacity-0 transform translate-x-0 translate-y-0 transition-all duration-700 ease-out"
              ></div>
              <div className="relative rounded-lg overflow-hidden z-10">
                <img
                  ref={imageRef}
                  src={about}
                  alt="Durga Prasanna"
                  className="w-full h-auto rounded-lg opacity-0 transform scale-95 transition-all duration-700 ease-out"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};