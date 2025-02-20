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
      <ServicesHero />
      <ServicesTab />
      <AgeJect />
      <Sofwave />
      <IPL />
      <Miconeedling />
    </Fragment>
  );
}
