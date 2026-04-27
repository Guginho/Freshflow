import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Comment FreshFlow collecte, utilise et protège tes données personnelles.",
  alternates: { canonical: "/confidentialite" },
};

export default function ConfidentialitePage() {
  return (
    <LegalShell
      title="Politique de confidentialité"
      updatedAt="27 avril 2026"
    >
      <p>
        Chez FreshFlow, on pense que tes données t'appartiennent. Voici, en
        clair, ce qu'on collecte et pourquoi.
      </p>

      <h2>1. Responsable du traitement</h2>
      <p>
        FreshFlow SAS, dont les coordonnées figurent sur la page{" "}
        <a href="/mentions-legales">Mentions légales</a>, est responsable du
        traitement de tes données.
      </p>

      <h2>2. Données collectées</h2>
      <ul>
        <li>
          <strong>E-mail</strong> (liste d'attente, compte, communications
          liées à l'abonnement)
        </li>
        <li>
          <strong>Tickets de caisse</strong> que tu choisis de scanner
          (utilisés uniquement pour remplir ton stock)
        </li>
        <li>
          <strong>Inventaire de ton foyer</strong> et historique des produits,
          alertes et économies
        </li>
        <li>
          <strong>Données techniques</strong> minimales (type d'appareil,
          version d'app, journaux d'erreurs anonymisés)
        </li>
      </ul>

      <h2>3. Finalités et bases légales</h2>
      <p>
        Tes données servent à fournir le service FreshFlow (exécution du
        contrat), à t'informer des évolutions importantes (intérêt légitime)
        et, si tu y consentes, à te tenir informé·e du lancement (consentement).
      </p>

      <h2>4. Durée de conservation</h2>
      <p>
        Les données de ton compte sont conservées tant que ton compte est
        actif, puis supprimées dans les 30 jours suivant sa fermeture. Les
        e-mails de la liste d'attente sont conservés jusqu'à 24 mois ou
        jusqu'à ta demande de suppression.
      </p>

      <h2>5. Partage</h2>
      <p>
        On <strong>ne vend pas</strong> tes données. On les partage uniquement
        avec des sous-traitants techniques strictement nécessaires
        (hébergement, paiement, e-mailing transactionnel), tous engagés
        contractuellement à respecter le RGPD.
      </p>

      <h2>6. Tes droits</h2>
      <p>
        Tu peux à tout moment accéder, rectifier, exporter ou supprimer tes
        données depuis l'application, ou en écrivant à{" "}
        <a href="mailto:privacy@freshflow.app">privacy@freshflow.app</a>. Tu
        peux aussi déposer une réclamation auprès de la CNIL.
      </p>

      <h2>7. Cookies</h2>
      <p>
        Le site freshflow.app utilise uniquement des cookies fonctionnels
        nécessaires à la navigation. Aucun cookie publicitaire ou de suivi
        tiers n'est déposé sans ton consentement explicite.
      </p>
    </LegalShell>
  );
}
