"use client";

import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";
import { FadeIn, SectionWrapper } from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <SectionWrapper className="relative overflow-hidden">
      <div className="relative bg-navy rounded-3xl overflow-hidden shadow-premium-lg">
        <div className="absolute inset-0 bg-hero-gradient opacity-90" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
          <FadeIn>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Prêt à transformer votre entreprise ?
            </h2>
            <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              Réservez dès aujourd&apos;hui un premier diagnostic stratégique et
              identifiez les leviers de croissance les plus rentables pour
              votre activité.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="#contact">
                  Réserver un rendez-vous
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="white" size="lg">
                <Link href="#contact">
                  <Phone className="w-5 h-5" />
                  Être rappelé
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </SectionWrapper>
  );
}
