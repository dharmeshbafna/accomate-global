import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar, Footer, Clients, Fixbtn } from "@/components/other";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: '400' });

export const metadata = {
  title: "Accomate Global",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Clients />
        <Footer />
        <Fixbtn />
      </body>
    </html>
  );
}
