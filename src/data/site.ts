/**
 * Core business identity for Uplift 2 Thrive Consulting LLC.
 * Every value here is extracted from the original site's source content —
 * no invented facts.
 */

export const site = {
  name: "Uplift 2 Thrive Consulting",
  shortName: "Uplift 2 Thrive",
  abbr: "U2T",
  legalName: "Uplift 2 Thrive Consulting LLC",
  tagline: "Partners For Purpose-Driven BIPOC Brands",
  subTagline: "Building Brands That Move",
  description:
    "A purpose-driven consulting and coaching ecosystem designed for BIPOC entrepreneurs and nonprofit leaders ready to pivot with clarity, confidence, and sustainability.",
  url: "https://uplift2thriveconsulting.com",
  email: "chante@uplift2thriveconsulting.com",
  phone: "646-296-4132",
  phoneHref: "tel:+16462964132",
  address: {
    line1: "PO Box 380, Madison Station",
    city: "New York",
    state: "NY",
    zip: "10018",
    country: "United States",
  },
  founder: {
    name: "Chanté Ramsey",
    role: "Founder & CEO",
  },
  booking: {
    discovery: "https://calendly.com/uplift2thriveconsulting/u2tdiscoverycall",
  },
  social: {
    instagram: "https://www.instagram.com/uplift2thriveconsulting/",
  },
} as const;

/** Primary navigation structure. */
export const nav: { label: string; href: string }[] = [
  { label: "Services", href: "/services" },
  { label: "Aspire Higher", href: "/aspire-higher" },
  { label: "Labs & Workshops", href: "/labs-workshops" },
  { label: "Community", href: "/community" },
  { label: "Events", href: "/events" },
  { label: "About", href: "/about" },
];

/** The V.A.L.I.D. method — Chanté Ramsey's signature framework. */
export const validMethod: { letter: string; word: string; blurb: string }[] = [
  {
    letter: "V",
    word: "Vision",
    blurb: "Clarify the brand you're really building and where it's headed.",
  },
  {
    letter: "A",
    word: "Action",
    blurb: "Translate ideas into aligned, practical next moves you can implement now.",
  },
  {
    letter: "L",
    word: "Leadership",
    blurb: "Lead with confidence, supported by wellness and human-centered systems.",
  },
  {
    letter: "I",
    word: "Intersection",
    blurb: "Connect strategy, storytelling, and community into one integrated experience.",
  },
  {
    letter: "D",
    word: "Determination",
    blurb: "Stay accountable and resilient so momentum becomes measurable progress.",
  },
];

/** The four-step client journey ("Take The Next Steps"). */
export const journey: { title: string; blurb: string }[] = [
  {
    title: "Getting Started",
    blurb:
      "Schedule a complimentary Power 2 Inspire Discovery Session to explore your journey and dive into an elevation experience.",
  },
  {
    title: "1:1 Coaching",
    blurb:
      "Book your service to receive your client session prep guide, then a post-session recap and action plan.",
  },
  {
    title: "Community Meetups",
    blurb:
      "Virtual & in-person events to celebrate wins, brainstorm challenges, and build your momentum.",
  },
  {
    title: "Virtual Resources",
    blurb:
      "Access to unlimited templates and guides for your business development via the app and newsletter.",
  },
];

/** Press & media features for Chanté Ramsey / U2T. */
export const press: { outlet: string; title: string; href: string }[] = [
  {
    outlet: "Style N Soul",
    title: "Issue 23 Feature",
    href: "https://www.magcloud.com/browse/issue/3267177",
  },
  {
    outlet: "Humans of Fuzia",
    title: "Helping Purpose-Driven Businesses Grow With Clarity & Impact",
    href: "https://humansoffuzia.com/interview/chante-ramsey-helping-purpose-driven-businesses-grow-with-clarity-and-impact/",
  },
  {
    outlet: "Canvas Rebel",
    title: "Meet Chanté Ramsey",
    href: "https://canvasrebel.com/meet-chante-ramsey/",
  },
  {
    outlet: "Bold Journey",
    title: "Meet Chanté Ramsey",
    href: "https://boldjourney.com/news/meet-chante-ramsey/",
  },
  {
    outlet: "Leading With Lee",
    title: "Chanté Ramsey",
    href: "https://www.leadingwithlee.com/chante-ramsey-2",
  },
];
