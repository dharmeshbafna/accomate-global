'use client'
import Image from "next/image"

import Logo1 from "../../public/n_logo1.png"
import Logo2 from "../../public/n_logo2.png"
import WhiteLogo from "../../public/accomate_logo_white.png"

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiChevronDown } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export const Navbar = () => {

    const path = usePathname();
    const [sticky, setSticky] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const navitems = [
        { name: "Home", link: "/" },
        { name: "About Us", link: "/about" },
        {
            name: "Services", link: "/services",
            dropdown: [
                { name: 'USA', link: '/services/usa' },
                { name: 'Canada', link: '/services/canada' },
                { name: 'Australia', link: '/services/australia' },
            ]
        },
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
            <div className={`py-6 px-8 bg-[#1B2D9F]`}>
                <div className="flex items-center my-auto w-full">

                    {/* Logo */}
                    <div className="flex items-center lg:w-[40%]">
                        <a href="/">
                            <Image
                                src={WhiteLogo}
                                alt="Accomate Logo"
                                className="h-5 w-auto"
                            />
                        </a>
                    </div>

                    {/* Desktop Items */}
                    <div className="flex items-center justify-end space-x-8 lg:w-[60%]">

                        {navitems.map((i, index) => {
                            return (
                                <div className="w-fit text-lg relative">
                                    <a
                                        onMouseEnter={i.name == "Services" ? () => setDropdown(true) : () => { }}
                                        onMouseLeave={i.name == "Services" ? () => setDropdown(false) : () => { }}
                                        href={i.link} className={`text-white hover:underline-animation text-nowrap`}>
                                        <span className="flex items-center my-auto">
                                            {i.name} <FiChevronDown className={`ml-1 text-white ${i.name == "Services" ? '' : 'hidden'} flex-shrink-0`} />
                                        </span>
                                    </a>
                                    <span
                                        onMouseEnter={i.name == "Services" ? () => setDropdown(true) : () => { }}
                                        onMouseLeave={i.name == "Services" ? () => setDropdown(false) : () => { }}
                                        className={`absolute bottom-0 h-1 transform ${isActive(i.link) ? 'w-full h-[2px] scale-x-100' : 'scale-x-0'} bg-white transition-transform duration-200 ease-out origin-center hover:scale-x-100`}></span>
                                    {dropdown && i.name == "Services" ?
                                        <div
                                            onMouseEnter={i.name == "Services" ? () => setDropdown(true) : () => { }}
                                            onMouseLeave={i.name == "Services" ? () => setDropdown(false) : () => { }}
                                            className="-left-1 border border-gray-300 absolute top-7 bg-white px-4 py-2 shadow-lg z-50 rounded-lg">

                                            {i.dropdown.map((d, index) => {
                                                return (
                                                    <a href={d.link} className="block text-black hover:text-[#1B2D9F] hover:pl-1 duration-300 pb-1 mt-1 border-b">
                                                        {d.name}
                                                    </a>
                                                )
                                            })}
                                        </div> : ''}
                                </div>
                            )
                        })}

                        <a href="/contact" className="text-[#1B2D9F] bg-white px-5 py-2 rounded-full shadow-lg">
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>

            {/* Sticky */}
            <div className={`${sticky ? 'fixed top-0 left-0 w-full z-50 shadow-lg ' : 'hidden'} py-6 px-8 bg-white`}>
                <div className="flex items-center my-auto w-full">

                    {/* Logo */}
                    <div className="flex items-center lg:w-[40%]">
                        <a href="/">
                            <Image
                                src={Logo1}
                                alt="Accomate Logo"
                                className="h-5 w-auto"
                            />
                        </a>
                    </div>

                    {/* Desktop Items */}
                    <div className="flex items-center justify-end space-x-8 lg:w-[60%]">

                        {navitems.map((i, index) => {
                            return (
                                <div className="w-fit text-lg relative">
                                    <a
                                        onMouseEnter={i.name == "Services" ? () => setDropdown(true) : () => { }}
                                        onMouseLeave={i.name == "Services" ? () => setDropdown(false) : () => { }}
                                        href={i.link}
                                        className={`${isActive(i.link) ? 'text-[#1B2D9F]' : ''}  hover:underline-animation2 text-nowrap`}>
                                        <span className="flex items-center my-auto">
                                            {i.name} <FiChevronDown className={`ml-1 ${i.name == "Services" ? '' : 'hidden'} flex-shrink-0`} />
                                        </span>
                                    </a>
                                    <span
                                        onMouseEnter={i.name == "Services" ? () => setDropdown(true) : () => { }}
                                        onMouseLeave={i.name == "Services" ? () => setDropdown(false) : () => { }}
                                        className={`absolute bottom-0 h-1 transform ${isActive(i.link) ? 'w-full h-[2px] scale-x-100' : 'scale-x-0'} bg-[#1B2D9F] transition-transform duration-200 ease-out origin-center hover:scale-x-100`}></span>
                                    {dropdown && i.name == "Services" ?
                                        <div
                                            onMouseEnter={i.name == "Services" ? () => setDropdown(true) : () => { }}
                                            onMouseLeave={i.name == "Services" ? () => setDropdown(false) : () => { }}
                                            className="-left-1 border border-gray-300 absolute top-7 bg-white px-4 py-2 shadow-lg z-50 rounded-lg">

                                            {i.dropdown.map((d, index) => {
                                                return (
                                                    <a href={d.link} className="block text-black hover:text-[#1B2D9F] hover:pl-1 duration-300 pb-1 mt-1 border-b">
                                                        {d.name}
                                                    </a>
                                                )
                                            })}
                                        </div> : ''}
                                </div>
                            )
                        })}

                        <a href="/contact" className="text-white bg-[#1B2D9F]  px-5 py-2 rounded-full shadow-lg">
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export const Footer = () => {
    return (
        <div className="px-8 py-10 bg-[#9f8e1b5c]">
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

                        <a href="#" className="rounded-full p-2 border-2 border-[#1B2D9F] shadow text-[#1B2D9F] hover:scale-[110%] duration-300">
                            <FaFacebookF className="text-lg" />
                        </a>

                        <a href="#" className="rounded-full p-2 border-2 border-[#1B2D9F] shadow text-[#1B2D9F] hover:scale-[110%] duration-300">
                            <FaInstagram className="text-lg" />
                        </a>

                        <a href="#" className="rounded-full p-2 border-2 border-[#1B2D9F] shadow text-[#1B2D9F] hover:scale-[110%] duration-300">
                            <FaLinkedinIn className="text-lg" />
                        </a>

                        <a href="#" className="rounded-full p-2 border-2 border-[#1B2D9F] shadow text-[#1B2D9F] hover:scale-[110%] duration-300">
                            <FaXTwitter className="text-lg" />
                        </a>
                    </div>
                </div>

                {/* Useful Links */}
                <div className="lg:w-[30%] flex justify-center mx-auto">
                    <div>
                        <div className="font-semibold text-xl text-[#1B2D9F]">
                            Useful Links
                        </div>

                        <div className="pl-2 mt-4 grid grid-cols-1 gap-2">
                            <a href="#" className="hover:text-[#1B2D9F] duration-300">
                                Privacy Policy
                            </a>
                            <a href="#" className="hover:text-[#1B2D9F] duration-300">
                                Terms & Conditions
                            </a>
                            <a href="#" className="hover:text-[#1B2D9F] duration-300">
                                Disclaimer
                            </a>
                            <a href="#" className="hover:text-[#1B2D9F] duration-300">
                                Support
                            </a>
                        </div>
                    </div>
                </div>

                {/* Contact Us */}
                <div className="lg:w-[30%] flex justify-center mx-auto">
                    <div>
                        <div className="font-semibold text-xl text-[#1B2D9F]">
                            Contact Us
                        </div>

                        <div className="mt-4 pl-2 grid grid-cols-1 gap-2">
                            <a href="#" className="flex items-center my-auto hover:text-[#1B2D9F] duration-300">
                                <FaWhatsapp className="flex-shrink-0 mr-2 text-xl" />
                                +91 XXXXXXXXXX
                            </a>
                            <a href="#" className="flex items-center my-auto hover:text-[#1B2D9F] duration-300">
                                <MdOutlineEmail className="flex-shrink-0 mr-2 text-xl" />
                                info@accomateglobal.com
                            </a>
                            <a href="#" className="flex items-center my-auto hover:text-[#1B2D9F] duration-300">
                                <IoCallOutline className="flex-shrink-0 mr-2 text-xl" />
                                +91 XXXXXXXXXX
                            </a>
                            <a href="#" className="flex hover:text-[#1B2D9F] duration-300">
                                <IoLocationOutline className="flex-shrink-0 mr-2 text-xl mt-1" />
                                G-3,85, Madhuvan Building, Ellisbridge, Ahmedabad, INDIA - 380006
                            </a>
                        </div>
                    </div>
                </div>
            </div>


            {/* Copyright */}
            <div className="flex justify-center mx-auto border-t border-[#1B2D9F] pt-8 text-center mt-6">
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

export const Breadcrumb = () => {

    const path = usePathname();

    return (
        <div className="h-[45vh] relative w-full">
            <Image
                src={'/banner1.jpg'}
                alt="Banner"
                layout="fill"
                objectFit="cover"
            />
            <div className="absolute w-full h-full bg-[#00000084] top-0 left-0 flex justify-center items-center m-auto">

                <div className="space-y-3">
                    <div className="text-white font-semibold text-[3.5rem] text-center">
                        {
                            path == '/about' ? 'About Us' :
                                path == '/contact' ? 'Contact Us' :
                                    path == '/infrastructure' ? 'Infrastructure' :
                                        path == '/services' ? 'services' :
                                            path == '/services/usa' ? 'USA' :
                                                path == '/services/canada' ? 'Canada' :
                                                    path == '/services/australia' ? 'Australia' :
                                                        ''}
                    </div>
                    <div className="text-white text-center text-lg">
                        Home
                        {
                            path == '/about' ? ' / about' :
                                path == '/contact' ? ' / contact' :
                                    path == '/infrastructure' ? ' / infrastructure' :
                                        path == '/services' ? ' / services' :
                                            path == '/services/usa' ? ' / services / USA' :
                                                path == '/services/canada' ? ' / services / Canada' :
                                                    path == '/services/australia' ? ' / services / Australia' :
                                                        ''}
                    </div>
                </div>
            </div>

        </div>
    )
}