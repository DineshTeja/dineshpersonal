'use client';

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/sectiondisplay";
import { useSectionContext } from "@/context/sectioncontext";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import { ChevronRight } from "lucide-react";
import { motion } from 'framer-motion';
import { BorderBeam } from "@/components/ui/border-beam";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.25);
  const { setActiveSection, setTimeOfLastClick } = useSectionContext();

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main id="experience" ref={ref} className="scroll-mt-28 mb-10 sm:mb-40 overflow-x-hidden">
      <SectionHeading>💼 Work </SectionHeading>
      
      <AnimatedGradientText>
        🚀 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
        <span
          className={`inline animate-gradient bg-gradient-to-r from-[#ffaa40] 
          via-[#9c40ff] to-[#4060ff] bg-[length:var(--bg-size)_100%] 
          bg-clip-text text-transparent font-semibold`}
        >
          Building
        </span>
      </AnimatedGradientText>
      

      <VerticalTimeline lineColor="purple">
        {experiencesData.map((item, index) => (
            <React.Fragment key={index}>
                <VerticalTimelineElement
                    visible={true}
                    contentStyle={{
                        background: "white",
                        boxShadow: "none",
                        textAlign: "left",
                        padding: "1.3rem 2rem",
                        borderRadius: "8px",
                    }}
                    contentArrowStyle={{
                        borderRight: "0.4rem solid #9ca3af"
                    }}
                    date={item.date}
                    icon={item.icon}
                    iconStyle={{
                        background: "#ffffff", 
                        color: "#6a11cb", 
                        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.15)",
                        border: "2px solid #6a11cb", 
                    }}
                >
                    <h3 className="font-semibold capitalize">{item.title}</h3>
                    <p className="font-normal !mt-0">{item.location}</p>
                    <p className="!mt-1 !font-normal text-gray-700">
                    {item.description}
                    </p>
                    <BorderBeam size={250} duration={12} delay={9} />
                </VerticalTimelineElement>
            </React.Fragment>
        ))}
      </VerticalTimeline>
    </main>
  );
}