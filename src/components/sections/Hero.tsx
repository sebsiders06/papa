"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BarChart3,
  CheckCircle2,
  Shield,
  TrendingUp,
  Users,
} from "lucide-react";
import Link from "next/link";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { FadeIn } from "@/components/SectionWrapper";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const stats = [
  { value: 150, suffix: "+", label: "Entreprises accompagnées" },
  { value: 25, suffix: "%", label: "Gain de rentabilité moyen" },
  { value: 15, suffix: "+", label: "Années d'expertise" },
  { value: 98, suffix: "%", label: "Clients satisfaits" },
];

const trustBadges = [
  { icon: Shield, label: "Confidentialité garantie" },
  { icon: Award, label: "Certifié ISO 9001" },
  { icon: CheckCircle2, label: "Résultats mesurables" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <FadeIn>
              <Badge variant="default" className="mb-6">
                Cabinet de conseil premium
              </Badge>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                Reprenez le{" "}
                <span className="text-gradient-gold">contrôle</span> de votre
                entreprise
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mt-6 text-lg sm:text-xl text-white/75 leading-relaxed max-w-xl">
                Nous aidons les dirigeants à améliorer leur organisation,
                renforcer leur management et augmenter durablement les
                performances de leur entreprise grâce à une méthodologie
                d&apos;audit et d&apos;accompagnement éprouvée.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="#contact">
                    Réserver un diagnostic stratégique
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white hover:text-navy">
                  <Link href="#contact">Demander un audit</Link>
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="mt-10 flex flex-wrap gap-6">
                {trustBadges.map((badge) => (
                  <div
                    key={badge.label}
                    className="flex items-center gap-2 text-white/70 text-sm"
                  >
                    <badge.icon className="w-4 h-4 text-gold" />
                    {badge.label}
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.3} direction="left">
            <div className="relative">
              <div className="glass-card-dark rounded-3xl p-8 border border-white/10">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="text-center p-4 rounded-2xl bg-white/5 border border-white/10"
                    >
                      <div className="text-3xl sm:text-4xl font-display font-bold text-gold">
                        <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                      </div>
                      <p className="text-white/60 text-sm mt-2">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 p-6 rounded-2xl bg-gold/10 border border-gold/20">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">
                        Performance organisationnelle
                      </p>
                      <p className="text-white/60 text-sm">
                        Méthode éprouvée sur +150 entreprises
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 glass-card rounded-2xl p-4 shadow-premium-lg hidden sm:block"
              >
                <div className="flex items-center gap-3">
                  <BarChart3 className="w-8 h-8 text-gold" />
                  <div>
                    <p className="text-navy font-bold text-sm">+30%</p>
                    <p className="text-slate-500 text-xs">Productivité</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 glass-card rounded-2xl p-4 shadow-premium-lg hidden sm:block"
              >
                <div className="flex items-center gap-3">
                  <Users className="w-8 h-8 text-gold" />
                  <div>
                    <p className="text-navy font-bold text-sm">Équipes</p>
                    <p className="text-slate-500 text-xs">Autonomes & motivées</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
