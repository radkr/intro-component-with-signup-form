import { Poppins } from "next/font/google";
import "./globals.css";
import backgroundMobile from "../public/bg-intro-mobile.png";
import backgroundDesktop from "../public/bg-intro-desktop.png";

const poppinsSansSerif = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins-sans-serif",
  subsets: ["latin"],
});

export const metadata = {
  title: "Frontend Mentor | Intro component with sign up form",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          "--background-mobile": `url(${backgroundMobile.src})`,
          "--background-desktop": `url(${backgroundDesktop.src})`,
        }}
        className={`${poppinsSansSerif.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
