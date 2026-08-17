import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PHONE, SMS_HREF, TextUsButton } from "@/components/site/cta";
import { programs } from "@/data/site";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs & Pricing | Heritage Equine Foundation" },
      {
        name: "description",
        content:
          "Public pricing for therapeutic lessons, on-site and off-site trail rides, combos, and partial or full horse leases. Month-to-month, no contracts.",
      },
      { property: "og:title", content: "Programs & Pricing | Heritage Equine Foundation" },
      {
        property: "og:description",
        content: "Transparent pricing for lessons, trail rides, and horse leases.",
      },
    ],
  }),
  component: Programs,
});

function Programs() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <h1 className="font-display text-4xl font-semibold sm:text-5xl">Programs &amp; Pricing</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        Posted publicly, the same for everyone. Disabled riders ride free at any time, and military
        children ride free with a paying parent or guardian.
      </p>

      <ul className="mt-12 grid gap-6 md:grid-cols-2">
        {programs.map((p) => (
          <li
            key={p.id}
            className="flex flex-col rounded-xl border border-border bg-card p-7 shadow-warm"
          >
            <div className="flex items-start justify-between gap-3">
              <h2 className="font-display text-2xl font-semibold">{p.name}</h2>
              {"badge" in p && p.badge ? (
                <span className="rounded-full bg-gold px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gold-foreground">
                  {p.badge}
                </span>
              ) : null}
            </div>
            <p className="mt-3 text-3xl font-semibold text-saddle">{p.price}</p>
            <p className="text-sm text-muted-foreground">{p.unit}</p>
            <p className="mt-4 leading-relaxed">{p.blurb}</p>
            <ul className="mt-5 space-y-2 text-sm">
              {p.points.map((pt) => (
                <li key={pt} className="flex gap-2">
                  <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-sage" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-2">
              <TextUsButton className="w-full">Text to book</TextUsButton>
            </div>
          </li>
        ))}
      </ul>

      <p className="mt-12 rounded-xl border border-border bg-muted p-6 text-sm leading-relaxed">
        Questions about fit, weight limits, adaptive equipment, or group rates? Text or call{" "}
        <a href={SMS_HREF} className="focus-ring rounded font-semibold underline underline-offset-4">
          {PHONE}
        </a>{" "}
        and Misty will answer personally.
      </p>
    </section>
  );
}
