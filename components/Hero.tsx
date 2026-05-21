"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, TrendingDown, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroMockup } from "@/components/HeroMockup";

const STATS = [
  { icon: Users, value: "2 400+", label: "foyers inscrits" },
  { icon: TrendingDown, value: "38€", label: "économisés / mois en moyenne" },
  { icon: Star, value: "4,9/5", label: "satisfaction bêta" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Gradient background */}
      <div
        className="absolute inset-x-0 top-0 -z-10 h-[700px] pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(24,163,74,0.12) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 -z-10 h-[500px] w-[500px] rounded-full pointer-events-none opacity-30"
        aria-hidden
        style={{
          background:
            "conic-gradient(from 180deg, rgba(24,163,74,0.3), rgba(34,197,94,0.1), rgba(24,163,74,0.3))",
          filter: "blur(60px)",
        }}
      />

      <div className="container pt-12 pb-20 md:pt-24 md:pb-32">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_1fr]">
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-mint bg-brand-light px-4 py-2 text-sm font-semibold text-brand-deep">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-green opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-green" />
                </span>
                <Sparkles className="h-3.5 w-3.5 text-brand-green" />
                Accès bêta ouvert — rejoins la liste
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 text-[44px] sm:text-[58px] lg:text-[64px] font-extrabold leading-[1.02] tracking-tightest text-ink"
            >
              Moins de gaspillage.{" "}
              <span className="relative">
                <span className="relative z-10 text-brand-green">
                  Plus d'économies.
                </span>
                <span
                  className="absolute bottom-1 left-0 -z-10 h-3 w-full opacity-20 rounded-sm"
                  style={{ background: "#18A34A" }}
                  aria-hidden
                />
              </span>{" "}
              Sans y penser.
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-lg text-[18px] leading-relaxed text-ink-soft"
            >
              Saveo suit ton frigo, prévient les péremptions, propose des
              recettes et mesure tes économies — sans rien changer à tes
              habitudes.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
            >
              <Button asChild size="lg" className="shadow-glow">
                <a href="#beta">
                  Rejoindre la bêta gratuitement
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <a href="#solution">Voir comment ça marche</a>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.38 }}
              className="mt-12 grid grid-cols-3 gap-4 border-t border-border pt-8"
            >
              {STATS.map(({ icon: Icon, value, label }) => (
                <div key={label}>
                  <div className="flex items-center gap-1.5 text-brand-green mb-1">
                    <Icon className="h-4 w-4" />
                  </div>
                  <p className="text-[22px] font-extrabold tracking-tightest text-ink leading-none">
                    {value}
                  </p>
                  <p className="mt-1 text-[12px] text-ink-mute leading-snug">
                    {label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <HeroMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
