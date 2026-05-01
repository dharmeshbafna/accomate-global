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

// ─── Field limits ────────────────────────────────────────────────────────────
const FIELD_LIMITS = {
    nameMin: 2,
    nameMax: 30,
    emailMax: 320,
    phoneMax: 20,
    subjectMin: 5,
    subjectMax: 100,   // FIX: was 50, but error messages and pattern said 100
    messageMin: 10,
    messageMax: 1000,
};

// ─── Validation patterns ─────────────────────────────────────────────────────
// Name: letters and spaces only, 2–30 chars
const NAME_PATTERN = /^[A-Za-z\s]{2,30}$/;

// Email: RFC-aligned local@domain.tld
const EMAIL_PATTERN = /^[a-zA-Z0-9._%+\-]{1,64}@[a-zA-Z0-9.\-]{1,253}\.[a-zA-Z]{2,}$/;

// Phone: optional country code, 6–15 digits total, allows +, spaces, dashes, parentheses
const PHONE_PATTERN = /^(\+?[1-9]\d{0,2}[\s\-]?)?(\(?\d{2,4}\)?[\s\-]?)?\d{6,10}$/;

// Subject: letters, digits, safe punctuation only — no < > & " '
// FIX: removed the broken [^<>&]$ suffix from the original; the character class already excludes them
const SUBJECT_PATTERN = /^[A-Za-z0-9\s.,!?()\-']{5,100}$/;

// Message: any character including newlines (\s\S), 10–1000 chars, strip < > & at input level
// FIX: original used [^<>&]* which breaks on newlines; [\s\S] handles multiline correctly
const MESSAGE_PATTERN = /^[\s\S]{10,1000}$/;

// ─── Live input sanitizers (prevent bad chars from being typed) ───────────────
// These run onChange — they silently strip disallowed characters as the user types.

// Name: allow only letters and spaces
const cleanNameInput = (value) =>
    value.replace(/[^A-Za-z\s]/g, '').slice(0, FIELD_LIMITS.nameMax);

// Email: allow only valid email characters
const cleanEmailInput = (value) =>
    value.replace(/[^A-Za-z0-9._%+\-@]/g, '').slice(0, FIELD_LIMITS.emailMax);

// Phone: allow only digits, +, spaces, dashes, parentheses
const cleanPhoneInput = (value) =>
    value.replace(/[^0-9+\s\-()]/g, '').slice(0, FIELD_LIMITS.phoneMax);

// Subject: allow letters, digits, spaces, and safe punctuation — block < > & "
// FIX: original regex was malformed (nested a pattern string inside character class)
const cleanSubjectInput = (value) =>
    value.replace(/[^A-Za-z0-9\s.,!?()\-']/g, '').slice(0, FIELD_LIMITS.subjectMax);

// Message: only strip the three HTML-dangerous characters; allow everything else including newlines
const cleanMessageInput = (value) =>
    value.replace(/[<>&]/g, '').slice(0, FIELD_LIMITS.messageMax);

// ─── Output escaper (use when rendering server response strings into the DOM) ─
// Not needed for static error strings — only use for dynamic server-returned text.
const escapeDisplayText = (value) =>
    String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');

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

    const contactdetails = {
        website: 'www.accomateglobal.com',
        email: 'info@accomateglobal.com',
        phones: ['+91 8000494669', '+61 3 9917 7471'],
        locations: [
            {
                country: 'Australia',
                flag: Australia,
                address: '203/2 Infinity Drive Truganina, VIC, Australia, 3029'
            },
            {
                country: 'Canada',
                flag: Canada,
                address: '1234051 Dunmow Crescent Mississauga Ontario L4Z1E1'
            },
            {
                country: 'India',
                flag: India,
                address: 'G-3,85, Madhuvan Building, Ellisbridge, Ahmedabad, INDIA – 380006'
            }
        ]
    };

    const resetModal = (delay = 3000) => {
        setTimeout(() => {
            setSuccess('');
            setErr('');
            setModal(false);
            setFd({ name: '', email: '', message: '', sub: '', phone: '' });
        }, delay);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // ── Client-side validation (regex patterns) ──────────────────────────
        if (!NAME_PATTERN.test(fd.name)) {
            setSuccess('');
            setErr('Name must be 2–30 letters only. No numbers or symbols allowed.');
            setModal(true);
            return;
        }

        if (!EMAIL_PATTERN.test(fd.email)) {
            setSuccess('');
            setErr('Enter a valid email address (e.g. user@example.com).');
            setModal(true);
            return;
        }

        if (!PHONE_PATTERN.test(fd.phone)) {
            setSuccess('');
            setErr('Enter a valid phone number (e.g. +91 98765 43210 or 9876543210).');
            setModal(true);
            return;
        }

        if (!SUBJECT_PATTERN.test(fd.sub)) {
            setSuccess('');
            setErr('Subject must be 5–100 characters. Avoid special symbols like < > &.');
            setModal(true);
            return;
        }

        if (!MESSAGE_PATTERN.test(fd.message)) {
            setSuccess('');
            setErr('Message must be between 10 and 1000 characters.');
            setModal(true);
            return;
        }

        // ── Submit ────────────────────────────────────────────────────────────
        setLoad(true);
        setModal(true);

        const res = await ContactForm(fd);

        if (res.success) {
            // escapeDisplayText only needed here because res.success is dynamic server text
            setSuccess(escapeDisplayText(res.success));
            setErr('');
            setLoad(false);
            resetModal(3000);
        } else {
            setSuccess('');
            setErr(escapeDisplayText(res.error || 'Something went wrong. Please try again.'));
            setLoad(false);
            resetModal(3000);
        }
    };

    return (
        <div className="px-5 md:px-8 py-16">
            <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="100" className="font-semibold text-3xl flex justify-center mx-auto text-center w-full">
                Join With Us, Now!
            </div>

            <div className="mt-10 flex text-left bg-[url('/cbg1.png')] bg-no-repeat bg-left md:bg-right bg-cover min-h-[400px]">
                <div data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="100" className="rounded-lg p-8 border shadow-lg w-full">
                    <div className="space-y-6">
                        {/* Website */}
                        <div className="flex items-center space-x-4">
                            <div className="text-[#1B2D9F] text-xl flex shrink-0">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="currentColor" />
                                </svg>
                            </div>
                            <span className="text-gray-800 font-medium">{contactdetails.website}</span>
                        </div>

                        {/* Email */}
                        <div className="flex items-center space-x-4">
                            <div className="text-[#1B2D9F] text-xl flex shrink-0">
                                <MdOutlineEmail size={24} />
                            </div>
                            <a href={`mailto:${contactdetails.email}`} className="text-gray-800 font-medium hover:text-[#1B2D9F] duration-300">
                                {contactdetails.email}
                            </a>
                        </div>

                        {/* Phone Numbers */}
                        <div className="flex items-start space-x-4">
                            <div className="text-[#1B2D9F] text-xl flex shrink-0 mt-1">
                                <IoCallOutline size={24} />
                            </div>
                            <div className="space-y-1">
                                {contactdetails.phones.map((phone, index) => (
                                    <div key={index}>
                                        <a href={`tel:${phone}`} className="text-gray-800 font-medium hover:text-[#1B2D9F] duration-300">
                                            {phone}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Locations with Flags */}
                        {contactdetails.locations.map((location, index) => (
                            <div key={index} className="flex items-start space-x-4">
                                <div className="flex shrink-0 mt-1">
                                    <Image
                                        src={location.flag}
                                        alt={`${location.country} flag`}
                                        width={24}
                                        height={24}
                                        className="rounded-full object-cover"
                                    />
                                </div>
                                <span className="text-gray-800 font-medium leading-relaxed">
                                    {location.address}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="100" className="flex w-full mt-10">
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

                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Name */}
                            <input
                                type="text"
                                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:border focus:border-[#1B2D9F]"
                                placeholder="Your Name*"
                                value={fd.name}
                                pattern="[A-Za-z\s]{2,30}"
                                minLength={FIELD_LIMITS.nameMin}
                                maxLength={FIELD_LIMITS.nameMax}
                                title="Name must be 2–30 letters only. No numbers or symbols allowed."
                                onChange={(e) => setFd({ ...fd, name: cleanNameInput(e.target.value) })}
                                onInvalid={(e) => e.target.setCustomValidity('Name must be 2–30 letters only. No numbers or symbols allowed.')}
                                onInput={(e) => e.target.setCustomValidity('')}
                                required
                            />

                            {/* Email */}
                            <input
                                type="email"
                                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:border focus:border-[#1B2D9F]"
                                placeholder="Your Email*"
                                value={fd.email}
                                pattern="[a-zA-Z0-9._%+\-]{1,64}@[a-zA-Z0-9.\-]{1,253}\.[a-zA-Z]{2,}"
                                maxLength={FIELD_LIMITS.emailMax}
                                title="Enter a valid email address (e.g. user@example.com)."
                                onChange={(e) => setFd({ ...fd, email: cleanEmailInput(e.target.value) })}
                                onInvalid={(e) => e.target.setCustomValidity('Enter a valid email address (e.g. user@example.com).')}
                                onInput={(e) => e.target.setCustomValidity('')}
                                required
                            />

                            {/* Phone */}
                            <input
                                type="tel"
                                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:border focus:border-[#1B2D9F]"
                                placeholder="Your Phone*"
                                value={fd.phone}
                                pattern="(\+?[1-9]\d{0,2}[\s\-]?)?(\(?\d{2,4}\)?[\s\-]?)?\d{6,10}"
                                maxLength={FIELD_LIMITS.phoneMax}
                                title="Enter a valid phone number (e.g. +91 98765 43210 or 9876543210)."
                                onChange={(e) => setFd({ ...fd, phone: cleanPhoneInput(e.target.value) })}
                                onInvalid={(e) => e.target.setCustomValidity('Enter a valid phone number (e.g. +91 98765 43210 or 9876543210).')}
                                onInput={(e) => e.target.setCustomValidity('')}
                                required
                            />

                            {/* Subject */}
                            <input
                                type="text"
                                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:border focus:border-[#1B2D9F]"
                                placeholder="Subject*"
                                value={fd.sub}
                                pattern="[A-Za-z0-9\s.,!?()\-']{5,100}"
                                minLength={FIELD_LIMITS.subjectMin}
                                maxLength={FIELD_LIMITS.subjectMax}
                                title="Subject must be 5–100 characters. Avoid special symbols like < > &."
                                onChange={(e) => setFd({ ...fd, sub: cleanSubjectInput(e.target.value) })}
                                onInvalid={(e) => e.target.setCustomValidity('Subject must be 5–100 characters. Avoid special symbols like < > &.')}
                                onInput={(e) => e.target.setCustomValidity('')}
                                required
                            />
                        </div>

                        {/* Message */}
                        <textarea
                            className="my-4 w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border focus:border-[#1B2D9F]"
                            placeholder="Message*"
                            rows={5}
                            value={fd.message}
                            minLength={FIELD_LIMITS.messageMin}
                            maxLength={FIELD_LIMITS.messageMax}
                            title="Message must be between 10 and 1000 characters."
                            onChange={(e) => setFd({ ...fd, message: cleanMessageInput(e.target.value) })}
                            onInvalid={(e) => e.target.setCustomValidity('Message must be between 10 and 1000 characters.')}
                            onInput={(e) => e.target.setCustomValidity('')}
                            required
                        />

                        <div className="flex items-center my-auto space-x-4">
                            <button
                                type="submit"
                                className="hover:bg-[#1B2D9F] duration-300 text-lg px-5 py-2 bg-[#9F8D1B] text-white rounded-full shadow-lg"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* CTA */}
            <div data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="100" className="mt-16 mb-10 space-y-10">
                <div className="font-semibold text-center flex justify-center mx-auto text-4xl lg:w-1/2 leading-relaxed">
                    Want to Know More About Us?
                </div>
                <div className="flex justify-center mx-auto w-full">
                    <a href="/Brochure 5.pdf" target="_blank" className="hover:bg-[#9F8D1B] duration-300 px-5 py-2 bg-[#1B2D9F] text-white rounded-full shadow-lg text-2xl">
                        Download Brochure
                    </a>
                </div>
            </div>

            {/* Modal */}
            <Modal
                open={modal}
                onClose={() => setModal(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="absolute top-1/2 left-1/2 bg-white rounded-lg shadow-lg p-3 focus:outline-none -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[65%] lg:w-auto md:max-w-[80%]">
                    {success ? (
                        <div className="text-center text-green-500">{success}</div>
                    ) : err ? (
                        <div className="text-center text-red-500">{err}</div>
                    ) : load ? (
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
                        </div>
                    ) : null}
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