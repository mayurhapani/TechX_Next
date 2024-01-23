import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./componants/Header";
import FooterBlue from "./componants/FooterBlue";

const inter = Inter({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-inter",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <FooterBlue />
      </body>
    </html>
  );
}
