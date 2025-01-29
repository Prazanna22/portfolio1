import React from 'react'
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
    return (
        <>
            <div className="py-10 md:py-20" id='4'>
                <h1 className="font-extrabold text-5xl text-[#000] my-14 uppercase text-center">Projects</h1>

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
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    className="px-5 pb-10"
                    id='custom-swiper'
                >
                    <div className="">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                            <SwiperSlide>
                                <div className="flex flex-col justify-center items-center rounded-lg bg-[#fff] p-5 hover:shadow-custom-white border-2 border-black">
                                    <img src={coffee} alt="" className='w-14 md:w-20 ' />
                                    <h1 className=" font-semibold text-xl mb-4 mt-3 ">Live Weather App</h1>
                                    <p className=" font-normal text-sm text-justify md:text-md ">A dynamic live weather app built with React and the OpenWeather
                                        API that provides real-time weather updates, including temperature,
                                        humidity, and conditions. </p>
                                    <div className="flex gap-5  lg:flex-row my-10 text-center">
                                        <a className="text-white font-medium border-[2px] border-[#000] bg-[#000] py-1 md:px-8 px-6 hover:border-3  
                                    hover:bg-transparent hover:text-[#000] " href="https://thriving-puffpuff-131b86.netlify.app">View</a>
                                        <a className="hover:text-white font-medium border-[2px] border-[#000] hover:bg-[#000] py-1 md:px-8 px-6 border-3  
                                    bg-transparent  text-[#000]" href="https://github.com/Prazanna22/Weather-app">Github</a>
                                    </div>
                                </div>
                            </SwiperSlide>

                            
                            <SwiperSlide>
                                <div className="flex flex-col justify-center items-center rounded-lg bg-[#fff] p-5 hover:shadow-custom-white border-2 border-black">
                                    <img src={news} alt="" className='w-14 md:w-20 ' />
                                    <h1 className=" font-semibold text-xl mb-4 mt-3 ">News Aggregator App</h1>
                                    <p className=" font-normal text-sm text-justify md:text-md">A news aggregator app using React, Redux, TypeScript and Tailwind CSS. 
                                    Integrated a news API to display articles from multiple categories,with search functionality.
                                    </p>
                                    <div className="flex gap-5  lg:flex-row my-10 text-center">
                                        {/* <a className="text-white font-medium border-[2px] border-[#000] bg-[#000] py-1 md:px-8 px-6 hover:border-3  
                                    hover:bg-transparent hover:text-[#000] " href="https://durzan.netlify.app/">View</a> */}
                                        <a className="hover:text-white font-medium border-[2px] border-[#000] hover:bg-[#000] py-1 md:px-8 px-6 border-3  
                                    bg-transparent  text-[#000]" href="https://github.com/Prazanna22/News-App">Github</a>
                                    </div>
                                </div>
                            </SwiperSlide>



                            <SwiperSlide>
                                <div className="flex flex-col justify-center items-center rounded-lg bg-[#fff] p-5 hover:shadow-custom-white border-2 border-black">
                                    <img src={coffee} alt="" className='w-14 md:w-20 ' />
                                    <h1 className=" font-semibold text-xl mb-4 mt-3 ">Coffee Shop Website</h1>
                                    <p className=" font-normal text-sm text-justify md:text-md">Developed a dynamic coffee shop website using React and Tailwind CSS, featuring responsive design
                                        a fully functional frontend cart system using React's Context Hook.
                                    </p>
                                    <div className="flex gap-5  lg:flex-row my-10 text-center">
                                        <a className="text-white font-medium border-[2px] border-[#000] bg-[#000] py-1 md:px-8 px-6 hover:border-3  
                                    hover:bg-transparent hover:text-[#000] " href="https://durzan.netlify.app/">View</a>
                                        <a className="hover:text-white font-medium border-[2px] border-[#000] hover:bg-[#000] py-1 md:px-8 px-6 border-3  
                                    bg-transparent  text-[#000]" href="https://github.com/Prazanna22/CoffeeShop">Github</a>
                                    </div>
                                </div>
                            </SwiperSlide>
                            
                            <SwiperSlide>
                                <div className="flex flex-col justify-center items-center rounded-lg bg-[#fff] p-5 hover:shadow-custom-white border-2 border-black">
                                    <img src={sneaker} alt="" className='w-14 md:w-20 ' />
                                    <h1 className=" font-semibold text-xl mb-4 mt-3 ">Nike Website</h1>
                                    <p className=" font-normal text-sm text-justify md:text-md">Developed a Nike UI website using React and Tailwind CSS. Demonstrates expertise in responsive design,
                                    interactive components, and efficient styling with Tailwind. </p>
                                    <div className="flex gap-5  lg:flex-row my-10 text-center">
                                        <a className="text-white font-medium border-[2px] border-[#000] bg-[#000] py-1 md:px-8 px-6 hover:border-3  
                                    hover:bg-transparent hover:text-[#000] " href=" https://nike-webpage-1.netlify.app">View</a>
                                        <a className="hover:text-white font-medium border-[2px] border-[#000] hover:bg-[#000] py-1 md:px-8 px-6 border-3  
                                    bg-transparent  text-[#000]" href="https://github.com/Prazanna22/Nike">Github</a>
                                    </div>
                                </div>
                            </SwiperSlide>
                


                            <SwiperSlide>
                                <div className="flex flex-col justify-center items-center rounded-lg bg-[#fff] p-5 hover:shadow-custom-white border-2 border-black">
                                    <img src={news} alt="" className='w-14 md:w-20 ' />
                                    <h1 className=" font-semibold text-xl mb-4 mt-3 ">Gemini Ai Clone</h1>
                                    <p className=" font-normal text-sm text-justify md:text-md">Built a Gemini AI clone using React.js and Gemini API to create an interactive web
                                    application. Integration of Gemini API for AI functionalities and optimized performance.
                                    </p>
                                    <div className="flex gap-5  lg:flex-row my-10 text-center">
                                        {/* <a className="text-white font-medium border-[2px] border-[#000] bg-[#000] py-1 md:px-8 px-6 hover:border-3  
                                    hover:bg-transparent hover:text-[#000] " href="https://durzan.netlify.app/">View</a> */}
                                        <a className="hover:text-white font-medium border-[2px] border-[#000] hover:bg-[#000] py-1 md:px-8 px-6 border-3  
                                    bg-transparent  text-[#000]" href="https://github.com/Prazanna22/Gemini-clone">Github</a>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* <SwiperSlide>
                                <div className="flex flex-col justify-center items-center rounded-lg bg-[#fff] p-5 hover:shadow-custom-white border-2 border-black">
                                    <img src={hearing} alt="" className='w-14 md:w-20 ' />
                                    <h1 className=" font-semibold text-xl mb-4 mt-3 ">Hear Loss Prediction</h1>
                                    <p className=" font-normal text-sm text-justify md:text-md">Predicted hearing loss using machine learning techniques in Anaconda, focusing on data analysis and model development. Collected and preprocessed data, built and trained machine learning models, and evaluated model performance to ensure accurate predictions.</p>
                                    <div className="flex gap-5  lg:flex-row my-9 text-center">
    
                                    </div>
                                </div>
                            </SwiperSlide> */}
                            
                        </div>
                    </div>
                </Swiper>

            </div>

        </>
    )
}