import { Fragment } from "react";
import ServicesHero from "../components/services-hero";
import ServicesTab from "../components/services-tab";
import PRPBreastRejuvenation from "./components/prp-breast-rejuvenation";
import OShot from "./components/o-shot";
import MonalisaTouch from "./components/monalisa-touch";
import MiraDry from "./components/mira-dry";

const sexualWellnessTabItems = [
  { href: "#prp-breast-rejuvenation", label: "PRP Breast Rejuvenation" },
  { href: "#o-shot", label: "O-Shot" },
  { href: "#monalisa-touch", label: "MonaLisa Touch" },
  { href: "#mira-dry", label: "Mira Dry" },
];

export default function SexualWellness() {
  return (
    <Fragment>
      <ServicesHero
        image="sexual-wellness/sexual-wellness-cover.png"
        title="Sexual Wellness"
        description="Lamb Medical offers specialized women's health treatments, including Elleebana Lash Lift, O-Shot, and Mona Lisa Touch, to enhance wellness and confidence. Our expert team provides safe, effective solutions for aesthetic and intimate health concerns."
      />
      <ServicesTab tabItems={sexualWellnessTabItems} />
      <PRPBreastRejuvenation />
      <OShot />
      <MonalisaTouch />
      <MiraDry />
    </Fragment>
  );
}
