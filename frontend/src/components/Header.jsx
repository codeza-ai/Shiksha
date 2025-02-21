import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import checkSession from '../util/session';
import logout from '../util/logout';

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
        <header className="fixed text-black px-4 py-2 w-full flex justify-between items-center backdrop-blur-sm h-20 border-b-2 border-gray-200 rounded-b-lg">
            <Link to="/" className="text-3xl font-bold h-full">
                <img src="/logo-2.png" alt="Logo" className="h-full" />
            </Link>

            {/* Mobile Menu Button */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2">
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Navigation Menu */}
            <nav className={`md:flex gap-4 text-xl absolute md:static top-20 left-0 w-full bg-white md:bg-transparent md:w-auto flex-col md:flex-row shadow-lg md:shadow-none shadow-gray-500 ${menuOpen ? 'flex' : 'hidden'}`}>
                <Link to="/" className="p-1 m-1 md:m-4 bg-white rounded-sm hover:text-blue-500">Home</Link>
                <Link to="/about" className="p-1 m-1 md:m-4 bg-white rounded-sm hover:text-blue-500">About</Link>
                <Link to="/register" className="p-1 m-1 md:m-4 bg-white rounded-sm hover:text-blue-500">Register</Link>
                {!loggedIn ? (
                    <Link to="/login" className="p-1 m-1 md:m-4 bg-white rounded-sm hover:text-green-500">Login</Link>
                ) : (
                    <button onClick={logout} className="p-1 m-1 md:m-4 bg-white rounded-sm text-red-500 hover:bg-red-200">Log out</button>
                )}
            </nav>
        </header>
    );
};

export default Header;