// app/layout.js
import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  Nunito_Sans,
  Poppins,
  Rubik,
  Work_Sans,
} from "next/font/google";
import Navbar from "./components/Templates/Navbar";
import Footer from "./components/Templates/Footer";
import AOSInitializer from "./components/AOSInitializer"; // Import the AOS initializer
import Preloader from "./components/Preloader";
import { ToastContainer } from "react-toastify";
import Script from "next/script";
import "aos/dist/aos.css"; // Import AOS CSS
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: "VY Construction",
  description:
    "Wood rot can silently weaken the structure of your home, leading to costly repairs if left untreated. Our expert team specializes in identifying and repairing wood rot damage, ensuring your home stays strong, safe, and looking its best.",
};

const workSans = Work_Sans({
  variable: "--font-work_sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const rubik = Rubik({
  variable: "--font-rubik",
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const nunito_sans = Nunito_Sans({
  variable: "--font-nunito",
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900", "200"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${workSans.variable} ${rubik.variable} ${nunito_sans.variable}`}
      >
        <Navbar />
        <ToastContainer
          autoClose={2000}
          hideProgressBar={true}
          theme="colored"
        />
        <Preloader />
        <AOSInitializer /> {/* Initialize AOS */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
