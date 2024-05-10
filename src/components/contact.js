'use client'

import { useState } from "react"

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiChevronDown } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";

export const Contact = () => {

    const [fd, setFd] = useState({
        name: '',
        email: '',
        message: '',
        sub: '',
        phone: ''
    });

    return (
        <div className="px-8 py-16">
            <div className="text-[#1B2D9F] flex justify-center mx-auto text-center w-full">Contact Us</div>
            <div className="font-semibold text-3xl flex justify-center mx-auto text-center w-full">
                Join With Us, Now!
            </div>
            <div className="lg:w-[90%] flex justify-center mx-auto mt-10">
                <div className="lg:w-[40%] p-5 bg-[#1B2D9F]">
                    <div className="font-semibold text-xl text-white">
                        Contact Details
                    </div>
                </div>
                <div className="lg:w-[60%]">
                    <form className="p-8 border border-[#9F8D1B] rounded-br-2xl">
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="name"
                                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:border focus:border-[#1B2D9F]"
                                placeholder="Your Name*"
                                required
                            />
                            <input
                                type="email"
                                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:border focus:border-[#1B2D9F]"
                                placeholder="Your Email*"
                                required
                            />
                            <input
                                type="tel"
                                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:border focus:border-[#1B2D9F]"
                                placeholder="Your Phone*"
                                required
                            />
                            <input
                                type="name"
                                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:border focus:border-[#1B2D9F]"
                                placeholder="Subject*"
                                required
                            />
                        </div>

                        <textarea
                            className="my-4 w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border focus:border-[#1B2D9F]"
                            placeholder="Message*"
                            rows={5}
                            required
                        >
                        </textarea>

                        <button type="submit" className="hover:bg-[#1B2D9F] duration-300 text-lg px-5 py-2 bg-[#9F8D1B] text-white rounded-full shadow-lg">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}