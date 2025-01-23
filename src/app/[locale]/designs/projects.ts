import { ProjectInfos } from "@/components/ui/ProjectCard";
import { DESIGN_PROJECTS } from "@/constants";
import { Pages } from "@/i18n/routing";

export const designProjects: ProjectInfos[] = [
  {
    slug: DESIGN_PROJECTS.PERSONAL_WEBSITE,
    name: "PERSONAL_WEBSITE",
    isWebsitePrivate: false,
    websiteHref: "https://carlossilva.vercel.app",
    href: "carlossilva.vercel.app",
    isDesignPrivate: false,
    designHref:
      "https://www.figma.com/design/p4eexDBogNL2YsgS6y0Z65/Portfolio?node-id=56-4079&t=37VJDAqqdxOCJWAL-1",
    internal_href: "/designs/personal-website" as Pages,
    image: "/images/logo/min.svg",
    images: [
      {
        name: "DESKTOP_DARK",
        image: "/images/projects/designs/personal-website/desktop-dark.webp"
      },
      {
        name: "DESKTOP_LIGHT",
        image: "/images/projects/designs/personal-website/desktop-light.webp"
      },
      {
        name: "MOBILE",
        image: "/images/projects/designs/personal-website/mobile.webp"
      },
      {
        name: "COMPONENTS",
        image: "/images/projects/designs/personal-website/components.webp"
      }
    ]
  },
  {
    slug: DESIGN_PROJECTS.DEBUG_COFFEE,
    name: "DEBUG_COFFEE",
    isWebsitePrivate: false,
    websiteHref: "https://debug-cafe.vercel.app",
    href: "debug-cafe.vercel.app",
    isDesignPrivate: false,
    designHref:
      "https://www.figma.com/design/p4eexDBogNL2YsgS6y0Z65/Portfolio?node-id=56-4079&t=37VJDAqqdxOCJWAL-1",
    internal_href: "/designs/debug-coffee" as Pages,
    image: "/images/projects/logos/debug-coffee.webp",
    images: [
      {
        name: "WIREFRAME",
        image: "/images/projects/designs/debug-coffee/wireframe.webp"
      },
      {
        name: "MOCKUP",
        image: "/images/projects/designs/debug-coffee/mockup.webp"
      },
      {
        name: "MOCKUP_REST",
        image: "/images/projects/designs/debug-coffee/mockup-rest.webp"
      },
      {
        name: "COMPONENTS",
        image: "/images/projects/designs/debug-coffee/components.webp"
      }
    ]
  },
  {
    slug: DESIGN_PROJECTS.ONNE,
    name: "ONNE",
    isWebsitePrivate: false,
    websiteHref: "https://onne.site",
    href: "onne.site",
    isDesignPrivate: true,
    internal_href: "/designs/onne" as Pages,
    image: "/images/projects/logos/onne.webp",
    images: [
      {
        name: "HOME",
        image: "/images/projects/designs/onne/home.webp"
      },
      {
        name: "MOBILE",
        image: "/images/projects/designs/onne/mobile.webp"
      },
      {
        name: "PORTAL",
        image: "/images/projects/designs/onne/portal.webp"
      },
      {
        name: "APP",
        image: "/images/projects/designs/onne/app.webp"
      }
    ]
  },
  {
    slug: DESIGN_PROJECTS.SAVEBYS,
    name: "SAVEBYS",
    isWebsitePrivate: false,
    isDesignPrivate: true,
    websiteHref: "https://savebys.com",
    href: "savebys.com",
    internal_href: "/designs/savebys" as Pages,
    image: "/images/projects/logos/savebys.svg",
    images: [
      {
        name: "HOME",
        image: "/images/projects/designs/savebys/home.webp"
      },
      {
        name: "MOBILIA",
        image: "/images/projects/designs/savebys/mobilia.webp"
      },
      {
        name: "MOBILIA_BAG",
        image: "/images/projects/designs/savebys/mobilia-bag.webp"
      },
      {
        name: "MONEY_CAMPAIGN",
        image: "/images/projects/designs/savebys/money-campaign.webp"
      },
      {
        name: "MARKETPLACE",
        image: "/images/projects/designs/savebys/marketplace.webp"
      },
      {
        name: "MARKETPLACE_PRODUCTS",
        image: "/images/projects/designs/savebys/marketplace-products.webp"
      }
    ]
  },
  {
    slug: DESIGN_PROJECTS.SOON,
    name: "SOON",
    href: "",
    internal_href: "" as Pages,
    image: "/images/projects/soon.webp",
    images: []
  }
];
