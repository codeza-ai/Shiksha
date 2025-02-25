import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <Header />
            <main id="hero" className='pt-20 w-full h-fit flex md:flex-row flex-col justify-center items-center p-8'>
                <div className='w-full rounded-lg flex flex-col bg-[url(./classroom.jpg)] bg-cover bg-center md:w-1/2 h-96'>
                    <div className='w-full flex flex-col justify-center items-center md:p-5 p-2'>
                        <h1><del className='text-red-700'>No</del> more</h1>
                        <h1><del className='text-red-700'>empty</del></h1>
                        <h1>classrooms <span className='text-green-400'>!</span>
                        </h1>
                        <div className='mt-5 w-full flex h-fit justify-center items-center'>
                            <Link
                                to="/register"
                                className='bg-blue-500 hover:bg-blue-700 hover:scale-105 delay-75 transition-all  text-lg font-semibold text-white p-4 pr-6 pl-6 rounded-md'
                            >Register now<span className='font-light'> - it&apos;s free</span></Link>
                        </div>
                    </div>
                </div>
            </main>
            <div className='flex md:flex-row flex-col md:text-lg text-md 
                justify-center items-center w-full h-fit pt-7 pb-7 p-2 md:p-4'>
                <div className='md:w-1/2 w-full flex justify-center'>
                    <img src="./girl-on-board.jpg" alt="Girl writing on board" className='md:w-3/4 w-full rounded-lg' />
                </div>
                <div className='md:w-1/2 w-full flex justify-center'>
                    <div className='w-3/4'>
                        India&apos;s education system, despite its vast reach, continues to grapple with deep-seated inefficiencies and systemic inequities. The COVID-19 pandemic has only exacerbated these challenges, with the digital divide further marginalizing students from low-income families. The pandemic has also underscored the need for a more holistic approach to education, one that goes beyond rote learning and focuses on building critical thinking and problem-solving skills.
                    </div>
                </div>
            </div>
            <div className='flex md:flex-row flex-col-reverse md:text-lg text-md justify-center items-center w-full h-fit pt-7 pb-7 md:p-4'>
                <div className='md:w-1/2 w-full flex justify-center'>
                    <div className='w-3/4'>
                        By leveraging technology and innovative teaching methods, we can create a more personalized and engaging learning experience for students. We can also empower teachers with the tools and resources they need to deliver high-quality instruction, regardless of their location or background. Our project seeks to disrupt this archaic framework by introducing an IoT-powered, ML-driven assessment system that evaluates students based on a single comprehensive test and recommends a personalized learning trajectory suited to their individual strengths and weaknesses.
                    </div>
                </div>
                <div className='md:w-1/2 w-full flex justify-center'>
                    <img src="./students.jpg" alt="Girl writing on board" className='md:w-3/4 w-full rounded-lg' />
                </div>
            </div>
            <div className='mb-7 w-full p-5 h-fit flex flex-col justify-center items-center gap-4'>
                <p className='text-black font-extrabold md:text-5xl text-2xl'>Register for the test now !</p>
                <Link
                    to="/register"
                    className='bg-blue-500 hover:bg-blue-700 hover:scale-105 delay-75 transition-all  text-lg font-semibold text-white p-4 pr-6 pl-6 rounded-md'
                >Register</Link>
            </div>
            <Footer />
        </>
    )
};

export default Home;