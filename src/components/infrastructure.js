'use client'
import Image from 'next/image'

import { FaAngleRight } from "react-icons/fa6";

import CircleIcon from "../../public/n_accomate_circle.png"
import Infra1 from '../../public/infra1.png'
import Infra2 from '../../public/infra2.png'
import Infra3 from '../../public/infra3.png'

import I1 from "../../public/ii1.png"
import I2 from "../../public/ii2.png"
import I3 from "../../public/ii3.png"
import I4 from "../../public/ii4.png"
import I5 from "../../public/ii5.png"

export const Infrastructure = () => {

    const data = [
        {
            title: 'Physical security',
            head: 'Measures implemented to ensure physical security:',
            list: [
                'Continuous 24/7 CCTV surveillance',
                'Restricted access using biometric verification & authorized key cards',
            ]
        },
        {
            title: 'IT Security',
            head: 'Steps taken to ensure IT Security:',
            list: [
                'Limited internet access',
                'Restricted social media and E-commerce websites',
                'No access to personal email',
                'Robust firewalls and 256-bit SSL encryption in place',
                'Server access granted on specific work profile',
                'Disabled USB ports',
                'Cloud-based data sharing for extra layer of protection'
            ]
        },
        {
            title: 'Physical security',
            head: 'Measures implemented to ensure physical security:',
            list: [
                'Continuous 24/7 CCTV surveillance',
                'Restricted access using biometric verification & authorized key cards',
            ]
        },
        {
            title: 'IT Security Training',
            list: [
                'Our security partner, KnowBe4, conducts quarterly staff training on recognizing phishing emails.'
            ]
        },
        {
            title: 'Company Practice',
            list: [
                'Continuous monitoring and evaluation of our security measures to identify and address potential vulnerabilities.',
                'Non-disclosure and Non-compete signed by every employee',
            ]
        },
        {
            title: 'Networking Infrastructure',
            list: [
                'We have integrated cutting-edge communication systems like VOIP phones, video and audio conferencing tools',
                'Dedicated 10 MBPS leased line to guarantee smooth and effective communication with our clients.',
            ]
        },
    ];

    return (
        <div className="px-8 py-16 space-y-8">
            <div className='grid grid-cols-2 gap-3'>
                <div>
                    <div className="font-semibold text-3xl text-[#1B2D9F]">
                        Data Security
                    </div>

                    <div className="my-10">

                        <div className='flex items-center my-auto'>
                            As a leading outsourcing partner for tax, audit, and assurance firms, we prioritize the privacy and
                            security of our clients' sensitive financial information. We deeply understand the critical need to
                            protect this data from theft and cyber threats.
                            <br /><br />
                            Our comprehensive security program aligns with
                            rigorous industry standards, as evidenced by our ISO 27001:2013 certification. Clients can rest
                            assured that their data is in safe hands with Accomate.
                        </div>
                    </div>

                    <div>

                    </div>
                </div>

                <div className='flex justify-center items-center m-auto'>
                <iframe 
                src="https://lottie.host/embed/d9ea6eb8-b288-484a-a662-1f2199dd7f54/9W9PWV516R.json"
                className='h-72 w-auto'
                ></iframe>
                </div>
            </div>

            <div className='flex w-full'>

                <div className='lg:w-[30%] space-y-5'>
                    {data.slice(0, 2).map((i, index) => {
                        return (
                            <div className='p-2 rounded-lg shadow-lg'>
                                <div className='font-semibold text-xl text-center text-[#1B2D9F] p-2 m-2 border-b border-[#9F8D1B]'>
                                    {i.title}
                                </div>
                                <div className='font-semibold my-3 text-center'>
                                    {i.head}
                                </div>
                                <div className="space-y-2">
                                    {i.list.map((j, index) => {
                                        return (
                                            <div key={index} className="flex space-x-2">
                                                <FaAngleRight className="text-[#9F8D1B] mt-1 flex-shrink-0" />
                                                <span>{j}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className='lg:w-[40%] px-2 flex items-center justify-center m-auto'>
                    <div className='relative p-16 rounded-full'>
                        <div className='relative p-14 rounded-full'>
                            <div className="relative hover:scale-[110%] duration-300 cursor-pointer z-40">
                                <Image
                                    src={CircleIcon}
                                    alt="Main Icon"
                                    className="h-20 w-auto shadow-md rounded-full "
                                />
                            </div>

                            {/* First Circle */}
                            <div className="absolute top-0 left-0 border-dashed border-2 border-gray-400 w-full h-full rounded-full">
                                <div className="relative w-full h-full rounded-full rotate-animation">
                                    <div className="rounded-full h-14 w-14 shadow-lg bg-white p-2 flex items-center justify-center absolute top-0 left-0 border-2 border-[#1B2D9F]">
                                        <Image
                                            src={I1}
                                            alt="Main Icon"
                                            className="h-auto w-auto bg-white flex items-center justify-center m-auto"
                                        />
                                    </div>
                                    <div className="rounded-full h-14 w-14 shadow-lg bg-white p-2 flex items-center justify-center absolute bottom-0 right-0 border-2 border-[#1B2D9F]">
                                        <Image
                                            src={I2}
                                            alt="Main Icon"
                                            className="h-auto w-auto flex items-center justify-center m-auto"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ======== Second Circle ======== */}
                        <div className="absolute top-0 left-0  w-full h-full border-dashed border-2 border-gray-400 rounded-full">
                            <div className="relative w-full h-full rotate-animation2">
                                <div className="rounded-full h-14 w-14 shadow-lg bg-white p-2 flex justify-center items-center border-2 border-[#1B2D9F] absolute -top-5 left-1/2 ">
                                    <Image
                                        src={I3}
                                        alt="Main Icon"
                                        className="h-auto w-auto bg-white"
                                    />
                                </div>
                                <div className="rounded-full h-14 w-14 shadow-lg bg-white p-2 flex justify-center items-center border-2 border-[#1B2D9F] absolute -bottom-5 right-1/2 ">
                                    <Image
                                        src={I4}
                                        alt="Main Icon"
                                        className="h-auto w-auto bg-white"
                                    />
                                </div>
                                <div className="rounded-full h-14 w-14 shadow-lg bg-white p-2 flex justify-center items-center border-2 border-[#1B2D9F] absolute bottom-1/2 -right-5 ">
                                    <Image
                                        src={I5}
                                        alt="Main Icon"
                                        className="h-auto w-auto bg-white"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='lg:w-[30%] space-y-5'>
                    {data.slice(3, 6).map((i, index) => {
                        return (
                            <div className='p-2 rounded-lg shadow-lg'>
                                <div className='font-semibold text-xl text-center text-[#1B2D9F] p-2 m-2 border-b border-[#9F8D1B]'>
                                    {i.title}
                                </div>
                                {i.desc ?
                                    <div className='my-3 px-2'>
                                        {i.desc}
                                    </div> :
                                    i.list ?
                                        <div className="space-y-2">
                                            {i.list.map((j, index) => {
                                                return (
                                                    <div key={index} className="flex space-x-2">
                                                        <FaAngleRight className="text-[#9F8D1B] mt-1 flex-shrink-0" />
                                                        <span>{j}</span>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        : ''}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}