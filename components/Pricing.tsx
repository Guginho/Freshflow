"use client";

import * as React from "react";
import { Check, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
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
    tagline: "Pour découvrir FreshFlow",
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
          <h2 className="text-balance text-[32px] sm:text-[42px] font-extrabold tracking-tightest text-ink leading-tight">
            Des tarifs pensés pour économiser{" "}
            <span className="text-brand-green">plus que leur prix</span>
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            Commence gratuitement. Passe à Plus ou Family quand tu veux suivre
            ton foyer en entier.
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
                "px-4 py-2 text-sm font-semibold rounded-full transition-colors",
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
                "px-4 py-2 text-sm font-semibold rounded-full transition-colors inline-flex items-center gap-2",
                yearly
                  ? "bg-white text-ink shadow-soft"
                  : "text-ink-soft hover:text-ink",
              )}
            >
              Annuel
              <span className="rounded-full bg-brand-green text-white text-[10px] px-1.5 py-0.5 font-bold">
                -17%
              </span>
            </button>
          </div>
        </MotionSection>

        <div className="mt-12 grid gap-6 md:grid-cols-3 md:items-stretch">
          {PLANS.map((plan, i) => {
            const isFree = plan.monthly === 0;
            const price = yearly ? plan.yearly : plan.monthly;
            const suffix = isFree
              ? ""
              : yearly
                ? "€ / an"
                : "€ / mois";

            return (
              <MotionSection
                key={plan.name}
                delay={i * 0.08}
                className={cn(
                  "relative flex flex-col rounded-2xl border bg-white p-7 transition-all",
                  plan.highlight
                    ? "border-brand-green border-[2.5px] shadow-cardHover md:scale-[1.03] md:-translate-y-1"
                    : "border-border shadow-card hover:shadow-cardHover",
                )}
              >
                {plan.highlight && (
                  <Badge
                    variant="green"
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1.5 text-[11px]"
                  >
                    <Sparkles className="h-3 w-3" />
                    Le plus populaire
                  </Badge>
                )}

                <div>
                  <h3 className="text-xl font-extrabold text-ink">{plan.name}</h3>
                  <p className="mt-1 text-sm text-ink-soft">{plan.tagline}</p>
                </div>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-[44px] font-extrabold tracking-tightest text-ink leading-none">
                    {isFree ? "0€" : `${formatEuro(price)}`}
                  </span>
                  {!isFree && (
                    <span className="text-sm font-medium text-ink-soft">
                      {suffix}
                    </span>
                  )}
                  {isFree && (
                    <span className="text-sm font-medium text-ink-soft">
                      / mois
                    </span>
                  )}
                </div>
                {!isFree && yearly && (
                  <p className="mt-1 text-xs text-brand-green font-semibold">
                    Soit ~{formatEuro(plan.yearly / 12)}€ / mois facturés
                    annuellement
                  </p>
                )}

                <ul className="mt-6 space-y-3 flex-1">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-[15px] text-ink"
                    >
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-mint">
                        <Check className="h-3 w-3 text-brand-green" strokeWidth={3} />
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7">
                  <Button
                    asChild
                    size="lg"
                    variant={plan.ctaVariant}
                    className="w-full"
                  >
                    <a href="#beta">{plan.ctaLabel}</a>
                  </Button>
                </div>
              </MotionSection>
            );
          })}
        </div>

        <p className="mt-8 text-center text-sm text-ink-soft">
          Sans engagement. Annulation en un clic. TVA incluse.
        </p>
      </div>
    </section>
  );
}
