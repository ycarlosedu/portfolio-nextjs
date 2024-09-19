import { DESIGN_PROJECTS } from "@/constants";
import { Pages } from "@/navigation";

export const designProjects = [
  {
    slug: DESIGN_PROJECTS.PERSONAL_WEBSITE,
    name: "PERSONAL_WEBSITE",
    title: "PERSONAL_WEBSITE.TITLE",
    isPrivate: false,
    href: "FIGMA",
    internal_href: "/designs/personal-website" as Pages,
    image: "/images/logo/full.svg",
    alt: "PERSONAL_WEBSITE.ALT",
    about: "PERSONAL_WEBSITE.ABOUT",
    images: [
      {
        name: "PERSONAL_WEBSITE.TITLE",
        image: "/images/projects/codes/personal-website/home-dark.png"
      },
      {
        name: "PERSONAL_WEBSITE.TITLE",
        image: "/images/projects/codes/personal-website/home-light.png"
      },
      {
        name: "PERSONAL_WEBSITE.TITLE",
        image: "/images/projects/codes/personal-website/what-i-do.png"
      }
    ]
  },
  {
    slug: DESIGN_PROJECTS.ONNE,
    name: "ONNE",
    title: "ONNE.TITLE",
    isPrivate: true,
    href: "onne.site",
    internal_href: "/designs/onne" as Pages,
    image: "/images/projects/logos/onne.webp",
    alt: "ONNE.ALT",
    images: [
      {
        name: "ONNE.TITLE",
        image: "/images/projects/codes/onne/home-portuguese.png"
      },
      {
        name: "ONNE.TITLE",
        image: "/images/projects/codes/onne/our-solution-english.png"
      },
      {
        name: "ONNE.TITLE",
        image: "/images/projects/codes/onne/contact-english.png"
      }
    ]
  }
];
