import { ButtonHTMLAttributes } from "react";

interface BookNowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function BookNowButton({ children, ...props }: BookNowButtonProps) {
  return (
    <button
      {...props}
      className={`font-poppins flex items-center justify-center rounded-[0.5rem] bg-primary px-[4.1rem] py-[1.5rem] text-lg font-semibold text-white transition hover:opacity-70 ${props.className ?? ""}`}
    >
      {children}
    </button>
  );
}
