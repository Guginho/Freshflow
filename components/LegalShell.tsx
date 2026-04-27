import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export function LegalShell({
  title,
  updatedAt,
  children,
}: {
  title: string;
  updatedAt: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="bg-surface-alt">
        <div className="container max-w-3xl py-16 md:py-24">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-green hover:text-brand-deep"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour à l'accueil
          </Link>
          <h1 className="mt-6 text-[36px] sm:text-[44px] font-extrabold tracking-tightest text-ink leading-tight">
            {title}
          </h1>
          <p className="mt-3 text-sm text-ink-soft">
            Dernière mise à jour : {updatedAt}
          </p>
          <article className="prose-legal mt-10">{children}</article>
        </div>
      </main>
      <Footer />
    </>
  );
}
