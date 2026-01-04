"use client";

import "@magiclabs/ui/dist/cjs/index.css";
import BaseLayout from "@/components/base-layout";
import Link from "next/link";
import { motion } from "framer-motion";
import { tinyTools } from "@/lib/data";
import { Circle, Link2 } from "lucide-react";
import { BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function WrldPage() {
  return (
    <BaseLayout title="Wrld.sh">
      <main className="flex flex-col items-center bg-background px-4 sm:px-0 min-h-screen">
        <div className="w-full max-w-3xl py-6 space-y-6">
          {/* Tagline */}
          <blockquote className="text-sm italic text-muted-foreground border-l-2 border-muted-foreground/30 pl-4">
            <p>I work on a collection of random tools that I feel the need for in my spare time. It's all part of a wrld.</p>
          </blockquote>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {tinyTools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className="p-4 rounded-lg border border-solid border-border hover:bg-accent transition-colors duration-300"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-md font-normal text-foreground">
                    {tool.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    {tool.live ? (
                      <span className="inline-flex items-center px-2 py-1 rounded-lg text-xs font-normal bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100">
                        <Circle className="w-1.5 h-1.5 mr-1 fill-current" />
                        Live
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2 py-1 rounded-lg text-xs font-normal bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100">
                        <Circle className="w-1.5 h-1.5 mr-1 fill-current" />
                        Paused
                      </span>
                    )}

                    {tool.live && (
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Link
                              href={tool.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                              <Link2 className="h-3 w-3" />
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="text-xs">Live Demo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    )}

                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Link
                            href={tool.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <BsGithub className="h-3 w-3" />
                          </Link>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="text-xs">Source Code</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  {tool.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </BaseLayout>
  );
}

