# FreshFlow — Site marketing

Site marketing pour FreshFlow, l'app qui réduit le gaspillage alimentaire et le budget courses des foyers.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS (palette FreshFlow custom)
- shadcn/ui (Button, Card, Badge, Accordion)
- Framer Motion (animations au scroll)
- Lucide React (icônes)

## Démarrer en local

```bash
npm install
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000).

## Build de production

```bash
npm run build
npm start
```

## Déploiement Vercel

```bash
npx vercel --prod
```

Aucune variable d'environnement obligatoire. Optionnel :

- `NEXT_PUBLIC_SITE_URL` — URL canonique pour les méta tags, le sitemap et `robots.txt` (par défaut `https://freshflow.app`).

## Structure

```
app/
  layout.tsx           # Inter, métadonnées, OG
  page.tsx             # Assemble toutes les sections
  globals.css          # Tailwind + utilitaires marque
  actions.ts           # Server Action de capture d'e-mail (log console)
  sitemap.ts           # /sitemap.xml
  robots.ts            # /robots.txt
  mentions-legales/    # Mentions légales
  cgv/                 # CGV
  confidentialite/     # Politique de confidentialité
components/
  ui/                  # Button, Card, Badge, Accordion (shadcn)
  Logo.tsx             # SVG inline (mono couleur ou blanc)
  Header.tsx           # Sticky + backdrop-blur + menu burger
  Hero.tsx             # H1 + CTA + mockup phone
  HeroMockup.tsx       # 3 cartes empilées de l'app
  Problem.tsx          # 3 cartes
  Solution.tsx         # 4 étapes
  Pricing.tsx          # 3 plans + toggle mensuel/annuel
  Testimonials.tsx     # 3 avis
  FAQ.tsx              # Accordéon
  CTA.tsx              # Section finale + EmailForm
  EmailForm.tsx        # Server Action + useFormState
  Footer.tsx           # Vert foncé + logo blanc
  LegalShell.tsx       # Wrapper pages légales
```

## Capture d'e-mails

La Server Action `subscribe` (`app/actions.ts`) loggue les e-mails dans la console serveur. Pour brancher un vrai backend (Resend, Loops, Supabase, etc.), remplace le `console.log` par l'appel d'API dans cette fonction.
