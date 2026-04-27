import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MotionSection } from "@/components/MotionSection";

const FAQS = [
  {
    q: "Comment FreshFlow sait ce qu'il y a dans mon frigo ?",
    a: "Tu prends ton ticket de caisse en photo après les courses. FreshFlow lit les produits, les ajoute à ton stock et estime leur date de péremption. Tu peux aussi ajouter ou corriger un produit à la main en deux secondes.",
  },
  {
    q: "Mes données et mes tickets sont-ils privés ?",
    a: "Oui. Tes tickets servent uniquement à remplir ton stock. On ne revend pas tes données, on ne les partage avec aucune enseigne. Tu peux supprimer ton compte et toutes tes données depuis l'app à tout moment.",
  },
  {
    q: "Sur quels téléphones ça marche ?",
    a: "FreshFlow est disponible sur iPhone (iOS 16+) et Android (12+). Pas besoin d'objet connecté ni de balance dans le frigo : ton téléphone suffit.",
  },
  {
    q: "Combien je peux vraiment économiser ?",
    a: "Les foyers de notre bêta économisent en moyenne entre 25€ et 60€ par mois sur leur budget courses, simplement en jetant moins et en arrêtant les achats en double. L'app affiche ton chiffre réel chaque mois.",
  },
  {
    q: "Puis-je partager mon stock avec mon conjoint ou ma famille ?",
    a: "Oui. Le plan Plus permet de partager à 2, le plan Family jusqu'à 6 personnes. Tout le monde voit le même frigo, la même liste de courses et les mêmes alertes.",
  },
  {
    q: "Je peux annuler mon abonnement quand je veux ?",
    a: "Oui, en un clic depuis l'app. Aucun engagement, aucun frais caché. Si tu passes en annuel, tu gardes l'accès jusqu'à la fin de la période payée.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-white py-20 md:py-28">
      <div className="container">
        <MotionSection className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-[32px] sm:text-[42px] font-extrabold tracking-tightest text-ink leading-tight">
            Les questions qu'on nous pose le plus
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            Une question pas dans la liste ? Écris-nous à{" "}
            <a
              className="text-brand-green font-semibold hover:underline"
              href="mailto:hello@freshflow.app"
            >
              hello@freshflow.app
            </a>
            .
          </p>
        </MotionSection>

        <MotionSection delay={0.05} className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {FAQS.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </MotionSection>
      </div>
    </section>
  );
}
