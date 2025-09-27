import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/core/Header";
import Footer from "@/components/core/Footer";
import { Source_Sans_3 as Sans } from "next/font/google";
import ReduxProvider from "@/redux/provider";
import { Toaster } from "@/components/ui/sonner";
import ReactQueryProvider from "@/lib/ReactQueryProvider";

const fontSans = Sans({
  variable: "--font-Source_Sans_3",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Baahir Chalo - An AI powered Scholarship Finder",
  description: "Find Scholarships With AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontSans.className} antialiased`}>
        {/* <ReduxProvider> */}
        <ReactQueryProvider>
          <Header />
          {children}
          <Footer />
        </ReactQueryProvider>
        {/* </ReduxProvider> */}
        <Toaster />
      </body>
    </html>
  );
}
