"use client";

import { motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/seo";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#methodologie", label: "Méthode" },
  { href: "#resultats", label: "Résultats" },
  { href: "#apropos", label: "À propos" },
  { href: "#temoignages", label: "Témoignages" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-premium py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gold flex items-center justify-center shadow-gold">
              <span className="text-navy font-display font-bold text-lg">O</span>
            </div>
            <div>
              <span
                className={`font-display font-bold text-lg tracking-tight transition-colors ${
                  isScrolled ? "text-navy" : "text-white"
                }`}
              >
                {siteConfig.name}
              </span>
              <p
                className={`text-xs hidden sm:block transition-colors ${
                  isScrolled ? "text-slate-500" : "text-white/70"
                }`}
              >
                Audit & Management
              </p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-gold ${
                  isScrolled ? "text-slate-600" : "text-white/90"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-gold ${
                isScrolled ? "text-navy" : "text-white"
              }`}
            >
              <Phone className="w-4 h-4" />
              {siteConfig.phone}
            </a>
            <Button asChild size="sm">
              <Link href="#contact">Diagnostic gratuit</Link>
            </Button>
          </div>

          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? "text-navy" : "text-white"
            }`}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Menu"
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-white border-t shadow-premium-lg"
        >
          <nav className="flex flex-col p-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="px-4 py-3 text-navy font-medium hover:bg-slate-50 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 px-4">
              <Button asChild className="w-full">
                <Link href="#contact" onClick={() => setIsMobileOpen(false)}>
                  Diagnostic gratuit
                </Link>
              </Button>
            </div>
          </nav>
        </motion.div>
      )}
    </header>
  );
}
