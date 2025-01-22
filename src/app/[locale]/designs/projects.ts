import { ProjectInfos } from "@/components/ui/ProjectCard";
import { DESIGN_PROJECTS } from "@/constants";
import { Pages } from "@/navigation";

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
        image: "/images/projects/designs/personal-website/desktop-dark.png"
      },
      {
        name: "DESKTOP_LIGHT",
        image: "/images/projects/designs/personal-website/desktop-light.png"
      },
      {
        name: "MOBILE",
        image: "/images/projects/designs/personal-website/mobile.png"
      },
      {
        name: "COMPONENTS",
        image: "/images/projects/designs/personal-website/components.png"
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
    image: "/images/projects/logos/debug-coffee.png",
    images: [
      {
        name: "WIREFRAME",
        image: "/images/projects/designs/debug-coffee/wireframe.png"
      },
      {
        name: "MOCKUP",
        image: "/images/projects/designs/debug-coffee/mockup.png"
      },
      {
        name: "MOCKUP_REST",
        image: "/images/projects/designs/debug-coffee/mockup-rest.png"
      },
      {
        name: "COMPONENTS",
        image: "/images/projects/designs/debug-coffee/components.png"
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
        image: "/images/projects/codes/onne/home.png"
      },
      {
        name: "HOME_PT",
        image: "/images/projects/codes/onne/home-pt.png"
      },
      {
        name: "HOME_FOR_YOU",
        image: "/images/projects/codes/onne/home-for-you.png"
      },
      {
        name: "HOME_FOR_YOUR_COMPANY",
        image: "/images/projects/codes/onne/home-for-your-company.png"
      },
      {
        name: "ABOUT_US",
        image: "/images/projects/codes/onne/about-us.png"
      },
      {
        name: "CONTACT",
        image: "/images/projects/codes/onne/contact.png"
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
        image: "/images/projects/designs/savebys/home.png"
      },
      {
        name: "MOBILIA",
        image: "/images/projects/designs/savebys/mobilia.png"
      },
      {
        name: "MOBILIA_BAG",
        image: "/images/projects/designs/savebys/mobilia-bag.png"
      },
      {
        name: "MONEY_CAMPAIGN",
        image: "/images/projects/designs/savebys/money-campaign.png"
      },
      {
        name: "MARKETPLACE",
        image: "/images/projects/designs/savebys/marketplace.png"
      },
      {
        name: "MARKETPLACE_PRODUCTS",
        image: "/images/projects/designs/savebys/marketplace-products.png"
      }
    ]
  }
];
