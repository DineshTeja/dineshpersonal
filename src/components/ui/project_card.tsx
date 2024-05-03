"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  url,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const handleClick = () => {
    window.open(url, "_blank");
  };

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0 w-full flex flex-row"
    >
      <motion.a onClick={handleClick} className="cursor-pointer flex flex-row w-full">
        <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-relative hover:bg-gray-200 transition">
          <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-2 leading-relaxed text-gray-700 pb-3">
              {description}
            </p>
            <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
                <li
                    style={{
                    background: 'linear-gradient(to right, #FF6666, indigo)'
                    }}
                    className="px-3 py-1 text-[0.7rem] font-medium uppercase tracking-wider text-white rounded-lg"
                    key={index}
                >
                    {tag}
                </li>
            ))}
            </ul>
          </div>

          <Image
            src={imageUrl}
            alt="random project"
            quality={95}
            objectFit="cover"
            className="absolute hidden object-cover sm:block top-0 bottom-0 -right-40 w-[28.25rem] h-full shadow-2xl
                        transition 
                        group-hover:scale-[1.04]
                        group-hover:translate-y-3
                        "
          />
        </section>
      </motion.a>
    </motion.div>
  );
}
