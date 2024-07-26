import { useEffect, useState } from "react";

let lastScrollPosition = 0;

type Props = {
  initialState?: boolean;
};

export default function useScrollUp(
  { initialState }: Props = { initialState: false }
) {
  const [isScrollingUp, setIsScrollingUp] = useState(initialState);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      if (currentScrollPosition > lastScrollPosition) {
        isScrollingUp && setIsScrollingUp(false);
      } else {
        !isScrollingUp && setIsScrollingUp(true);
      }
      lastScrollPosition = currentScrollPosition;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return { isScrollingUp };
}
