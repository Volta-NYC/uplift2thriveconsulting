import { Container, Eyebrow } from "./ui";

/**
 * Shared chrome + typography for legal pages. Children are authored as semantic
 * HTML and styled here so privacy / terms read cleanly and consistently.
 */
export function LegalShell({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="pt-32 sm:pt-40">
      <Container size="narrow">
        <Eyebrow className="mb-5">Legal</Eyebrow>
        <h1 className="text-balance text-[2.4rem] leading-[1.04] sm:text-[3.1rem]">
          {title}
        </h1>
        <p className="mt-4 text-sm text-muted">Last updated: {updated}</p>
      </Container>

      <Container size="narrow" className="py-14">
        <div
          className="
            space-y-5 leading-relaxed text-ink-soft
            [&_a]:font-medium [&_a]:text-clay [&_a]:underline [&_a]:underline-offset-2
            [&_h2]:mb-3 [&_h2]:mt-12 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:tracking-tight [&_h2]:text-ink
            [&_h3]:mb-2 [&_h3]:mt-7 [&_h3]:font-display [&_h3]:text-lg [&_h3]:text-plum
            [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5 [&_ul]:marker:text-gold
            [&_ol]:list-decimal [&_ol]:space-y-1.5 [&_ol]:pl-5 [&_ol]:marker:text-muted
            [&_strong]:font-semibold [&_strong]:text-ink
          "
        >
          {children}
        </div>
      </Container>
    </div>
  );
}
