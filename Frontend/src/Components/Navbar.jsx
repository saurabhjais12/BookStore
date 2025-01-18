import React from 'react'
import { Link } from 'react-router-dom';
import Login from './Login';
const Navbar = () => {


    return (
        <div className="flex h-13 justify-between items-center px-6 py-4 bg-gray-800 text-white md:px-20   fixed left-0 top-0 right-0">
            {/* Logo Section */}
            <Link to='/'>
            <div className="text-2xl font-bold"><span className='text-red-600'>B</span>ook<span className='text-red-500'>S</span>tore</div>
            </Link>
            {/* Navigation Links */}
            <ul className="hidden px-10 md:flex space-x-8">
                <Link to="/" className="hover:text-gray-300 hidden md:block cursor-pointer">Home</Link>
                <Link to="/cource" className="hover:text-gray-300 hidden md:block cursor-pointer">Books</Link>
                <Link to="/contact" className="hover:text-gray-300 hidden md:block cursor-pointer">Contact</Link>
                <Link to="/about"  className="hover:text-gray-300 hidden md:block cursor-pointer">About</Link>
            </ul>

            {/* Search Bar */}
            <div className="hidden h-10 md:flex items-center hover:bg-slate-600 duration-200 bg-black text-white rounded-md p-1 max-w-sm mx-auto">
                <input
                    type="text"
                    placeholder="Search..."
                    className="flex-grow px-4 py-2 bg-transparent outline-none text-white-700"
                />
                <button className="px-2 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                    Search
                </button>
            </div>

            {/* Login Button */}
            <Link to='/login'>
            <button className="px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-600">
                Login
            </button>
            </Link>
            
            
        </div>
    );
};

export default Navbar;
