import Ourteam2 from "./OurTeam2";
import Outteam from "./Outteam";
import SuccessStories from "./SuccessStories";
import SuccessStories2 from "./SuccessStories2";
import img from '../assets/Images/sachin.png';
function AboutUs() {
    return (
        <>
            <section className=' mx-10 mt-5'>
            <h1 className='font-semibold text-center text-4xl'>Know About
                    <span className="text-blue-500">"Grow Educators"</span>
                </h1>
                <div className='flex flex-col-reverse items-center justify-center lg:gap-20 p-10 lg:flex-row'>
                    <div>
                        <h2 className='text-3xl mt-4'>Hey there ....
                            <span className='mt-3 mb-10 justify-end'>I'm Sachin Yadav,
                                <p> Founder of "Grow Educators".</p>
                            </span>
                        </h2>
                    </div>
                    <div className='flex flex-col border-2 w-52 text-center'>
                        <img className='w-52 flex mx-auto' src={img} alt='about us' />
                        <p className='mt-1 '>BE (Comps ENG)</p>
                    </div>
                </div>
                <p className=" text-black text-xl mb-5 lg:mx-14 font-serif">
                    At "Grow Educators", we focus on building a strong foundation of knowledge and concept in students for their success, providing an excellent platform for the preparation of competitive exams and board-level education.
                    We provide the best academic support and personal care which helps them meet their career goals and objectives.

                    To the parents, we have a responsibility to nurture ethical and responsible leadership in the children.
                </p>
                <Outteam />
                <Ourteam2/>
                <SuccessStories />
                <SuccessStories2/>
            </section>
        </>
    )
}

export default AboutUs;