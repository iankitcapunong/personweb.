import { techStack } from "@/data/site";
import Card from "./Card";

export default function TechStackCard() {
  return (
    <Card title="Tech Stack" icon="code" tinted>
      <div className="space-y-5">
        {techStack.map((section) => (
          <div key={section.group}>
            <h3 className="text-[12px] font-semibold tracking-tight text-fg/75">
              {section.group}
            </h3>
            <ul className="mt-2.5 flex flex-wrap gap-2">
              {section.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-fg/20 bg-bg px-2.5 py-1 text-[11px] tracking-tight"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Card>
  );
}
