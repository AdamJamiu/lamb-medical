import Image from "next/image";
import Wrapper from "@/app/components/Wrapper";
import ServicesIntro from "../../components/services-intro";
import ServicesFAQ from "../../components/services-faq";
import {
  sofwaveBodyBenefits,
  sofwaveBodyFAQs,
  sofwaveBodySatisfaction,
} from "@/app/utils/data";
import ServicesBenefits from "../../components/services-benefits";
import ServicesAfterEffects from "../../components/services-after-effects";

export default function SofwaveBody() {
  return (
    <Wrapper id="sofwave-body" className="grid gap-[4rem]">
      <ServicesIntro
        title="Sofwave Body"
        description={
          <>
            <span>
              From the founders of the aesthetic industry, Sofwave™ Medical
              brings a novel approach to skin tightening using SUPERB™
              Synchronous Ultrasound Parallel Beam Technology.
            </span>
            <span>
              Sofwave™’s breakthrough technology delivers a new standard of
              care to aesthetic treatments, providing safe aesthetic treatments
              for patients."
            </span>
          </>
        }
      />
      <ServicesBenefits
        title="SMART Yet SIMPLE Skin Treatment"
        benefits={sofwaveBodyBenefits}
      />
      <ServicesAfterEffects className="grid-cols-2 grid-rows-[55rem]">
        <div className="relative h-full" data-aos="fade-left">
          <Image
            src="/images/body-treatments/body-treatments-2.png"
            alt=""
            fill
            className="absolute object-top"
          />
        </div>
        <div className="relative h-full" data-aos="fade-right">
          <Image
            src="/images/body-treatments/body-treatments-3.png"
            alt=""
            fill
            className="absolute object-top"
          />
        </div>
      </ServicesAfterEffects>
      <ServicesBenefits
        title="HIGH Patient Satisfaction"
        benefits={sofwaveBodySatisfaction}
      />
      <ServicesAfterEffects className="grid-cols-1 grid-rows-[50rem_50rem]">
        <div className="relative h-full" data-aos="fade-left">
          <Image
            src="/images/body-treatments/body-treatments-4.png"
            alt=""
            fill
            className="absolute object-top"
          />
        </div>
        <div className="relative h-full" data-aos="fade-right">
          <Image
            src="/images/body-treatments/body-treatments-5.png"
            alt=""
            fill
            className="absolute object-top"
          />
        </div>
      </ServicesAfterEffects>
      <ServicesFAQ
        title="Sofwave FAQs: Your questions answered"
        description="Curious about Sofwave? Get answers to common questions about how it works, what to expect, and how it can help you feel confident"
        faqs={sofwaveBodyFAQs}
      />
    </Wrapper>
  );
}
