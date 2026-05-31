"use client";

import {
  AlertTriangle,
  Eye,
  MessageSquare,
  TrendingDown,
  UserX,
  Workflow,
} from "lucide-react";
import { FadeIn, SectionWrapper } from "@/components/SectionWrapper";

const problems = [
  {
    icon: UserX,
    title: "Vous gérez tout vous-même",
    description:
      "Le dirigeant reste le point central de toutes les décisions, freinant la croissance.",
  },
  {
    icon: AlertTriangle,
    title: "Les équipes manquent d'autonomie",
    description:
      "Vos collaborateurs attendent systématiquement vos validations pour avancer.",
  },
  {
    icon: TrendingDown,
    title: "Les résultats stagnent",
    description:
      "Malgré vos efforts, le chiffre d'affaires et la marge ne progressent plus.",
  },
  {
    icon: Workflow,
    title: "Les processus sont désorganisés",
    description:
      "Chaque action repose sur l'improvisation plutôt que sur des méthodes structurées.",
  },
  {
    icon: MessageSquare,
    title: "La communication est difficile",
    description:
      "Les informations ne circulent pas et les silos freinent la collaboration.",
  },
  {
    icon: Eye,
    title: "Vous manquez de visibilité sur la performance",
    description:
      "Impossible de piloter sans indicateurs clairs et tableaux de bord fiables.",
  },
];

export function Problems() {
  return (
    <SectionWrapper id="problematiques" className="bg-slate-50">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <FadeIn>
          <div className="gold-line mx-auto mb-6" />
          <h2 className="section-title">
            Ces situations vous semblent familières ?
          </h2>
        </FadeIn>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {problems.map((problem, index) => (
          <FadeIn key={problem.title} delay={index * 0.08}>
            <div className="premium-card p-8 h-full group">
              <div className="w-14 h-14 rounded-2xl bg-navy/5 flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors duration-500">
                <problem.icon className="w-7 h-7 text-navy group-hover:text-gold transition-colors duration-500" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">
                {problem.title}
              </h3>
              <p className="text-slate-500 leading-relaxed">
                {problem.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.5}>
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <p className="text-lg text-slate-600 leading-relaxed">
            Ces problèmes ne sont pas une fatalité. Ils révèlent généralement
            des{" "}
            <strong className="text-navy">
              dysfonctionnements organisationnels
            </strong>{" "}
            qui peuvent être corrigés avec la bonne méthodologie.
          </p>
        </div>
      </FadeIn>
    </SectionWrapper>
  );
}
