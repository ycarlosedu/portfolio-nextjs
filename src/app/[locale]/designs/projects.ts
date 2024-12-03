import { ProjectInfos } from "@/components/ui/ProjectCard";
import { DESIGN_PROJECTS } from "@/constants";
import { Pages } from "@/navigation";

export const designProjects: ProjectInfos[] = [
  {
    slug: DESIGN_PROJECTS.PERSONAL_WEBSITE,
    name: "PERSONAL_WEBSITE",
    title: "PERSONAL_WEBSITE.TITLE",
    isWebsitePrivate: false,
    websiteHref: "https://carlossilva.vercel.app",
    href: "carlossilva.vercel.app",
    isDesignPrivate: false,
    designHref:
      "https://www.figma.com/design/p4eexDBogNL2YsgS6y0Z65/Portfolio?node-id=56-4079&t=37VJDAqqdxOCJWAL-1",
    internal_href: "/designs/personal-website" as Pages,
    image: "/images/logo/min.svg",
    alt: "PERSONAL_WEBSITE.ALT",
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
    slug: DESIGN_PROJECTS.DEBUG_COFFEE,
    name: "DEBUG_COFFEE",
    title: "DEBUG_COFFEE.TITLE",
    isWebsitePrivate: false,
    websiteHref: "https://debug-cafe.vercel.app",
    href: "debug-cafe.vercel.app",
    isDesignPrivate: false,
    designHref:
      "https://www.figma.com/design/p4eexDBogNL2YsgS6y0Z65/Portfolio?node-id=56-4079&t=37VJDAqqdxOCJWAL-1",
    internal_href: "/designs/debug-coffee" as Pages,
    image: "/images/projects/logos/debug-coffee.png",
    alt: "DEBUG_COFFEE.ALT",
    isMobile: true,
    images: [
      {
        name: "DEBUG_COFFEE.TITLE",
        image: "/images/projects/codes/debug-coffee/login.webp"
      },
      {
        name: "DEBUG_COFFEE.TITLE",
        image: "/images/projects/codes/debug-coffee/home.webp"
      },
      {
        name: "DEBUG_COFFEE.TITLE",
        image: "/images/projects/codes/debug-coffee/search.webp"
      },
      {
        name: "DEBUG_COFFEE.TITLE",
        image: "/images/projects/codes/debug-coffee/product-details.webp"
      },
      {
        name: "DEBUG_COFFEE.TITLE",
        image: "/images/projects/codes/debug-coffee/profile.webp"
      },
      {
        name: "DEBUG_COFFEE.TITLE",
        image: "/images/projects/codes/debug-coffee/cart.webp"
      },
      {
        name: "DEBUG_COFFEE.TITLE",
        image: "/images/projects/codes/debug-coffee/order-details.webp"
      },
      {
        name: "DEBUG_COFFEE.TITLE",
        image: "/images/projects/codes/debug-coffee/profile-manager.webp"
      },
      {
        name: "DEBUG_COFFEE.TITLE",
        image: "/images/projects/codes/debug-coffee/order-delivered.webp"
      },
      {
        name: "DEBUG_COFFEE.TITLE",
        image: "/images/projects/codes/debug-coffee/order-feedback.webp"
      },
      {
        name: "DEBUG_COFFEE.TITLE",
        image: "/images/projects/codes/debug-coffee/my-orders-delivered.webp"
      }
    ]
  },
  {
    slug: DESIGN_PROJECTS.ONNE,
    name: "ONNE",
    title: "ONNE.TITLE",
    isWebsitePrivate: false,
    websiteHref: "https://onne.site",
    href: "https://onne.site",
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
  },
  {
    slug: DESIGN_PROJECTS.SAVEBYS,
    name: "SAVEBYS",
    title: "SAVEBYS.TITLE",
    isWebsitePrivate: false,
    isDesignPrivate: true,
    websiteHref: "https://savebys.com",
    href: "savebys.com",
    internal_href: "/designs/savebys" as Pages,
    image: "/images/projects/logos/savebys.svg",
    alt: "SAVEBYS.ALT",
    images: [
      {
        name: "SAVEBYS.TITLE",
        image: "/images/projects/codes/savebys/home.png"
      },
      {
        name: "SAVEBYS.TITLE",
        image: "/images/projects/codes/savebys/home-how-it-works.png"
      },
      {
        name: "SAVEBYS.TITLE",
        image: "/images/projects/codes/savebys/home-supporters.png"
      },
      {
        name: "SAVEBYS.TITLE",
        image: "/images/projects/codes/savebys/about-us.png"
      },
      {
        name: "SAVEBYS.TITLE",
        image: "/images/projects/codes/savebys/mobilia.png"
      },
      {
        name: "SAVEBYS.TITLE",
        image: "/images/projects/codes/savebys/mobilia-form.png"
      },
      {
        name: "SAVEBYS.TITLE",
        image: "/images/projects/codes/savebys/mobilia-products.png"
      },
      {
        name: "SAVEBYS.TITLE",
        image: "/images/projects/codes/savebys/mobilia-products-filters.png"
      },
      {
        name: "SAVEBYS.TITLE",
        image: "/images/projects/codes/savebys/mobilia-product.png"
      },
      {
        name: "SAVEBYS.TITLE",
        image: "/images/projects/codes/savebys/mobilia-bag.png"
      },
      {
        name: "SAVEBYS.TITLE",
        image: "/images/projects/codes/savebys/mobilia-bag-form.png"
      }
    ]
  }
];
