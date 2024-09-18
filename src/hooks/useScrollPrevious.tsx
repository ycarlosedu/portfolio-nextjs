import { useEffect } from "react";

export function useScrollToPreviousElement(
  elementID: string,
  isScrollingUp: boolean,
  isVisible: boolean
) {
  useEffect(() => {
    if (isScrollingUp && isVisible) {
      const targetElement = document.getElementById(elementID);
      if (targetElement) {
        // setTimeout(function () {
        //   targetElement.scrollIntoView({ behavior: "smooth" });
        // }, 100);
      }
    }
  }, [elementID, isScrollingUp, isVisible]);
}
