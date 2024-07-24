type Props = {
  behavior?: ScrollBehavior;
  element?: string;
};

export const scrollToTop = (
  { behavior, element }: Props = { behavior: "smooth" }
) => {
  if (element)
    return document.querySelector(element)?.scrollTo({ top: 0, behavior });

  window.scrollTo({ top: 0, behavior });
};
