import React from 'react'
import { Link } from 'react-router-dom'
import edu from '../../assests/courses/edu.jpg'

function Card() {
    return (
        <div>
            <div>
                <div>
                    <h2 className="text-2xl text-center font-bold relative top-5 text-blue-800  sm:text-3xl md:text-4xl lg:text-center">Our Courses</h2>
                </div>
                <div>
                    <div className="px-4 mb-8 sm:flex flex-wrap justify-center gap-14">
                        <div className="bg-pink-100 rounded-3xl p-6 w-full mt-11 lg:w-[430px] md:w-[530px] sm:w-[480px] sm:mt-24   flex flex-col justify-between">
                            <h2 className="text-2xl font-bold text-center mb-4 lg:text-3xl md:text-3xl">SCHOOL</h2>
                            <div className=" flex justify-center flex-wrap">
                                <img src={edu} alt="Grade 5th to 10th" className="text-center w-[200px] sm:w-[285px] sm:h-[200px]" />
                            </div>
                            <h4 className="text-2xl font-semibold text-center mt-6">GRADE<br />5<sup>th</sup> TO 10<sup>th</sup></h4>
                            <p className="text-sm mt-3">Lorem ipsum dolor
                                sit amet consectetur adipisicing elit. Optio quia nam est quasi
                                delectus,
                                odit dolorem id velit, porro assumenda et hic, suscipit repellat quam aliquid Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. Repellat, nisi nesciunt. Cum, maiores sequi eos
                                ipsum odio laboriosam ullam eum veniam unde, illo nobis corrupti, enim dignissimos adipisci! Minus, nostrum!</p>
                            <button className="w-full bg-yellow-200 text-center rounded-lg py-3 text-lg mt-5 ">View Courses</button>
                        </div>
                        <div className="bg-pink-100 rounded-3xl p-6 w-full mt-11 lg:w-[430px] md:w-[530px] sm:w-[480px]  sm:mt-24 flex flex-col justify-between ">
                            <h2 className="text-2xl font-bold text-center mb-4 lg:text-3xl md:text-3xl">SCIENCE</h2>
                            <div className=" flex justify-center flex-wrap">
                                <img src={edu} alt="SCIENCE" className="text-center w-[200px] sm:w-[285px] sm:h-[200px]" />
                            </div>
                            <ul className="list-disc mt-6">
                                <li className="font-semibold sm:text-xl">XI<sup>th</sup></li>
                                <li className="font-semibold sm:text-xl">XII<sup>th</sup></li>
                                <li className="font-semibold sm:text-xl">JEE (MAINS)</li>
                                <li className="font-semibold sm:text-xl">NEET</li>
                                <li className="font-semibold sm:text-xl">MHT-CET(MED &amp; ENGG)</li>
                            </ul>
                            <p className="text-sm mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quia nam est quasi
                                delectus,
                                odit dolorem id velit, porro assumenda et hic, suscipit repellat quam aliquid.</p>
                            <button className="w-full bg-yellow-200 text-center rounded-lg py-3 text-lg mt-3  ">View Courses</button>
                        </div>
                    </div>
                </div>
                <div className="px-4 mb-8 sm:flex flex-wrap justify-center gap-14">
                    <div className="bg-pink-100 rounded-3xl p-6 w-full mt-11 lg:w-[430px] md:w-[530px] sm:w-[480px] sm:mt-24 flex flex-col justify-between ">
                        <h2 className="text-2xl font-bold text-center mb-4 lg:text-3xl md:text-3xl">COMMERCE</h2>
                        <div className=" flex justify-center flex-wrap">
                            <img src={edu} alt="COMMERCE" className="text-center w-[200px] sm:w-[285px] sm:h-[200px]" />
                        </div>
                        <ul className="list-disc mt-6">
                            <li className="font-semibold sm:text-xl">F.Y.J.C</li>
                            <li className="font-semibold sm:text-xl ">S.Y.J.C</li>
                            <li className="font-semibold sm:text-xl">B.COM</li>
                            <li className="font-semibold sm:text-xl">BAF</li>
                            <li className="font-semibold sm:text-xl">CA FOUNDATION</li>
                        </ul>
                        <p className="text-sm mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quia nam est quasi
                            delectus,
                            odit dolorem id velit, porro assumenda et hic, suscipit repellat quam aliquid.</p>
                        <button className="w-full bg-yellow-200 text-center rounded-lg py-3 text-lg mt-3 ">View Courses</button>
                    </div>
                    <div className="bg-pink-100 rounded-3xl p-6 w-full mt-11 lg:w-[430px] md:w-[530px]  sm:mt-24 ml-2  sm:w-[480px]  flex flex-col justify-between">
                        <h2 className="text-2xl font-bold text-center mb-4 lg:text-3xl md:text-3xl">TECH</h2>
                        <div className=" flex justify-center flex-wrap">
                            <img src={edu} alt="tech" className="text-center w-[200px] sm:w-[285px] sm:h-[200px]" />
                        </div>
                        <ul className="list-disc mt-6">
                            <li className="font-semibold sm:text-xl">C &amp; C++</li>
                            <li className="font-semibold sm:text-xl">JAVA</li>
                            <li className="font-semibold sm:text-xl">PYTHON</li>
                            <li className="font-semibold sm:text-xl">HTML &amp; CSS</li>
                        </ul>
                        <p className="text-sm mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quia nam est quasi
                            delectus,
                            odit dolorem id velit, porro assumenda et hic, suscipit repellat quam aliquid.</p>
                        <button className="w-full bg-yellow-200 text-center rounded-lg py-3 text-lg mt-3 ">View Courses</button>
                    </div>
                </div>
                <h2 className="text-2xl font-bold w-full text-center relative bottom-6 top-5 text-blue-800 sm:text-3xl lg:text-4xl">WHAT'S SPECIAL?</h2>
                <div className="flex justify-center">
                    <div className="w-[80%] sm:h-[900px] md:h-[850px] lg:h-[650px]  bg-pink-100 mt-16  rounded-3xl lg:flex justify-center items-center  ">
                        <div className="grid justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  md:grid-cols-2 lg:gap-16  ">
                            <div className=" grid justify-center ">
                                <div className=" rounded-full w-[170px] h-[170px] bg-custom sm:ml-4 mt-4 ml-5" style={{
                                    backgroundImage: `url(${edu})`
                                }} />
                                <h2 className="text-[16px]  mt-4 sm:ml-4 font-bold lg:text-xl"><i className="fas fa-check-circle mr-2 text-green-700" />Daily live interactive classes</h2>
                            </div>
                            <div className="grid justify-center">
                                <div className="rounded-full w-[170px] h-[170px] bg-custom  mt-4 ml-2 " style={{ backgroundImage: `url(${edu})` }} />
                                <h2 className="text-[16px]  mt-4 font-bold lg:text-xl "><i className="fas fa-check-circle mr-2 text-green-700" />Personalized study tools</h2>
                            </div>
                            <div className="grid justify-center">
                                <div className="rounded-full w-[170px] h-[170px] bg-custom sm: mt-14 md:mt-14 lg:mt-4 ml-2" style={{ backgroundImage: `url(${edu})` }} />
                                <h2 className="text-[16px]  mt-4  font-bold lg:text-xl"><i className="fas fa-check-circle mr-2 text-green-700" />Weekly self study plan</h2>
                            </div>
                            <div className="mb-6 grid justify-center">
                                <div className=" rounded-full w-[170px] h-[170px] bg-custom mt-14 sm:ml-4  ml-7" style={{ backgroundImage: `url(${edu})` }} />
                                <h2 className="text-[16px] mt-4 sm:ml-4 font-bold lg:text-xl"><i className="fas fa-check-circle mr-2  text-green-700" />Score improvement strategy</h2>
                            </div>
                            <div className="mb-6  grid justify-center">
                                <div className="rounded-full w-[170px] h-[170px] bg-custom mt-14 ml-6" style={{ backgroundImage: `url(${edu})` }} />
                                <h2 className="text-[16px]  mt-4 font-bold lg:text-xl"><i className="fas fa-check-circle mr-2  text-green-700" />Timely syllabus completion</h2>
                            </div>
                            <div className="mb-6  grid justify-center">
                                <div className="rounded-full w-[170px] h-[170px] bg-custom mt-14 mr-2" style={{ backgroundImage: `url(${edu})` }} />
                                <h2 className="text-[16px] mt-4 font-bold lg:text-xl"><i className="fas fa-check-circle mr-2  text-green-700" />Tech base teaching</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sm:flex flex-wrap justify-center items-center">
                    <h1 className="text-xl font-bold mt-14   text-blue-800 text-center sm:hidden">WHAT SETS US APART ?</h1>
                    <div className="grid ">
                        <div className="w-[230px] h-[230px] bg-pink-100 mt-[80px] sm:w-[300px] sm:h-[300px] sm:ml-5 md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]" />
                    </div>
                    <div className="grid justify-center items-center">
                        <h1 className="text-xl font-bold mt-14 hidden sm:block text-blue-800 text-center sm:text-xl md:text-2xl md:block sm:font-bold sm:ml-9 lg:text-4xl">WHAT SETS US APART?</h1>
                    </div>
                </div>
                <br />
                <br />
                <br />
            </div>

        </div >
    )
}

export default Card