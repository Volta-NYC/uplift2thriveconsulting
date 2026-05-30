import { Container, Button } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="grid min-h-[70vh] place-items-center pt-32">
      <Container size="narrow" className="text-center">
        <p className="eyebrow text-clay">404</p>
        <h1 className="mt-5 text-balance text-[2.6rem] leading-[1.04] sm:text-[3.4rem]">
          This page took a pivot.
        </h1>
        <p className="mx-auto mt-5 max-w-md text-ink-soft">
          The page you&rsquo;re looking for isn&rsquo;t here — but your next move
          is. Let&rsquo;s get you back on track.
        </p>
        <div className="mt-9 flex justify-center gap-4">
          <Button href="/" variant="ink">
            Back home
          </Button>
          <Button href="/services" variant="outline">
            Explore services
          </Button>
        </div>
      </Container>
    </section>
  );
}
