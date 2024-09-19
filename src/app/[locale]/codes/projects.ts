import { CODE_PROJECTS } from "@/constants";
import { Pages } from "@/navigation";

export const codeProjects = [
  {
    slug: CODE_PROJECTS.PERSONAL_WEBSITE,
    name: "PERSONAL_WEBSITE",
    title: "PERSONAL_WEBSITE.TITLE",
    isWebsitePrivate: false,
    websiteHref: "https://carlossilva.vercel.app",
    isRepositoryPrivate: true,
    href: "carlossilva.vercel.app",
    internal_href: "/codes/personal-website" as Pages,
    image: "/images/logo/min.svg",
    alt: "PERSONAL_WEBSITE.ALT",
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
    slug: CODE_PROJECTS.ONNE,
    name: "ONNE",
    title: "ONNE.TITLE",
    isWebsitePrivate: false,
    websiteHref: "https://onne.site",
    isRepositoryPrivate: true,
    href: "onne.site",
    internal_href: "/codes/onne" as Pages,
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
