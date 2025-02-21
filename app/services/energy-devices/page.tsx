import { Fragment } from "react";
import ServicesHero from "../components/services-hero";
import ServicesTab from "../components/services-tab";
import IPL from "./components/ipl";
import AgeJect from "./components/ageject";
import Sofwave from "./components/sofwave";
import Miconeedling from "./components/miconeedling";

const energyDevicesTabItems = [
  { href: "#softwave", label: "Sofwave" },
  { href: "#ipl", label: "IPL" },
  { href: "#miconeedling", label: "Miconeedling" },
  { href: "#ageject", label: "AgeJect" },
];

export default function EnergyDevices() {
  return (
    <Fragment>
      <ServicesHero
        image="energy-devices/energy-devices-image.png"
        title="Energy devices"
        description=" Laser resurfacing rejuvenates the skin by using advanced laser
          technology to reduce wrinkles, scars, and uneven texture while
          stimulating collagen production. This treatment offers a non-invasive
          solution for achieving smoother, firmer skin with minimal downtime."
      />
      <ServicesTab tabItems={energyDevicesTabItems} />
      <AgeJect />
      <Sofwave />
      <IPL />
      <Miconeedling />
    </Fragment>
  );
}
