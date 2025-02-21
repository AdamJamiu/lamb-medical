export interface IServices {
  title: string;
  description: string;
  link?: string;
  bgImgSrc: string;
}

export const all_services: IServices[] = [
  {
    bgImgSrc: "/15.png",
    description:
      "For services like; Diamond glow, Dermaplanning, Peels, AquaGold",
    link: "",
    title: "Facial Services",
  },
  {
    bgImgSrc: "/16.png",
    description:
      "For services like; Sofwave, IPL (Photofacial), Miconeedling (SkinPen), RF Microneedling, AgeJet",
    link: "/services/energy-devices",
    title: "Energy Devices",
  },
  {
    title: "Injectable Treatments",
    bgImgSrc: "/17.png",
    description:
      "For services like; Dermal filler, neurotoxins (Botox, Xeomin, Daxxify), Sculptra, PRP",
    link: "/services/injectable-treatments",
  },
  {
    title: "Wellness & Weight Loss",
    bgImgSrc: "/18.png",
    description:
      "For services like; Be Well program (Semigluite & Tirzepatide), Wellness shots such as NAD, B-12",
    link: "",
  },
  {
    title: "Body Treatments",
    bgImgSrc: "/19.png",
    description: "For services like; Emsulpt Neo, Sofwave body, Kybella",
    link: "",
  },
  {
    title: "Medical Services",
    bgImgSrc: "/20.png",
    description:
      "Concierge Medicine, Laser Genesis (warts, veins & nail fungas)",
    link: "",
  },
  {
    title: "Sexual Wellness",
    bgImgSrc: "/21.png",
    description: "",
    link: "",
  },
  {
    title: "Skin care Products",
    bgImgSrc: "/22.png",
    description:
      "Retail skin care brands like ZO, Skin Medica, Latisse (eye lash growth serums), and Exosomes (Plated)",
    link: "",
  },
  {
    title: "Memberships",
    bgImgSrc: "/23.png",
    description:
      "Be Well Memberships (Both virtual & in clinic offered), Aesthetic Membership (Access & Premium)",
    link: "",
  },
];
