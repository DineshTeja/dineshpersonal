// /** @jsxImportSource next/client */
"use client"

import "@magiclabs/ui/dist/cjs/index.css";
import HomePage from "@/components/homepage";
import BaseLayout from "@/components/base-layout";

export default function Home() {
  return (
    <>
      <BaseLayout>
        <main className="flex flex-col items-center bg-background px-4 sm:px-0 min-h-screen">
          <HomePage />
        </main>
      </BaseLayout>
    </>
  );
}