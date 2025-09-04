// import React from 'react'

// export const Education = () => {
//     return (
//         <>
//             {/* Large screens */}
//             <div className="hidden sm:block py-14" id="2">
//                 <h1 className="font-extrabold text-5xl text-[#000] my-14  uppercase text-center" >EDUCATION</h1>
//                 <div className="max-w-7xl mx-auto w-full grid grid-cols-9" >

//                     {/* stack-1 */}
//                     <div className="col-span-4 w-full h-full">
//                         <div className="h-full w-full bg-[#000] rounded-md px-4 py-4 text-white">
//                             <h1 className="pb-3">        2020 - 2024</h1>
//                             <h1>B.E - Computer Science and Engineering</h1>
//                             <p className="pt-1 text-md md:text-lg text-justify my-3">
//                                 Sri Ramakrishna Institute of Technology, Coimbatore</p>
//                             <p> CGPA: 8.0</p>
//                         </div>
//                     </div>
//                     <div className="col-span-1 w-full h-full flex justify-center items-center">
//                         <div className="h-full w-1 bg-[#000]"></div>
//                         <div className="absolute  w-6 h-6 rounded-full bg-[#000] z-10 text-white text-center"></div>
//                     </div>
//                     <div className="col-span-4 w-full h-full"></div>

//                     {/* stack-2 */}
//                     <div className="col-span-4 w-full h-full"></div>
//                     <div className="col-span-1 w-full h-full flex justify-center items-center">
//                         <div className="h-full w-1 bg-[#000]"></div>
//                         <div className="absolute  w-6 h-6 rounded-full bg-[#000] z-10 text-white text-center"></div>
//                     </div>
//                     <div className="col-span-4 w-full h-full">
//                         <div className="h-full w-full bg-[#000] rounded-md px-4 py-4 text-white">
//                             <h1 className="pb-3">2019 - 2020</h1>
//                             <h1>Higher Secondary Certificate (HSC)</h1>
//                             <p className="pt-1 text-md md:text-lg text-justify my-3">
//                                 G.S Hindu Higher Secondary School, Srivilliputhur</p>
//                             <p> Percentage: 74.5%</p>
//                         </div>
//                     </div>

//                     {/* stack-3 */}
//                     <div className="col-span-4 w-full h-full">
//                         <div className="h-full w-full bg-[#000] rounded-md px-4 py-4 text-white">
//                             <h1 className="pb-3">2017 - 2018</h1>
//                             <h1>Secondary School Leaving Certificate (SSLC)</h1>
//                             <p className="pt-1 text-md md:text-lg text-justify my-3">
//                                 G.S Hindu Higher Secondary School, Srivilliputhur</p>
//                             <p>Percentage: 86.2%</p>
//                         </div>
//                     </div>
//                     <div className="col-span-1 w-full h-full flex justify-center items-center">
//                         <div className="h-full w-1 bg-[#000]"></div>
//                         <div className="absolute w-6 h-6 rounded-full bg-[#000] z-10 text-white text-center"></div>
//                     </div>
//                     <div className="col-span-4 w-full h-full"></div>
//                 </div>
//             </div>

//             {/* Small screens */}
//             <div className="hidden" id="2">
//                 <h1 className="text-center font-bold text-5xl text-[#000] pb-10">Education</h1>
//                 <div className="space-y-10 px-4">

//                     {/* stack-1 */}

//                     <div className="flex items-center">
//                         <div className="w-1 h-full bg-[#000]"></div>
//                         <div className="h-full w-full bg-[#000] rounded-md px-4 py-4 text-white">
//                             <h1 className="pb-3">        2020 - 2024</h1>
//                             <h1>B.E - Computer Science and Engineering</h1>
//                             <p className="pt-1 text-md md:text-lg text-justify my-3">
//                                 Sri Ramakrishna Institute of Technology, Coimbatore</p>
//                             <p> CGPA: 8.0</p>
//                         </div>
//                     </div>

//                     {/* stack-2 */}
//                     <div className="flex items-center">
//                         <div className="w-1 h-full bg-[#000]"></div>
//                         <div className="h-full w-full bg-[#000] rounded-md px-4 py-4 text-white">
//                             <h1 className="pb-3">2019 - 2020</h1>
//                             <h1>Higher Secondary Certificate (HSC)</h1>
//                             <p className="pt-1 text-md md:text-lg text-justify my-3">
//                                 G.S Hindu Higher Secondary School, Srivilliputhur</p>
//                             <p> Percentage: 74.5%</p>
//                         </div>
//                     </div>

//                     {/* stack-3 */}
//                     <div className="flex items-center">
//                         <div className="w-1 h-full bg-[#000]"></div>
//                         <div className="h-full w-full bg-[#000] rounded-md px-4 py-4 text-white">
//                             <h1 className="pb-3">2017 - 2018</h1>
//                             <h1>Secondary School Leaving Certificate (SSLC)</h1>
//                             <p className="pt-1 text-md md:text-lg text-justify my-3">
//                                 G.S Hindu Higher Secondary School, Srivilliputhur</p>
//                             <p>Percentage: 86.2%</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }



import React from 'react'

