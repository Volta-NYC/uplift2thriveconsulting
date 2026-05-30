import Image from "next/image";
import Link from "next/link";
import { Container, Button, Eyebrow, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { ServiceCard } from "@/components/ServiceCard";
import { Testimonials } from "@/components/Testimonials";
import { services } from "@/data/services";
import { site, validMethod, journey, press } from "@/data/site";

export default function HomePage() {
  return (
    <>
      {/* ----------------------------- HERO ----------------------------- */}
      <section className="relative overflow-hidden pt-32 sm:pt-36">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 right-[-15%] h-[46rem] w-[46rem] rounded-full opacity-70 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(242,169,28,0.28), transparent 60%)",
          }}
        />
        <Container className="relative">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            {/* Copy */}
            <div className="relative z-10">
              <Reveal>
                <Eyebrow className="mb-7">Brand Strategy · Coaching · Community</Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="text-balance text-[2.9rem] leading-[0.95] sm:text-[3.8rem] md:text-[4.6rem]">
                  Partners for
                  <br />
                  purpose-driven{" "}
                  <span className="relative whitespace-nowrap text-clay">
                    BIPOC
                    <svg
                      aria-hidden
                      viewBox="0 0 200 12"
                      className="absolute -bottom-2 left-0 w-full text-gold"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M2 9 C50 2, 150 2, 198 8"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>{" "}
                  brands.
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-8 max-w-lg text-lg leading-relaxed text-ink-soft text-pretty">
                  We help purpose-driven entrepreneurs turn ideas into clear
                  strategy, aligned action, and sustainable growth. You bring the
                  vision — we build the strategy to{" "}
                  <em className="font-display not-italic text-plum">move it forward.</em>
                </p>
              </Reveal>
              <Reveal delay={240}>
                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <Button href={site.booking.discovery} external>
                    Book Discovery Call
                  </Button>
                  <Button href="/services" variant="outline">
                    Explore Services
                  </Button>
                </div>
              </Reveal>
              <Reveal delay={320}>
                <div className="mt-12 flex items-center gap-7 border-t border-line-soft pt-7">
                  <div>
                    <div className="font-display text-3xl text-plum">20+</div>
                    <div className="mt-1 text-xs uppercase tracking-[0.14em] text-muted">
                      Years of business <br />infrastructure expertise
                    </div>
                  </div>
                  <div className="h-12 w-px bg-line-soft" />
                  <div>
                    <div className="font-display text-3xl text-plum">V.A.L.I.D.</div>
                    <div className="mt-1 text-xs uppercase tracking-[0.14em] text-muted">
                      Our signature <br />growth method
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Portrait composition */}
            <Reveal delay={200} className="relative">
              <div className="relative mx-auto max-w-md lg:ml-auto lg:mr-0">
                <div
                  aria-hidden
                  className="absolute -inset-4 -z-10 rounded-[2rem] bg-clay/12"
                  style={{ transform: "rotate(-3deg)" }}
                />
                <div className="overflow-hidden rounded-[1.75rem] shadow-[var(--shadow-lift)]">
                  <Image
                    src="/images/people/chante-portrait.webp"
                    alt={`${site.founder.name}, ${site.founder.role} of ${site.name}`}
                    width={768}
                    height={1154}
                    priority
                    sizes="(max-width: 1024px) 90vw, 460px"
                    className="h-full w-full object-cover"
                  />
                </div>
                {/* Floating name card */}
                <div className="absolute -bottom-5 -left-5 rounded-2xl border border-line-soft bg-paper/95 px-5 py-4 shadow-[var(--shadow-soft)] backdrop-blur">
                  <div className="font-display text-lg leading-none text-ink">
                    {site.founder.name}
                  </div>
                  <div className="mt-1.5 text-xs uppercase tracking-[0.16em] text-clay">
                    {site.founder.role}
                  </div>
                </div>
                {/* Floating tag */}
                <div className="absolute -right-3 top-8 rotate-3 rounded-full bg-plum px-4 py-2 font-display text-sm text-paper shadow-[var(--shadow-soft)]">
                  Building Brands That Move
                </div>
              </div>
            </Reveal>
          </div>
        </Container>

        {/* Press marquee */}
        <div className="mt-20 border-y border-line-soft py-5 sm:mt-24">
          <div className="marquee-mask overflow-hidden">
            <div className="flex w-max animate-marquee items-center gap-12">
              {[...press, ...press].map((p, i) => (
                <span
                  key={i}
                  className="flex items-center gap-3 whitespace-nowrap text-sm text-muted"
                >
                  <span className="eyebrow text-clay/70">As featured in</span>
                  <span className="font-display text-lg text-ink-soft">
                    {p.outlet}
                  </span>
                  <span aria-hidden className="text-gold">✦</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------- WHAT WE DO -------------------------- */}
      <section className="py-24 sm:py-32">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <Reveal className="relative">
              <div className="relative grid grid-cols-2 gap-4">
                <Image
                  src="/images/stock/stock-4.webp"
                  alt="Entrepreneurs collaborating on brand strategy"
                  width={1024}
                  height={683}
                  sizes="(max-width: 1024px) 50vw, 300px"
                  className="mt-10 aspect-[3/4] rounded-2xl object-cover shadow-[var(--shadow-soft)]"
                />
                <Image
                  src="/images/people/chante-session-wide.webp"
                  alt="Chanté Ramsey leading a working session"
                  width={1024}
                  height={681}
                  sizes="(max-width: 1024px) 50vw, 300px"
                  className="aspect-[3/4] rounded-2xl object-cover shadow-[var(--shadow-soft)]"
                />
              </div>
            </Reveal>

            <Reveal delay={120}>
              <SectionHeading
                eyebrow="What We Do"
                title="From ideas to growth — guided every step of the way."
                intro="Whether you're launching a new venture or expanding an existing one, we provide business coaching, brand development, and operational guidance for entrepreneurs ready to scale."
              />
              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                <div className="rounded-2xl border border-line-soft bg-paper p-6">
                  <div className="font-display text-xl text-plum">Launch Assurance</div>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    We guide you from idea to execution — turning early concepts
                    into a clear, confident path to market.
                  </p>
                </div>
                <div className="rounded-2xl border border-line-soft bg-paper p-6">
                  <div className="font-display text-xl text-plum">Growth Support</div>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    We help you pivot, strengthen, and scale for long-term
                    success — with monthly community support and 1:1 coaching.
                  </p>
                </div>
              </div>
              <p className="mt-8 text-ink-soft">
                With monthly community support, virtual tools, and 1:1 coaching,
                we keep you focused, accountable, and moving for lasting impact.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* --------------------------- SERVICES --------------------------- */}
      <section id="services" className="bg-paper/60 py-24 sm:py-32">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <Reveal>
              <SectionHeading
                eyebrow="Our Services"
                title="Coaching built around where you are."
                intro="Through collaborative strategy sessions and guided planning, we help you clarify your vision, strengthen your positioning, find growth opportunities, and build practical action plans."
              />
            </Reveal>
            <Reveal delay={120}>
              <Button href="/services" variant="ghost" className="text-clay">
                View all services
              </Button>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-7 sm:grid-cols-2">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={i * 80} className="h-full">
                <ServiceCard service={service} index={i} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ----------------------------- VALID ---------------------------- */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <Container>
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="The V.A.L.I.D. Approach"
              title="A method that turns overwhelm into momentum."
              intro="Chanté channels two decades of experience through five principles that propel businesses toward unprecedented success."
              className="mx-auto"
            />
          </Reveal>

          <div className="mt-16 grid gap-px overflow-hidden rounded-[var(--radius-card)] border border-line-soft bg-line-soft sm:grid-cols-2 lg:grid-cols-5">
            {validMethod.map((item, i) => (
              <Reveal
                key={item.letter}
                delay={i * 70}
                className="group flex flex-col bg-canvas p-7 transition-colors duration-500 hover:bg-plum"
              >
                <span className="font-display text-6xl leading-none text-clay transition-colors duration-500 group-hover:text-gold">
                  {item.letter}
                </span>
                <h3 className="mt-5 text-xl tracking-tight transition-colors duration-500 group-hover:text-paper">
                  {item.word}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft transition-colors duration-500 group-hover:text-paper/70">
                  {item.blurb}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* --------------------------- PROGRAMS --------------------------- */}
      <section className="py-8 sm:py-12">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Beyond 1:1"
              title="Programs & experiences to keep you moving."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                href: "/aspire-higher",
                tag: "Cohort Coaching",
                title: "Aspire Higher",
                copy: "A boot-camp–style, human-centered growth lab. Choose a 2-hour intensive or a 60-day cohort blending 1:1 coaching with group brainstorming.",
                image: "/images/graphics/aspire-header.png",
              },
              {
                href: "/labs-workshops",
                tag: "For Teams & Orgs",
                title: "Labs & Workshops",
                copy: "Brand Builder Seminars, Roadmap 2 Vision, and Business Clinics. We don't deliver lectures — we facilitate transformation and implementation.",
                image: "/images/graphics/labs-workshops.png",
              },
              {
                href: "/community",
                tag: "The Thrivers Circle",
                title: "Community Conversations",
                copy: "A video series spotlighting purpose-driven entrepreneurs sharing the real ups and downs of building a brand. Unscripted. Honest. Inspiring.",
                image: "/images/graphics/community-conversations.png",
              },
            ].map((p, i) => (
              <Reveal key={p.href} delay={i * 90}>
                <Link
                  href={p.href}
                  className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-line-soft bg-paper shadow-[var(--shadow-soft)] transition-all duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-canvas">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <span className="eyebrow text-clay">{p.tag}</span>
                    <h3 className="mt-3 text-2xl tracking-tight">{p.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                      {p.copy}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-plum">
                      Learn more
                      <span
                        aria-hidden
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------------------------- JOURNEY --------------------------- */}
      <section className="py-24 sm:py-32">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <SectionHeading
                eyebrow="Take The Next Steps"
                title="Here's how working together looks."
                intro="A clear, human-centered path from first conversation to measurable progress."
              />
              <div className="mt-8">
                <Button href={site.booking.discovery} external>
                  Start the journey
                </Button>
              </div>
            </Reveal>

            <div className="grid gap-px overflow-hidden rounded-[var(--radius-card)] border border-line-soft bg-line-soft sm:grid-cols-2">
              {journey.map((step, i) => (
                <Reveal
                  key={step.title}
                  delay={i * 80}
                  className="bg-canvas p-7"
                >
                  <span className="font-display text-2xl text-gold">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 text-xl tracking-tight">{step.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">
                    {step.blurb}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* -------------------------- TESTIMONIALS ------------------------ */}
      <Testimonials />

      {/* ----------------------------- ABOUT ---------------------------- */}
      <section className="py-24 sm:py-32">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <Reveal>
              <Eyebrow className="mb-6">About Chanté Ramsey</Eyebrow>
              <h2 className="text-balance text-[2.1rem] leading-[1.05] sm:text-[2.7rem]">
                Sales without storytelling leaves brands stuck. We change that.
              </h2>
              <div className="mt-7 space-y-5 text-ink-soft text-pretty">
                <p>
                  Uplift 2 Thrive was born from a groundbreaking conversation
                  that revealed a common gap for entrepreneurs: sales without
                  clear brand storytelling, aligned mindset, and supportive
                  systems.
                </p>
                <p>
                  Chanté is the driving force behind U2T, drawing on two decades
                  of business infrastructure management, financial expertise, and
                  problem-solving acumen — collaborating with the businesses she
                  holds dear and guiding entrepreneurs through growth with a
                  customer-centric perspective.
                </p>
              </div>
              <div className="mt-8">
                <Button href="/about" variant="outline">
                  Read the full story
                </Button>
              </div>
            </Reveal>

            <Reveal delay={120} className="relative">
              <div
                aria-hidden
                className="absolute -inset-4 -z-10 rounded-[2rem] bg-gold/15"
                style={{ transform: "rotate(3deg)" }}
              />
              <Image
                src="/images/people/chante-about.webp"
                alt="Chanté Ramsey, Founder & CEO of Uplift 2 Thrive Consulting"
                width={681}
                height={1024}
                sizes="(max-width: 1024px) 90vw, 420px"
                className="w-full rounded-[1.75rem] object-cover shadow-[var(--shadow-lift)]"
              />
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
