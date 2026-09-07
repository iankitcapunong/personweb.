import { experience } from "@/data/site";
import Card from "./Card";

export default function ExperienceCard() {
  return (
    <Card title="Experience" icon="briefcase">
      <ol className="divide-y divide-fg/10">
        {experience.map((item) => (
          <li key={item.title} className="flex gap-3 py-3.5 first:pt-0 last:pb-0">
            <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-fg/60" />
            <div className="min-w-0 flex-1">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-[13.5px] font-semibold tracking-tight">
                  {item.title}
                </h3>
                <span className="shrink-0 font-mono text-[10px] uppercase tracking-wider text-fg/45">
                  {item.year}
                </span>
              </div>
              <p className="mt-1 text-[12.5px] leading-relaxed text-fg/60">
                {item.org}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Card>
  );
}
