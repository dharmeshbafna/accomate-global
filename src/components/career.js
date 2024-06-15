'use client'
import { useState, useEffect } from "react"
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { CareerForm } from "@/api/form";

import { Oval } from "react-loader-spinner";

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

        setLoad(true);
        setModal(true);

        const formd = new FormData();
        formd.append('fd', JSON.stringify(fd));
        formd.append('file', file);

        const res = await CareerForm(formd);

        if (res.success) {
            setSuccess(res.success);
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
            setErr(res.error || 'Internal server error');
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
                                        onChange={(e) => setFd({ ...fd, msg: e.target.value })}
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