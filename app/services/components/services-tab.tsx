"use client";

import Wrapper from "@/app/components/Wrapper";
import { cn } from "@/app/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const tabItems = [
  { href: "#softwave", label: "Sofwave" },
  { href: "#ipl", label: "IPL" },
  { href: "#miconeedling", label: "Miconeedling" },
  { href: "#ageject", label: "AgeJect" },
];

export default function ServicesTab() {
  const pathname = usePathname();

  return (
    <Wrapper as="ul" className="flex items-center gap-[4.5rem] py-[2.7rem]">
      {tabItems.map((tab) => (
        <li
          key={tab.href}
          className={cn(
            "text-xl font-medium leading-[5rem] tracking-[0.02rem] text-grey-400",
            { "text-black": pathname === tab.href },
          )}
        >
          <Link href={tab.href}>{tab.label}</Link>
        </li>
      ))}
    </Wrapper>
  );
}
