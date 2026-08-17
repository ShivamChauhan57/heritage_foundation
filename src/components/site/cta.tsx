import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export const PHONE = "(337) 208-0690";
export const SMS_HREF = "sms:3372080690";
export const TEL_HREF = "tel:3372080690";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition-colors focus-ring min-h-11";

export function TextUsButton({
  className,
  children = "Book a Ride (Text Us)",
}: {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <a href={SMS_HREF} className={cn(base, "bg-saddle text-saddle-foreground hover:bg-saddle/90", className)}>
      {children}
    </a>
  );
}

export function DonateButton({ className }: { className?: string }) {
  return (
    <Link
      to="/contact"
      hash="support"
      className={cn(
        base,
        "border border-border bg-transparent text-foreground/80 font-medium hover:bg-accent hover:text-accent-foreground",
        className,
      )}
    >
      Support Our Mission
    </Link>
  );
}
