"use client";
import { publicRoutes } from "@/lib/data";
import { usePathname } from "next/navigation";
import React from "react";

const Footer = () => {
  const pathname = usePathname();

  return (
    !publicRoutes.includes(pathname) && (
      <footer className="py-8 text-center">
        <div>Made With 💖</div>
      </footer>
    )
  );
};

export default Footer;
