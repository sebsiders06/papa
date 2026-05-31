export const siteConfig = {
  name: "Osmose Conseils et services",
  tagline: "Audit, Management & Organisation d'Entreprise",
  description:
    "Cabinet de conseil spécialisé en audit entreprise, organisation, management et accompagnement des dirigeants. Optimisez vos performances et reprenez le contrôle de votre société.",
  url: "https://www.osmose-conseils.fr",
  email: "contact@osmose-conseils.fr",
  phone: "+33 1 84 80 00 00",
  address: {
    street: "12 Avenue des Champs-Élysées",
    city: "Paris",
    postalCode: "75008",
    country: "FR",
  },
  keywords: [
    "audit entreprise",
    "consultant management",
    "organisation entreprise",
    "conseil dirigeant",
    "accompagnement PME",
    "optimisation entreprise",
    "management d'équipe",
    "performance organisationnelle",
    "audit organisationnel",
    "stratégie d'entreprise",
  ],
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    postalCode: siteConfig.address.postalCode,
    addressCountry: siteConfig.address.country,
  },
  areaServed: "FR",
  serviceType: [
    "Audit d'entreprise",
    "Conseil en management",
    "Organisation d'entreprise",
    "Accompagnement dirigeant",
  ],
  priceRange: "€€€",
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Comment se déroule un audit ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "L'audit commence par un diagnostic stratégique gratuit de 45 minutes, suivi d'une analyse approfondie de votre organisation, management, processus et rentabilité. Nous produisons un rapport détaillé avec un plan d'action priorisé.",
      },
    },
    {
      "@type": "Question",
      name: "Combien de temps dure l'accompagnement ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La durée varie selon vos objectifs : de 3 mois pour un audit ponctuel à 12 mois pour un accompagnement complet incluant la mise en œuvre et le suivi.",
      },
    },
    {
      "@type": "Question",
      name: "Quels types d'entreprises accompagnez-vous ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nous accompagnons les PME, ETI et entrepreneurs de 5 à 500 salariés, tous secteurs confondus, souhaitant structurer leur croissance et améliorer leurs performances.",
      },
    },
    {
      "@type": "Question",
      name: "Quels résultats puis-je attendre ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nos clients constatent en moyenne +25% de rentabilité, +30% de productivité et une réduction significative du stress dirigeant dans les 6 premiers mois.",
      },
    },
    {
      "@type": "Question",
      name: "Comment démarrer ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Réservez un diagnostic stratégique gratuit via notre formulaire de contact ou appelez-nous directement. Nous évaluons vos enjeux et vous proposons un plan d'action adapté.",
      },
    },
  ],
};
