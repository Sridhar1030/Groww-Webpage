import Outteam from "./Outteam";
import SuccessStories from "./SuccessStories";
import SuccessStories2 from "./SuccessStories2";

function AboutUs() {
    return (
        <>
            <section className=' mx-10 mt-5'>
                <h1 className='font-semibold text-center text-4xl'>Know About
                    <span className="text-blue-500">"Grow Educators"</span>
                </h1>
                <div className='flex flex-col-reverse items-center justify-between lg:flex-row'>
                    <div>
                        <h2 className='text-3xl border'>Hey there ....
                            <span className='mt-3 mb-10 justify-end'>I'm Saofin Yadav,
                                <p> Founder of "Grow Educators".</p>
                            </span>
                        </h2>
                    </div>
                    <div className='flex flex-col border border-red-500 w-56'>
                        <img className='w-52 flex mx-auto' src='https://static.vecteezy.com/system/resources/previews/007/409/979/original/people-icon-design-avatar-icon-person-icons-people-icons-are-set-in-trendy-flat-style-user-icon-set-vector.jpg' alt='about us' />
                        <p className='mt-1 border border-red-500'>BE (Comps ENG)</p>
                    </div>
                </div>
                <p className=" text-black">
                    At "Grow Educators", we focus on building a strong foundation of knowledge and concept in students for their success, providing an excellent platform for the preparation of competitive exams and board-level education.
                    We provide the best academic support and personal care which helps them meet their career goals and objectives.

                    To the parents, we have a responsibility to nurture ethical and responsible leadership in the children.
                </p>
                <Outteam />
                <SuccessStories />
                <SuccessStories2/>
            </section>
        </>
    )
}

export default AboutUs;