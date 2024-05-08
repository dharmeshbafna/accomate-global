'use client'
import { useState, useEffect } from "react"
import Image from "next/image"

import CircleIcon from "../../public/circle_icon.png"

import AboutImg from "../../public/dummy1.png"
import Banner1 from "../../public/banner1.jpg"
import Banner2 from "../../public/banner2.jpg"
import USA from "../../public/usa.webp"
import Canada from "../../public/circular_canada.jpg"
import Australia from "../../public/circular_australia.jpg"

import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

import { GrDocumentText } from "react-icons/gr";
import { HiOutlinePresentationChartLine } from "react-icons/hi";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { BsFileEarmarkFont, BsFileEarmarkCheck } from "react-icons/bs";
import { PiUsersThree } from "react-icons/pi";

import { Lordicon } from "./other"

export const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef();

    const slides = [
        {
            image: "/banner1.jpg",
            title: "Lore ipsum dolor sit amet",
            description: "Accomate Global is the brainchild of seasoned CAs and CPAs. It is backed by industry titans “CA Rohit K Choksi”(Co-Founder) and “CA, CPA (US) Vartik R Choksi (Partner) of G K Choksi & Co., a leading taxation, audit & assurance firm in India with a 50-year legacy since 1972."
        },
        {
            image: "/banner2.jpg",
            title: "Second Slide Title",
            description: "Accomate Global is the brainchild of seasoned CAs and CPAs. It is backed by industry titans “CA Rohit K Choksi”(Co-Founder) and “CA, CPA (US) Vartik R Choksi (Partner) of G K Choksi & Co., a leading taxation, audit & assurance firm in India with a 50-year legacy since 1972."
        }
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: false,
        autoplay: true,
        autoplaySpeed: 5000,
        waitForAnimate: false,
        fade: true,
        pauseOnHover: false,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setCurrentSlide(next),
    };

    function NextArrow(props) {
        const { onClick } = props;
        return (
            <button
                className="absolute top-1/2 right-4 z-20 rounded-full text-white p-2 border-2 border-white rounded-full hover:scale-[110%] duration-300"
                onClick={onClick}>
                <FaChevronRight className="text-lg duration-300" />
            </button>
        );
    }

    function PrevArrow(props) {
        const { onClick } = props;
        return (
            <button
                className="absolute top-1/2 left-4 z-20 rounded-full text-white p-2 border-2 border-white rounded-full hover:scale-[110%] duration-300"
                onClick={onClick}>
                <FaChevronLeft className="text-lg duration-300" />
            </button>
        );
    }

    return (
        <div className="overflow-x-hidden relative">
            <Slider ref={sliderRef} {...settings}>
                {slides.map((slide, index) => (
                    <div key={index} className="h-[73vh] w-full relative">
                        <Image
                            src={slide.image}
                            priority={true}
                            objectFit="cover"
                            layout="fill"
                        />

                        {/* layer */}
                        <div className="absolute top-0 left-0 w-full h-full bg-[#0000005d]"></div>

                        {/* Text */}
                        <div className={`absolute top-[20%] left-20 lg:w-1/2 transition-all duration-1000 ${currentSlide === index ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
                            <div className="text-[50px] font-semibold text-white">
                                {slide.title}
                            </div>
                            <div className="my-5 text-white">
                                {slide.description}
                            </div>

                            <button className="text-lg px-5 py-2 bg-[#5264F3] text-white rounded-full shadow-lg">
                                Read More
                            </button>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export const About = () => {
    return (
        <div className="px-8 py-10 min-h-[100vh] flex items-center my-auto w-full relative overflow-hidden">
            <div className="grid grid-cols-2 gap-3 w-full">

                <div className="relative mb-5">
                    <Image
                        src={AboutImg}
                        alt="About Image"
                        className="w-[80%] h-auto flex justify-center mx-auto drop-shadow-xl"
                    />
                    <div className="drop-shadow-lg absolute w-[80%] h-full bg-[#5264F389] top-[5%] left-[7%] -z-10"></div>
                </div>

                <div className="flex items-center my-auto">
                    <div>
                        <div className="text-[#5264F3]">About Us</div>
                        <div className="font-semibold text-3xl">
                            Born from experience, built for success
                        </div>
                        <div className="my-4">
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
                        </div>
                        <button className="text-lg flex px-5 py-2 rounded-full text-white bg-[#5264F3] shadow-lg">
                            Read More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const Services = () => {

    const [hoverd, setHovered] = useState(true);
    const [type, setType] = useState('usa');
    const [sliderRef, slider] = useKeenSlider({
        loop: true,
        duration: 1500,
        slides: {
            origin: 'center',
            perView: 1,
            spacing: 16,
        },
        breakpoints: {
            '(min-width: 768px)': {
                slides: {
                    origin: 'auto',
                    perView: 1.25,
                    spacing: 16,
                },
            },
            '(min-width: 1024px)': {
                slides: {
                    origin: 'auto',
                    perView: 3,
                    spacing: 32,
                },
            },
        },
    });
    const [sliderRef1, slider1] = useKeenSlider({
        loop: true,
        duration: 1500,
        slides: {
            origin: 'center',
            perView: 1,
            spacing: 16,
        },
        breakpoints: {
            '(min-width: 768px)': {
                slides: {
                    origin: 'auto',
                    perView: 1.25,
                    spacing: 16,
                },
            },
            '(min-width: 1024px)': {
                slides: {
                    origin: 'auto',
                    perView: 3,
                    spacing: 32,
                },
            },
        },
    });
    const [sliderRef2, slider2] = useKeenSlider({
        loop: true,
        duration: 1500,
        slides: {
            origin: 'center',
            perView: 1,
            spacing: 16,
        },
        breakpoints: {
            '(min-width: 768px)': {
                slides: {
                    origin: 'auto',
                    perView: 1.25,
                    spacing: 16,
                },
            },
            '(min-width: 1024px)': {
                slides: {
                    origin: 'auto',
                    perView: 3,
                    spacing: 32,
                },
            },
        },
    });

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
            head2: 'Our audit & assurance services including but not limited to:',
            list: [
                'Financial statement audits',
                'Internal control assessment and evaluations',
                'Risk assessments and Compliance audits'
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
                'Individual returns such as Form 1040, 1040NR, 1041',
                'Foreign investments compliances (Form 5471, 8865)',
                'Preparation of federal and state schedule K-1 reporting for investors',
            ]
        },
    ];

    const canadaservices = [
        {
            icon: '/book.json',
            head: 'Accounting',
            head2: 'Our accounting services include:',
            list: [
                'Data entry',
                'Payroll processing (T4 &T5)',
                'Bank reconciliation'
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
            head2: 'Our audit & assurance services including but not limited to:',
            list: [
                'Preparation of audit schedules',
                'Financial statement audits',
                'Assisting audit queries'
            ]
        },
        {
            icon: '/home.json',
            head: 'Payroll Processing',
            head2: 'Our payroll services include:',
            list: [
                'Payroll accounting and prompt processing and filing',
                'Annual filing of T4 and T5 slips for all employees',
                'Ordering property valuation',
                'Payroll Tax management and compliance'
            ]
        },
        {
            icon: '/privacy-policy.json',
            head: 'Tax Compilation',
            head2: 'Our comprehensive tax services include:',
            list: [
                'Preparation and filing of GST returns',
                'Payroll Tax management and filings',
                'Tax guidance and Tax Planning',
            ]
        },
    ];

    const australiaservices = [
        {
            icon: '/book.json',
            head: 'Accounting',
            head2: 'Our accounting services include:',
            list: [
                'Data entry',
                'Bank reconciliation',
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
            head2: 'Our audit & assurance services including but not limited to:',
            list: [
                'Preparation of audit schedules',
                'Financial statement audits',
                'Assisting audit queries',
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
                'Tax guidance and Tax Planning',
                'Managing PAYG Tax / Payroll Taxation',
                'Preparation of Business Activity Statements (Bases)',
            ]
        },
        {
            icon: '/commodity.json',
            head: 'Managing SMSF',
            head2: 'Below are the services we provide for SMSF:',
            list: [
                'SMSF accounting',
                'Ensuring Compliance with regulations',
                'Preparation of SMSF Tax Returns',
                'Preparation of audit workpapers',
            ]
        },
    ];

    const handleNext = (e) => {
        if (e && e.stopPropagation) {
            e.stopPropagation();
        }
        if (slider.current) {
            slider.current.next();
        }
    };

    const handlePrev = (e) => {
        if (e && e.stopPropagation) {
            e.stopPropagation();
        }
        if (slider.current) {
            slider.current.prev();
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (slider && slider.current && hoverd) {
                slider.current.next();
            }
        }, 2000);

        return () => clearInterval(interval);
    }, [slider, hoverd]);

    const handleNext1 = (e) => {
        if (e && e.stopPropagation) {
            e.stopPropagation();
        }
        if (slider1.current) {
            slider1.current.next();
        }
    };

    const handlePrev1 = (e) => {
        if (e && e.stopPropagation) {
            e.stopPropagation();
        }
        if (slider1.current) {
            slider1.current.prev();
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (slider1 && slider1.current && hoverd) {
                slider1.current.next();
            }
        }, 2000);

        return () => clearInterval(interval);
    }, [slider1, hoverd]);

    const handleNext2 = (e) => {
        if (e && e.stopPropagation) {
            e.stopPropagation();
        }
        if (slider2.current) {
            slider2.current.next();
        }
    };

    const handlePrev2 = (e) => {
        if (e && e.stopPropagation) {
            e.stopPropagation();
        }
        if (slider2.current) {
            slider2.current.prev();
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (slider2 && slider2.current && hoverd) {
                slider2.current.next();
            }
        }, 2000);

        return () => clearInterval(interval);
    }, [slider2, hoverd]);

    return (
        <div className="px-8 py-10 bg-gray-100">
            <div className="text-[#5264F3] flex justify-center mx-auto text-center">Our Services</div>
            <div className="font-semibold text-3xl flex justify-center mx-auto text-center">
                We provide a wide range of services
            </div>

            <div className="mt-10 ">

                {/* Country */}
                <div className="flex justify-center items-center m-auto pb-10">
                    <div className="lg:w-1/2 flex items-center my-auto space-x-5">
                        <button onClick={() => setType('usa')} className={`${type == 'usa' ? 'bg-[#5264F3] text-white' : ''} w-[70%] rounded-full flex justify-center items-center m-auto border-2 border-[#5264F3] hover:scale-[110%] duration-300`}>
                            <div className="bg-white p-1 rounded-full border-r-2 border-[#5264F3]">
                                <Image
                                    src={USA}
                                    alt="USA"
                                    className="h-10 w-10 rounded-full "
                                />
                            </div>
                            <div className="flex justify-center mx-auto text-center text-lg">
                                USA
                            </div>
                        </button>
                        <button onClick={() => setType('canada')} className={`${type == 'canada' ? 'bg-[#5264F3] text-white' : ''} w-[70%] rounded-full flex justify-center items-center m-auto border-2 border-[#5264F3] hover:scale-[110%] duration-300`}>
                            <div className="bg-white p-1 rounded-full border-r-2 border-[#5264F3]">
                                <Image
                                    src={Canada}
                                    alt="Canada"
                                    className="h-10 w-10 rounded-full "
                                />
                            </div>
                            <div className="flex justify-center mx-auto text-center text-lg">
                                Canada
                            </div>
                        </button>
                        <button onClick={() => setType('australia')} className={`${type == 'australia' ? 'bg-[#5264F3] text-white' : ''} w-[70%] rounded-full flex justify-center items-center m-auto border-2 border-[#5264F3] hover:scale-[110%] duration-300`}>
                            <div className="bg-white p-1 rounded-full border-r-2 border-[#5264F3]">
                                <Image
                                    src={Australia}
                                    alt="Australia"
                                    className="h-10 w-10 rounded-full "
                                />
                            </div>
                            <div className="flex justify-center mx-auto text-center text-lg">
                                Australia
                            </div>
                        </button>
                    </div>
                </div>

                {/* Services */}
                <div className="px-4 relative">
                    {type == 'usa' ?
                        <div ref={sliderRef} className="keen-slider">

                            {usaservices.map((i, index) => {
                                return (
                                    <div
                                        onMouseEnter={() => setHovered(false)}
                                        onMouseLeave={() => setHovered(true)}
                                        className="keen-slider__slide rounded-lg shadow-lg cursor-pointer">
                                        <blockquote className="bg-white w-full border border-gray-400 rounded-lg shadow-lg px-3 py-5 h-full flex ">
                                            <div className="space-y-4 flex flex-col justify-between items-center relative">

                                                <div className="flex justify-center mx-auto">
                                                    <Lordicon
                                                        src={i.icon}
                                                        trigger="loop"
                                                        style={{ width: '100px', height: '100px' }}
                                                    />
                                                </div>

                                                <div className="text-center font-semibold text-[#5264F3] text-xl flex justify-center mx-auto">
                                                    {i.head}
                                                </div>

                                                <div className="font-semibold">
                                                    {i.head2}
                                                </div>

                                                <ul className="w-full list-disc pl-4">
                                                    {i.list.map((j) => (
                                                        <li>
                                                            {j}
                                                        </li>
                                                    ))}
                                                </ul>

                                                <button className="bg-[#5264F3] text-white px-5 py-2 rounded-full shadow-lg flex justify-center mx-auto">
                                                    Read More
                                                </button>
                                            </div>
                                        </blockquote>
                                    </div>

                                )
                            })}

                        </div> :
                        type == 'canada' ?
                            <div ref={sliderRef1} className="keen-slider">

                                {canadaservices.map((i, index) => {
                                    return (
                                        <div
                                            onMouseEnter={() => setHovered(false)}
                                            onMouseLeave={() => setHovered(true)}
                                            className="keen-slider__slide rounded-lg shadow-lg cursor-pointer">
                                            <blockquote className="bg-white w-full border border-gray-400 rounded-lg shadow-lg px-3 py-5 h-full flex ">
                                                <div className="space-y-4 flex flex-col justify-between items-center relative">

                                                    <div className="flex justify-center mx-auto">
                                                        <Lordicon
                                                            src={i.icon}
                                                            trigger="loop"
                                                            style={{ width: '100px', height: '100px' }}
                                                        />
                                                    </div>

                                                    <div className="text-center font-semibold text-[#5264F3] text-xl flex justify-center mx-auto">
                                                        {i.head}
                                                    </div>

                                                    <div className="font-semibold">
                                                        {i.head2}
                                                    </div>

                                                    <ul className="w-full list-disc pl-4">
                                                        {i.list.map((j) => (
                                                            <li>
                                                                {j}
                                                            </li>
                                                        ))}
                                                    </ul>

                                                    <button className="bg-[#5264F3] text-white px-5 py-2 rounded-full shadow-lg flex justify-center mx-auto">
                                                        Read More
                                                    </button>
                                                </div>
                                            </blockquote>
                                        </div>

                                    )
                                })}

                            </div> :
                            type == 'australia' ?
                                <div ref={sliderRef2} className="keen-slider">

                                    {australiaservices.map((i, index) => {
                                        return (
                                            <div
                                                onMouseEnter={() => setHovered(false)}
                                                onMouseLeave={() => setHovered(true)}
                                                className="keen-slider__slide rounded-lg shadow-lg cursor-pointer">
                                                <blockquote className="bg-white w-full border border-gray-400 rounded-lg shadow-lg px-3 py-5 h-full flex ">
                                                    <div className="space-y-4 flex flex-col justify-between items-center relative">

                                                        <div className="flex justify-center mx-auto">
                                                            <Lordicon
                                                                src={i.icon}
                                                                trigger="loop"
                                                                style={{ width: '100px', height: '100px' }}
                                                            />
                                                        </div>

                                                        <div className="text-center font-semibold text-[#5264F3] text-xl flex justify-center mx-auto">
                                                            {i.head}
                                                        </div>

                                                        <div className="font-semibold">
                                                            {i.head2}
                                                        </div>

                                                        <ul className="w-full list-disc pl-4">
                                                            {i.list.map((j) => (
                                                                <li>
                                                                    {j}
                                                                </li>
                                                            ))}
                                                        </ul>

                                                        <button className="bg-[#5264F3] text-white px-5 py-2 rounded-full shadow-lg flex justify-center mx-auto">
                                                            Read More
                                                        </button>
                                                    </div>
                                                </blockquote>
                                            </div>

                                        )
                                    })}

                                </div>
                                : ''}


                    {/* Prev Button */}
                    <button onClick={type == 'usa' ? () => handlePrev() : type == 'canada' ? () => handlePrev1() : () => handlePrev2()} className="drop-shadow-lg absolute -left-3 top-1/2 p-2 bg-white border-2 border-[#5264F3] text-[#5264F3] rounded-full">
                        <FaChevronLeft />
                    </button>

                    {/* Next Button */}
                    <button onClick={type == 'usa' ? () => handleNext() : type == 'canada' ? () => handleNext1() : () => handleNext2()} className="drop-shadow-lg absolute -right-3 top-1/2 p-2 bg-white border-2 border-[#5264F3] text-[#5264F3] rounded-full">
                        <FaChevronRight />
                    </button>
                </div>

            </div>
        </div>
    )
}

export const Software = () => {
    return (
        <div className="px-8 py-10 min-h-[100vh] flex items-center my-auto w-full">
            <div className="grid grid-cols-2 gap-3 w-full">

                <div className="flex items-center my-auto">
                    <div>
                        <div className="text-[#5264F3]">Software Expertise</div>
                        <div className="font-semibold text-3xl">
                            We work with your choice of Accounting software
                        </div>

                        <div className="my-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id arcu elementum, vehicula lacus sit amet, elementum odio.
                            Donec aliquam vitae nibh vel tempus. Sed imperdiet, neque sit amet dictum bibendum, mauris nibh consectetur risus, sed vehicula odio nisi nec erat.
                            <br /><br />
                            Nulla a porta justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tristique urna at ex tincidunt, ac cursus ipsum fermentum. In sagittis eu orci accumsan rutrum.
                        </div>

                        <button className="text-lg flex px-5 py-2 rounded-full text-white bg-[#5264F3] shadow-lg">
                            Read More
                        </button>
                    </div>
                </div>

                {/* Circular animate */}
                <div className="flex items-center justify-center m-auto">

                    <div className="relative p-16 rounded-full">

                        <div className="relative p-14 rounded-full">

                            <div className="relative p-10 rounded-full">
                                {/* Main icon */}
                                <div className="relative hover:scale-[110%] duration-300 cursor-pointer z-40">
                                    <Image
                                        src={CircleIcon}
                                        alt="Main Icon"
                                        className="h-16 w-auto shadow-md rounded-full "
                                    />
                                </div>

                                {/* ====== First Circle ======= */}
                                <div className="absolute top-0 left-0 border-dashed border-2 border-gray-400 w-full h-full rounded-full">
                                    <div className="relative w-full h-full rounded-full rotate-animation">
                                        <Image
                                            src={CircleIcon}
                                            alt="Main Icon"
                                            className="h-10 w-auto absolute top-0 left-0 bg-white"
                                        />
                                        <Image
                                            src={CircleIcon}
                                            alt="Main Icon"
                                            className="h-10 w-auto absolute bottom-0 right-0 bg-white"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* ======== Second Circle ======== */}
                            <div className="absolute top-0 left-0  w-full h-full border-dashed border-2 border-gray-400 rounded-full">
                                <div className="relative w-full h-full rotate-animation">
                                    <Image
                                        src={CircleIcon}
                                        alt="Main Icon"
                                        className="h-10 w-auto absolute -top-3 left-1/2 bg-white"
                                    />
                                    <Image
                                        src={CircleIcon}
                                        alt="Main Icon"
                                        className="h-10 w-auto absolute -bottom-3 right-1/2 bg-white"
                                    />
                                    <Image
                                        src={CircleIcon}
                                        alt="Main Icon"
                                        className="h-10 w-auto absolute bottom-1/2 -right-3 bg-white"
                                    />
                                </div>
                            </div>

                        </div>

                        {/* ======== Third Circle ======== */}
                        <div className="absolute top-0 left-0  w-full h-full border-dashed border-2 border-gray-400 rounded-full">
                            <div className="relative w-full h-full rotate-animation ">
                                <Image
                                    src={CircleIcon}
                                    alt="Main Icon"
                                    className="h-10 w-auto absolute top-1/2 -left-3 bg-white"
                                />
                                <Image
                                    src={CircleIcon}
                                    alt="Main Icon"
                                    className="h-10 w-auto absolute top-1/2 -right-3 bg-white"
                                />
                                <Image
                                    src={CircleIcon}
                                    alt="Main Icon"
                                    className="h-10 w-auto absolute -bottom-3 right-[30%] bg-white"
                                />
                                <Image
                                    src={CircleIcon}
                                    alt="Main Icon"
                                    className="h-10 w-auto absolute -top-3 left-[30%] bg-white"
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export const Counter = () => {

    const [counters, setCounters] = useState({
        counter1: 0,
        counter2: 0,
        counter3: 0,
        counter4: 0
    });

    useEffect(() => {
        const updateCounters = () => {
            setCounters(prevCounters => ({
                counter1: prevCounters.counter1 < 15000 ? prevCounters.counter1 + 1500 : prevCounters.counter1,
                counter2: prevCounters.counter2 < 100 ? prevCounters.counter2 + 10 : prevCounters.counter2,
                counter3: prevCounters.counter3 < 900 ? prevCounters.counter3 + 90 : prevCounters.counter3,
                counter4: prevCounters.counter4 < 500 ? prevCounters.counter4 + 50 : prevCounters.counter4
            }));
        };

        const countersSection = document.getElementById("counters-section");

        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const interval = setInterval(updateCounters, 200);
                        return () => clearInterval(interval);
                    }
                });
            },
            { threshold: 0.2 }
        );

        observer.observe(countersSection);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className="px-8 py-20 min-h-[35vh] w-full home-counter relative">
            <div className="absolute w-full h-full bg-[#00000084] top-0 left-0 px-8 py-16 ">
                <div className="grid grid-cols-4 gap-5 w-full" id="counters-section">

                    <div className="flex justify-center mx-auto">
                        <div className="flex text-white gap-x-4">
                            <BsFileEarmarkCheck className="h-20 w-auto mt-1" />
                            <div className="font-semibold">
                                <div className="text-[40px]"><span id="counter1">{counters.counter1}</span> +</div>
                                <div className="text-lg">INVOICES PROCESSED</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center mx-auto">
                        <div className="flex text-white gap-x-4">
                            <HiOutlinePresentationChartLine className="h-20 w-auto mt-1" />
                            <div className="font-semibold">
                                <div className="text-[40px]"><span id="counter2">{counters.counter2}</span> +</div>
                                <div className="text-lg">SMSF RETURNS</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center mx-auto">
                        <div className="flex text-white gap-x-4">
                            <BsFileEarmarkFont className="h-20 w-auto mt-1" />
                            <div className="font-semibold">
                                <div className="text-[40px]"><span id="counter3">{counters.counter3}</span> +</div>
                                <div className="text-lg">TAX RETURNS</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center mx-auto">
                        <div className="flex text-white gap-x-4">
                            <PiUsersThree className="h-20 w-auto mt-1" />
                            <div className="font-semibold">
                                <div className="text-[40px]"><span id="counter4">{counters.counter4}</span> +</div>
                                <div className="text-lg">HAPPY CLIENTS</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export const Testimonial = () => {

    const sliderRef = useRef();
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: false,
        autoplay: true,
        autoplaySpeed: 2000,
        waitForAnimate: false,
        pauseOnHover: true,
        beforeChange: (current, next) => setCurrentSlide(next),
        customPaging: function (i) {
            return (
                <div className={`p-1 rounded-full mt-6 ${currentSlide === i ? 'bg-black' : 'bg-gray-300'}`}>
                </div>
            );
        },
    };

    const clientele = [
        { name: 'Abc Xyz', company: 'ABC Company', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales tellus vitae libero lacinia, quis hendrerit nisl molestie. Cras venenatis, sem vel ullamcorper tempus, arcu massa fringilla lectus, quis ornare risus augue ac felis. Quisque sed ex id arcu efficitur imperdiet at in arcu. Donec interdum leo non felis vestibulum convallis. Pellentesque ex ex, faucibus ac magna quis, porttitor tristique arcu. Suspendisse tempus massa a velit laoreet, sit amet elementum leo scelerisque. Cras vitae est sem.' },
        { name: 'Def hij', company: 'Hij Company', desc: 'Morbi dictum justo laoreet rutrum gravida. Sed eget massa augue. Donec hendrerit sodales orci non laoreet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean in lacus id lectus finibus facilisis. Phasellus a velit tincidunt, ullamcorper dolor vitae, blandit ipsum. Integer laoreet vitae eros at viverra.' },
        { name: 'Mno Qrs', company: 'Xyz Company', desc: 'Praesent a dictum sapien, sit amet semper lectus. Mauris convallis elementum tempus. Maecenas finibus varius diam, eu auctor nulla accumsan non. Sed nec nibh nec sem maximus pharetra sed sed leo. Fusce sed porttitor justo, vel convallis mi. Nulla id pulvinar turpis, vitae tincidunt felis. Sed eu tempor erat. Etiam nisl dui, pellentesque at sapien in, efficitur sodales urna.' }
    ];

    return (
        <div className="px-8 py-14">
            <div className="text-[#5264F3] flex justify-center mx-auto text-center">Testimonials</div>
            <div className="font-semibold text-3xl flex justify-center mx-auto text-center">
                What Our Client Says
            </div>

            <div className="mt-10 pb-6">
                <Slider ref={sliderRef} {...settings}>
                    {clientele.map((i, index) => {
                        return (
                            <div key={index} className="w-full">
                                <div className="italic text-center flex justify-center mx-auto lg:w-[60%]">
                                    {i.desc}
                                </div>
                                <div className="mt-5">
                                    <div className="text-[#5264F3] text-center font-semibold text-xl">
                                        {i.name}
                                    </div>
                                    <div className="text-center">
                                        {i.company}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </div>
    )
}