import Image from "next/image";
import type { Service } from "@/data/services";
import { cn } from "@/lib/cn";

export function ServiceCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-line-soft bg-paper shadow-[var(--shadow-soft)] transition-all duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
        <div className="absolute left-4 top-4 rounded-full bg-paper/90 px-3 py-1 font-display text-sm tracking-tight text-plum backdrop-blur">
          {String(index + 1).padStart(2, "0")}
        </div>
        <div className="absolute bottom-4 right-4 flex items-baseline gap-1.5 rounded-full bg-clay px-4 py-1.5 text-paper">
          <span className="font-display text-lg leading-none">{service.price}</span>
          <span className="text-xs opacity-80">/ {service.unit}</span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-7">
        <h3 className="text-2xl tracking-tight">{service.name}</h3>
        <p className="mt-1.5 text-sm font-medium text-clay">{service.tagline}</p>
        <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-soft">
          {service.summary}
        </p>

        <ul className="mt-6 space-y-2.5 border-t border-line-soft pt-6">
          {service.includes.map((item) => (
            <li key={item} className="flex gap-3 text-sm text-ink-soft">
              <span
                aria-hidden
                className="mt-[0.45rem] h-1.5 w-1.5 flex-none rounded-full bg-gold"
              />
              {item}
            </li>
          ))}
        </ul>

        {/* Pinned to the bottom so buttons align across cards of varying content */}
        <div className="mt-auto">
          <div className="mt-7 flex min-h-[2.75rem] items-center border-t border-line-soft pt-5">
            <span className="text-xs uppercase leading-snug tracking-[0.16em] text-muted">
              {service.cadence}
            </span>
          </div>
          <a
            href={service.booking}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition-all duration-300 hover:bg-clay",
            )}
          >
            Schedule Your Session
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </article>
  );
}
