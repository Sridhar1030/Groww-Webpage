import { useState } from 'react'


function Features() {

    return (
        <section className=" text-black body-font">
            <div className="container px-5 py-24 mx-auto">
                <h1 className="sm:text-4xl text-3xl text-center font-medium title-font mb-4">Learning App</h1>
                <div className="flex my-6 justify-center">
                    <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                </div>

                <div className="text-center mb-20 flex flex-col lg:flex-row-reverse mdcs">
                    <div className="flex flex-col items-center lg:w-4/5 sm:mb-2 -mx-2">
                        <div className="p-2 w-5/6 md:w-2/3">
                            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"
                                    className="text-indigo-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span className="title-font font-medium text-white">Unified Dashboard</span>
                            </div>
                        </div>
                        <div className="p-2 w-5/6 md:w-2/3">
                            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"
                                    className="text-indigo-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span className="title-font font-medium text-white">Video Library of Lecture Recording</span>
                            </div>
                        </div>
                        <div className="p-2 w-5/6 md:w-2/3">
                            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"
                                    className="text-indigo-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span className="title-font font-medium text-white">Regular Exams and Analysis</span>
                            </div>
                        </div>
                        <div className="p-2 w-5/6 md:w-2/3">
                            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"
                                    className="text-indigo-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span className="title-font font-medium text-white">Performance at your Fingertips</span>
                            </div>
                        </div>
                        <div className="p-2 w-5/6 md:w-2/3">
                            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"
                                    className="text-indigo-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span className="title-font font-medium text-white">The Ultimate Online Advantage</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-evenly lg:w-2/3 mx-2 h-96">

                        <div className="rounded-md px-2 w-full h-3/6 my-2" style={{ background: 'url("https://clipart-library.com/images/pT5rK4dgc.jpg") center center / cover' }}></div>
                        <div className="rounded-md px-2 w-full h-3/6 my-2" style={{ background: 'url("https://clipart-library.com/images/pT5rK4dgc.jpg") center center / cover' }}></div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features
