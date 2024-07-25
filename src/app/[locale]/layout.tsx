import "@/app/globals.css";
import Header from "@/components/Header";
import { Toaster } from "@/components/Sonner";
import { TooltipProvider } from "@/components/Tooltip";
import { locales } from "@/i18n";
import { ThemeProvider } from "@/providers/Theme";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import {
  AbstractIntlMessages,
  NextIntlClientProvider,
  useMessages
} from "next-intl";
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
        url: "https://carlossilva.vercel.app/images/logo/logo-black.webp",
        width: 280,
        height: 250
      }
    ]
  },
  keywords: [
    "Front-End Developer",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Next.js",
    "Vercel",
    "JAMstack",
    "PWA",
    "Web Development",
    "Web Design",
    "SEO",
    "Performance",
    "Accessibility",
    "User Experience",
    "UI/UX",
    "Design Systems",
    "Atomic Design",
    "Component-Driven Development",
    "Design Tokens",
    "Design Patterns",
    "Design Principles",
    "Design Best Practices",
    "Design Systems",
    "Design Tools",
    "Design Resources",
    "Design Inspiration",
    "Design Trends",
    "Design Thinking"
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
  }
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export default function RootLayout({ children, params: { locale } }: Props) {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body className={inter.className + " w-full overflow-x-hidden"}>
        <div itemScope itemType="https://schema.org/WebSite">
          <meta itemProp="url" content="https://carlossilva.vercel.app/" />
          <meta itemProp="name" content="Carlos Silva | Front-End Developer" />
          <meta itemProp="alternateName" content="Carlos Silva Dev" />
        </div>

        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NextIntlClientProvider
            locale={locale}
            messages={messages as AbstractIntlMessages}
          >
            <TooltipProvider delayDuration={50}>
              <Header locale={locale} />
              {children}
            </TooltipProvider>
          </NextIntlClientProvider>
          <Toaster />
        </ThemeProvider>

        {/* Vercel */}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}