'use client'
import { useState, useEffect } from "react"
import Image from "next/image"

import About1 from "../../public/dummy1.png"
import About2 from "../../public/about2.png"
import About3 from "../../public/about3.png"

import { GoGoal } from "react-icons/go";
import { FaRegLightbulb } from "react-icons/fa"

export const Whoweare = () => {
    return (
        <div className="px-8 py-16 flex items-center my-auto w-full relative">
            <div className="grid grid-cols-2 gap-3">

                <div className="flex items-center my-auto w-full">
                    
                </div>

                <div className="flex items-center my-auto">
                    <div>
                        <div className="text-[#5264F3]">Who We Are</div>
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
        <div className="py-16">
            <div className="grid grid-cols-2 gap-x-4">
                <div></div>

                <div className="bg-[#5264F3] px-5 py-8 rounded-l-full">
                    <div className="flex">
                        <div className="min-w-[20%] flex justify-end mt-1">
                            <GoGoal className="text-white h-14 w-auto flex-shrink-0" />
                        </div>

                        <div className="text-white ml-4 space-y-4">
                            <div className="font-semibold text-3xl pt-3">
                                Our Mission
                            </div>
                            <div>
                            At Accomate Global, our mission is to empower Certified Public Accountants (CPAs) and Financial Professionals to achieve unparalleled success by offering high-quality outsourcing solutions. We are committed to being a trusted partner, leveraging our expertise and cutting-edge technology to enhance our clients' efficiency, productivity, and profitability.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-[#5264F3] px-5 py-8 rounded-r-full">
                    <div className="flex">
                        <div className="min-w-[15%] flex justify-end mt-1">
                            <FaRegLightbulb className="text-white h-14 w-auto flex-shrink-0" />
                        </div>

                        <div className="text-white ml-4 space-y-4">
                            <div className="font-semibold text-3xl pt-3">
                                Purpose
                            </div>
                            <div>
                            We exist to elevate the perFormance oF CPAs and Financial Firms, enabling them to Focus on their core competencies while we handle the time- consuming and resource-intensive tasks. By streamlining operations, reducing overheads, and ensuring compliance, we strive to create a sustainable advantage For our clients in today's competitive business landscape.
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}