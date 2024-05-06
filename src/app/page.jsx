import Image from "next/image";
import {
  Banner,
  About,
  Services
} from "@/components/home";

export const metadata = {
  title: "Accomate Global",
  icons: {
    icon: '/icon.png',
  }
};

export default function Home() {
  return (
    <div>
      <Banner />
      <About />
      <Services />
    </div>
  );
}
