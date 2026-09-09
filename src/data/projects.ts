export type Project = {
  /** Card title. */
  title: string;
  /** One or two sentences. Keep it short — the card is small. */
  description: string;
  /** The live Vercel URL, e.g. "https://my-app.vercel.app". */
  url: string;
  /** Screenshot in /public/projects, used as the tile wallpaper. */
  image?: string;
  /** Small logo in /public/projects/icons. Omit to fall back to a monogram. */
  icon?: string;
  /** Optional source code link. Omit to hide the "Code" link. */
  repo?: string;
  /** Groups the tiles; shown as the heading above each group. */
  category: string;
  /** Short descriptor under the title, e.g. "BOOKING SYSTEM". */
  label: string;
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
 *         icon: "/projects/icons/my-new-app.svg",   // optional
 *         category: "Client Websites",
 *         label: "Landing Page",
 *         year: "2026",
 *       },
 *
 *  4. Save. The gallery updates itself.
 */
export const projects: Project[] = [
  {
    title: "OnboardLayer",
    label: "Onboarding System",
    description:
      "Client onboarding system that interviews clients, captures every detail, and generates marketing assets — email copy, ad copy and landing pages.",
    url: "https://onboardlayer.com/",
    image: "/projects/onboardlayer.jpg",
    icon: "/projects/icons/onboardlayer.ico",
    category: "AI Tools & Products",
    year: "2026",
  },
  {
    title: "3DVISIONZ",
    label: "Funnel Builder",
    description: "AI sales funnel builder for generating and launching funnels.",
    url: "https://funnelbuilder-flame.vercel.app/",
    image: "/projects/funnelbuilder.jpg",
    category: "AI Tools & Products",
    year: "2026",
  },
  {
    title: "Atom",
    label: "Booking System",
    description: "Booking system built for fitness coaches and their clients.",
    url: "https://atommclonee.vercel.app/",
    image: "/projects/atom.jpg",
    icon: "/projects/icons/atom.svg",
    category: "AI Tools & Products",
    year: "2026",
  },
  {
    title: "The Hormone Fix",
    label: "Webinar Funnel",
    description: "Webinar funnel for the Better Body Academy coaching brand.",
    url: "https://editors-delta.vercel.app/",
    image: "/projects/hormone-fix.jpg",
    icon: "/projects/icons/hormone-fix.png",
    category: "Better Body Academy",
    year: "2026",
  },
  {
    title: "BBA Scholarship",
    label: "Application Form",
    description: "Scholarship application campaign and form for Better Body Academy.",
    url: "https://bba-scholarship.vercel.app/",
    image: "/projects/bba-scholarship.jpg",
    category: "Better Body Academy",
    year: "2026",
  },
  {
    title: "The Joxel Group",
    label: "Healthcare",
    description: "Website for a healthcare consulting firm, built for the client.",
    url: "https://joxelweb-pied.vercel.app/",
    image: "/projects/joxel.jpg",
    icon: "/projects/icons/joxel.ico",
    category: "Client Websites",
    year: "2026",
  },
  {
    title: "Luxury Transport I",
    label: "Chauffeur Site",
    description: "Chauffeur service site for the Luxury Transport client.",
    url: "https://luxuryrental.vercel.app/",
    image: "/projects/luxuryrental.jpg",
    category: "Landing Page / Funnels",
    year: "2026",
  },
  {
    title: "Luxury Transport II",
    label: "Chauffeur Site",
    description: "Design variant of the Luxury Transport chauffeur service site.",
    url: "https://luxury-trans.vercel.app/",
    image: "/projects/luxury-trans.jpg",
    category: "Landing Page / Funnels",
    year: "2026",
  },
  {
    title: "Luxury Transport III",
    label: "Chauffeur Site",
    description: "Design variant of the Luxury Transport chauffeur service site.",
    url: "https://luxur-six.vercel.app/",
    image: "/projects/luxur-six.jpg",
    icon: "/projects/icons/luxur-six.svg",
    category: "Landing Page / Funnels",
    year: "2026",
  },
  {
    title: "Luxury Transport IV",
    label: "Chauffeur Site",
    description: "Design variant of the Luxury Transport chauffeur service site.",
    url: "https://luxury-transport-ten.vercel.app/",
    image: "/projects/luxury-ten.jpg",
    category: "Landing Page / Funnels",
    year: "2026",
  },
];

/** Everything above, linked from one page. Shown as a footer link on the card. */
export const projectsIndexUrl = "https://vercel-deploments-links.vercel.app/";
