import { Brain, Leaf, ShoppingCart } from "lucide-react";
import { MotionSection } from "@/components/MotionSection";

const ITEMS = [
  {
    Icon: Leaf,
    title: "Gaspillage alimentaire",
    body: "Tu retrouves des produits périmés au fond du frigo, alors que tu les avais déjà payés.",
  },
  {
    Icon: ShoppingCart,
    title: "Achats en doublon",
    body: "Tu rachètes du lait, du fromage ou des pâtes alors qu'il y en a déjà à la maison.",
  },
  {
    Icon: Brain,
    title: "Charge mentale",
    body: "Chaque semaine, tu te demandes quoi cuisiner, quoi racheter et quoi consommer en priorité.",
  },
];

export function Problem() {
  return (
    <section id="probleme" className="bg-white py-20 md:py-28">
      <div className="container">
        <MotionSection className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-[32px] sm:text-[42px] font-extrabold tracking-tightest text-ink leading-tight">
            Le vrai problème n'est pas ton frigo.
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            C'est l'argent qui part sans que tu t'en rendes compte.
          </p>
        </MotionSection>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {ITEMS.map((item, i) => (
            <MotionSection
              key={item.title}
              delay={i * 0.08}
              className="rounded-2xl border border-border bg-surface-alt p-7 transition-shadow hover:shadow-card"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-mint text-brand-green">
                <item.Icon className="h-6 w-6" strokeWidth={2} />
              </div>
              <h3 className="mt-5 text-xl font-bold text-ink">{item.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                {item.body}
              </p>
            </MotionSection>
          ))}
        </div>
      </div>
    </section>
  );
}