export const Education = () => {
    return (
        <>
            <div className="py-16 md:py-24 bg-white px-5 sm:px-10 md:px-10" id="education">
                <div className="container mx-auto px-4">
                    <h1 className="font-extrabold text-4xl md:text-5xl text-black uppercase text-center mb-4">
                        EDUCATION
                    </h1>
                    <div className="w-20 h-1 bg-black mx-auto mb-12"></div>

                    {/* Large screens */}
                    <div className="hidden md:block">
                        <div className="max-w-6xl mx-auto relative">
                            {/* Timeline line */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-black"></div>

                            {/* Timeline items */}
                            <div className="relative">
                                {/* Item 1 - B.E */}
                                <div className="mb-16 flex justify-between items-center w-full">
                                    <div className="order-1 w-5/12"></div>
                                    <div className="z-10 flex items-center order-1 bg-black shadow-xl w-6 h-6 rounded-full"></div>
                                    <div className="order-1 w-5/12 bg-black rounded-lg shadow-lg p-6 text-white">
                                       <h3 className="font-bold text-lg">2020 - 2024</h3>
                                        <h2 className="font-semibold md:font-bold text-md md:text-xl mb-2">B.E - Computer Science and Engineering</h2>
                                        <p className="text-gray-200  text-sm md:text-md">Sri Ramakrishna Institute of Technology, Coimbatore</p>
                                        <span className="text-sm font-semibold mt-2 text-white ">CGPA - 8.0</span>
                                    </div>
                                </div>

                                {/* Item 2 - HSC */}
                                <div className="mb-16 flex justify-between items-center w-full">
                                    <div className="order-1 w-5/12 bg-black rounded-lg shadow-lg p-6 text-white">
                                      <h3 className="font-bold text-lg">2019 - 2020</h3>
                                        <h2 className="font-semibold md:font-bold text-md md:text-xl mb-2">Higher Secondary Certificate (HSC)</h2>
                                        <p className="text-gray-200  text-sm md:text-md">G.S Hindu Higher Secondary School, Srivilliputhur</p>
                                        <span className="text-sm font-semibold mt-2 text-white ">Percentage - 74.5%</span>
                                    </div>
                                    <div className="z-10 flex items-center order-1 bg-black shadow-xl w-6 h-6 rounded-full"></div>
                                    <div className="order-1 w-5/12"></div>
                                </div>

                                {/* Item 3 - SSLC */}
                                <div className="mb-16 flex justify-between items-center w-full">
                                    <div className="order-1 w-5/12"></div>
                                    <div className="z-10 flex items-center order-1 bg-black shadow-xl w-6 h-6 rounded-full"></div>
                                    <div className="order-1 w-5/12 bg-black rounded-lg shadow-lg p-6 text-white">
                                         <h3 className="font-bold text-lg">2017 - 2018</h3>
                                        <h2 className="font-semibold md:font-bold text-md md:text-xl mb-2">Secondary School Leaving Certificate (SSLC)</h2>
                                        <p className="text-gray-200  text-sm md:text-md  ">G.S Hindu Higher Secondary School, Srivilliputhur</p>
                                        <p className='text-sm font-semibold mt-2 text-white  '>Percentage - 86.2%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Small screens */}
                    <div className="md:hidden">
                        <div className="max-w-2xl mx-auto relative">
                            {/* Timeline line */}
                            <div className="absolute left-6 h-full w-1 bg-black"></div>

                            {/* Timeline items */}
                            <div className="space-y-10 pl-14">
                                {/* Item 1 - B.E */}
                                <div className="relative">
                                    <div className="absolute -left-10 top-3 bg-black shadow-xl w-6 h-6 rounded-full"></div>
                                    <div className="bg-black rounded-lg shadow-lg p-6 text-white">
                                        <h3 className="font-bold text-lg">2020 - 2024</h3>
                                        <h2 className="font-semibold md:font-bold text-md md:text-xl mb-2">B.E - Computer Science and Engineering</h2>
                                        <p className="text-gray-200  text-sm md:text-md">Sri Ramakrishna Institute of Technology, Coimbatore</p>
                                        <span className="text-sm font-semibold mt-2 text-white ">CGPA - 8.0</span>
                                    </div>
                                </div>

                                {/* Item 2 - HSC */}
                                <div className="relative">
                                    <div className="absolute -left-10 top-3 bg-black shadow-xl w-6 h-6 rounded-full"></div>
                                    <div className="bg-black rounded-lg shadow-lg p-6 text-white">
                                        <h3 className="font-bold text-lg">2019 - 2020</h3>
                                        <h2 className="font-semibold md:font-bold text-md md:text-xl mb-2">Higher Secondary Certificate (HSC)</h2>
                                        <p className="text-gray-200  text-sm md:text-md">G.S Hindu Higher Secondary School, Srivilliputhur</p>
                                        <span className="text-sm font-semibold mt-2 text-white ">Percentage - 74.5%</span>
                                    </div>
                                </div>

                                {/* Item 3 - SSLC */}
                                <div className="relative">
                                    <div className="absolute -left-10 top-3 bg-black shadow-xl w-6 h-6 rounded-full"></div>
                                    <div className="bg-black rounded-lg shadow-lg p-6 text-white">
                                        <h3 className="font-bold text-lg">2017 - 2018</h3>
                                        <h2 className="font-semibold md:font-bold text-md md:text-xl mb-2">Secondary School Leaving Certificate (SSLC)</h2>
                                        <p className="text-gray-200  text-sm md:text-md ">G.S Hindu Higher Secondary School, Srivilliputhur</p>
                                        <p className='text-sm font-semibold mt-2 text-white  '>Percentage - 86.2%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}