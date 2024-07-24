import Header from "@/components/Header";
import { Toaster } from "@/components/Sonner";
import { TooltipProvider } from "@/components/Tooltip";
import { ThemeProvider } from "@/providers/Theme";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // metadataBase: new URL("https://carlossilva.vercel.app/"),
  category: "technology",
  // manifest: "https://carlossilva.vercel.app/site.webmanifest",
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

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html
      lang="en"
      className="flex flex-col items-start justify-start w-screen overflow-hidden"
    >
      <body
        className={
          inter.className +
          " relative top-0 left-0 right-0 min-h-screen w-full overflow-hidden"
        }
      >
        <div itemScope itemType="https://schema.org/WebSite">
          <meta itemProp="url" content="https://carlossilva.vercel.app/" />
          <meta itemProp="name" content="Carlos Silva | Front-End Developer" />
          <meta itemProp="alternateName" content="Carlos Silva Dev" />
        </div>

        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TooltipProvider delayDuration={50}>
            <Header />
            {children}
          </TooltipProvider>
          <Toaster />
        </ThemeProvider>

        {/* Vercel */}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
