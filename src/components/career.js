'use client'
import { useState, useEffect } from "react"
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { CareerForm } from "@/api/form";

import { Oval } from "react-loader-spinner";

const FIELD_LIMITS = {
    nameMin: 2,
    nameMax: 30,
    email: 320,
    phone: 20,
    messageMin: 10,
    messageMax: 1000,
};

const NAME_PATTERN = /^[A-Za-z\s]{2,30}$/;
const EMAIL_PATTERN = /^[a-zA-Z0-9._%+\-]{1,64}@[a-zA-Z0-9.\-]{1,253}\.[a-zA-Z]{2,}$/;
const PHONE_PATTERN = /^(\+?[1-9]\d{0,2}[\s\-]?)?(\(?\d{2,4}\)?[\s\-]?)?\d{6,10}$/;
const MESSAGE_PATTERN = /^(?=[\s\S]{10,1000}$)[^<>&]*$/;

const cleanNameInput = (value) => value.replace(/[^A-Za-z\s]/g, '').slice(0, FIELD_LIMITS.nameMax);

const cleanEmailInput = (value) => value.replace(/[^A-Za-z0-9._%+\-@]/g, '').slice(0, FIELD_LIMITS.email);

const cleanPhoneInput = (value) => value.replace(/[^0-9+\s\-()]/g, '').slice(0, FIELD_LIMITS.phone);

const cleanMessageInput = (value) => value.replace(/[<>&]/g, '').slice(0, FIELD_LIMITS.messageMax);

const escapeDisplayText = (value) => String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

