import React from 'react'

export const Education = () => {
    return (
        <>
            {/* Large screens */}
            <div className="hidden sm:block py-14" id="2">
                <h1 className="font-extrabold text-5xl text-[#000] my-14  uppercase text-center" >EDCATION</h1>
                <div className="max-w-7xl mx-auto w-full grid grid-cols-9" >

                    {/* stack-1 */}
                    <div className="col-span-4 w-full h-full">
                        <div className="h-full w-full bg-[#000] rounded-md px-4 py-4 text-white">
                            <h1 className="pb-3">        2020 - 2024</h1>
                            <h1>B.E - Computer Science and Engineering</h1>
                            <p className="pt-1 text-md md:text-lg text-justify my-3">
                                Sri Ramakrishna Institute of Technology, Coimbatore</p>
                            <p> CGPA: 8.0</p>
                        </div>
                    </div>
                    <div className="col-span-1 w-full h-full flex justify-center items-center">
                        <div className="h-full w-1 bg-[#000]"></div>
                        <div className="absolute  w-6 h-6 rounded-full bg-[#000] z-10 text-white text-center"></div>
                    </div>
                    <div className="col-span-4 w-full h-full"></div>

                    {/* stack-2 */}
                    <div className="col-span-4 w-full h-full"></div>
                    <div className="col-span-1 w-full h-full flex justify-center items-center">
                        <div className="h-full w-1 bg-[#000]"></div>
                        <div className="absolute  w-6 h-6 rounded-full bg-[#000] z-10 text-white text-center"></div>
                    </div>
                    <div className="col-span-4 w-full h-full">
                        <div className="h-full w-full bg-[#000] rounded-md px-4 py-4 text-white">
                            <h1 className="pb-3">2019 - 2020</h1>
                            <h1>Higher Secondary Certificate (HSC)</h1>
                            <p className="pt-1 text-md md:text-lg text-justify my-3">
                                G.S Hindu Higher Secondary School, Srivilliputhur</p>
                            <p> Percentage: 74.5%</p>
                        </div>
                    </div>

                    {/* stack-3 */}
                    <div className="col-span-4 w-full h-full">
                        <div className="h-full w-full bg-[#000] rounded-md px-4 py-4 text-white">
                            <h1 className="pb-3">2017 - 2018</h1>
                            <h1>Secondary School Leaving Certificate (SSLC)</h1>
                            <p className="pt-1 text-md md:text-lg text-justify my-3">
                                G.S Hindu Higher Secondary School, Srivilliputhur</p>
                            <p>Percentage: 86.2%</p>
                        </div>
                    </div>
                    <div className="col-span-1 w-full h-full flex justify-center items-center">
                        <div className="h-full w-1 bg-[#000]"></div>
                        <div className="absolute w-6 h-6 rounded-full bg-[#000] z-10 text-white text-center"></div>
                    </div>
                    <div className="col-span-4 w-full h-full"></div>
                </div>
            </div>

            {/* Small screens */}
            <div className="hidden" id="2">
                <h1 className="text-center font-bold text-5xl text-[#000] pb-10">Education</h1>
                <div className="space-y-10 px-4">

                    {/* stack-1 */}
                    
                    <div className="flex items-center">
                        <div className="w-1 h-full bg-[#000]"></div>
                        <div className="h-full w-full bg-[#000] rounded-md px-4 py-4 text-white">
                            <h1 className="pb-3">        2020 - 2024</h1>
                            <h1>B.E - Computer Science and Engineering</h1>
                            <p className="pt-1 text-md md:text-lg text-justify my-3">
                                Sri Ramakrishna Institute of Technology, Coimbatore</p>
                            <p> CGPA: 8.0</p>
                        </div>
                    </div>

                    {/* stack-2 */}
                    <div className="flex items-center">
                        <div className="w-1 h-full bg-[#000]"></div>
                        <div className="h-full w-full bg-[#000] rounded-md px-4 py-4 text-white">
                            <h1 className="pb-3">2019 - 2020</h1>
                            <h1>Higher Secondary Certificate (HSC)</h1>
                            <p className="pt-1 text-md md:text-lg text-justify my-3">
                                G.S Hindu Higher Secondary School, Srivilliputhur</p>
                            <p> Percentage: 74.5%</p>
                        </div>
                    </div>

                    {/* stack-3 */}
                    <div className="flex items-center">
                        <div className="w-1 h-full bg-[#000]"></div>
                        <div className="h-full w-full bg-[#000] rounded-md px-4 py-4 text-white">
                            <h1 className="pb-3">2017 - 2018</h1>
                            <h1>Secondary School Leaving Certificate (SSLC)</h1>
                            <p className="pt-1 text-md md:text-lg text-justify my-3">
                                G.S Hindu Higher Secondary School, Srivilliputhur</p>
                            <p>Percentage: 86.2%</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
