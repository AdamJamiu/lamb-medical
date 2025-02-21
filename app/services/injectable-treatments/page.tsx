import { Fragment } from "react";
import ServicesHero from "../components/services-hero";
import ServicesTab from "../components/services-tab";
import Botox from "./components/botox";
import DermalFillers from "./components/dermal-fillers";
import Sculptra from "./components/sculptra";
import PRPRejuvenation from "./components/prp-rejuvenation";
import Kybella from "./components/kybella";

const injectableTreatmentsTabItems = [
  { href: "#botox", label: "Injectables (Botox/Dysport)" },
  { href: "#dermal-fillers", label: "Dermal Fillers" },
  { href: "#sculptra", label: "Sculptra" },
  { href: "#prp-rejuvenation", label: "PRP Rejuvenation" },
  { href: "#kybella", label: "Kybella" },
];

export default function InjectableTreatments() {
  return (
    <Fragment>
      <ServicesHero
        image="injectable-treatments/injectable-treatments-image.png"
        title="Injectable Treatments"
        description="Lamb Medical offers a range of injectable treatments, including Botox, Dysport, Daxxify, Sculptra, and PRP, to smooth wrinkles, restore volume, and rejuvenate skin. Our expert team provides personalized, non-surgical solutions for a refreshed and youthful appearance."
      />
      <ServicesTab tabItems={injectableTreatmentsTabItems} />
      <Botox />
      <DermalFillers />
      <Sculptra />
      <PRPRejuvenation />
      <Kybella />
    </Fragment>
  );
}
