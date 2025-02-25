import {Link} from 'react-router-dom';
const Footer = ()=>{
    return (
        <footer className="w-full bg-gray-800 text-white text-xl p-5 flex md:flex-row flex-col gap-3">
            <div className="md:w-1/2 w-full p-4 flex flex-col justify-center items-center">
                <ul className='w-full h-full flex flex-col gap-3 justify-center items-center'>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/register">Register for test</Link></li>
                    <li><a href="https://www.linkedin.com/in/darshan-odedara/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    <li><a href="https://www.instagram.com/darshan.odedara" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                </ul>
            </div>
            <div className="md:w-1/2 w-full flex flex-col justify-center items-center">
                <div className='w-full p-5 flex items-center justify-center gap-4 text-4xl font-bold'>
                    <img src="./logo.png" className="w-14" alt="Logo" />
                    <h1>Shiksha</h1>
                </div>
                <div>
                    <div className="flex flex-col items-center mt-3">
                        <h1>Created by - </h1>
                        <h2 className='text-2xl font-bold'>Darshan Odedara</h2>
                    </div>
                    <p>© 2025 All Rights Reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;