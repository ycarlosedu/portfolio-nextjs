import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex gap-2 items-center justify-center whitespace-nowrap rounded-lg text-base font-semibold ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 data-[disabled=true]:bg-gray-light data-[disabled=true]:text-black dark:data-[disabled=true]:bg-gray-dark dark:data-[disabled=true]:text-gray-light dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-white hover:bg-gray-dark border border-gray-dark dark:border-white",
        outline:
          "border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
      },
      size: {
        default: "w-full max-w-[324px] p-3 min-h-[62px]",
        small: "w-fit p-3 h-fit",
        icon: "h-10 w-10"
      },
      effect: {
        shine:
          "before:animate-shine relative overflow-hidden before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-no-repeat background-position_0s_ease"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, effect, asChild = false, disabled, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          buttonVariants({
            variant,
            size,
            effect: disabled ? undefined : effect,
            className
          })
        )}
        ref={ref}
        disabled={disabled}
        data-disabled={disabled}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
