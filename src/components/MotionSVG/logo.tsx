"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function MotionSVGLogo() {
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHasLoaded(true);
    }, 2000);
  }, []);

  return (
    <motion.svg
      version="1.2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 280 250"
      width="80"
      height="72"
    >
      <g id="Layer">
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            ease: "easeInOut"
          }}
          strokeDasharray="0 1"
          strokeLinecap="round"
          strokeWidth={2}
          className={cn(
            "fill-none stroke-white",
            hasLoaded && "fill-white stroke-none"
          )}
          d="m52.7 175q-2.2 2.2-5.2 3.5-2.9 1.3-6 1.3-3.1 0-6-1.3-2.9-1.3-5.1-3.4-2.3-2.2-3.6-5.1-1.3-2.9-1.3-6.2 0-3.1 1.3-6 1.2-2.9 3.4-5.1 2.2-2.3 5.1-3.6 2.9-1.3 6.2-1.3 3.1 0 6 1.3 3 1.2 5.2 3.4l-3.5 3.6q-1.8-1.3-3.6-2.2-1.9-0.8-4.1-0.8-2.2 0-4.2 0.8-1.9 0.9-3.4 2.3-1.4 1.5-2.2 3.4-0.9 2-0.9 4.2 0 2.2 0.9 4.1 0.8 2 2.2 3.4 1.5 1.5 3.4 2.3 2 0.8 4.2 0.8 2.2 0 4-0.8 1.8-0.8 3.1-2.1z"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            ease: "easeInOut"
          }}
          strokeDasharray="0 1"
          strokeLinecap="round"
          strokeWidth={2}
          className={cn(
            "fill-none stroke-white",
            hasLoaded && "fill-white stroke-none"
          )}
          d="m81.3 147.8l16 32h-6.4l-9.6-20.1-9.6 20.1h-6.4z"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            ease: "easeInOut"
          }}
          strokeDasharray="0 1"
          strokeLinecap="round"
          strokeWidth={2}
          className={cn(
            "fill-none stroke-white",
            hasLoaded && "fill-white stroke-none"
          )}
          d="m137.2 179.8h-5.9l-7.1-13h-11.9v-5.3h15.4q1-0.1 1.8-0.5 0.6-0.4 1.2-1.3 0.6-0.8 0.6-2.4 0-1.6-0.6-2.4-0.6-0.9-1.2-1.3-0.8-0.4-1.8-0.5h-15.4v-5.3h15.4q2.5 0.1 4.5 1.2 0.8 0.5 1.6 1.1 0.8 0.7 1.4 1.7 0.6 1 1 2.3 0.4 1.4 0.4 3.2 0 2.9-0.9 4.7-1 1.9-2.2 3-1.1 1-2.2 1.4-1 0.4-1.2 0.4z"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            ease: "easeInOut"
          }}
          strokeDasharray="0 1"
          strokeLinecap="round"
          strokeWidth={2}
          className={cn(
            "fill-none stroke-white",
            hasLoaded && "fill-white stroke-none"
          )}
          d="m174.8 174.6v5.4h-21.5v-32.2h5.4v26.8z"
        />
        <motion.path
          fillRule="evenodd"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            ease: "easeInOut"
          }}
          strokeDasharray="0 1"
          strokeLinecap="round"
          strokeWidth={2}
          className={cn(
            "fill-none stroke-white",
            hasLoaded && "fill-white stroke-none"
          )}
          d="m203 147.8q3.2 0 6 1.2 2.9 1.3 5.1 3.4 2.3 2.2 3.6 5.1 1.3 2.9 1.3 6.3 0 3.2-1.3 6.1-1.2 2.9-3.4 5.1-2.1 2.2-5 3.5-3 1.3-6.3 1.3-3.3 0-6.2-1.2-2.9-1.2-5.1-3.4-2.2-2.2-3.5-5.1-1.3-2.9-1.3-6.3 0-3.2 1.3-6.1 1.2-2.9 3.4-5.1 2.1-2.2 5-3.4 3-1.3 6.4-1.4zm0 26.7q2 0 4-0.8 1.9-0.9 3.4-2.3 1.5-1.5 2.4-3.4 0.8-2 0.8-4.2 0-2.1-0.8-4.1-0.8-1.9-2.3-3.4-1.4-1.5-3.4-2.3-1.9-0.9-4.1-0.9-2.2 0-4.1 0.8-2 0.9-3.4 2.3-1.5 1.5-2.4 3.4-0.9 2-0.9 4.2 0 2.2 0.9 4.1 0.8 1.9 2.2 3.4 1.5 1.4 3.4 2.3 2 0.8 4.3 0.9z"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            ease: "easeInOut"
          }}
          strokeDasharray="0 1"
          strokeLinecap="round"
          strokeWidth={2}
          className={cn(
            "fill-none stroke-white",
            hasLoaded && "fill-white stroke-none"
          )}
          d="m245.2 160.9q0.3 0 1.2 0.1 0.8 0.2 1.8 0.5 1.1 0.4 2.2 1 1.1 0.6 2 1.6 0.9 1.1 1.5 2.6 0.6 1.5 0.6 3.6 0 0.1-0.1 0.8 0 0.8-0.4 1.8-0.3 1.1-1 2.3-0.7 1.2-2 2.2-1.2 1.1-3.2 1.8-1.9 0.6-4.7 0.6-2.7 0-5-1-2.3-1.1-4-3.1l4.4-3.3q0 0 0.3 0.4 0.3 0.3 0.9 0.7 0.7 0.4 1.6 0.7 1 0.3 2.3 0.3 2.4 0 3.8-1.3 1.4-1.2 1.4-2.9 0-1.3-0.5-2.1-0.5-0.7-1.4-1.2-0.9-0.5-2-0.8-1.2-0.3-2.4-0.5-0.4-0.1-1.2-0.3-0.8-0.1-1.7-0.5-1-0.4-2-1-1.1-0.6-1.9-1.6-0.9-1-1.4-2.3-0.6-1.4-0.6-3.2 0-0.1 0.1-0.8 0.1-0.7 0.4-1.7 0.3-1 1-2.1 0.7-1.2 2-2.2 1.3-0.9 3.2-1.6 2-0.6 4.8-0.6 2.6 0 4.9 1.1 2.4 1.1 4.1 3l-4.4 3.4q-0.5-0.8-1.3-1.2-0.9-0.5-1.7-0.7-1.1-0.2-2.2-0.3-2.4 0-3.8 1-1.4 1-1.4 2.7 0 1.3 0.4 2 0.5 0.7 1.2 1 0.8 0.4 1.8 0.6 1.1 0.2 2.4 0.5z"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            ease: "easeInOut"
          }}
          strokeDasharray="0 1"
          strokeLinecap="round"
          strokeWidth={2}
          className={cn(
            "fill-none stroke-white",
            hasLoaded && "fill-white stroke-none"
          )}
          d="m72.3 201.1q0.3 0 1.2 0.2 0.8 0.1 1.9 0.5 1 0.3 2.1 0.9 1.1 0.6 2 1.7 0.9 1 1.5 2.5 0.6 1.5 0.6 3.6 0 0.1-0.1 0.8 0 0.8-0.4 1.8-0.3 1.1-1 2.3-0.7 1.2-1.9 2.3-1.3 1-3.3 1.7-1.9 0.7-4.7 0.7-2.6 0-5-1.1-2.3-1.1-4-3l4.4-3.4q0 0 0.3 0.4 0.3 0.3 0.9 0.7 0.7 0.4 1.6 0.7 1 0.3 2.3 0.3 2.5 0 3.8-1.2 1.4-1.3 1.4-3 0-1.2-0.5-2-0.5-0.8-1.4-1.3-0.9-0.5-2-0.8-1.2-0.3-2.4-0.5-0.4-0.1-1.2-0.2-0.8-0.2-1.7-0.6-1-0.4-2-1-1.1-0.6-1.9-1.6-0.8-0.9-1.4-2.3-0.6-1.3-0.6-3.2 0-0.1 0.1-0.8 0.1-0.7 0.4-1.7 0.3-1 1-2.1 0.7-1.2 2-2.1 1.3-1 3.2-1.6 2-0.7 4.8-0.7 2.6 0 5 1.1 2.3 1.1 4 3.1l-4.4 3.3q-0.5-0.8-1.3-1.2-0.9-0.5-1.7-0.7-1-0.2-2.2-0.2-2.4 0-3.8 0.9-1.4 1-1.4 2.7 0 1.3 0.5 2 0.4 0.7 1.1 1.1 0.8 0.4 1.8 0.5 1.1 0.2 2.4 0.5z"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            ease: "easeInOut"
          }}
          strokeDasharray="0 1"
          strokeLinecap="round"
          strokeWidth={2}
          className={cn(
            "fill-none stroke-white",
            hasLoaded && "fill-white stroke-none"
          )}
          d="m98 188h5.3v27.9l-5.3 4.2z"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            ease: "easeInOut"
          }}
          strokeDasharray="0 1"
          strokeLinecap="round"
          strokeWidth={2}
          className={cn(
            "fill-none stroke-white",
            hasLoaded && "fill-white stroke-none"
          )}
          d="m142.5 214.9v5.3h-21.5v-32.1h5.4v26.8z"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            ease: "easeInOut"
          }}
          strokeDasharray="0 1"
          strokeLinecap="round"
          strokeWidth={2}
          className={cn(
            "fill-none stroke-white",
            hasLoaded && "fill-white stroke-none"
          )}
          d="m150.2 188h6.5l9.6 20.1 9.5-20.1h6.5l-16 32.1z"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            ease: "easeInOut"
          }}
          strokeDasharray="0 1"
          strokeLinecap="round"
          strokeWidth={2}
          className={cn(
            "fill-none stroke-white",
            hasLoaded && "fill-white stroke-none"
          )}
          d="m203.1 188l16.1 32.1h-6.5l-9.6-20.2-9.5 20.2h-6.5z"
        />
      </g>
      <g id="Layer">
        <motion.path
          fillRule="evenodd"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            ease: "easeInOut"
          }}
          strokeDasharray="0 1"
          strokeLinecap="round"
          strokeWidth={2}
          className={cn(
            "fill-none stroke-white",
            hasLoaded && "fill-white stroke-none"
          )}
          d="m197.1 105.7v0.1q0 0 0 0v0.6q0 0 0 0l-0.1 0.6q0 0 0 0v0.6q0 0 0 0.1l-0.1 0.5q0 0 0 0.1l-0.1 0.5q-0.1 0-0.1 0.1l-0.1 0.5q0 0 0 0.1l-0.2 0.5q0 0 0 0.1l-0.2 0.5q0 0 0 0.1l-0.2 0.5q0 0-0.1 0l-0.2 0.5q0 0.1 0 0.1l-0.3 0.5q0 0 0 0l-0.3 0.5q0 0 0 0.1l-0.4 0.4q0 0.1 0 0.1l-0.3 0.4q0 0.1-0.1 0.1l-0.3 0.4q0 0-0.1 0.1l-0.3 0.4q0 0-0.1 0l-0.3 0.4q-0.1 0-0.1 0v0.1q-0.1 0-0.1 0l-0.4 0.4q0 0 0 0.1l-0.4 0.3q-0.1 0-0.1 0.1l-0.4 0.3q0 0-0.1 0l-0.4 0.4q0 0-0.1 0l-0.4 0.3q-0.1 0-0.1 0l-0.5 0.3q0 0.1 0 0.1l-0.5 0.2q0 0-0.1 0.1l-0.5 0.2q0 0 0 0l-0.5 0.2q-0.1 0-0.1 0.1l-0.5 0.1q-0.1 0-0.1 0.1l-0.5 0.1q-0.1 0-0.1 0l-0.5 0.2q-0.1 0-0.1 0l-0.5 0.1q-0.1 0-0.1 0l-0.6 0.1q0 0 0 0h-0.6q0 0 0 0.1h-0.6q0 0 0 0h-0.6-0.2-87-0.1q0 0 0 0h-0.6q0 0 0 0l-0.6-0.1q0 0 0 0h-0.6q0 0-0.1 0l-0.5-0.1q0 0-0.1 0l-0.5-0.1q0-0.1-0.1-0.1l-0.5-0.1q0 0-0.1 0l-0.5-0.2q0 0-0.1 0l-0.5-0.2q0 0-0.1 0l-0.5-0.2q0 0 0-0.1l-0.5-0.2q-0.1 0-0.1 0l-0.5-0.3q0 0 0 0l-0.5-0.3q0 0-0.1 0l-0.4-0.4q-0.1 0-0.1 0l-0.4-0.3q-0.1 0-0.1-0.1l-0.4-0.3q0 0-0.1-0.1l-0.4-0.3q0 0 0-0.1l-0.4-0.3q0-0.1 0-0.1h-0.1q0-0.1 0-0.1l-0.4-0.4q0 0-0.1 0l-0.3-0.4q0-0.1-0.1-0.1l-0.3-0.4q0 0 0-0.1l-0.4-0.4q0 0 0-0.1l-0.3-0.4q0-0.1-0.1-0.1l-0.2-0.5q-0.1 0-0.1 0l-0.2-0.5q0 0-0.1-0.1l-0.2-0.5q0 0 0 0l-0.2-0.6q0 0-0.1 0l-0.1-0.5q0-0.1-0.1-0.1l-0.1-0.5q0-0.1 0-0.1l-0.2-0.5q0-0.1 0-0.1l-0.1-0.5q0-0.1 0-0.1l-0.1-0.6q0 0 0 0v-0.6q-0.1 0-0.1 0v-0.6q0 0 0 0v-0.6-0.7-86.5-0.1q0 0 0 0v-0.6q0 0 0 0l0.1-0.6q0 0 0 0v-0.6q0 0 0-0.1l0.1-0.5q0 0 0-0.1l0.1-0.5q0.1 0 0.1-0.1l0.1-0.5q0-0.1 0-0.1l0.2-0.5q0 0 0-0.1l0.2-0.5q0 0 0-0.1l0.2-0.5q0 0 0.1 0l0.2-0.5q0-0.1 0-0.1l0.3-0.5q0 0 0 0l0.3-0.5q0 0 0-0.1l0.4-0.4q0-0.1 0-0.1l0.3-0.4q0-0.1 0.1-0.1l0.3-0.4q0 0 0.1-0.1l0.3-0.4q0 0 0.1 0l0.3-0.4q0.1 0 0.1 0v-0.1q0.1 0 0.1 0l0.4-0.4q0 0 0-0.1l0.4-0.3q0.1 0 0.1-0.1l0.4-0.3q0 0 0.1 0l0.4-0.4q0 0 0.1 0l0.4-0.3q0.1 0 0.1-0.1l0.5-0.2q0-0.1 0-0.1l0.5-0.2q0 0 0.1-0.1l0.5-0.2q0 0 0 0l0.5-0.2q0.1 0 0.1-0.1l0.5-0.1q0.1-0.1 0.1-0.1l0.5-0.1q0.1 0 0.1 0l0.5-0.2q0.1 0 0.1 0l0.5-0.1q0.1 0 0.1 0l0.6-0.1q0 0 0 0h0.6q0-0.1 0-0.1h0.6q0 0 0 0h0.6 1.3 85.9 0.1q0 0 0 0h0.6q0 0 0 0l0.6 0.1q0 0 0 0h0.6q0 0 0.1 0l0.5 0.1q0 0 0.1 0l0.5 0.1q0 0 0.1 0.1l0.5 0.1q0 0 0.1 0l0.5 0.2q0 0 0.1 0l0.5 0.2q0 0 0.1 0l0.5 0.2q0 0 0 0.1l0.5 0.2q0.1 0 0.1 0l0.5 0.3q0 0 0 0l0.5 0.3q0 0 0.1 0l0.4 0.4q0.1 0 0.1 0l0.4 0.3q0.1 0 0.1 0.1l0.4 0.3q0 0 0.1 0l0.4 0.4q0 0 0 0.1l0.4 0.3q0 0.1 0 0.1h0.1q0 0.1 0 0.1l0.4 0.4q0 0 0.1 0l0.3 0.4q0 0.1 0.1 0.1l0.3 0.4q0 0 0 0.1l0.4 0.4q0 0 0 0.1l0.3 0.4q0 0.1 0.1 0.1l0.2 0.5q0.1 0 0.1 0l0.2 0.5q0 0 0.1 0.1l0.2 0.5q0 0 0 0l0.2 0.5q0 0.1 0.1 0.1l0.1 0.5q0 0.1 0.1 0.1l0.1 0.5q0 0.1 0 0.1l0.2 0.5q0 0.1 0 0.1l0.1 0.5q0 0.1 0 0.1l0.1 0.6q0 0 0 0v0.6q0.1 0 0.1 0v0.6q0 0 0 0v0.6 1.9zm-2.7-85.4v-1.8-0.5-0.5l-0.1-0.5v-0.5l-0.1-0.5-0.2-0.4-0.1-0.5-0.2-0.5-0.1-0.4-0.3-0.5-0.2-0.4-0.2-0.4-0.3-0.5-0.3-0.4-0.3-0.3-0.3-0.4-0.4-0.4-0.4-0.4-0.4-0.3-0.4-0.4-0.4-0.2-0.4-0.3-0.4-0.3-0.4-0.2-0.5-0.2-0.4-0.2-0.5-0.2-0.5-0.1-0.5-0.2-0.4-0.1h-0.5l-0.5-0.1h-0.5-0.5-0.1-85.9-1.2-0.6-0.5l-0.5 0.1h-0.5l-0.5 0.1-0.4 0.1-0.5 0.2-0.5 0.1-0.4 0.2-0.5 0.2-0.4 0.3-0.4 0.2-0.4 0.3-0.4 0.3-0.4 0.3-0.4 0.3-0.4 0.4-0.4 0.4-0.3 0.4-0.3 0.4-0.3 0.4-0.3 0.4-0.3 0.4-0.2 0.4-0.2 0.5-0.2 0.4-0.2 0.5-0.1 0.5-0.1 0.4-0.1 0.5-0.1 0.5-0.1 0.5v0.5 0.5 0.1 86.4 0.7 0.6 0.5l0.1 0.5v0.5l0.1 0.4 0.2 0.5 0.1 0.5 0.2 0.5 0.1 0.4 0.3 0.5 0.2 0.4 0.2 0.4 0.3 0.4 0.3 0.4 0.3 0.4 0.3 0.4 0.4 0.4 0.4 0.4 0.4 0.3 0.4 0.3 0.4 0.3 0.4 0.3 0.4 0.3 0.4 0.2 0.5 0.2 0.4 0.2 0.5 0.2 0.5 0.1 0.5 0.1 0.4 0.1 0.5 0.1 0.5 0.1h0.5 0.5 0.1 87 0.1 0.6 0.5l0.5-0.1 0.5-0.1 0.5-0.1 0.4-0.1 0.5-0.1 0.5-0.2 0.4-0.2 0.5-0.2 0.4-0.2 0.4-0.3 0.4-0.2 0.4-0.3 0.4-0.3 0.4-0.4 0.4-0.3v-0.1l0.4-0.3 0.3-0.4 0.3-0.4 0.3-0.4 0.3-0.4 0.3-0.4 0.2-0.5 0.2-0.4 0.2-0.5 0.2-0.4 0.1-0.5 0.1-0.5 0.1-0.5 0.1-0.4 0.1-0.5v-0.5-0.6zm-98 92.4c-3.9 0-7.1-3.2-7.1-7.1v-87.2c0-3.9 3.2-7.1 7.1-7.1h87.2c3.9 0 7.1 3.2 7.1 7.1v87.2c0 3.9-3.2 7.1-7.1 7.1zm30.4-18.4l8.8-8.9-23.4-23.4 23.4-23.4-8.8-8.9-32.3 32.3zm41-32.3l-23.5 23.5 8.9 8.8 32.2-32.3-32.2-32.2-8.9 8.8z"
        />
      </g>
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 2,
          ease: "easeInOut"
        }}
        strokeDasharray="0 1"
        strokeLinecap="round"
        strokeWidth={2}
        className={cn(
          "fill-none stroke-white",
          hasLoaded && "fill-white stroke-none"
        )}
        d="m4.5 239.2v-172.6q0-2.4 1.7-4.1 1.7-1.7 4.1-1.7h68.7v2.6h-68.7q-3.1 0-3.1 3.2v172.6q0 3.2 3.1 3.2h259.4q3.1 0 3.1-3.2v-172.6q0-3.2-3.1-3.2h-68.7v-2.6h68.7q2.4 0 4.1 1.7 1.7 1.7 1.7 4.1v172.6q0 2.4-1.7 4.1-1.7 1.7-4.1 1.7h-259.4q-2.4 0-4.1-1.7-1.7-1.7-1.7-4.1z"
      />
    </motion.svg>
  );
}
