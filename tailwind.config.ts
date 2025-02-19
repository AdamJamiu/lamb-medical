import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: "1rem",
      center: true,
    },
    screens: {
      xs: "450px",
      sm: "576ppx",
      md: "768px",
      lg: "992px",
      xl: "1024px",
      xxl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        rubik: "var(--font-rubik)",
        work_sans: "var(--font-work_sans)",
        nunito: "var(font-nunito)",
      },
      colors: {
        primary: "#656EE8",
      },
      backgroundImage: {
        home_hero: "url('/1.png')",
      },
    },
  },
  plugins: [],
} satisfies Config;
