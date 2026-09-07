import Image from "next/image";
import { site } from "@/data/site";
import Icon from "./Icon";

export default function ProfileHeader() {
  return (
    <header className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
      <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl border border-fg/15 sm:h-36 sm:w-36">
        <Image
          src={site.photo}
          alt={site.name}
          fill
          sizes="144px"
          priority
          className="object-cover"
        />
      </div>

      <div className="min-w-0 flex-1">
        <h1 className="flex items-center gap-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          {site.name}
          {site.verified && (
            <Icon name="verified" className="h-5 w-5 shrink-0 opacity-45" />
          )}
        </h1>

        <p className="mt-2.5 flex items-center gap-1.5 text-[13px] text-fg/55">
          <Icon name="pin" className="h-3.5 w-3.5" />
          {site.location}
        </p>

        <p className="mt-2 text-sm font-medium sm:text-[15px]">{site.role}</p>

        {site.resumeUrl && (
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={site.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-fg bg-fg px-4 py-2.5 text-[13px] font-medium text-bg transition-colors hover:bg-transparent hover:text-fg"
            >
              <Icon name="file" className="h-4 w-4" />
              View Resume
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
