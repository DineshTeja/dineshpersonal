"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { features, projectsData } from "@/lib/data";
import Project from "@/components/ui/project_card";
import { useSectionInView } from "@/lib/sectiondisplay";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.25);

  return (
    <section
      ref={ref}
      id="projects"
      className="scroll-mt-28 mb-20 overflow-x-hidden px-4"
    >
      <SectionHeading>🔧 Cool Projects</SectionHeading>
      <BentoGrid className="lg:grid-rows-3">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </section>
  );
}
