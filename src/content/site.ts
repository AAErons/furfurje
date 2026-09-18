/**
 * Central content for FURFURJÉ.
 *
 * How to replace values:
 * - `status: "draft"` is unverified copy for approval. Edit the strings, then set status to "approved".
 * - `status: "missing"` must be supplied before launch. Links stay inactive until `value` is set.
 * - Team names and specialties were transcribed from the supplied portrait posters.
 * - Reviews are omitted because none were supplied.
 */

export type ContentStatus = "approved" | "draft" | "missing" | "supplied-portrait";

export type NavItem = {
  href: string;
  label: string;
};

export type ImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
  objectPosition?: string;
};

export type TeamMember = {
  id: string;
  name: string;
  specialty: string;
  status: ContentStatus;
  photo: ImageAsset;
};

export type Service = {
  id: string;
  title: string;
  status: ContentStatus;
  photo: ImageAsset;
};

export type Benefit = {
  id: string;
  label: string;
  icon: "heart" | "leaf" | "paw" | "house";
  status: ContentStatus;
};

export type Polaroid = {
  photo: ImageAsset;
  caption: string;
  captionShort?: string;
};

export type GalleryItem = {
  id: string;
  photo: ImageAsset;
  span: string;
};

export type ContactField = {
  label: string;
  value: string | null;
  href?: string | null;
  status: ContentStatus;
};

export type SocialLink = {
  label: string;
  href: string;
};

