import clsx from "clsx";
import React from "react";

type HeadingProps = {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
};

export default function Heading({
  as: Comp = "h1",
  className,
  children,
  size = "lg",
}: HeadingProps) {
  return (
    <Comp
      className={clsx(
        "mb-4 font-semibold leading-tight tracking-tight font-display text-center max-w-xl text-slate-700",
        size === "xl" && "text-5xl md:text-7xl",
        size === "lg" && "text-4xl md:text-6xl",
        size === "md" && "text-3xl md:text-5xl",
        size === "sm" && "text-2xl md:text-3xl",
        className
      )}
    >
      {children}
    </Comp>
  );
}
