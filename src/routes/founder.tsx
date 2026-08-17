import { createFileRoute } from "@tanstack/react-router";
import founderImg from "@/assets/founder.jpg";
import { TextUsButton } from "@/components/site/cta";

export const Route = createFileRoute("/founder")({
  head: () => ({
    meta: [
      { title: "About Misty Matthews | Heritage Equine Foundation" },
      {
        name: "description",
        content:
          "Meet Misty Matthews, founder of The Heritage Equine Foundation, and her vision for a premier therapeutic riding center open to every rider.",
      },
      { property: "og:title", content: "About Misty Matthews | Heritage Equine Foundation" },
      {
        property: "og:description",
        content: "The founding story and long-term vision behind our therapeutic riding program.",
      },
    ],
  }),
  component: Founder,
});

function Founder() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <div className="grid items-start gap-12 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <img
          src={founderImg}
          alt="Misty Matthews standing beside a chestnut horse in the barn doorway"
          width={1008}
          height={1200}
          loading="lazy"
          className="aspect-4/5 w-full rounded-xl object-cover shadow-warm"
        />
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            About the founder
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">Misty Matthews</h1>

          <p className="mt-6 leading-relaxed">
            Misty grew up with horses before she grew up with much else. She learned early that a
            horse will meet a person exactly where they are — and that a barn, run right, becomes
            the one place in a hard week where nothing is being asked of you.
          </p>
          <p className="mt-4 leading-relaxed">
            She founded The Heritage Equine Foundation after years of quietly giving away rides to
            families who could not afford lessons: kids with cerebral palsy, veterans working
            through the fog, grandparents who had not been on a horse in forty years. When the
            requests outgrew what one person could donate, she turned it into a 501(c)(3) so the
            community could carry it together.
          </p>
          <p className="mt-4 leading-relaxed">
            Today Misty still matches every new rider to a horse herself, and still answers the
            phone at the number on this page.
          </p>

          <h2 className="mt-10 font-display text-2xl font-semibold">The long-term vision</h2>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed">
            <li className="rounded-lg border border-border bg-card p-4">
              A covered, all-weather arena so therapy sessions never cancel for rain or heat.
            </li>
            <li className="rounded-lg border border-border bg-card p-4">
              A full herd of trained therapy horses, plus certified instructors on staff.
            </li>
            <li className="rounded-lg border border-border bg-card p-4">
              A premier therapeutic riding center for the region — free for every disabled rider,
              forever.
            </li>
          </ul>

          <div className="mt-8">
            <TextUsButton />
          </div>
        </div>
      </div>
    </section>
  );
}
