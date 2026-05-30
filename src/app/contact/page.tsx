import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Container, Button, Eyebrow } from "@/components/ui";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Have a question? Send Uplift 2 Thrive Consulting a note and we'll respond within 48 hours — or book a free discovery call.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's start the conversation."
        intro="Have a question? Send us a note and we'll respond within 48 hours. Ready to dive in? Book a complimentary discovery call."
      />

      <section className="pb-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            {/* Form */}
            <div className="rounded-[var(--radius-card)] border border-line-soft bg-paper p-8 shadow-[var(--shadow-soft)] sm:p-10">
              <h2 className="text-2xl tracking-tight">Send a message</h2>
              <p className="mt-2 text-sm text-ink-soft">
                Tell us a little about your brand and where you&rsquo;d like
                support.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            {/* Details + booking */}
            <div className="flex flex-col gap-6">
              <div className="rounded-[var(--radius-card)] bg-plum p-8 text-paper grain sm:p-10">
                <Eyebrow tone="gold" className="mb-6">
                  Prefer to talk?
                </Eyebrow>
                <h3 className="text-2xl text-paper">
                  Book a free discovery call.
                </h3>
                <p className="mt-3 text-paper/70">
                  Schedule a complimentary Power 2 Inspire Discovery Session to
                  explore your journey and map your next move.
                </p>
                <div className="mt-7">
                  <Button href={site.booking.discovery} external>
                    Book Discovery Call
                  </Button>
                </div>
              </div>

              <div className="grid gap-px overflow-hidden rounded-[var(--radius-card)] border border-line-soft bg-line-soft sm:grid-cols-2">
                <div className="bg-canvas p-6">
                  <p className="eyebrow text-clay">Email</p>
                  <a
                    href={`mailto:${site.email}`}
                    className="link-underline mt-2 inline-block text-sm font-medium text-ink"
                  >
                    {site.email}
                  </a>
                </div>
                <div className="bg-canvas p-6">
                  <p className="eyebrow text-clay">Phone</p>
                  <a
                    href={site.phoneHref}
                    className="link-underline mt-2 inline-block text-sm font-medium text-ink"
                  >
                    {site.phone}
                  </a>
                </div>
                <div className="bg-canvas p-6 sm:col-span-2">
                  <p className="eyebrow text-clay">Mailing Address</p>
                  <p className="mt-2 text-sm font-medium text-ink">
                    {site.address.line1}
                    <br />
                    {site.address.city}, {site.address.state}{" "}
                    {site.address.zip}, {site.address.country}
                  </p>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[var(--radius-card)]">
                <Image
                  src="/images/people/u2t-session-3.webp"
                  alt="Uplift 2 Thrive Consulting working with clients"
                  width={881}
                  height={1024}
                  sizes="(max-width: 1024px) 90vw, 460px"
                  className="aspect-[16/10] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
