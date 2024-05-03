// /** @jsxImportSource next/client */
// "use client"
import Image from "next/image";
import { useRef } from "react";
import DotPattern from "@/components/ui/dot-pattern";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import ShimmerButton from "@/components/ui/shimmer-button";
import { BorderBeam } from "@/components/ui/border-beam";
import { Meteors } from "@/components/ui/meteors";
import "@magiclabs/ui/dist/cjs/index.css";
import { ChevronRight } from "lucide-react";
import Intro from "@/components/intropic";
import Projects from "@/components/projectcards";
import { AnimatedBeamDemo } from "@/components/picbeam";
import Experience from "@/components/experience";
import Skills from '@/components/skills'
import Contact from '@/components/contact'

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <AnimatedBeamDemo />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
