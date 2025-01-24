import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
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
      transform: 'scale(0.9)',
      transformOrigin: 'top left',
      width: '111.11%',  
      height: '111.11%'
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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}