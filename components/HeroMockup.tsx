"use client";

import { motion } from "framer-motion";
import {
  AlarmClock,
  Carrot,
  CheckCircle2,
  PiggyBank,
  Sparkles,
  Wallet,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.15 + i * 0.12,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export function HeroMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[420px]">
      {/* soft glow behind */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 rounded-[48px] blur-3xl opacity-70"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 40%, rgba(67,160,71,0.35), transparent 70%)",
        }}
      />
      {/* phone frame */}
      <div className="rounded-[40px] border border-border bg-surface-alt p-3 shadow-card">
        <div className="rounded-[32px] bg-gradient-to-b from-brand-light to-white p-4 sm:p-5 overflow-hidden">
          {/* top status row */}
          <div className="flex items-center justify-between text-[11px] text-ink-soft px-2 mb-4">
            <span className="font-semibold text-ink">9:41</span>
            <span className="font-medium">FreshFlow</span>
            <span>•••</span>
          </div>

          {/* greeting */}
          <div className="px-1 mb-4">
            <p className="text-xs font-medium text-ink-soft">Bonjour Julie</p>
            <h3 className="text-[17px] font-extrabold tracking-tightest text-ink">
              Voici ton frigo aujourd'hui
            </h3>
          </div>

          <div className="space-y-3">
            {/* Card 1 — priority */}
            <motion.div
              custom={0}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              className="rounded-2xl border border-border bg-white p-4 shadow-soft"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-2">
                  <div className="grid h-8 w-8 place-items-center rounded-full bg-brand-orange/15 text-brand-orange">
                    <AlarmClock className="h-4 w-4" />
                  </div>
                  <p className="text-[13px] font-semibold text-ink">
                    À consommer en priorité
                  </p>
                </div>
                <Badge variant="orange" className="text-[10px] px-2 py-0.5">
                  Expire sous 2 jours
                </Badge>
              </div>
              <ul className="space-y-1.5 text-[13px] text-ink-soft">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
                  Yaourts nature
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
                  Salade verte
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
                  Poulet mariné
                </li>
              </ul>
            </motion.div>

            {/* Card 2 — duplicates */}
            <motion.div
              custom={1}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              className="rounded-2xl border border-border bg-white p-4 shadow-soft"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-2">
                  <div className="grid h-8 w-8 place-items-center rounded-full bg-brand-mint text-brand-deep">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <p className="text-[13px] font-semibold text-ink">
                    Évite les doublons
                  </p>
                </div>
                <Badge variant="leaf" className="text-[10px] px-2 py-0.5">
                  Achats optimisés
                </Badge>
              </div>
              <p className="text-[13px] text-ink-soft mb-2">
                Tu as déjà à la maison :
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["Lait", "Riz", "Fromage râpé"].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 rounded-full bg-brand-mint px-2.5 py-1 text-[11px] font-medium text-brand-deep"
                  >
                    <Carrot className="h-3 w-3" />
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Card 3 — savings */}
            <motion.div
              custom={2}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              className="rounded-2xl border border-brand-leaf/30 bg-gradient-to-br from-brand-mint to-white p-4 shadow-soft"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-2">
                  <div className="grid h-8 w-8 place-items-center rounded-full gradient-leaf text-white">
                    <PiggyBank className="h-4 w-4" />
                  </div>
                  <p className="text-[13px] font-semibold text-ink">
                    Économies estimées
                  </p>
                </div>
                <Badge variant="leaf" className="text-[10px] px-2 py-0.5">
                  Budget sous contrôle
                </Badge>
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-[28px] font-extrabold tracking-tightest text-brand-deep leading-none">
                    32,40€
                  </p>
                  <p className="mt-1 text-[12px] text-ink-soft">
                    sauvés ce mois-ci
                  </p>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-semibold text-brand-green">
                  <Sparkles className="h-3.5 w-3.5" />
                  +18% vs janvier
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-4 flex items-center justify-center">
            <div className="h-1 w-24 rounded-full bg-ink/10" />
          </div>
        </div>
      </div>

      {/* Floating chip */}
      <motion.div
        initial={{ opacity: 0, x: -16, y: 16 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="hidden sm:flex absolute -left-6 top-20 items-center gap-2 rounded-full bg-white px-3 py-2 shadow-card border border-border"
      >
        <div className="grid h-7 w-7 place-items-center rounded-full bg-brand-green text-white">
          <Wallet className="h-3.5 w-3.5" />
        </div>
        <div className="text-[11px] leading-tight">
          <p className="font-semibold text-ink">-32€ ce mois-ci</p>
          <p className="text-ink-soft">budget courses</p>
        </div>
      </motion.div>
    </div>
  );
}
