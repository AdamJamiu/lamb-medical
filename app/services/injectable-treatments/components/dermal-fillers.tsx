import Wrapper from "@/app/components/Wrapper";
import Image from "next/image";
import ServicesIntro from "../../components/services-intro";
import ServicesBenefits from "../../components/services-benefits";
import ServicesAfterEffects from "../../components/services-after-effects";
import ServicesFAQ from "../../components/services-faq";
import { dermalFillersBenefits, dermalFillersFAQs } from "@/app/utils/data";

export default function DermalFillers() {
  return (
    <Wrapper id="dermal-fillers" className="grid gap-[4rem]">
      <ServicesIntro
        title="Dermal Fillers"
        description="Dermal fillers are a non-surgical cosmetic treatment designed to restore volume, smooth wrinkles, and enhance facial contours. Made from hyaluronic acid and other biocompatible substances, fillers provide immediate results by adding volume to targeted areas such as the cheeks, lips, jawline, and under-eye hollows. Whether you want to soften fine lines or achieve a more youthful, sculpted appearance, dermal fillers offer a customizable solution tailored to your aesthetic goals."
      />
      <ServicesBenefits title="Key Benefits" benefits={dermalFillersBenefits} />
      <ServicesAfterEffects className="grid-cols-1 grid-rows-[65rem_65rem]">
        <div className="relative h-full" data-aos="fade-left">
          <Image
            src="/images/injectable-treatments/dermal-fillers-1.png"
            alt=""
            fill
            className="absolute object-top"
          />
        </div>
        <div className="relative h-full" data-aos="fade-right">
          <Image
            src="/images/injectable-treatments/dermal-fillers.png"
            alt=""
            fill
            className="absolute object-top"
          />
        </div>
      </ServicesAfterEffects>
      <ServicesFAQ
        title="Dermal Fillers FAQs: Your questions answered"
        description="Curious about Dermal Fillers? Get answers to common questions about how it works, what to expect, and how it can help you feel confident"
        faqs={dermalFillersFAQs}
      />
    </Wrapper>
  );
}
