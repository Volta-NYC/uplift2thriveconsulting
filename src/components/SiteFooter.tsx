import Link from "next/link";
import { Container, Button, Eyebrow } from "./ui";
import { Logo } from "./Logo";
import { nav, site } from "@/data/site";

const utility = [
  { label: "Contact", href: "/contact" },
  { label: "Feature Your Business", href: "/community#feature" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-plum-deep text-paper grain">
      {/* CTA band */}
      <Container className="relative z-10 border-b border-white/10 py-16 sm:py-20">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-xl">
            <Eyebrow tone="gold" className="mb-5">
              Start Your Transformation
            </Eyebrow>
            <h2 className="text-balance text-[2.2rem] leading-[1.05] text-paper sm:text-[2.8rem]">
              Let Uplift 2 Thrive be your guide.
            </h2>
            <p className="mt-4 max-w-md text-paper/70">
              You bring the vision. We help you build the strategy to move it
              forward — with clarity, confidence, and community.
            </p>
          </div>
          <Button href={site.booking.discovery} variant="primary" external>
            Book Discovery Call
          </Button>
        </div>
      </Container>

      {/* Links */}
      <Container className="relative z-10 py-14">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo tone="paper" className="h-10" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-paper/65">
              {site.legalName}. A purpose-driven consulting & coaching ecosystem
              for BIPOC entrepreneurs and nonprofit leaders.
            </p>
            <p className="mt-6 text-sm text-paper/55">
              {site.address.line1}
              <br />
              {site.address.city}, {site.address.state} {site.address.zip}
            </p>
          </div>

          <nav aria-label="Footer — explore">
            <p className="eyebrow text-gold-soft">Explore</p>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="link-underline text-paper/75 hover:text-paper"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer — connect">
            <p className="eyebrow text-gold-soft">Connect</p>
            <ul className="mt-5 space-y-3">
              {utility.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="link-underline text-paper/75 hover:text-paper"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="link-underline text-paper/75 hover:text-paper"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.phoneHref}
                  className="link-underline text-paper/75 hover:text-paper"
                >
                  {site.phone}
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-paper/45 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <p className="font-display text-sm italic text-gold-soft/80">
            V.A.L.I.D. — Vision · Action · Leadership · Intersection · Determination
          </p>
        </div>
      </Container>
    </footer>
  );
}
