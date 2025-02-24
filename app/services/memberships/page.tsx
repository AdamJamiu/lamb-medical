import { Fragment } from "react";
import ServicesHero from "../components/services-hero";
import ServicesTab from "../components/services-tab";
import BeWellProgram from "./components/well-program";
import BeWellProgramTeam from "./components/well-program-team";
import OurServices from "./components/our-services";
import WhyChooseUs from "./components/why-choose-us";
import Transformation from "./components/transformation ";
import ConciergeFamily from "../components/concierge-family";
import VisualConsultations from "../weight-loss/components/visual-consultations";
import ElectronicCommunication from "../weight-loss/components/electronic-communication";
import ReImaging from "../weight-loss/components/reimagining";
import AethesticsMembership from "./components/aethestics-membership";

const weightLossTabItems = [
  { href: "#well-program", label: "Be Well Program" },
];

export default function Memberships() {
  return (
    <Fragment>
      <ServicesHero
        image="memberships/memberships.png"
        title="Memberships"
        description="The Be Well program offers a holistic approach to health, providing services such as wellness evaluations, mental health support, stress management, and lifestyle coaching. Members also receive weight loss support with GLP-1 medications, exclusive discounts on supplements and skincare, and access to upcoming services like body composition analysis and VIP pricing for aesthetic treatments."
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
      <ReImaging />
      <AethesticsMembership />
    </Fragment>
  );
}
