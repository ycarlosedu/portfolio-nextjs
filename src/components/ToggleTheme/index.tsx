"use client";

import { MoonStars, Sun } from "@phosphor-icons/react/dist/ssr";
import { useTheme } from "next-themes";

import { Button } from "@/components/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/Dropdown";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/Tooltip";
import { useTranslations } from "next-intl";

export default function ToggleTheme() {
  const t = useTranslations("TOGGLE_THEME");

  const { setTheme, theme } = useTheme();

  const isLight = theme === "light";
  const isDark = theme === "dark";
  const isSystem = theme === "system";

  return (
    <Tooltip>
      <DropdownMenu>
        <TooltipTrigger asChild>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" id="toggle-theme-trigger">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <MoonStars className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">{t("ARIA_LABEL")}</span>
            </Button>
          </DropdownMenuTrigger>
        </TooltipTrigger>

        <DropdownMenuContent align="end" id="toggle-theme-content">
          <DropdownMenuItem
            disabled={isLight}
            onClick={() => setTheme("light")}
          >
            {t("LIGHT")}
          </DropdownMenuItem>
          <DropdownMenuItem disabled={isDark} onClick={() => setTheme("dark")}>
            {t("DARK")}
          </DropdownMenuItem>
          <DropdownMenuItem
            disabled={isSystem}
            onClick={() => setTheme("system")}
          >
            {t("SYSTEM")}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <TooltipContent side="left">
        <p>
          Change Theme / <br />
          Alterar Tema
        </p>
      </TooltipContent>
    </Tooltip>
  );
}
