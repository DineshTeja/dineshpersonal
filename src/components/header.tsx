"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { reftbl } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useSectionContext } from "@/context/sectioncontext";
import { useState } from 'react';

const Header: React.FC = () => {
    const { activeSection, setActiveSection, setTimeOfLastClick } = useSectionContext();

    return (
        <>
            <style>
                {`
                @media (max-width: 500px) {
                    .header-mobile-hidden {
                        display: none;
                    }
                }
                `}
            </style>
            <header className="z-[999] relative header-mobile-hidden overflow-x-hidden">
                <motion.div className="fixed top-0 left-1/2 h-[3.5rem] w-full rounded-none border
                border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg
                shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] 
                sm:rounded-full"
                    initial={{ y: -100, x: "-50%", opacity: 0 }}
                    animate={{ y: 0, x: "-50%", opacity: 1 }}
                ></motion.div>
                <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
                    <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5 px-4 py-2">
                        {reftbl.map((ref) => (
                            <li 
                                className="h-3/4 flex items-center justify-center relative px-2 py-2"
                                key={ref.ref}
                            >
                                <Link 
                                    className={clsx("flex w-full items-center justify-center hover:text-gray-950 transition", {
                                        "text-gray-950 bg-gray-100 rounded-full": activeSection === ref.name,
                                    })}
                                    href={ref.ref}
                                    onClick={() => {
                                        setActiveSection(ref.name);
                                        setTimeOfLastClick(Date.now());
                                    }}
                                >
                                    {ref.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Header;