'use client'

import { useState } from "react"
import Image from "next/image"

import USA from "../../public/usa.webp"
import Canada from "../../public/circular_canada.jpg"
import Australia from "../../public/circular_australia.jpg"
import India from "../../public/india.jpg"
import ContactImg from "../../public/contact.jpg"

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiChevronDown } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { LuMapPin } from "react-icons/lu";

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Oval } from "react-loader-spinner";

import { ContactForm } from "@/api/form"

export const Contact = () => {

    const [fd, setFd] = useState({
        name: '',
        email: '',
        message: '',
        sub: '',
        phone: ''
    });
    const [modal, setModal] = useState(false);
    const [load, setLoad] = useState(false);
    const [success, setSuccess] = useState('');
    const [err, setErr] = useState('');
    const contactdetails = [
        { country: 'India', phone: '+91-8000494669', email: 'info@accomateglobal.com', add: 'G-3,85, Madhuvan Building, Ellisbridge, Ahmedabad, INDIA – 380006' },
        { country: 'Australia', phone: '+61 4  3319  7164', email: 'australia@accomateglobal.com', add: '203/2 Infinity Drive Truganina, VIC, Australia, 3029' },
        { country: 'Canada', phone: '+1 647 512 0026', email: 'canada@accomateglobal.com', add: '1234051 Dunmow Crescent Mississauga Ontario L4Z1E1' },
        { country: 'USA', phone: '+1 917 744 7835', email: 'canada@accomateglobal.com', add: '1234051 Dunmow Crescent Mississauga Ontario L4Z1E1' },
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        setLoad(true);
        setModal(true);

        const res = await ContactForm(fd);

        if(res.success) {
            setSuccess(res.success);
            setErr('');
            setLoad(false);
            setTimeout(() => {
                setSuccess('');
                setModal(false);
                setFd({
                    name: '',
                    email: '',
                    message: '',
                    sub: '',
                    phone: ''
                });
            }, 3000);
        } else {
            setSuccess('');
            setErr(res.error || 'Internal server error');
            setLoad(false);
            setTimeout(() => {
                setErr('');
                setModal(false);
                setFd({
                    name: '',
                    email: '',
                    message: '',
                    sub: '',
                    phone: ''
                });
            }, 3000);
        }
    };

    return (
        <div className="px-5 md:px-8 py-16">
            <div className="font-semibold text-3xl flex justify-center mx-auto text-center w-full">
                Join With Us, Now!
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {contactdetails.map((i, index) => {
                    return (
                        <div className="rounded-lg p-5 border shadow-lg space-y-4" key={index}>
                            <div className="flex items-center my-auto space-x-3 pb-4 border-b border-gray-300">
                                <Image
                                    src={i.country == 'India' ? India : i.country == 'Australia' ? Australia : i.country == 'Canada' ? Canada : i.country == 'USA' ? USA : ''}
                                    className="h-10 w-10 rounded-full drop-shadow-md"
                                    alt="country"
                                />
                                <div className="pl-3 border-l border-gray-300 font-semibold text-lg text-[#1B2D9F]">{i.country}</div>
                            </div>

                            <div className="space-y-4">
                                <div className="pb-2 border-b space-x-2">
                                    <a href={`tel:${i.phone}`} className="hover:text-[#1B2D9F] duration-300 flex items-center my-auto space-x-2">
                                        <IoCallOutline className="text-lg font-semibold flex shrink-0" />
                                        <div className="text-sm">
                                            {i.phone}
                                        </div>
                                    </a>
                                </div>
                                <div className="pb-2 border-b space-x-2">
                                    <a href={`mailto:${i.email}`} className="hover:text-[#1B2D9F] duration-300 flex items-center my-auto space-x-2">
                                        <MdOutlineEmail className="text-lg font-semibold flex shrink-0" />
                                        <div className="text-sm">
                                            {i.email}
                                        </div>
                                    </a>
                                </div>
                                <div className="pb-2 flex space-x-2">
                                    <LuMapPin className="text-lg font-semibold mt-1 flex shrink-0" />
                                    <div className="text-sm">
                                        {i.add}
                                    </div>
                                </div>
                            </div>

                        </div>
                    )
                })}
            </div>


            <div className="flex w-full mt-10">
                <div className="lg:w-[35%] hidden lg:flex">
                    <div className="relative h-full w-full flex justify-center mx-auto">
                        <Image
                            src={ContactImg}
                            alt="img"
                            objectFit="cover"
                            layout="fill"
                            className="rounded-tl-3xl border-t border-b border-l border-[#9F8D1B]"
                        />
                    </div>
                </div>

                <div className="w-full lg:w-[75%] space-y-10 border border-l lg:border-l-0 border-[#9F8D1B] p-3 md:p-10 rounded-br-3xl">
                    <div className="font-semibold text-3xl leading-relaxed">
                        Ready to Get Started?
                    </div>

                    <form className="" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

                        <div className="flex items-center my-auto space-x-4">
                            <button type="submit" className="hover:bg-[#1B2D9F] duration-300 text-lg px-5 py-2 bg-[#9F8D1B] text-white rounded-full shadow-lg">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>


            </div>


            {/* CTA */}
            <div className="mt-16 mb-10 space-y-10">
                <div className="font-semibold text-center flex justify-center mx-auto text-4xl lg:w-1/2 leading-relaxed">
                    Want to Know More About Us?
                </div>

                <div className="flex justify-center mx-auto w-full">
                    <a href="/Brochure 5.pdf" target="_blank" className="hover:bg-[#9F8D1B] duration-300 px-5 py-2 bg-[#1B2D9F] text-white rounded-full shadow-lg text-2xl">
                        Download Brochure
                    </a>
                </div>
            </div>

            <Modal
                open={modal}
                onClose={() => setModal(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="absolute top-1/2 left-1/2 bg-white rounded-lg shadow-lg p-3 focus:outline-none -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[65%] lg:w-auto md:max-w-[80%]">
                    {success ?
                        <div className="text-center text-green-500">
                            {success}
                        </div> :
                        err ?
                            <div className="text-center text-red-500">
                                {err}
                            </div> :
                            load ?
                                <div className="flex justify-center mx-auto">
                                    <Oval
                                        visible={true}
                                        height="80"
                                        width="80"
                                        color="#1B2D9F"
                                        secondaryColor="#9F8D1B"
                                        ariaLabel="oval-loading"
                                        wrapperStyle={{}}
                                        wrapperClass=""
                                    />
                                </div> : ''}
                </Box>
            </Modal>
        </div>
    )
}

export const Locations = () => {
    return (
        <div className="px-8 py-16">
            <div className="font-semibold text-3xl flex justify-center mx-auto text-center w-full">
                Our Office Locations
            </div>

            <div className="grid grid-cols-3 gap-6 mt-10">

                <div className="space-y-5">
                    <iframe className="w-[80%] flex justify-center mx-auto h-72 rounded-lg shadow-lg" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117505.38239193049!2d72.42375654335942!3d23.022185999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8456022fa835%3A0xcb9ff4b30a115602!2sMadhuban%20Complex!5e0!3m2!1sen!2sin!4v1715600046066!5m2!1sen!2sin"></iframe>

                    <div className="text-center">
                        <span className="font-semibold">India:&nbsp;</span>
                        G-3,85, Madhuvan Building, Ellisbridge, Ahmedabad, INDIA - 380006
                    </div>
                </div>
                <div className="space-y-5">
                    <iframe className="w-[80%] flex justify-center mx-auto h-72 rounded-lg shadow-lg" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.0450339588638!2d144.74364377479986!3d-37.83583157196994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad689814ee7c77b%3A0x7d1841cf981be82e!2sUnit%20203%2F2%20Infinity%20Dr%2C%20Truganina%20VIC%203029%2C%20Australia!5e0!3m2!1sen!2sin!4v1715600120512!5m2!1sen!2sin"></iframe>

                    <div className="text-center">
                        <span className="font-semibold">Australia:&nbsp;</span>
                        203/2 Infinity Drive Truganina, VIC, Australia, 3029
                    </div>
                </div>
                <div className="space-y-5">
                    <iframe className="w-[80%] flex justify-center mx-auto h-72 rounded-lg shadow-lg" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.1074568756853!2d-79.62782802482197!3d43.60430417110451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b4714d753bc83%3A0x776e544375ebb2ca!2sDunmow%20Crescent%2C%20Mississauga%2C%20ON%20L4Z%201E1%2C%20Canada!5e0!3m2!1sen!2sin!4v1715600215752!5m2!1sen!2sin"></iframe>

                    <div className="text-center">
                        <span className="font-semibold">Canada:&nbsp;</span>
                        1234051 Dunmow Crescent Mississauga Ontario L4Z1E1
                    </div>
                </div>
            </div>
        </div>
    )
}