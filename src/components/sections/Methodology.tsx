"use client";

import {
  ClipboardList,
  FileSearch,
  LineChart,
  Rocket,
  Search,
} from "lucide-react";
import { FadeIn, SectionWrapper } from "@/components/SectionWrapper";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Diagnostic",
    description:
      "Premier entretien approfondi pour comprendre votre contexte, vos enjeux et vos objectifs stratégiques.",
  },
  {
    number: "02",
    icon: FileSearch,
    title: "Audit approfondi",
    description:
      "Analyse détaillée de votre organisation, management, processus et indicateurs de performance.",
  },
  {
    number: "03",
    icon: ClipboardList,
    title: "Plan d'action",
    description:
      "Élaboration d'une feuille de route priorisée avec des actions concrètes et des objectifs mesurables.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Mise en œuvre",
    description:
      "Accompagnement opérationnel dans la transformation : formation, coaching et déploiement des outils.",
  },
  {
    number: "05",
    icon: LineChart,
    title: "Suivi et amélioration continue",
    description:
      "Pilotage des résultats, ajustements et optimisation permanente pour garantir la pérennité des gains.",
  },
];

export function Methodology() {
  return (
    <SectionWrapper id="methodologie" dark className="bg-navy relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/5 to-transparent" />
      </div>

      <div className="relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <div className="gold-line mx-auto mb-6" />
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Une méthode claire orientée résultats
            </h2>
            <p className="text-white/60 text-lg mt-4 max-w-2xl mx-auto">
              Un processus structuré en 5 étapes pour transformer durablement
              votre entreprise.
            </p>
          </FadeIn>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/50 via-gold/20 to-transparent -translate-x-1/2" />

          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, index) => (
              <FadeIn key={step.title} delay={index * 0.1}>
                <div
                  className={`lg:flex items-center gap-8 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:pl-16"}`}>
                    <div className={`glass-card-dark rounded-2xl p-8 border border-white/10 hover:border-gold/30 transition-colors duration-500 ${index % 2 === 0 ? "lg:ml-auto" : ""} max-w-lg`}>
                      <span className="text-gold font-display text-5xl font-bold opacity-30">
                        {step.number}
                      </span>
                      <h3 className="text-2xl font-display font-bold text-white mt-2 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-white/60 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  <div className="hidden lg:flex w-16 h-16 rounded-full bg-gold items-center justify-center shrink-0 relative z-10 shadow-gold">
                    <step.icon className="w-7 h-7 text-navy" />
                  </div>

                  <div className="hidden lg:block lg:w-1/2" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <div className="lg:hidden mt-8 space-y-6">
          {steps.map((step, index) => (
            <FadeIn key={`mobile-${step.title}`} delay={index * 0.08}>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center shrink-0">
                  <step.icon className="w-5 h-5 text-navy" />
                </div>
                <div>
                  <span className="text-gold/50 text-sm font-bold">{step.number}</span>
                  <h3 className="text-lg font-bold text-white">{step.title}</h3>
                  <p className="text-white/60 text-sm mt-1">{step.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
