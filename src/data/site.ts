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
    "I am a dedicated and motivated professional with a strong work ethic and a passion for continuous learning. I thrive in dynamic environments and enjoy working both independently and as part of a team.",
    "With problem-solving skills and attention to detail, I am always eager to take on new challenges and develop innovative solutions. I am highly adaptable, a quick learner, and committed to achieving excellence in everything I do.",
    "Currently pursuing my Bachelor of Science in Information Systems at Caraga State University, Butuan City, while building landing pages, funnels and web apps for real clients.",
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
    title: "BS Information Systems — 3rd Year",
    org: "Caraga State University, Butuan City",
    year: "2022 — Present",
  },
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
  {
    title: "Conversion Optimisation",
    org: "Optimised pages for conversion rate, mobile responsiveness and overall user experience.",
    year: "2023 — 2024",
  },
  {
    title: "HUMSS Strand",
    org: "Hinatuan National Comprehensive High School",
    year: "2020 — 2022",
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
