"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "@/components/ui/project_card";
import { useSectionInView } from "@/lib/sectiondisplay";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.25);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-20 overflow-x-hidden">
      <SectionHeading>🔧 Cool Projects</SectionHeading>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-4 px-10">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
