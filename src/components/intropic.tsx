// /** @jsxImportSource next/client */
"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import DotPattern from "@/components/ui/dot-pattern";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { BorderBeam } from "@/components/ui/border-beam";
import { Meteors } from "@/components/ui/meteors";
import "@magiclabs/ui/dist/cjs/index.css";
import { ChevronRight } from "lucide-react";
import { useSectionInView } from "@/lib/sectiondisplay";
import { useSectionContext } from "@/context/sectioncontext";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { motion } from "framer-motion";
import ResumeDialog from "@/components/ui/resumedialog";

const Intro: React.FC = () => {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useSectionContext();

  const fullText = "software engineer | AI & govtech.";
  const initialText = "software engineer";
  const [text, setText] = useState(initialText);

  const [isResumeDialogOpen, setIsResumeDialogOpen] = useState(false);

  useEffect(() => {
    const startTypingIndex = initialText.length;
    const interval = setInterval(() => {
      setText((currentText) => {
        if (currentText.length < fullText.length) {
          return fullText.substring(0, currentText.length + 1);
        } else {
          clearInterval(interval);
          return currentText;
        }
      });
    }, 60); // Adjust typing speed by changing the delay here

    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <main className="flex w-full min-h-relative flex-col items-center gap-12 pb-5 overflow-x-hidden">
      <ResumeDialog
        isOpen={isResumeDialogOpen}
        onClose={() => setIsResumeDialogOpen(false)}
      />
      <AnimatedGradientText onClick={() => setIsResumeDialogOpen(true)}>
        🎉 <hr id="home" className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
        <span
          className={`inline animate-gradient bg-gradient-to-r from-[#ffaa40] 
            via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] 
            bg-clip-text text-transparent font-semibold`}
        >
          Resume
        </span>
        <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        <BorderBeam size={250} duration={5} delay={4} />
      </AnimatedGradientText>

      {/* Hero card */}
      <div className="flex flex-col w-full gap-8 items-center max-w-5xl p-4 h-full">
        <Meteors number={30} />
        {/* Title */}
        <div className="text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-90% to-indigo-700 text-center p-2">
          Dinesh Vasireddy 🚀
        </div>
        {/* Description */}
        <motion.div
          className="text-4xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-90% to-indigo-500 text-center p-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {text}
        </motion.div>
        <div className="text-2xl font-medium text-slate-500 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-90% to-indigo-700 text-center">
          Computer Science and Government @ Harvard University
        </div>
      </div>

      {/* Social Links */}
      <div
        className="grid grid-cols-3 sm:pb-1 gap-6 w-full max-w-md mx-auto"
        style={{ gridTemplateColumns: "1fr 1fr 1fr" }}
      >
        <AnimatedGradientText
          onClick={() => window.open("https://github.com/DineshTeja", "_blank")}
        >
          <FaGithubSquare className="sm:w-6 sm:h-6" />{" "}
          <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300 hidden sm:block" />{" "}
          <span
            className={`hidden sm:inline animate-gradient bg-gradient-to-r from-[#6f71e2] 
          via-[#712c8f] to-[#7802ff] bg-[length:var(--bg-size)_100%] 
          bg-clip-text text-transparent font-semibold`}
          >
            Github
          </span>
          <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5 hidden sm:block" />
        </AnimatedGradientText>

        <AnimatedGradientText
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/dinesh-vasireddy/",
              "_blank"
            )
          }
        >
          <BsLinkedin className="sm:w-6 sm:h-6" />{" "}
          <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300 hidden sm:block" />{" "}
          <span
            className={`hidden sm:inline animate-gradient bg-gradient-to-r from-[#40a3ff] 
          via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] 
          bg-clip-text text-transparent font-semibold`}
          >
            Linkedin
          </span>
          <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5 hidden sm:block" />
        </AnimatedGradientText>

        <AnimatedGradientText
          onClick={() =>
            (window.location.href =
              "mailto:dineshvasireddy@college.harvard.edu")
          }
        >
          <span role="img" aria-label="Email" className="sm:w-6 sm:h-6">
            📧
          </span>
          <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300 hidden sm:block" />{" "}
          <span
            className={`hidden sm:inline animate-gradient bg-gradient-to-r from-[#5340ff] 
          via-[#9c40ff] to-[#ff4040] bg-[length:var(--bg-size)_100%] 
          bg-clip-text text-transparent font-semibold`}
          >
            Email
          </span>
        </AnimatedGradientText>
      </div>
    </main>
  );
};

export default Intro;
