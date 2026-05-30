import Link from "next/link";
import { cn } from "@/lib/cn";

/* ----------------------------- Container ----------------------------- */
export function Container({
  children,
  className,
  size = "default",
}: {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "wide" | "narrow";
}) {
  const max =
    size === "wide"
      ? "max-w-[88rem]"
      : size === "narrow"
        ? "max-w-3xl"
        : "max-w-6xl";
  return (
    <div className={cn("mx-auto w-full px-5 sm:px-8", max, className)}>
      {children}
    </div>
  );
}

/* ------------------------------- Button ------------------------------ */
type ButtonVariant = "primary" | "ink" | "outline" | "ghost";

const buttonBase =
  "group inline-flex items-center justify-center gap-2 rounded-full text-[0.94rem] font-semibold tracking-tight transition-all duration-300 ease-[var(--ease-out-expo)] disabled:opacity-50";

const buttonVariants: Record<ButtonVariant, string> = {
  primary:
    "bg-clay text-paper px-7 py-3.5 shadow-[0_10px_30px_-12px_rgba(168,18,113,0.65)] hover:bg-clay-deep hover:-translate-y-0.5",
  ink: "bg-ink text-paper px-7 py-3.5 hover:bg-plum-deep hover:-translate-y-0.5",
  outline:
    "border border-line text-ink px-7 py-3.5 hover:border-ink hover:bg-ink hover:text-paper",
  ghost: "text-ink px-2 py-1 hover:text-clay",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  external,
  ...props
}: {
  href?: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  external?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const classes = cn(buttonBase, buttonVariants[variant], className);
  const inner = (
    <>
      {children}
      <span
        aria-hidden
        className="translate-x-0 transition-transform duration-300 ease-[var(--ease-out-expo)] group-hover:translate-x-1"
      >
        →
      </span>
    </>
  );

  if (href) {
    if (external || href.startsWith("http") || href.startsWith("tel") || href.startsWith("mailto")) {
      return (
        <a
          href={href}
          className={classes}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        >
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {inner}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {inner}
    </button>
  );
}

/* ------------------------------ Eyebrow ------------------------------ */
export function Eyebrow({
  children,
  className,
  tone = "clay",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "clay" | "gold" | "paper" | "muted";
}) {
  const color =
    tone === "gold"
      ? "text-gold"
      : tone === "paper"
        ? "text-gold-soft"
        : tone === "muted"
          ? "text-muted"
          : "text-clay";
  return (
    <span className={cn("eyebrow inline-flex items-center gap-2.5", color, className)}>
      <span aria-hidden className="h-px w-7 bg-current opacity-60" />
      {children}
    </span>
  );
}

/* --------------------------- Section header -------------------------- */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "ink",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  tone?: "ink" | "paper";
  className?: string;
}) {
  return (
    <div
      className={cn(
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl",
        className,
      )}
    >
      {eyebrow && (
        <Eyebrow tone={tone === "paper" ? "gold" : "clay"} className="mb-5">
          {eyebrow}
        </Eyebrow>
      )}
      <h2
        className={cn(
          "text-balance text-[2.1rem] leading-[1.04] sm:text-[2.7rem] md:text-[3.1rem]",
          tone === "paper" ? "text-paper" : "text-ink",
        )}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed text-pretty",
            tone === "paper" ? "text-paper/70" : "text-ink-soft",
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
