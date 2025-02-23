import "@/app/globals.css";
import Header from "@/components/ui/Header";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { Toaster } from "@/components/ui/Sonner";
import { TooltipProvider } from "@/components/ui/Tooltip";
import { IS_DEV_MODE, PageParams } from "@/constants";
import { locales } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/providers/Theme";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { VercelToolbar } from "@vercel/toolbar/next";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://carlossilva.vercel.app/"),
  category: "technology",
  manifest: "https://carlossilva.vercel.app/site.webmanifest",
  applicationName: "Carlos Silva | Front-End Developer",
  openGraph: {
    url: "https://carlossilva.vercel.app/",
    siteName: "Carlos Silva | Front-End Developer",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://carlossilva.vercel.app/images/logo/open-graph-full.webp",
        width: 1200,
        height: 630
      }
    ]
  },
  keywords: [
    "Front-End",
    "Frontend",
    "Fullstack",
    "Freelancer",
    "Developer",
    "Portfolio",
    "JavaScript",
    "Native",
    "React",
    "TypeScript",
    "Tailwind",
    "CSS",
    "HTML",
    "Next.js",
    "Vercel",
    "JAMstack",
    "PWA",
    "Web Development",
    "Web Design",
    "SEO",
    "Performance",
    "Accessibility",
    "Figma",
    "Design",
    "UI",
    "UX",
    "User Experience",
    "UI/UX",
    "Design Systems",
    "Atomic Design",
    "Component-Driven Development"
  ],
  authors: [
    {
      name: "Carlos Silva",
      url: "https://www.linkedin.com/in/silvacarlosoliveira"
    }
  ],
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  verification: {
    google: "MTz4toocOufcgplUQK0_m85Teyqfm3nc0Hrxy753MWI"
  }
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type Props = {
  children: React.ReactNode;
  params: PageParams;
};

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        id="body"
        className={cn(
          inter.className,
          "w-full overflow-x-hidden bg-white dark:bg-gray-dark text-black dark:text-white antialiased relative"
        )}
      >
        <div itemScope itemType="https://schema.org/WebSite">
          <meta itemProp="url" content="https://carlossilva.vercel.app/" />
          <meta itemProp="name" content="Carlos Silva | Front-End Developer" />
          <meta itemProp="alternateName" content="Carlos Silva Portfolio" />
        </div>

        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <TooltipProvider delayDuration={50}>
              <Header locale={locale} />
              {children}
              <ScrollIndicator />
            </TooltipProvider>
          </NextIntlClientProvider>
          <Toaster />
        </ThemeProvider>

        {/* Vercel */}
        {IS_DEV_MODE && <VercelToolbar />}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
