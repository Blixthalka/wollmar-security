import React from 'react'
import AddIcon from '../images/add.svg'
import PenIcon from '../images/pen.svg'
import EmailIcon from '../images/email.svg'
import TrashIcon from '../images/trash.svg'
import MessageIcon from '../images/message.svg'
import UnlockIcon from '../images/unlock.svg'
import { motion } from "framer-motion";




const Guide = () => {

    const iconFill = "fill-gray-500 group-hover:fill-gray-800  flex-shrink-0";
    const steps = [
        {
            text: "Add customer phone, email and password to Wollmar.",
            icon: <PenIcon className={iconFill} />
        }, {
            text: "A unique link is sent by email.",
            icon: <EmailIcon className={iconFill} />
        },
        {
            text: "And an one-time code is sent by SMS.",
            icon: <MessageIcon className={iconFill} />
        },
        {
            text: "Customer accesses password by combining link and code.",
            icon: <UnlockIcon className={iconFill} />
        },
        {
            text: "Password is deleted from our servers after 15 minutes.",
            icon: <TrashIcon className={iconFill} />
        }
    ]


    return (
        <div className="max-w-2xl mx-auto p-5 justify-between">
            <h2 className="mtext-bg  text-gray-800 text-center max-w-lg mx-auto">With Wollmar it's a <span className='italic'>breeze</span> to send passwords securely</h2>

            <div className='flex-col space-y-5 mt-10'>
                {steps.map((step) => (
                    <motion.div whileHover="hover" initial="rest" animate="rest" className="bg-gray-100 p-3 flex space-x-5 items-center group">
                        <motion.div
                            variants={{
                                rest: {
                                    scale: 1,
                                    rotate: 0
                                },
                                hover: {
                                    scale: 1.05,
                                    rotate: -12,
                                    transition: { duration: '0.5' },
                                }
                            }}>
                            {step.icon}
                        </motion.div>
                        <span className="mtext-md text-gray-500 group-hover:text-gray-800">{step.text}</span>
                    </motion.div>
                ))}
            </div>
        </div >
    );
}

export default Guide;