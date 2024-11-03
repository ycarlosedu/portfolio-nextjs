import { DESIGN_PROJECTS } from "@/constants";
import { Pages } from "@/navigation";

export const designProjects = [
  {
    slug: DESIGN_PROJECTS.PERSONAL_WEBSITE,
    name: "PERSONAL_WEBSITE",
    title: "PERSONAL_WEBSITE.TITLE",
    isWebsitePrivate: false,
    websiteHref: "https://carlossilva.vercel.app",
    href: "FIGMA",
    isDesignPrivate: false,
    designHref:
      "https://www.figma.com/design/p4eexDBogNL2YsgS6y0Z65/Portfolio?node-id=56-4079&t=37VJDAqqdxOCJWAL-1",
    internal_href: "/designs/personal-website" as Pages,
    image: "/images/logo/full.svg",
    alt: "PERSONAL_WEBSITE.ALT",
    about: "PERSONAL_WEBSITE.ABOUT",
    images: [
      {
        name: "PERSONAL_WEBSITE.TITLE",
        image: "/images/projects/codes/personal-website/hero-dark.png"
      },
      {
        name: "PERSONAL_WEBSITE.TITLE",
        image: "/images/projects/codes/personal-website/hero-light.png"
      },
      {
        name: "PERSONAL_WEBSITE.TITLE",
        image: "/images/projects/codes/personal-website/hero-light-pt.png"
      },
      {
        name: "PERSONAL_WEBSITE.TITLE",
        image: "/images/projects/codes/personal-website/carousels.png"
      },
      {
        name: "PERSONAL_WEBSITE.TITLE",
        image: "/images/projects/codes/personal-website/form.png"
      }
    ]
  },
  {
    slug: DESIGN_PROJECTS.ONNE,
    name: "ONNE",
    title: "ONNE.TITLE",
    isWebsitePrivate: false,
    websiteHref: "https://onne.site",
    href: "FIGMA",
    isDesignPrivate: true,
    internal_href: "/designs/onne" as Pages,
    image: "/images/projects/logos/onne.webp",
    alt: "ONNE.ALT",
    images: [
      {
        name: "ONNE.TITLE",
        image: "/images/projects/codes/onne/home.png"
      },
      {
        name: "ONNE.TITLE",
        image: "/images/projects/codes/onne/home-pt.png"
      },
      {
        name: "ONNE.TITLE",
        image: "/images/projects/codes/onne/home-for-you.png"
      },
      {
        name: "ONNE.TITLE",
        image: "/images/projects/codes/onne/home-for-your-company.png"
      },
      {
        name: "ONNE.TITLE",
        image: "/images/projects/codes/onne/about-us.png"
      },
      {
        name: "ONNE.TITLE",
        image: "/images/projects/codes/onne/contact.png"
      }
    ]
  }
];
