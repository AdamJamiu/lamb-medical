import Wrapper from "@/app/components/Wrapper";
import Image from "next/image";
import ServicesIntro from "../../components/services-intro";
import ServicesAfterEffects from "../../components/services-after-effects";
import ServicesFAQ from "../../components/services-faq";
import { sculptraFAQs } from "@/app/utils/data";

export default function Sculptra() {
  return (
    <Wrapper id="sculptra" className="grid gap-[4rem]">
      <ServicesIntro
        title="Sculptra"
        description="Good news! It’s possible to boost your body’s natural collagen production! Sculptra Aesthetic works subtly and gradually over time within the deep, dermis layer of the skin, correcting shallow to deep facial wrinkles and folds such as smile lines for a more youthful-looking appearance. Sculptra Aesthetic helps stimulate your skin’s own natural collagen production over time, helping to reinforce skin’s inner structure and increase facial volume that has been lost to aging"
      />

      <ServicesAfterEffects className="grid-cols-1 grid-rows-[50rem]">
        <div className="relative h-full" data-aos="fade-right">
          <Image
            src="/images/injectable-treatments/sculptra.png"
            alt=""
            fill
            className="absolute object-cover"
          />
        </div>
      </ServicesAfterEffects>
      <ServicesAfterEffects
        title="Before/After Photos"
        className="grid-cols-1 grid-rows-none [&>figcaption]:text-left"
      >
        <div className="relative h-[60rem]" data-aos="fade-right">
          <Image
            src="/images/injectable-treatments/sculptra-1.png"
            alt=""
            fill
            className="absolute object-top"
          />
        </div>
        <div className="relative h-[60rem]" data-aos="fade-right">
          <Image
            src="/images/injectable-treatments/sculptra-2.png"
            alt=""
            fill
            className="absolute object-top"
          />
        </div>
        <div className="relative h-[60rem]" data-aos="fade-right">
          <Image
            src="/images/injectable-treatments/sculptra-3.png"
            alt=""
            fill
            className="absolute object-top"
          />
        </div>
      </ServicesAfterEffects>
      <ServicesFAQ
        title="Sculptra FAQs: Your questions answered"
        description="Curious about Sculptra? Get answers to common questions about how it works, what to expect, and how it can help you feel confident"
        faqs={sculptraFAQs}
      />
    </Wrapper>
  );
}
