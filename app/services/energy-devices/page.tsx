import { Fragment } from "react";
import ServicesHero from "../components/services-hero";
import ServicesTab from "../components/services-tab";
import IPL from "./components/ipl";
import AgeJect from "./components/ageject";
import Sofwave from "./components/sofwave";
import Miconeedling from "./components/miconeedling";

export default function page() {
  return (
    <Fragment>
      <ServicesHero
        image="energy-devices-image.png"
        title="Energy devices"
        description=" Laser resurfacing rejuvenates the skin by using advanced laser
          technology to reduce wrinkles, scars, and uneven texture while
          stimulating collagen production. This treatment offers a non-invasive
          solution for achieving smoother, firmer skin with minimal downtime."
      />
      <ServicesTab />
      <AgeJect />
      <Sofwave />
      <IPL />
      <Miconeedling />
    </Fragment>
  );
}
