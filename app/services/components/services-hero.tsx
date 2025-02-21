import Image from "next/image";

interface ServicesHeroProps {
  title: string;
  description: string;
  image: string;
}

export default function ServicesHero({
  title,
  description,
  image,
}: ServicesHeroProps) {
  return (
    <section className="grid md:grid-cols-2 grid-rows-[77.1rem] items-center gap-[8.2rem] bg-primary pt-[8rem]">
      <div className="relative size-full" data-aos="fade-right">
        <Image
          src={`/images/${image}`}
          alt="facial-services-image"
          className="absolute object-cover object-center"
          fill
        />
      </div>

      <div className="grid space-y-[2.4rem] pr-[4rem] text-white md:w-[57.4rem]">
        <h2
          className="font-rubik text-10xl font-semibold leading-[7rem]"
          data-aos="fade-up"
        >
          {title}
        </h2>
        <p
          className="font-work_sans text-lg font-medium leading-[3.5rem] tracking-[0.02em] opacity-80"
          data-aos="fade-left"
        >
          {description}
        </p>
      </div>
    </section>
  );
}
