"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { FadeIn, SectionWrapper } from "@/components/SectionWrapper";

const testimonials = [
  {
    name: "Sophie Laurent",
    role: "Directrice Générale",
    company: "TechFlow Solutions — 45 salariés",
    content:
      "L'accompagnement d'Osmose Conseils et services a transformé notre organisation. En 6 mois, nous avons structuré nos processus, délégué efficacement et augmenté notre marge de 22%. Un investissement rentabilisé dès la première année.",
    result: "+22% de marge nette",
    rating: 5,
  },
  {
    name: "Marc Dubois",
    role: "Président",
    company: "Industrie Mécanique Pro — 120 salariés",
    content:
      "Thomas a su identifier des dysfonctionnements que nous ne voyions plus. Son audit a révélé des économies de 180 000€ par an. L'équipe est aujourd'hui autonome et motivée comme jamais.",
    result: "180 000€ d'économies/an",
    rating: 5,
  },
  {
    name: "Isabelle Moreau",
    role: "Fondatrice",
    company: "Agence Créative Plus — 18 salariés",
    content:
      "Je gérais tout seule et j'étais épuisée. Grâce à l'accompagnement, j'ai pu me libérer 2 jours par semaine tout en doublant notre chiffre d'affaires. Un vrai game-changer pour mon entreprise.",
    result: "CA doublé en 12 mois",
    rating: 5,
  },
  {
    name: "Philippe Renard",
    role: "DG",
    company: "Distribution Élite — 85 salariés",
    content:
      "Une méthodologie claire, des résultats concrets et un consultant qui comprend vraiment les enjeux du dirigeant. Je recommande sans hésitation à tout entrepreneur qui veut structurer sa croissance.",
    result: "+35% de productivité",
    rating: 5,
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  const testimonial = testimonials[current];

  return (
    <SectionWrapper id="temoignages" className="bg-slate-50">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <FadeIn>
          <div className="gold-line mx-auto mb-6" />
          <h2 className="section-title">Ils nous font confiance</h2>
          <p className="section-subtitle mx-auto mt-4">
            Découvrez les témoignages de dirigeants que nous avons accompagnés
            vers l&apos;excellence.
          </p>
        </FadeIn>
      </div>

      <FadeIn delay={0.2}>
        <div className="max-w-4xl mx-auto relative">
          <div className="premium-card p-8 md:p-12 min-h-[320px] flex flex-col justify-center overflow-hidden">
            <Quote className="w-12 h-12 text-gold/20 absolute top-8 left-8" />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10"
              >
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-gold text-gold"
                    />
                  ))}
                </div>

                <p className="text-lg md:text-xl text-navy leading-relaxed mb-8 italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <p className="font-semibold text-navy text-lg">
                      {testimonial.name}
                    </p>
                    <p className="text-slate-500 text-sm">
                      {testimonial.role} — {testimonial.company}
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20">
                    <span className="text-gold font-bold text-sm">
                      {testimonial.result}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border-2 border-navy/10 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
              aria-label="Témoignage précédent"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > current ? 1 : -1);
                    setCurrent(index);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === current
                      ? "bg-gold w-8"
                      : "bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Témoignage ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full border-2 border-navy/10 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
              aria-label="Témoignage suivant"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </FadeIn>
    </SectionWrapper>
  );
}
