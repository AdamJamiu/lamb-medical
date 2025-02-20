import FAQ from "@/app/components/Templates/FAQ";

interface ServicesFAQProps {
  title: string;
  description: string;
}

export default function ServicesFAQ({ title, description }: ServicesFAQProps) {
  return (
    <section data-aos="fade-up">
      <hgroup className="mx-auto flex w-[100rem] flex-col gap-[2rem]">
        <h4 className="text-grey-800 text-center font-rubik text-[5.5rem] font-bold leading-[5.5rem] tracking-[0.02em]">
          {title}
        </h4>
        <p className="text-grey-800 text-center font-work_sans text-lg font-normal leading-[3.5rem] tracking-[1.24px]">
          {description}
        </p>
      </hgroup>

      <FAQ />
    </section>
  );
}
