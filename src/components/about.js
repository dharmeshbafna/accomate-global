'use client'
import { useState, useEffect } from "react"
import Image from "next/image"
import { Jost } from "next/font/google"

import About1 from "../../public/dummy1.png"
import About2 from "../../public/about2.png"
import About3 from "../../public/about3.png"
import Icon from "../../public/n_icon.png"
import CircleIcon from "../../public/n_accomate_circle.png"
import TextLogo from "../../public/n_text_logo.png"
import DirectorImg from "../../public/director.jpg"

import { GoGoal } from "react-icons/go";
import { FaRegLightbulb } from "react-icons/fa"

const jost = Jost({ subsets: ["latin"], weight: '700' });

export const Whoweare = () => {
    return (
        <div className="px-8 py-16 flex items-center my-auto w-full relative">
            <div className="grid grid-cols-2 gap-3">

                <div className="flex justify-center items-center m-auto w-full">
                    <div className="w-fit relative">
                        <Image
                            src={About2}
                            alt="About1"
                            className="shadow-lg h-96 w-auto"
                        />
                        <div className="absolute -bottom-6 -left-5 w-[80%] h-[80%] bg-[#9f8e1b5c] -z-10"></div>
                    </div>
                </div>

                <div className="flex items-center my-auto">
                    <div>
                        {/* <div className="text-[#1B2D9F]">Who We Are</div> */}
                        <div className="font-semibold text-3xl">
                            Born from experience, built for success
                        </div>
                        <div className="mt-4">
                            Accomate Global is the brainchild of seasoned
                            CAs and CPAs. It is backed by industry titans
                            “CA Rohit K Choksi”(Co-Founder) and “CA,
                            CPA (US) Vartik R Choksi (Partner) of G K
                            Choksi & Co., a leading taxation, audit &
                            assurance firm in India with a 50-year legacy
                            since 1972.
                            <br /><br />
                            Accomate Global is a powerhouse of skilled
                            CAs & CPAs with diverse industry expertise
                            in Private Equity, Venture Capital,
                            Technology, Financial Service, Real Estate,
                            Insurance, Healthcare, and Manufacturing.
                            We provide comprehensive solutions for the
                            audit, tax, accounting, and mortgage broking
                            needs of CPAs and EA firms spread across
                            the globe.
                            <br /><br />
                            Our experts are proficient in various financial software, such as Intacct, Sage
                            One, QuickBooks, Xero, Myob, Salestrekker, and many more, ensuring
                            seamless integration and accurate financial reporting.
                            Clients' trust is our valuable asset and so we've invested in world-class
                            infrastructure with state-of-the-art data security to safeguard your sensitive
                            data.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const MissionVision = () => {
    return (
        <div className="pt-5 pb-10">
            <div className="grid grid-cols-2 gap-x-4">
                <div className={`${jost.className} flex justify-center items-center mx-auto text-[140px] text-nowrap text-gray-200`}>
                    {/* <Image
                        src={CircleIcon}
                        alt="Icon"
                        className="h-36 w-auto opacity-20"
                    /> */}
                </div>

                <div className="bg-[#9F8D1B] px-5 py-8 rounded-l-full">
                    <div className="flex">
                        <div className="min-w-[20%] flex justify-end mt-2">
                            <GoGoal className="text-white h-14 w-auto flex-shrink-0" />
                        </div>

                        <div className="text-white ml-4 space-y-4">
                            <div className="font-semibold text-3xl pt-3">
                                Our Mission
                            </div>
                            <div>
                                At Accomate Global, we empower CPAs and Financial Professionals for unparalleled success through premium outsourcing solutions. As a trusted partner, we utilize expertise and advanced technology to boost clients' efficiency, productivity, and profitability.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-[#1B2D9F] px-7 py-8 rounded-r-full relative">
                    <div className="flex">
                        <div className="min-w-[10%] flex justify-end mt-2">
                            <FaRegLightbulb className="text-white h-14 w-auto flex-shrink-0" />
                        </div>

                        <div className="text-white ml-4 space-y-4">
                            <div className="font-semibold text-3xl pt-3">
                                Purpose
                            </div>
                            <div>
                                We elevate CPAs and Financial Firms, allowing them to focus on core competencies while we handle time-consuming tasks. By streamlining operations, cutting overhead, and ensuring compliance, we create a sustainable advantage for our clients in today's competitive landscape.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center">
                    {/* <Image
                        src={TextLogo}
                        alt="TextLogo"
                        className="h-10 w-auto opacity-20"
                    /> */}
                </div>
            </div>
        </div>
    )
}

export const Director = () => {
    return (
        <div className="px-8 py-16 flex">
            <div className="lg:w-[70%] border border-[#9F8D1B] p-10 rounded-bl-3xl flex flex-col justify-between">
                <div className="font-semibold text-2xl">
                    Accomate Director’s vision
                </div>
                <div className="my-5 text-sm">
                    Welcome to Accomate Global!
                    <br /><br />
                    As you learn about our company, I hope you will see that we are not just another financial services company. We are a team of passionate individuals dedicated to helping your business thrive. Imagine having a trusted partner in your corner!
                    <br /><br />
                    We offer a comprehensive suite of outsourcing services, including accounting, bookkeeping, payroll, tax preparation, and other financial services. Partner with us and discover how our outsourced services can enhance your business operations, drive growth, and increase profitability
                    <br /><br />
                    Here at Accomate, we believe in investing in our team, our greatest asset, because a happy and thriving team leads to happy and thriving clients – that's you! Are you ready to join the journey?
                    <br /><br />
                    <span className="font-semibold">
                        Let's grow together and unlock the potential of your business!
                    </span>
                </div>
                <div className="flex justify-end w-full pt-5">
                    <div className="text-right">
                        <div className="font-semibold text-lg">Beena Mulani</div>
                        <div>Director of Accomate Global</div>
                    </div>
                </div>
            </div>
            <div className="px-3 lg:w-[40%] relative">
                <Image
                    src={DirectorImg}
                    alt="Director"
                    className="w-auto h-[98%] flex items-center my-auto"
                />
                <div className="absolute bottom-0 left-0 bg-[#9f8e1b5c] w-[70%] h-[70%] -z-10"></div>
            </div>
        </div>
    )
}

export const Team = () => {


    const data = [
        { name: 'Rohit Choksi', img: '/team/rohit.jpeg', list: ['CA, BCOM', 'Co Founder GK Choksi & CO.', '50 Yrs. Exp. in taxation'] },
        { name: 'Vartik Choksi', img: '/team/vartik.jpeg', list: ['CA, CPA (USA)', 'Partner GK Choksi & CO.', '15 Yrs. Exp. in International taxation'] },
        { name: 'Rajendra Mulani', img: '/team/rajendra.jpeg', list: ['CA, BCOM', 'President , GK Choski & Co.', '30 Yrs. Exp Audit & Assurance'] },
        { name: 'Dr. Ashutosh Bharadwaj', img: '/team/ashutosh.jpg', list: ['Growth strategist', '20 Yrs. Industry Exp'] },
        { name: 'Beena Mulani', img: '/team/beena.jpeg', list: ['EGMP (IIM-L), HRM (XLRI-J)', '20 Yrs. Industry Exp.'] },
        { name: 'Ronak Jain', img: '/team/ronak.jpeg', list: ['CA, CPA (Aus), DISA, FAFD (ICAI)', '8 Yrs. Exp. in Audit and Tax'] },
        { name: 'Pankaj Sahewal', img: '/team/pankaj.jpeg', list: ['CA(AIR 24), MBA (Fin), CFA (L1),CPA (US) pursuing', '8 Yrs. Exp. in Audit and Tax'] },
        { name: 'Yogesh Rawat', img: '/team/dummy.jpg', list: ['CPA (AUS)', '10 Yrs Exp in AUS Taxation'] },
        { name: 'Ankit Sudrania', img: '/team/dummy.jpg', list: ['CA,CAIIB,MDP (MDI-Gurgaon)', '11 Yrs. Exp. in corporate finance'] },
        { name: 'Parth Varia', img: '/team/parth.jpeg', list: ['CA, CPA (Can)', '8 Yrs. Exp. in Audit and Tax'] },
        { name: 'Hemant Chandak', img: '/team/hemant.jpg', list: ['CPA (Australia)', '8 Yrs. Exp. in Audit and Tax', 'Leading team of Audit/Tax managers & Associates'] },
        { name: 'Saurabh Jain', img: '/team/saurabh.jpeg', list: ['CA, EA, CPA (US)', '9 Yrs Exp in US Taxation', 'Leading Team of Tax managers & Associates'] },
        { name: 'Harshil Amin', img: '/team/harshil.jpeg', list: ['CPA (Canada)', '8 Yrs. exp. in Audit and Tax', 'Leading team of Audit/Tax managers & Associates'] },
    ];
    const [show, setShow] = useState('advisory');
    const sliced =
        show == 'advisory' ? [0, 4] :
            show == 'kmp' ? [4, 7] :
                show == 'country' ? [7, 10] :
                    show == 'op' ? [10, 13] :
                        [0, data.length];

    return (
        <div className="px-8 py-16 w-full space-y-12">

            <div className="text-center flex justify-center mx-auto lg:w-[85%] text-xl">
                We boast a team of self-driven, reliable, and qualified 30+ skilled professionals.
                Their goal is to deliver exceptional outcomes to our partners. Despite
                possessing substantial technical and industrial knowledge, our team is
                committed to advancing its expertise by participating in regular training
                sessions in diverse areas to keep abreast of continual compliance changes.
            </div>

            <div className="flex justify-center mx-auto space-x-5">

                <button
                    onClick={() => setShow('advisory')}
                    className={`${show == "advisory" ? 'bg-[#1B2D9F] text-white' : ''} border-2 border-[#1B2D9F] rounded-lg px-5 py-2 w-fit text-[#1B2D9F] text-xl hover:bg-[#1B2D9F] hover:text-white duration-300`}>
                    Advisory Team
                </button>

                <button
                    onClick={() => setShow('kmp')}
                    className={`${show == "kmp" ? 'bg-[#1B2D9F] text-white' : ''} border-2 border-[#1B2D9F] rounded-lg px-5 py-2 w-fit text-[#1B2D9F] text-xl hover:bg-[#1B2D9F] hover:text-white duration-300`}>
                    Core Team
                </button>

                <button
                    onClick={() => setShow('country')}
                    className={`${show == "country" ? 'bg-[#1B2D9F] text-white' : ''} border-2 border-[#1B2D9F] rounded-lg px-5 py-2 w-fit text-[#1B2D9F] text-xl hover:bg-[#1B2D9F] hover:text-white duration-300`}>
                    Country Head
                </button>

                <button
                    onClick={() => setShow('op')}
                    className={`${show == "op" ? 'bg-[#1B2D9F] text-white' : ''} border-2 border-[#1B2D9F] rounded-lg px-5 py-2 w-fit text-[#1B2D9F] text-xl hover:bg-[#1B2D9F] hover:text-white duration-300`}>
                    Country Operations
                </button>

            </div>

            <div className="grid grid-cols-2 gap-8 container mx-auto">
                {data.slice(...sliced).map((i, index) => {
                    return (
                        <div className="grid grid-cols-2 rounded-lg shadow border-2 border-[#9F8D1B]">
                            <div className="flex justify-center mx-auto p-5">
                                <div className="relative w-60 h-60 bg-gray-200 rounded-full shadow-lg">
                                    <Image
                                        src={i.img}
                                        alt={i.name}
                                        objectFit="cover"
                                        layout="fill"
                                        objectPosition="top"
                                        className="rounded-full"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center my-auto">
                                <div className="px-5 py-2">
                                    <div className="text-2xl font-semibold text-[#1B2D9F] mb-4">
                                        {i.name}
                                    </div>

                                    <ul className="list-disc pl-5 text-lg">
                                        {i.list.map((j) => {
                                            return (
                                                <li>
                                                    {j}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}