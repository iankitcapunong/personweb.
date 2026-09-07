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
  phone: "+63 946 025 6710",
  messenger: "https://www.facebook.com/yayanngwapoo/",
  birthday: "October 21, 2003",
  about: [
    "I am a web developer and UI/UX designer focused on building clean, responsive interfaces that perform as well as they look. I handle the full delivery process — from wireframe and design through to build and deployment.",
    "My work centres on front-end development with Vue, Next.js and modern CSS, alongside conversion-focused landing pages and sales funnels built in GoHighLevel. I pay close attention to detail, performance and the mobile experience, because that is where most projects are won or lost.",
    "I work effectively both independently and within a team, adapt quickly to new tools and requirements, and take full ownership of what I ship. I am currently available for freelance and collaborative projects.",
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

/** The pill list in the footer. */
export const goals = [
  "Become a professional full-stack web developer.",
  "Master modern frameworks such as React and Next.js.",
  "Build real-world projects for clients and gain freelance experience.",
  "Continuously improve UI/UX design skills.",
];

/**
 * Optional photo strip at the bottom. Drop images into /public and list them
 * here, e.g. ["/gallery/1.jpg", "/gallery/2.jpg"]. Empty = section hidden.
 */
export const gallery: string[] = [];
