import { BellRing, ChefHat, LineChart, ScanLine } from "lucide-react";
import { MotionSection } from "@/components/MotionSection";

const STEPS = [
  {
    n: "01",
    Icon: ScanLine,
    title: "Scanne ton ticket",
    body: "Après les courses, prends ton ticket en photo. Saveo reconnaît les produits, remplit ton stock et estime les dates de péremption.",
  },
  {
    n: "02",
    Icon: BellRing,
    title: "Reçois des alertes",
    body: "L'app t'indique quels aliments approchent de la péremption et quoi consommer en priorité avant que ça parte à la poubelle.",
  },
  {
    n: "03",
    Icon: ChefHat,
    title: "Découvre des recettes",
    body: "Saveo te propose des idées de repas à partir de ce que tu as déjà chez toi. Plus besoin de chercher.",
  },
  {
    n: "04",
    Icon: LineChart,
    title: "Mesure tes économies",
    body: "Visualise chaque mois l'argent économisé grâce à la réduction du gaspillage et des achats en double.",
  },
];

export function Solution() {
  return (
    <section id="solution" className="bg-brand-light py-20 md:py-28">
      <div className="container">
        <MotionSection className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-green mb-4">
            Comment ça marche
          </p>
          <h2 className="text-balance text-[32px] sm:text-[44px] font-extrabold tracking-tightest text-ink leading-tight">
            Saveo simplifie tout en{" "}
            <span className="text-brand-green">4 étapes</span>
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            Pas d'agenda à tenir, pas de carnet à remplir. Tu fais tes courses,
            l'app fait le reste.
          </p>
        </MotionSection>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <MotionSection
              key={step.n}
              delay={i * 0.1}
              className="group relative rounded-2xl border border-border bg-white p-7 shadow-soft transition-all hover:shadow-card hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-brand-green text-white text-sm font-bold shadow-glow">
                  {step.n}
                </div>
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-mint text-brand-green group-hover:scale-110 transition-transform">
                  <step.Icon className="h-5 w-5" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-ink">{step.title}</h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-ink-soft">
                {step.body}
              </p>
            </MotionSection>
          ))}
        </div>
      </div>
    </section>
  );
}
