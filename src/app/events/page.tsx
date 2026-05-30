import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container, Button } from "@/components/ui";
import { EventsExplorer } from "@/components/EventsExplorer";
import { events } from "@/data/events";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Virtual office hours, in-person meetups, networking, and webinars for the BIPOC business community — hosted and co-hosted by Uplift 2 Thrive.",
};

export default function EventsPage() {
  const sorted = [...events].sort((a, b) => b.start.localeCompare(a.start));

  return (
    <>
      <PageHero
        eyebrow="Community Meetups"
        title="Where momentum is built together."
        intro="Virtual & in-person events to celebrate wins, brainstorm challenges, and build your momentum. Come as you are — these spaces are casual, collaborative, and productive."
      >
        <Button href={site.booking.discovery} external>
          Book Discovery Call
        </Button>
      </PageHero>

      <section className="pb-24">
        <Container>
          <EventsExplorer events={sorted} />

          <div className="mt-12 rounded-[var(--radius-card)] bg-paper p-8 text-center">
            <p className="font-display text-xl text-plum">
              Virtual Office Hours run every 2nd & 4th Thursday.
            </p>
            <p className="mt-2 text-sm text-ink-soft">
              Open to all BIPOC business owners — drop in to brainstorm or get
              focused work done alongside the community.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
