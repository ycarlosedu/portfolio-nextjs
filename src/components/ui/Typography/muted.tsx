import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

type Props = ComponentProps<"p">;

export function TypographyMuted({ children, className, ...props }: Props) {
  return (
    <p
      className={cn("text-sm text-zinc-500 dark:text-zinc-400", className)}
      {...props}
    >
      {children}
    </p>
  );
}
