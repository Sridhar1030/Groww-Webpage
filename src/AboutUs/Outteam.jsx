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
        name: 'Mr Sachin Yadav',
        qualification: '(BE computer science)',
        experience: 'Teaching Experience 7 years',
        imgs: sachinImg,
    },
    {
        id: 2,
        name: 'Mr Akshesh Yadav',
        qualification: '(M.B.B.S)',
        experience: 'Teaching Experience 6 years',
        imgs: aksheshImg,
    },
    {
        id: 3,
        name: 'Mr Shubham Jaiswar',
        qualification: '(M.B.B.S)',
        experience: 'Teaching Experience 7 years',
        imgs: shubhamImg,
    },
    {
        id: 4,
        name: 'Mr Aakash Chaurasiya',
        qualification: '(BE computer science)',
        experience: 'Teaching Experience 7 years',
        imgs: aakashImg,
    },
    {
        id: 5,
        name: 'Mr Ankit Vishwakarma',
        qualification: '(BE computer science)',
        experience: 'Teaching Experience 6 years',
        imgs: ankitImg,
    },
    {
        id: 6,
        name: 'Mr Abhishek Chaubey',
        qualification: 'B.Sc. Bed(Mathematics) ',
        experience: 'Teaching Experience 6 years',
        imgs: abhishekImg,
    },
];

const Outteam = () => {
    return (
        <div className='rounded-lg flex justify-center items-center'>
            <div className="container slider-contain flex overflow-hidden" >
                <div className=" slider flex overflow-visible">
                    {skills.map((skills, id) => {
                        return (
                            <div className="transistion duration-300 transform hover:scale-105 items-center text-center rounded-3xl my-3 mx-3 hover:text-accent bg-slate-300 flex flex-col">
                                <img src={skills.imgs} alt="img" className='h-32 w-32 flex flex-col  rounded-full' />
                                <h5 className=' w-40 mx-4 font-semibold'>{skills.name}</h5>
                                <h5 className=' w-40 mx-4'>{skills.qualification}</h5>
                                <h5 className=' w-40 mx-4'>{skills.experience}</h5>

                            </div>
                        )
                    })}
                </div>
                <div className=" slider flex overflow-visible">
                    {skills.map((skills, id) => {
                        return (
                            <div className="transistion duration-300 transform hover:scale-105 items-center text-center rounded-3xl my-3 mx-3 hover:text-accent bg-slate-300 flex flex-col">
                                <img src={skills.imgs} alt="img" className='h-32 w-32 flex flex-col  rounded-full' />
                                <h5 className=' w-40 mx-4 font-semibold'>{skills.name}</h5>
                                <h5 className=' w-40 mx-4'>{skills.qualification}</h5>
                                <h5 className=' w-40 mx-4'>{skills.experience}</h5>

                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Outteam