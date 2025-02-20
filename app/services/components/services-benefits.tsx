interface ServicesBenefitsProps {
  title: string;
  description?: string;
  benefits: string[];
}

export default function ServicesBenefits({
  title,
  description,
  benefits,
}: ServicesBenefitsProps) {
  return (
    <section className="px-[1.3rem]">
      <h4
        className="font-rubik text-[4.6rem] font-semibold leading-[8rem] text-grey-200"
        data-aos="fade-up"
      >
        {title}
      </h4>
      <ul>
        <h5
          className="text-grey-750 font-work_sans text-md font-medium leading-[4rem] tracking-[0.02em] text-opacity-80"
          data-aos="fade-right"
        >
          {!!description && description}
        </h5>

        {benefits.map((benefit, index) => (
          <li
            key={index}
            className="text-grey-750 list-inside list-disc px-[3.5rem] font-work_sans text-md font-medium leading-[3.5rem] tracking-[0.02em] text-opacity-80"
            data-aos="fade-left"
          >
            {benefit}
          </li>
        ))}
      </ul>
    </section>
  );
}
