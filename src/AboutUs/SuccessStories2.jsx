import React, { useState } from 'react';
import image2 from '../assets/image2.jpg';
import data from './Success.json'



const SuccessStories2 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleNext = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        const nextIndex = currentIndex === data.length + 1 ? 0 : currentIndex + 1.2;
        setCurrentIndex(nextIndex);
        setTimeout(() => setIsTransitioning(false), 300); // Adjust transition duration as needed
    };

    const handlePrev = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        const prevIndex = currentIndex === 0 ? data.length * 2 - 2 : currentIndex - 1.2;
        setCurrentIndex(prevIndex);
        setTimeout(() => setIsTransitioning(false), 300); // Adjust transition duration as needed
    };

    const cardStyle = {
        transform: `translateX(calc(-${currentIndex * (100 / (data.length + 1))}%))`,
        transition: currentIndex === data.length * 2 + 1 ? 'none' : 'transform 0.3s ease-in-out', // Apply transition only if not transitioning from last to first
        transition: currentIndex === 0 ? 'none' : 'transform 0.3s ease-in-out', // Apply transition only if not transitioning from last to first
        width: `${(data.length + 1) * (100 / 1)}%`, // Adjust the width of the container
    };

    return (
        <div className="w-full overflow-clip flex mt-10">

            <div className='flex justify-center items-center align-middle overflow-visible'>

                <button
                    type="button"
                    className={`flex bg-white/30 backdrop-blur-lg absolute   w-10 h-80 p-2 focus:ring-offset-2 z-50 justify-center items-center  ${isTransitioning || currentIndex === 0 ? 'cursor-not-allowed' : ''}`}
                    onClick={handlePrev}
                    disabled={isTransitioning || currentIndex === 0} // Disable if transitioning or at the first index
                >

                    {/* <img className='w-4 h-4 transform rotate-180' src="https://cdns.iconmonstr.com/wp-content/releases/preview/2012/240/iconmonstr-arrow-24.png" alt="" /> */}
                    <svg fill="#000000" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve" transform="rotate(0)matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z"></path> </g></svg>
                </button>
                <button
                    type="button"
                    className="  bg-white/30 flex right-4  backdrop-blur-lg   absolute w-10 h-80 p-2   z-50 justify-center items-center align-middle  ml-2  "
                    onClick={handleNext}
                    disabled={isTransitioning}
                >
                    {/* <img className='w-4 h-4' src="https://cdns.iconmonstr.com/wp-content/releases/preview/2012/240/iconmonstr-arrow-24.png" alt="" /> */}
                    <svg fill="#000000" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z"></path> </g></svg>
                </button>
            </div>
            <div className='flex'>
                <div className="flex h-[360px] items-center font-semibold" style={cardStyle}>
                    {data.map((data, index) => (
                        <div
                            key={index / 2}
                            className="w-72 md:w-80 h-80 flex flex-col items-center justify-start text-center p-4 bg-blue-950 text-white rounded-md shadow-md mx-1 drop-shadow-xl transition duration-300 transform hover:scale-105"
                        >
                            <div className='flex items-center gap-2 pl-6 text-left'>
                                <img className='w-16 h-16 rounded-full border' src={data.img} alt="" />
                                <h3 className='w-44 md:w-72 text-xl line-clamp-2'>{data.name}</h3>
                            </div>
                            <p className="line-clamp-8 mt-4 w-44 md:w-72 ">{data.bio}</p>
                        </div>
                    ))}

                </div>


                <div className='flex justify-center items-center align-middle overflow-visible'>
                </div>
                <div className="flex h-[360px] items-center font-semibold" style={cardStyle}>
                    {data.map((data, index) => (
                        <div
                            key={index}
                            className="w-72 md:w-80 h-80 flex flex-col items-center justify-start text-center p-4 bg-blue-950 text-white rounded-md shadow-md mx-1 drop-shadow-xl transition duration-300 transform hover:scale-105"
                        >
                            <div className='flex items-center gap-2 pl-6 text-left'>
                                <img className='w-16 h-16 rounded-full border' src={data.img} alt="" />
                                <h3 className='w-44 md:w-72 text-xl line-clamp-2'>{data.name}</h3>
                            </div>
                            <p className="line-clamp-8 mt-4 w-44 md:w-72  ">{data.bio}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className=" flex items-center justify-center pb-4">



            </div>
        </div>
    );
};

export default SuccessStories2;
