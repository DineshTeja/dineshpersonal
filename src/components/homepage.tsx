"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FileText, Link2 } from "lucide-react";
import { BsBoxArrowInUpRight, BsRocket, BsGithub, BsGoogle } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import { projectData, experiencesData, tinyTools } from "@/lib/data";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import Link from "next/link";
import { favoriteMovies } from "@/lib/data";
import { cn } from "@/lib/utils";
import _ from "lodash";
import { Circle } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
            <Underline>engineer</Underline>{' '} at {' '}
            <Underline>Harvard</Underline> (on leave).
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
            <Underline>agentic software</Underline> to solve data representation problems across tough domains. Now, I&apos;m working on something new. 
            {/* for{' '}
            <Underline>mechanical engineers</Underline>. */}
          </p>
          <p className="text-md sm:text-lg text-foreground mt-2 leading-relaxed">
            I usually float between{' '}
            <Underline>Boston and SF</Underline>. I also love{' '}
            <Underline>movies</Underline>{' '}and finding{' '}
            <Underline>great food</Underline>.
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
          <h2 className="text-md sm:text-lg font-light mb-4 text-foreground">Wrld.sh</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
            {tinyTools.map((tool, index) => (
              <div key={index} className="p-4 rounded-lg border border-solid border-border hover:bg-accent transition-colors duration-300">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-md font-normal text-foreground">
                    {tool.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    {tool.live ? (
                      <motion.span
                        className="inline-flex items-center px-2 py-1 rounded-lg text-xs font-normal bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <Circle className="w-1.5 h-1.5 mr-1 fill-current" />
                        Live
                      </motion.span>
                    ) : (
                      <motion.span
                        className="inline-flex items-center px-2 py-1 rounded-lg text-xs font-normal bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <Circle className="w-1.5 h-1.5 mr-1 fill-current" />
                        Paused
                      </motion.span>
                    )}

                    {tool.live && (
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Link
                              href={tool.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                              <Link2 className="h-3 w-3" />
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="text-xs">Live Demo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    )}

                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Link
                            href={tool.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <BsGithub className="h-3 w-3" />
                          </Link>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="text-xs">Source Code</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  {tool.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 sm:mt-3 w-full max-w-3xl py-3">
          <h2 className="text-md sm:text-lg font-light mb-4 text-foreground">Favorite Films</h2>
          <div className="w-full">
            <div className="grid grid-cols-8 gap-2 sm:gap-3">
              {favoriteMovies.map((movie, index) => (
                <motion.div
                  key={index}
                  className="relative aspect-[2/3] rounded-lg overflow-hidden group w-full"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Image
                    src={movie.posterUrl}
                    alt={`${movie.title} poster`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 25vw, (max-width: 1024px) 25vw, 25vw"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Text overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-medium text-xs line-clamp-2 mb-0.5">
                      {movie.title}
                    </h3>
                    <div className="flex items-center gap-1 text-[10px] text-gray-200">
                      <span>{movie.year}</span>
                      <span>•</span>
                      <span className="flex items-center">
                        <BsRocket className="w-2.5 h-2.5 mr-0.5" />
                        {movie.rating.toFixed(1)}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
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