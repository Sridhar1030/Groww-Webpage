import React from 'react';
import sachinImg from "../assets/Images/sachin.png";
import aksheshImg from "../assets/Images/Akshesh.png";
import shubhamImg from "../assets/Images/Shubham.png";
import aakashImg from "../assets/Images/Aakash.png";
import ankitImg from "../assets/Images/Ankit.png";
import abhishekImg from "../assets/Images/Abhishek.png";

const skills = [
    {
        id: 1,
        name: 'Mr. Sachin Yadav',
        qualification: 'BE Computer Science',
        experience: '7 years',
        imgs: sachinImg,
    },
    {
        id: 2,
        name: 'Mr. Akshesh Yadav',
        qualification: 'M.B.B.S',
        experience: '6 years',
        imgs: aksheshImg,
    },
    {
        id: 3,
        name: 'Mr. Shubham Jaiswar',
        qualification: 'M.B.B.S',
        experience: '7 years',
        imgs: shubhamImg,
    },
    {
        id: 4,  
        name: 'Mr. Aakash Chaurasiya',
        qualification: 'BE Computer Science',
        experience: '7 years',
        imgs: aakashImg,
    },
    {
        id: 5,
        name: 'Mr. Ankit Vishwakarma',
        qualification: 'BE Computer Science',
        experience: '6 years',
        imgs: ankitImg,
    },
    {
        id: 6,
        name: 'Mr. Abhishek Chaubey',
        qualification: 'B.Sc. Bed (Mathematics) ',
        experience: '6 years',
        imgs: abhishekImg,
    },
];

const Outteam2 = () => {
    return (
        <div className='rounded-lg flex justify-center mt-10'>
            <div className="container rounded-3xl slider-contain flex overflow-hidden h-72" >
                <div className=" slider flex overflow-visible">
                    {skills.map((skills, id) => {
                        return (
                            <div className='transistion duration-300 transform hover:scale-105 flex flex-col justify-center items-center'>
                                <img src={skills.imgs} alt="img" className='h-32 w-32 border-2 border-black flex flex-col z-50 rounded-full' />
                                <div className=" items-center text-center  rounded-3xl -mt-10 h-44 pt-12 z-0 mx-3 hover:text-accent border-2 bg-slate-300 flex flex-col">
                                    <h5 className=' w-52 mx-4 text-lg font-bold'>{skills.name}</h5>
                                    <i className=' w-48 mx-4'>{skills.qualification}</i>
                                    <h5 className=' w-40 mx-4 mt-2'>Teaching Experience <p className='font-bold'>{skills.experience}</p> </h5>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className=" slider flex overflow-visible">
                    {skills.map((skills, id) => {
                        return (
                            <div className='transistion duration-300 transform hover:scale-105 flex flex-col justify-center items-center'>
                                <img src={skills.imgs} alt="img" className='h-32 w-32 border-2 border-black flex flex-col z-50 rounded-full' />
                                <div className=" items-center text-center  rounded-3xl -mt-10 h-44 pt-12 z-0 mx-3 hover:text-accent border-2 bg-slate-300 flex flex-col">
                                    <h5 className=' w-52 mx-4 text-lg font-bold'>{skills.name}</h5>
                                    <i className=' w-48 mx-4'>{skills.qualification}</i>
                                    <h5 className=' w-40 mx-4 mt-2'>Teaching Experience <p className='font-bold'>{skills.experience}</p> </h5>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className=" slider flex overflow-visible">
                    {skills.map((skills, id) => {
                        return (
                            <div className='flex flex-col justify-center items-center'>
                                <img src={skills.imgs} alt="img" className='h-32 w-32 border-2 border-black flex flex-col z-50 rounded-full' />
                                <div className=" items-center text-center  rounded-3xl -mt-10 h-44 pt-12 z-0 mx-3 hover:text-accent border-2 bg-slate-300 flex flex-col">
                                    <h5 className=' w-52 mx-4 text-lg font-semibold'>{skills.name}</h5>
                                    <h5 className=' w-48 mx-4'>{skills.qualification}</h5>
                                    <h5 className=' w-40 mx-4 4 mt-2'>Teaching Experience {skills.experience}</h5>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Outteam2