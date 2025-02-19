// app/layout.js
import type { Metadata } from "next";
import { Nunito_Sans, Poppins, Rubik, Work_Sans } from "next/font/google";
import Navbar from "./components/Templates/Navbar";
import Footer from "./components/Templates/Footer";
import AOSInitializer from "./components/AOSInitializer"; // Import the AOS initializer
import Preloader from "./components/Preloader";
import { ToastContainer } from "react-toastify";
import "aos/dist/aos.css"; // Import AOS CSS
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: "Lamb Medical Aestheics",
  description:
    "Our commitment is to provide a highly personalized healthcare experience. From routine checkups to complex medical needs, Lamb Medicals offers services tailored to your unique requirements. Our expert team of dedicated professionals takes the time to understand you, delivering exceptional care with compassion and precision.",
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

const poppins = Poppins({
  variable: "--font-poppins",
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
        className={`${workSans.variable} ${rubik.variable} ${nunito_sans.variable} ${poppins.variable}`}
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
