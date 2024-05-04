'use client'
import Image from "next/image"

import Logo1 from "../../public/logo-1.png"
import Logo2 from "../../public/logo-2-1.png"
import WhiteLogo from "../../public/accomate_logo_white.png"

export const Navbar = () => {

    const navitems = [
        { name: "Home", link: "/" },
        { name: "About Us", link: "/about" },
        { name: "Services", link: "/services" },
        { name: "Infrastructure", link: "/infrastructure" },
    ];

    return (
        <div className="">
            <div className="py-6 px-8 bg-gradient-to-r from-[#5264F3] to-[#5264F3]">
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
                                <div className="w-fit text-lg">
                                    <a href={i.link} className={`text-white`}>
                                        {i.name}
                                    </a>
                                </div>
                            )
                        })}

                        <button className="text-[#5264F3] bg-white px-5 py-2 rounded-full shadow-lg">
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
        <div>
            Footer
        </div>
    )
}