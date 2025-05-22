import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { ComponentProps } from "react";
import { MotionSVG } from "../MotionSVG";

type Props = ComponentProps<typeof motion.div> & {
  show?: boolean;
  sectionSize?: boolean;
  fullScreen?: boolean;
  text?: string;
};

export default function Loader({
  show = false,
  sectionSize = false,
  fullScreen = false,
  text = "Carregando...",
  className,
  ...rest
}: Props) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ opacity: 0 }}
          className={cn(
            "flex w-full items-center justify-center",
            sectionSize && "flex-1",
            fullScreen &&
              "fixed inset-0 z-50 h-screen w-screen bg-black/50 backdrop-blur-md",
            className
          )}
          {...rest}
        >
          <div className="flex w-full animate-bounce flex-col items-center justify-center gap-2 text-primary">
            <MotionSVG.Logo />
            <span className={`text-xs text-gray-dark dark:text-gray-light`}>
              {text}
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
