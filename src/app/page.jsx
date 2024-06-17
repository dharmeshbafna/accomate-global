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
  },
  description: `Accomate Global serves as a seamless extension of our client's team. When our clients outsource their 
            work to us, they benefit from the expertise of highly experienced CPAs while saving on operational costs, 
            leading to increased efficiency and profitability.`
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
