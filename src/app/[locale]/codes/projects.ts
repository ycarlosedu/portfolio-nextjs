import { ProjectInfos } from "@/components/ui/ProjectCard";
import { CODE_PROJECTS } from "@/constants";
import { Pages } from "@/navigation";

export const codeProjects: ProjectInfos[] = [
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
    slug: CODE_PROJECTS.DEBUG_COFFEE,
    name: "DEBUG_COFFEE",
    title: "DEBUG_COFFEE.TITLE",
    isWebsitePrivate: false,
    websiteHref: "https://debug-cafe.vercel.app",
    isRepositoryPrivate: false,
    repositoryHref: "https://github.com/ycarlosedu/debug-cafe-app",
    href: "debug-cafe.vercel.app",
    internal_href: "/codes/debug-coffee" as Pages,
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
    slug: CODE_PROJECTS.SAVEBYS,
    name: "SAVEBYS",
    title: "SAVEBYS.TITLE",
    isWebsitePrivate: false,
    websiteHref: "https://savebys.com",
    isRepositoryPrivate: false,
    repositoryHref: "https://github.com/ycarlosedu/savebys",
    href: "savebys.com",
    internal_href: "/codes/savebys" as Pages,
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
  },
  {
    slug: CODE_PROJECTS.NEW_WAVE,
    name: "NEW_WAVE",
    title: "NEW_WAVE.TITLE",
    isWebsitePrivate: false,
    websiteHref: "https://newwavepasseiosnauticos.com.br",
    isRepositoryPrivate: true,
    href: "newwavepasseiosnauticos.com.br",
    internal_href: "/codes/new-wave" as Pages,
    image: "/images/projects/logos/new-wave.png",
    alt: "NEW_WAVE.ALT",
    images: [
      {
        name: "NEW_WAVE.TITLE",
        image: "/images/projects/codes/new-wave/login.png"
      },
      {
        name: "NEW_WAVE.TITLE",
        image: "/images/projects/codes/new-wave/painel-banners.png"
      },
      {
        name: "NEW_WAVE.TITLE",
        image: "/images/projects/codes/new-wave/home.png"
      },
      {
        name: "NEW_WAVE.TITLE",
        image: "/images/projects/codes/new-wave/painel-informacoes.png"
      },
      {
        name: "NEW_WAVE.TITLE",
        image:
          "/images/projects/codes/new-wave/painel-informacoes-atualizadas.png"
      },
      {
        name: "NEW_WAVE.TITLE",
        image: "/images/projects/codes/new-wave/painel-duvidas.png"
      },
      {
        name: "NEW_WAVE.TITLE",
        image: "/images/projects/codes/new-wave/home-duvidas.png"
      },
      {
        name: "NEW_WAVE.TITLE",
        image: "/images/projects/codes/new-wave/painel-passeios.png"
      },
      {
        name: "NEW_WAVE.TITLE",
        image: "/images/projects/codes/new-wave/painel-passeios-editar.png"
      },
      {
        name: "NEW_WAVE.TITLE",
        image: "/images/projects/codes/new-wave/painel-passeios-deletar.png"
      },
      {
        name: "NEW_WAVE.TITLE",
        image: "/images/projects/codes/new-wave/home-passeios.png"
      },
      {
        name: "NEW_WAVE.TITLE",
        image: "/images/projects/codes/new-wave/painel-depoimentos.png"
      },
      {
        name: "NEW_WAVE.TITLE",
        image: "/images/projects/codes/new-wave/home-depoimentos.png"
      }
    ]
  }
];
