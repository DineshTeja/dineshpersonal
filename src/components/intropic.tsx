"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ChevronRight, CloudLightning, Dot } from "lucide-react";
import { BsBoxArrowInUpRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { BsTwitter } from "react-icons/bs";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import dineshImage from '/public/dineshcolorpic.png';
import { Card, CardContent } from "@/components/ui/card"; 
import { AcademicCapIcon } from '@heroicons/react/24/solid';
import { FaYCombinator } from "react-icons/fa6";
import { ChevronDown, ChevronUp } from "lucide-react";
import { features, experiencesData } from "@/lib/data";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import Link from "next/link";

const Intro: React.FC = () => {
  const fullText = "software engineer | believer in unusual spaces.";
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

  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-center p-4 sm:p-6 md:p-10 bg-gray-50">
<div className="flex flex-col md:flex-row w-full max-w-4xl gap-4 md:gap-6">
  {/* <div className="md:w-1/3 flex justify-center md:justify-start mb-4 md:mb-0">
    <Card className="w-40 h-40 sm:w-48 sm:h-48 overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md bg-transparent">
      <CardContent className="p-0 bg-transparent">
        <Image 
          src={dineshImage} 
          alt="Dinesh Pic" 
          className="rounded-lg object-cover w-full h-full"
          width={192}
          height={192}
        />
      </CardContent>
    </Card>
  </div> */}

  <div className="w-full flex flex-col justify-between">
    <div className="space-y-2 sm:space-y-3">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">Dinesh Vasireddy</h1>
        <div className="flex space-x-4">
          {[FaGithubSquare, BsLinkedin, BsTwitter, EnvelopeClosedIcon].map((Icon, index) => (
            <Icon key={index} className="w-5 h-5 text-gray-600 hover:text-blue-600 transition-colors duration-300" />
          ))}
        </div>
      </div>
      <motion.div
        className="text-base sm:text-lg md:text-xl font-medium text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {text}
      </motion.div>
      <div className="flex flex-wrap gap-2 text-xs sm:text-sm md:text-base font-medium text-gray-600">
        <span className="flex items-center bg-gray-100 rounded-full px-2 py-1 transition-colors duration-300 hover:bg-gray-200">
          <AcademicCapIcon className="h-3 w-3 sm:h-4 sm:w-4 mr-1 text-red-800" />
          CS @ Harvard
        </span>
        <span className="flex items-center bg-gray-100 rounded-full px-2 py-1 transition-colors duration-300 hover:bg-gray-200">
          <FaYCombinator className="h-3 w-3 sm:h-4 sm:w-4 mr-1 text-orange-500" />
          Eng @ GovDash
        </span>
        <Link href="https://lightspeedads.netlify.app/" target="_blank">
          <span className="flex items-center bg-gray-100 text-blue-600 rounded-full px-2 py-1 transition-colors duration-300 hover:bg-gray-200">
            <CloudLightning className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
            Check out Lightspeed
            <BsBoxArrowInUpRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
          </span>
        </Link>
      </div>
    </div>
  </div>
</div>
            
      <div className="mt-8 sm:mt-12 w-full max-w-4xl">
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
          I&apos;m a software engineer passionate about building products that matter. 
        </p>
        <p className="text-base sm:text-lg text-gray-700 mt-4 leading-relaxed">
          I&apos;ve built a $70K ARR business in political tech, created Arkansas&apos; largest immigrant resources portal, deployed an e-comm demand forecasting system with millions of users at Walmart, and spent the past few months helping build the best AI government contracting tool.
        </p>
      </div>

      <div className="mt-5 sm:mt-10 w-full max-w-4xl">
  <h2 className="text-2xl sm:text-2xl font-medium mb-3 text-gray-800">work</h2>
  <div>
    {experiencesData.map((job, index) => (
      <Collapsible
        key={index}
        open={openWorkItems.includes(index)}
        onOpenChange={() => toggleWorkItem(index)}
        className="border-b-2 border-gray-400"
      >
        <CollapsibleTrigger className="px-2 flex items-center justify-between w-full cursor-pointer py-4 transition-colors duration-300 hover:bg-gray-100 rounded-lg">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <Image
                src={job.src}
                alt={`${job.company} logo`}
                width={32}
                height={32}
                className="rounded-lg mr-2"
              />
              <h3 className="text-base sm:text-lg font-medium text-gray-800 truncate">{job.company}</h3>
            </div>
            <span className="hidden sm:inline text-sm text-gray-500">{job.title}</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-500">{job.date}</span>
            {/* <AnimatePresence>
              {openWorkItems.includes(index) ? (
                <motion.div
                  key="up"
                  initial={{ opacity: 0, rotate: -180 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 180 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronUp className="h-4 w-4 text-gray-500" />
                </motion.div>
              ) : (
                <motion.div
                  key="down"
                  initial={{ opacity: 0, rotate: 180 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -180 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                </motion.div>
              )}
            </AnimatePresence> */}
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
                      <div className="mt-4 pl-9 pr-4 text-gray-700">
                        <p className="text-sm sm:text-base mb-2 font-medium">{job.location}</p>
                        <p className="text-sm sm:text-base">{job.description}</p>
                      </div>
                    </motion.div>
                  </CollapsibleContent>
                )}
              </AnimatePresence>
            </Collapsible>
          ))}
        </div>
      </div>

      <div className="mt-5 sm:mt-10 w-full max-w-4xl">
  <h2 className="text-2xl sm:text-2xl font-medium mb-3 text-gray-800">builds</h2>
  <div>
    {features.map((feature, index) => (
      <Collapsible
        key={index}
        open={openItems.includes(index)}
        onOpenChange={() => toggleItem(index)}
        className="border-b-2 border-gray-400"
      >
        <CollapsibleTrigger className="px-2 flex items-center justify-between w-full cursor-pointer py-4 transition-colors duration-300 hover:bg-gray-100 rounded-lg">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <Image
                src={feature.src}
                alt={`${feature.name} logo`}
                width={32}
                height={32}
                className="rounded-lg mr-2"
              />
              <h3 className="text-base sm:text-lg font-medium text-gray-800">{feature.name}</h3>
            </div>
            <span className="hidden sm:inline text-sm text-gray-500">{feature.tagline}</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-500">{feature.date}</span>
            {/* <AnimatePresence>
              {openItems.includes(index) ? (
                <motion.div
                  key="up"
                  initial={{ opacity: 0, rotate: -180 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 180 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronUp className="h-4 w-4 text-gray-500" />
                </motion.div>
              ) : (
                <motion.div
                  key="down"
                  initial={{ opacity: 0, rotate: 180 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -180 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                </motion.div>
              )}
            </AnimatePresence> */}
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
                <div className="mt-4 pl-9 pr-4 text-gray-700">
                  <p className="text-sm sm:text-base">{feature.description}</p>
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