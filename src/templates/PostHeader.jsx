import React from 'react';



const PostHeader = ({ date, className }) => {
    return (
        <div className={className}>

            <div className="flex justify-between text-gray-500 text-sm">
                <div className="grid">
                    <span>Published on</span>
                    <span className="text-gray-800">{date}</span>
                </div>
                <div className="grid">
                    <span className="">Written by</span>
                    <span className="text-gray-800">Wollmar Security Team</span>
                </div>

            </div>
        </div>
    );
};

export default PostHeader;