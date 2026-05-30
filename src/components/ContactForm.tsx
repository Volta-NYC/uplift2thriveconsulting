"use client";

import { useState } from "react";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";

const fieldClass =
  "w-full rounded-xl border border-line bg-paper px-4 py-3 text-ink placeholder:text-muted/70 transition-colors focus:border-clay";
const labelClass = "mb-2 block text-sm font-medium text-ink";

/**
 * Progressive-enhancement contact form. With no backend available, submission
 * composes a pre-filled email to the business — so the form always works.
 */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent(`Website enquiry from ${name || "a visitor"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className={labelClass}>
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          autoComplete="name"
          placeholder="Your name"
          className={fieldClass}
        />
      </div>
      <div>
        <label htmlFor="email" className={labelClass}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          className={fieldClass}
        />
      </div>
      <div>
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us a little about your brand and where you'd like support…"
          className={cn(fieldClass, "resize-y")}
        />
      </div>
      <button
        type="submit"
        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-clay px-7 py-3.5 font-semibold text-paper transition-all duration-300 hover:bg-clay-deep sm:w-auto"
      >
        Send message
        <span aria-hidden className="transition-transform group-hover:translate-x-1">
          →
        </span>
      </button>
      <p
        className={cn(
          "text-sm text-sage transition-opacity",
          sent ? "opacity-100" : "opacity-0",
        )}
        role="status"
      >
        Opening your email app… if nothing happens, write us at {site.email}.
      </p>
      <p className="text-xs text-muted">
        We typically respond within 48 hours.
      </p>
    </form>
  );
}
