"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeIn, SectionWrapper } from "@/components/SectionWrapper";

const faqs = [
  {
    question: "Comment se déroule un audit ?",
    answer:
      "L'audit commence par un diagnostic stratégique gratuit de 45 minutes pour comprendre vos enjeux. Ensuite, nous réalisons une analyse approfondie de votre organisation, management, processus et rentabilité sur 2 à 4 semaines. Vous recevez un rapport détaillé avec un plan d'action priorisé et chiffré.",
  },
  {
    question: "Combien de temps dure l'accompagnement ?",
    answer:
      "La durée varie selon vos objectifs : de 3 mois pour un audit ponctuel avec recommandations, à 12 mois pour un accompagnement complet incluant la mise en œuvre, le coaching du dirigeant et le suivi des performances. Nous adaptons la durée à votre rythme et vos priorités.",
  },
  {
    question: "Quels types d'entreprises accompagnez-vous ?",
    answer:
      "Nous accompagnons les PME, ETI et entrepreneurs de 5 à 500 salariés, tous secteurs confondus (industrie, services, commerce, tech). Que vous soyez en phase de croissance, de restructuration ou de transmission, notre méthodologie s'adapte à votre contexte.",
  },
  {
    question: "Quels résultats puis-je attendre ?",
    answer:
      "Nos clients constatent en moyenne +25% de rentabilité, +30% de productivité et une réduction significative du stress dirigeant dans les 6 premiers mois. Chaque mission débute par la définition d'objectifs mesurables (KPI) pour quantifier précisément les gains obtenus.",
  },
  {
    question: "Comment démarrer ?",
    answer:
      "C'est simple : réservez un diagnostic stratégique gratuit via notre formulaire de contact ou appelez-nous directement. Lors de cet échange de 45 minutes, nous évaluons vos enjeux et vous proposons un plan d'action adapté, sans engagement de votre part.",
  },
];

export function FAQ() {
  return (
    <SectionWrapper id="faq">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <FadeIn>
            <div className="gold-line mx-auto mb-6" />
            <h2 className="section-title">Questions fréquentes</h2>
            <p className="section-subtitle mx-auto mt-4">
              Tout ce que vous devez savoir avant de nous contacter.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.2}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </SectionWrapper>
  );
}
