"use client";

import React from "react";
import { motion } from "framer-motion";
import { reftbl } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useSectionContext } from "@/context/sectioncontext";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { BorderBeam } from "@/components/ui/border-beam";

const Header: React.FC = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useSectionContext();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <style>
        {`
                @media (max-width: 500px) {
                    .header-mobile-hidden {
                        display: block;
                    }
                }
                `}
      </style>
      <header className="z-[999] relative header-mobile-hidden overflow-x-hidden">
        <motion.div
          className="fixed top-0 left-1/2 h-[3.5rem] w-full rounded-none border
                border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg
                shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] 
                sm:rounded-full"
          initial={{ y: -100, x: "-50%", opacity: 0 }}
          animate={{ y: 0, x: "-50%", opacity: 1 }}
        ></motion.div>
        <nav className="md:mt-1.5 lg:mt-1.5 flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
          <button
            className="sm:hidden bg-gray-100 rounded-md w-60 flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <FaBars className="mr-2" />
            <p className="text-blue-950 my-1 font-semibold">Welcome! Explore</p>
          </button>
          <ul
            className={`absolute top-12 left-0 w-full bg-white shadow-md rounded-md transition-transform transform ${
              isMobileMenuOpen ? "scale-y-100" : "scale-y-0"
            } origin-top sm:relative sm:top-0 sm:left-0 sm:w-auto sm:bg-transparent sm:shadow-none sm:scale-y-100 sm:flex sm:items-center sm:gap-1`}
          >
            {reftbl.map((ref) => (
              <li
                className="h-3/4 flex items-center justify-center relative px-4 py-2 w-full sm:w-auto min-w-[200px] sm:min-w-0"
                key={ref.ref}
              >
                <Link
                  className={clsx(
                    "flex w-full items-center justify-center hover:text-gray-950 transition whitespace-nowrap text-ellipsis",
                    {
                      "text-gray-950 bg-gray-100 rounded-full":
                        activeSection === ref.name,
                    }
                  )}
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
