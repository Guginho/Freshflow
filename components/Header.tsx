"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Problème", href: "#probleme" },
  { label: "Solution", href: "#solution" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "FAQ", href: "#faq" },
  { label: "Avis", href: "#avis" },
];

export function Header() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        scrolled
          ? "bg-white/80 backdrop-blur-lg border-b border-border"
          : "bg-white/60 backdrop-blur-md border-b border-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between md:h-[72px]">
        <Link href="/" aria-label="Accueil FreshFlow" className="shrink-0">
          <Logo />
        </Link>

        <nav className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-sm font-medium text-ink-soft hover:text-brand-green transition-colors rounded-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Button asChild variant="ghost" size="sm">
            <a href="#tarifs">Voir les tarifs</a>
          </Button>
          <Button asChild size="sm">
            <a href="#beta">Rejoindre la bêta</a>
          </Button>
        </div>

        <button
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-brand-mint text-ink"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-white">
          <nav className="container flex flex-col py-4">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-ink hover:text-brand-green border-b border-border/60 last:border-b-0"
              >
                {item.label}
              </a>
            ))}
            <div className="grid grid-cols-2 gap-3 pt-4">
              <Button asChild variant="secondary" size="md" onClick={() => setOpen(false)}>
                <a href="#tarifs">Voir les tarifs</a>
              </Button>
              <Button asChild size="md" onClick={() => setOpen(false)}>
                <a href="#beta">Rejoindre la bêta</a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
