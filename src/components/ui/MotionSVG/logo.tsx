"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function MotionSVGLogo() {
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
      viewBox="0 0 426 96"
      width="200"
      height="56"
      className={cn(
        "[&>path]:stroke-primary [&>path]:fill-transparent [&>path]:stroke-4 [&>path]:transition-colors [&>path]:duration-300 hover:scale-105 transition-all duration-300",
        hasLoaded &&
          "[&>path]:fill-primary [&>path]:stroke-white [&>path]:dark:stroke-black"
      )}
    >
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 2,
          ease: "easeInOut"
        }}
        strokeDasharray="0 1"
        strokeLinecap="round"
        d="m39.4 57.4c-1.8-1-4-0.4-5 1.3l-0.2 0.5c-2.5 4.3-5.4 8.6-8.8 12-1.7 1.6-3.5 3-5.2 3.6-1.6 0.6-2.7 0.3-3.6-0.5-1-1-1.8-3-2-5.2-0.3-2.2-0.2-4.5 0.3-6.6 0.3-1.1 0.6-2.1 1-2.9 0.3-0.5 0.7-0.9 0.8-1q0.2 0 0.4 0.2c0.6 0.4 1.3 1.2 1.9 2.1 1.1 1.5 3 2.3 4.9 1.8 2.4-0.7 3.9-3.2 3.3-5.6l-0.5-1.6c-0.4-1.8-1.3-3.5-3.1-5.4-1-0.9-2.3-1.9-4.2-2.5-1.9-0.7-4.6-0.7-6.7 0.1-2.2 0.7-3.7 1.9-4.8 3-1.1 1.1-1.8 2.2-2.4 3.2-1.1 2.1-1.7 4-2.1 5.9-0.6 3.6-0.5 7.1 0.3 10.7 0.5 1.7 1.1 3.5 2 5.3 1 1.8 2.2 3.6 4.1 5.2 1.8 1.5 4.5 2.6 6.8 2.7 2.4 0.1 4.6-0.5 6.3-1.3 3.4-1.7 5.5-4 7.5-6.2 3.8-4.4 6.7-9 10.1-13.5q0.1-0.2 0.3-0.4c0.9-1.7 0.3-3.9-1.4-4.9z"
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
        fillRule="evenodd"
        d="m84.3 62.7c0.1-0.1-0.1 0.1-0.2 0.3-0.1 0.2-0.2 0.5-0.3 0.7l-0.7 1.7c-0.5 1.1-0.9 2.3-1.3 3.4-0.8 2.4-1.6 4.8-2.6 7.2-1 2.4-2 4.9-3.8 7.4-1 1.2-2.2 2.6-4.1 3.6-1.8 1-4.5 1.4-6.7 0.8-2.3-0.4-4.5-2.1-5.8-3.8-1.3-1.7-2-3.4-2.6-4.9q-0.4-1.3-0.7-2.5c-0.8 1.5-2 2.9-3.8 4.1-1.8 1.1-4.3 1.9-6.6 1.8-1.3-0.1-2.9-0.5-4.2-1.2-1.3-0.7-2.5-1.6-3.4-2.5-1.8-1.9-3.1-3.9-3.8-5.9-0.9-1.9-1.2-3.9-1.3-5.8 0-3.8 1.2-7.4 3.6-10.6 1.2-1.6 2.8-3.1 4.6-4.4 1.9-1.2 4.2-2.2 6.7-2.5 2.4-0.4 4.8 0.2 6.6 1q0.5 0.2 0.9 0.5c1.2-2.2 3.5-3.6 6.1-3.5 3.7 0.2 6.5 3.3 6.3 6.9q0 0.6-0.2 1.1l-0.3 1.4c-1 4.4-1.7 9.2-1.9 13.6-0.1 2.2 0.1 4.4 0.5 6.3 0.2 0.9 0.5 1.7 0.8 2.2 0.4 0.5 0.6 0.6 0.9 0.7 0.4 0.1 0.6 0 1-0.1 0.5-0.2 1.1-0.7 1.7-1.4 1.2-1.3 2.2-3.2 3.2-5.3 0.9-2 1.7-4.2 2.5-6.4l1.1-3.4 0.6-1.7 0.3-1c0.2-0.3 0.3-0.7 0.6-1.3 1-1.8 3.2-2.4 4.9-1.4 1.8 0.9 2.4 3.1 1.4 4.9zm-30.4-3.2q0-0.4 0-0.8c-1.4-0.8-2.6-1-3.5-0.6-1.1 0.3-2.4 1.8-3.3 3.7-0.9 1.9-1.4 4.1-1.6 6.3-0.1 2.1 0.2 4.4 0.9 5.5 0.3 0.6 0.5 0.6 0.6 0.7 0.7 0.1 1 0.1 1.4-0.1 0.9-0.4 2.2-2.2 3-4.3 1.2-3.1 2-6.7 2.5-10.4z"
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
        fillRule="evenodd"
        d="m114.3 61.3q0 0.1 0 0.2c-0.5 2.4-1 4.8-1.6 7.2q-0.9 3.6-2.2 7.1c-0.9 2.4-1.9 4.7-3.2 7-1.4 2.2-2.8 4.5-5.2 6.7-1.2 1.1-2.7 2.2-4.8 2.7-2 0.6-4.5 0.4-6.5-0.3-2-0.6-4.2-2.2-5.6-4.1-1.4-2-2.2-4.1-2.6-5.9-0.9-3.8-0.6-7 0-10 0.4-1.6 0.9-3.1 1.7-4.5q-1.4-1.1-2.8-2.3c-1.3-1.1-2.5-2.4-3.7-3.8-1.1-1.5-2.5-3.1-2.7-6.2-0.1-0.7 0.1-1.6 0.3-2.2q0.2-0.7 0.6-1.5c0.5-1 1.2-2.1 2.6-2.9 1.3-0.9 3-1 4.3-0.6 1.3 0.3 2.3 1.1 3.1 1.9 1.5 1.6 2.3 3.8 2.2 5.8 0 1.2-0.3 2.3-0.8 3.3 1.8 1 3.7 1.8 5.6 2.5q1 0.3 1.9 0.9c1.3 0.7 2.2 2 2.4 3.4 0.4 1.5 0.2 3-0.6 4.4-2 3.4-3.6 7.9-3.5 11.2 0.1 0.8 0.2 1.5 0.5 1.9 0.2 0.3 0.4 0.6 0.9 0.8 0.4 0.2 0.7 0.2 1.1 0.2 0.4-0.1 1-0.4 1.7-0.9 1.2-1 2.5-2.6 3.5-4.4 1.1-1.8 2-3.7 2.9-5.7 1.6-4.1 2.7-8.5 3.4-12.8v-0.2c0.3-2 2.1-3.3 4.1-3 2 0.3 3.3 2.1 3 4.1zm-31.2-5.1c0.3 0.2 0.5 0.4 0.8 0.6 0.1-1.4-0.4-2.7-1.4-3.4-0.3-0.2-0.6-0.4-0.8-0.3-0.2 0-0.1 0.1-0.1 0.1 0.1 0-0.1 0.2-0.2 0.6q0 0.3-0.1 0.7c0 0.1 0.1 0 0.1 0 0.1 0.1 0.8 1 1.7 1.7z"
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
        fillRule="evenodd"
        d="m152.5 63.8c-0.1-0.2-0.8 0.5-1.2 1.2-0.5 0.7-1 1.6-1.4 2.5-0.9 1.7-1.6 3.7-2.4 5.6-1.6 4-3.1 8.1-5.7 12.2-1.3 2-3 4.1-5.4 5.8-2.4 1.7-5.7 2.7-8.8 2.8-3.3 0.1-7-1.1-9.7-3.2-2.7-1.9-4.6-4.4-6.2-6.8-2.9-4.8-4.3-9.7-5.1-14.4-0.7-4.7-1.1-9.4-0.9-14 0.2-9.1 2.3-18 5.5-26.5 0.8-2.1 1.7-4.2 2.8-6.3q1.5-3 3.6-6c2.7-3.9 5.7-7.8 10.2-11 1.1-0.8 2.4-1.5 3.8-2 1.4-0.6 2.9-1.1 4.6-1.2 1.7 0 3.2 0.2 4.8 0.7 1.7 0.6 3.2 1.6 4.3 2.9 2.2 2.6 2.7 5.4 3 7.8 0.2 2.5 0.1 4.8-0.3 7-1.5 8.9-4.9 16.9-9.3 24.3-4.6 7.3-10.1 14.3-18.4 19q-0.3 0.2-0.7 0.3 0.1 1.8 0.3 3.6c0.4 3.9 1.1 7.7 2.5 10.9 0.8 1.6 1.6 3 2.7 3.9 1 1 2.1 1.5 3.4 1.6 1.5 0.1 2.7 0 3.9-0.7 1.3-0.6 2.5-1.7 3.5-3.1 2.2-2.8 3.9-6.4 5.4-10.1l2.4-5.8c0.5-1 0.9-2 1.5-3.1 0.6-1.1 1.2-2.2 2.8-3.6 1.5-1.2 3.8-1 5.1 0.6 1.2 1.5 0.9 3.8-0.6 5.1zm-32.8-7.5q0 0 0 0.1c5.5-3.3 10.1-8.7 13.6-14.5 4-6.7 7.1-14.2 8-21.7 0.2-1.9 0.2-3.7 0-5.3-0.2-1.7-0.7-3.1-1.4-3.7-0.3-0.3-0.6-0.5-1-0.6-0.4-0.1-1-0.1-1.6-0.1-1 0.2-2.3 0.9-3.5 2-2.4 2.2-4.4 5.5-6.1 9-1.6 3.5-3 7.3-4.1 11.1-2.1 7.7-3.5 15.7-3.9 23.7z"
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
        fillRule="evenodd"
        d="m187.4 63.8q-0.1 0.1-0.2 0.1c-2.4 1.4-4.6 2.1-6.9 3-2.3 0.8-4.7 1.4-7.2 1.6-0.1 2.2-0.4 4.3-1 6.6-0.7 2.5-1.8 5.1-4.3 7.6-1.3 1.2-3 2.4-5.1 2.8-1 0.2-1.8 0.2-2.8 0.3-0.9 0-1.9-0.1-2.9-0.4-2-0.5-4-1.6-5.5-3-1.5-1.3-2.6-2.8-3.5-4.3-1.8-3-2.7-6.1-3.2-9.1-0.4-3.1-0.3-6.2 0.5-9.4 0.2-0.8 0.5-1.7 0.8-2.5 0.4-0.8 0.7-1.8 1.4-2.6 0.8-0.9 1.8-1.6 3.4-2 1.4-0.2 3.4-0.2 5.3 0.9q0.4-1.1 1.2-2.1c1-1.3 2.6-2.3 4.3-2.5 0.9-0.2 1.7-0.2 2.5 0 0.8 0 1.8 0.4 2.5 0.8 1.5 0.9 2.5 2.1 3.3 3.3 1.4 2.4 2.1 4.8 2.6 7.3 0.1 0.6 0.1 1.2 0.2 1.8 3.5-0.6 7.3-2.2 10.3-4.1l0.4-0.2c1.7-1.1 3.9-0.6 5 1.1 1.1 1.7 0.6 4-1.1 5zm-25.8-7.3c-0.1 1 0.2 2.2 1.2 3.1 0.8 0.9 2 1.6 3.4 2.1q0-0.3 0-0.5c-0.3-1.9-0.9-3.8-1.6-5.1-0.4-0.6-0.8-1.1-1-1.2-0.2 0-0.1 0-0.4-0.1-0.2 0-0.3 0-0.5 0-0.4 0.1-1 0.6-1.1 1.7zm3.8 16.3c0.5-1.4 0.7-3 0.9-4.7-2.9-0.6-5.7-1.9-8-4.3q-0.2-0.2-0.4-0.5c-0.6 1.8-0.8 3.7-0.8 5.6 0 1.9 0.3 3.8 0.9 5.4 0.6 1.5 1.4 2.5 2.3 2.8q0.3 0.1 0.7 0.2c0.3 0 0.7 0 0.9 0 0.4 0 0.7-0.2 1.2-0.5 0.8-0.7 1.7-2.2 2.3-4z"
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
        fillRule="evenodd"
        d="m217 62.6q-0.1 0.2-0.3 0.3l-0.1 0.2c-3.4 3.5-8.1 6-12.7 7.1q-0.9 0.2-1.9 0.4c1.1 2.2 2.1 4.9 2 8.1-0.1 1.8-0.5 3.7-1.3 5.4-0.8 1.8-2 3.2-3.3 4.3-1.2 1.1-2.8 2.2-4.6 2.8-1.9 0.6-4.1 0.8-6.1 0.2-4-1-6.7-4.5-7.4-7.9-0.6-3.5 0.5-6.8 2.1-9.1 1.6-2.3 3.5-4 5.8-5.3q0.6-0.3 1.2-0.6c-1.2-1.6-2.5-3.1-3.9-4.6l-2.2-2.4c-0.9-0.9-1.7-2.1-2.4-3.4-0.7-1.4-1.1-3-1-4.8 0.1-1.8 0.8-3.5 1.9-4.9 1.1-1.3 2.5-2.2 4-2.8 1.5-0.6 3.3-0.8 5.1-0.4 1.8 0.4 3.6 1.7 4.6 3.2 1 1.6 1.3 3.2 1.5 4.7v0.4c0.1 1.8-1.2 3.4-3 3.5-1.8 0.2-3.4-1.2-3.5-3q0-0.2 0-0.5c0-0.7-0.1-1.3-0.3-1.6-0.2-0.3-0.4-0.5-0.8-0.5-0.7-0.2-2.1 0.4-2.4 1.3-0.4 0.8-0.1 1.2 0.6 2.1 0.4 0.4 0.9 0.9 1.5 1.4 0.7 0.5 1.7 1.4 2.5 2.2 2.4 2.2 4.7 4.7 6.7 7.6q1.7-0.4 3.1-0.8c3.9-1.1 7-3.3 9.3-6.4 1.1-1.5 3.1-1.8 4.6-0.7 1.4 1 1.8 3 0.7 4.5zm-23.9 10.1q-0.7 0.3-1.3 0.7c-1.6 0.9-3.1 2.3-4 3.7-0.9 1.5-1.1 3.2-0.5 4.4 0.6 1.3 1.9 1.9 2.9 2 1 0 2.1-0.4 3.2-1.5 1.1-1.1 1.5-2.1 1.5-3.5 0-1.4-0.4-3.1-1.2-4.8-0.2-0.3-0.4-0.6-0.6-1z"
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
        fillRule="evenodd"
        d="m278.1 62.6q-0.1 0.2-0.2 0.3l-0.2 0.2c-3.4 3.5-8.1 6-12.7 7.1q-0.9 0.2-1.8 0.4c1.1 2.2 2.1 4.9 1.9 8.1 0 1.8-0.4 3.7-1.3 5.4-0.8 1.8-2 3.2-3.2 4.3-1.3 1.1-2.8 2.2-4.7 2.8-1.9 0.6-4 0.8-6 0.2-4.1-1-6.8-4.5-7.4-7.9-0.7-3.5 0.5-6.8 2-9.1 1.6-2.3 3.6-4 5.9-5.3q0.6-0.3 1.1-0.6c-1.1-1.6-2.5-3.1-3.8-4.6l-2.3-2.4c-0.9-0.9-1.7-2.1-2.4-3.4-0.6-1.4-1.1-3-1-4.8 0.1-1.8 0.8-3.5 1.9-4.9 1.1-1.3 2.5-2.2 4.1-2.8 1.5-0.6 3.2-0.8 5.1-0.4 1.8 0.4 3.5 1.7 4.5 3.2 1 1.6 1.4 3.2 1.5 4.7v0.4c0.2 1.8-1.1 3.4-2.9 3.5-1.8 0.2-3.4-1.2-3.6-3q0-0.2 0-0.5c0.1-0.7 0-1.3-0.2-1.6-0.3-0.3-0.4-0.5-0.8-0.5-0.8-0.2-2.2 0.4-2.5 1.3-0.3 0.8-0.1 1.2 0.6 2.1 0.4 0.4 0.9 0.9 1.5 1.4 0.7 0.5 1.7 1.4 2.5 2.2 2.4 2.2 4.7 4.7 6.8 7.6q1.6-0.4 3.1-0.8c3.9-1.1 7-3.3 9.3-6.4 1-1.5 3.1-1.8 4.5-0.7 1.5 1 1.8 3 0.7 4.5zm-23.8 10.1q-0.7 0.3-1.4 0.7c-1.6 0.9-3 2.3-4 3.7-0.8 1.5-1.1 3.2-0.4 4.4 0.6 1.3 1.8 1.9 2.8 2 1.1 0 2.1-0.4 3.2-1.5 1.1-1.1 1.5-2.1 1.6-3.5 0-1.4-0.5-3.1-1.3-4.8-0.1-0.3-0.4-0.6-0.5-1z"
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
        fillRule="evenodd"
        d="m299.6 57.8c-1.7-1-3.9-0.4-4.9 1.4-0.5 0.9-0.6 1.3-0.8 1.9l-0.5 1.4-1 2.7q-0.9 2.7-2.1 5.1c-0.7 1.5-1.6 3-2.6 3.9-1 1-1.7 1.3-2.4 1.2-0.3 0-0.9-0.2-1.2-0.4-0.3-0.2-0.6-0.4-0.9-0.9-0.5-0.8-0.9-2.3-1-3.9-0.3-3.2 0.3-7.1 1.2-10.4 0.7-2.7-0.6-5.6-3.3-6.8-3-1.4-6.5-0.1-7.8 2.9l-0.3 0.7c-1.2 2.4-1.6 4.5-1.7 7-0.1 2.3 0.2 4.8 0.8 7.5 0.7 2.6 1.9 5.4 4.3 8.1 1.1 1.3 2.7 2.5 4.4 3.1 1.7 0.7 3.2 1 4.9 1 1.7-0.1 3.5-0.5 4.8-1.3 1.4-0.8 2.4-1.8 3.3-2.8 1.6-2 2.6-4 3.5-5.9 0.9-2 1.7-3.9 2.4-5.8 0.4-0.9 0.8-1.9 1.2-2.8l0.6-1.3c0.2-0.3 0.5-0.8 0.5-0.7 1-1.8 0.3-4-1.4-4.9zm-20-11.7c2.7 1 5.9 0 6.7-2.3 0.8-2.3 0.2-4.6-2.5-5.6-2.8-1-6.2-0.1-7 2.2-0.9 2.3 0.1 4.7 2.8 5.7z"
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
        fillRule="evenodd"
        d="m339.5 63.8c-0.1-0.2-0.8 0.5-1.2 1.2-0.5 0.7-1 1.6-1.4 2.5-0.9 1.7-1.7 3.7-2.4 5.6-1.6 4-3.1 8.1-5.7 12.2-1.3 2-3 4.1-5.4 5.8-2.5 1.7-5.8 2.7-8.9 2.8-3.2 0.1-6.9-1.1-9.6-3.2-2.7-1.9-4.6-4.4-6.2-6.8-2.9-4.8-4.3-9.7-5.1-14.4-0.7-4.7-1.1-9.4-0.9-14 0.2-9.1 2.3-18 5.4-26.5 0.8-2.1 1.8-4.2 2.8-6.3 1.1-2 2.3-4 3.7-6 2.7-3.9 5.7-7.8 10.2-11 1.1-0.8 2.4-1.5 3.8-2 1.4-0.6 2.9-1.1 4.6-1.2 1.6 0 3.2 0.2 4.8 0.7 1.6 0.6 3.2 1.6 4.3 2.9 2.1 2.6 2.7 5.4 3 7.8 0.2 2.5 0 4.8-0.3 7-1.5 8.9-4.9 16.9-9.4 24.3-4.5 7.3-10 14.3-18.3 19q-0.3 0.2-0.7 0.3 0.1 1.8 0.3 3.6c0.4 3.9 1.1 7.7 2.5 10.9 0.8 1.6 1.6 3 2.7 3.9 1 1 2.1 1.5 3.4 1.6 1.5 0.1 2.7 0 3.9-0.7 1.3-0.6 2.5-1.7 3.5-3.1 2.2-2.8 3.9-6.4 5.4-10.1l2.4-5.8c0.5-1 0.9-2 1.5-3.1 0.6-1.1 1.2-2.2 2.8-3.6 1.5-1.2 3.8-1 5 0.6 1.3 1.5 1 3.8-0.5 5.1zm-32.8-7.5q0 0-0.1 0.1c5.5-3.3 10.1-8.7 13.7-14.5 4-6.7 7.1-14.2 8-21.7 0.2-1.9 0.2-3.7 0-5.3-0.2-1.7-0.8-3.1-1.4-3.7-0.3-0.3-0.6-0.5-1-0.6-0.5-0.1-1.1-0.1-1.6-0.1-1 0.2-2.3 0.9-3.5 2-2.4 2.2-4.4 5.5-6.1 9-1.6 3.5-3 7.3-4.1 11.1-2.2 7.7-3.5 15.7-3.9 23.7z"
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
        fillRule="evenodd"
        d="m377.5 65q-0.1 0.1-0.1 0.1c-2.1 1.8-4.4 3.3-7.2 4.2-2.7 0.9-5.7 1.1-8.6 0.4q-0.7-0.2-1.5-0.4c-0.5 2-1.1 4.1-2 6.1-1 2.3-2.1 4.8-4.4 7.2-1.2 1.1-2.9 2.2-5 2.6-2.1 0.4-4.3-0.1-5.8-0.7-1.7-0.7-3.4-1.9-4.6-3.4-1.2-1.5-1.9-3.2-2.4-4.7-0.9-3-1.2-5.6-1.4-8.1-0.4-4.9-0.6-9.3-1.6-12.4-1-2.9 0.5-6.1 3.4-7.1 2.9-0.9 6.1 0.6 7.1 3.5q0.1 0.4 0.1 0.7l0.2 1.1c1 5.2 0.3 10 0.3 14.4-0.1 2.1-0.2 4.3 0.1 6 0.4 1.7 0.9 2.7 2 3.3 0.7 0.4 1.1 0.5 1.6 0.5q0.6 0 1.5-0.7c1.2-1 2.3-2.8 3-4.7 0.9-2.2 1.6-4.5 2.2-6.8-2.3-1.9-4.1-4.2-5.2-7-1-2.6-1.5-5.5-1-8.5 0.4-1.6 1-3.3 2.6-4.8 0.8-0.8 2-1.4 3.3-1.5 1.3-0.2 2.6 0.2 3.6 0.7 2 1.2 2.9 2.8 3.5 4.3 0.6 1.5 0.9 2.8 1 4.4 0 2.8-0.2 5.1-0.5 7.5q-0.1 0.8-0.3 1.6 0.8 0.3 1.6 0.4c3.4 0.6 6.8-0.8 9.5-3.4 1.4-1.4 3.7-1.4 5.1 0.1 1.4 1.4 1.3 3.7-0.1 5.1zm-22.4-8.3q0.3 0.7 0.6 1.3c0.1-1.4 0.2-2.8 0.2-4 0-0.8-0.3-1.8-0.5-2.4-0.2-0.4-0.4-0.8-0.6-0.9-0.1 0.2-0.3 0.6-0.4 1.1-0.2 1.5 0 3.3 0.7 4.9z"
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
        fillRule="evenodd"
        d="m422.5 62.7c0.1-0.1-0.1 0.1-0.2 0.3-0.1 0.2-0.2 0.5-0.3 0.7l-0.7 1.7c-0.5 1.1-0.9 2.3-1.3 3.4-0.8 2.4-1.6 4.8-2.6 7.2-1 2.4-2 4.9-3.8 7.4-1 1.2-2.2 2.6-4.1 3.6-1.8 1-4.5 1.4-6.6 0.8-2.4-0.4-4.6-2.1-5.9-3.8-1.3-1.7-2-3.4-2.6-4.9q-0.4-1.3-0.7-2.5c-0.8 1.5-2 2.9-3.8 4.1-1.8 1.1-4.3 1.9-6.6 1.8-1.3-0.1-2.9-0.5-4.2-1.2-1.3-0.7-2.5-1.6-3.4-2.5-1.8-1.9-3.1-3.9-3.8-5.9-0.9-1.9-1.2-3.9-1.3-5.8 0-3.8 1.2-7.4 3.6-10.6 1.2-1.6 2.8-3.1 4.6-4.4 1.9-1.2 4.2-2.2 6.7-2.5 2.4-0.4 4.8 0.2 6.6 1q0.5 0.2 0.9 0.5c1.2-2.2 3.5-3.6 6.1-3.5 3.7 0.2 6.5 3.3 6.3 6.9q0 0.6-0.2 1.1l-0.3 1.4c-1 4.4-1.7 9.2-1.9 13.6-0.1 2.2 0.1 4.4 0.5 6.3 0.2 0.9 0.5 1.7 0.8 2.2 0.4 0.5 0.6 0.6 0.9 0.7 0.4 0.1 0.6 0 1-0.1 0.5-0.2 1.1-0.7 1.7-1.4 1.2-1.3 2.3-3.2 3.2-5.3 0.9-2 1.7-4.2 2.5-6.4l1.1-3.4 0.6-1.7 0.3-1c0.2-0.3 0.3-0.7 0.6-1.3 1-1.8 3.2-2.4 4.9-1.4 1.8 0.9 2.4 3.1 1.4 4.9zm-30.4-3.2q0-0.4 0-0.8c-1.4-0.8-2.6-1-3.5-0.6-1.1 0.3-2.4 1.8-3.3 3.7-0.9 1.9-1.4 4.1-1.6 6.3-0.1 2.1 0.2 4.4 0.9 5.5 0.3 0.6 0.5 0.6 0.6 0.7 0.7 0.1 1 0.1 1.4-0.1 0.9-0.4 2.2-2.2 3-4.3 1.2-3.1 2-6.7 2.5-10.4z"
      />
    </motion.svg>
  );
}
