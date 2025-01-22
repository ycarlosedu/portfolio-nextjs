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
    isMobile: true,
    images: [
      {
        name: "LOGIN",
        image: "/images/projects/codes/debug-coffee/login.webp"
      },
      {
        name: "HOME",
        image: "/images/projects/codes/debug-coffee/home.webp"
      },
      {
        name: "SEARCH",
        image: "/images/projects/codes/debug-coffee/search.webp"
      },
      {
        name: "PRODUCT_DETAILS",
        image: "/images/projects/codes/debug-coffee/product-details.webp"
      },
      {
        name: "CART",
        image: "/images/projects/codes/debug-coffee/cart.webp"
      },
      {
        name: "ORDER_DETAILS",
        image: "/images/projects/codes/debug-coffee/order-details.webp"
      },
      {
        name: "PROFILE",
        image: "/images/projects/codes/debug-coffee/profile.webp"
      },
      {
        name: "PROFILE_MANAGER",
        image: "/images/projects/codes/debug-coffee/profile-manager.webp"
      },
      {
        name: "ORDER_DELIVERED",
        image: "/images/projects/codes/debug-coffee/order-delivered.webp"
      },
      {
        name: "ORDER_FEEDBACK",
        image: "/images/projects/codes/debug-coffee/order-feedback.webp"
      },
      {
        name: "MY_ORDERS_DELIVERED",
        image: "/images/projects/codes/debug-coffee/my-orders-delivered.webp"
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
        image: "/images/projects/codes/savebys/home.png"
      },
      {
        name: "HOW_IT_WORKS",
        image: "/images/projects/codes/savebys/home-how-it-works.png"
      },
      {
        name: "SUPPORTERS",
        image: "/images/projects/codes/savebys/home-supporters.png"
      },
      {
        name: "ABOUT_US",
        image: "/images/projects/codes/savebys/about-us.png"
      },
      {
        name: "MOBILIA",
        image: "/images/projects/codes/savebys/mobilia.png"
      },
      {
        name: "MOBILIA_FORM",
        image: "/images/projects/codes/savebys/mobilia-form.png"
      },
      {
        name: "MOBILIA_PRODUCTS",
        image: "/images/projects/codes/savebys/mobilia-products.png"
      },
      {
        name: "MOBILIA_PRODUCTS_FILTERS",
        image: "/images/projects/codes/savebys/mobilia-products-filters.png"
      },
      {
        name: "MOBILIA_PRODUCT",
        image: "/images/projects/codes/savebys/mobilia-product.png"
      },
      {
        name: "MOBILIA_BAG",
        image: "/images/projects/codes/savebys/mobilia-bag.png"
      },
      {
        name: "MOBILIA_BAG_FORM",
        image: "/images/projects/codes/savebys/mobilia-bag-form.png"
      }
    ]
  }
];
