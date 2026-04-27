import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales de FreshFlow : éditeur, hébergeur et conditions d'utilisation du site.",
  alternates: { canonical: "/mentions-legales" },
};

export default function MentionsLegalesPage() {
  return (
    <LegalShell title="Mentions légales" updatedAt="27 avril 2026">
      <h2>Éditeur du site</h2>
      <p>
        Le site freshflow.app est édité par <strong>FreshFlow SAS</strong>,
        société par actions simplifiée au capital de 1 000 €, immatriculée au
        RCS de Paris sous le numéro 000 000 000, dont le siège social est situé
        à Paris, France.
      </p>
      <ul>
        <li>Directeur de la publication : la présidente de FreshFlow SAS</li>
        <li>
          Contact :{" "}
          <a href="mailto:hello@freshflow.app">hello@freshflow.app</a>
        </li>
      </ul>

      <h2>Hébergement</h2>
      <p>
        Le site est hébergé par <strong>Vercel Inc.</strong>, 440 N Barranca
        Ave #4133, Covina, CA 91723, États-Unis. Les données de la liste
        d'attente sont stockées en Europe.
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        L'ensemble des contenus présents sur freshflow.app (textes, images,
        logos, code) sont la propriété exclusive de FreshFlow SAS, sauf
        mention contraire. Toute reproduction, représentation ou exploitation
        sans autorisation préalable écrite est interdite.
      </p>

      <h2>Responsabilité</h2>
      <p>
        FreshFlow met tout en œuvre pour fournir des informations exactes et à
        jour sur ce site, sans toutefois pouvoir garantir l'absence d'erreurs
        ou d'omissions. Les liens vers des sites externes n'engagent que
        leurs éditeurs respectifs.
      </p>

      <h2>Droit applicable</h2>
      <p>
        Les présentes mentions légales sont régies par le droit français. Tout
        litige relatif au site relève des tribunaux compétents de Paris, sous
        réserve des règles d'ordre public applicables aux consommateurs.
      </p>
    </LegalShell>
  );
}
