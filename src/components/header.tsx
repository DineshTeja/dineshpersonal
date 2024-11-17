"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { BsBoxArrowInUpRight, BsLinkedin } from "react-icons/bs";
import { useState, useEffect } from "react";
import { AcademicCapIcon } from '@heroicons/react/24/solid';
import { FaYCombinator } from "react-icons/fa";
import { CloudLightning } from "lucide-react";

const badgeVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.05, transition: { type: "spring", stiffness: 400, damping: 10 } }
};

const socialLinks = [
  { Icon: FaGithubSquare, href: "https://github.com/DineshTeja" },
  { Icon: BsLinkedin, href: "https://www.linkedin.com/in/dinesh-vasireddy/" },
  { Icon: FaXTwitter, href: "https://twitter.com/dineshtva" },
  { Icon: EnvelopeClosedIcon, href: "mailto:dineshvasireddy@college.harvard.edu" },
];

const iconVariants = {
  initial: { scale: 0, opacity: 0 },
  animate: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  }),
  hover: { scale: 1.2, transition: { duration: 0.2 } },
};

import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function Header({ children }: { children: React.ReactNode }) {
  const fullText = "building products that matter.";
  const initialText = "";
  const [text, setText] = useState(initialText);

  useEffect(() => {
    const interval = setInterval(() => {
      setText((currentText) => {
        if (currentText.length < fullText.length) {
          return fullText.substring(0, currentText.length + 1);
        } else {
          clearInterval(interval);
          return currentText;
        }
      });
    }, 60);

    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <div className={`flex flex-col min-h-screen ${montserrat.className}`}>
      <header className="fixed top-0 w-full bg-gray-50/90 backdrop-blur-sm z-50 pt-8 px-0">
        <div className="max-w-3xl mx-auto px-0 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Dinesh Vasireddy
            </h1>
            <div className="flex space-x-2 sm:space-x-3">
              {socialLinks.map(({ Icon, href }, index) => (
                <motion.div
                  key={index}
                  variants={iconVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  custom={index}
                >
                  <Link href={href} target="_blank" rel="noopener noreferrer">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 hover:text-blue-600 transition-colors duration-300" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow mt-[90px]">
        {children}
      </main>

      <footer className="mt-[50px]">
        <div className="max-w-3xl mx-auto px-0 py-4">
          <div className="flex justify-center items-center">
            <p className="text-sm text-gray-600 text-center">© 2024 Dinesh Vasireddy</p>
          </div>
        </div>
      </footer>
    </div>
  );
}