import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

type Props = ComponentProps<"h2">;

export function TypographyH2({ children, className, ...props }: Props) {
  return (
    <h2
      className={cn(
        "scroll-m-20 text-[32px] leading-[1.2] font-bold tracking-tight",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}
