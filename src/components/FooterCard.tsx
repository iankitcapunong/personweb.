import { site } from "@/data/site";
import Card from "./Card";
import Icon from "./Icon";

const SOCIAL_ICONS = {
  LinkedIn: "linkedin",
  GitHub: "github",
  Instagram: "instagram",
  Facebook: "facebook",
} as const;

export default function FooterCard() {
  return (
    <Card>
      <div className="grid gap-8 sm:grid-cols-2">
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
                  <Icon
                    name={SOCIAL_ICONS[social.label as keyof typeof SOCIAL_ICONS] ?? "link"}
                    className="h-4 w-4"
                  />
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="sm:justify-self-end sm:text-right">
          <h2 className="mb-4 flex items-center gap-2.5 text-[15px] font-semibold tracking-tight sm:justify-end">
            <Icon name="mail" className="h-4 w-4 opacity-60" />
            Email
          </h2>
          <a
            href={`mailto:${site.email}`}
            className="group flex items-center gap-3 rounded-xl border border-fg/15 px-3.5 py-3 transition-colors hover:border-fg/40 hover:bg-fg/[0.04] sm:min-w-[16rem]"
          >
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-fg text-bg">
              <Icon name="mail" className="h-3.5 w-3.5" />
            </span>
            <span className="min-w-0 flex-1 truncate text-left text-[12.5px] font-medium">
              {site.email}
            </span>
            <Icon name="chevron" className="h-3.5 w-3.5 shrink-0 opacity-35" />
          </a>
        </div>
      </div>
    </Card>
  );
}
