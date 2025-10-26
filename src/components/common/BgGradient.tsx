import React from "react";

interface BgGradientProps {
  children?: React.ReactNode;
  className?: string;
  position?: "top" | "bottom";
}

export default function BgGradient({
  children,
  className,
  position,
}: BgGradientProps) {
  return (
    <div className={`relative ${className}`}>
      <div
        aria-hidden="true"
        className={`absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl ${
          position === "top"
            ? "-top-40 sm:-top-32"
            : "-bottom-180 sm:-bottom-140"
        }`}
      >
        <div
          className={`relative aspect-[1155/678] w-[20rem] -translate-x-1/2 rotate-[30deg]
          bg-gradient-to-br from-teal-400 to-emerald-500 opacity-35 sm:w-[36rem]
          ${
            position === "top"
              ? "left-[calc(0%+10rem)] sm:left-[calc(0%+20rem)]"
              : "left-[calc(100%-10rem)] sm:left-[calc(100%-20rem)]"
          }`}
        />
      </div>
      {children}
    </div>
  );
}
