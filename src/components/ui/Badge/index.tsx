import { ComponentProps } from "react";

import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const badgeVariants = cva(
  "text-black min-w-fit text-center flex items-center justify-center dark:text-white text-xs bg-gray-light dark:bg-black py-1 px-2 rounded-full"
);

type Props = ComponentProps<"span">;

export default function Badge({ children, className, ...props }: Props) {
  return (
    <span className={cn(badgeVariants({ className }))} {...props}>
      {children}
    </span>
  );
}
