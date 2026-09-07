export type Project = {
  /** Card title. */
  title: string;
  /** One or two sentences. Keep it short — the card is small. */
  description: string;
  /** The live Vercel URL, e.g. "https://my-app.vercel.app". */
  url: string;
  /** Optional source code link. Omit to hide the "Code" link. */
  repo?: string;
  /** Tech used. Rendered as small outlined chips. */
  tags: string[];
  /** Year or period shown in the corner of the card. */
  year: string;
};

/**
 * ─────────────────────────────────────────────────────────────
 *  ADD A VERCEL PROJECT
 * ─────────────────────────────────────────────────────────────
 *  1. Deploy the project on Vercel and copy its URL.
 *  2. Paste a new object at the TOP of this array:
 *
 *       {
 *         title: "My New App",
 *         description: "What it does, in one line.",
 *         url: "https://my-new-app.vercel.app",
 *         repo: "https://github.com/iankitcapunong/my-new-app", // optional
 *         tags: ["Next.js", "Tailwind"],
 *         year: "2026",
 *       },
 *
 *  3. Save. That's it — the grid updates itself.
 */
export const projects: Project[] = [
  {
    title: "Restaurant Reservation",
    description:
      "Table booking system with real-time availability, guest details and a simple admin view for managing reservations.",
    url: "https://vercel.com/new",
    tags: ["Vue", "Vuetify", "PostgreSQL"],
    year: "2025",
  },
  {
    title: "Marketplace",
    description:
      "Multi-vendor marketplace with product listings, search and filtering, and a responsive cart flow.",
    url: "https://vercel.com/new",
    tags: ["JavaScript", "Bootstrap"],
    year: "2025",
  },
  {
    title: "GoHighLevel Funnels",
    description:
      "Landing pages and sales funnels built in GoHighLevel with lead capture forms, booking systems and chat widgets.",
    url: "https://vercel.com/new",
    tags: ["GoHighLevel", "UI/UX", "CRO"],
    year: "2023 — 2024",
  },
];
