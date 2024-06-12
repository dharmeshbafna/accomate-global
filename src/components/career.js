'use client'
import { useState, useEffect } from "react"

export const CareerComp = () => {

    const fields = [
        { name : 'USA Accounts & Tax Analyst' },
        { name : 'Australian Accounts & Tax Analyst​' },
        { name : 'Canadian Accounts & Tax Analyst' },
        { name : 'USA Accounts Executive' },
        { name : 'Australian Accounts Executive' },
        { name : 'Canadian Accounts Executive' },
        { name : 'USA Mortgage Loan Processor' },
        { name : 'Australian Mortgage Loan Processor' },
    ];

    return (
        <div className="px-8 py-16">
            <div className="font-semibold text-3xl flex justify-center mx-auto text-center w-full">
                Join Our Team and Grow With Us!
            </div>

            <div className="my-8 text-center">
                At Accomate Global, we believe in the power of collaboration and growth. We are dedicated to nurturing
                talent and providing opportunities for professional development. Join our team and be part of a dynamic
                environment where your skills are valued and your career aspirations are supported. Together, let's
                achieve new heights and make a difference.
                <br /><br />
                Below are the designations available at our organization. To join, please fill out the form and upload your
                resume.
            </div>

            <div className="grid grid-cols-3 gap-5">
                    {fields.map((i, index) => {
                        return (
                            <div className="p-4 rounded-lg shadow border border-[#9F8D1B]">
                                <div className="font-semibold text-[#1B2D9F] text-center border-b pb-4 mb-4 text-lg">
                                    {i.name}
                                </div>

                                <button className="flex justify-center mx-auto px-4 py-2 rounded-full bg-[#9F8D1B] text-white hover:bg-[#1B2D9F] duration-300">
                                    Apply Now
                                </button>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}