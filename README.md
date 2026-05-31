# Osmose Conseils et services — Site One Page Premium

Site internet one page professionnel pour cabinet d'audit, management et organisation d'entreprise.

## Stack technique

- **Next.js 15** — App Router, SSR, SEO optimisé
- **TypeScript** — Typage strict
- **Tailwind CSS** — Design system premium
- **Shadcn/UI** — Composants accessibles
- **Framer Motion** — Animations fluides
- **Lucide Icons** — Iconographie moderne

## Démarrage

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Structure

```
src/
├── app/                  # Pages, layout, SEO (sitemap, robots)
├── components/
│   ├── layout/           # Header, Footer
│   ├── sections/         # 10 sections one-page
│   └── ui/               # Composants Shadcn/UI
└── lib/                  # Utilitaires, config SEO
```

## Sections

1. Hero — Accroche + chiffres clés + CTA
2. Problématiques — Pain points des dirigeants
3. Services — 4 offres premium
4. Méthodologie — Timeline 5 étapes
5. Bénéfices — Résultats + statistiques animées
6. À propos — Storytelling consultant
7. Témoignages — Slider clients
8. FAQ — Accordéon interactif
9. CTA final — Appel à l'action
10. Contact — Formulaire avec validation CRM-ready

## Personnalisation

- **Nom du cabinet** : `src/lib/seo.ts` → `siteConfig`
- **Couleurs** : `tailwind.config.ts`
- **Contenu** : fichiers dans `src/components/sections/`
- **CRM** : `src/app/api/contact/route.ts`

## SEO

- Meta title, description, Open Graph
- Schema.org (ProfessionalService + FAQPage)
- Sitemap automatique (`/sitemap.xml`)
- Robots.txt (`/robots.txt`)
- Mots-clés ciblés intégrés dans le contenu

## Build production

```bash
npm run build
npm start
```

## Déploiement

Compatible Vercel, Netlify, ou tout hébergeur Node.js.
