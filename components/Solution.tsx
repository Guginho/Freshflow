import { BellRing, ChefHat, LineChart, ScanLine } from "lucide-react";
import { MotionSection } from "@/components/MotionSection";

const STEPS = [
  {
    n: "01",
    Icon: ScanLine,
    title: "Scanne ton ticket",
    body: "Après les courses, prends ton ticket en photo. FreshFlow reconnaît les produits et remplit ton stock.",
  },
  {
    n: "02",
    Icon: BellRing,
    title: "Reçois des alertes",
    body: "L'app t'indique quels aliments approchent de la péremption et quoi consommer en priorité.",
  },
  {
    n: "03",
    Icon: ChefHat,
    title: "Découvre des recettes",
    body: "FreshFlow te propose des idées de repas à partir de ce que tu as déjà chez toi.",
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
          <h2 className="text-balance text-[32px] sm:text-[42px] font-extrabold tracking-tightest text-ink leading-tight">
            FreshFlow simplifie tout en{" "}
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
              delay={i * 0.08}
              className="relative rounded-2xl border border-border bg-white p-6 shadow-soft transition-shadow hover:shadow-card"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-brand-green text-white text-sm font-bold">
                  {step.n}
                </div>
                <step.Icon className="h-5 w-5 text-brand-green" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-ink">{step.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                {step.body}
              </p>
            </MotionSection>
          ))}
        </div>
      </div>
    </section>
  );
}
