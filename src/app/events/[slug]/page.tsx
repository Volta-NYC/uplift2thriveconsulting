import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, Button, Eyebrow } from "@/components/ui";
import { events } from "@/data/events";
import { cn } from "@/lib/cn";

export function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);
  if (!event) return {};
  return {
    title: event.title,
    description: event.excerpt,
  };
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);
  if (!event) notFound();

  const related = events
    .filter((e) => e.slug !== event.slug)
    .slice(0, 3);

  return (
    <article className="pt-32 sm:pt-36">
      <Container size="narrow">
        <Link
          href="/events"
          className="link-underline inline-flex items-center gap-2 text-sm font-medium text-ink-soft"
        >
          <span aria-hidden>←</span> All events
        </Link>

        <div className="mt-8 flex flex-wrap items-center gap-2.5">
          <span
            className={cn(
              "rounded-full px-3 py-1 text-xs font-medium",
              event.category === "Virtual"
                ? "bg-sage/15 text-sage"
                : "bg-clay/12 text-clay",
            )}
          >
            {event.category}
          </span>
          <span className="rounded-full bg-plum/10 px-3 py-1 text-xs font-semibold text-plum">
            {event.cost}
          </span>
          {event.recurring && (
            <span className="rounded-full border border-line px-3 py-1 text-xs text-muted">
              {event.recurring}
            </span>
          )}
        </div>

        <h1 className="mt-5 text-balance text-[2.3rem] leading-[1.04] sm:text-[3rem]">
          {event.title}
        </h1>
        <p className="mt-4 font-display text-xl text-clay">
          {event.dateLabel} · {event.timeLabel}
        </p>
      </Container>

      <Container size="narrow" className="mt-12">
        <div className="grid gap-12 md:grid-cols-[1.4fr_0.85fr]">
          {/* Body */}
          <div className="space-y-5 text-lg leading-relaxed text-ink-soft text-pretty">
            {event.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            {event.rsvpUrl && (
              <div className="pt-4">
                <Button href={event.rsvpUrl} external>
                  {event.rsvpLabel ?? "RSVP"}
                </Button>
              </div>
            )}

            {event.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-6">
                {event.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-line-soft px-3 py-1 text-xs capitalize text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Details sidebar */}
          <aside className="h-fit rounded-[var(--radius-card)] border border-line-soft bg-paper p-7">
            <Eyebrow className="mb-5">Details</Eyebrow>
            <dl className="space-y-5 text-sm">
              <div>
                <dt className="text-muted">Date</dt>
                <dd className="mt-0.5 font-medium text-ink">{event.dateLabel}</dd>
              </div>
              <div>
                <dt className="text-muted">Time</dt>
                <dd className="mt-0.5 font-medium text-ink">{event.timeLabel}</dd>
              </div>
              <div>
                <dt className="text-muted">Cost</dt>
                <dd className="mt-0.5 font-medium text-ink">{event.cost}</dd>
              </div>
              <div>
                <dt className="text-muted">Venue</dt>
                <dd className="mt-0.5 font-medium text-ink">
                  {event.venue.name}
                  {event.venue.address && (
                    <>
                      <br />
                      <span className="font-normal text-ink-soft">
                        {event.venue.address}
                        {event.venue.cityLine && (
                          <>
                            <br />
                            {event.venue.cityLine}
                          </>
                        )}
                      </span>
                    </>
                  )}
                </dd>
                {event.venue.mapHref && (
                  <a
                    href={event.venue.mapHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline mt-1 inline-block text-xs font-medium text-clay"
                  >
                    View on Google Maps ↗
                  </a>
                )}
              </div>
              <div>
                <dt className="text-muted">Organizer</dt>
                <dd className="mt-0.5 font-medium text-ink">
                  {event.organizer.name}
                  {event.organizer.email && (
                    <>
                      <br />
                      <a
                        href={`mailto:${event.organizer.email}`}
                        className="link-underline font-normal text-clay"
                      >
                        {event.organizer.email}
                      </a>
                    </>
                  )}
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </Container>

      {/* Related */}
      <Container size="narrow" className="mt-20 border-t border-line-soft py-16">
        <Eyebrow className="mb-7">More events</Eyebrow>
        <div className="grid gap-4 sm:grid-cols-3">
          {related.map((e) => (
            <Link
              key={e.slug}
              href={`/events/${e.slug}`}
              className="group rounded-2xl border border-line-soft bg-paper p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]"
            >
              <div className="text-xs uppercase tracking-[0.14em] text-muted">
                {e.dateLabel}
              </div>
              <div className="mt-2 font-display text-lg leading-tight tracking-tight transition-colors group-hover:text-clay">
                {e.title}
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </article>
  );
}
