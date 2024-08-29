"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ChevronRight, CloudLightning, Dot, Rabbit } from "lucide-react";
import { BsBoxArrowInUpRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { BsTwitter } from "react-icons/bs";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import dineshImage from '/public/dineshcolorpic.png';
import { Card, CardContent } from "@/components/ui/card"; 
import { AcademicCapIcon } from '@heroicons/react/24/solid';
import { FaX, FaXTwitter, FaYCombinator } from "react-icons/fa6";
import { ChevronDown, ChevronUp } from "lucide-react";
import { features, experiencesData } from "@/lib/data";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import Link from "next/link";

const badgeVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.05, transition: { type: "spring", stiffness: 400, damping: 10 } }
};

import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

const Intro: React.FC = () => {
  const fullText = "software engineer | building products that matter.";
  const initialText = "software engineer";
  const [text, setText] = useState(initialText);
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [openWorkItems, setOpenWorkItems] = useState<number[]>([]);

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

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const toggleWorkItem = (index: number) => {
    setOpenWorkItems(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const socialLinks = [
    { Icon: FaGithubSquare, href: "https://github.com/DineshTeja" },
    { Icon: BsLinkedin, href: "https://www.linkedin.com/in/dinesh-vasireddy/" },
    { Icon: FaXTwitter, href: "https://twitter.com/dineshatypical" },
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

  return (
    <main className={`flex flex-col items-center bg-gray-50 ${montserrat.className}`}>
      <div className="sticky top-0 z-10 w-full bg-gray-50/80 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto px-3 sm:px-4 md:px-6 pt-8">
          <div className="flex flex-col md:flex-row w-full gap-3 md:gap-4">
            <div className="w-full flex flex-col justify-between">
              <div className="space-y-1 sm:space-y-2">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 sm:gap-2">
                  <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold text-gray-800">Dinesh Vasireddy</h1>
                  <div className="flex space-x-3">
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
                          <Icon className="w-4 h-4 text-gray-600 hover:text-blue-600 transition-colors duration-300" />
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <motion.div
                  className="text-sm sm:text-base md:text-lg font-medium text-gray-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {text}
                </motion.div>
                <div className="flex flex-wrap gap-1 text-xs sm:text-sm font-medium text-gray-600">
              <motion.span 
                  className="flex items-center bg-gray-100 rounded-full px-1.5 py-0.5 transition-colors duration-300 hover:bg-gray-200 text-xs"
                  variants={badgeVariants}
                initial="initial"
                whileHover="hover"
              >
                <AcademicCapIcon className="h-3 w-3 mr-1 text-red-800" />
                CS @ Harvard
              </motion.span>
              <Link href="https://govdash.com/" target="_blank">
                <motion.span 
                  className="flex items-center bg-gray-100 rounded-full px-1.5 py-0.5 transition-colors duration-300 hover:bg-gray-200 text-xs"
                  variants={badgeVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  <FaYCombinator className="h-3 w-3 mr-1 text-orange-500" />
                  Eng @ GovDash
                </motion.span>
              </Link>
              <Link href="https://lightspeedads.netlify.app/" target="_blank">
                <motion.span 
                  className="text-blue-500 flex items-center bg-gray-100 rounded-full px-1.5 py-0.5 transition-colors duration-300 hover:bg-gray-200 text-xs"
                  variants={badgeVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  <CloudLightning className="h-3 w-3 mr-1" />
                  Check out Lightspeed
                  <BsBoxArrowInUpRight className="h-3 w-3 ml-1" />
                </motion.span>
              </Link>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 sm:mt-6 w-full max-w-3xl px-3 sm:px-4 md:px-6">
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          👋 I&apos;m Dinesh.
        </p>
        <p className="text-sm sm:text-base text-gray-700 mt-2 leading-relaxed">
          I&apos;ve built a $70K ARR company in <span className="border-b border-dashed border-gray-400">political tech</span>, created Arkansas&apos; largest  <span className="border-b border-dashed border-gray-400">immigrant resources portal</span>, deployed an e-comm demand forecasting system with millions of users at <span className="border-b border-dashed border-gray-400">Walmart</span>, and spent the past few months helping build the best AI <span className="border-b border-dashed border-gray-400">government contracting</span> tool.
        </p>
        <p className="text-sm sm:text-base text-gray-700 mt-2 leading-relaxed">
          I&apos;m based in <span className="border-b border-dashed border-gray-400">Boston/NYC</span>. I also like <span className="border-b border-dashed border-gray-400">movies</span> and finding <span className="border-b border-dashed border-gray-400">good eats</span>.
        </p>
      </div>

      <div className="mt-4 sm:mt-6 w-full max-w-3xl px-3 sm:px-4 md:px-6">
        <h2 className="text-lg sm:text-xl font-medium mb-2 text-gray-800">work</h2>
        <div>
          {experiencesData.map((job, index) => (
            <Collapsible
              key={index}
              open={openWorkItems.includes(index)}
              onOpenChange={() => toggleWorkItem(index)}
              className={`border-b border-dashed border-gray-300 ${index === 0 ? 'border-t' : ''}`}
            >
              <CollapsibleTrigger className="px-1.5 flex items-center justify-between w-full cursor-pointer py-2 transition-colors duration-300 hover:bg-gray-100 rounded-lg">
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                  <Link href={job.href} target="_blank" rel="noopener noreferrer">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <Image
                            src={job.src}
                            alt={`${job.company} logo`}
                            width={24}
                            height={24}
                            className="rounded-lg mr-1"
                          />
                        </motion.div>
                    </Link>
                    <h3 className="text-sm sm:text-base font-medium text-gray-800 truncate">{job.company}</h3>
                  </div>
                  <span className="hidden sm:inline text-xs text-gray-500">{job.title}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-gray-500">{job.date}</span>
                </div>
              </CollapsibleTrigger>
              <AnimatePresence initial={false}>
                {openWorkItems.includes(index) && (
                  <CollapsibleContent forceMount>
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pl-7 pr-3 py-3 text-gray-700">
                        <p className="text-xs sm:text-sm mb-1 font-medium">{job.location}</p>
                        <p className="text-xs sm:text-sm">{job.description}</p>
                      </div>
                    </motion.div>
                  </CollapsibleContent>
                )}
              </AnimatePresence>
            </Collapsible>
          ))}
        </div>
      </div>

      <div className="sm:mt-6 w-full max-w-3xl px-3 sm:px-4 md:px-6 pt-3">
        <h2 className="text-lg sm:text-xl font-medium mb-2 text-gray-800">builds & contracts</h2>
        <div>
          {features.map((feature, index) => (
            <Collapsible
              key={index}
              open={openItems.includes(index)}
              onOpenChange={() => toggleItem(index)}
              className={`border-b border-dashed border-gray-300 ${index === 0 ? 'border-t' : ''}`}
            >
              <CollapsibleTrigger className="px-1.5 flex items-center justify-between w-full cursor-pointer py-2 transition-colors duration-300 hover:bg-gray-100 rounded-lg">
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    <Link href={feature.href} target="_blank" rel="noopener noreferrer">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <Image
                            src={feature.src}
                            alt={`${feature.name} logo`}
                            width={24}
                            height={24}
                            className="rounded-lg mr-1"
                          />
                        </motion.div>
                    </Link>
                    <h3 className="text-sm sm:text-base font-medium text-gray-800">{feature.name}</h3>
                  </div>
                  <span className="hidden sm:inline text-xs text-gray-500">{feature.tagline}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-gray-500">{feature.date}</span>
                </div>
              </CollapsibleTrigger>
              <AnimatePresence initial={false}>
                {openItems.includes(index) && (
                  <CollapsibleContent forceMount>
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pl-7 pr-3 py-3 text-gray-700">
                        <p className="text-xs sm:text-sm">{feature.description}</p>
                      </div>
                    </motion.div>
                  </CollapsibleContent>
                )}
              </AnimatePresence>
            </Collapsible>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Intro;