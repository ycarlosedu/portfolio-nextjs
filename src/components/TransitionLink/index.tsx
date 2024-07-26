"use client";

import { sleep } from "@/constants";
import { Link, Pages, usePathname, useRouter } from "@/navigation";
import { ComponentProps } from "react";

type Props = ComponentProps<typeof Link> & {
  href: Pages;
  forceTransition?: boolean;
};
export default function TransitionLink({
  children,
  href,
  locale,
  lang,
  forceTransition = false,
  onClick,
  ...props
}: Props) {
  const pathname = usePathname();
  const router = useRouter();

  const handleTransition = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === href && !forceTransition) return;

    e.preventDefault();
    const main = document.querySelector("main");
    main?.classList.add("page-transition");
    await sleep(200);
    router.push(href, { locale });
  };

  return (
    <Link
      onClick={(e) => {
        onClick && onClick(e);
        handleTransition(e);
      }}
      href={href}
      locale={locale}
      lang={lang}
      {...props}
    >
      {children}
    </Link>
  );
}
