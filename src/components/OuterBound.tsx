import React from "react";
import clsx from "clsx";

type BoundedProps = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
};

export default function OuterBound({
  as: Comp = "section",
  className,
  children,
  ...props
}: BoundedProps) {
  return (
    <Comp
      className={clsx("px-4 py-10 md:py-41 md:px-6 lg:py-16", className)}
      {...props}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </Comp>
  );
}
