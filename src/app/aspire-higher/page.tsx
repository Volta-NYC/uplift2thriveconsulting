import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Container, Button, SectionHeading, Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { aspireTracks, aspireGains, aspireForWhom } from "@/data/programs";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Aspire Higher — Cohort Coaching",
  description:
    "A boot-camp–style, human-centered growth lab for BIPOC entrepreneurs ready to align vision with execution. Choose a 2-hour intensive or a 60-day cohort.",
};

export default function AspireHigherPage() {
  return (
    <>
      <PageHero
        eyebrow="Cohort Coaching Program"
        title={
          <>
            Aspire Higher.
            <br />
            Purposeful growth,
            <br />
            strategic action.
          </>
        }
        intro="Align your vision. Strengthen your foundation. Grow with intention. A hybrid coaching experience created for BIPOC entrepreneurs ready to align vision with execution."
      >
        <Button href={site.booking.discovery} external>
          Book your free discovery consultation
        </Button>
      </PageHero>

      {/* Intro + image */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <Reveal>
              <p className="text-xl leading-relaxed text-ink text-pretty">
                Are you a BIPOC business leader struggling to align your brand
                vision with your growth goals? Seeking innovative solutions to
                overcome challenges unique to your business?
              </p>
              <p className="mt-5 text-ink-soft">
                You&rsquo;re not alone — and we have the solution. Aspire Higher
                isn&rsquo;t a traditional program. It&rsquo;s a boot-camp–style,
                human-centered growth lab created to help you achieve
                purpose-driven goals, maintain alignment between vision and
                strategy, and develop creative, action-oriented solutions rooted
                in your real business challenges.
              </p>
            </Reveal>
            <Reveal delay={120} className="relative">
              <div
                aria-hidden
                className="absolute -inset-4 -z-10 rounded-[2rem] bg-gold/15"
                style={{ transform: "rotate(2deg)" }}
              />
              <Image
                src="/images/graphics/aspire-header.png"
                alt="Aspire Higher cohort coaching program"
                width={1200}
                height={800}
                sizes="(max-width: 1024px) 90vw, 460px"
                className="w-full rounded-[1.5rem] object-cover shadow-[var(--shadow-soft)]"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Two tracks */}
      <section className="py-16">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Two Coaching Tracks"
              title="Choose the path that fits your season."
              intro="Both tracks blend reflection, structured guidance, and practical action — designed specifically for BIPOC entrepreneurs."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {aspireTracks.map((track, i) => (
              <Reveal
                key={track.name}
                delay={i * 90}
                className="group flex flex-col rounded-[var(--radius-card)] border border-line-soft bg-paper p-8 shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
              >
                <span className="font-display text-5xl text-clay/25">
                  0{i + 1}
                </span>
                <h3 className="mt-4 text-2xl tracking-tight">{track.name}</h3>
                <p className="mt-2 text-sm font-medium uppercase tracking-[0.12em] text-clay">
                  {track.format}
                </p>
                <p className="mt-5 flex-1 leading-relaxed text-ink-soft">
                  {track.description}
                </p>
                <div className="mt-7">
                  <Button href={site.booking.discovery} external variant="outline">
                    Reserve your spot
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* What you'll gain + who it's for */}
      <section className="py-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <Eyebrow className="mb-6">What You&rsquo;ll Gain</Eyebrow>
              <ul className="space-y-4">
                {aspireGains.map((g, i) => (
                  <li
                    key={g}
                    className="flex gap-4 border-b border-line-soft pb-4 last:border-0"
                  >
                    <span className="font-display text-xl text-gold">
                      {i + 1}.
                    </span>
                    <span className="text-ink-soft">{g}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={120}>
              <div className="rounded-[var(--radius-card)] bg-plum p-8 text-paper sm:p-10">
                <Eyebrow tone="gold" className="mb-6">
                  Who Is This For?
                </Eyebrow>
                <ul className="space-y-5">
                  {aspireForWhom.map((w) => (
                    <li key={w} className="flex gap-3.5">
                      <span
                        aria-hidden
                        className="mt-2 h-2 w-2 flex-none rounded-full bg-gold"
                      />
                      <span className="text-paper/85">{w}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-8 border-t border-white/10 pt-6 font-display text-lg italic text-gold-soft">
                  Limited spots available. Secure yours and start building the
                  impact your business was meant for.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20">
        <Container size="narrow">
          <Reveal className="text-center">
            <h2 className="text-balance text-[2rem] leading-tight sm:text-[2.6rem]">
              Ready to elevate your business?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-ink-soft">
              Join our hybrid coaching experience and move forward with clarity,
              confidence, and purpose.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href={site.booking.discovery} external>
                Book your free discovery consultation
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
