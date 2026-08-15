import "./globals.css";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Dinesh Vasireddy",
  description: "Dinesh Vasireddy Personal Portfolio",
  icons: {
    icon: "/gradient.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className="relative overflow-x-hidden bg-background">{children}</body>
    </html>
  );
}
