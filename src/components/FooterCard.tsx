import { goals, site } from "@/data/site";
import Card from "./Card";
import Icon from "./Icon";

const SOCIAL_ICONS = {
  LinkedIn: "linkedin",
  GitHub: "github",
  Instagram: "instagram",
  Facebook: "facebook",
} as const;

export default function FooterCard() {
  const methods = [
    { icon: "mail" as const, label: "Email", value: site.email, href: `mailto:${site.email}` },
    { icon: "phone" as const, label: "Let's Talk", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
    { icon: "message" as const, label: "Messenger", value: "Chat with me", href: site.messenger },
  ];

  return (
    <Card>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h2 className="mb-4 flex items-center gap-2.5 text-[15px] font-semibold tracking-tight">
            <Icon name="target" className="h-4 w-4 opacity-60" />
            Goals
          </h2>
          <ul className="space-y-2">
            {goals.map((goal) => (
              <li
                key={goal}
                className="rounded-lg bg-fg/[0.05] px-3 py-2.5 text-[12px] leading-relaxed text-fg/70"
              >
                {goal}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 flex items-center gap-2.5 text-[15px] font-semibold tracking-tight">
            <Icon name="link" className="h-4 w-4 opacity-60" />
            Social Links
          </h2>
          <ul className="space-y-3">
            {site.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-[13px] text-fg/70 transition-colors hover:text-fg"
                >
                  <Icon name={SOCIAL_ICONS[social.label as keyof typeof SOCIAL_ICONS] ?? "link"} className="h-4 w-4" />
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 flex items-center gap-2.5 text-[15px] font-semibold tracking-tight">
            <Icon name="message" className="h-4 w-4 opacity-60" />
            Contact
          </h2>
          <p className="text-[12.5px] leading-relaxed text-fg/60">
            Open to collaborations on web design and development projects.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-medium underline decoration-fg/25 underline-offset-4 transition-colors hover:decoration-fg"
          >
            Get in touch
            <span aria-hidden>→</span>
          </a>
        </div>

        <ul className="space-y-2.5">
          {methods.map((method) => (
            <li key={method.label}>
              <a
                href={method.href}
                {...(method.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="flex items-center gap-3 rounded-xl border border-fg/15 px-3.5 py-3 transition-colors hover:border-fg/40 hover:bg-fg/[0.04]"
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-fg text-bg">
                  <Icon name={method.icon} className="h-3.5 w-3.5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[12.5px] font-semibold tracking-tight">
                    {method.label}
                  </span>
                  <span className="block truncate text-[11.5px] text-fg/55">
                    {method.value}
                  </span>
                </span>
                <Icon name="chevron" className="h-3.5 w-3.5 shrink-0 opacity-35" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
