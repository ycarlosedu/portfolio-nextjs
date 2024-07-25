"use client";
import { Button } from "@/components/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/Dropdown";
import { Globe } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { usePathname, useSelectedLayoutSegments } from "next/navigation";

type Option = {
  country: string;
  lang: string;
  code: string;
};

export default function ToggleLanguage() {
  const pathname = usePathname();
  const urlSegments = useSelectedLayoutSegments();

  const options: Option[] = [
    { country: "US", lang: "English", code: "en-us" },
    { country: "BR", lang: "Português", code: "pt-br" }
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Change Language (en-us/pt-br)</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {options.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            asChild
            disabled={pathname.includes(lang.code)}
          >
            <Link
              key={lang.code}
              href={`/${lang.code}/${urlSegments.join("/")}`}
              className="flex items-center justify-between w-full"
            >
              {lang.lang}
              <span>{lang.country}</span>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
