import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Conditions générales de vente",
  description:
    "Conditions générales de vente des abonnements Saveo : tarifs, paiement, résiliation et droit de rétractation.",
  alternates: { canonical: "/cgv" },
};

export default function CGVPage() {
  return (
    <LegalShell title="Conditions générales de vente" updatedAt="27 avril 2026">
      <h2>1. Objet</h2>
      <p>
        Les présentes conditions générales de vente régissent la souscription
        aux abonnements payants à l'application Saveo, éditée par
        Saveo SAS. Toute souscription implique l'acceptation pleine et
        entière des présentes conditions.
      </p>

      <h2>2. Offres et tarifs</h2>
      <p>
        Saveo propose trois formules : <strong>Free</strong> (gratuite),
        <strong> Plus</strong> (6,99 € / mois ou 59,99 € / an) et{" "}
        <strong>Family</strong> (11,99 € / mois ou 99,99 € / an). Les tarifs
        s'entendent toutes taxes comprises et peuvent évoluer ; les
        abonnements en cours conservent leur prix de souscription jusqu'à
        l'échéance.
      </p>

      <h2>3. Paiement</h2>
      <p>
        Le paiement s'effectue par carte bancaire via un prestataire de
        paiement sécurisé. Aucun numéro de carte n'est stocké sur nos
        serveurs.
      </p>

      <h2>4. Reconduction et résiliation</h2>
      <p>
        Les abonnements sont reconduits automatiquement à l'échéance.
        L'utilisateur peut résilier à tout moment depuis l'application. La
        résiliation prend effet à la fin de la période en cours, sans
        remboursement au prorata.
      </p>

      <h2>5. Droit de rétractation</h2>
      <p>
        Conformément à l'article L221-28 du Code de la consommation,
        l'utilisateur reconnaît expressément qu'en activant son abonnement, il
        renonce à son droit de rétractation pour la fourniture immédiate de
        contenu numérique.
      </p>

      <h2>6. Service client</h2>
      <p>
        Toute question ou réclamation peut être adressée à{" "}
        <a href="mailto:hello@saveo.app">hello@saveo.app</a>. Nous
        répondons sous 72 heures ouvrées.
      </p>

      <h2>7. Loi applicable</h2>
      <p>
        Les présentes CGV sont soumises au droit français. En cas de litige et
        à défaut d'accord amiable, le consommateur peut recourir gratuitement
        à un médiateur de la consommation.
      </p>
    </LegalShell>
  );
}
