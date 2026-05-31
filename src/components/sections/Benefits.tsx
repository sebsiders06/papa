"use client";

import {
  Brain,
  Eye,
  Heart,
  LineChart,
  Shield,
  Zap,
} from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { FadeIn, SectionWrapper } from "@/components/SectionWrapper";

const benefits = [
  {
    icon: LineChart,
    title: "Plus de rentabilité",
    description: "Optimisez vos marges et réduisez les coûts cachés.",
  },
  {
    icon: Zap,
    title: "Plus de productivité",
    description: "Des processus fluides pour maximiser l'efficacité.",
  },
  {
    icon: Eye,
    title: "Plus de visibilité",
    description: "Pilotez votre activité avec des indicateurs fiables.",
  },
  {
    icon: Shield,
    title: "Plus d'autonomie des équipes",
    description: "Des collaborateurs responsabilisés et performants.",
  },
  {
    icon: Heart,
    title: "Moins de stress pour le dirigeant",
    description: "Libérez-vous des opérations pour vous concentrer sur l'essentiel.",
  },
  {
    icon: Brain,
    title: "Une croissance mieux maîtrisée",
    description: "Structurez votre développement sur des bases solides.",
  },
];

const statistics = [
  { value: 25, suffix: "%", label: "Rentabilité en moyenne" },
  { value: 30, suffix: "%", label: "Gain de productivité" },
  { value: 40, suffix: "%", label: "Temps dirigeant libéré" },
  { value: 6, suffix: " mois", label: "Pour des résultats visibles" },
];

export function Benefits() {
  return (
    <SectionWrapper id="resultats" className="bg-slate-50">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <FadeIn>
          <div className="gold-line mx-auto mb-6" />
          <h2 className="section-title">Les résultats obtenus</h2>
          <p className="section-subtitle mx-auto mt-4">
            Des transformations concrètes et mesurables pour nos clients
            accompagnés.
          </p>
        </FadeIn>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {benefits.map((benefit, index) => (
          <FadeIn key={benefit.title} delay={index * 0.08}>
            <div className="premium-card p-8 h-full text-center group">
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-gold/20 transition-colors">
                <benefit.icon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">
                {benefit.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.3}>
        <div className="bg-navy rounded-3xl p-8 md:p-12 shadow-premium-lg">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-display font-bold text-gold">
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={2 + index * 0.2}
                  />
                </div>
                <p className="text-white/60 text-sm mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </SectionWrapper>
  );
}
