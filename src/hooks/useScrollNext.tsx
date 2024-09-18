import { useEffect } from "react";

export function useScrollToNextElement(
  elementID: string,
  isScrollingDown: boolean,
  isVisible: boolean
) {
  useEffect(() => {
    if (isScrollingDown && isVisible) {
      const targetElement = document.getElementById(elementID);
      if (targetElement) {
        // setTimeout(function () {
        //   targetElement.scrollIntoView({ behavior: "smooth" });
        // }, 100);
      }
    }
  }, [elementID, isScrollingDown, isVisible]);
}
