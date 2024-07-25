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
import { usePathname } from "next/navigation";

type Option = {
  country: string;
  lang: string;
  code: string;
};

type Props = {
  locale: string;
};

export default function ToggleLanguage({ locale }: Props) {
  const pathname = usePathname();
  const urlWithoutLocale = pathname.split(`/${locale}`)[1];

  const options: Option[] = [
    { country: "US", lang: "English", code: "en-us" },
    { country: "BR", lang: "Português", code: "pt-br" }
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">
            Change Language/Alterar Idioma (en-us/pt-br)
          </span>
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
              href={`/${lang.code}${urlWithoutLocale}`}
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
