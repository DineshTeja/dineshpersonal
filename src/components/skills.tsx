"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/sectiondisplay";
import { motion } from "framer-motion";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  const aboutSectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-20"
    >

      <SectionHeading>⚙️ Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="rounded-xl px-2 py-3"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <AnimatedGradientText>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6f71e2] via-[#712c8f] to-[#7802ff] font-normal sm:font-small">
                {skill}
              </span>
            </AnimatedGradientText>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
