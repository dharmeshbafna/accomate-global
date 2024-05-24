'use client'
import { FaAngleRight } from "react-icons/fa6";
import { useState, useEffect } from "react"
import { SiTicktick } from "react-icons/si";
import Image from "next/image";
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Button from '@mui/material/Button';
import { FaChevronDown } from "react-icons/fa6";

import AccountBanner from "../../public/account-banner.jpg"

export const Usa = () => {

    const usaservices = [
        {
            icon: '/book.json',
            head: 'Accounting',
            head2: 'Our accounting services include:',
            list: [
                'Bookkeeping and bank reconciliations',
                'Payroll processing (T4 &T5)',
                'Accounts payable and receivable management'
            ]
        },
        {
            icon: '/doc.json',
            head: 'Financial Statement Compilation',
            head2: 'Our financial statements compilation services include:',
            list: [
                'Balance sheets',
                'Income statements',
                'Cash flow statements'
            ]
        },
        {
            icon: '/zoom.json',
            head: 'Audit & Assurance',
            head2: 'Our audit & assurance services encompass a wide range of areas, including but not limited to:',
            list: [
                'Financial statement audits',
                'Internal control assessment and evaluations',
                'Risk assessments and Compliance audits',
                'Compliance audits'
            ]
        },
        {
            icon: '/home.json',
            head: 'Mortgage Broking',
            head2: 'Our mortgage broking services include:',
            list: [
                'Data entry and document verification',
                'Serviceability analysis',
                'Ordering property valuation',
                'Online Application and lodgment'
            ]
        },
        {
            icon: '/privacy-policy.json',
            head: 'Tax Compilation',
            head2: 'Our comprehensive tax services include:',
            list: [
                'Preparation of U.S. federal returns and state tax returns including composite tax returns, state tax returns, PTE state tax returns',
                'Business returns such as Form 1065 (pass through), 1120S (pass through), 1120 (corp)',
                'Individual returns such as Form 1040, 1040NR, 1041',
                'Handling multi state returns with allocation factor, confirming and non confirming state',
                'Tax planning to take most advantageous tax incidence',
                'Filing form 3115 for suggested method change like change in method of accounting, Depreciation to be more advantageous.',
                'Preparation of tax Forms 8949, 4797, 8825, 8990, 8082, 8832-B',
                'Preparation of federal and state schedule K-1 reporting for investors',
                'Foreign investments compliances (Form 5471, 8865)',
                'Non-U.S. investors tax reporting and compliance including FBar reporting (Form 1042, 8804, 8805)',
                'International reporting tax forms K-2 and K-3 and other miscellaneous forms',
                `Handling IRS and state revenue notices, book-to-tax reconciliations, maintaining tax basis for investor's capital and fund's investment etc`,
                'Tax lot level capital gain/loss calculations, wash sales calculation',
            ]
        },
    ];

    return (
        <div className="py-10">

            {/* 1 */}
            <div className="grid grid-cols-2 gap-4 py-16 px-8">
                <div>

                </div>

                <div className="space-y-4">
                    <div className="text-4xl text-[#1B2D9F] font-semibold border-b border-[#9F8D1B] pb-4">
                        {usaservices[0].head}
                    </div>

                    <div className="text-lg">
                        {usaservices[0].head2}
                    </div>

                    <ul className="list-none space-y-3">
                        {usaservices[0].list.map((i) => {
                            return (
                                <li className="flex">
                                    <SiTicktick className="text-lg text-[#9F8D1B] mt-1 mr-2 flex shrink-0" />
                                    {i}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>

            {/* 2 */}
            <div className="grid grid-cols-2 gap-4 py-16 px-8 bg-gray-200">

                <div className="space-y-4">
                    <div className="text-4xl text-[#1B2D9F] font-semibold border-b border-[#9F8D1B] pb-4">
                        {usaservices[1].head}
                    </div>

                    <div className="text-lg">
                        {usaservices[1].head2}
                    </div>

                    <ul className="list-none space-y-3">
                        {usaservices[1].list.map((i) => {
                            return (
                                <li className="flex">
                                    <SiTicktick className="text-lg text-[#9F8D1B] mt-1 mr-2" />
                                    {i}
                                </li>
                            )
                        })}
                    </ul>
                </div>

                <div></div>
            </div>

            {/* 3 */}
            <div className="grid grid-cols-2 gap-4 py-16 px-8">
                <div>

                </div>

                <div className="space-y-4">
                    <div className="text-4xl text-[#1B2D9F] font-semibold border-b border-[#9F8D1B] pb-4">
                        {usaservices[2].head}
                    </div>

                    <div className="text-lg">
                        {usaservices[2].head2}
                    </div>

                    <ul className="list-none space-y-3">
                        {usaservices[2].list.map((i) => {
                            return (
                                <li className="flex">
                                    <SiTicktick className="text-lg text-[#9F8D1B] mt-1 mr-2 flex shrink-0" />
                                    {i}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>

            {/* 4 */}
            <div className="grid grid-cols-1 gap-4 relative">


                <div className="space-y-4 z-10 bg-[#00000048] py-16 px-8 w-full h-auto">
                    <div className="text-4xl text-[#9F8D1B] font-semibold border-b border-white lg:w-1/2 pb-4">
                        {usaservices[3].head}
                    </div>

                    <div className="text-lg text-white">
                        {usaservices[3].head2}
                    </div>

                    <ul className="list-none space-y-3">
                        {usaservices[3].list.map((i) => {
                            return (
                                <li className="flex text-white">
                                    <SiTicktick className="text-lg text-[#9F8D1B] mt-1 mr-2" />
                                    {i}
                                </li>
                            )
                        })}
                    </ul>
                </div>

                <Image
                    src={AccountBanner}
                    alt="banner"
                    objectFit="cover"
                    layout="fill"
                />
            </div>

            {/* 5 */}
            <div className="grid grid-cols-2 gap-4 py-16 px-8">
                <div>

                </div>

                <div className="space-y-4">
                    <div className="text-4xl text-[#1B2D9F] font-semibold border-b border-[#9F8D1B] pb-4">
                        {usaservices[4].head}
                    </div>

                    <div className="text-lg">
                        {usaservices[4].head2}
                    </div>

                    <ul className="list-none space-y-3">
                        {usaservices[4].list.map((i) => {
                            return (
                                <li className="flex">
                                    <SiTicktick className="text-lg text-[#9F8D1B] mt-1 mr-2 flex shrink-0" />
                                    {i}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export const Canada = () => {

    const canadaservices = [
        {
            icon: '/book.json',
            head: 'Accounting',
            head2: 'Our accounting services include:',
            list: [
                'Data entry',
                'Payroll processing (T4 &T5)',
                'Accounts payable / receivable management'
            ]
        },
        {
            icon: '/doc.json',
            head: 'Financial Statement Compilation',
            head2: 'Our financial statements compilation services for corporates and trusts includes preparation of:',
            list: [
                'Balance sheets',
                'Income statements',
                'Cash flow statements'
            ]
        },
        {
            icon: '/zoom.json',
            head: 'Audit & Assurance',
            head2: 'Our audit & assurance services encompass a wide range of areas, including but not limited to:',
            list: [
                'Preparation of audit schedules',
                'Financial statement audits',
                'Assisting audit queries',
                'Internal control assessment and risk assessments',
                'Compliance with auditing standards and regulations',
            ]
        },
        {
            icon: '/home.json',
            head: 'Payroll Processing',
            head2: 'Our payroll services include:',
            list: [
                `End to end management – From “payroll setup in the system” to “end with paychecks”`,
                'Payroll accounting and prompt processing and filing',
                'Annual filing of T4 and T5 slips for all employees',
                'Payroll Tax management and compliance'
            ]
        },
        {
            icon: '/privacy-policy.json',
            head: 'Tax Compilation',
            head2: 'Our comprehensive tax services include:',
            list: [
                `Preparation and filing of Individual Tax Returns (ITR), Corporate Tax Returns (CTR)`,
                'Preparation and filing of GST returns',
                'Payroll Tax management and filings',
                'Tax guidance and Tax Planning',
            ]
        },
    ];
    return (
        <div className="px-8 py-10">
            <div className="grid grid-cols-2">
                <div className="space-y-4">
                    {canadaservices.map((i, index) => {
                        return (
                            <Accordion className="" key={index}>
                                <AccordionSummary
                                    aria-controls={`panel${index}-content`}
                                    id={`panel${index}-header`}
                                    expandIcon={<FaChevronDown className="text-white" />}
                                    className="rounded bg-[#1B2D9F] text-white text-lg"
                                >
                                    {i.head}
                                </AccordionSummary>
                                <AccordionDetails className="bg-white rounded pt-3">
                                    <div className="font-semibold">
                                        {i.head2}
                                    </div>
                                    <ul className="mt-4 space-y-2">
                                        {i.list.map((j, ind) => {
                                            return (
                                                <li className="flex">
                                                    <SiTicktick className="mt-1 mr-2 text-[#9F8D1B] flex shrink-0" /> {j}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </AccordionDetails>
                            </Accordion>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export const Australia = () => {

    const australiaservices = [
        {
            icon: '/book.json',
            head: 'Accounting',
            head2: 'Our accounting services include:',
            list: [
                'Data entry',
                'Bank reconciliation',
                'Accounts payable / receivable management',
                'Payroll processing including salary calculations, deductions and tax withholdings',
            ]
        },
        {
            icon: '/doc.json',
            head: 'Financial Statement Compilation',
            head2: 'Our financial statements compilation services for corporates and trusts includes preparation of:',
            list: [
                'Balance sheets',
                'Income statements',
                'Cash flow statements'
            ]
        },
        {
            icon: '/zoom.json',
            head: 'Audit & Assurance',
            head2: 'Our audit & assurance services encompass a wide range of areas, including but not limited to:',
            list: [
                'Preparation of audit schedules',
                'Financial statement audits',
                'Assisting audit queries',
                'Internal control assessment and risk assessments',
                'Compliance with auditing standards and regulations',
            ]
        },
        {
            icon: '/home.json',
            head: 'Mortgage Broking',
            head2: 'Our mortgage broking services include:',
            list: [
                'Data entry and document verification',
                'Serviceability analysis',
                'Ordering property valuation',
                'Online Application and lodgment'
            ]
        },
        {
            icon: '/privacy-policy.json',
            head: 'Tax Compilation',
            head2: 'Our comprehensive tax services include:',
            list: [
                'Preparation of Individual Tax Returns (ITR), Corporate Tax Returns (CTR), Trust Tax Returns (TTR)',
                'Preparation of Business Activity Statements (Bases)',
                'Managing PAYG Tax / Payroll Taxation',
                'Tax guidance and Tax Planning',
            ]
        },
        {
            icon: '/commodity.json',
            head: 'Managing SMSF',
            head2: 'Below are the services we provide for SMSF:',
            list: [
                'SMSF accounting',
                'Ensuring Compliance with regulations',
                'Preparation of audit workpapers',
                'Preparation of financial statements',
                'Preparation of SMSF Tax Returns',
            ]
        },
    ];
    return (
        <div className="px-8 py-10">
            <div className="grid grid-cols-2 gap-10">
                {australiaservices.map((i, index) => {
                    return (
                        <div key={index} className="p-3 md:p-5 shadow-lg rounded-lg">
                            <div className="flex items-center my-auto space-x-3 pb-4 mb-4 border-b border-[#9F8D1B]">
                                <div className="px-3 py-2 bg-[#9F8D1B] text-white rounded-lg">
                                    0{index + 1}.
                                </div>
                                <div className="text-xl text-[#1B2D9F] font-semibold">
                                    {i.head}
                                </div>
                            </div>
                            <div className="font-semibold">
                                {i.head2}
                            </div>

                            <div className="space-y-2 mt-4">
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
        </div>
    )
}