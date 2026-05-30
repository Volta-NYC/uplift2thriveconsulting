"use client";

import Link from "next/link";
import { useState } from "react";
import type { EventItem } from "@/data/events";
import { cn } from "@/lib/cn";

const filters = ["All", "Virtual", "In person"] as const;
type Filter = (typeof filters)[number];

export function EventsExplorer({ events }: { events: EventItem[] }) {
  const [filter, setFilter] = useState<Filter>("All");
  const shown =
    filter === "All" ? events : events.filter((e) => e.category === filter);

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            aria-pressed={filter === f}
            className={cn(
              "rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300",
              filter === f
                ? "border-ink bg-ink text-paper"
                : "border-line text-ink-soft hover:border-ink",
            )}
          >
            {f}
          </button>
        ))}
        <span className="ml-auto text-sm text-muted">
          {shown.length} {shown.length === 1 ? "event" : "events"}
        </span>
      </div>

      <ul className="mt-8 divide-y divide-line-soft border-y border-line-soft">
        {shown.map((event) => (
          <li key={event.slug}>
            <Link
              href={`/events/${event.slug}`}
              className="group grid gap-4 py-7 transition-colors sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-8"
            >
              {/* Date block */}
              <div className="flex items-baseline gap-3 sm:w-32 sm:flex-col sm:items-start sm:gap-0">
                <div className="font-display text-4xl leading-none text-clay">
                  {new Date(event.start).getDate()}
                </div>
                <div className="text-sm uppercase tracking-[0.16em] text-muted">
                  {new Date(event.start).toLocaleString("en-US", {
                    month: "short",
                    year: "numeric",
                  })}
                </div>
              </div>

              {/* Body */}
              <div>
                <div className="flex flex-wrap items-center gap-2.5">
                  <span
                    className={cn(
                      "rounded-full px-3 py-0.5 text-xs font-medium",
                      event.category === "Virtual"
                        ? "bg-sage/15 text-sage"
                        : "bg-clay/12 text-clay",
                    )}
                  >
                    {event.category}
                  </span>
                  <span className="text-xs text-muted">{event.timeLabel}</span>
                  <span className="text-xs font-semibold text-plum">
                    {event.cost}
                  </span>
                </div>
                <h3 className="mt-2 text-xl tracking-tight transition-colors group-hover:text-clay sm:text-2xl">
                  {event.title}
                </h3>
                <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-ink-soft">
                  {event.excerpt}
                </p>
              </div>

              {/* Arrow */}
              <span
                aria-hidden
                className="hidden h-11 w-11 place-items-center rounded-full border border-line text-ink transition-all duration-300 group-hover:border-clay group-hover:bg-clay group-hover:text-paper sm:grid"
              >
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {shown.length === 0 && (
        <p className="py-12 text-center text-muted">
          No events in this category right now — check back soon.
        </p>
      )}
    </div>
  );
}
