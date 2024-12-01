import { SECTIONS } from "@/constants";
import useVisibleSectionStore from "@/store/visibleSectionStore";
import { useEffect } from "react";

export function useIsVisible() {
  const { setVisibleSection } = useVisibleSectionStore();

  useEffect(() => {
    const targets = document.querySelectorAll(
      "[data-observe-visibility='true']"
    );

    const observer = new IntersectionObserver(
      ([entry]) => {
        entry.isIntersecting && setVisibleSection(entry.target.id as SECTIONS);
      },
      {
        root: null, // viewport
        rootMargin: "0px", // no margin
        threshold: 0.95 // 95% of target visible
      }
    );

    if (targets) {
      targets.forEach((target) => {
        observer.observe(target);
      });
    }

    return () => {
      if (targets) {
        targets.forEach((target) => {
          observer.unobserve(target);
        });
      }
    };
  }, [setVisibleSection]);
}
