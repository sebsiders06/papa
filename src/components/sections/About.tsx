"use client";

import {
  Award,
  CheckCircle2,
  Handshake,
  Lightbulb,
  Target,
  User,
} from "lucide-react";
import { FadeIn, SectionWrapper } from "@/components/SectionWrapper";

const highlights = [
  {
    icon: Target,
    title: "Expertise terrain",
    description:
      "15 ans d'expérience auprès de dirigeants de PME et ETI dans tous les secteurs.",
  },
  {
    icon: Lightbulb,
    title: "Vision stratégique",
    description:
      "Une approche globale qui aligne organisation, management et performance financière.",
  },
  {
    icon: Handshake,
    title: "Accompagnement humain",
    description:
      "Un partenariat de confiance, basé sur l'écoute et la proximité avec le dirigeant.",
  },
  {
    icon: CheckCircle2,
    title: "Solutions concrètes",
    description:
      "Des recommandations actionnables, pas des rapports théoriques qui restent dans un tiroir.",
  },
  {
    icon: Award,
    title: "Résultats mesurables",
    description:
      "Des KPI définis dès le départ pour quantifier l'impact de chaque intervention.",
  },
];

export function About() {
  return (
    <SectionWrapper id="apropos">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <FadeIn direction="right">
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-navy to-navy-700 overflow-hidden shadow-premium-lg relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6 border-4 border-gold/30">
                    <User className="w-16 h-16 text-gold" />
                  </div>
                  <p className="text-white/40 text-sm">
                    Photo professionnelle
                  </p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-navy-900/90 to-transparent">
                <p className="text-gold font-display text-2xl font-bold">
                  Thomas Mercier
                </p>
                <p className="text-white/70">
                  Fondateur & Consultant Senior
                </p>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-gold rounded-2xl p-6 shadow-gold hidden sm:block">
              <p className="text-navy font-display text-3xl font-bold">15+</p>
              <p className="text-navy/70 text-sm">Années d&apos;expertise</p>
            </div>
          </div>
        </FadeIn>

        <div>
          <FadeIn>
            <div className="gold-line mb-6" />
            <h2 className="section-title">Votre partenaire de croissance</h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
              <p>
                Après 15 ans passés au côté de dirigeants d&apos;entreprise,
                j&apos;ai fondé <strong className="text-navy">Osmose Conseils et services</strong>{" "}
                avec une conviction : chaque entreprise possède un potentiel
                immense, souvent freiné par des dysfonctionnements
                organisationnels corrigeables.
              </p>
              <p>
                Mon approche combine rigueur analytique et pragmatisme
                opérationnel. Je ne me contente pas de diagnostiquer : j&apos;accompagne
                mes clients dans la mise en œuvre concrète des transformations,
                jusqu&apos;à l&apos;obtention de résultats mesurables.
              </p>
              <p>
                Diplômé d&apos;HEC Paris et certifié coach professionnel, j&apos;interviens
                auprès de PME et ETI de 5 à 500 salariés, dans l&apos;industrie,
                les services et le commerce.
              </p>
            </div>
          </FadeIn>

          <div className="mt-10 space-y-4">
            {highlights.map((item, index) => (
              <FadeIn key={item.title} delay={0.2 + index * 0.08}>
                <div className="flex gap-4 items-start p-4 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy">{item.title}</h3>
                    <p className="text-slate-500 text-sm mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
