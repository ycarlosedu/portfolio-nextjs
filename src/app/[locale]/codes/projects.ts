import { ProjectInfos } from "@/components/ui/ProjectCard";
import { CODE_PROJECTS } from "@/constants";
import { Pages } from "@/navigation";

export const codeProjects: ProjectInfos[] = [
  {
    slug: CODE_PROJECTS.PERSONAL_WEBSITE,
    name: "PERSONAL_WEBSITE",
    isWebsitePrivate: false,
    websiteHref: "https://carlossilva.vercel.app",
    isRepositoryPrivate: true,
    href: "carlossilva.vercel.app",
    internal_href: "/codes/personal-website" as Pages,
    image: "/images/logo/min.svg",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Vercel",
      "Shadcn UI",
      "Zod",
      "React Hook Form",
      "Zustand",
      "Framer Motion",
      "Phosphor Icons"
    ],
    images: [
      {
        name: "HERO_DARK",
        image: "/images/projects/codes/personal-website/hero-dark.png"
      },
      {
        name: "HERO_LIGHT",
        image: "/images/projects/codes/personal-website/hero-light.png"
      },
      {
        name: "HERO_LIGHT_PT",
        image: "/images/projects/codes/personal-website/hero-light-pt.png"
      },
      {
        name: "CAROUSELS",
        image: "/images/projects/codes/personal-website/carousels.png"
      },
      {
        name: "FORM",
        image: "/images/projects/codes/personal-website/form.png"
      }
    ]
  },
  {
    slug: CODE_PROJECTS.DEBUG_COFFEE,
    name: "DEBUG_COFFEE",
    isWebsitePrivate: false,
    websiteHref: "https://debug-cafe.vercel.app",
    isRepositoryPrivate: false,
    repositoryHref: "https://github.com/ycarlosedu/debug-cafe-app",
    href: "debug-cafe.vercel.app",
    internal_href: "/codes/debug-coffee" as Pages,
    image: "/images/projects/logos/debug-coffee.png",
    isMobile: true,
    technologies: [
      "React Native",
      "TypeScript",
      "NativeWind",
      "Expo",
      "Node.js",
      "NestJS",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Vercel",
      "Zod",
      "Zustand"
    ],
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
    slug: CODE_PROJECTS.ONNE,
    name: "ONNE",
    isWebsitePrivate: false,
    websiteHref: "https://onne.site",
    isRepositoryPrivate: true,
    href: "onne.site",
    internal_href: "/codes/onne" as Pages,
    image: "/images/projects/logos/onne.webp",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Radix UI",
      "Vercel",
      "Tanstack Query",
      "Yup",
      "Formik",
      "Zustand",
      "Phosphor Icons"
    ],
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
    slug: CODE_PROJECTS.SAVEBYS,
    name: "SAVEBYS",
    isWebsitePrivate: false,
    websiteHref: "https://savebys.com",
    isRepositoryPrivate: false,
    repositoryHref: "https://github.com/ycarlosedu/savebys",
    href: "savebys.com",
    internal_href: "/codes/savebys" as Pages,
    image: "/images/projects/logos/savebys.svg",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Vercel",
      "Sentry",
      "Tanstack Query",
      "Yup",
      "Formik",
      "Zustand",
      "Phosphor Icons"
    ],
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
  },
  {
    slug: CODE_PROJECTS.NEW_WAVE,
    name: "NEW_WAVE",
    isWebsitePrivate: false,
    websiteHref: "https://newwavepasseiosnauticos.com.br",
    isRepositoryPrivate: true,
    href: "newwavepasseiosnauticos.com.br",
    internal_href: "/codes/new-wave" as Pages,
    image: "/images/projects/logos/new-wave.png",
    technologies: [
      "PHP",
      "JavaScript",
      "CSS",
      "HTML",
      "MySQL",
      "Bootstrap",
      "jQuery",
      "Font Awesome"
    ],
    images: [
      {
        name: "LOGIN",
        image: "/images/projects/codes/new-wave/login.png"
      },
      {
        name: "PANEL_BANNERS",
        image: "/images/projects/codes/new-wave/painel-banners.png"
      },
      {
        name: "HOME",
        image: "/images/projects/codes/new-wave/home.png"
      },
      {
        name: "PANEL_INFOS",
        image: "/images/projects/codes/new-wave/painel-informacoes.png"
      },
      {
        name: "PANEL_INFOS_UPDATED",
        image:
          "/images/projects/codes/new-wave/painel-informacoes-atualizadas.png"
      },
      {
        name: "PANEL_FAQS",
        image: "/images/projects/codes/new-wave/painel-duvidas.png"
      },
      {
        name: "HOME_FAQS",
        image: "/images/projects/codes/new-wave/home-duvidas.png"
      },
      {
        name: "PANEL_TOURS",
        image: "/images/projects/codes/new-wave/painel-passeios.png"
      },
      {
        name: "PANEL_TOURS_CREATE",
        image: "/images/projects/codes/new-wave/painel-passeios-editar.png"
      },
      {
        name: "PANEL_TOURS_DELETE",
        image: "/images/projects/codes/new-wave/painel-passeios-deletar.png"
      },
      {
        name: "HOME_TOURS",
        image: "/images/projects/codes/new-wave/home-passeios.png"
      },
      {
        name: "PANEL_TESTIMONIALS",
        image: "/images/projects/codes/new-wave/painel-depoimentos.png"
      },
      {
        name: "HOME_TESTIMONIALS",
        image: "/images/projects/codes/new-wave/home-depoimentos.png"
      }
    ]
  }
];
