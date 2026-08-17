import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-ride.jpg";
import founderImg from "@/assets/founder.jpg";
import { PHONE, SMS_HREF, TextUsButton } from "@/components/site/cta";
import { FreeAccessBanner } from "@/components/site/FreeAccessBanner";
import { programs } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Heritage Equine Foundation | Therapeutic Horse Riding" },
      {
        name: "description",
        content:
          "Therapeutic and recreational horse riding in a welcoming barn. Disabled riders ride free, military children ride free. Text (337) 208-0690 to book.",
      },
      { property: "og:title", content: "Heritage Equine Foundation | Therapeutic Horse Riding" },
      {
        property: "og:description",
        content:
          "Accessible, joyful, therapeutic equine experiences. Disabled riders always ride free.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-border">
        <img
          src={heroImg}
          alt="A smiling child riding a chestnut horse led by a volunteer at golden hour"
          width={1600}
          height={1008}
          className="absolute inset-0 size-full object-cover"
        />
        <div aria-hidden className="absolute inset-0 bg-[oklch(0.24_0.04_55)]/72" />
        <div className="relative mx-auto max-w-4xl px-4 py-24 text-center sm:py-32">
          <h1 className="font-display text-4xl font-semibold leading-tight text-primary-foreground sm:text-6xl">
            Empowering Lives Through the Healing Power of Horses
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-primary-foreground/90">
            Dedicated to accessible, joyful, and therapeutic equine experiences.
          </p>

          <blockquote className="mx-auto mt-10 max-w-xl border-l-4 border-gold pl-5 text-left">
            <p className="font-display text-xl italic text-primary-foreground">
              &ldquo;Do your best, And leave the rest, &rsquo;Twill all come right Some day or
              night&rdquo;
            </p>
            <footer className="mt-2 text-sm text-primary-foreground/80">
              — Anna Sewell, <cite>Black Beauty</cite>
            </footer>
          </blockquote>

          <div className="mt-10 flex flex-col items-center gap-3">
            <TextUsButton className="px-7 py-4 text-base">Text {PHONE} to schedule</TextUsButton>
            <p className="text-sm text-primary-foreground/85">
              Text or call{" "}
              <a href={SMS_HREF} className="focus-ring rounded font-semibold underline underline-offset-4">
                {PHONE}
              </a>{" "}
              to schedule your ride.
            </p>
          </div>
        </div>
      </section>

      <FreeAccessBanner />

      <section aria-labelledby="programs-preview" className="mx-auto max-w-6xl px-4 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 id="programs-preview" className="font-display text-3xl font-semibold sm:text-4xl">
              Rides, lessons, and leases
            </h2>
            <p className="mt-2 max-w-xl text-muted-foreground">
              Transparent, public pricing. No memberships, no contracts, no surprises at the gate.
            </p>
          </div>
          <Link
            to="/programs"
            className="focus-ring rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-accent"
          >
            See all pricing
          </Link>
        </div>

        <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.slice(0, 3).map((p) => (
            <li key={p.id} className="rounded-xl border border-border bg-card p-6 shadow-warm">
              <h3 className="font-display text-xl font-semibold">{p.name}</h3>
              <p className="mt-2 text-2xl font-semibold text-saddle">{p.price}</p>
              <p className="text-sm text-muted-foreground">{p.unit}</p>
              <p className="mt-4 text-sm leading-relaxed">{p.blurb}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="founder-preview" className="border-y border-border bg-muted">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 md:grid-cols-2">
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
              Founder
            </p>
            <h2 id="founder-preview" className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
              Misty Matthews
            </h2>
            <p className="mt-4 leading-relaxed">
              Misty started The Heritage Equine Foundation with a handful of gentle horses and one
              rule: nobody gets turned away. What began as free Saturday rides for neighborhood kids
              has grown into a full therapeutic program serving riders of every ability.
            </p>
            <Link
              to="/founder"
              className="focus-ring mt-6 inline-flex rounded-md border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-accent"
            >
              Read her story
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
