import Header from "../components/Header";
import Footer from "../components/Footer";
const About = ()=>{
    return (<>
        <Header/>
        <div className="h-20 bg-white">
        </div>
        <div className="w-full h-fit flex flex-col items-center justify-center bg-gray-100 p-3 pb-7">
            <div className="md:w-2/3 w-full bg-white md:p-8 p-4 rounded-lg shadow-lg h-fit text-md mt-10">
                <h2 className="text-2xl font-bold text-black">About us:</h2>
                <div className="mt-3">
                    We are an innovative team committed to redefining personalized learning. Our project administers a single comprehensive assessment to students in a classroom setting, utilizing ML-driven analytics to evaluate their performance and recommend an optimized learning path. This data-driven approach ensures that each student receives tailored educational guidance, fostering intellectual growth and efficiency in learning.
                </div>
                <div className="mt-3">
                    By harnessing the power of intelligent automation and adaptive learning, we aim to empower students with the insights and tools they need to excel in an ever-evolving academic landscape.
                </div>
            </div>
            <div className="md:w-2/3 w-full bg-white md:p-8 p-4 rounded-lg shadow-lg h-fit text-md mt-10">
                <a href="https://sdgs.un.org/goals/goal4"
                className="text-3xl font-extrabold text-blue-500 hover:text-blue-700">SDG 4 - Quality Education</a>
                <img src="un-sdg.png" alt="UN SDG 4 - Quality Education" className="w-full rounded-2xl" />
                <div className="mt-3">
                    Our project aligns with the United Nations Sustainable Development Goal 4, which aims to ensure inclusive and equitable quality education for all. By leveraging technology and data analytics, we seek to bridge the gap between traditional classroom instruction and personalized learning, providing students with the tools they need to succeed in a rapidly changing world.
                </div>
            </div>  
            <div className="md:w-fit w-full p-4 gap-3 mt-10 shadow-xl md:flex-row flex flex-col justify-evenly bg-white rounded-2xl">
                <div className="flex flex-col items-center justify-center p-2 gap-3 h-fit w-fit">
                    <img src="Darshan.png" alt="Darshan Odedara" className="w-xs mb-4"/>
                    <h1 className="text-2xl font-bold">Darshan Odedara</h1>
                    <h1 className="text-lg text-blue-500">Frontend Development</h1>
                </div>
                <div className="flex flex-col items-center justify-center p-2 gap-3 h-fit w-fit">
                    <img src="Steve.png" alt="Steve" className="w-xs mb-4"/>
                    <h1 className="text-2xl font-bold">Steve Joseph</h1>
                    <h1 className="text-lg text-blue-500">Backend Development</h1>
                </div>
                <div className="flex flex-col items-center justify-center p-2 gap-3 h-fit w-fit">
                    <img src="Arjun.png" alt="Arjun" className="w-xs mb-4"/>
                    <h1 className="text-2xl font-bold">Arjun Avittathur</h1>
                    <h1 className="text-lg text-blue-500">Machine Learning</h1>
                </div>
            </div>
        </div>
        <Footer/>
    </>
    );
};

export default About;