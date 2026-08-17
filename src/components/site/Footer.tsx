import { Link } from "@tanstack/react-router";
import { PHONE, SMS_HREF, TEL_HREF } from "./cta";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-muted">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3">
        <div>
          <h2 className="font-display text-xl font-semibold">The Heritage Equine Foundation</h2>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            Empowering lives through the healing power of horses — accessible, joyful, therapeutic
            equine experiences for our community.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Contact</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              Text or call{" "}
              <a href={SMS_HREF} className="focus-ring rounded font-semibold underline underline-offset-4">
                {PHONE}
              </a>
            </li>
            <li>
              <a href={TEL_HREF} className="focus-ring rounded underline underline-offset-4">
                Call us directly
              </a>
            </li>
            <li className="text-muted-foreground">Founded by Misty Matthews</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Quick links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/mission" className="focus-ring rounded hover:underline">Mission</Link></li>
            <li><Link to="/programs" className="focus-ring rounded hover:underline">Programs &amp; Pricing</Link></li>
            <li><Link to="/gallery" className="focus-ring rounded hover:underline">Gallery</Link></li>
            <li><Link to="/founder" className="focus-ring rounded hover:underline">About the Founder</Link></li>
            <li>
              <Link to="/contact" hash="support" className="focus-ring rounded font-medium underline underline-offset-4">
                Support our 501(c)(3) mission
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-4 py-6 text-xs leading-relaxed text-muted-foreground">
          The Heritage Equine Foundation is a registered 501(c)(3) nonprofit organization. Donations
          are tax-deductible to the fullest extent allowed by law. No goods or services are provided
          in exchange for contributions unless otherwise noted. &copy; {new Date().getFullYear()} The
          Heritage Equine Foundation. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
