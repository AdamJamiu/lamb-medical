import { cn } from "@/app/utils";

interface ServicesAfterEffectsProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export default function ServicesAfterEffects({
  children,
  className,
  title,
}: ServicesAfterEffectsProps) {
  return (
    <figure
      className={cn(
        "flex flex-col xs:grid xs:grid-cols-[1.5fr_2fr] grid-rows-[42.4rem_48.9rem] gap-[2.4rem]",
        className
      )}
    >
      {!!title && (
        <figcaption
          className="text-grey-800 col-span-full text-center font-rubik text-[32px] xs:text-[3.8rem] font-semibold leading-[4rem]"
          data-aos="fade-left"
        >
          {title}
        </figcaption>
      )}
      {children}
    </figure>
  );
}
