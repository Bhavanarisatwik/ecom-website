"use client";

import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
          {
            "bg-black text-white hover:bg-black/90": variant === "primary",
            "bg-gray-100 text-gray-900 hover:bg-gray-200": variant === "secondary",
            "border border-gray-300 bg-transparent hover:bg-gray-100": variant === "outline",
            "bg-transparent hover:bg-gray-100": variant === "ghost",
            "h-9 px-3 text-sm": size === "sm",
            "h-10 px-4": size === "md",
            "h-11 px-6 text-lg": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button }; 