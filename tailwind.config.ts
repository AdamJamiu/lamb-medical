import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      rubik: "var(--font-rubik), serif",
      work_sans: "var(--font-work_sans), serif",
      nunito: "var(font-nunito)",
    },
    container: {
      padding: "1rem",
      center: true,
    },
    screens: {
      xxs: "375px",
      xs: "450px",
      sm: "576ppx",
      md: "768px",
      lg: "992px",
      xl: "1024px",
      xxl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      background: "var(--background)",
      foreground: "var(--foreground)",
      white: "#ffffff",
      black: "#000000",
      primary: "#656EE8",
      "grey-50": "#00000080",
      "grey-100": "#FAFAFA",
      "grey-200": "#12121299",
      "grey-300": "#121212",
      "grey-400": "#8E9BAE",
      "grey-500": "#737373",
      "grey-600": "#8E9BAE",
      "grey-700": "#282828",
      "grey-800": "#55534E",
      "grey-900": "#161616",
    },
    fontSize: {
      xs: "1.2rem",
      sm: "1.4rem",
      base: "1.6rem",
      md: "1.8rem",
      lg: "2rem",
      x: "2.35rem",
      xl: "2.4rem",
      "2xl": "2.68rem",
      "3xl": "2.8rem",
      "4xl": "3.2rem",
      "5xl": "3.6rem",
      "6xl": "4.8rem",
      "7xl": "5rem",
      "8xl": "6.27rem",
      "9xl": "6.5rem",
      "10xl": "7rem",
      "11xl": "12.8rem",
    },

    extend: {
      backgroundImage: {
        home_hero: "url('/1.png')",
      },
      maxWidth: {
        default: "144rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
