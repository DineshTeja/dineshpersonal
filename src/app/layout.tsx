import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer";
import DotPattern from "@/components/ui/dot-pattern";
import Skills from "@/components/skills";
import Meteors from "@/components/ui/meteors";
import { ThemeProvider } from "@/components/theme-provider";
const inter = Inter({ subsets: ["latin"] });
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Dinesh Vasireddy",
  description: "Dinesh Vasireddy Personal Portfolio",
  icons: {
    icon: '/gradient.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html style={{
      transform: 'scale(0.8)',
      transformOrigin: 'top left',
      width: '125%',
      height: '125%'
    }} lang="en" className="!scroll-smooth overflow-x-hidden" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=0.6" />
      </head>
      <body className={`${montserrat.className} bg-background relative overflow-x-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* <div
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
          </div> */}
          {/* <Header /> */}
          {children}
          {/* <Footer /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}