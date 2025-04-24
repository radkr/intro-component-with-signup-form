import { Poppins } from "next/font/google";
import "./globals.css";

const poppinsSansSerif = Poppins({
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins-sans-serif",
});

export const metadata = {
  title: "Frontend Mentor | Intro component with sign up form",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppinsSansSerif.variable}`}>{children}</body>
    </html>
  );
}
