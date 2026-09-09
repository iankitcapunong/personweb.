type Name =
  | "user" | "briefcase" | "code" | "folder" | "award" | "target"
  | "mail" | "phone" | "message" | "pin" | "chevron" | "external"
  | "image" | "verified" | "file" | "link"
  | "github" | "linkedin" | "instagram" | "facebook"
  | "html" | "css" | "javascript" | "bootstrap" | "devices"
  | "vue" | "vuetify" | "nextjs" | "react" | "database" | "nodejs"
  | "vscode" | "figma" | "growth" | "vercel";

const STROKE: Partial<Record<Name, React.ReactNode>> = {
  html: <><path d="M4 3h16l-1.5 16L12 21l-6.5-2z" /><path d="M15.5 7h-7l.5 5h6l-.5 4-2.5 1-2.5-1-.2-2" /></>,
  css: <><path d="M4 3h16l-1.5 16L12 21l-6.5-2z" /><path d="M8.5 7h7l-.5 5H9m6 0-.5 4-2.5 1-2.5-1-.2-2" /></>,
  javascript: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M11 9v7a2 2 0 0 1-4 0m11-6c-3-2-5 1-2 3s1 5-2 3" /></>,
  bootstrap: <><rect x="3" y="3" width="18" height="18" rx="4" /><path d="M9 7v10h4a2.5 2.5 0 0 0 0-5H9m0-5h3.5a2.5 2.5 0 0 1 0 5" /></>,
  devices: <><path d="M12 16H3V4h18v5M6 20h6m-3-4v4" /><rect x="15" y="10" width="7" height="11" rx="1.5" /><path d="M18 18h1" /></>,
  nextjs: <><circle cx="12" cy="12" r="10" /><path d="M8 16V8l11 13m-3-13v6" /></>,
  react: <><ellipse cx="12" cy="12" rx="11" ry="4" /><ellipse cx="12" cy="12" rx="11" ry="4" transform="rotate(60 12 12)" /><ellipse cx="12" cy="12" rx="11" ry="4" transform="rotate(120 12 12)" /><circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" /></>,
  database: <><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" /></>,
  nodejs: <><path d="m12 2 9 5v10l-9 5-9-5V7z" /><path d="M8 16V8l8 8V8" /></>,
  figma: <><path d="M12 9H8.5a3.5 3.5 0 0 1 0-7h7a3.5 3.5 0 0 1 0 7H12v10.5a3.5 3.5 0 1 1-3.5-3.5H12M12 2v7H8.5a3.5 3.5 0 0 0 0 7" /><circle cx="15.5" cy="12.5" r="3.5" /></>,
  growth: <><path d="M5 20V10m-3 3 3-3 3 3M12 20V6m-3 3 3-3 3 3M19 20V2m-3 3 3-3 3 3" /></>,
  user: <><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-6 8-6s8 2 8 6" /></>,
  briefcase: <><rect x="2" y="7" width="20" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></>,
  code: <path d="M8 6l-6 6 6 6M16 6l6 6-6 6" />,
  folder: <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />,
  award: <><circle cx="12" cy="8" r="5" /><path d="M8.5 12.5 7 21l5-3 5 3-1.5-8.5" /></>,
  target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></>,
  mail: <><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2 7 10 6 10-6" /></>,
  phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.2-1.1a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z" />,
  message: <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9.9 9.9 0 0 1-4-.9L3 21l1.9-5a8.4 8.4 0 0 1-.9-4 8.4 8.4 0 0 1 8.4-8.4h.5A8.4 8.4 0 0 1 21 11z" />,
  pin: <><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></>,
  chevron: <path d="m9 18 6-6-6-6" />,
  external: <><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></>,
  link: <><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7L11.5 5" /><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7L12.5 19" /></>,
  image: <><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="m21 15-5-5L5 21" /></>,
  file: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /></>,
  instagram: <><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" /></>,
};

const FILL: Partial<Record<Name, React.ReactNode>> = {
  vue: <path d="M1 3h5l6 10.4L18 3h5L12 22zm6 0h3l2 3.5L14 3h3l-5 8.7z" />,
  vuetify: <><path d="M1 3h8l3 6 3-6h8L12 23z" opacity="0.55" /><path d="M9 1h6l-3 8zm3 22 3-20h8z" /></>,
  vscode: <path d="m17 1 6 3v16l-6 3-11-9-4 3-2-1V8l2-1 4 3zm0 5L9 12l8 6zM2 10v4l2-2z" fillRule="evenodd" />,
  vercel: <path d="M12 3 24 23H0z" />,
  verified: <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-1.2 14.2-3.5-3.5 1.4-1.4 2.1 2.1 4.6-4.6 1.4 1.4z" />,
  github: <path d="M12 2C6.5 2 2 6.6 2 12.3c0 4.5 2.9 8.3 6.8 9.7.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.4-3.4-1.4-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.7.3-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.3 9.3 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.3 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5 3.9-1.4 6.8-5.2 6.8-9.7C22 6.6 17.5 2 12 2z" />,
  linkedin: <path d="M4.98 3.5A2.5 2.5 0 0 0 2.5 6 2.5 2.5 0 0 0 5 8.5 2.5 2.5 0 0 0 7.5 6 2.5 2.5 0 0 0 4.98 3.5zM3 9h4v12H3zm7 0h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 5.9V21h-4v-5.5c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9V21h-4z" />,
  facebook: <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1z" />,
};

export default function Icon({
  name,
  className = "h-4 w-4",
}: {
  name: Name;
  className?: string;
}) {
  const filled = FILL[name];
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={className}
      fill={filled ? "currentColor" : "none"}
      stroke={filled ? "none" : "currentColor"}
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {filled ?? STROKE[name]}
    </svg>
  );
}
