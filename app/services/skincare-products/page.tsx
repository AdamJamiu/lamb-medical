import { Fragment } from "react";
import ServicesHero from "../components/services-hero";
import ServicesTab from "../components/services-tab";
import Plated from "./components/plated";
import Exosomes from "./components/exosomes";
import Latisse from "./components/latisse";

const weightLossTabItems = [
  { href: "#plated", label: "Plated" },
  { href: "#exosomes", label: "Exosomes" },
  { href: "#latisse", label: "Latisse" },
];

export default function SkinCareProducts() {
  return (
    <Fragment>
      <ServicesHero
        image="skincare-products/skincare-products-cover.png"
        title="Skin Care Products"
        description="The Wellness & Weight Loss programs at Lamb Lamb Medical offers premium skincare products like Latisse for enhancing eyelash growth and Exosomes for advanced skin rejuvenation. These medical-grade solutions support healthier, more radiant skin by promoting cell regeneration, hydration, and overall skin vitality."
      />
      <ServicesTab tabItems={weightLossTabItems} />
      <Plated />
      <Exosomes />
      <Latisse />
    </Fragment>
  );
}
