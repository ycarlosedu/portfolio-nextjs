"use client";
import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollIndicator() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed bottom-0 left-0 z-40 right-0 h-1 bg-primary"
      style={{ scaleX }}
    />
  );
}
