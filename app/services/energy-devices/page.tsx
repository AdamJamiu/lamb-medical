import { Fragment } from "react";
import Wrapper from "@/app/components/Wrapper";
import ServicesHero from "../components/services-hero";
import ServicesTab from "../components/services-tab";
import IPL from "./components/ipl";
import AgeJect from "./components/ageject";

export default function page() {
  return (
    <Fragment>
      <ServicesHero />
      <ServicesTab />
      <AgeJect />
      <IPL />
    </Fragment>
  );
}
