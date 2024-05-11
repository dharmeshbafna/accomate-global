import Image from "next/image";
import {
  Banner,
  About,
  Services,
  Software,
  Counter,
  Testimonial
} from "@/components/home";

export const metadata = {
  title: "Accomate Global",
  icons: {
    icon: '/n_icon.png',
  }
};

export default function Home() {
  return (
    <div>
      <Banner />
      <About />
      <Services />
      <Software />
      <Counter />
      <Testimonial />
    </div>
  );
}
