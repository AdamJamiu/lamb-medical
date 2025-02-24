import { Fragment } from "react";
import ServicesHero from "../components/services-hero";
import ServicesTab from "../components/services-tab";
import EmsculptNeo from "./components/emsculpt-neo";
import SofwaveBody from "./components/sofwave-body";

const bodyTreatmentsTabItems = [
  { href: "#emsculpt-neo", label: "Emsculpt Neo" },
  { href: "#sofwave-body", label: "Sofwave Body" },
];

export default function BodyTreatments() {
  return (
    <Fragment>
      <ServicesHero
        image="body-treatments/body-treatments-cover.png"
        title="Body Treatments"
        description="Lamb Medical offers advanced body contouring and muscle tightening treatments like Sofwave Body and Kybella to sculpt and define targeted areas. These non-invasive solutions help reduce stubborn fat, improve skin elasticity, and enhance muscle tone for a firmer, more contoured appearance."
      />
      <ServicesTab tabItems={bodyTreatmentsTabItems} />
      <EmsculptNeo />
      <SofwaveBody />
    </Fragment>
  );
}
