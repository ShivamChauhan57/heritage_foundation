import { createFileRoute } from "@tanstack/react-router";
import { MessageSquare, Phone } from "lucide-react";
import { PHONE, SMS_HREF, TEL_HREF, TextUsButton } from "@/components/site/cta";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Support | Heritage Equine Foundation" },
      {
        name: "description",
        content:
          "Text or call (337) 208-0690 to book a ride, volunteer, or support our 501(c)(3) therapeutic riding mission.",
      },
      { property: "og:title", content: "Contact & Support | Heritage Equine Foundation" },
      {
        property: "og:description",
        content: "Book a ride, volunteer, or donate to keep rides free for disabled riders.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-20">
      <h1 className="font-display text-4xl font-semibold sm:text-5xl">Contact us</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        The fastest way to reach us is a text message. We answer personally, usually same day.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <a
          href={SMS_HREF}
          className="focus-ring rounded-xl border border-border bg-card p-7 shadow-warm hover:bg-accent"
        >
          <MessageSquare aria-hidden className="size-6 text-sage" />
          <h2 className="mt-3 font-display text-xl font-semibold">Text us</h2>
          <p className="mt-1 text-lg font-semibold text-saddle">{PHONE}</p>
          <p className="mt-2 text-sm text-muted-foreground">Booking, questions, group rides.</p>
        </a>
        <a
          href={TEL_HREF}
          className="focus-ring rounded-xl border border-border bg-card p-7 shadow-warm hover:bg-accent"
        >
          <Phone aria-hidden className="size-6 text-sage" />
          <h2 className="mt-3 font-display text-xl font-semibold">Call us</h2>
          <p className="mt-1 text-lg font-semibold text-saddle">{PHONE}</p>
          <p className="mt-2 text-sm text-muted-foreground">Prefer to talk it through? Ring the barn.</p>
        </a>
      </div>

      <div className="mt-10">
        <TextUsButton className="px-7 py-4 text-base" />
      </div>

      <div id="support" className="mt-16 scroll-mt-24 rounded-xl border border-border bg-muted p-8">
        <h2 className="font-display text-2xl font-semibold">Support our mission</h2>
        <p className="mt-3 leading-relaxed">
          Every free ride for a disabled rider or a military child is paid for by someone in this
          community. Donations cover feed, farrier and vet care, adaptive equipment, and instructor
          time. Sponsor a single ride, a month of a horse's care, or give what you can.
        </p>
        <p className="mt-4 text-sm">
          To give or to sponsor a rider, text{" "}
          <a href={SMS_HREF} className="focus-ring rounded font-semibold underline underline-offset-4">
            {PHONE}
          </a>{" "}
          with the word <strong>DONATE</strong> and we will send you the details.
        </p>
        <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
          The Heritage Equine Foundation is a 501(c)(3) tax-exempt nonprofit. Contributions are
          tax-deductible to the fullest extent allowed by law; a receipt is provided for every gift.
        </p>
      </div>
    </section>
  );
}
