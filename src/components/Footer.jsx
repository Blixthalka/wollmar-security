import React from 'react'

const Footer = () => {
    return (
        <div className="bg-gray-800 py-20">
            <div className="max-w-4xl mx-auto px-5 flex space-x-5">
                <p className="text-gray-400 hover:text-white hover:cursor-pointer">Blog</p>
                <p className="text-gray-400 hover:text-white hover:cursor-pointer">Sign up</p>
                <p className="text-gray-400 hover:text-white hover:cursor-pointer">Log in</p>
            </div>
        </div>
    );
}

export default Footer;