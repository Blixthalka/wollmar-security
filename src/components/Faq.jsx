import React, { useState } from 'react';
import AddIcon from '../images/add.svg';
import { motion, AnimatePresence } from "framer-motion";


const Faq = () => {

    const [faqs, setFaqs] = useState(
        [
            {
                question: "Why have I got an email or SMS from you?",
                answer: <div className="flex-col space-y-5">
                    <p>This means that one of our customers is trying to send you a password to one of their systems, so that you can login to that system. If they have sent it wrongly please contact the sender contained in the message.</p>
                </div>,
                opened: false
            },
            {
                question: "Why is it important to send passwords encrypted?",
                answer: <div className="flex-col space-y-5">
                    <p>Sending passwords unencrypted exposes you to an advisary that can get a hold of said password. If they can access passwords they can access your system and cause a lot of damage.</p>
                    <p>The damage could be everything from data theft, data corruption, service disruptions or permanent loss of capital. Advisaries can be very creative explioting your specific company.</p>
                </div>,
                opened: false
            },
            {
                question: "How is Wollmar better than just emailing the password?",
                answer: <div className="flex-col space-y-5">
                    <p>If you send a password with unencrypted email to a client. It requires only the advisary to get ahold of the email to be able to login. Which could be fairly easy. Also the password is probably going to be laying around on the customers email server for a long time, exposing the customer further.</p>
                    <p>On the otherhand if you are using Wollmar, the advisary needs to access both the customers phone and email to get ahold of the password. Which is very unlikey. Also it's not laying around on a server after it has read.</p>
                </div>,
                opened: false
            }, {
                question: "When is Wollmar available?",
                answer: <p>We're aiming at releasing <span className="text-gray-800 font-medium">January 2023</span>. Signup on the waitinglist to be notified when it's happening.</p>,
                opened: false
            }, {
                question: "How much does it cost?",
                answer: <p>100 USD a month. It's only the sender that have to pay. <span className="text-gray-800 font-medium">If you are receiving a password it costs nothing.</span></p>,
                opened: false
            }
        ]
    );

    return (
        <div className="max-w-2xl mx-auto p-5 justify-between">
            <h2 className="mtext-bg  text-gray-800 text-center">FAQ</h2>

            <div className="mt-10">
                {faqs.map((faq, index) => (
                    <div className="">
                        <button className="border-b border-gray-300 hover:cursor-pointer flex items-center justify-between w-full py-2 px-5 " onClick={e => {
                            setFaqs(state => {
                                state[index].opened = !state[index].opened;
                                return Object.assign([], state);
                            })
                        }}>
                            <h4 className="mtext-md text-left text-gray-800">{faq.question}</h4>
                            <motion.div
                                animate={{ rotate: faq.opened ? 45 : 0 }}
                                transition={{
                                    duration: '0.5',
                                    type: 'spring',
                                    damping: 8,
                                    stiffness: 100,
                                    restDelta: 0.001
                                }}
                            >
                                <AddIcon className={`fill-gray-800 flex-shrink-0 ${faq.opened ? '' : ''}`} />
                            </motion.div>
                        </button>

                        <AnimatePresence initial={false} mode="wait">
                            {faq.opened && (
                                <motion.div
                                    initial={{
                                        maxHeight: 0,
                                        opacity: 0,
                                    }}
                                    animate={{
                                        maxHeight: '400px',
                                        opacity: 1,
                                    }}
                                    exit={{
                                        maxHeight: 0,
                                        opacity: 0,
                                    }}
                                    transition={{ duration: '0.5' }}
                                    style={{ overflow: `hidden` }}
                                >
                                    <div className="p-5 text-gray-500 border-b border-gray-300">
                                        {faq.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                    </div>
                ))}
            </div>

        </div>
    );
}

export default Faq;