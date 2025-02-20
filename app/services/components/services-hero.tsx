import Image from "next/image";

export default function ServicesHero() {
  return (
    <section className=" pt-[8rem] grid grid-cols-2 grid-rows-[77.1rem] bg-primary items-center">
      <div className="size-full relative" data-aos="fade-right">
        <Image
          src="/pngs/energy-devices-image.png"
          alt="facial-services-image"
          className="absolute object-cover"
          fill
        />
      </div>
      <div className="text-white grid place-content-center mx-auto  md:w-[57.4rem] space-y-[2.4rem]">
        <h2
          className="font-rubik text-10xl font-semibold leading-[7rem]"
          data-aos="fade-up"
        >
          Energy devices
        </h2>
        <p
          className="text-lg leading-[3.5rem] tracking-[0.02em] font-medium font-work_sans opacity-80 "
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
