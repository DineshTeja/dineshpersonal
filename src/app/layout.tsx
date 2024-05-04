import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { SectionContextProvider } from "@/context/sectioncontext";
import DotPattern from "@/components/ui/dot-pattern";
import Skills from "@/components/skills";
import Meteors from "@/components/ui/meteors";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dinesh Vasireddy",
  description: "Dinesh Vasireddy Personal Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth overflow-x-hidden">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 overflow-x-hidden`}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1,
          }}
        >
          <Meteors number={100} />
          <DotPattern
            className={
              "[mask-image:radial-gradient(2250px_circle_at_center,white,transparent)]"
            }
          />
        </div>
        <SectionContextProvider>
          <Header />
          {children}
          <Footer />
        </SectionContextProvider>
      </body>
    </html>
  );
}
