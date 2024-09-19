"use client";
import { Button } from "@/components/ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/Dropdown";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from "@/components/ui/Tooltip";
import { TransitionLink } from "@/components/ui/TransitionLink";
import { Pages } from "@/navigation";
import { Globe } from "@phosphor-icons/react/dist/ssr";
import { usePathname } from "next/navigation";

type Option = {
  country: string;
  lang: string;
  code: string;
};

type Props = {
  locale: string;
};

export function ToggleLanguage({ locale }: Props) {
  const pathname = usePathname();
  const urlWithoutLocale = pathname.split(`/${locale}`)[1] || "/";

  const options: Option[] = [
    { country: "US", lang: "English", code: "en-us" },
    { country: "BR", lang: "Português", code: "pt-br" }
  ];

  return (
    <Tooltip>
      <DropdownMenu>
        <TooltipTrigger asChild>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Globe className="h-[1.2rem] w-[1.2rem]" />
              <span className="sr-only">
                Change Language/Alterar Idioma (en-us/pt-br)
              </span>
            </Button>
          </DropdownMenuTrigger>
        </TooltipTrigger>
        <DropdownMenuContent align="end">
          {options.map((lang) => (
            <DropdownMenuItem
              key={lang.code}
              asChild
              disabled={pathname.includes(lang.code)}
            >
              <TransitionLink
                key={lang.code}
                locale={lang.code}
                href={`/${urlWithoutLocale}` as Pages}
                className="flex items-center justify-between w-full"
                forceTransition
              >
                {lang.lang}
                <span>{lang.country}</span>
              </TransitionLink>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <TooltipContent side="left">
        <p>
          Change Language / <br />
          Alterar Idioma
        </p>
      </TooltipContent>
    </Tooltip>
  );
}
