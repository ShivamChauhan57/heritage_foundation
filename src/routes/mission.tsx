import { createFileRoute } from "@tanstack/react-router";
import { FreeAccessBanner } from "@/components/site/FreeAccessBanner";
import { TextUsButton } from "@/components/site/cta";

export const Route = createFileRoute("/mission")({
  head: () => ({
    meta: [
      { title: "Our Mission | Heritage Equine Foundation" },
      {
        name: "description",
        content:
          "A 501(c)(3) nonprofit making equine therapy accessible: disabled riders ride free anytime, military children ride free with a paying guardian.",
      },
      { property: "og:title", content: "Our Mission | Heritage Equine Foundation" },
      {
        property: "og:description",
        content: "Accessible equine therapy for every rider, funded by community support.",
      },
    ],
  }),
  component: Mission,
});

const pillars = [
  {
    title: "Accessibility first",
    body: "Ramps, adaptive tack, trained side-walkers, and horses selected for temperament. If a rider wants to ride, we find the way.",
  },
  {
    title: "Dignity, not charity",
    body: "Free riders are riders — same horses, same instructors, same trails. No separate schedule, no second-class program.",
  },
  {
    title: "Community roots",
    body: "Volunteers, local families, and neighbors keep this barn running. Every donated hour puts another person in the saddle.",
  },
];

function Mission() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-4 py-20">
        <h1 className="font-display text-4xl font-semibold sm:text-5xl">Our Mission</h1>
        <p className="mt-6 text-lg leading-relaxed">
          The Heritage Equine Foundation exists to put people and horses together — for healing,
          confidence, and plain joy. We are a 501(c)(3) nonprofit, which means paid rides and
          donations fund free rides for the neighbors who need them most.
        </p>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Time in the saddle builds core strength, balance, focus, and trust. But it also does
          something harder to measure: it gives a rider a partner who does not care about a
          diagnosis, a wheelchair, or a hard year.
        </p>
      </section>

      <FreeAccessBanner />

      <section aria-labelledby="pillars" className="mx-auto max-w-6xl px-4 py-20">
        <h2 id="pillars" className="font-display text-3xl font-semibold sm:text-4xl">
          What we stand on
        </h2>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <li key={p.title} className="rounded-xl border border-border bg-card p-6 shadow-warm">
              <h3 className="font-display text-xl font-semibold">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <TextUsButton />
        </div>
      </section>
    </>
  );
}
