// "use client";

// import React from "react";
// import SectionHeading from "./section-heading";
// import { skillsData } from "@/lib/data";
// import { useSectionInView } from "@/lib/sectiondisplay";
// import { motion } from "framer-motion";
// import AnimatedGradientText from "@/components/ui/animated-gradient-text";

// const fadeInAnimationVariants = {
//   initial: {
//     opacity: 0,
//     y: 100,
//   },
//   animate: (index: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: 0.05 * index,
//     },
//   }),
// };

// export default function Skills() {
//   const { ref } = useSectionInView("Skills");

//   const aboutSectionVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { duration: 0.8 },
//     },
//   };

//   return (
//     <section
//       id="skills"
//       ref={ref}
//       className="mb-28 max-w-[53rem] scroll-mt-36 text-center overflow-x-hidden"
//     >
//       {/* About Section */}
//       <motion.div
//         className="text-center mt-10 sm:mt-2"
//         variants={aboutSectionVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//       >
//         <p
//           className="mt-6 lg:text-xl animate-gradient bg-gradient-to-r from-[#6f71e2] 
//             via-[#712c8f] to-[#7802ff] bg-[length:var(--bg-size)_100%] 
//             bg-clip-text text-transparent font-medium md:text-lg sm:text-md pb-10
//             leading-relaxed sm:leading-loose sm:px-2"
//         >
//           I am a passionate and curious student of Computer Science and
//           Government at Harvard University, aiming to use my skills in
//           technology solutions, software engineering, and data analytics to
//           create civic software that can improve the lives of people and
//           communities. I have demonstrated internship experience in various
//           companies and non-profit organizations. I&apos;ve also developed
//           projects focusing on civic software, web development, machine
//           learning, and data science. Currently, I am developing software with a
//           primary focus on improving revenue streams and communication channels.
//         </p>
//       </motion.div>

//       <SectionHeading>⚙️ Skills</SectionHeading>
//       <ul className="flex flex-wrap justify-center gap-2 text-sm">
//         {skillsData.map((skill, index) => (
//           <motion.li
//             className="rounded-xl px-2 py-3"
//             key={index}
//             variants={fadeInAnimationVariants}
//             initial="initial"
//             whileInView="animate"
//             viewport={{
//               once: true,
//               margin: "-10% 0px -10% 0px"
//             }}
//             custom={index}
//           >
//             <AnimatedGradientText>
//               <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6f71e2] via-[#712c8f] to-[#7802ff] font-normal">
//                 {skill}
//               </span>
//             </AnimatedGradientText>
//           </motion.li>
//         ))}
//       </ul>
//     </section>
//   );
// }

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
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >

      {/* About Section */}
      <motion.div
        className="text-center mt-10 sm:mt-2"
        variants={aboutSectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <p
          className="mt-6 lg:text-xl animate-gradient bg-gradient-to-r from-[#6f71e2] 
            via-[#712c8f] to-[#7802ff] bg-[length:var(--bg-size)_100%] 
            bg-clip-text text-transparent font-medium md:text-lg sm:text-md pb-10
            leading-relaxed sm:leading-loose sm:px-2"
        >
          I am a passionate and curious student of Computer Science and
          Government at Harvard University, aiming to use my skills in
          technology solutions, software engineering, and data analytics to
          create civic software that can improve the lives of people and
          communities. I have demonstrated internship experience in various
          companies and non-profit organizations. I&apos;ve also developed
          projects focusing on civic software, web development, machine
          learning, and data science. Currently, I am developing software with a
          primary focus on improving revenue streams and communication channels.
        </p>
      </motion.div>

      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-1 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="rounded-xl px-5 py-3"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {/* {skill} */}
              <AnimatedGradientText>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6f71e2] via-[#712c8f] to-[#7802ff] font-normal">
                  {skill}
                </span>
              </AnimatedGradientText>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}