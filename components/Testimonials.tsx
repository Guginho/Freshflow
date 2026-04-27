import { Star } from "lucide-react";
import { MotionSection } from "@/components/MotionSection";

type Testimonial = {
  name: string;
  role: string;
  initials: string;
  color: string;
  body: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Camille",
    role: "29 ans, jeune active en couple",
    initials: "CL",
    color: "#43A047",
    body: "On jetait souvent des yaourts, de la salade et des sauces entamées. Avec FreshFlow, on voit enfin ce qu'il faut utiliser d'abord. On dépense moins et on gaspille beaucoup moins.",
  },
  {
    name: "Romain",
    role: "34 ans, père de famille",
    initials: "RM",
    color: "#2E7D32",
    body: "Le scan ticket change tout. Je rentre des courses, je scanne, et l'app me dit déjà ce qu'on a, ce qui va périmer et ce qu'on peut cuisiner ce soir. Plus de doublons, plus de prise de tête.",
  },
  {
    name: "Julie",
    role: "31 ans, en couple, budget serré",
    initials: "JL",
    color: "#1F5A23",
    body: "Voir « 32€ économisés ce mois-ci », noir sur blanc, ça motive. Je continue à faire mes courses comme avant, sauf que maintenant je sais ce qui dort dans mon frigo.",
  },
];

export function Testimonials() {
  return (
    <section id="avis" className="bg-brand-light py-20 md:py-28">
      <div className="container">
        <MotionSection className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-[32px] sm:text-[42px] font-extrabold tracking-tightest text-ink leading-tight">
            Ils ont repris le contrôle de leurs courses
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            Trois foyers, trois budgets, un même résultat : moins de poubelle,
            plus de marge à la fin du mois.
          </p>
        </MotionSection>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <MotionSection
              key={t.name}
              delay={i * 0.08}
              className="flex h-full flex-col rounded-2xl border border-border bg-white p-7 shadow-soft"
            >
              <div className="flex items-center gap-1 text-brand-orange" aria-label="5 étoiles sur 5">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-5 text-[15px] leading-relaxed text-ink flex-1">
                « {t.body} »
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div
                  className="grid h-10 w-10 place-items-center rounded-full text-white text-sm font-bold"
                  style={{ background: t.color }}
                  aria-hidden
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">{t.name}</p>
                  <p className="text-xs text-ink-soft">{t.role}</p>
                </div>
              </div>
            </MotionSection>
          ))}
        </div>
      </div>
    </section>
  );
}
