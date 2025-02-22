interface INav {
  href: string;
  label: string;
}

export interface INavItems {
  href: string;
  label: string;
  subItems?: {
    href: string;
    label: string;
  }[];
}

export const navItems: INavItems[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    href: "/services",
    label: "Service",
    subItems: [
      { href: "/services/injectables", label: "Injectables" },
      { href: "/services/daxxify", label: "Daxxify" },
      { href: "/services/ageject", label: "Ageject" },
      {
        href: "/services/hyper-dilute-radiesse",
        label: "Hyper-Dilute Radiesse",
      },
      { href: "/services/sofwave", label: "Sofwave" },
      { href: "/services/exosomes", label: "Exosomes - (Plated)" },
      { href: "/services/facial-fillers", label: "Facial Fillers" },
      { href: "/services/laser-services", label: "Laser Services" },
      { href: "/services/diamond-glow", label: "Diamondglow" },
      { href: "/services/sculptra", label: "Sculptra" },
      { href: "/services/dermaplaning", label: "Dermaplaning" },
      { href: "/services/peels", label: "peels" },
      { href: "/services/microneedling", label: "Microneedling" },
      { href: "/services/aquagold", label: "Aquagold" },
      { href: "/services/ellebana-lashlift", label: "Ellebana Lash Lift" },
      { href: "/services/kybella", label: "Kybella" },
      { href: "/services/latisse", label: "Latisse" },
      { href: "/services/prp", label: "PRP" },
      { href: "/services/browtinting", label: "Brow Tinting" },
      { href: "/services/vampirefacelift", label: "Vampire Facelift" },
    ],
  },
  { href: "/subcriptions", label: "Subscriptions" },
  { href: "/schedule-online", label: "Schedule Online" },
  { href: "/blog", label: "Blog" },
  {
    href: "/shop",
    label: "Shop",
    subItems: [
      { href: "/services/zo-skin", label: "ZO Skin" },
      { href: "/services/skin-medica", label: "SkinMedica" },
      { href: "/services/exosomes", label: "Exosomes - (Plated)" },
    ],
  },
];
