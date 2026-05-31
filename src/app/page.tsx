import { About } from "@/components/sections/About";
import { Benefits } from "@/components/sections/Benefits";
import { Contact } from "@/components/sections/Contact";
import { CTA } from "@/components/sections/CTA";
import { FAQ } from "@/components/sections/FAQ";
import { Hero } from "@/components/sections/Hero";
import { Methodology } from "@/components/sections/Methodology";
import { Problems } from "@/components/sections/Problems";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Problems />
      <Services />
      <Methodology />
      <Benefits />
      <About />
      <Testimonials />
      <FAQ />
      <CTA />
      <Contact />
    </>
  );
}
