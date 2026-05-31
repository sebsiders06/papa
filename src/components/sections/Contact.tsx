"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { type FormEvent, useState } from "react";
import { FadeIn, SectionWrapper } from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

interface FormData {
  firstName: string;
  lastName: string;
  company: string;
  phone: string;
  email: string;
  employees: string;
  revenue: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  company: "",
  phone: "",
  email: "",
  employees: "",
  revenue: "",
  message: "",
};

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.firstName.trim()) errors.firstName = "Le prénom est requis";
  if (!data.lastName.trim()) errors.lastName = "Le nom est requis";
  if (!data.company.trim()) errors.company = "La société est requise";
  if (!data.phone.trim()) {
    errors.phone = "Le téléphone est requis";
  } else if (!/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/.test(data.phone.replace(/\s/g, ""))) {
    errors.phone = "Numéro de téléphone invalide";
  }
  if (!data.email.trim()) {
    errors.email = "L'email est requis";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Email invalide";
  }
  if (!data.employees) errors.employees = "Veuillez sélectionner une option";
  if (!data.revenue) errors.revenue = "Veuillez sélectionner une option";

  return errors;
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi");
      }

      setIsSuccess(true);
      setFormData(initialFormData);
    } catch {
      setErrors({ email: "Une erreur est survenue. Veuillez réessayer." });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <SectionWrapper id="contact" className="bg-slate-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-lg mx-auto text-center premium-card p-12"
        >
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
          <h3 className="text-2xl font-display font-bold text-navy mb-3">
            Demande envoyée avec succès !
          </h3>
          <p className="text-slate-500 mb-8">
            Merci pour votre confiance. Nous vous recontacterons sous 24 heures
            ouvrées pour planifier votre diagnostic stratégique.
          </p>
          <Button onClick={() => setIsSuccess(false)} variant="secondary">
            Envoyer une autre demande
          </Button>
        </motion.div>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper id="contact" className="bg-slate-50">
      <div className="grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2">
          <FadeIn>
            <div className="gold-line mb-6" />
            <h2 className="section-title">Contactez-nous</h2>
            <p className="section-subtitle mt-4">
              Remplissez le formulaire pour réserver votre diagnostic
              stratégique gratuit. Réponse garantie sous 24h.
            </p>

            <div className="mt-10 space-y-6">
              {[
                "Diagnostic stratégique offert (45 min)",
                "Analyse personnalisée de vos enjeux",
                "Plan d'action préliminaire",
                "Sans engagement",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                  <span className="text-slate-600">{item}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.2} className="lg:col-span-3">
          <form
            onSubmit={handleSubmit}
            className="premium-card p-8 md:p-10"
            noValidate
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="firstName">Prénom *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleChange("firstName", e.target.value)}
                  className="mt-2"
                  placeholder="Jean"
                  aria-invalid={!!errors.firstName}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
                )}
              </div>
              <div>
                <Label htmlFor="lastName">Nom *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleChange("lastName", e.target.value)}
                  className="mt-2"
                  placeholder="Dupont"
                  aria-invalid={!!errors.lastName}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mt-6">
              <div>
                <Label htmlFor="company">Société *</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => handleChange("company", e.target.value)}
                  className="mt-2"
                  placeholder="Votre entreprise"
                  aria-invalid={!!errors.company}
                />
                {errors.company && (
                  <p className="text-red-500 text-xs mt-1">{errors.company}</p>
                )}
              </div>
              <div>
                <Label htmlFor="phone">Téléphone *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className="mt-2"
                  placeholder="06 12 34 56 78"
                  aria-invalid={!!errors.phone}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
              </div>
            </div>

            <div className="mt-6">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="mt-2"
                placeholder="jean.dupont@entreprise.fr"
                aria-invalid={!!errors.email}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mt-6">
              <div>
                <Label>Nombre de salariés *</Label>
                <Select
                  value={formData.employees}
                  onValueChange={(value) => handleChange("employees", value)}
                >
                  <SelectTrigger className="mt-2" aria-invalid={!!errors.employees}>
                    <SelectValue placeholder="Sélectionner" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-10">1 à 10</SelectItem>
                    <SelectItem value="11-50">11 à 50</SelectItem>
                    <SelectItem value="51-100">51 à 100</SelectItem>
                    <SelectItem value="101-250">101 à 250</SelectItem>
                    <SelectItem value="250+">Plus de 250</SelectItem>
                  </SelectContent>
                </Select>
                {errors.employees && (
                  <p className="text-red-500 text-xs mt-1">{errors.employees}</p>
                )}
              </div>
              <div>
                <Label>Chiffre d&apos;affaires *</Label>
                <Select
                  value={formData.revenue}
                  onValueChange={(value) => handleChange("revenue", value)}
                >
                  <SelectTrigger className="mt-2" aria-invalid={!!errors.revenue}>
                    <SelectValue placeholder="Sélectionner" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="<500k">Moins de 500 K€</SelectItem>
                    <SelectItem value="500k-2m">500 K€ — 2 M€</SelectItem>
                    <SelectItem value="2m-10m">2 M€ — 10 M€</SelectItem>
                    <SelectItem value="10m-50m">10 M€ — 50 M€</SelectItem>
                    <SelectItem value="50m+">Plus de 50 M€</SelectItem>
                  </SelectContent>
                </Select>
                {errors.revenue && (
                  <p className="text-red-500 text-xs mt-1">{errors.revenue}</p>
                )}
              </div>
            </div>

            <div className="mt-6">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                className="mt-2"
                placeholder="Décrivez brièvement vos enjeux et objectifs..."
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full mt-8"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Envoi en cours...
                </>
              ) : (
                <>
                  Envoyer ma demande
                  <Send className="w-5 h-5" />
                </>
              )}
            </Button>

            <p className="text-xs text-slate-400 text-center mt-4">
              Vos données sont traitées de manière confidentielle conformément
              au RGPD.
            </p>
          </form>
        </FadeIn>
      </div>
    </SectionWrapper>
  );
}
