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

    const [flip, setFlip] = useState('');
    const [f2, setf2] = useState(false);
    const [f3, setf3] = useState(false);
    const usaservices = [
        {
            img: '/accounts.png',
            head: 'Accounting',
            head2: 'Our accounting services include:',
            desc: `At Accomate, we pride ourselves on offering offshore accountancy services tailored to meet the unique needs of each 
            client. Offshore bookkeeping services can save your business valuable time and money compared to hiring an in-house 
            bookkeeper.`,
            list: [
                'Bookkeeping and bank reconciliations',
                'Payroll processing (T4 &T5)',
                'Accounts payable and receivable management'
            ]
        },
        {
            img: '/accounts.png',
            head: 'Financial Statement Compilation',
            head2: 'Our financial statements compilation services include:',
            desc: 'Our team of qualified professionals is dedicated to delivering comprehensive Financial Statement compilation services designed to instill confidence in your financial statements. Focus on your core operations while our experts ensure accurate and timely financial reporting.',
            list: [
                'Balance sheets',
                'Income statements',
                'Cash flow statements'
            ]
        },
        {
            img: '/payroll.png',
            head: 'Audit & Assurance',
            head2: 'Our audit & assurance services encompass a wide range of areas, including but not limited to:',
            desc: 'Our qualified professionals deliver comprehensive audit, review, and compilation services, designed to maintain financial transparency and meet stringent regulatory requirements. Partner with our team of skilled auditors, for your peace of mind and a successful financial journey',
            list: [
                'Financial statement audits',
                'Internal control assessment and evaluations',
                'Risk assessments and Compliance audits',
                'Compliance audits'
            ]
        },
        {
            img: '/taxation.png',
            head: 'Tax Compilation',
            head2: 'Our comprehensive tax services include:',
            desc: `When tax filing deadlines approach, the rush can leave business owners and CPAs feeling overwhelmed. That's where Accomate steps in to shoulder the pressure. Our team of tax experts is well-versed in all the nitty-gritty details of US tax rules and stays up-to-date with IRS changes. By outsourcing your tax preparation, you can focus on your core business activities.`,
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
        {
            img: '/payroll.png',
            head: 'Mortgage Broking',
            head2: 'Our mortgage broking services include:',
            desc: `Grow your mortgage book faster and more efficiently 
            Accomte Global works with mortgage brokers, to support their operations, from processing the initial application through to mortgage discharge from the relevant authority.
            Reduce costs and gain experienced loan processors
            `,
            list: [
                'Data entry and document verification',
                'Serviceability analysis',
                'Ordering property valuation',
                'Online Application and lodgment'
            ]
        },
    ];

    return (
        <div className="px-5 md:px-8 py-10 overflow-x-hidden">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 overflow-hidden">

                {usaservices.map((i, index) => {
                    return (
                        <div data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="100" key={index} onMouseEnter={() => setFlip(i.head)} onMouseLeave={() => setFlip('')} className="w-full min-h-full">
                            <ReactCardFlip isFlipped={flip == i.head ? true : false} className="h-full" containerStyle={{ height: '100%' }}>

                                {/* front */}
                                <div className="relative h-full w-full rounded-lg shadow">

                                    <Image
                                        src={i.img}
                                        alt="img"
                                        objectFit="cover"
                                        layout="fill"
                                        objectPosition="center"
                                        className="rounded-lg -z-10"
                                        priority
                                    />

                                    <div className="rounded-lg w-full h-[100%] bg-[#00000077] p-4 text-white space-y-8">
                                        <div className="text-2xl font-semibold pb-3 border-b border-white">
                                            {i.head}
                                        </div>
                                        <div className="text-lg">
                                            {i.desc}
                                        </div>
                                    </div>


                                </div>

                                {/* back */}
                                <div className="shadow rounded-lg w-full border border-[#9F8D1B] p-4 space-y-4 h-full">


                                    <div className="text-2xl font-semibold pb-3 border-b text-[#1B2D9F] border-[#9F8D1B]">
                                        {i.head}
                                    </div>

                                    <ul className="list-none">
                                        {i.list.map((j, ind) => {
                                            return (
                                                <li key={ind} className="flex border-b border-gray-300 p-2 mb-2">
                                                    <SiTicktick className="text-lg text-[#9F8D1B] mt-1 mr-2 flex shrink-0" />
                                                    {j}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </ReactCardFlip>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export const Canada = () => {

    const [flip, setFlip] = useState('');
    const canadaservices = [
        {
            img: '/accounts.png',
            head: 'Accounting',
            head2: 'Our accounting services include:',
            desc: `At Accomate, we pride ourselves on offering offshore accountancy services tailored to meet the unique needs of each 
            client. Offshore bookkeeping services can save your business valuable time and money compared to hiring an in-house 
            bookkeeper.`,
            list: [
                'Data entry',
                'Payroll processing (T4 &T5)',
                'Accounts payable / receivable management'
            ]
        },
        {
            img: '/payroll.png',
            head: 'Payroll Processing',
            head2: 'Our payroll services include:',
            desc: `Our services are designed to meet the various needs of businesses and accounting professionals. By outsourcing payroll preparation to Accomate, you can focus on your business while we handle inefficiencies, reporting, and cost-cutting.`,
            list: [
                `End to end management – From “payroll setup in the system” to “end with paychecks”`,
                'Payroll accounting and prompt processing and filing',
                'Annual filing of T4 and T5 slips for all employees',
                'Payroll Tax management and compliance'
            ]
        },
        {
            img: '/accounts.png',
            head: 'Financial Statement Compilation',
            head2: 'Our financial statements compilation services for corporates and trusts includes preparation of:',
            desc: 'Our team of qualified professionals is dedicated to delivering comprehensive Financial Statement compilation services designed to instill confidence in your financial statements. Focus on your core operations while our experts ensure accurate and timely financial reporting.',
            list: [
                'Balance sheets',
                'Income statements',
                'Cash flow statements'
            ]
        },
        {
            img: '/payroll.png',
            head: 'Audit & Assurance',
            head2: 'Our audit & assurance services encompass a wide range of areas, including but not limited to:',
            desc: 'Our qualified professionals deliver comprehensive audit, review, and compilation services, designed to maintain financial transparency and meet stringent regulatory requirements. Partner with our team of skilled auditors, for your peace of mind and a successful financial journey',
            list: [
                'Preparation of audit schedules',
                'Financial statement audits',
                'Assisting audit queries',
                'Internal control assessment and risk assessments',
                'Compliance with auditing standards and regulations',
            ]
        },
        {
            img: '/taxation.png',
            head: 'Tax Compilation',
            head2: 'Our comprehensive tax services include:',
            desc: `When tax filing deadlines approach, the rush can leave business owners and CPAs feeling overwhelmed. That's where Accomate steps in to shoulder the pressure. Our team of tax experts is well-versed in all the nitty-gritty details of US tax rules and stays up-to-date with IRS changes. By outsourcing your tax preparation, you can focus on your core business activities.`,
            list: [
                `Preparation and filing of Individual Tax Returns (ITR), Corporate Tax Returns (CTR)`,
                'Preparation and filing of GST returns',
                'Payroll Tax management and filings',
                'Tax guidance and Tax Planning',
            ]
        },
    ];
    return (
        <div className="px-5 md:px-8 py-10 overflow-x-hidden">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 overflow-hidden">

            {canadaservices.map((i, index) => {
                return (
                    <div data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="100" key={index} onMouseEnter={() => setFlip(i.head)} onMouseLeave={() => setFlip('')} className="w-full min-h-full">
                        <ReactCardFlip isFlipped={flip == i.head ? true : false} className="h-full" containerStyle={{ height: '100%' }}>

                            {/* front */}
                            <div className="relative h-full w-full rounded-lg shadow">

                                <Image
                                    src={i.img}
                                    alt="img"
                                    objectFit="cover"
                                    layout="fill"
                                    objectPosition="center"
                                    className="rounded-lg -z-10"
                                    priority
                                />

                                <div className="rounded-lg w-full h-[100%] bg-[#00000077] p-4 text-white space-y-8">
                                    <div className="text-2xl font-semibold pb-3 border-b border-white">
                                        {i.head}
                                    </div>
                                    <div className="text-lg">
                                        {i.desc}
                                    </div>
                                </div>


                            </div>

                            {/* back */}
                            <div className="shadow rounded-lg w-full border border-[#9F8D1B] p-4 space-y-4 h-full">


                                <div className="text-2xl font-semibold pb-3 border-b text-[#1B2D9F] border-[#9F8D1B]">
                                    {i.head}
                                </div>

                                <ul className="list-none">
                                    {i.list.map((j, ind) => {
                                        return (
                                            <li key={ind} className="flex border-b border-gray-300 p-2 mb-2">
                                                <SiTicktick className="text-lg text-[#9F8D1B] mt-1 mr-2 flex shrink-0" />
                                                {j}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </ReactCardFlip>
                    </div>
                )
            })}
        </div>
    </div>
    )
}

export const Australia = () => {

    const [flip, setFlip] = useState('');
    const australiaservices = [
        {
            img: '/accounts.png',
            head: 'Accounting',
            head2: 'Our accounting services include:',
            desc: 'Our team of qualified professionals is dedicated to delivering comprehensive Financial Statement compilation services designed to instill confidence in your financial statements. Focus on your core operations while our experts ensure accurate and timely financial reporting.',
            list: [
                'Data entry',
                'Bank reconciliation',
                'Accounts payable / receivable management',
                'Payroll processing including salary calculations, deductions and tax withholdings',
            ]
        },
        {
            img: '/accounts.png',
            head: 'Financial Statement Compilation',
            head2: 'Our financial statements compilation services for corporates and trusts includes preparation of:',
            desc: 'Our team of qualified professionals is dedicated to delivering comprehensive Financial Statement compilation services designed to instill confidence in your financial statements. Focus on your core operations while our experts ensure accurate and timely financial reporting.',
            list: [
                'Balance sheets',
                'Income statements',
                'Cash flow statements'
            ]
        },
        {
            img: '/payroll.png',
            head: 'Audit & Assurance',
            head2: 'Our audit & assurance services encompass a wide range of areas, including but not limited to:',
            desc: 'Our qualified professionals deliver comprehensive audit, review, and compilation services, designed to maintain financial transparency and meet stringent regulatory requirements. Partner with our team of skilled auditors, for your peace of mind and a successful financial journey',
            list: [
                'Preparation of audit schedules',
                'Financial statement audits',
                'Assisting audit queries',
                'Internal control assessment and risk assessments',
                'Compliance with auditing standards and regulations',
            ]
        },
        {
            img: '/taxation.png',
            head: 'Tax Compilation',
            head2: 'Our comprehensive tax services include:',
            desc: `When tax filing deadlines approach, the rush can leave business owners and CPAs feeling overwhelmed. That's where Accomate steps in to shoulder the pressure. Our team of tax experts is well-versed in all the nitty-gritty details of US tax rules and stays up-to-date with IRS changes. By outsourcing your tax preparation, you can focus on your core business activities.`,
            list: [
                'Preparation of Individual Tax Returns (ITR), Corporate Tax Returns (CTR), Trust Tax Returns (TTR)',
                'Preparation of Business Activity Statements (Bases)',
                'Managing PAYG Tax / Payroll Taxation',
                'Tax guidance and Tax Planning',
            ]
        },
        {
            img: '/payroll.png',
            head: 'Managing SMSF',
            head2: 'Below are the services we provide for SMSF:',
            desc: `Even though, SMSF provides excellent control of funds transfer after retirement, developing and managing SMSF compliance requirements is not only challenging but also time-consuming. 
            However, Our highly experienced fund advisors work closely with you to help you with end-to-end SMSF administration services
            `,
            list: [
                'SMSF accounting',
                'Ensuring Compliance with regulations',
                'Preparation of audit workpapers',
                'Preparation of financial statements',
                'Preparation of SMSF Tax Returns',
            ]
        },
        {
            img: '/payroll.png',
            head: 'Mortgage Broking',
            head2: 'Our mortgage broking services include:',
            desc: `Grow your mortgage book faster and more efficiently 
            Accomte Global works with mortgage brokers, to support their operations, from processing the initial application through to mortgage discharge from the relevant authority.
            Reduce costs and gain experienced loan processors
            `,
            list: [
                'Data entry and document verification',
                'Serviceability analysis',
                'Ordering property valuation',
                'Online Application and lodgment'
            ]
        },
    ];
    return (
        <div className="px-5 md:px-8 py-10 overflow-x-hidden">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 overflow-hidden">

            {australiaservices.map((i, index) => {
                return (
                    <div data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="100" key={index} onMouseEnter={() => setFlip(i.head)} onMouseLeave={() => setFlip('')} className="w-full min-h-full">
                        <ReactCardFlip isFlipped={flip == i.head ? true : false} className="h-full" containerStyle={{ height: '100%' }}>

                            {/* front */}
                            <div className="relative h-full w-full rounded-lg shadow">

                                <Image
                                    src={i.img}
                                    alt="img"
                                    objectFit="cover"
                                    layout="fill"
                                    objectPosition="center"
                                    className="rounded-lg -z-10"
                                    priority
                                />

                                <div className="rounded-lg w-full h-[100%] bg-[#00000077] p-4 text-white space-y-8">
                                    <div className="text-2xl font-semibold pb-3 border-b border-white">
                                        {i.head}
                                    </div>
                                    <div className="text-lg">
                                        {i.desc}
                                    </div>
                                </div>


                            </div>

                            {/* back */}
                            <div className="shadow rounded-lg w-full border border-[#9F8D1B] p-4 space-y-4 h-full">


                                <div className="text-2xl font-semibold pb-3 border-b text-[#1B2D9F] border-[#9F8D1B]">
                                    {i.head}
                                </div>

                                <ul className="list-none">
                                    {i.list.map((j, ind) => {
                                        return (
                                            <li key={ind} className="flex border-b border-gray-300 p-2 mb-2">
                                                <SiTicktick className="text-lg text-[#9F8D1B] mt-1 mr-2 flex shrink-0" />
                                                {j}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </ReactCardFlip>
                    </div>
                )
            })}
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
        <div className="px-8 py-14" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="100" >
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