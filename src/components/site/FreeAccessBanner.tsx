import { HeartHandshake, Shield } from "lucide-react";

export function FreeAccessBanner() {
  return (
    <section aria-labelledby="community-promise" className="bg-dusk text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground/80">
          Our community promise
        </p>
        <h2 id="community-promise" className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
          Riding here should never depend on what you can pay.
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="rounded-xl border border-primary-foreground/25 bg-primary-foreground/10 p-6">
            <HeartHandshake aria-hidden className="size-7" />
            <h3 className="mt-3 font-display text-xl font-semibold">All disabled persons ride 100% FREE</h3>
            <p className="mt-2 text-sm leading-relaxed text-primary-foreground/90">
              Any time, any day, no paperwork games and no waiting list fees. Adaptive equipment,
              trained side-walkers, and a horse matched to the rider.
            </p>
          </div>
          <div className="rounded-xl border border-primary-foreground/25 bg-primary-foreground/10 p-6">
            <Shield aria-hidden className="size-7" />
            <h3 className="mt-3 font-display text-xl font-semibold">Military children ride FREE</h3>
            <p className="mt-2 text-sm leading-relaxed text-primary-foreground/90">
              Children of service members ride free with a paying parent or guardian. Thank you for
              your family's service — the barn is yours too.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
