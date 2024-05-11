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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(fd);
    };

    return (
        <div className="px-8 py-16">
            <div className="text-[#1B2D9F] flex justify-center mx-auto text-center w-full">Contact Us</div>
            <div className="font-semibold text-3xl flex justify-center mx-auto text-center w-full">
                Join With Us, Now!
            </div>
            <div className="lg:w-[90%] flex justify-center mx-auto mt-10">
                <div className="lg:w-[40%] p-5 bg-[#1B2D9F] flex flex-col justify-between items-center">
                    <div className="font-semibold text-2xl text-white">
                        Contact Details
                    </div>

                    <div className="mt-6 space-y-5">
                        <div className="flex items-center my-auto pb-4 border-b border-gray-300 text-white">
                            <IoCallOutline className="font-semibold text-2xl" />
                            <span className="ml-2">+91 XXXXXXXXXX</span>
                        </div>
                        <div className="flex items-center my-auto pb-4 border-b border-gray-300 text-white">
                            <MdOutlineEmail className="font-semibold text-2xl" />
                            <span className="ml-2">info@accomateglobal.com</span>
                        </div>
                        <div className="flex pb-4 border-b border-gray-300 text-white">
                            <IoLocationOutline className="flex-shrink-0 font-semibold text-2xl" />
                            <span className="ml-2">G-3,85, Madhuvan Building, Ellisbridge, Ahmedabad, INDIA - 380006</span>
                        </div>
                    </div>
                    <div className="flex items-center my-auto space-x-5">

                        <a href="#" className="rounded-full p-2 border-2 border-white shadow text-white duration-300">
                            <FaFacebookF className="text-lg" />
                        </a>

                        <a href="#" className="rounded-full p-2 border-2 border-white shadow text-white duration-300">
                            <FaInstagram className="text-lg" />
                        </a>

                        <a href="#" className="rounded-full p-2 border-2 border-white shadow text-white duration-300">
                            <FaLinkedinIn className="text-lg" />
                        </a>

                        <a href="#" className="rounded-full p-2 border-2 border-white shadow text-white duration-300">
                            <FaXTwitter className="text-lg" />
                        </a>
                    </div>
                </div>
                <div className="lg:w-[60%]">
                    <form onSubmit={handleSubmit} className="p-8 border border-[#9F8D1B] rounded-br-2xl">
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="name"
                                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:border focus:border-[#1B2D9F]"
                                placeholder="Your Name*"
                                value={fd.name}
                                onChange={(e) => setFd({ ...fd, name: e.target.value })}
                                required
                            />
                            <input
                                type="email"
                                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:border focus:border-[#1B2D9F]"
                                placeholder="Your Email*"
                                value={fd.email}
                                onChange={(e) => setFd({ ...fd, email: e.target.value })}
                                required
                            />
                            <input
                                type="tel"
                                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:border focus:border-[#1B2D9F]"
                                placeholder="Your Phone*"
                                value={fd.phone}
                                onChange={(e) => setFd({ ...fd, phone: e.target.value })}
                                required
                            />
                            <input
                                type="name"
                                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:border focus:border-[#1B2D9F]"
                                placeholder="Subject*"
                                value={fd.sub}
                                onChange={(e) => setFd({ ...fd, sub: e.target.value })}
                                required
                            />
                        </div>

                        <textarea
                            className="my-4 w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border focus:border-[#1B2D9F]"
                            placeholder="Message*"
                            rows={5}
                            value={fd.message}
                            onChange={(e) => setFd({ ...fd, message: e.target.value })}
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

export const Locations = () => {
    return (
        <div className="px-8 py-16">
            <div className="text-[#1B2D9F] flex justify-center mx-auto text-center w-full">Locations</div>
            <div className="font-semibold text-3xl flex justify-center mx-auto text-center w-full">
                Our Office Locations
            </div>

            <div className="grid grid-cols-3 gap-6 mt-10">

                <div className="space-y-5">
                    <iframe className="w-[80%] flex justify-center mx-auto h-72 rounded-lg shadow-lg" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.8151879657576!2d72.56884717524724!3d23.030557016030293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84d59e1eb419%3A0xb42eabdf63061be6!2sAnriyo%20-%20Best%20Web%20Design%20%26%20Development%20Company%20%7C%20Digital%20Marketing%20Services%20in%20Ahmedabad!5e0!3m2!1sen!2sin!4v1715411101620!5m2!1sen!2sin"></iframe>

                    <div className="text-center">
                        <span className="font-semibold">India:&nbsp;</span>
                        G-3,85, Madhuvan Building, Ellisbridge, Ahmedabad, INDIA - 380006
                    </div>
                </div>
                <div className="space-y-5">
                    <iframe className="w-[80%] flex justify-center mx-auto h-72 rounded-lg shadow-lg" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.8151879657576!2d72.56884717524724!3d23.030557016030293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84d59e1eb419%3A0xb42eabdf63061be6!2sAnriyo%20-%20Best%20Web%20Design%20%26%20Development%20Company%20%7C%20Digital%20Marketing%20Services%20in%20Ahmedabad!5e0!3m2!1sen!2sin!4v1715411101620!5m2!1sen!2sin"></iframe>

                    <div className="text-center">
                        <span className="font-semibold">USA:&nbsp;</span>
                        G-3,85, Madhuvan Building, Ellisbridge, Ahmedabad, INDIA - 380006
                    </div>
                </div>
                <div className="space-y-5">
                    <iframe className="w-[80%] flex justify-center mx-auto h-72 rounded-lg shadow-lg" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.8151879657576!2d72.56884717524724!3d23.030557016030293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84d59e1eb419%3A0xb42eabdf63061be6!2sAnriyo%20-%20Best%20Web%20Design%20%26%20Development%20Company%20%7C%20Digital%20Marketing%20Services%20in%20Ahmedabad!5e0!3m2!1sen!2sin!4v1715411101620!5m2!1sen!2sin"></iframe>

                    <div className="text-center">
                        <span className="font-semibold">Canada:&nbsp;</span>
                        G-3,85, Madhuvan Building, Ellisbridge, Ahmedabad, INDIA - 380006
                    </div>
                </div>
            </div>
        </div>
    )
}