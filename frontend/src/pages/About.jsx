import Header from "../components/Header";
import Footer from "../components/Footer";
const About = ()=>{
    return (<>
        <Header/>
        <div className="h-20 bg-white">
        </div>
        <div className="w-full h-fit flex flex-col items-center justify-center p-3 pb-7">
            <div className="md:w-3/4 w-full bg-gray-100 p-2 md:p-4 rounded-xl shadow-lg h-fit md:text-lg text-md mt-10">
                <h2 className="text-2xl font-bold text-black">About us:</h2>
                <p className="mt-3">
                    We are an innovative team committed to redefining personalized learning. Our project administers a single comprehensive assessment to students in a classroom setting, utilizing ML-driven analytics to evaluate their performance and recommend an optimized learning path. This data-driven approach ensures that each student receives tailored educational guidance, fostering intellectual growth and efficiency in learning.
                </p>
                <p className="mt-3">
                    By harnessing the power of intelligent automation and adaptive learning, we aim to empower students with the insights and tools they need to excel in an ever-evolving academic landscape.
                </p>
            </div>
            <div className="md:w-3/4 w-full bg-white p-2 md:p-4 rounded-xl shadow-lg h-fit md:text-lg text-md mt-10">
                <a href="https://sdgs.un.org/goals/goal4"
                className="text-3xl font-extrabold text-blue-500 hover:text-blue-700">SDG 4 - Quality Education</a>
                <img src="un-sdg.png" alt="UN SDG 4 - Quality Education" className="w-full rounded-xll" />
                <p className="mt-3">
                    Our project aligns with the United Nations Sustainable Development Goal 4, which aims to ensure inclusive and equitable quality education for all. By leveraging technology and data analytics, we seek to bridge the gap between traditional classroom instruction and personalized learning, providing students with the tools they need to succeed in a rapidly changing world.
                </p>
            </div>  
            <div className="md:w-3/4 w-full p-2 md:p-4 gap-4 md:gap-8 md:text-lg text-md mt-10 shadow-xl md:flex-row flex flex-col justify-evenly bg-white rounded-xll">
                <div className="flex flex-col items-center justify-center p-2 gap-3 h-fit w-fit">
                    <img src="Darshan.png" alt="Darshan Odedara" className="w-xs mb-4"/>
                    <h1 className="font-bold">Darshan Odedara</h1>
                    <h1 className="text-blue-500">Frontend Development</h1>
                </div>
                <div className="flex flex-col items-center justify-center p-2 gap-3 h-fit w-fit">
                    <img src="Steve.png" alt="Steve" className="w-xs mb-4"/>
                    <h1 className="font-bold">Steve Joseph</h1>
                    <h1 className="text-blue-500">Backend Development</h1>
                </div>
                <div className="flex flex-col items-center justify-center p-2 gap-3 h-fit w-fit">
                    <img src="Arjun.png" alt="Arjun" className="w-xs mb-4"/>
                    <h1 className="font-bold">Arjun Avittathur</h1>
                    <h1 className="text-blue-500">Machine Learning</h1>
                </div>
            </div>
        </div>
        <Footer/>
    </>
    );
};

export default About;