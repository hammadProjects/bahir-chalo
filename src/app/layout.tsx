"use client";
// import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/core/Header";
import Footer from "@/components/core/Footer";
import { usePathname } from "next/navigation";
import { publicRoutes } from "@/lib/data";
import { Source_Sans_3 as Sans } from "next/font/google";

const fontSans = Sans({
  variable: "--font-Source_Sans_3",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Baahir Chalo - An AI powered Scholarship Finder",
//   description: "Find Scholarships With AI",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={`${fontSans.className} antialiased`}>
        {!publicRoutes.includes(pathname) && <Header />}
        {children}
        {!publicRoutes.includes(pathname) && <Footer />}
      </body>
    </html>
  );
}
