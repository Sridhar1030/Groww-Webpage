import React from 'react'
import img from '../assets/Images/sachin.png';

const Header2 = () => {
    return (
        <>
            <h1 className='font-semibold text-center text-4xl my-4 text-white'>Know About
                <span className="text-blue-950 ml-2">"Grow Educators"</span>
            </h1>
            <div className="text-gray-100 bg-blue-300 rounded-3xl border border-gray-300 drop-shadow-xl  backdrop-filter backdrop-blur-sm bg-opacity-80 p-5">
                <div className='flex flex-col-reverse items-center mx-5 justify-center lg:gap-20 p-10 lg:flex-row '>

                    <div className='flex flex-col lg:w-3/4 text-center'>
                        <h2 className='text-5xl mt-4 mb-10'>Hey there ....
                            <span className='mt-3 mb-10 justify-end'>I'm Sachin Yadav,
                                <div className=""> Founder of
                                    <span className='font-bold text-blue-950'> "Grow Educators"</span>
                                </div>

                            </span>

                        </h2>
                        <i className=" text-xl lg:text-2xl mb-5 text-justify flex font-serif">
                            At "Grow Educators", we focus on building a strong foundation of knowledge and concept in students for their success, providing an excellent platform for the preparation of competitive exams and board-level education.
                            We provide the best academic support and personal care which helps them meet their career goals and objectives.
                            To the parents, we have a responsibility to nurture ethical and responsible leadership in the children.
                        </i>
                    </div>

                    <div className='w-52 flex flex-col rounded-xl overflow-hidden lg:w-1/4 text-center'>
                        <img className='w-full flex mx-auto' src={img} alt='about us' />
                        <p className='p-1 pt-2 bg-blue-950 text-white'>BE (Comps ENG)</p>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Header2