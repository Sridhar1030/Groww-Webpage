import React from 'react'
import img from '../assets/Images/sachin.png';

const Head = () => {
    return (
        <div className="text-gray-100 bg-gray-500 p-5 backdrop-filter backdrop-blur-sm bg-opacity-80 drop-shadow-xl rounded-2xl">
            <h1 className='font-semibold text-center text-4xl'>Know About
                <span className="text-blue-950 ml-2">"Grow Educators"</span>
            </h1>
            <div className='flex flex-col-reverse items-center justify-center lg:gap-20 p-10 lg:flex-row'>
                <div>
                    <h2 className='text-3xl mt-4'>Hey there ....
                        <span className='mt-3 mb-10 justify-end'>I'm Sachin Yadav,
                            <p className=""> Founder of "Grow Educators".</p>
                        </span>
                    </h2>
                </div>
                <div className='flex flex-col rounded-xl overflow-hidden w-52 text-center'>
                    <img className='w-52 flex mx-auto' src={img} alt='about us' />
                    <p className='p-1 pt-2 bg-blue-950 text-white'>BE (Comps ENG)</p>
                </div>
            </div>
            <p className=" text-xl mb-5 lg:mx-14 font-">
                At "Grow Educators", we focus on building a strong foundation of knowledge and concept in students for their success, providing an excellent platform for the preparation of competitive exams and board-level education.
                We provide the best academic support and personal care which helps them meet their career goals and objectives.
                To the parents, we have a responsibility to nurture ethical and responsible leadership in the children.
            </p>
        </div>
    )
}

export default Head