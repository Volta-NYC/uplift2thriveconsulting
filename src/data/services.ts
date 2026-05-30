/**
 * Paid 1:1 services / coaching packages.
 * Pricing, cadence, deliverables and Calendly links are extracted verbatim
 * from the original site.
 */

export interface Service {
  slug: string;
  name: string;
  tagline: string;
  price: string;
  unit: string;
  cadence: string;
  summary: string;
  includes: string[];
  image: string;
  imageAlt: string;
  booking: string;
}

export const services: Service[] = [
  {
    slug: "upstart-your-mindset",
    name: "UpSTART Your Mindset",
    tagline: "A renewed perspective and actionable solutions.",
    price: "$100",
    unit: "1 Hour",
    cadence: "60-minute virtual assessment",
    summary:
      "An advisory session designed to give you a renewed perspective and clear next moves — from guiding you through the brand startup process to enhancing your daily workflows.",
    includes: [
      "Crafting compelling brand narratives",
      "Developing a strong visual brand identity",
      "Creating essential brand documents",
      "Streamlining your operational processes",
      "Access to affordable legal services",
    ],
    image: "/images/programs/upstart-mindset.webp",
    imageAlt: "UpSTART Your Mindset consulting session",
    booking:
      "https://calendly.com/uplift2thriveconsulting/upstart-your-mindset-session",
  },
  {
    slug: "certification-to-contract",
    name: "Certification To Contract Pathway",
    tagline: "Achieve your certification filing goal.",
    price: "$300",
    unit: "Per Cert",
    cadence: "Two virtual sessions, offline and live submission support",
    summary:
      "Focused on the outcome: seeing you achieve your certification filing goal to unlock new contract opportunities. Whether you're filing for city or state Minority Business Enterprise or another industry certification, we work closely with you to succeed.",
    includes: [
      "Virtual sessions to review documents & bids",
      "Documentation follow-up",
      "Access to the U2T team for Q&A",
      "Certification submission assistance",
    ],
    image: "/images/stock/stock-5.webp",
    imageAlt: "Certification to contract pathway planning session",
    booking:
      "https://calendly.com/uplift2thriveconsulting/leadership-academy-intro",
  },
  {
    slug: "charge-up-vip-day",
    name: "Charge Up Your Biz VIP Day Plus",
    tagline: "Identify your growth blocks. Map a bold plan.",
    price: "$500",
    unit: "1 Cycle",
    cadence: "3-hour consultation and two follow-up sessions",
    summary:
      "An introduction to our signature coaching style, designed to identify your growth blocks, clarify your vision, and map out a bold plan for the months ahead. Includes the VIP Day session plus accountability briefings.",
    includes: [
      "Clarifying your brand's vision",
      "Strengthening your fiscal & organizational infrastructure",
      "Advancing long-term projects — marketing strategy, event planning, partnerships",
    ],
    image: "/images/stock/stock-7.webp",
    imageAlt: "Charge Up Your Biz VIP Day working session",
    booking: "https://calendly.com/uplift2thriveconsulting/charge-up-vip-day",
  },
  {
    slug: "scale-up-brand-reset",
    name: "Scale Up Brand Reset",
    tagline: "A strategic reset to secure your year-end plan.",
    price: "$300",
    unit: "1 Cycle",
    cadence: "One 2-hour consultation",
    summary:
      "A focused, quarterly or annual intensive that assesses your brand's performance, refocuses your goals, and realigns with your vision — designed to secure the success of your year-end strategic plan.",
    includes: [
      "Help you stay on track",
      "Analyze potential risks",
      "Harness your resilient mindset",
      "Explore new ideas and innovation",
    ],
    image: "/images/programs/scale-up.webp",
    imageAlt: "Scale Up Brand Reset strategy session",
    booking: "https://calendly.com/uplift2thriveconsulting/scale-up-vip-day",
  },
];
