import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import { categories, photos, type Category } from "@/data/gallery";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Photo Gallery | Heritage Equine Foundation" },
      {
        name: "description",
        content:
          "Photos from the ranch: therapy sessions, riding lessons, trail rides, our horses, riders and volunteers.",
      },
      { property: "og:title", content: "Photo Gallery | Heritage Equine Foundation" },
      {
        property: "og:description",
        content: "Rider stories, volunteers, horses, and trails at The Heritage Equine Foundation.",
      },
    ],
  }),
  component: Gallery,
});

function Gallery() {
  const [filter, setFilter] = useState<Category>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const shown = photos.filter((p) => filter === "All" || p.category === filter);
  const active = lightbox === null ? null : shown[lightbox];

  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <h1 className="font-display text-4xl font-semibold sm:text-5xl">Gallery</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        Riders, volunteers, horses, and the trails we ride. Select a photo to view it larger.
      </p>

      <div role="group" aria-label="Filter photos" className="mt-8 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            aria-pressed={filter === c}
            onClick={() => {
              setFilter(c);
              setLightbox(null);
            }}
            className={`focus-ring min-h-11 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              filter === c
                ? "border-sage bg-sage text-sage-foreground"
                : "border-border bg-card hover:bg-accent"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((p, i) => (
          <li key={p.src}>
            <button
              type="button"
              onClick={() => setLightbox(i)}
              className="focus-ring group block w-full overflow-hidden rounded-xl border border-border bg-card shadow-warm"
            >
              <span className="block aspect-4/3 overflow-hidden">
                <img
                  src={p.src}
                  alt={p.alt}
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </span>
              <span className="block px-4 py-3 text-left text-sm font-medium text-muted-foreground">
                {p.category}
              </span>
            </button>
          </li>
        ))}
      </ul>

      {active ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[oklch(0.2_0.03_55)]/85 p-4"
          onClick={() => setLightbox(null)}
        >
          <div className="max-h-full w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <img src={active.src} alt={active.alt} className="max-h-[75vh] w-full rounded-xl object-contain" />
            <div className="mt-4 flex items-center justify-between gap-4">
              <p className="text-sm text-primary-foreground">{active.alt}</p>
              <button
                type="button"
                autoFocus
                aria-label="Close photo"
                onClick={() => setLightbox(null)}
                className="focus-ring inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-primary-foreground/40 text-primary-foreground"
              >
                <X className="size-5" />
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
