import React, { useEffect, useRef } from 'react'

export const Education = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const dividerRef = useRef(null);
  const timelineLineRef = useRef(null);
  const itemsRef = useRef([]);

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
            
            // Animate timeline line
            if (timelineLineRef.current) {
              setTimeout(() => {
                timelineLineRef.current.style.height = '100%';
              }, 500);
            }
            
            // Animate timeline items with staggered delay
            itemsRef.current.forEach((item, index) => {
              if (item) {
                setTimeout(() => {
                  item.style.opacity = '1';
                  item.style.transform = 'translateY(0)';
                  
                  // Animate the dot indicator
                  const dot = item.querySelector('.timeline-dot');
                  if (dot) {
                    dot.style.transform = 'scale(1)';
                  }
                }, 700 + (index * 300));
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

  // Add refs to timeline items
  const addToRefs = (el) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-40 bg-white"
      id="education"
    >
      <div className="max-w-7xl mx-auto">
        <h1 
          ref={headingRef}
          className="font-extrabold text-4xl md:text-5xl text-black uppercase text-center mb-4 opacity-0 transform -translate-y-6 transition-all duration-700 ease-out"
        >
          EDUCATION
        </h1>
        <div 
          ref={dividerRef}
          className="w-0 h-1 bg-black mx-auto mb-12 transition-all duration-1000 ease-out"
        ></div>

        {/* Large screens */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Timeline line */}
            <div 
              ref={timelineLineRef}
              className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-black transition-all duration-1000 ease-out"
            ></div>

            {/* Item 1 - B.E */}
            <div 
              ref={addToRefs}
              className="flex justify-between items-center w-full mb-2 opacity-0 transform translate-y-8 transition-all duration-500 ease-out"
            >
              <div className="order-1 w-5/12"></div>
              <div className="z-10 flex items-center order-1 bg-black shadow-xl w-6 h-6 rounded-full timeline-dot transform scale-0 transition-transform duration-500 ease-out"></div>
              <div className="order-1 w-5/12 bg-black rounded-lg shadow-lg p-6 text-white">
                <h3 className="font-semibold text-md py-2">2020 - 2024</h3>
                <h2 className="font-semibold text-md md:text-xl py-2">
                  B.E - Computer Science and Engineering
                </h2>
                <p className="font-semibold text-sm md:text-md py-2">
                  Sri Ramakrishna Institute of Technology, Coimbatore
                </p>
                <p className="text-sm font-semibold py-2">CGPA - 8.0</p>
              </div>
            </div>

            {/* Item 2 - HSC */}
            <div 
              ref={addToRefs}
              className="flex justify-between items-center w-full mb-2 opacity-0 transform translate-y-8 transition-all duration-500 ease-out"
            >
              <div className="order-1 w-5/12 bg-black rounded-lg shadow-lg p-6 text-white">
                <h3 className="font-semibold text-md py-2">2019 - 2020</h3>
                <h2 className="font-semibold text-md md:text-xl py-2">
                  Higher Secondary Certificate (HSC)
                </h2>
                <p className="font-semibold text-sm md:text-md py-2">
                  G.S Hindu Higher Secondary School, Srivilliputhur
                </p>
                <p className="text-sm font-semibold py-2">Percentage - 74.5%</p>
              </div>
              <div className="z-10 flex items-center order-1 bg-black shadow-xl w-6 h-6 rounded-full timeline-dot transform scale-0 transition-transform duration-500 ease-out"></div>
              <div className="order-1 w-5/12"></div>
            </div>

            {/* Item 3 - SSLC */}
            <div 
              ref={addToRefs}
              className="flex justify-between items-center w-full opacity-0 transform translate-y-8 transition-all duration-500 ease-out"
            >
              <div className="order-1 w-5/12"></div>
              <div className="z-10 flex items-center order-1 bg-black shadow-xl w-6 h-6 rounded-full timeline-dot transform scale-0 transition-transform duration-500 ease-out"></div>
              <div className="order-1 w-5/12 bg-black rounded-lg shadow-lg p-6 text-white">
                <h3 className="font-semibold text-md py-2">2017 - 2018</h3>
                <h2 className="font-semibold text-md md:text-xl py-2">
                  Secondary School Leaving Certificate (SSLC)
                </h2>
                <p className="font-semibold text-sm md:text-md py-2">
                  G.S Hindu Higher Secondary School, Srivilliputhur
                </p>
                <p className="text-sm font-semibold py-2">Percentage - 86.2%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Small screens */}
        <div className="md:hidden">
          <div className="relative">
            {/* Timeline line */}
            <div 
              ref={timelineLineRef}
              className="absolute left-6 h-full w-1 bg-black transition-all duration-1000 ease-out"
            ></div>

            <div className="space-y-10 pl-14">
              {/* Item 1 */}
              <div 
                ref={addToRefs}
                className="relative opacity-0 transform translate-x-8 transition-all duration-500 ease-out"
              >
                <div className="absolute -left-10 top-3 bg-black shadow-xl w-6 h-6 rounded-full timeline-dot transform scale-0 transition-transform duration-500 ease-out"></div>
                <div className="bg-black rounded-lg shadow-lg p-6 text-white">
                  <h3 className="font-semibold text-md py-2">2020 - 2024</h3>
                  <h2 className="font-semibold text-md md:text-xl py-2">
                    B.E - Computer Science and Engineering
                  </h2>
                  <p className="font-semibold text-sm md:text-md py-2">
                    Sri Ramakrishna Institute of Technology, Coimbatore
                  </p>
                  <p className="text-sm font-semibold py-2">CGPA - 8.0</p>
                </div>
              </div>

              {/* Item 2 */}
              <div 
                ref={addToRefs}
                className="relative opacity-0 transform translate-x-8 transition-all duration-500 ease-out"
              >
                <div className="absolute -left-10 top-3 bg-black shadow-xl w-6 h-6 rounded-full timeline-dot transform scale-0 transition-transform duration-500 ease-out"></div>
                <div className="bg-black rounded-lg shadow-lg p-6 text-white">
                  <h3 className="font-semibold text-md py-2">2019 - 2020</h3>
                  <h2 className="font-semibold text-md md:text-xl py-2">
                    Higher Secondary Certificate (HSC)
                  </h2>
                  <p className="font-semibold text-sm md:text-md py-2">
                    G.S Hindu Higher Secondary School, Srivilliputhur
                  </p>
                  <p className="text-sm font-semibold py-2">Percentage - 74.5%</p>
                </div>
              </div>

              {/* Item 3 */}
              <div 
                ref={addToRefs}
                className="relative opacity-0 transform translate-x-8 transition-all duration-500 ease-out"
              >
                <div className="absolute -left-10 top-3 bg-black shadow-xl w-6 h-6 rounded-full timeline-dot transform scale-0 transition-transform duration-500 ease-out"></div>
                <div className="bg-black rounded-lg shadow-lg p-6 text-white">
                  <h3 className="font-semibold text-md py-2">2017 - 2018</h3>
                  <h2 className="font-semibold text-md md:text-xl py-2">
                    Secondary School Leaving Certificate (SSLC)
                  </h2>
                  <p className="font-semibold text-sm md:text-md py-2">
                    G.S Hindu Higher Secondary School, Srivilliputhur
                  </p>
                  <p className="text-sm font-semibold py-2">Percentage - 86.2%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}