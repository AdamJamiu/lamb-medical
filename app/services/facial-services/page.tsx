import { Fragment } from "react";
import ServicesHero from "../components/services-hero";
import ServicesTab from "../components/services-tab";
import AquaGold from "./_components/AquaGold";
import ServicesFAQ from "../components/services-faq";
import { aquaGoldFAQs } from "@/app/utils/data";
import DiamondGlow from "./_components/DiamondGlow";
import Dermaplanning from "./_components/Dermaplanning";
import Peels from "./_components/Peels";

const facialServicesTabItems = [
  { href: "#aqua-gold", label: "Aqua Gold" },
  { href: "#diamond-glow", label: "Diamond Glow" },
  { href: "#dermaplanning", label: "Dermaplanning" },
  { href: "#Peels", label: "Peels" },
];

export default function FacialServices() {
  return (
    <Fragment>
      <ServicesHero
        image="facial-services/facial-service-image.png"
        title="Facial Services"
        description="Facial services at Lamb Medical are designed to rejuvenate and enhance skin health through advanced treatments like Diamond Glow, dermaplaning, peels, and Aqua Gold. These customized treatments target concerns such as dullness, texture, and hydration, leaving the skin refreshed, radiant, and smooth."
      />
      <ServicesTab tabItems={facialServicesTabItems} />
      <AquaGold />
      <ServicesFAQ
        title="AquaGold FAQs: Your questions answered"
        description="Curious about AquaGold? Get answers to common questions about how it works, what to expect, and how it can help you feel confident and sweat-free."
        faqs={aquaGoldFAQs}
      />
      <DiamondGlow />
      <Dermaplanning />
      <Peels />
    </Fragment>
  );
}
