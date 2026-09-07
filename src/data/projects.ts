export type Project = {
  /** Card title. */
  title: string;
  /** One or two sentences. Keep it short — the card is small. */
  description: string;
  /** The live Vercel URL, e.g. "https://my-app.vercel.app". */
  url: string;
  /** Thumbnail in /public/projects. Omit and the card falls back to a label tile. */
  image?: string;
  /** Optional source code link. Omit to hide the "Code" link. */
  repo?: string;
  /** Grouping label shown on the card. */
  category: string;
  /** Year or period shown in the corner of the card. */
  year: string;
};

/**
 * ─────────────────────────────────────────────────────────────
 *  ADD A VERCEL PROJECT
 * ─────────────────────────────────────────────────────────────
 *  1. Deploy the project on Vercel and copy its URL.
 *  2. Take a screenshot of it and save it to /public/projects/.
 *  3. Paste a new object at the TOP of this array:
 *
 *       {
 *         title: "My New App",
 *         description: "What it does, in one line.",
 *         url: "https://my-new-app.vercel.app",
 *         image: "/projects/my-new-app.jpg",
 *         category: "Client Websites",
 *         year: "2026",
 *       },
 *
 *  4. Save. The gallery updates itself.
 */
export const projects: Project[] = [
  {
    title: "3DVISIONZ",
    description: "AI sales funnel builder for generating and launching funnels.",
    url: "https://funnelbuilder-flame.vercel.app/",
    image: "/projects/funnelbuilder.jpg",
    category: "AI Tools & Products",
    year: "2026",
  },
  {
    title: "Atom",
    description: "Booking system built for fitness coaches and their clients.",
    url: "https://atommclonee.vercel.app/",
    image: "/projects/atom.jpg",
    category: "AI Tools & Products",
    year: "2026",
  },
  {
    title: "The Hormone Fix",
    description: "Webinar funnel for the Better Body Academy coaching brand.",
    url: "https://editors-delta.vercel.app/",
    image: "/projects/hormone-fix.jpg",
    category: "Better Body Academy",
    year: "2026",
  },
  {
    title: "BBA Scholarship",
    description: "Scholarship application campaign and form for Better Body Academy.",
    url: "https://bba-scholarship.vercel.app/",
    image: "/projects/bba-scholarship.jpg",
    category: "Better Body Academy",
    year: "2026",
  },
  {
    title: "The Joxel Group",
    description: "Website for a healthcare consulting firm, built for the client.",
    url: "https://joxelweb-pied.vercel.app/",
    image: "/projects/joxel.jpg",
    category: "Client Websites",
    year: "2026",
  },
  {
    title: "Luxury Transport I",
    description: "Chauffeur service site for the Luxury Transport client.",
    url: "https://luxuryrental.vercel.app/",
    image: "/projects/luxuryrental.jpg",
    category: "Luxury Transport",
    year: "2026",
  },
  {
    title: "Luxury Transport II",
    description: "Design variant of the Luxury Transport chauffeur service site.",
    url: "https://luxury-trans.vercel.app/",
    image: "/projects/luxury-trans.jpg",
    category: "Luxury Transport",
    year: "2026",
  },
  {
    title: "Luxury Transport III",
    description: "Design variant of the Luxury Transport chauffeur service site.",
    url: "https://luxur-six.vercel.app/",
    image: "/projects/luxur-six.jpg",
    category: "Luxury Transport",
    year: "2026",
  },
  {
    title: "Luxury Transport IV",
    description: "Design variant of the Luxury Transport chauffeur service site.",
    url: "https://luxury-transport-ten.vercel.app/",
    image: "/projects/luxury-ten.jpg",
    category: "Luxury Transport",
    year: "2026",
  },
];

/** Everything above, linked from one page. Shown as a footer link on the card. */
export const projectsIndexUrl = "https://vercel-deploments-links.vercel.app/";
