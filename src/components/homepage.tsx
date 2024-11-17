"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CloudLightning } from "lucide-react";
import { BsBoxArrowInUpRight, BsRocket } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import { AcademicCapIcon } from '@heroicons/react/24/solid';
import { FaYCombinator } from "react-icons/fa6";
import { projectData, experiencesData, educationData } from "@/lib/data";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import Link from "next/link";
import { FileText } from "lucide-react";
import { FaFilm } from "react-icons/fa";
import { favoriteMovies } from "@/lib/data";
import { cn } from "@/lib/utils";

import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

const HomePage: React.FC = () => {
  const fullText = "software engineer | building products that matter.";
  const initialText = "software engineer";
  const [text, setText] = useState(initialText);
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [openWorkItems, setOpenWorkItems] = useState<number[]>([]);
  const [openEducationItems, setOpenEducationItems] = useState<number[]>([]);

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

  const toggleEducationItem = (index: number) => {
    setOpenEducationItems(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <>
      <main className={`flex flex-col items-center bg-gray-50 z-10 mx-auto`}>
        <div className="mt-2 sm:mt-3 w-full max-w-3xl">
          {/* <div className="mb-6">
          <motion.div
            className="text-base sm:text-base md:text-lg font-medium text-gray-600 text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {text}
          </motion.div>
          <div className="flex flex-wrap justify-start gap-2 text-xs sm:text-sm font-medium text-gray-600 mt-3">
            <motion.span 
              className="flex items-center bg-gray-100 rounded-full px-2 py-1 transition-colors duration-300 hover:bg-gray-200 text-xs"
              variants={badgeVariants}
              initial="initial"
              whileHover="hover"
            >
              <AcademicCapIcon className="h-3 w-3 mr-1 text-red-800" />
              CS @ Harvard
            </motion.span>
            <Link href="https://govdash.com/" target="_blank">
              <motion.span 
                className="flex items-center bg-gray-100 rounded-full px-2 py-1 transition-colors duration-300 hover:bg-gray-200 text-xs"
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
                className="text-blue-500 flex items-center bg-gray-100 rounded-full px-2 py-1 transition-colors duration-300 hover:bg-gray-200 text-xs"
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
        </div> */}
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            👋 I&apos;m Dinesh.
          </p>
          <p className="text-sm sm:text-base text-gray-700 mt-2 leading-relaxed">
            I&apos;ve built a $70K ARR company in <span className="border-b border-dashed border-gray-400">political tech</span>, created Arkansas&apos; largest  <span className="border-b border-dashed border-gray-400">immigrant resources portal</span>, deployed an e-comm demand forecasting system with millions of users at <span className="border-b border-dashed border-gray-400">Walmart</span>, and spent the past few months helping build the best AI <span className="border-b border-dashed border-gray-400">government contracting</span> tool. Now, I&apos;m bootstrapping and building <span className="border-b border-dashed border-gray-400">AI for democracy</span>.
          </p>
          <p className="text-sm sm:text-base text-gray-700 mt-2 leading-relaxed">
            I&apos;m based in <span className="border-b border-dashed border-gray-400">Boston/NYC</span>. I also like <span className="border-b border-dashed border-gray-400">movies</span> and finding <span className="border-b border-dashed border-gray-400">good food</span>.
          </p>
        </div>

        <div className="mt-6 sm:mt-3 w-full max-w-3xl py-3">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg sm:text-xl font-medium text-gray-800">work</h2>
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <motion.span
                className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <FileText className="w-3 h-3 mr-1" />
                Resume
              </motion.span>
            </Link>
          </div>
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
                          <div className="flex flex-wrap gap-1 mt-3">
                            {job.tags.map((tag, tagIndex) => (
                              <CustomBadge key={tagIndex} className="text-xs">
                                {tag}
                              </CustomBadge>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </CollapsibleContent>
                  )}
                </AnimatePresence>
              </Collapsible>
            ))}
          </div>
        </div>

        <div className="mt-6 sm:mt-3 w-full max-w-3xl py-3">
          <h2 className="text-lg sm:text-xl font-medium mb-2 text-gray-800">builds & contracts</h2>
          <div>
            {projectData.map((project, index) => (
              <Collapsible
                key={index}
                open={openItems.includes(index)}
                onOpenChange={() => toggleItem(index)}
                className={`border-b border-dashed border-gray-300 ${index === 0 ? 'border-t' : ''}`}
              >
                <CollapsibleTrigger className="px-1.5 flex items-center justify-between w-full cursor-pointer py-2 transition-colors duration-300 hover:bg-gray-100 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      <Link href={project.href} target="_blank" rel="noopener noreferrer">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <Image
                            src={project.src}
                            alt={`${project.name} logo`}
                            width={24}
                            height={24}
                            className="rounded-lg mr-1"
                          />
                        </motion.div>
                      </Link>
                      <h3 className="text-sm sm:text-base font-medium text-gray-800">{project.name}</h3>
                    </div>
                    <span className="hidden sm:inline text-xs text-gray-500">{project.tagline}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-500">{project.date}</span>
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
                          <p className="text-xs sm:text-sm mb-2">{project.description}</p>
                          <div className="flex flex-wrap gap-1 mt-3">
                            {project.tags.map((tag, tagIndex) => (
                              <CustomBadge key={tagIndex} className="text-xs">
                                {tag}
                              </CustomBadge>
                            ))}
                            {project.links && project.links.map((link, linkIndex) => (
                              <Link key={linkIndex} href={link.href} target="_blank" rel="noopener noreferrer">
                                <CustomBadge className="text-xs bg-blue-100 hover:bg-blue-200 text-blue-800 flex items-center">
                                  {link.name} <BsBoxArrowInUpRight className="h-3 w-3 ml-1" />
                                </CustomBadge>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </CollapsibleContent>
                  )}
                </AnimatePresence>
              </Collapsible>
            ))}
          </div>
        </div>

        <div className="mt-6 sm:mt-3 w-full max-w-3xl py-3">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg sm:text-xl font-medium text-gray-800">education</h2>
          </div>
          <div>
            {educationData.map((job, index) => (
              <Collapsible
                key={index}
                open={openEducationItems.includes(index)}
                onOpenChange={() => toggleEducationItem(index)}
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
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-500">{job.date}</span>
                  </div>
                </CollapsibleTrigger>
                <AnimatePresence initial={false}>
                  {openEducationItems.includes(index) && (
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

        <div className="mt-6 sm:mt-3 w-full max-w-3xl py-3">
          <h2 className="text-lg sm:text-xl font-medium mb-2 text-gray-800">favorite films</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {favoriteMovies.map((movie, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 rounded-md overflow-hidden w-full"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="p-2 text-xs">
                  <h3 className="font-medium text-gray-800 truncate">{movie.title}</h3>
                  <p className="text-gray-600">{movie.year}</p>
                  <p className="text-gray-600 truncate">{movie.director}</p>
                  <div className="flex items-center mt-1">
                    <FaFilm className="text-red-500 mr-1 w-3 h-3 flex-shrink-0" />
                    <span className="text-gray-700 truncate">{movie.genre}</span>
                  </div>
                  <div className="flex items-center mt-1">
                    <BsRocket className="text-yellow-500 mr-1 w-3 h-3 flex-shrink-0" />
                    <span className="text-gray-700">{movie.rating.toFixed(1)}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

const CustomBadge: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <span className={cn(
    "inline-block bg-gray-100 rounded px-2 py-1 text-xs font-medium text-gray-800",
    "transition-colors duration-200 ease-in-out",
    "hover:bg-gray-200",
    className
  )}>
    {children}
  </span>
);

export default HomePage;