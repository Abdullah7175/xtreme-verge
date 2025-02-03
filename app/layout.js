import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GhostCursor from "@/components/ghostcursor";



const roboto = Open_Sans({
  variable:"--font-roboto",
  subsets: ["latin"],
  weight:['300','400','500','600','700','800']
});


export const metadata = {
  title: "Xtreme Verge",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${roboto.variable} antialiased`}
      >
        <GhostCursor />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
