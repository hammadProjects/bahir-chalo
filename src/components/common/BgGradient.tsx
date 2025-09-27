import React from "react";

interface BgGradientProps {
  children?: React.ReactNode;
  className?: string;
}

export default function BgGradient({ children, className }: BgGradientProps) {
  return (
    <div className={`relative ${className}`}>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-30"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[20rem] -translate-x-1/2 rotate-[30deg]
          bg-gradient-to-br from-teal-400 to-emerald-500
          opacity-35 sm:left-[calc(50%-30rem)] sm:w-[36rem]"
        />
      </div>
      {children}
    </div>
  );
}
