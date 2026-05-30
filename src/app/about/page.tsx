import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Container, Button, SectionHeading, Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { site, validMethod, press } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Chanté Ramsey, Founder & CEO of Uplift 2 Thrive Consulting — a seasoned brand strategist helping purpose-driven BIPOC entrepreneurs grow with clarity and impact.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Uplift 2 Thrive"
        title="Where vision gets built — together."
        intro="Uplift 2 Thrive Consulting is a purpose-driven consulting and coaching ecosystem designed for BIPOC entrepreneurs and nonprofit leaders who are ready to pivot with clarity, confidence, and sustainability."
      />

      {/* Founder feature */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <Reveal className="relative">
              <div
                aria-hidden
                className="absolute -inset-4 -z-10 rounded-[2rem] bg-clay/12"
                style={{ transform: "rotate(-3deg)" }}
              />
              <Image
                src="/images/people/chante-about.webp"
                alt="Chanté Ramsey, Founder & CEO"
                width={681}
                height={1024}
                sizes="(max-width: 1024px) 90vw, 440px"
                className="w-full rounded-[1.75rem] object-cover shadow-[var(--shadow-lift)]"
              />
            </Reveal>

            <Reveal delay={120}>
              <Eyebrow className="mb-6">Meet {site.founder.name}</Eyebrow>
              <h2 className="text-balance text-[2rem] leading-[1.08] sm:text-[2.6rem]">
                Two decades of building infrastructure for brands that matter.
              </h2>
              <div className="mt-7 space-y-5 text-ink-soft text-pretty">
                <p>
                  Uplift 2 Thrive (U2T) was born from a groundbreaking
                  conversation that revealed a common gap for entrepreneurs:
                  sales without clear brand storytelling, aligned mindset, and
                  supportive systems.
                </p>
                <p>
                  Chanté is the driving force behind U2T, drawing upon two
                  decades of business infrastructure management, financial
                  expertise, and problem-solving acumen. As a seasoned brand
                  strategist, she collaborates with businesses she holds dear,
                  guiding entrepreneurs through growth while embodying a
                  customer-centric perspective.
                </p>
                <p>
                  A resilient grassroots entrepreneur, she navigated the
                  challenges with skillful pivots and an unwavering can-do
                  attitude. Through U2T, she channels her energy through the
                  V.A.L.I.D. approach — propelling businesses toward
                  unprecedented success.{" "}
                  <em className="font-display not-italic text-plum">
                    Embrace your next chapter and redefine your brand&rsquo;s
                    triumphs.
                  </em>
                </p>
              </div>
              <div className="mt-8">
                <Button href={site.booking.discovery} external>
                  Book a discovery call
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Belief / philosophy band */}
      <section className="py-20">
        <Container size="narrow">
          <Reveal className="text-center">
            <span aria-hidden className="font-display text-6xl text-gold/50">
              &ldquo;
            </span>
            <p className="mt-2 text-balance font-display text-[1.7rem] leading-[1.32] text-ink sm:text-[2.3rem]">
              We blend strategic brand development, leadership wellness, and
              community-powered accountability into one integrated experience —
              so you&rsquo;re not just learning, you&rsquo;re following through.
            </p>
            <p className="mt-7 text-ink-soft">
              Built on the belief that clarity fuels confidence and intention
              drives sustainable growth.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* VALID approach */}
      <section className="bg-plum-deep py-24 text-paper grain sm:py-28">
        <Container className="relative z-10">
          <Reveal>
            <SectionHeading
              tone="paper"
              eyebrow="The Framework"
              title="The V.A.L.I.D. approach"
              intro="Five principles that turn overwhelm into momentum and ideas into measurable progress."
            />
          </Reveal>
          <div className="mt-14 space-y-px overflow-hidden rounded-[var(--radius-card)] border border-white/10">
            {validMethod.map((item, i) => (
              <Reveal
                key={item.letter}
                delay={i * 60}
                className="group flex items-baseline gap-6 bg-white/[0.03] px-6 py-7 transition-colors hover:bg-white/[0.07] sm:gap-10 sm:px-10"
              >
                <span className="font-display text-4xl text-gold sm:text-5xl">
                  {item.letter}
                </span>
                <div>
                  <h3 className="text-xl text-paper sm:text-2xl">{item.word}</h3>
                  <p className="mt-1.5 max-w-xl text-sm text-paper/65 sm:text-base">
                    {item.blurb}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Press */}
      <section className="py-24 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="In The Press"
              title="Featured & recognized"
              intro="Chanté&rsquo;s work has been spotlighted across publications championing purpose-driven entrepreneurship."
              className="mx-auto"
            />
          </Reveal>
          <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
            {press.map((p, i) => (
              <Reveal key={p.outlet} delay={i * 60}>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-line-soft bg-paper px-6 py-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-clay/40 hover:shadow-[var(--shadow-soft)]"
                >
                  <div>
                    <div className="font-display text-xl tracking-tight text-ink">
                      {p.outlet}
                    </div>
                    <div className="mt-0.5 text-sm text-muted">{p.title}</div>
                  </div>
                  <span
                    aria-hidden
                    className="text-clay transition-transform duration-300 group-hover:translate-x-1"
                  >
                    ↗
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
