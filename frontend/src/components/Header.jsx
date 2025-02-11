import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="fixed text-black p-4 w-full flex justify-between items-center backdrop-blur-sm h-16 border-b-2 border-gray-200 rounded-b-lg">
            <Link to="/" className="text-3xl font-bold">
                Shikshan
            </Link>
            <nav className='flex gap-2 text-xl'>
                <Link to="/" className="mr-4">Home</Link>
                <Link to="/about" className="mr-4">About</Link>
                <Link to="/contact" className="mr-4">Contact</Link>
                <Link to="/register" className="mr-4">Register</Link>
            </nav>
        </header>
    )
};
export default Header;