import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import RegButton from './buttons/RegButton';
import LoginButton from './buttons/LoginButton';
import LogoutButton from './buttons/LogoutButton';
import Logo from './Logo';
import checkSession from '../util/session';

const Header = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    async function sessionCheck() {
        let session = await checkSession();
        setLoggedIn(session);
    }

    useEffect(() => {
        sessionCheck();
    }, []);

    return (
        <header className="fixed text-black px-4 py-2 w-full flex justify-between items-center bg-white/50 backdrop-blur-sm h-20 border-b-2 border-gray-200 rounded-b-lg">
            <Logo/>

            {/* Mobile Menu Button */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2">
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Navigation Menu */}
            <nav className={`md:flex gap-4 text-xl absolute md:static top-20 left-0 w-full bg-white md:bg-transparent md:w-fit justify-center items-center flex-col md:flex-row shadow-lg md:shadow-none shadow-gray-500 ${menuOpen ? 'flex' : 'hidden'}`}>
                <Link to="/" className="p-1 m-1 md:m-4 bg-white rounded-sm hover:text-blue-500  hover:bg-blue-200">Home</Link>
                <Link to="/about" className="p-1 m-1 md:m-4 bg-white rounded-sm hover:text-blue-500  hover:bg-blue-200">About</Link>
                {!loggedIn ? (
                    <div className='flex gap-4 justify-center items-center'>
                        <RegButton priText = {`Register`}/>
                        <LoginButton/>
                    </div>
                ) : (
                    <div className='flex gap-4 justify-center items-center'>
                        <Link to="/test" className="bg-green-500 hover:bg-green-700 hover:scale-102 delay-75 text-lg font-semibold text-white p-6 pt-3 pb-3 rounded-md h-fit w-fit">Start Test</Link>
                        <LogoutButton />
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;