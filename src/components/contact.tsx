"use client";

import { Dock, DockIcon } from "@/components/ui/dock";
import React from "react";
import { useSectionInView } from "@/lib/sectiondisplay";
import { useSectionContext } from "@/context/sectioncontext";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import { BorderBeam } from "@/components/ui/border-beam";

export type IconProps = React.HTMLAttributes<SVGElement>;

const Contact: React.FC = () => {
  const { ref } = useSectionInView("Contact");

  return (
    <div id="contact" className="relative flex h-[relative] w-full max-w-[32rem] flex-col items-center justify-center overflow-hidden rounded-lg border mb-28">
      <span className="pointer-events-none whitespace-pre-wrap text-center text-6xl font-semibold leading-none">
        Get in Touch!
      </span>
      <Dock>
        <DockIcon>
            <AnimatedGradientText>
            📧<hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
                <span
                className={`inline animate-gradient bg-gradient-to-r from-[#e16060] 
                via-[#6040ff] to-[#6d40ff] bg-[length:var(--bg-size)_100%] 
                bg-clip-text text-transparent text-md sm:text-sm font-semibold`}
                >
                dineshvasireddy@college.harvard.edu
                </span>
                <BorderBeam size={250} duration={5} delay={12} />
            </AnimatedGradientText>
        </DockIcon>
      </Dock>
    </div>
  );
}

export default Contact;