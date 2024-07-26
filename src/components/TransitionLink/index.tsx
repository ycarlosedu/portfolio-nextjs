"use client";

import { sleep } from "@/constants";
import { Link, Pages, usePathname, useRouter } from "@/navigation";
import { ComponentProps } from "react";

type Props = ComponentProps<typeof Link> & {
  href: Pages;
};
export default function TransitionLink({
  children,
  href,
  locale,
  lang,
  ...props
}: Props) {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === href) return;

    e.preventDefault();
    const main = document.querySelector("main");
    main?.classList.add("page-transition");
    await sleep(200);
    router.push(href, { locale });
  };

  return (
    <Link
      onClick={handleClick}
      href={href}
      locale={locale}
      lang={lang}
      {...props}
    >
      {children}
    </Link>
  );
}
