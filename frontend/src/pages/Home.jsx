import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <Header />
            <div className='w-full pt-20 pb-7'>
                <div id="hero" className='w-full h-fit flex md:flex-row flex-col justify-center items-center p-8 gap-8'>
                    <div className='w-full md:w-1/3 h-full flex flex-col justify-between items-center  md:p-5 p-2'>
                        <img src="./hero-txt.png" alt="Hero Text" className='w-full' />
                        {/* <h1><del className='text-red-700'>No</del> more</h1>
                            <h1><del className='text-red-700'>empty</del></h1>
                            <h1>classrooms <span className='text-green-400'>!</span></h1> */}
                        <div className='mt-5 w-full flex h-fit justify-center items-center'>
                            <Link 
                                to = "/register"
                                className='bg-blue-500 text-xl text-white p-3 w-fit h-fit rounded-lg'
                            >Register Now</Link>
                        </div>
                    </div>
                    <div className='hidden md:block md:w-2/3 h-auto rounded-2xl overflow-hidden'>
                        <img src="./hero-image.jpg" alt="hero-image" className='w-full' />
                    </div>
                </div>
                <div className='flex md:flex-row flex-col md:tex-lg text-2xl justify-center items-center w-full h-fit pt-5 p-2 md:p-4'>
                    <div className='md:w-1/2 w-full p-4'>
                        <img src="./girl-on-board.jpg" alt="Girl writing on board" className='w-full rounded-2xl' />
                    </div>
                    <div className='md:w-1/2 w-full p-4'>
                        India&apos;s education system, despite its vast reach, continues to grapple with deep-seated inefficiencies and systemic inequities. The COVID-19 pandemic has only exacerbated these challenges, with the digital divide further marginalizing students from low-income families. The pandemic has also underscored the need for a more holistic approach to education, one that goes beyond rote learning and focuses on building critical thinking and problem-solving skills.
                    </div>
                </div>
                <div className='flex md:flex-row flex-col-reverse md:tex-lg text-2xl justify-center items-center w-full h-fit pt-5 p-2 md:p-4'>
                    <div className='md:w-1/2 w-full p-4'>
                        By leveraging technology and innovative teaching methods, we can create a more personalized and engaging learning experience for students. We can also empower teachers with the tools and resources they need to deliver high-quality instruction, regardless of their location or background. Our project seeks to disrupt this archaic framework by introducing an IoT-powered, ML-driven assessment system that evaluates students based on a single comprehensive test and recommends a personalized learning trajectory suited to their individual strengths and weaknesses.
                    </div>
                    <div className='md:w-1/2 w-full p-4'>
                        <img src="./students.jpg" alt="Girl writing on board" className='w-full rounded-2xl' />
                    </div>
                </div>
                <div className='w-full p-5 h-fit flex flex-col justify-center items-center gap-4'>
                    <p className='text-black md:text-5xl text-3xl'>Register for the test now !</p>
                    <button className='bg-blue-500 text-xl text-white p-3 w-fit h-fit rounded-lg'>Register</button>
                </div>
            </div>
            <Footer />
        </>
    )
};

export default Home;