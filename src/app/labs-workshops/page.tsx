import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container, Button, SectionHeading, Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { workshops, workshopAudiences } from "@/data/programs";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Labs & Workshops",
  description:
    "Facilitated workshops that translate vision into real strategy. Brand Builder Seminars, Roadmap 2 Vision, and Business Clinics for teams and mission-driven organizations.",
};

const flow = ["Reflection", "Alignment", "Strategy", "Action"];

export default function LabsWorkshopsPage() {
  return (
    <>
      <PageHero
        eyebrow="Labs & Workshops"
        title="Clarity creates momentum. Alignment creates results."
        intro="Most entrepreneurs and teams don't struggle because they lack talent. They struggle because they're building without shared direction. Our workshops pause the noise, reconnect to purpose, and translate vision into real strategy."
      >
        <Button href={site.booking.discovery} external>
          Host a workshop for your group
        </Button>
      </PageHero>

      {/* Flow */}
      <section className="py-12">
        <Container>
          <Reveal className="rounded-[var(--radius-card)] border border-line-soft bg-paper p-8 sm:p-12">
            <p className="max-w-3xl text-lg leading-relaxed text-ink-soft text-pretty">
              Every session blends reflection, structured guidance, and practical
              action — so participants leave not just inspired, but equipped. We
              don&rsquo;t deliver lectures. We facilitate transformation and
              implementation, operating as strategic thought partners.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              {flow.map((step, i) => (
                <span key={step} className="flex items-center gap-3">
                  <span className="rounded-full bg-clay/10 px-5 py-2.5 font-display text-lg tracking-tight text-plum">
                    {step}
                  </span>
                  {i < flow.length - 1 && (
                    <span aria-hidden className="text-gold">
                      →
                    </span>
                  )}
                </span>
              ))}
            </div>
            <p className="mt-8 text-ink-soft">
              Participants leave with{" "}
              <strong className="font-semibold text-ink">
                one clarified message
              </strong>
              ,{" "}
              <strong className="font-semibold text-ink">
                one defined priority
              </strong>
              , and{" "}
              <strong className="font-semibold text-ink">
                one immediate next move
              </strong>
              . Because clarity should always lead to progress.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Who we serve */}
      <section className="py-12">
        <Container>
          <Reveal className="text-center">
            <Eyebrow className="mb-6 justify-center">Who We Serve</Eyebrow>
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
              {workshopAudiences.map((a, i) => (
                <span key={a} className="flex items-center gap-3">
                  <span className="font-display text-2xl tracking-tight text-ink sm:text-3xl">
                    {a}
                  </span>
                  {i < workshopAudiences.length - 1 && (
                    <span aria-hidden className="text-clay">
                      ·
                    </span>
                  )}
                </span>
              ))}
            </div>
            <p className="mx-auto mt-5 max-w-2xl text-ink-soft">
              Especially impactful for mission-driven and BIPOC-led organizations
              seeking sustainable growth and aligned leadership culture.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Signature offerings */}
      <section className="py-16">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Signature Offerings"
              title="Workshops engineered for outcomes."
            />
          </Reveal>
          <div className="mt-12 space-y-6">
            {workshops.map((w, i) => (
              <Reveal key={w.name} delay={i * 80}>
                <article className="group grid gap-6 rounded-[var(--radius-card)] border border-line-soft bg-paper p-8 transition-all duration-500 hover:shadow-[var(--shadow-soft)] md:grid-cols-[0.9fr_1.1fr] md:p-10">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="font-display text-5xl text-clay/25">
                        0{i + 1}
                      </span>
                      <span className="rounded-full border border-line-soft px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-muted">
                        {w.duration}
                      </span>
                    </div>
                    <h3 className="mt-5 text-2xl tracking-tight sm:text-3xl">
                      {w.name}
                    </h3>
                    <p className="mt-3 text-ink-soft">{w.pitch}</p>
                  </div>
                  <div className="md:border-l md:border-line-soft md:pl-10">
                    <p className="eyebrow text-clay">Participants will</p>
                    <ul className="mt-4 space-y-2.5">
                      {w.bullets.map((b) => (
                        <li key={b} className="flex gap-3 text-ink-soft">
                          <span
                            aria-hidden
                            className="mt-[0.5rem] h-1.5 w-1.5 flex-none rounded-full bg-gold"
                          />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-6 rounded-xl bg-sage/10 px-4 py-3 text-sm">
                      <span className="font-semibold text-sage">Outcome:</span>{" "}
                      <span className="text-ink-soft">{w.outcome}</span>
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <Container>
          <Reveal className="relative overflow-hidden rounded-[var(--radius-card)] bg-ink px-8 py-14 text-center text-paper grain sm:px-16 sm:py-20">
            <div className="relative z-10 mx-auto max-w-2xl">
              <h2 className="text-balance text-[2rem] leading-tight text-paper sm:text-[2.6rem]">
                Start the conversation about hosting a workshop today.
              </h2>
              <div className="mt-8 flex justify-center">
                <Button href={site.booking.discovery} external>
                  Book Discovery Call
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
