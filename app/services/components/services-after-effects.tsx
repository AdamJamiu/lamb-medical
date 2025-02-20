import { cn } from "@/app/utils";

export default function ServicesAfterEffects({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <figure
      className={cn(
        "grid grid-cols-[1.5fr_2fr] grid-rows-[42.4rem_48.9rem] gap-[2.4rem]",
        className,
      )}
    >
      {children}
    </figure>
  );
}
