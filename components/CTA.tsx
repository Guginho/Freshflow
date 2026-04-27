import { Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { EmailForm } from "@/components/EmailForm";
import { MotionSection } from "@/components/MotionSection";

export function CTA() {
  return (
    <section
      id="beta"
      className="relative overflow-hidden bg-brand-deep text-white py-20 md:py-28"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-50 pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(67,160,71,0.55), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(closest-side, rgba(245,165,36,0.25), transparent)",
        }}
      />

      <div className="container relative">
        <MotionSection className="mx-auto max-w-2xl text-center">
          <Badge
            variant="green"
            className="mb-5 bg-white/10 text-white backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Accès bêta — places limitées
          </Badge>

          <h2 className="text-balance text-[34px] sm:text-[44px] font-extrabold tracking-tightest leading-[1.05]">
            Prêt·e à voir l'argent que tu jettes chaque mois ?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Laisse ton e-mail. On t'envoie ton accès à FreshFlow dès l'ouverture
            de la bêta — et zéro spam, promis.
          </p>

          <div className="mt-8 flex justify-center">
            <EmailForm />
          </div>
        </MotionSection>
      </div>
    </section>
  );
}
