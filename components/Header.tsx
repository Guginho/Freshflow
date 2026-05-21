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
  { label: "Avis", href: "#avis" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-border shadow-soft"
          : "bg-transparent border-b border-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between md:h-[68px]">
        <Link href="/" aria-label="Accueil Saveo" className="shrink-0">
          <Logo />
        </Link>

        <nav className="hidden lg:flex items-center gap-0.5 absolute left-1/2 -translate-x-1/2">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-4 py-2 text-sm font-medium text-ink-soft hover:text-ink transition-colors rounded-full hover:bg-surface-alt"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Button asChild variant="ghost" size="sm">
            <a href="#tarifs">Tarifs</a>
          </Button>
          <Button asChild size="sm" className="shadow-glow">
            <a href="#beta">Rejoindre la bêta</a>
          </Button>
        </div>

        <button
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-surface-alt text-ink transition-colors"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-white/95 backdrop-blur-xl">
          <nav className="container flex flex-col py-4">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-ink hover:text-brand-green border-b border-border/60 last:border-b-0 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="grid grid-cols-2 gap-3 pt-4">
              <Button asChild variant="secondary" size="md" onClick={() => setOpen(false)}>
                <a href="#tarifs">Tarifs</a>
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
