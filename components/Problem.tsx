import { Brain, Leaf, ShoppingCart } from "lucide-react";
import { MotionSection } from "@/components/MotionSection";

const ITEMS = [
  {
    Icon: Leaf,
    number: "30%",
    title: "Gaspillage alimentaire",
    body: "Tu retrouves des produits périmés au fond du frigo alors que tu les avais déjà payés. 30% de ce que tu achètes finit à la poubelle.",
    color: "from-green-500/20 to-emerald-500/10",
    iconBg: "bg-green-500/15 text-green-600",
  },
  {
    Icon: ShoppingCart,
    number: "2×",
    title: "Achats en doublon",
    body: "Tu rachètes du lait, du fromage ou des pâtes alors qu'il y en a déjà à la maison. L'addition monte vite sans t'en rendre compte.",
    color: "from-amber-500/20 to-orange-500/10",
    iconBg: "bg-amber-500/15 text-amber-600",
  },
  {
    Icon: Brain,
    number: "1h",
    title: "Charge mentale",
    body: "Chaque semaine, tu te demandes quoi cuisiner, quoi racheter, quoi consommer en priorité. Une charge invisible mais épuisante.",
    color: "from-purple-500/20 to-violet-500/10",
    iconBg: "bg-purple-500/15 text-purple-600",
  },
];

export function Problem() {
  return (
    <section id="probleme" className="bg-ink py-20 md:py-28">
      <div className="container">
        <MotionSection className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-green mb-4">
            Le problème
          </p>
          <h2 className="text-balance text-[32px] sm:text-[44px] font-extrabold tracking-tightest text-white leading-tight">
            Le vrai problème n'est pas ton frigo.
          </h2>
          <p className="mt-4 text-lg text-white/60">
            C'est l'argent qui part sans que tu t'en rendes compte, chaque semaine.
          </p>
        </MotionSection>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {ITEMS.map((item, i) => (
            <MotionSection
              key={item.title}
              delay={i * 0.1}
              className={`relative rounded-2xl bg-gradient-to-br ${item.color} border border-white/10 p-8 transition-all hover:border-white/20 hover:shadow-cardHover`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`grid h-12 w-12 place-items-center rounded-xl ${item.iconBg}`}>
                  <item.Icon className="h-6 w-6" strokeWidth={2} />
                </div>
                <span className="text-[40px] font-extrabold tracking-tightest text-white/15 leading-none">
                  {item.number}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-white/60">
                {item.body}
              </p>
            </MotionSection>
          ))}
        </div>
      </div>
    </section>
  );
}
