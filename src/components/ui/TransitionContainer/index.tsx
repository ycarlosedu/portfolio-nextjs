"use client";
import { cn } from "@/lib/utils";
import { HTMLMotionProps, motion } from "framer-motion";
type Props = HTMLMotionProps<"main">;

export function TransitionContainer({ children, className, ...props }: Props) {
  return (
    <motion.main
      animate={{
        opacity: 1,
        x: 0,
        filter: "blur(0px)"
      }}
      initial={{
        opacity: 0.3,
        x: "200vw",
        filter: "blur(12px)"
      }}
      transition={{
        duration: 0.5,
        type: "tween",
        ease: "easeInOut"
      }}
      className={cn(
        "flex min-h-screen flex-col items-center mt-24 pt-8 md:mt-0 md:pt-0",
        className
      )}
      {...props}
    >
      {children}
    </motion.main>
  );
}
