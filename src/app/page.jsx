import Image from "next/image";
import {
  Banner,
  About,
  Services,
  Software,
  Counter,
  Testimonial,
  Clients
} from "@/components/home";

export const metadata = {
  title: "Accomate Global",
  icons: {
    icon: '/n_icon.png',
  }
};

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Banner />
      <About />
      <Services />
      <Software />
      <Counter />
      {/* <Clients /> */}
      <Testimonial />
    </div>
  );
}
