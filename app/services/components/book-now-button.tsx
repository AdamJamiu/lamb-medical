export default function BookNowButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <button className="font-poppins flex items-center justify-center rounded-[0.5rem] bg-primary px-[4.1rem] py-[1.5rem] text-lg font-semibold text-white transition hover:opacity-70">
      {children}
    </button>
  );
}
