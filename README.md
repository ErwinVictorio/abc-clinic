# Doc. Santos Animal Bite Center

First implementation of the website plan in `Docs/Doc_Santos_Animal_Bite_Center_Website_Full_Plan.md`.

## Run locally

```sh
npm install
npm run dev
```

On Windows PowerShell, use `npm.cmd` if script execution policy blocks `npm`.
Open http://localhost:3000.

```sh
npm run lint
npm run build
npm run start
```

## Implemented

- One-page homepage using the existing Next.js App Router, React, TypeScript, and Tailwind setup.
- Red, navy, and white theme; responsive layout; subtle animation with reduced-motion support.
- Sticky header, mobile menu with Escape dismissal, section navigation, and mobile action bar.
- Eight service descriptions, five first-aid steps, pricing section, about section, FAQ accordion, contact section, and footer.
- Central clinic data and per-field verification switches in `data/clinic.ts`.
- Conditional gallery using Next Image. Add approved local images under `public/clinic/` and entries to `clinic.photos`.
- Metadata, social preview text, and a provisional icon. Search indexing is disabled until launch review.

## Content approval before launch

The plan's phone numbers, prices, address, opening hours, and payment methods are unverified. Their sample values remain in `data/clinic.ts`, but the page hides them until the relevant verification flag is enabled. Calling and map actions activate from the same flags; until then they lead to the contact information section.

1. Confirm clinic name, service availability, phone numbers, hours, payment methods, prices, and discount terms with the owner.
2. Supply the exact address and Google Maps URL; update `clinic.locationVerified` only after both are ready.
3. Supply an official logo and approved storefront/interior photos. No stock or generated clinic photos are used.
4. Have the clinic review the medical text. First-aid washing guidance is based on https://www.who.int/health-topics/rabies and linked on the page.
5. Update the FAQ answers about opening hours, walk-ins, payments, and directions once approved.
6. Perform browser checks at 360, 390, 430, 768, 1024, 1366, 1440, and 1920px, including keyboard navigation, FAQ, mobile menu, and fixed bottom bar.
7. Complete accessibility and Lighthouse checks, then set production metadata, canonical URL, sitemap, and robots policy. Remove `index: false` only when ready to publish.

## Implementation choices

The existing Next.js project was retained instead of migrating to Vite. Navigation uses anchors as allowed by the plan's smaller Version 1 scope. Native details/summary provides an accessible FAQ; CSS handles the minimal animation. Router, Motion, and shadcn dependencies were not needed for this first increment. Gallery, exact map, and live call links depend on approved clinic information. No backend, form, patient data storage, or deployment has been added.

## Reference UI update

The layout now follows the supplied reference: a storefront hero with a white fade, compact four-column services, a pale pink first-aid strip, paired pricing/benefits, four gallery slots, location/contact columns, and FAQ beside a pet-image placeholder. `public/images/Hero.png` supplies the hero image. Gallery, map, and pet placeholders use the reusable `Placeholder` component in `components/visuals.tsx`. The header uses a provisional text mark; replace it with the official logo when available. Contact and pricing verification flags remain in effect.
