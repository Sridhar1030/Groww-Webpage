import Ourteam2 from "./OurTeam2";
import Outteam from "./Outteam";
import Head from "./Head";
import SuccessStories from "./SuccessStories";
import SuccessStories2 from "./SuccessStories2";
import Header2 from "./Header2";
function AboutUs() {
    return (
        <>
            <section className=' px-10 pt-5  bg-blue-400'>
                <Head />
                <Header2/>
                {/* <Outteam /> */}
                <h1 className="text-center font-semibold text-4xl my-5 text-white pt-12">Our Experienced Teachers</h1>
                <Ourteam2 />
                {/* <SuccessStories /> */}
                <h1 className="text-center font-semibold text-4xl my-5 text-white pt-12">Success Stories</h1>

                <SuccessStories2 />
            </section>
        </>
    )
}

export default AboutUs;