import React from 'react'
const skills = [
    {
        id: 1,
        name: 'Mr Sachin Yadav',
        qualification: '(BE computer science)',
        experience: ' Teaching Experience 7 years',
        imgs: "https://static.vecteezy.com/system/resources/previews/007/409/979/original/people-icon-design-avatar-icon-person-icons-people-icons-are-set-in-trendy-flat-style-user-icon-set-vector.jpg",
    },
    {
        id: 2,
        name: 'Mr Akshesh Yadav',
        qualification: '(M.B.B.S)',
        experience: ' Teaching Experience 6 years',
        imgs: "https://static.vecteezy.com/system/resources/previews/007/409/979/original/people-icon-design-avatar-icon-person-icons-people-icons-are-set-in-trendy-flat-style-user-icon-set-vector.jpg",
    },
    {
        id: 1,
        name: 'Mr Shubham Jaiswar',
        qualification: '(M.B.B.S)',
        experience: ' Teaching Experience 7 years',
        imgs: "https://static.vecteezy.com/system/resources/previews/007/409/979/original/people-icon-design-avatar-icon-person-icons-people-icons-are-set-in-trendy-flat-style-user-icon-set-vector.jpg",
    },
    {
        id: 1,
        name: 'Mr Aakash Chaurasiya',
        qualification: '(BE computer science)',
        experience: ' Teaching Experience 7 years',
        imgs: "https://static.vecteezy.com/system/resources/previews/007/409/979/original/people-icon-design-avatar-icon-person-icons-people-icons-are-set-in-trendy-flat-style-user-icon-set-vector.jpg",
    },
    {
        id: 1,
        name: 'Mr Ankit Vishwakarma',
        qualification: '(BE computer science)',
        experience: ' Teaching Experience 6 years',
        imgs: "https://static.vecteezy.com/system/resources/previews/007/409/979/original/people-icon-design-avatar-icon-person-icons-people-icons-are-set-in-trendy-flat-style-user-icon-set-vector.jpg",
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
                                <img src={skills.imgs} alt="" className='h-32 w-32 flex flex-col  rounded-full' />
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
                            <div className=" items-center text-center rounded-3xl my-3 mx-3 hover:text-accent border-2 bg-slate-300 flex flex-col">
                                <img src={skills.imgs} alt="" className='w-32 h-32 item rounded-full' />
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