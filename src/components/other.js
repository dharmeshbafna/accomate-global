'use client'
import Image from "next/image"

import Logo1 from "../../public/logo-1.png"
import Logo2 from "../../public/logo-2-1.png"
import WhiteLogo from "../../public/accomate_logo_white.png"

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export const Navbar = () => {

    const path = usePathname();
    const [sticky, setSticky] = useState(false);
    const navitems = [
        { name: "Home", link: "/" },
        { name: "About Us", link: "/about" },
        { name: "Services", link: "/services" },
        { name: "Infrastructure", link: "/infrastructure" },
    ];

    const isActive = (href) => {
        return path == href;
    };


    const handlescroll = () => {

        if (window.scrollY > 100) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    };

    useEffect(() => {

        window.addEventListener('scroll', handlescroll);
        return () => {
            window.removeEventListener('scroll', handlescroll);
        }
    }, []);

    return (
        <div className={``}>
            <div className={`py-6 px-8 bg-gradient-to-r from-[#5264F3] to-[#5264F3]`}>
                <div className="grid grid-cols-2">

                    {/* Logo */}
                    <div className="flex items-center">
                        <Image
                            src={WhiteLogo}
                            alt="Accomate Logo"
                            className="h-5 w-auto"
                        />
                    </div>

                    {/* Desktop Items */}
                    <div className="flex items-center justify-end space-x-8">

                        {navitems.map((i, index) => {
                            return (
                                <div className="w-fit text-lg relative">
                                    <a href={i.link} className={`text-white hover:underline-animation`}>
                                        {i.name}
                                    </a>
                                    <span className={`absolute bottom-0 h-1 transform ${isActive(i.link) ? 'w-full h-[2px] scale-x-100' : 'scale-x-0'} bg-white transition-transform duration-200 ease-out origin-center hover:scale-x-100`}></span>
                                </div>
                            )
                        })}

                        <button className="text-[#5264F3] bg-white px-5 py-2 rounded-full shadow-lg">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>

            {/* Sticky */}
            <div className={`${sticky ? 'fixed top-0 left-0 w-full z-50 shadow-lg ' : 'hidden'} py-6 px-8 bg-white`}>
                <div className="grid grid-cols-2">

                    {/* Logo */}
                    <div className="flex items-center">
                        <Image
                            src={Logo1}
                            alt="Accomate Logo"
                            className="h-8 w-auto"
                        />
                    </div>

                    {/* Desktop Items */}
                    <div className="flex items-center justify-end space-x-8">

                        {navitems.map((i, index) => {
                            return (
                                <div className="w-fit text-lg relative">
                                    <a href={i.link} className={`${isActive(i.link) ? 'text-[#5264F3]' : ''}  hover:underline-animation2`}>
                                        {i.name}
                                    </a>
                                    <span className={`absolute bottom-0 h-1 transform ${isActive(i.link) ? 'w-full h-[2px] scale-x-100' : 'scale-x-0'} bg-[#5264F3] transition-transform duration-200 ease-out origin-center hover:scale-x-100`}></span>
                                </div>
                            )
                        })}

                        <button className="text-white bg-[#5264F3]  px-5 py-2 rounded-full shadow-lg">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export const Footer = () => {
    return (
        <div className="px-8 py-10 bg-gray-200">
            <div className="flex w-full space-x-3">

                {/* About */}
                <div className="lg:w-[40%] space-y-4">
                    <Image
                        src={Logo2}
                        alt="Accomate Logo"
                        className="h-28 w-auto"
                    />

                    <div className="">
                        Accomate Global is a powerhouse of skilled
                        CAs & CPAs with diverse industry expertise
                        in Private Equity, Venture Capital,
                        Technology, Financial Service, Real Estate,
                        Insurance, Healthcare, and Manufacturing.
                    </div>

                    <div className="flex items-center my-auto space-x-5">

                        <a href="#" className="rounded-full p-2 bg-[#5264F3] text-white hover:scale-[110%] duration-300">
                            <FaFacebookF className="text-lg" />
                        </a>

                        <a href="#" className="rounded-full p-2 bg-[#5264F3] text-white hover:scale-[110%] duration-300">
                            <FaInstagram className="text-lg" />
                        </a>

                        <a href="#" className="rounded-full p-2 bg-[#5264F3] text-white hover:scale-[110%] duration-300">
                            <FaLinkedinIn className="text-lg" />
                        </a>

                        <a href="#" className="rounded-full p-2 bg-[#5264F3] text-white hover:scale-[110%] duration-300">
                            <FaXTwitter className="text-lg" />
                        </a>
                    </div>
                </div>

                {/* Useful Links */}
                <div className="lg:w-[30%] flex justify-center mx-auto">
                    <div>
                        <div className="font-semibold text-xl">
                            Useful Links
                        </div>

                        <div className="pl-2 mt-4 grid grid-cols-1 gap-2">
                            <a href="#" className="hover:text-[#5264F3] duration-300">
                                Privacy Policy
                            </a>
                            <a href="#" className="hover:text-[#5264F3] duration-300">
                                Terms & Conditions
                            </a>
                            <a href="#" className="hover:text-[#5264F3] duration-300">
                                Disclaimer
                            </a>
                            <a href="#" className="hover:text-[#5264F3] duration-300">
                                Support
                            </a>
                        </div>
                    </div>
                </div>

                {/* Contact Us */}
                <div className="lg:w-[30%] flex justify-center mx-auto">
                    <div>
                        <div className="font-semibold text-xl">
                            Contact Us
                        </div>

                        <div className="mt-4 pl-2 grid grid-cols-1 gap-2">
                            <a href="#" className="flex items-center my-auto hover:text-[#5264F3] duration-300">
                                <FaWhatsapp className="flex-shrink-0 mr-2 text-xl" />
                                +91 XXXXXXXXXX
                            </a>
                            <a href="#" className="flex items-center my-auto hover:text-[#5264F3] duration-300">
                                <MdOutlineEmail className="flex-shrink-0 mr-2 text-xl" />
                                info@accomateglobal.com
                            </a>
                            <a href="#" className="flex items-center my-auto hover:text-[#5264F3] duration-300">
                                <IoCallOutline className="flex-shrink-0 mr-2 text-xl" />
                                +91 XXXXXXXXXX
                            </a>
                            <a href="#" className="flex hover:text-[#5264F3] duration-300">
                                <IoLocationOutline className="flex-shrink-0 mr-2 text-xl mt-1" />
                                G-3,85, Madhuvan Building, Ellisbridge, Ahmedabad, INDIA - 380006
                            </a>
                        </div>
                    </div>
                </div>
            </div>


            {/* Copyright */}
            <div className="flex justify-center mx-auto border-t border-gray-400 pt-8 text-center mt-6">
                ©2024 Accomate Global. All Rights Reserved.
            </div>
        </div>
    )
}

export const Lordicon = ({ src, trigger, style }) => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const script = document.createElement('script');
            script.src = 'https://cdn.lordicon.com/lordicon.js';
            document.body.appendChild(script);
        }
    }, []);

    return (
        <lord-icon
            src={src}
            trigger={trigger}
            style={style}
        />
    )
}