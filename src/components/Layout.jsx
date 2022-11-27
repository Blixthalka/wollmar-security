import React from 'react';
import { Link } from 'gatsby'
import Logo from '../images/logo.svg'

const Layout = ({ children, className }) => {
    return (
        <div>
            <nav className="flex max-w-2xl mx-auto px-5 py-5 justify-between items-center">
                <Link to="/">
                    <Logo className="w-40 h-14" />
                </Link>
                <div className="flex space-x-5">
                    <Link to="/blog">
                        <div className="text-gray-500 hover:text-gray-800 hover:cursor-pointer">Blog</div>
                    </Link>
                </div>
            </nav>
            <div className={"mt-20 " + className}>
                {children}
            </div>
            <div className="bg-gray-800 py-20 mt-32">
                <div className="max-w-4xl mx-auto px-5 flex space-x-5">
                    <Link to="/blog"><span className="text-gray-400 hover:text-white hover:cursor-pointer">Blog</span></Link>
                </div>
            </div>
        </div>
    );
};

export default Layout;