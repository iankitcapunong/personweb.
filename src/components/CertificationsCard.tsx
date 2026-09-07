"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { certifications } from "@/data/site";
import Card from "./Card";

export default function CertificationsCard() {
  const [open, setOpen] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <Card title="Certifications" icon="award">
      <ul className="space-y-2.5">
        {certifications.map((cert) => {
          const Tag = cert.image ? "button" : "div";
          return (
            <li key={cert.name}>
              <Tag
                {...(cert.image
                  ? { type: "button" as const, onClick: () => setOpen(cert.image) }
                  : {})}
                className={`flex w-full items-center justify-between gap-4 rounded-xl border border-fg/15 px-4 py-3 text-left ${
                  cert.image ? "transition-colors hover:border-fg/40 hover:bg-fg/[0.04]" : ""
                }`}
              >
                <span className="min-w-0">
                  <span className="block truncate text-[13.5px] font-semibold tracking-tight">
                    {cert.name}
                  </span>
                  <span className="mt-0.5 block truncate text-[12px] text-fg/55">
                    {cert.issuer} — {cert.year}
                  </span>
                </span>
                {cert.image && (
                  <span className="shrink-0 font-mono text-[10px] uppercase tracking-wider text-fg/40">
                    View
                  </span>
                )}
              </Tag>
            </li>
          );
        })}
      </ul>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Certificate"
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-fg/70 p-4 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-2xl border border-fg/20 bg-bg"
          >
            <button
              type="button"
              onClick={() => setOpen(null)}
              aria-label="Close certificate"
              className="absolute right-3 top-3 z-10 grid h-8 w-8 place-items-center rounded-full border border-fg/20 bg-bg text-sm transition-colors hover:bg-fg hover:text-bg"
            >
              ✕
            </button>
            <div className="relative h-[80vh] w-full">
              <Image
                src={open}
                alt="Certificate"
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-contain p-4"
              />
            </div>
          </div>
        </div>
      )}
    </Card>
  );
}
