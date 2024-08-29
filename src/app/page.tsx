// /** @jsxImportSource next/client */
"use client"

import Image from "next/image";
import { useRef } from "react";
import DotPattern from "@/components/ui/dot-pattern";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { BorderBeam } from "@/components/ui/border-beam";
import { Meteors } from "@/components/ui/meteors";
import "@magiclabs/ui/dist/cjs/index.css";
import { ChevronRight } from "lucide-react";
import Intro from "@/components/intropic";
import Experience from "@/components/experience";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import Header from "@/components/header";

export default function Home() {
  return (
    <>
    <Header>
      <main className="flex flex-col items-center px-4 min-h-screen overflow-scroll">
        <Intro />
      </main>
    </Header>
    </>
  );
}