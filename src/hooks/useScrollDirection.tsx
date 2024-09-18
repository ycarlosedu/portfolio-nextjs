import { useEffect, useState } from "react";

export function useScrollDirection() {
  const [isAtTheTop, setIsAtTheTop] = useState(true);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setIsAtTheTop(true);
      } else {
        setIsAtTheTop(false);
      }

      if (currentScrollY > lastScrollY) {
        setIsScrollingDown(true);
        setIsScrollingUp(false);
      } else if (currentScrollY < lastScrollY) {
        setIsScrollingDown(false);
        setIsScrollingUp(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { isAtTheTop, isScrollingUp, isScrollingDown };
}
