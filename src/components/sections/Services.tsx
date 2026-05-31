"use client";

import {
  BarChart3,
  Briefcase,
  CheckCircle2,
  Crown,
  Settings,
  Users,
} from "lucide-react";
import { FadeIn, SectionWrapper } from "@/components/SectionWrapper";

const services = [
  {
    icon: BarChart3,
    title: "Audit d'entreprise",
    description:
      "Analyse complète et objective de votre organisation pour identifier les leviers de performance.",
    items: [
      "Organisation",
      "Management",
      "Processus",
      "Rentabilité",
      "Pilotage",
    ],
  },
  {
    icon: Crown,
    title: "Accompagnement du dirigeant",
    description:
      "Renforcez votre leadership et libérez-vous des opérations pour vous concentrer sur la stratégie.",
    items: [
      "Leadership",
      "Délégation",
      "Prise de décision",
      "Vision stratégique",
    ],
  },
  {
    icon: Settings,
    title: "Organisation & Processus",
    description:
      "Structurez et optimisez vos processus pour gagner en efficacité et en productivité.",
    items: ["Structuration", "Optimisation", "Productivité", "Procédures"],
  },
  {
    icon: Users,
    title: "Management des équipes",
    description:
      "Développez des équipes performantes, autonomes et engagées dans la réussite collective.",
    items: [
      "Communication",
      "Motivation",
      "Performance",
      "Responsabilisation",
    ],
  },
];

export function Services() {
  return (
    <SectionWrapper id="services">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <FadeIn>
          <div className="gold-line mx-auto mb-6" />
          <h2 className="section-title">Nos solutions</h2>
          <p className="section-subtitle mx-auto mt-4">
            Des prestations sur mesure pour transformer votre entreprise et
            atteindre vos objectifs de performance.
          </p>
        </FadeIn>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <FadeIn key={service.title} delay={index * 0.1}>
            <div className="premium-card p-8 h-full group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />

              <div className="relative">
                <div className="flex items-start gap-5 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-navy flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors duration-500">
                    <service.icon className="w-8 h-8 text-gold group-hover:text-navy transition-colors duration-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-navy">
                      {service.title}
                    </h3>
                    <p className="text-slate-500 mt-2 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                <ul className="grid grid-cols-2 gap-3">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-slate-600"
                    >
                      <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.4}>
        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-navy/5 border border-navy/10">
            <Briefcase className="w-5 h-5 text-gold" />
            <p className="text-navy font-medium">
              Chaque mission est personnalisée selon vos enjeux et votre secteur
              d&apos;activité
            </p>
          </div>
        </div>
      </FadeIn>
    </SectionWrapper>
  );
}