export const CareerComp = () => {

    const [modal, setModal] = useState(false);
    const [fd, setFd] = useState({
        name: '',
        email: '',
        phone: '',
        msg: '',
        desig: '',
    });
    const [file, setFile] = useState(null);
    const [success, setSuccess] = useState('');
    const [err, setErr] = useState('');
    const [load, setLoad] = useState(false);
    const fields = [
        { name: 'USA Accounts & Tax Analyst' },
        { name: 'Australian Accounts & Tax Analyst​' },
        { name: 'Canadian Accounts & Tax Analyst' },
        { name: 'USA Accounts Executive' },
        { name: 'Australian Accounts Executive' },
        { name: 'Canadian Accounts Executive' },
        { name: 'USA Mortgage Loan Processor' },
        { name: 'Australian Mortgage Loan Processor' },
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!NAME_PATTERN.test(fd.name)) {
            setSuccess('');
            setErr('Name must be 2-30 letters only. No numbers or symbols allowed.');
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

        if (fd.msg && !MESSAGE_PATTERN.test(fd.msg)) {
            setSuccess('');
            setErr('Message must be between 10 and 1000 characters. Avoid special symbols like < > &.');
            setModal(true);
            return;
        }

        setLoad(true);
        setModal(true);

        const formd = new FormData();
        formd.append('fd', JSON.stringify(fd));
        formd.append('file', file);

        const res = await CareerForm(formd);

        if (res.success) {
            setSuccess(escapeDisplayText(res.success));
            setErr('');
            setLoad(false);
            setTimeout(() => {
                setSuccess('');
                setModal(false);
                setFd({
                    name: '',
                    email: '',
                    phone: '',
                    msg: '',
                    desig: '',
                });
            }, 3000);
        } else {
            setSuccess('');
            setErr(escapeDisplayText(res.error || 'Internal server error'));
            setLoad(false);
            setTimeout(() => {
                setErr('');
                setModal(false);
                setFd({
                    name: '',
                    email: '',
                    phone: '',
                    msg: '',
                    desig: '',
                });
            }, 3000);
        }
    };

    return (
        <div className="px-5 md:px-8 py-16">
            <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="100" className="font-semibold text-3xl flex justify-center mx-auto text-center w-full">
                Join Our Team and Grow With Us!
            </div>

            <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="100" className="my-8 text-center">
                At Accomate Global, we believe in the power of collaboration and growth. We are dedicated to nurturing
                talent and providing opportunities for professional development. Join our team and be part of a dynamic
                environment where your skills are valued and your career aspirations are supported. Together, let's
                achieve new heights and make a difference.
                <br /><br />
                We invite you to explore the exciting career opportunities at our organization. The designations are as per listed below. To apply, please complete the online form and upload your resume.
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {fields.map((i, index) => {
                    return (
                        <div key={index} data-aos="zoom-in" data-aos-duration="2000" data-aos-delay={`${index + 1}00`} className="p-4 rounded-lg shadow border border-[#9F8D1B]">
                            <div className="font-semibold text-[#1B2D9F] text-center border-b pb-4 mb-4 text-lg">
                                {i.name}
                            </div>

                            <button onClick={() => { setModal(true); setFd({ ...fd, desig: i.name }) }} className="flex justify-center mx-auto px-4 py-2 rounded-full bg-[#9F8D1B] text-white hover:bg-[#1B2D9F] duration-300">
                                Apply Now
                            </button>
                        </div>
                    )
                })}
            </div>

            <Modal
                open={modal}
                onClose={() => setModal(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="absolute top-1/2 left-1/2 bg-white rounded-lg shadow-lg p-6 focus:outline-none -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[65%] lg:w-auto md:max-w-[80%]">
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
                                </div> :
                                <form onSubmit={handleSubmit} className="space-y-4 overflow-y-auto">
                                    <div className="font-semibold text-xl flex justify-center mx-auto text-center">
                                        Apply Now
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                                        <input
                                            type="text"
                                            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:border focus:border-[#1B2D9F]"
                                            placeholder="Your Name*"
                                            value={fd.name}
                                            pattern="[A-Za-z\s]{2,30}"
                                            minLength={FIELD_LIMITS.nameMin}
                                            maxLength={FIELD_LIMITS.nameMax}
                                            title="Name must be 2-30 letters only. No numbers or symbols allowed."
                                            onChange={(e) => setFd({ ...fd, name: cleanNameInput(e.target.value) })}
                                            required
                                        />

                                        <input
                                            type="email"
                                            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:border focus:border-[#1B2D9F]"
                                            placeholder="Your Email*"
                                            value={fd.email}
                                            pattern="[a-zA-Z0-9._%+\-]{1,64}@[a-zA-Z0-9.\-]{1,253}\.[a-zA-Z]{2,}"
                                            maxLength={FIELD_LIMITS.email}
                                            title="Enter a valid email address (e.g. user@example.com)."
                                            onChange={(e) => setFd({ ...fd, email: cleanEmailInput(e.target.value) })}
                                            required
                                        />

                                        <input
                                            type="tel"
                                            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:border focus:border-[#1B2D9F]"
                                            placeholder="Your Phone*"
                                            value={fd.phone}
                                            pattern="(\+?[1-9]\d{0,2}[\s\-]?)?(\(?\d{2,4}\)?[\s\-]?)?\d{6,10}"
                                            maxLength={FIELD_LIMITS.phone}
                                            title="Enter a valid phone number (e.g. +91 98765 43210 or 9876543210)."
                                            onChange={(e) => setFd({ ...fd, phone: cleanPhoneInput(e.target.value) })}
                                            required
                                        />

                                        <select
                                            value={fd.desig}
                                            onChange={(e) => setFd({ ...fd, desig: e.target.value })}
                                            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:border focus:border-[#1B2D9F]">

                                            {fields.map((i, index) => {
                                                return (
                                                    <option value={i.name} key={index}>
                                                        {i.name}
                                                    </option>
                                                )
                                            })}
                                        </select>
                                    </div>

                                    <textarea
                                        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border focus:border-[#1B2D9F]"
                                        placeholder="Additional Message"
                                        value={fd.msg}
                                        minLength={fd.msg ? FIELD_LIMITS.messageMin : undefined}
                                        maxLength={FIELD_LIMITS.messageMax}
                                        title="Message must be between 10 and 1000 characters. Avoid special symbols like < > &."
                                        onChange={(e) => setFd({ ...fd, msg: cleanMessageInput(e.target.value) })}
                                        onInvalid={(e) => e.target.setCustomValidity('Message must be between 10 and 1000 characters. Avoid special symbols like < > &.')}
                                        onInput={(e) => e.target.setCustomValidity('')}
                                        rows={5}
                                    >
                                    </textarea>

                                    <div className="flex items-center my-auto space-x-3">
                                        <span className="text-nowrap">
                                            Upload Your Resume :
                                        </span>
                                        <input
                                            type="file"
                                            onChange={(e) => setFile(e.target.files[0])}
                                            required
                                        />
                                    </div>

                                    <button className="px-6 py-2 bg-[#1B2D9F] text-white rounded-full shadow">
                                        Apply
                                    </button>
                                </form>
                    }
                </Box>
            </Modal>
        </div>
    )
}
