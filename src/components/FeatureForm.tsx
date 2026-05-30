"use client";

import { useState } from "react";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";

const field =
  "w-full rounded-xl border border-line bg-paper px-4 py-3 text-ink placeholder:text-muted/70 transition-colors focus:border-clay";
const label = "mb-2 block text-sm font-medium text-ink";

/** "Submit Business for Feature" form — Uplift The Village series. mailto-based. */
export function FeatureForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const lines = [
      `Name: ${d.get("name")}`,
      `Email: ${d.get("email")}`,
      `Phone: ${d.get("phone")}`,
      `Business Name: ${d.get("business")}`,
      `Type of Business: ${d.get("type")}`,
      `Location / Area: ${d.get("location")}`,
      `Website / Social: ${d.get("link")}`,
      ``,
      `How is your business thriving?`,
      `${d.get("thriving")}`,
      ``,
      `Mailing list opt-in: ${d.get("optin")}`,
    ].join("\n");
    const subject = encodeURIComponent(
      `Uplift The Village feature — ${d.get("business") || d.get("name")}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${encodeURIComponent(lines)}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <div>
        <label htmlFor="f-name" className={label}>Your Name</label>
        <input id="f-name" name="name" required className={field} placeholder="Full name" />
      </div>
      <div>
        <label htmlFor="f-email" className={label}>Email</label>
        <input id="f-email" name="email" type="email" required className={field} placeholder="you@example.com" />
      </div>
      <div>
        <label htmlFor="f-phone" className={label}>Phone Number</label>
        <input id="f-phone" name="phone" className={field} placeholder="(000) 000-0000" />
      </div>
      <div>
        <label htmlFor="f-business" className={label}>Business Name</label>
        <input id="f-business" name="business" required className={field} placeholder="Your brand" />
      </div>
      <div>
        <label htmlFor="f-type" className={label}>Type of Business</label>
        <select id="f-type" name="type" className={field} defaultValue="">
          <option value="" disabled>Select one</option>
          <option>Nonprofit</option>
          <option>Restaurant</option>
          <option>Retail</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="f-location" className={label}>Location / Geographic Area</label>
        <input id="f-location" name="location" className={field} placeholder="City, State" />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="f-link" className={label}>Website / Instagram / Facebook</label>
        <input id="f-link" name="link" className={field} placeholder="https://" />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="f-thriving" className={label}>How is your business thriving?</label>
        <textarea id="f-thriving" name="thriving" rows={4} className={cn(field, "resize-y")} placeholder="Share any good news or info about your brand with us!" />
      </div>
      <fieldset className="sm:col-span-2">
        <legend className={label}>
          I want to opt-in to the Uplift 2 Thrive mailing list for monthly updates & resources
        </legend>
        <div className="flex flex-wrap gap-4">
          {["Yes", "No", "Already a subscriber"].map((opt) => (
            <label key={opt} className="flex items-center gap-2 text-sm text-ink-soft">
              <input type="radio" name="optin" value={opt} defaultChecked={opt === "Yes"} className="accent-clay" />
              {opt}
            </label>
          ))}
        </div>
      </fieldset>
      <div className="sm:col-span-2">
        <button
          type="submit"
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-clay px-7 py-3.5 font-semibold text-paper transition-all duration-300 hover:bg-clay-deep"
        >
          Submit my business
          <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
        </button>
        <p className={cn("mt-3 text-sm text-sage transition-opacity", sent ? "opacity-100" : "opacity-0")} role="status">
          Opening your email app — we&rsquo;ll be in touch shortly. Thank you!
        </p>
      </div>
    </form>
  );
}
