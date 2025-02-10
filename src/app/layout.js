import Header from "@/components/Header/Header.js"
import Footer from "@/components/Footer/Footer.js"
import Table from "@/components/Table/Table";

import { Cairo } from "next/font/google";
import "./globals.css";
import Home from "@/components/Home/Home";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-cairo",
});

export const metadata = {
  title: "IVORY",
  description: "IVORY app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={cairo.variable}
      >
        <Header />
        <Home />
        <Table />
        <Footer />


      </body>
    </html>
  );
}
