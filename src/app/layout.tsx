import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hirr.in",
  description: "Job Portal",
};

export default function RootLayout({ children, authModal }: { children: React.ReactNode; authModal: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=clash-display@1&display=swap" rel="stylesheet"></link>
      </head>
      <body className={`${inter.className}`}>
      <Providers>
        <Navbar></Navbar>
        {authModal}
        {children}
        <Footer></Footer>
      </Providers>
      </body>
    </html>
  );
}
