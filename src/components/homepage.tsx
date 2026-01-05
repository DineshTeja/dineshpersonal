"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FileText, ArrowRight } from "lucide-react";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import { projectData, experiencesData } from "@/lib/data";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import Link from "next/link";
import { cn } from "@/lib/utils";

const Underline: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="border-b border-dashed border-border">{children}</span>
);

const HomePage: React.FC = () => {
  const [openWorkItems, setOpenWorkItems] = useState<number[]>([]);
  const [openProjectsItems, setOpenProjectsItems] = useState<number[]>([]);
  const [openEducationItems, setOpenEducationItems] = useState<number[]>([]);
  const [showAllWork, setShowAllWork] = useState(false);
  const [showAllBuilds, setShowAllBuilds] = useState(false);

  const toggleProjectsItem = (index: number) => {
    setOpenProjectsItems(prev =>
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
      <main className="flex flex-col items-center bg-background z-10 mx-auto">
        <div className="font-light mt-2 sm:mt-3 w-full max-w-3xl">
          <p className="text-md sm:text-lg text-foreground leading-relaxed">
            👋 I&apos;m Dinesh. I&apos;m currently an{' '}
            {/* <Underline>student</Underline>{' '}and{' '} */}
            <Underline>engineer</Underline>{' '} on leave from {' '}
            <Underline>Harvard</Underline>.
          </p>
          <p className="text-md sm:text-lg text-foreground mt-2 leading-relaxed">
            I previously built a company in{' '}
            <Underline>political software</Underline>, solved hardware and automation problems at{' '}
            <Underline>Walmart</Underline>, helped build the best AI{' '}
            <Underline>government contracting</Underline>{' '}tool, and worked on frontier voice AI models. 
            I&apos;m also a{' '}<Underline>Z-Fellow</Underline> and{' '}<Underline>Human Capital Fellow</Underline>.
            {/* <motion.span
              className="inline-flex items-baseline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Image src="/zfellows.png" alt="Z Fellows" width={16} height={16} className="mr-1" />
              <Underline>Z-Fellow</Underline>
            </motion.span>
            , 
            {' '}
            <motion.span
              className="inline-flex items-baseline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Image src="/soma.png" alt="Soma" width={16} height={16} className="mr-1" />
              <Underline>Soma Scholar</Underline>
            </motion.span>,
            and{' '}
            <motion.span
              className="inline-flex items-baseline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Image src="/humancapital.png" alt="Human Capital" width={16} height={16} className="mr-1 dark:bg-white dark:rounded-sm" />
              <Underline>Human Capital Fellow</Underline>
            </motion.span>. */}
          </p>
          <p className="text-md sm:text-lg text-foreground mt-2 leading-relaxed">
            Lately, I&apos;ve mostly been focused on building {' '}
            <Underline>agentic software</Underline> to solve tough, domain-specific data representation problems. Now, I&apos;m working on something new for mechanical engineers. 
            {/* for{' '}
            <Underline>mechanical engineers</Underline>. */}
          </p>
          <p className="text-md sm:text-lg text-foreground mt-2 leading-relaxed">
            I usually float between{' '}
            <Underline>Boston and SF</Underline>. I also love{' '}
            <Underline>movies</Underline> and humanity's greatest stories.
          </p>
        </div>

        <div className="mt-6 sm:mt-3 w-full max-w-3xl py-3">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-md sm:text-lg font-light text-foreground">Work</h2>

            <div className="flex items-center gap-2">
              <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <motion.span
                  className="inline-flex items-center px-2 py-1 rounded-lg text-xs font-normal bg-secondary text-foreground hover:bg-accent transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <FileText className="w-3 h-3 mr-1" />
                  Resume
                </motion.span>
              </Link>
              <motion.button
                onClick={() => setShowAllWork(!showAllWork)}
                className="inline-flex items-center px-2 py-1 rounded-lg text-xs font-normal bg-secondary text-foreground hover:bg-accent transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {showAllWork ? 'See less' : 'See more'}
              </motion.button>
            </div>
          </div>
          <div>
            {experiencesData.slice(0, showAllWork ? experiencesData.length : 5).map((job, index) => (
              <Collapsible
                key={index}
                open={openWorkItems.includes(index)}
                onOpenChange={() => toggleWorkItem(index)}
                className={`border-b border-dashed border-border ${index === 0 ? 'border-t' : ''}`}
              >
                <CollapsibleTrigger className="px-1.5 flex items-center justify-between w-full cursor-pointer py-2 transition-colors duration-300 hover:bg-accent rounded-lg">
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
                      <h3 className="text-md sm:text-base font-normal text-foreground truncate">{job.company}</h3>
                    </div>
                    <span className="text-sm text-muted-foreground">{job.title}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-muted-foreground">{job.date}</span>
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
                        <div className="pl-7 pr-3 py-3 text-foreground">
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
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-md sm:text-lg font-light text-foreground">Builds</h2>
            <motion.button
              onClick={() => setShowAllBuilds(!showAllBuilds)}
              className="inline-flex items-center px-2 py-1 rounded-lg text-xs font-normal bg-secondary text-foreground hover:bg-accent transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {showAllBuilds ? 'See less' : 'See more'}
            </motion.button>
          </div>
          <div>
            {projectData.slice(0, showAllBuilds ? projectData.length : 5).map((project, index) => (
              <Collapsible
                key={index}
                open={openProjectsItems.includes(index)}
                onOpenChange={() => toggleProjectsItem(index)}
                className={`border-b border-dashed border-border ${index === 0 ? 'border-t' : ''}`}
              >
                <CollapsibleTrigger className="px-1.5 flex items-center justify-between w-full cursor-pointer py-2 transition-colors duration-300 hover:bg-accent rounded-lg">
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
                      <h3 className="text-md sm:text-base font-normal text-foreground">{project.name}</h3>
                    </div>
                    <span className="hidden sm:inline text-sm text-muted-foreground">
                      {project.tagline.charAt(0).toUpperCase() + project.tagline.slice(1)}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-muted-foreground">{project.date}</span>
                  </div>
                </CollapsibleTrigger>
                <AnimatePresence initial={false}>
                  {openProjectsItems.includes(index) && (
                    <CollapsibleContent forceMount>
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pl-7 pr-3 py-3 text-foreground">
                          <p className="text-xs font-medium sm:text-sm mb-1 sm:hidden">
                            {project.tagline.charAt(0).toUpperCase() + project.tagline.slice(1)}
                          </p>
                          <p className="text-xs sm:text-sm">{project.description}</p>
                          <div className="flex flex-wrap gap-1 mt-3">
                            {project.tags.map((tag, tagIndex) => (
                              <CustomBadge key={tagIndex} className="text-xs">
                                {tag}
                              </CustomBadge>
                            ))}
                            {project.links && project.links.map((link, linkIndex) => (
                              <Link key={linkIndex} href={link.href} target="_blank" rel="noopener noreferrer">
                                <CustomBadge className="text-xs bg-blue-100 dark:bg-blue-900 hover:bg-blue-200 dark:hover:bg-blue-800 text-blue-800 dark:text-blue-100 flex items-center">
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
          <h2 className="text-md sm:text-lg font-light mb-4 text-foreground">
            <Link 
              href="https://en.wikipedia.org/wiki/Theory-theory" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline decoration-dashed decoration-1 underline-offset-2 hover:text-gray-400 transition-colors"
            >
              Theory-theory
            </Link>
          </h2>
          <div className="grid grid-cols-2 gap-3">
            <Link href="/wrld">
              <motion.div
                className="group relative p-5 rounded-xl border border-border bg-secondary/30 hover:bg-accent/50 transition-all duration-300 overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-medium text-foreground mb-1">Wrld.sh</h3>
                  </div>
                  <div className="text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all duration-300">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </motion.div>
            </Link>
            <Link href="/movies">
              <motion.div
                className="group relative p-5 rounded-xl border border-border bg-secondary/30 hover:bg-accent/50 transition-all duration-300 overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-medium text-foreground mb-1">❤️ Films</h3>
                  </div>
                  <div className="text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all duration-300">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

const CustomBadge: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <span className={cn(
    "inline-flex items-center bg-secondary rounded px-2 py-1 text-xs font-medium text-foreground",
    "transition-colors duration-200 ease-in-out",
    "hover:bg-accent",
    className
  )}>
    {children}
  </span>
);

export default HomePage;