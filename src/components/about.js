'use client'
import { useState, useEffect } from "react"
import Image from "next/image"
import { Jost } from "next/font/google"

import About1 from "../../public/dummy1.png"
import About2 from "../../public/about2.png"
import About3 from "../../public/about3.png"
import Icon from "../../public/n_icon.png"
import TextLogo from "../../public/n_text_logo.png"

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
                        <div className="text-[#1B2D9F]">Who We Are</div>
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
                            <br /><br />
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
        <div className="pb-16">
            <div className="grid grid-cols-2 gap-x-4">
                <div className={`${jost.className} flex justify-center items-center mx-auto text-[140px] text-nowrap text-gray-200`}>
                    <div className="w-fit rounded-full p-6 border-2 border-[#1b2d9f32] h-36 w-36 flex justify-center items-center">
                        <Image
                            src={Icon}
                            alt="Icon"
                            className="h-auto w-auto opacity-20"
                        />
                    </div>
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
                    <Image
                        src={TextLogo}
                        alt="TextLogo"
                        className="h-10 w-auto opacity-20"
                    />
                </div>
            </div>
        </div>
    )
}