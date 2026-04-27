"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HeroMockup } from "@/components/HeroMockup";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 grain-radial pointer-events-none" aria-hidden />
      <div
        className="absolute inset-x-0 top-0 -z-10 h-[640px] pointer-events-none opacity-60"
        aria-hidden
        style={{
          background:
            "radial-gradient(60% 60% at 50% 0%, #EAF7EC 0%, transparent 70%)",
        }}
      />
      <div className="container pt-10 pb-16 md:pt-20 md:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <Badge variant="default" className="mb-5">
                <Sparkles className="h-3.5 w-3.5" />
                L'app qui réduit ton budget courses
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-balance text-[40px] sm:text-[52px] lg:text-[60px] font-extrabold leading-[1.04] tracking-tightest text-ink"
            >
              Moins de gaspillage.{" "}
              <span className="text-brand-green">Plus d'économies.</span>{" "}
              Sans y penser.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-5 max-w-xl text-[17px] leading-relaxed text-ink-soft"
            >
              FreshFlow t'aide à suivre ce que tu as déjà chez toi, à éviter
              les achats en doublon et à cuisiner avant que tes aliments ne
              périment.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
            >
              <Button asChild size="lg">
                <a href="#beta">
                  Rejoindre la bêta
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <a href="#solution">Voir comment ça marche</a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-8 flex items-center gap-4 text-sm text-ink-soft"
            >
              <div className="flex -space-x-2">
                {["#43A047", "#2E7D32", "#F5A524", "#1F5A23"].map((c, i) => (
                  <span
                    key={i}
                    className="h-7 w-7 rounded-full border-2 border-white"
                    style={{ background: c }}
                  />
                ))}
              </div>
              <span>
                +<span className="font-semibold text-ink">2 400</span> foyers
                déjà sur la liste d'attente
              </span>
            </motion.div>
          </div>

          <div className="relative">
            <HeroMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
