import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container, Button, SectionHeading, Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/services";
import { site, validMethod } from "@/data/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "1:1 coaching and consulting packages for purpose-driven BIPOC entrepreneurs — from mindset sessions to VIP days and certification support.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title={
          <>
            Coaching built around
            <br />
            where you are.
          </>
        }
        intro="Through collaborative strategy sessions and guided planning, we help you clarify your vision and goals, strengthen your brand positioning and messaging, identify growth opportunities and partnerships, and develop practical action plans for sustainable success."
      >
        <Button href={site.booking.discovery} external>
          Book a free discovery call
        </Button>
      </PageHero>

      <section className="pb-8">
        <Container>
          <div className="grid gap-7 sm:grid-cols-2">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={i * 80} className="h-full">
                <ServiceCard service={service} index={i} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* VALID method strip */}
      <section className="py-24 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="How We Work"
              title="Every engagement runs on the V.A.L.I.D. method."
              className="mx-auto"
            />
          </Reveal>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {validMethod.map((item, i) => (
              <Reveal
                key={item.letter}
                delay={i * 70}
                className="rounded-2xl border border-line-soft bg-paper p-6 text-center"
              >
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-clay/10 font-display text-2xl text-clay">
                  {item.letter}
                </div>
                <h3 className="mt-4 text-lg tracking-tight">{item.word}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {item.blurb}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Closing CTA */}
      <section className="pb-24">
        <Container>
          <Reveal className="relative overflow-hidden rounded-[var(--radius-card)] bg-plum px-8 py-14 text-center text-paper grain sm:px-16 sm:py-20">
            <div className="relative z-10 mx-auto max-w-2xl">
              <Eyebrow tone="gold" className="mb-6 justify-center">
                Not sure where to start?
              </Eyebrow>
              <h2 className="text-balance text-[2rem] leading-tight text-paper sm:text-[2.6rem]">
                Let&rsquo;s find the right fit together.
              </h2>
              <p className="mt-5 text-paper/70">
                Schedule a complimentary Power 2 Inspire Discovery Session and
                we&rsquo;ll map your next move — no pressure, just clarity.
              </p>
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
