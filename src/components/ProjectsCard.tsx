import { projects } from "@/data/projects";
import Card from "./Card";
import Icon from "./Icon";

function VercelMark() {
  return (
    <svg viewBox="0 0 76 65" aria-hidden className="h-2 w-2 fill-current">
      <path d="M37.59.25l36.95 64H.64l36.95-64z" />
    </svg>
  );
}

function isVercel(url: string) {
  try {
    const host = new URL(url).hostname;
    return host.endsWith("vercel.app") || host.endsWith("vercel.com");
  } catch {
    return false;
  }
}

export default function ProjectsCard() {
  return (
    <Card title="Recent Projects" icon="folder">
      <div className="grid gap-3 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="flex flex-col rounded-xl border border-fg/15 p-4 transition-colors hover:border-fg/40"
          >
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-[13.5px] font-semibold tracking-tight">
                {project.title}
              </h3>
              {isVercel(project.url) && (
                <span
                  title="Live on Vercel"
                  className="inline-flex shrink-0 items-center gap-1 rounded border border-fg/25 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-fg/60"
                >
                  <VercelMark />
                  Live
                </span>
              )}
            </div>

            <p className="mt-2 flex-1 text-[12.5px] leading-relaxed text-fg/60">
              {project.description}
            </p>

            <p className="mt-2.5 font-mono text-[10px] uppercase tracking-wider text-fg/40">
              {project.tags.join(" · ")}
            </p>

            <div className="mt-4 flex items-center gap-2">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-fg/25 px-3 py-1.5 text-[11.5px] font-medium transition-colors hover:border-fg hover:bg-fg hover:text-bg"
              >
                View Project
                <Icon name="external" className="h-3 w-3" />
              </a>
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-transparent px-2 py-1.5 text-[11.5px] text-fg/55 transition-colors hover:text-fg"
                >
                  <Icon name="github" className="h-3.5 w-3.5" />
                  Code
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </Card>
  );
}
