import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { DonateButton, TextUsButton } from "./cta";

const links = [
  { to: "/mission", label: "Mission" },
  { to: "/programs", label: "Programs & Pricing" },
  { to: "/gallery", label: "Gallery" },
  { to: "/founder", label: "About Founder" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3">
        <Link to="/" className="focus-ring flex items-center gap-3 rounded-md" onClick={() => setOpen(false)}>
          <span aria-hidden className="flex size-10 items-center justify-center rounded-full bg-sage text-sage-foreground font-display text-lg">
            H
          </span>
          <span className="leading-tight">
            <span className="block font-display text-base font-semibold">The Heritage Equine Foundation</span>
            <span className="block text-xs text-muted-foreground">Therapeutic riding · 501(c)(3)</span>
          </span>
        </Link>

        <nav aria-label="Main" className="ml-auto hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="focus-ring rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-accent hover:text-accent-foreground"
              activeProps={{ className: "bg-accent text-accent-foreground" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-2">
          <DonateButton className="hidden px-4 py-2 sm:inline-flex" />
          <TextUsButton className="hidden px-4 py-2 sm:inline-flex" />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="focus-ring inline-flex size-11 items-center justify-center rounded-md border border-border lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav aria-label="Mobile" className="border-t border-border bg-background px-4 py-3 lg:hidden">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="focus-ring block rounded-md px-3 py-3 text-base font-medium hover:bg-accent"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex flex-col gap-2 sm:hidden">
            <TextUsButton />
            <DonateButton />
          </div>
        </nav>
      ) : null}
    </header>
  );
}
