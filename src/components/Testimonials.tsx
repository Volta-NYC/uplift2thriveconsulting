"use client";

import Image from "next/image";
import { useState } from "react";
import { testimonials } from "@/data/testimonials";
import { Container, Eyebrow } from "./ui";
import { cn } from "@/lib/cn";

export function Testimonials() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  return (
    <section className="relative overflow-hidden bg-ink py-24 text-paper grain sm:py-32">
      <Container className="relative z-10">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          {/* Portrait stack */}
          <div className="order-2 lg:order-1">
            <div className="flex flex-wrap gap-2.5">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  onClick={() => setActive(i)}
                  aria-label={`Read testimonial from ${t.name}`}
                  aria-pressed={i === active}
                  className={cn(
                    "relative h-14 w-14 overflow-hidden rounded-full transition-all duration-300",
                    i === active
                      ? "ring-2 ring-gold ring-offset-2 ring-offset-ink"
                      : "opacity-50 grayscale hover:opacity-90 hover:grayscale-0",
                  )}
                >
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
            <p className="mt-8 max-w-xs text-sm leading-relaxed text-paper/55">
              Real founders. Real pivots. Real momentum. A few words from the
              entrepreneurs we've walked beside.
            </p>
          </div>

          {/* Quote */}
          <figure className="order-1 lg:order-2">
            <Eyebrow tone="gold" className="mb-7">
              Client Stories
            </Eyebrow>
            <span
              aria-hidden
              className="block font-display text-7xl leading-none text-gold/40"
            >
              &ldquo;
            </span>
            <blockquote
              key={active}
              className="mt-2 text-balance font-display text-[1.6rem] leading-[1.3] text-paper sm:text-[2.1rem]"
            >
              {current.quote}
            </blockquote>
            <figcaption className="mt-7 flex items-center gap-3">
              <span className="h-px w-8 bg-gold" />
              <span>
                <span className="font-semibold text-paper">{current.name}</span>
                <span className="text-paper/55"> — {current.company}</span>
              </span>
            </figcaption>
          </figure>
        </div>
      </Container>
    </section>
  );
}
