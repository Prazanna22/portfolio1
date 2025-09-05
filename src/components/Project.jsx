import React, { useEffect, useRef } from 'react'
import hearing from '../assets/hearing.png'
import sneaker from '../assets/sneakers.png'
import rain from '../assets/rain.png'
import coffee from '../assets/coffee.png'
import star from '../assets/stars.png'
import news from '../assets/news.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';

import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';

export const Project = () => {
     const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const dividerRef = useRef(null);

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
            
            // Animate swiper slides when they come into view
            const swiperSlides = document.querySelectorAll('.swiper-slide');
            swiperSlides.forEach((slide, index) => {
              setTimeout(() => {
                slide.style.opacity = '1';
                slide.style.transform = 'translateY(0) scale(1)';
              }, 500 + (index * 150));
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

  return (
    <>
      <section id="projects" className="py-16 md:py-24" ref={sectionRef}>
        <div className="max-w-7xl mx-auto">
          <h1 
            ref={headingRef}
            className="font-extrabold text-4xl md:text-5xl text-black uppercase text-center mb-4 opacity-0 transform -translate-y-6 transition-all duration-700 ease-out"
          >
            Projects
          </h1>
          <div 
            ref={dividerRef}
            className="w-0 h-1 bg-black mx-auto mb-12 transition-all duration-1000 ease-out"
          ></div>

                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        slidesPerView={1}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        spaceBetween={45}
                        navigation
                        grabCursor
                        pagination={{ clickable: true }}
                        className="px-5 pb-10"
                        id="custom-swiper"
                    >
                        {/* Bike Rental App */}
                        <SwiperSlide>

                            <div className="flex flex-col justify-between items-center rounded-lg bg-white p-6 border-2 border-black h-[360px] transition-all duration-300 hover:shadow-lg ">

                                <div className="flex flex-col items-center">
                                    <img src={coffee} alt="" className="w-14 md:w-16 mb-4" />
                                    <h1 className="font-semibold text-xl mb-4 text-center">Bike Rental App</h1>
                                    <p className="font-normal text-gray-700 text-xs sm:text-sm text-justify leading-relaxed">
                                        A bike rental portal using React, Redux, Spring Boot, and MySQL. Implemented authentication, cart, and booking workflows with REST APIs, and designed a database schema to manage users, bikes, and rentals.
                                    </p>
                                </div>
                                <div className="flex gap-4 mt-6 text-center">
                                    <a className="text-white font-medium border-2 border-black bg-black py-2 px-6 hover:bg-white hover:text-black transition-all duration-300 text-sm" href="https://apexmoto.netlify.app/">View</a>
                                    <a className="font-medium border-2 border-black bg-white text-black py-2 px-6 hover:bg-black hover:text-white transition-all duration-300 text-sm" href="https://github.com/Prazanna22/bike-rental-frontend">Github</a>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* News Aggregator App */}
                        <SwiperSlide>
                            <div className="flex flex-col justify-between items-center rounded-lg bg-white p-6 border-2 border-black h-[360px] transition-all duration-300 hover:shadow-lg ">
                                <div className="flex flex-col items-center">
                                    <img src={news} alt="" className="w-14 md:w-16 mb-4" />
                                    <h1 className="font-semibold text-xl mb-4 text-center">News Aggregator App</h1>
                                    <p className="font-normal  text-gray-700 text-sm text-justify leading-relaxed">
                                        A news aggregator app using React, Redux, TypeScript and Tailwind CSS. Integrated a news API to display articles from multiple categories, with search functionality.
                                    </p>
                                </div>
                                <div className="flex gap-4 mt-6 text-center">
                                    <a className="text-white font-medium border-2 border-black bg-black py-2 px-6 hover:bg-white hover:text-black transition-all duration-300 text-sm" href="https://newslyapp111.netlify.app/">View</a>
                                    <a className="font-medium border-2 border-black bg-white text-black py-2 px-6 hover:bg-black hover:text-white transition-all duration-300 text-sm" href="https://github.com/Prazanna22/News-App">Github</a>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Coffee Shop Website */}
                        <SwiperSlide>
                            <div className="flex flex-col justify-between items-center rounded-lg bg-white p-6 border-2 border-black h-[360px] transition-all duration-300 hover:shadow-lg ">
                                <div className="flex flex-col items-center">
                                    <img src={coffee} alt="" className="w-14 md:w-16 mb-4" />
                                    <h1 className="font-semibold text-xl mb-4 text-center">Coffee Shop Website</h1>
                                    <p className="font-normal text-gray-700 text-sm text-justify leading-relaxed">
                                        Developed a dynamic coffee shop website using React and Tailwind CSS, featuring responsive design and a fully functional frontend cart system using React's Context Hook.
                                    </p>
                                </div>
                                <div className="flex gap-4 mt-6 text-center">
                                    <a className="text-white font-medium border-2 border-black bg-black py-2 px-6 hover:bg-white hover:text-black transition-all duration-300 text-sm" href="https://durzan.netlify.app/">View</a>
                                    <a className="font-medium border-2 border-black bg-white text-black py-2 px-6 hover:bg-black hover:text-white transition-all duration-300 text-sm" href="https://github.com/Prazanna22/CoffeeShop">Github</a>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Nike Website */}
                        <SwiperSlide>
                            <div className="flex flex-col justify-between items-center rounded-lg bg-white p-6 border-2 border-black h-[360px] transition-all duration-300 hover:shadow-lg ">
                                <div className="flex flex-col items-center">
                                    <img src={sneaker} alt="" className="w-14 md:w-16 mb-4" />
                                    <h1 className="font-semibold text-xl mb-4 text-center">Nike Website</h1>
                                    <p className="font-normal text-gray-700 text-sm text-justify leading-relaxed">
                                        Developed a Nike UI website using React and Tailwind CSS. Demonstrates expertise in responsive design, interactive components, and efficient styling with Tailwind.
                                    </p>
                                </div>
                                <div className="flex gap-4 mt-6 text-center">
                                    <a className="text-white font-medium border-2 border-black bg-black py-2 px-6 hover:bg-white hover:text-black transition-all duration-300 text-sm" href="https://nike-webpage-1.netlify.app">View</a>
                                    <a className="font-medium border-2 border-black bg-white text-black py-2 px-6 hover:bg-black hover:text-white transition-all duration-300 text-sm" href="https://github.com/Prazanna22/Nike">Github</a>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Live Weather App */}
                        <SwiperSlide>
                            <div className="flex flex-col justify-between items-center rounded-lg bg-white p-6 border-2 border-black h-[360px] transition-all duration-300 hover:shadow-lg ">
                                <div className="flex flex-col items-center">
                                    <img src={coffee} alt="" className="w-14 md:w-16 mb-4" />
                                    <h1 className="font-semibold text-xl mb-4 text-center">Live Weather App</h1>
                                    <p className="font-normal text-gray-700 text-sm text-justify leading-relaxed">
                                        A dynamic live weather app built with React and the OpenWeather API that provides real-time weather updates, including temperature, humidity, and conditions.
                                    </p>
                                </div>
                                <div className="flex gap-4 mt-6 text-center">
                                    <a className="text-white font-medium border-2 border-black bg-black py-2 px-6 hover:bg-white hover:text-black transition-all duration-300 text-sm" href="https://thriving-puffpuff-131b86.netlify.app">View</a>
                                    <a className="font-medium border-2 border-black bg-white text-black py-2 px-6 hover:bg-black hover:text-white transition-all duration-300 text-sm" href="https://github.com/Prazanna22/Weather-app">Github</a>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Gemini AI Clone */}
                        <SwiperSlide>
                            <div className="flex flex-col justify-between items-center rounded-lg bg-white p-6 border-2 border-black h-[360px] transition-all duration-300 hover:shadow-lg ">
                                <div className="flex flex-col items-center">
                                    <img src={news} alt="" className="w-14 md:w-16 mb-4" />
                                    <h1 className="font-semibold text-xl mb-4 text-center">Gemini AI Clone</h1>
                                    <p className="font-normal text-gray-700 text-sm text-justify leading-relaxed">
                                        Built a Gemini AI clone using React.js and Gemini API to create an interactive web application. Integration of Gemini API for AI functionalities and optimized performance.
                                    </p>
                                </div>
                                <div className="flex gap-4 mt-6 text-center">
                                    <a className="font-medium border-2 border-black bg-white text-black py-2 px-6 hover:bg-black hover:text-white transition-all duration-300 text-sm" href="https://github.com/Prazanna22/Gemini-clone">Github</a>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>

                    {/* Custom pagination */}
                    <div className="custom-pagination flex justify-center gap-2 mt-6"></div>
                </div>
            </section>


        </>
    )
}