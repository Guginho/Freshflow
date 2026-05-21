import { ArrowRight, Shield, Zap } from "lucide-react";
import { EmailForm } from "@/components/EmailForm";
import { MotionSection } from "@/components/MotionSection";

export function CTA() {
  return (
    <section
      id="beta"
      className="relative overflow-hidden bg-ink py-20 md:py-28"
    >
      {/* Green glow top */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(24,163,74,0.5), transparent 70%)",
        }}
      />
      {/* Grid pattern */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Orange glow bottom-right */}
      <div
        aria-hidden
        className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(closest-side, rgba(245,158,11,0.2), transparent)",
          filter: "blur(20px)",
        }}
      />

      <div className="container relative">
        <MotionSection className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80 backdrop-blur mb-6">
            <Zap className="h-3.5 w-3.5 text-brand-green" />
            Accès bêta — places limitées
          </span>

          <h2 className="text-balance text-[36px] sm:text-[48px] font-extrabold tracking-tightest leading-[1.04] text-white">
            Prêt·e à voir l'argent que tu jettes chaque mois ?
          </h2>
          <p className="mt-5 text-lg text-white/60 max-w-lg mx-auto">
            Laisse ton e-mail. On t'envoie ton accès dès l'ouverture de la bêta
            — et zéro spam, promis.
          </p>

          <div className="mt-10 flex justify-center">
            <EmailForm />
          </div>

          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-white/40">
            <span className="flex items-center gap-1.5">
              <Shield className="h-3.5 w-3.5" />
              Données sécurisées
            </span>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span className="flex items-center gap-1.5">
              <ArrowRight className="h-3.5 w-3.5" />
              Aucun engagement
            </span>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span>iOS & Android</span>
          </div>
        </MotionSection>
      </div>
    </section>
  );
}
