import Image from "next/image";
import { projects, projectsIndexUrl, type Project } from "@/data/projects";
import Card from "./Card";
import Icon from "./Icon";

function VercelMark({ className = "h-2 w-2" }: { className?: string }) {
  return (
    <svg viewBox="0 0 76 65" aria-hidden className={`${className} fill-current`}>
      <path d="M37.59.25l36.95 64H.64l36.95-64z" />
    </svg>
  );
}

function Tile({ project }: { project: Project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-xl border border-fg/15 transition-colors hover:border-fg/45"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-fg/10 bg-tint">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <span className="absolute inset-0 grid place-items-center font-mono text-[11px] uppercase tracking-wider text-fg/35">
            {project.title}
          </span>
        )}
        <span className="absolute right-2 top-2 inline-flex items-center gap-1 rounded border border-bg/30 bg-fg/85 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-bg">
          <VercelMark />
          Live
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="text-[13.5px] font-semibold tracking-tight">
            {project.title}
          </h3>
          <span className="shrink-0 font-mono text-[10px] uppercase tracking-wider text-fg/40">
            {project.year}
          </span>
        </div>

        <p className="mt-1.5 flex-1 text-[12px] leading-relaxed text-fg/60">
          {project.description}
        </p>

        <div className="mt-3 flex items-center justify-between gap-2 border-t border-fg/10 pt-2.5">
          <span className="truncate font-mono text-[10px] uppercase tracking-wider text-fg/40">
            {project.category}
          </span>
          <span className="inline-flex shrink-0 items-center gap-1 text-[11px] font-medium opacity-0 transition-opacity group-hover:opacity-100">
            Visit
            <Icon name="external" className="h-3 w-3" />
          </span>
        </div>
      </div>
    </a>
  );
}

export default function ProjectsCard() {
  return (
    <Card
      title="Recent Projects"
      icon="folder"
      action={
        <a
          href={projectsIndexUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-fg/50 transition-colors hover:text-fg"
        >
          All deployments
          <Icon name="external" className="h-3 w-3" />
        </a>
      }
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Tile key={project.url} project={project} />
        ))}
      </div>
    </Card>
  );
}
