import Wrapper from "@/app/components/Wrapper";
import Image from "next/image";

export default function ServicesHero() {
  return (
    <section className="grid grid-cols-2 grid-rows-[77.1rem] items-center gap-[8.2rem] bg-primary pt-[8rem]">
      <div className="relative size-full" data-aos="fade-right">
        <Image
          src="/images/energy-devices/energy-devices-image.png"
          alt="facial-services-image"
          className="absolute object-cover"
          fill
        />
      </div>

      <div className="grid space-y-[2.4rem] pr-[4rem] text-white md:w-[57.4rem]">
        <h2
          className="font-rubik text-10xl font-semibold leading-[7rem]"
          data-aos="fade-up"
        >
          Energy devices
        </h2>
        <p
          className="font-work_sans text-lg font-medium leading-[3.5rem] tracking-[0.02em] opacity-80"
          data-aos="fade-left"
        >
          Laser resurfacing rejuvenates the skin by using advanced laser
          technology to reduce wrinkles, scars, and uneven texture while
          stimulating collagen production. This treatment offers a non-invasive
          solution for achieving smoother, firmer skin with minimal downtime.
        </p>
      </div>
    </section>
  );
}
