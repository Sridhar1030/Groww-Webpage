import React from 'react'
const skills = [
    {
        id: 1,
        name: 'HTML',
        imgs: "https://picsum.photos/200/300",
    },
    {
        id: 2,
        name: 'CSS ' + '(Bootstrap, Tailwind CSS, Material UI)',
        imgs: "https://picsum.photos/200/300",
    },
    {
        id: 3,
        name: 'JavaScript',
        imgs: "https://picsum.photos/200/300",
    },
    {
        id: 4,
        name: 'React JS',
        imgs: "https://picsum.photos/200/300",
    },
    {
        id: 5,
        name: 'Node JS',
        imgs: "https://picsum.photos/200/300",
    },
    {
        id: 6,
        name: 'MongoDB',
        imgs: "https://picsum.photos/200/300",
    },
    {
        id: 7,
        name: 'Adobe Photoshop',
        imgs: "https://picsum.photos/200/300",
    },
    {
        id: 8,
        name: 'Adobe Illustrator',
        imgs: "https://picsum.photos/200/300",
    },
    {
        id: 9,
        name: 'Adobe XD',
        imgs: "https://picsum.photos/200/300",
    },
    {
        id: 10,
        name: 'Figma',
        imgs: "https://picsum.photos/200/300",
    },
]

const Outteam = () => {
    return (
        <div className='rounded-lg border-2'>
            <div className="container slider-contain flex overflow-hidden" >
                <div className=" slider flex overflow-visible">
                    {skills.map((skills, id) => {
                        return (
                            <div className=" items-center text-center rounded-3xl my-3 mx-3 hover:text-accent border-2 bg-slate-300 flex flex-col">
                                <img src={skills.imgs} alt="" className='w-48 h-20 item rounded-full' />
                                <h5 className=' w-40 mx-4'>{skills.name}</h5>
                            </div>
                        )
                    })}
                </div>
                <div className=" slider flex overflow-visible">
                    {skills.map((skills, id) => {
                        return (
                            <div className=" items-center text-center rounded-3xl my-3 mx-3 hover:text-accent border-2 bg-slate-300 flex flex-col">
                                <img src={skills.imgs} alt="" className='w-48 h-20 item rounded-full' />
                                <h5 className=' w-40 mx-4'>{skills.name}</h5>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Outteam