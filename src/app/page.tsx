import AboutCard from "@/components/AboutCard";
import CertificationsCard from "@/components/CertificationsCard";
import ExperienceCard from "@/components/ExperienceCard";
import FooterCard from "@/components/FooterCard";
import GalleryCard from "@/components/GalleryCard";
import ProfileHeader from "@/components/ProfileHeader";
import ProjectsCard from "@/components/ProjectsCard";
import Reveal from "@/components/Reveal";
import TechStackCard from "@/components/TechStackCard";
import ThemeToggle from "@/components/ThemeToggle";
import { gallery, site } from "@/data/site";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="fixed right-4 top-4 z-40 sm:right-6 sm:top-6">
        <ThemeToggle />
      </div>

      <Reveal>
        <ProfileHeader />
      </Reveal>

      <div className="mt-10 space-y-4 sm:mt-12">
        <div className="grid gap-4 lg:grid-cols-2">
          <Reveal className="h-full [&>section]:h-full">
            <AboutCard />
          </Reveal>
          <Reveal delay={80} className="h-full [&>section]:h-full">
            <ExperienceCard />
          </Reveal>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <Reveal className="h-full [&>section]:h-full">
            <TechStackCard />
          </Reveal>
          <Reveal delay={80} className="h-full [&>section]:h-full">
            <CertificationsCard />
          </Reveal>
        </div>

        <Reveal>
          <ProjectsCard />
        </Reveal>

        <Reveal>
          <FooterCard />
        </Reveal>

        {gallery.length > 0 && (
          <Reveal>
            <GalleryCard />
          </Reveal>
        )}
      </div>

      <p className="mt-10 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-fg/40">
        © {new Date().getFullYear()} {site.name}
      </p>
    </div>
  );
}
