import { Fragment } from "react";
import ServicesHero from "../components/services-hero";
import ServicesTab from "../components/services-tab";
import ConciergeFamily from "../components/concierge-family";
import BeWellProgram from "../memberships/components/well-program";
import BeWellProgramTeam from "../memberships/components/well-program-team";
import OurServices from "../memberships/components/our-services";
import WhyChooseUs from "../memberships/components/why-choose-us";
import Transformation from "../memberships/components/transformation ";
import VisualConsultations from "./components/visual-consultations";
import ElectronicCommunication from "./components/electronic-communication";

const weightLossTabItems = [
  { href: "#well-program", label: "Be Well Program" },
];

export default function WeightLoss() {
  return (
    <Fragment>
      <ServicesHero
        image="weight-loss/weight-loss-cover.png"
        title="Wellness & Weight Loss"
        description="The Wellness & Weight Loss programs at Lamb Medical focus on personalized plans to help patients achieve sustainable health and fitness goals. Through expert guidance, advanced treatments, and lifestyle support, these programs promote overall well-being, increased energy, and long-term health."
      />
      <ServicesTab tabItems={weightLossTabItems} />
      <BeWellProgram />
      <BeWellProgramTeam />
      <OurServices />
      <VisualConsultations />
      <WhyChooseUs />
      <Transformation />
      <ConciergeFamily />
      <ElectronicCommunication />
    </Fragment>
  );
}
