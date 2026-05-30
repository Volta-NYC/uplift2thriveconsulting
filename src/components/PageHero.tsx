import { Container, Eyebrow } from "./ui";
import { cn } from "@/lib/cn";

/** Editorial hero used at the top of inner pages. */
export function PageHero({
  eyebrow,
  title,
  intro,
  children,
  align = "left",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  children?: React.ReactNode;
  align?: "left" | "center";
}) {
  return (
    <section className="relative overflow-hidden pb-12 pt-36 sm:pt-44">
      {/* brand radial atmosphere */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[42rem] w-[42rem] rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(242,169,28,0.24), transparent 62%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-48 left-[-12%] h-[36rem] w-[36rem] rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(209,26,146,0.16), transparent 62%)",
        }}
      />
      <Container className="relative">
        <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
          {eyebrow && (
            <Eyebrow className="mb-6 justify-center">{eyebrow}</Eyebrow>
          )}
          <h1 className="text-balance text-[2.7rem] leading-[0.98] sm:text-[3.6rem] md:text-[4.3rem]">
            {title}
          </h1>
          {intro && (
            <p
              className={cn(
                "mt-7 text-lg leading-relaxed text-ink-soft text-pretty sm:text-xl",
                align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl",
              )}
            >
              {intro}
            </p>
          )}
          {children && <div className="mt-9">{children}</div>}
        </div>
      </Container>
    </section>
  );
}
