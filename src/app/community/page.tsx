import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Container, Button, SectionHeading, Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { FeatureForm } from "@/components/FeatureForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Community",
  description:
    "Community Conversations and the Uplift The Village series — celebrating purpose-driven BIPOC brands. Join the Thrivers Circle and get featured.",
};

const whyParticipate = [
  {
    title: "Expand Your Reach",
    copy: "Get your brand in front of a fresh, engaged audience.",
  },
  {
    title: "Share Your Knowledge",
    copy: "Inspire and educate other entrepreneurs with your insights.",
  },
  {
    title: "Exclusive Bonus",
    copy: "Be featured twice or more and get entered into a raffle for a free VIP Day session.",
  },
];

export default function CommunityPage() {
  return (
    <>
      <PageHero
        eyebrow="The Thrivers Circle"
        title="Real stories. Real lessons. Real impact."
        intro="What happens when you bring purpose-driven entrepreneurs together for honest dialogue? You get Community Conversations — a video series spotlighting members of the Thrivers Circle as they share the real ups and downs of building a brand."
      />

      {/* Community Conversations feature */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <Reveal className="relative">
              <div
                aria-hidden
                className="absolute -inset-4 -z-10 rounded-[2rem] bg-plum/90"
                style={{ transform: "rotate(-2deg)" }}
              />
              <div className="overflow-hidden rounded-[1.5rem] border border-line-soft bg-paper p-3 shadow-[var(--shadow-lift)]">
                <Image
                  src="/images/graphics/community-conversations.png"
                  alt="Community Conversations video series"
                  width={1200}
                  height={1000}
                  sizes="(max-width: 1024px) 90vw, 500px"
                  className="w-full rounded-[1rem] object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <Eyebrow className="mb-6">Community Conversations</Eyebrow>
              <h2 className="text-balance text-[1.9rem] leading-[1.1] sm:text-[2.4rem]">
                This isn&rsquo;t scripted. This isn&rsquo;t sugar-coated.
              </h2>
              <p className="mt-6 text-ink-soft text-pretty">
                It&rsquo;s transparency, inspiration, and real talk — giving
                aspiring brand leaders a front-row seat to the entrepreneurial
                journey while motivating those already in the game to keep pushing
                forward.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {whyParticipate.map((w) => (
                  <div
                    key={w.title}
                    className="rounded-2xl border border-line-soft bg-paper p-5"
                  >
                    <div className="font-display text-lg leading-tight text-plum">
                      {w.title}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      {w.copy}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  href="https://www.instagram.com/reel/DIsEgvBvyHN/?igsh=MXUxdmgzdzk2Y2dqbQ=="
                  external
                  variant="outline"
                >
                  Watch Episode 1 on Instagram
                </Button>
                <Button
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeB-reFNLmZL_bKln0dcDs3LPU3eqMRmOF9HCQhx4jyU5csxQ/viewform?usp=header"
                  external
                  variant="ghost"
                  className="text-clay"
                >
                  Tap for more
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Uplift The Village + feature form */}
      <section id="feature" className="scroll-mt-24 py-16">
        <Container>
          <div className="overflow-hidden rounded-[var(--radius-card)] border border-line-soft bg-paper shadow-[var(--shadow-soft)]">
            <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
              {/* Left intro panel */}
              <div className="relative bg-plum p-8 text-paper grain sm:p-12">
                <div className="relative z-10">
                  <Eyebrow tone="gold" className="mb-6">
                    Uplift The Village
                  </Eyebrow>
                  <h2 className="text-balance text-[1.9rem] leading-[1.12] text-paper sm:text-[2.3rem]">
                    Let us shout you out.
                  </h2>
                  <p className="mt-6 text-paper/75 text-pretty">
                    Uplift The Village is a visual series by Uplift 2 Thrive
                    Consulting featuring BIPOC, Black, and Brown businesses
                    succeeding in their brand development. We&rsquo;ll stop by
                    your location, shop virtually, or experience your service —
                    and tell your story.
                  </p>
                  <p className="mt-5 text-paper/75 text-pretty">
                    As a featured business, we offer varied visual options — from
                    video reels to pro headshots — to complement a custom
                    narrative written by us that instantly connects viewers to
                    your brand story. We&rsquo;re all about building community.
                  </p>
                  <div className="mt-8">
                    <Image
                      src="/images/graphics/uplift-village.png"
                      alt="Uplift The Village"
                      width={400}
                      height={400}
                      sizes="180px"
                      className="h-28 w-auto rounded-xl object-contain"
                    />
                  </div>
                </div>
              </div>
              {/* Right form */}
              <div className="p-8 sm:p-12">
                <h3 className="text-2xl tracking-tight">Submit your business</h3>
                <p className="mt-2 text-sm text-ink-soft">
                  Complete the form and we&rsquo;ll be in touch shortly. Thank you!
                </p>
                <div className="mt-8">
                  <FeatureForm />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <Container size="narrow">
          <Reveal className="text-center">
            <h2 className="text-balance text-[1.9rem] leading-tight sm:text-[2.4rem]">
              Build your brand with people who get it.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-ink-soft">
              Join virtual & in-person meetups to celebrate wins, brainstorm
              challenges, and build momentum together.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button href="/events" variant="ink">
                See upcoming events
              </Button>
              <Button href={site.booking.discovery} external variant="outline">
                Book Discovery Call
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
