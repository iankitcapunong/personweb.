import { site } from "@/data/site";
import Card from "./Card";

export default function AboutCard() {
  return (
    <Card title="About" icon="user" tinted>
      <div className="space-y-4">
        {site.about.map((paragraph) => (
          <p
            key={paragraph.slice(0, 24)}
            className="text-[13.5px] leading-relaxed text-fg/70"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </Card>
  );
}
