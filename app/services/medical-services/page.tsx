import { Fragment } from "react";
import ServicesHero from "../components/services-hero";
import ServicesTab from "../components/services-tab";
import ConciergeFamily from "../components/concierge-family";
import LaserGenesis from "./components/laser-genesis";
import LaserWartRemoval from "./components/laser-wart-removal";
import LaserVeinTherapy from "./components/laser-vein-therapy";
import LaserNailFungus from "./components/laser-nail";

const weightLossTabItems = [
  { href: "#well-program", label: "Be Well Program" },
];

export default function MedicalServices() {
  return (
    <Fragment>
      <ServicesHero
        image="medical-services/medical-services-cover.png"
        title="Medical Services"
        description="Lamb Medical’s Medical Section provides personalized, high-quality care through concierge medicine, offering direct access to experienced healthcare professionals for comprehensive wellness management. Patients also benefit from advanced treatments like Laser Genesis, designed to promote skin rejuvenation and overall health."
      />
      <ServicesTab tabItems={weightLossTabItems} />
      <ConciergeFamily />
      <LaserGenesis />
      <LaserWartRemoval />
      <LaserVeinTherapy />
      <LaserNailFungus />
    </Fragment>
  );
}
