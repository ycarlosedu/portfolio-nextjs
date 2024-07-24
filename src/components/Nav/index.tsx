import { PAGE } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentProps } from "react";

type Props = ComponentProps<"nav">;
export default function Nav({ className, ...props }: Props) {
  return (
    <nav
      className={cn([
        "flex gap-6 items-center flex-wrap justify-center [&>.link:hover]:border-b-slate-600",
        className
      ])}
      {...props}
    >
      <Link href={PAGE.HOME}>Início</Link>
      <Link href={PAGE.CONTACT}>Contato</Link>
    </nav>
  );
}
