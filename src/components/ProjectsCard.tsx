import Image from "next/image";
import { projects, projectsIndexUrl, type Project } from "@/data/projects";
import Card from "./Card";
import Icon from "./Icon";

/** Slight rotations, cycled per card so the grid looks hand-scattered. */
const TILTS = ["-2.2deg", "1.6deg", "-1.1deg", "2.1deg", "-1.7deg", "1.2deg"];

function Logo({ project }: { project: Project }) {
  if (project.icon) {
    return (
      <Image
        src={project.icon}
        alt=""
        width={28}
        height={28}
        className="h-7 w-7 object-contain"
        unoptimized
      />
    );
  }
  return (
    <span className="text-lg font-semibold tracking-tight text-fg/70">
      {project.title.charAt(0)}
    </span>
  );
}

function Tile({ project, tilt }: { project: Project; tilt: string }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      title={project.description}
      style={{ ["--tilt" as string]: tilt }}
      className="group relative flex rotate-[var(--tilt)] flex-col items-center overflow-hidden rounded-2xl border border-fg/10 bg-card p-5 text-center shadow-[0_10px_28px_-16px_rgba(0,0,0,0.45)] transition-[transform,box-shadow,border-color] duration-300 hover:rotate-0 hover:border-fg/30 hover:shadow-[0_18px_40px_-18px_rgba(0,0,0,0.55)]"
    >
      {/* The live site's screenshot, sitting behind the card as wallpaper. */}
      {project.image && (
        <Image
          src={project.image}
          alt=""
          fill
          sizes="(max-width: 640px) 50vw, 25vw"
          aria-hidden
          className="absolute inset-0 -z-10 scale-110 object-cover object-top blur-[3px] transition-[transform,filter] duration-500 group-hover:scale-[1.16] group-hover:blur-[1.5px]"
        />
      )}
      <span
        aria-hidden
        className="absolute inset-0 -z-10 bg-card/88 transition-colors duration-300 group-hover:bg-card/70"
      />

      <span className="grid h-12 w-12 place-items-center rounded-xl border border-fg/10 bg-bg/85 backdrop-blur-sm">
        <Logo project={project} />
      </span>

      <h3 className="mt-4 text-[13.5px] font-semibold leading-snug tracking-tight">
        {project.title}
      </h3>

      <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-fg/55">
        {project.label}
      </p>

      <span className="mt-5 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-fg/55 transition-colors group-hover:text-fg">
        <span aria-hidden>⟨</span>
        Visit
        <span aria-hidden>⟩</span>
      </span>
    </a>
  );
}

export default function ProjectsCard() {
  // Preserve the order of first appearance in the data file.
  const groups: { name: string; items: Project[] }[] = [];
  for (const project of projects) {
    const group = groups.find((g) => g.name === project.category);
    if (group) group.items.push(project);
    else groups.push({ name: project.category, items: [project] });
  }

  let tilt = 0;

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
      <div className="space-y-9">
        {groups.map((group) => (
          <div key={group.name}>
            <h3 className="mb-5 font-mono text-[10px] uppercase tracking-[0.22em] text-fg/40">
              {group.name}
            </h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {group.items.map((project) => (
                <Tile
                  key={project.url}
                  project={project}
                  tilt={TILTS[tilt++ % TILTS.length]}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
