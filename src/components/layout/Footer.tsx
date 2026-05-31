import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/seo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gold flex items-center justify-center">
                <span className="text-navy font-display font-bold text-lg">O</span>
              </div>
              <span className="font-display font-bold text-xl">{siteConfig.name}</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Cabinet de conseil en audit, management et organisation d&apos;entreprise.
              Nous accompagnons les dirigeants vers l&apos;excellence opérationnelle.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gold mb-4">Navigation</h4>
            <ul className="space-y-3">
              {[
                { href: "#services", label: "Nos services" },
                { href: "#methodologie", label: "Méthodologie" },
                { href: "#resultats", label: "Résultats" },
                { href: "#apropos", label: "À propos" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-gold text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gold mb-4">Expertises</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>Audit d&apos;entreprise</li>
              <li>Accompagnement dirigeant</li>
              <li>Organisation & Processus</li>
              <li>Management des équipes</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gold mb-4">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-white/60 hover:text-gold text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 text-gold shrink-0" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-white/60 hover:text-gold text-sm transition-colors"
                >
                  <Mail className="w-4 h-4 text-gold shrink-0" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.postalCode} {siteConfig.address.city}
                </span>
              </li>
            </ul>
            <div className="flex gap-3 mt-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-gold hover:text-navy transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {currentYear} {siteConfig.name}. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm text-white/40">
            <Link href="#" className="hover:text-gold transition-colors">
              Mentions légales
            </Link>
            <Link href="#" className="hover:text-gold transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
