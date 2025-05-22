"use client";
import Loader from "@/components/ui/Loader";
import { LayoutGroup } from "motion/react";
import { useEffect, useState } from "react";

export default function InitialLoader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 1200);

    return () => clearTimeout(timer);
  });

  return (
    <LayoutGroup>
      <Loader
        show={show}
        fullScreen
        className="bg-gray-light dark:bg-gray-dark"
        text=""
      />
    </LayoutGroup>
  );
}
