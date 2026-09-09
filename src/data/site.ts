export const site = {
  name: "Ian Kit Capunong",
  short: "Ian Kit.",
  /** Shown next to the name, like a verified tick. Set to false to hide. */
  verified: true,
  photo: "/Iankit.jpg",
  location: "Hinatuan, Surigao del Sur, Philippines",
  role: "Web Developer & UI/UX Designer",
  /** Drop a resume.pdf into /public and set this to "/resume.pdf" to show the button. */
  resumeUrl: "",
  email: "yayan.cap12@gmail.com",
  about: [
    "I am a web developer and UI/UX designer creating responsive, user-focused websites with Vue, Next.js and GoHighLevel. I manage projects from design to deployment, with a focus on usability and performance. Available for freelance and collaborative projects.",
  ],
  socials: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/ian-kit-capunong-80399a351/" },
    { label: "GitHub", url: "https://github.com/iankitcapunong" },
    { label: "Instagram", url: "https://www.instagram.com/yanzkieedoo" },
    { label: "Facebook", url: "https://www.facebook.com/yayanngwapoo/" },
  ],
};

/** The bulleted list in the Experience card. */
export const experience = [
  {
    title: "GoHighLevel Developer",
    org: "Built landing pages, sales funnels and websites with lead capture forms, booking systems and chat widgets.",
    year: "2023 — 2024",
  },
  {
    title: "Freelance Web Developer",
    org: "Responsive client websites and web apps, handled from design through deployment.",
    year: "2023 — Present",
  },
];

/** Grouped chips in the Tech Stack card. */
export const techStack = [
  {
    group: "Frontend Development",
    items: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Responsive Web Design"],
  },
  { group: "Frameworks & Libraries", items: ["Vue", "Vuetify", "Next.js", "React"] },
  { group: "Backend (Basic Knowledge)", items: ["PostgreSQL", "Node.js"] },
  {
    group: "Tools & Workflow",
    items: ["Git & GitHub", "VS Code", "Figma", "GoHighLevel", "Vercel"],
  },
];

/** Rows in the Certifications card. `image` opens in a modal when clicked. */
export const certifications = [
  { name: "Web Development Certificate", issuer: "Coursera", year: "2024", image: "/cert1.png" },
  { name: "HTML Essentials", issuer: "Certification", year: "2023", image: "/html.jpg" },
  { name: "CSS Essentials", issuer: "Certification", year: "2023", image: "/css.jpg" },
  { name: "JavaScript Essentials", issuer: "Certification", year: "2023", image: "/javascript.jpg" },
];

/**
 * Optional photo strip at the bottom. Drop images into /public and list them
 * here, e.g. ["/gallery/1.jpg", "/gallery/2.jpg"]. Empty = section hidden.
 */
export const gallery: string[] = [];
