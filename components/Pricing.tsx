"use client";

import * as React from "react";
import { Check, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MotionSection } from "@/components/MotionSection";
import { cn } from "@/lib/utils";

type Plan = {
  name: string;
  tagline: string;
  monthly: number;
  yearly: number;
  features: string[];
  ctaLabel: string;
  ctaVariant: "primary" | "secondary" | "outline";
  highlight?: boolean;
};

const PLANS: Plan[] = [
  {
    name: "Free",
    tagline: "Pour découvrir Saveo",
    monthly: 0,
    yearly: 0,
    features: [
      "Ajout manuel des produits",
      "1 foyer",
      "Jusqu'à 40 produits actifs",
      "Alertes de péremption basiques",
      "Liste « à consommer en priorité »",
    ],
    ctaLabel: "Commencer gratuitement",
    ctaVariant: "outline",
  },
  {
    name: "Plus",
    tagline: "Pour les personnes seules ou les couples",
    monthly: 6.99,
    yearly: 59.99,
    features: [
      "Produits illimités",
      "Scan ticket intelligent",
      "Alertes avancées",
      "Recettes illimitées",
      "Tableau d'économies mensuelles",
      "2 utilisateurs",
    ],
    ctaLabel: "Choisir Plus",
    ctaVariant: "primary",
    highlight: true,
  },
  {
    name: "Family",
    tagline: "Pour les familles et colocations",
    monthly: 11.99,
    yearly: 99.99,
    features: [
      "Tout le plan Plus",
      "Jusqu'à 6 utilisateurs",
      "Frigo, congélateur et placards partagés",
      "Listes de courses synchronisées",
      "Menus familiaux",
      "Historique du foyer",
    ],
    ctaLabel: "Choisir Family",
    ctaVariant: "secondary",
  },
];

function formatEuro(value: number) {
  return value.toLocaleString("fr-FR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export function Pricing() {
  const [yearly, setYearly] = React.useState(false);

  return (
    <section id="tarifs" className="bg-white py-20 md:py-28">
      <div className="container">
        <MotionSection className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-green mb-4">
            Tarifs
          </p>
          <h2 className="text-balance text-[32px] sm:text-[44px] font-extrabold tracking-tightest text-ink leading-tight">
            Des tarifs pensés pour économiser{" "}
            <span className="text-brand-green">plus que leur prix</span>
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            Commence gratuitement. Passe à Plus ou Family quand tu veux.
          </p>
        </MotionSection>

        <MotionSection className="mt-8 flex justify-center" delay={0.05}>
          <div
            role="tablist"
            aria-label="Période de facturation"
            className="inline-flex items-center gap-1 rounded-full border border-border bg-surface-alt p-1"
          >
            <button
              role="tab"
              aria-selected={!yearly}
              onClick={() => setYearly(false)}
              className={cn(
                "px-5 py-2 text-sm font-semibold rounded-full transition-all",
                !yearly
                  ? "bg-white text-ink shadow-soft"
                  : "text-ink-soft hover:text-ink",
              )}
            >
              Mensuel
            </button>
            <button
              role="tab"
              aria-selected={yearly}
              onClick={() => setYearly(true)}
              className={cn(
                "px-5 py-2 text-sm font-semibold rounded-full transition-all inline-flex items-center gap-2",
                yearly
                  ? "bg-white text-ink shadow-soft"
                  : "text-ink-soft hover:text-ink",
              )}
            >
              Annuel
              <span className="rounded-full bg-brand-green text-white text-[10px] px-2 py-0.5 font-bold">
                -17%
              </span>
            </button>
          </div>
        </MotionSection>

        <div className="mt-12 grid gap-6 md:grid-cols-3 md:items-stretch">
          {PLANS.map((plan, i) => {
            const isFree = plan.monthly === 0;
            const price = yearly ? plan.yearly : plan.monthly;
            const suffix = isFree ? "" : yearly ? "€ / an" : "€ / mois";

            return (
              <MotionSection
                key={plan.name}
                delay={i * 0.08}
                className={cn(
                  "relative flex flex-col rounded-2xl p-8 transition-all",
                  plan.highlight
                    ? "bg-ink text-white shadow-cardHover md:scale-[1.04] md:-translate-y-1"
                    : "border border-border bg-white shadow-card hover:shadow-cardHover",
                )}
              >
                {plan.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-green px-4 py-1.5 text-[11px] font-bold text-white shadow-glow">
                      <Zap className="h-3 w-3" />
                      Le plus populaire
                    </span>
                  </div>
                )}

                <div>
                  <h3 className={cn("text-xl font-extrabold", plan.highlight ? "text-white" : "text-ink")}>
                    {plan.name}
                  </h3>
                  <p className={cn("mt-1 text-sm", plan.highlight ? "text-white/60" : "text-ink-soft")}>
                    {plan.tagline}
                  </p>
                </div>

                <div className="mt-7 flex items-baseline gap-1">
                  <span className={cn("text-[48px] font-extrabold tracking-tightest leading-none", plan.highlight ? "text-white" : "text-ink")}>
                    {isFree ? "0€" : `${formatEuro(price)}`}
                  </span>
                  {!isFree && (
                    <span className={cn("text-sm font-medium", plan.highlight ? "text-white/60" : "text-ink-soft")}>
                      {suffix}
                    </span>
                  )}
                  {isFree && (
                    <span className={cn("text-sm font-medium", plan.highlight ? "text-white/60" : "text-ink-soft")}>
                      / mois
                    </span>
                  )}
                </div>
                {!isFree && yearly && (
                  <p className="mt-1 text-xs text-brand-green font-semibold">
                    Soit ~{formatEuro(plan.yearly / 12)}€ / mois
                  </p>
                )}

                <div className={cn("my-6 h-px", plan.highlight ? "bg-white/10" : "bg-border")} />

                <ul className="space-y-3 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[15px]">
                      <span className={cn(
                        "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full",
                        plan.highlight ? "bg-brand-green/20" : "bg-brand-mint",
                      )}>
                        <Check className={cn("h-3 w-3", plan.highlight ? "text-brand-green" : "text-brand-green")} strokeWidth={3} />
                      </span>
                      <span className={plan.highlight ? "text-white/80" : "text-ink"}>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button
                    asChild
                    size="lg"
                    variant={plan.highlight ? "primary" : plan.ctaVariant}
                    className={cn("w-full", plan.highlight && "bg-brand-green hover:bg-brand-leaf shadow-glow")}
                  >
                    <a href="#beta">{plan.ctaLabel}</a>
                  </Button>
                </div>
              </MotionSection>
            );
          })}
        </div>

        <p className="mt-8 text-center text-sm text-ink-mute">
          Sans engagement · Annulation en un clic · TVA incluse
        </p>
      </div>
    </section>
  );
}
