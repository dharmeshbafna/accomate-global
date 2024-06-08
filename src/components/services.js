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

import AccountBanner from "../../public/banner1.jpg"
import ReactCardFlip from "react-card-flip";
import { usePathname } from "next/navigation";

export const Usa = () => {

    const [flip, setFlip] = useState(false);
    const [f2, setf2] = useState(false);
    const [f3, setf3] = useState(false);
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

            {/* Card */}
            <div className="flex justify-center mx-auto w-full">
                <ReactCardFlip isFlipped={flip} className="w-full">

                    <div className="relative bg-white w-[800px] h-80 shadow-lg rounded-lg" onMouseEnter={() => setFlip(true)}>
                        <Image
                            src={AccountBanner}
                            alt="img"
                            objectFit="cover"
                            layout="fill"
                            priority={true}
                            className="w-full rounded-lg"
                        />
                        <div className="rounded-lg absolute top-0 left-0 w-full h-full bg-[#0000005d] flex justify-center items-center m-auto">

                            <div className="font-semibold text-white text-4xl">
                                Accounting
                            </div>
                        </div>
                    </div>

                    <div className="bg-white w-[800px] h-80 shadow-lg rounded-lg p-5 space-y-8 border border-[#1B2D9F]" onMouseLeave={() => setFlip(false)}>

                        <div className="font-semibold text-[#1B2D9F] text-4xl pb-2 border-b border-[#9F8D1B]">
                            Accounting
                        </div>

                        <div className="grid grid-cols-2 gap-7 h-full">
                            <div className="flex">
                                Outsourcing bookkeeping services to Accomate can provide your business with a reliable and cost-effective Our team of experienced professionals will handle tasks such as maintaining ledgers, preparing financial statements, and reconciling bank accounts, ensuring your financial records are accurate and up-to-date
                            </div>

                            <div className="space-y-3">
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
                    </div>
                </ReactCardFlip>
            </div>

            {/* 2 cards */}
            <div className="grid grid-cols-2 gap-6 w-full mt-10 px-5">

                <div>
                    <ReactCardFlip isFlipped={f2}>
                        <div onMouseEnter={() => setf2(true)} className="relative min-h-[50vh] w-full rounded-lg shadow-lg">
                            <Image
                                src={AccountBanner}
                                alt="img"
                                objectFit="cover"
                                layout="fill"
                                className="rounded-lg"
                            />
                        </div>

                        <div onMouseLeave={() => setf2(false)} className="p-5 relative min-h-[50vh] w-full rounded-lg shadow-lg bg-white text-lg flex items-center my-auto border border-[#9F8D1B]">
                            Outsourcing bookkeeping services to Accomate can provide your business with a reliable and cost-effective Our team of experienced professionals will handle tasks such as maintaining ledgers, preparing financial statements, and reconciling bank accounts, ensuring your financial records are accurate and up-to-date
                        </div>
                    </ReactCardFlip>
                </div>

                <div>
                    <ReactCardFlip isFlipped={f3}>
                        <div onMouseEnter={() => setf3(true)} className="relative min-h-[50vh] w-full rounded-lg shadow-lg">
                            <Image
                                src={AccountBanner}
                                alt="img"
                                objectFit="cover"
                                layout="fill"
                                className="rounded-lg"
                            />
                        </div>

                        <div onMouseLeave={() => setf3(false)} className="p-5 relative min-h-[50vh] w-full rounded-lg shadow-lg bg-white text-lg border border-[#9F8D1B] space-y-4">
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
                    </ReactCardFlip>
                </div>
            </div>

            {/* 1 */}
            <div className="grid grid-cols-2 gap-8 py-16 px-8">
                <div className="flex items-center my-auto h-full">
                    <div className="h-fit p-5 rounded-lg text-white bg-[#1B2D9F] text-xl shadow-lg">
                        Outsourcing bookkeeping services to Accomate can provide your business with a reliable and cost-effective Our team of experienced professionals will handle tasks such as maintaining ledgers, preparing financial statements, and reconciling bank accounts, ensuring your financial records are accurate and up-to-date
                    </div>
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
            <div className="grid grid-cols-2 gap-8 py-16 px-8 bg-gray-200">

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

                <div className="flex items-center my-auto h-full">
                    <div className="h-fit p-5 rounded-lg text-white bg-[#1B2D9F] text-xl shadow-lg">
                        Our team of qualified professionals is dedicated to delivering comprehensive Financial Statement compilation services designed to instill confidence in your financial statements. Focus on your core operations while our experts ensure accurate and timely financial reporting.
                    </div>
                </div>
            </div>

            {/* 3 */}
            <div className="grid grid-cols-2 gap-8 py-16 px-8">
                <div className="flex items-center my-auto h-full">
                    <div className="h-fit p-5 rounded-lg text-white bg-[#1B2D9F] text-xl shadow-lg">
                        Our qualified professionals deliver comprehensive audit, review, and compilation services, designed to maintain your financial transparency, meet stringent regulatory requirements Partner with us for peace of mind and a successful financial journey
                    </div>
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
            <div className="grid grid-cols-2 gap-8 py-16 px-8 bg-gray-200">


                <div className="space-y-4">
                    <div className="text-4xl text-[#1B2D9F] font-semibold border-b border-[#9F8D1B] pb-4">
                        {usaservices[3].head}
                    </div>

                    <div className="text-lg">
                        {usaservices[3].head2}
                    </div>

                    <ul className="list-none space-y-3">
                        {usaservices[3].list.map((i) => {
                            return (
                                <li className="flex">
                                    <SiTicktick className="text-lg text-[#9F8D1B] mt-1 mr-2" />
                                    {i}
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="flex items-center my-auto h-full">
                    <div className="h-fit flex items-center my-auto p-3 rounded-lg text-white bg-[#1B2D9F] text-xl shadow-lg">
                        Grow your mortgage book faster and more efficiently
                        Accomte Global works with mortgage brokers, to support their operations, from processing the initial application through to mortgage discharge from the relevant authority.
                        Reduce costs and gain experienced loan processors
                    </div>
                </div>
            </div>

            {/* 5 */}
            <div className="grid grid-cols-2 gap-8 py-16 px-8">
                <div className="flex items-center my-auto h-full">
                    <div className="h-fit flex items-center my-auto p-3 rounded-lg text-white bg-[#1B2D9F] text-xl shadow-lg">
                        Overwhelmed by tax deadlines? by outsourcing tax preparation to Accomate Global, you gain. the freedom to focus on core business activities.
                        <br /><br />
                        Our team of tax experts knows all the nitty-gritty of US tax rules and stays up-to-date with IRS changes.
                    </div>
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
        <div className="py-10">

            {/* 1 */}
            <div className="grid grid-cols-2 gap-4 py-16 px-8">
                <div>

                </div>

                <div className="space-y-4">
                    <div className="text-4xl text-[#1B2D9F] font-semibold border-b border-[#9F8D1B] pb-4">
                        {canadaservices[0].head}
                    </div>

                    <div className="text-lg">
                        {canadaservices[0].head2}
                    </div>

                    <ul className="list-none space-y-3">
                        {canadaservices[0].list.map((i) => {
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
                        {canadaservices[1].head}
                    </div>

                    <div className="text-lg">
                        {canadaservices[1].head2}
                    </div>

                    <ul className="list-none space-y-3">
                        {canadaservices[1].list.map((i) => {
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
                        {canadaservices[2].head}
                    </div>

                    <div className="text-lg">
                        {canadaservices[2].head2}
                    </div>

                    <ul className="list-none space-y-3">
                        {canadaservices[2].list.map((i) => {
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
            <div className="grid grid-cols-2 gap-4 py-16 px-8 bg-gray-200">


                <div className="space-y-4">
                    <div className="text-4xl text-[#1B2D9F] font-semibold border-b border-[#9F8D1B] pb-4">
                        {canadaservices[3].head}
                    </div>

                    <div className="text-lg">
                        {canadaservices[3].head2}
                    </div>

                    <ul className="list-none space-y-3">
                        {canadaservices[3].list.map((i) => {
                            return (
                                <li className="flex">
                                    <SiTicktick className="text-lg text-[#9F8D1B] mt-1 mr-2" />
                                    {i}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>

            {/* 5 */}
            <div className="grid grid-cols-2 gap-4 py-16 px-8">
                <div>

                </div>

                <div className="space-y-4">
                    <div className="text-4xl text-[#1B2D9F] font-semibold border-b border-[#9F8D1B] pb-4">
                        {canadaservices[4].head}
                    </div>

                    <div className="text-lg">
                        {canadaservices[4].head2}
                    </div>

                    <ul className="list-none space-y-3">
                        {canadaservices[4].list.map((i) => {
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
        <div className="pt-10">

            {/* 1 */}
            <div className="grid grid-cols-2 gap-4 py-16 px-8">
                <div className="">

                </div>

                <div className="space-y-4">
                    <div className="text-4xl text-[#1B2D9F] font-semibold border-b border-[#9F8D1B] pb-4">
                        {australiaservices[0].head}
                    </div>

                    <div className="text-lg">
                        {australiaservices[0].head2}
                    </div>

                    <ul className="list-none space-y-3">
                        {australiaservices[0].list.map((i) => {
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
                        {australiaservices[1].head}
                    </div>

                    <div className="text-lg">
                        {australiaservices[1].head2}
                    </div>

                    <ul className="list-none space-y-3">
                        {australiaservices[1].list.map((i) => {
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
                        {australiaservices[2].head}
                    </div>

                    <div className="text-lg">
                        {australiaservices[2].head2}
                    </div>

                    <ul className="list-none space-y-3">
                        {australiaservices[2].list.map((i) => {
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
            <div className="grid grid-cols-2 gap-4 py-16 px-8 bg-gray-200">


                <div className="space-y-4">
                    <div className="text-4xl text-[#1B2D9F] font-semibold border-b border-[#9F8D1B] pb-4">
                        {australiaservices[3].head}
                    </div>

                    <div className="text-lg">
                        {australiaservices[3].head2}
                    </div>

                    <ul className="list-none space-y-3">
                        {australiaservices[3].list.map((i) => {
                            return (
                                <li className="flex">
                                    <SiTicktick className="text-lg text-[#9F8D1B] mt-1 mr-2" />
                                    {i}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>

            {/* 5 */}
            <div className="grid grid-cols-2 gap-4 py-16 px-8">
                <div>

                </div>

                <div className="space-y-4">
                    <div className="text-4xl text-[#1B2D9F] font-semibold border-b border-[#9F8D1B] pb-4">
                        {australiaservices[4].head}
                    </div>

                    <div className="text-lg">
                        {australiaservices[4].head2}
                    </div>

                    <ul className="list-none space-y-3">
                        {australiaservices[4].list.map((i) => {
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

            {/* 6 */}
            <div className="grid grid-cols-2 gap-4 py-16 px-8 bg-gray-200">


                <div className="space-y-4">
                    <div className="text-4xl text-[#1B2D9F] font-semibold border-b border-[#9F8D1B] pb-4">
                        {australiaservices[5].head}
                    </div>

                    <div className="text-lg">
                        {australiaservices[5].head2}
                    </div>

                    <ul className="list-none space-y-3">
                        {australiaservices[5].list.map((i) => {
                            return (
                                <li className="flex">
                                    <SiTicktick className="text-lg text-[#9F8D1B] mt-1 mr-2" />
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

export const Softwares = () => {

    const path = usePathname();

    const usaimages = [
        '/download.jpeg',
        '/drake.png',
        '/intuit lacrete.png',
        '/intuit pro connect.png',
        '/maestro.png',
        '/quick books destok.png',
        '/quick books online.png',
        '/taxwise.png',
        '/thomson.png',
        '/ultra tax.jpeg',
        '/walter.png',
        '/xero.webp',
    ];

    const ausimgs = [
        '/be-logo-plain.png',
        '/BGL.png',
        '/cropped-afg_social_profile.png',
        '/download.png',
        '/salestrekker.jpg',
        '/xodo.jpeg',
        '/download.png',
        '/xero.webp',
    ];

    const canadaimgs = [
        '/dolphin.jpeg',
        '/intuit profile.jpeg',
        '/myob.jpg',
        '/quick books destok.png',
        '/quick books online.png',
        '/tax cycle.png'
    ];

    return (
        <div className="px-8 py-14">
            <div className="font-semibold text-4xl flex justify-center mx-auto">
                Softwares
            </div>

            <div className="mt-10">
                <marquee>
                    <div className="flex justify-center items-center m-auto space-x-14">
                        {path == '/services/usa' ?
                            <>
                                {usaimages.map((i, index) => {
                                    return (
                                        <div className="flex shrink-0 justify-center mx-auto">
                                            <Image
                                                src={`/USA${i}`}
                                                alt="software"
                                                width={200}
                                                height={200}
                                                className="h-20 w-auto flex justify-center items-center m-auto"
                                            />
                                        </div>
                                    )
                                })}
                            </>
                            :
                            path == '/services/australia' ?
                                <>
                                    {ausimgs.map((i, index) => {
                                        return (
                                            <div className="flex shrink-0 justify-center mx-auto">
                                                <Image
                                                    src={`/Australia${i}`}
                                                    alt="software"
                                                    width={200}
                                                    height={200}
                                                    className="h-20 w-auto flex justify-center items-center m-auto"
                                                />
                                            </div>
                                        )
                                    })}
                                </> :
                                path == '/services/canada' ?
                                    <>
                                        {canadaimgs.map((i, index) => {
                                            return (
                                                <div className="flex shrink-0 justify-center mx-auto">
                                                    <Image
                                                        src={`/Canada${i}`}
                                                        alt="software"
                                                        width={200}
                                                        height={200}
                                                        className="h-20 w-auto flex justify-center items-center m-auto"
                                                    />
                                                </div>
                                            )
                                        })}
                                    </> : ''}
                    </div>
                </marquee>
            </div>
        </div>
    )
}