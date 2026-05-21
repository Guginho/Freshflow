import Link from "next/link";
import { Logo } from "@/components/Logo";

const YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="bg-brand-deep text-white">
      <div className="container py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Logo variant="white" />
            <p className="mt-4 max-w-sm text-sm text-white/75 leading-relaxed">
              Saveo t'aide à dépenser moins en courses et à arrêter de
              jeter, sans changer tes habitudes.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white/90">Produit</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              <li><a href="#solution" className="hover:text-white transition-colors">Comment ça marche</a></li>
              <li><a href="#tarifs" className="hover:text-white transition-colors">Tarifs</a></li>
              <li><a href="#avis" className="hover:text-white transition-colors">Avis</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white/90">Entreprise</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              <li><a href="mailto:hello@saveo.app" className="hover:text-white transition-colors">Nous contacter</a></li>
              <li><a href="#beta" className="hover:text-white transition-colors">Rejoindre la bêta</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white/90">Légal</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              <li><Link href="/mentions-legales" className="hover:text-white transition-colors">Mentions légales</Link></li>
              <li><Link href="/cgv" className="hover:text-white transition-colors">CGV</Link></li>
              <li><Link href="/confidentialite" className="hover:text-white transition-colors">Confidentialité</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="text-xs text-white/60">
            © {YEAR} Saveo. Tous droits réservés.
          </p>
          <p className="text-xs text-white/60">
            Conçu pour t'aider à manger mieux, en dépensant moins.
          </p>
        </div>
      </div>
    </footer>
  );
}
