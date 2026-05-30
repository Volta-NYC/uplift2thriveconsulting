"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Button } from "./ui";
import { nav, site } from "@/data/site";
import { cn } from "@/lib/cn";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[var(--ease-out-expo)]",
        scrolled
          ? "border-b border-line-soft bg-canvas/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-[88rem] items-center justify-between px-5 py-4 sm:px-8">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "link-underline text-[0.92rem] font-medium tracking-tight transition-colors",
                  active ? "text-clay" : "text-ink-soft hover:text-ink",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href={site.booking.discovery} variant="ink" external className="px-6 py-3 text-sm">
            Book Discovery Call
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-full border border-line lg:hidden"
        >
          <span
            className={cn(
              "h-[1.5px] w-5 bg-ink transition-all duration-300",
              open && "translate-y-[6.5px] rotate-45",
            )}
          />
          <span
            className={cn(
              "h-[1.5px] w-5 bg-ink transition-all duration-300",
              open && "opacity-0",
            )}
          />
          <span
            className={cn(
              "h-[1.5px] w-5 bg-ink transition-all duration-300",
              open && "-translate-y-[6.5px] -rotate-45",
            )}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 top-0 z-40 flex flex-col bg-canvas px-5 pb-10 pt-24 transition-all duration-500 ease-[var(--ease-out-expo)] lg:hidden",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0",
        )}
      >
        <nav className="flex flex-col" aria-label="Mobile">
          {nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className="border-b border-line-soft py-4 font-display text-3xl tracking-tight text-ink"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mt-8">
          <Button href={site.booking.discovery} variant="primary" external className="w-full">
            Book Discovery Call
          </Button>
        </div>
        <p className="mt-auto pt-8 text-sm text-muted">
          <a href={`mailto:${site.email}`} className="link-underline">
            {site.email}
          </a>
          <br />
          <a href={site.phoneHref} className="link-underline">
            {site.phone}
          </a>
        </p>
      </div>
    </header>
  );
}