export const site = {
  name: "FURFURJÉ",
  tagline: "Suņu grūminga salons",
  language: "lv",
  /**
   * Set a full URL (https://...) when a booking destination exists.
   * Until then, every "Pierakstīties" control scrolls to #kontakti.
   */
  bookingUrl: null as string | null,
  seo: {
    title: "FURFURJÉ - suņu grūminga salons",
    description:
      "FURFURJÉ suņu grūminga salons. Rūpīga suņu kopšana ar mierīgu un individuālu pieeju.",
    noindex: true,
  },
  hero: {
    eyebrow: "Profesionāla suņu aprūpe Rīgā",
    eyebrowStatus: "draft" as ContentStatus,
    headline: ["Skaisti", "suņi.", "Laimīgi", "saimnieki."],
    lede: "Rūpīga suņu kopšana mierīgā vidē ar individuālu pieeju.",
    handwritten: "Vairāk nekā frizūra. Tā ir rūpe.",
    cta: "Pierakstīties",
    photo: {
      src: "/images/banner.png",
      alt: "Grūmere Anna apskauj bokseri salonā",
      width: 1672,
      height: 941,
      objectPosition: "50% 38%",
    } satisfies ImageAsset,
    polaroids: [
      {
        caption: "Laimīgākas dienas",
        photo: {
          src: "/images/ui/iveta.png",
          alt: "Grūmere Iveta ar melnu kokerspanielu",
          width: 528,
          height: 661,
        },
      },
      {
        caption: "Mierīga vide",
        photo: {
          src: "/images/ui/kristine-paula.png",
          alt: "Grūmere Kristīne Paula ar sarkanu pūdeli",
          width: 474,
          height: 731,
          objectPosition: "48% 0%",
        },
      },
      {
        caption: "Individuāla pieeja",
        captionShort: "Mierīga pieeja",
        photo: {
          src: "/images/ui/kristine.png",
          alt: "Grūmere Kristīne ar sarkanu seteru",
          width: 556,
          height: 702,
        },
      },
    ] satisfies [Polaroid, Polaroid, Polaroid],
  },
  benefits: [
    {
      id: "gentle",
      icon: "heart",
      label: "Saudzīga pieeja katram sunim",
      status: "draft",
    },
    {
      id: "experience",
      icon: "leaf",
      label: "Pieredzējuši grūmeri",
      status: "draft",
    },
    {
      id: "products",
      icon: "paw",
      label: "Kvalitatīva profesionāla kosmētika",
      status: "draft",
    },
    {
      id: "location",
      icon: "house",
      label: "Ērta atrašanās vieta Rīgas centrā",
      status: "draft",
    },
  ] satisfies Benefit[],
  team: {
    title: "Mūsu grūmeru komanda",
    intro: "Profesionāli ar lielu mīlestību pret suņiem.",
    introStatus: "draft" as ContentStatus,
    members: [
      {
        id: "anna",
        name: "Anna",
        specialty: "Triminga un rollinga speciāliste",
        status: "supplied-portrait",
        photo: {
          src: "/images/ui/anna.png",
          alt: "Anna ar bokseri",
          width: 528,
          height: 566,
          objectPosition: "32% 0%",
        },
      },
      {
        id: "iveta",
        name: "Iveta",
        specialty: "Spanielu grūminga speciāliste",
        status: "supplied-portrait",
        photo: {
          src: "/images/ui/iveta.png",
          alt: "Iveta ar kokerspanielu",
          width: 528,
          height: 661,
        },
      },
      {
        id: "kristine-paula",
        name: "Kristīne Paula",
        specialty: "Poodle un doodle speciāliste",
        status: "supplied-portrait",
        photo: {
          src: "/images/ui/kristine-paula.png",
          alt: "Kristīne Paula ar sarkanu pūdeli",
          width: 474,
          height: 731,
        },
      },
      {
        id: "kristine",
        name: "Kristīne",
        specialty: "Adaptīvā grūminga speciāliste",
        status: "supplied-portrait",
        photo: {
          src: "/images/ui/kristine.png",
          alt: "Kristīne ar sarkanu seteru",
          width: 556,
          height: 702,
        },
      },
    ] satisfies TeamMember[],
  },
  services: {
    title: "Mūsu pakalpojumi",
    priceLabel: "Cena pēc konsultācijas",
    cta: "Izvēlēties",
    items: [
      {
        id: "small",
        title: "Mazie suņi",
        status: "draft",
        photo: {
          src: "/images/gallery/apricot-poodle.png",
          alt: "Mazs aprikožu pūdelis pēc grūminga",
          width: 717,
          height: 964,
          objectPosition: "50% 35%",
        },
      },
      {
        id: "medium",
        title: "Vidējie suņi",
        status: "draft",
        photo: {
          src: "/images/gallery/jack-russell.png",
          alt: "Džeka Rasela terjers atpūšas krēslā",
          width: 1009,
          height: 1006,
          objectPosition: "50% 40%",
        },
      },
      {
        id: "coated",
        title: "Aspalvainie suņi",
        status: "draft",
        photo: {
          src: "/images/gallery/yorkie.png",
          alt: "Jorkšīras terjers pēc grūminga",
          width: 720,
          height: 972,
          objectPosition: "50% 30%",
        },
      },
      {
        id: "large",
        title: "Lielie suņi",
        status: "draft",
        photo: {
          src: "/images/gallery/shar-pei.png",
          alt: "Šarpejs stāv uz krēsla",
          width: 718,
          height: 971,
          objectPosition: "48% 35%",
        },
      },
    ] satisfies Service[],
  },
  gallery: {
    title: "Mūsu darbi runā paši par sevi",
    items: [
      {
        id: "shepherd",
        span: "g1",
        photo: {
          src: "/images/gallery/shepherd.png",
          alt: "Brūni balts aitu suns sēž krēslā",
          width: 1007,
          height: 1010,
          objectPosition: "50% 40%",
        },
      },
      {
        id: "jack",
        span: "g2",
        photo: {
          src: "/images/gallery/jack-russell.png",
          alt: "Džeka Rasela terjers ar izkļātu mēli",
          width: 1009,
          height: 1006,
          objectPosition: "50% 42%",
        },
      },
      {
        id: "apricot",
        span: "g3",
        photo: {
          src: "/images/gallery/apricot-poodle.png",
          alt: "Aprikožu pūdelis pēc griezuma",
          width: 717,
          height: 964,
          objectPosition: "50% 28%",
        },
      },
      {
        id: "yorkie",
        span: "g4",
        photo: {
          src: "/images/gallery/yorkie.png",
          alt: "Jorkšīras terjers ar sasietu spalvu",
          width: 720,
          height: 972,
          objectPosition: "50% 28%",
        },
      },
      {
        id: "bedlington",
        span: "g5",
        photo: {
          src: "/images/gallery/bedlington.png",
          alt: "Bedlingtona terjers profilā",
          width: 966,
          height: 977,
          objectPosition: "50% 40%",
        },
      },
      {
        id: "sharpei",
        span: "g6",
        photo: {
          src: "/images/gallery/shar-pei.png",
          alt: "Šarpejs ar ķēdes kakla siksnu",
          width: 718,
          height: 971,
          objectPosition: "50% 30%",
        },
      },
      {
        id: "westie",
        span: "g7",
        photo: {
          src: "/images/gallery/westie.png",
          alt: "Baltas vestie ar zilu kakla siksnu",
          width: 724,
          height: 974,
          objectPosition: "50% 32%",
        },
      },
      {
        id: "red-poodle",
        span: "g8",
        photo: {
          src: "/images/gallery/red-poodle.png",
          alt: "Sarkans pūdelis ar pavadiņu",
          width: 718,
          height: 979,
          objectPosition: "50% 32%",
        },
      },
    ] satisfies GalleryItem[],
  },
  reviews: [] as const,
  contact: {
    title: "Gaidīsim jūs pie mums",
    photo: {
      src: "/images/salon.jpg",
      alt: "FURFURJÉ salona reģistratūra ar šaha grīdu un suņu portretiem",
      width: 1064,
      height: 1043,
      objectPosition: "40% 55%",
    } satisfies ImageAsset,
    address: {
      label: "Adrese",
      value: null,
      href: null,
      status: "missing",
    } satisfies ContactField,
    phone: {
      label: "Tālrunis",
      value: null,
      href: null,
      status: "missing",
    } satisfies ContactField,
    hours: {
      label: "Darba laiks",
      value: null,
      status: "missing",
    } satisfies ContactField,
    socials: [] as SocialLink[],
  },
  logo: {
    src: "/images/logo.png",
    alt: "FURFURJÉ suņu grūminga salons",
    width: 1172,
    height: 1342,
  },
} as const;

export const navItems: NavItem[] = [
  { href: "#sakums", label: "Sākums" },
  { href: "#komanda", label: "Mūsu komanda" },
  { href: "#pakalpojumi", label: "Pakalpojumi" },
  { href: "#galerija", label: "Galerija" },
  { href: "#kontakti", label: "Kontakti" },
];

export function bookingHref(): string {
  return site.bookingUrl ?? "#kontakti";
}

export function bookingIsExternal(): boolean {
  return Boolean(site.bookingUrl);
}
