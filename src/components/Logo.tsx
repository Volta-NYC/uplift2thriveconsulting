import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * Brand logo. Uses the colour mark on light surfaces and a white silhouette on
 * dark surfaces (tone="paper"). Both are transparent PNGs generated from the
 * supplied logo via scripts/process-logo.mjs.
 */
export function Logo({
  tone = "ink",
  className,
}: {
  tone?: "ink" | "paper";
  className?: string;
}) {
  const src =
    tone === "paper"
      ? "/images/brand/full-logo-white.png"
      : "/images/brand/full-logo.png";
  return (
    <Link
      href="/"
      aria-label="Uplift 2 Thrive Consulting — home"
      className={cn("group inline-flex items-center", className)}
    >
      <Image
        src={src}
        alt="Uplift 2 Thrive Consulting"
        width={870}
        height={205}
        priority
        className="h-9 w-auto transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:scale-[1.03] sm:h-10"
      />
    </Link>
  );
}
