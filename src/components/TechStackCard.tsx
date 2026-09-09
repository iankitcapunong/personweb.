import { techStack } from "@/data/site";
import Card from "./Card";
import Icon from "./Icon";

const techIcons: Record<string, {
  name: React.ComponentProps<typeof Icon>["name"];
  color: string;
}> = {
  HTML5: { name: "html", color: "text-orange-600 dark:text-orange-400" },
  CSS3: { name: "css", color: "text-blue-600 dark:text-blue-400" },
  JavaScript: { name: "javascript", color: "text-yellow-600 dark:text-yellow-300" },
  Bootstrap: { name: "bootstrap", color: "text-violet-600 dark:text-violet-400" },
  "Responsive Web Design": { name: "devices", color: "text-teal-600 dark:text-teal-400" },
  Vue: { name: "vue", color: "text-emerald-600 dark:text-emerald-400" },
  Vuetify: { name: "vuetify", color: "text-blue-600 dark:text-blue-400" },
  "Next.js": { name: "nextjs", color: "text-fg" },
  React: { name: "react", color: "text-cyan-600 dark:text-cyan-300" },
  PostgreSQL: { name: "database", color: "text-sky-700 dark:text-sky-400" },
  "Node.js": { name: "nodejs", color: "text-green-600 dark:text-green-400" },
  "Git & GitHub": { name: "github", color: "text-purple-600 dark:text-purple-400" },
  "VS Code": { name: "vscode", color: "text-sky-600 dark:text-sky-400" },
  Figma: { name: "figma", color: "text-rose-600 dark:text-rose-400" },
  GoHighLevel: { name: "growth", color: "text-orange-600 dark:text-orange-400" },
  Vercel: { name: "vercel", color: "text-fg" },
};

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
                  className="inline-flex items-center gap-1.5 rounded-md border border-fg/20 bg-bg px-2.5 py-1 text-[11px] tracking-tight"
                >
                  <Icon
                    name={techIcons[item]?.name ?? "code"}
                    className={`h-3.5 w-3.5 shrink-0 ${techIcons[item]?.color ?? "text-fg/70"}`}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Card>
  );
}
