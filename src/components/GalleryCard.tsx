import Image from "next/image";
import { gallery } from "@/data/site";
import Card from "./Card";

export default function GalleryCard() {
  if (gallery.length === 0) return null;

  return (
    <Card title="Gallery" icon="image">
      <div className="-mx-1 flex snap-x snap-mandatory gap-3 overflow-x-auto px-1 pb-2">
        {gallery.map((src) => (
          <div
            key={src}
            className="relative aspect-[3/4] w-40 shrink-0 snap-start overflow-hidden rounded-xl border border-fg/15 sm:w-48"
          >
            <Image
              src={src}
              alt=""
              fill
              sizes="192px"
              className="object-cover grayscale transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </Card>
  );
}
