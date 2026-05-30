/**
 * Events extracted from the original site's Events Calendar.
 * Dates/times are preserved exactly. `start` uses ISO for sorting & metadata.
 */

export type EventCategory = "Virtual" | "In person";

export interface EventItem {
  slug: string;
  title: string;
  category: EventCategory;
  start: string; // ISO date
  dateLabel: string;
  timeLabel: string;
  cost: string;
  excerpt: string;
  body: string[];
  tags: string[];
  venue: {
    name: string;
    address?: string;
    cityLine?: string;
    mapHref?: string;
    venueHref?: string;
  };
  organizer: { name: string; email?: string; website?: string };
  rsvpUrl?: string;
  rsvpLabel?: string;
  recurring?: string;
}

export const events: EventItem[] = [
  {
    slug: "office-hours-4th-thursdays",
    title: "Monthly Office Hours (4th Thursdays)",
    category: "Virtual",
    start: "2026-05-28T19:00:00",
    dateLabel: "May 28, 2026",
    timeLabel: "7:00 pm – 8:00 pm",
    cost: "Free",
    excerpt:
      "Virtual group brainstorming hours for our BIPOC business owners community — meet other brand leaders or get focused work done.",
    body: [
      "VIRTUAL OFFICE HOURS 💻 Uplift 2 Thrive will be hosting virtual group brainstorming hours for our BIPOC business owners community! This 60-minute online event is a great opportunity to meet other passionate brand leaders and build community. You can use this time to jump into a lively group chat session or simply use it to get some focused work done.",
      "This session is offered to all BIPOC business owners every 2nd Thursday and 4th Thursday of each month.",
    ],
    tags: ["brainstorm", "business development", "community"],
    venue: { name: "Live Webinar" },
    organizer: {
      name: "Chanté Ramsey",
      email: "chante@uplift2thriveconsulting.com",
    },
    rsvpUrl: "https://cramsey.clickmeeting.com/u2t-monthly-office-hours",
    rsvpLabel: "Join the Webinar",
    recurring: "Every 2nd & 4th Thursday",
  },
  {
    slug: "work-chat-pop-in-coworking-nj",
    title: "“Work + Chat Pop In” CoWorking NJ",
    category: "In person",
    start: "2026-05-23T12:00:00",
    dateLabel: "May 23, 2026",
    timeLabel: "12:00 pm – 2:00 pm",
    cost: "Free",
    excerpt:
      "Our regular in-person series bringing brand leaders and entrepreneurs together to strategize and connect authentically.",
    body: [
      "Join us for our regular in-person series bringing brand leaders and entrepreneurs together to strategize and connect authentically. Come as you are in this casual space!",
      "We're talking real challenges. Unpacking current trends. Brainstorming smart solutions. And strengthening each other in the process.",
      "It's productive. It's collaborative. It's momentum — built together. 🚀 Drop in. Plug in. Let's build.",
      "Jersey City — Clo Coffee at 12pm – 2pm.",
    ],
    tags: ["brainstorm", "business development", "community", "support local business"],
    venue: {
      name: "Clo Coffee (Jersey City)",
      address: "97 Newkirk Street",
      cityLine: "Jersey City, NJ 07306",
      mapHref:
        "https://maps.google.com/maps?q=97+Newkirk+Street+Jersey+City+NJ+07306",
      venueHref: "https://www.clocoffeecompany.com/home",
    },
    organizer: {
      name: "Chanté Ramsey",
      email: "chante@uplift2thriveconsulting.com",
    },
    rsvpUrl:
      "https://bunch-api.onrender.com/api/share/hangout/853a7c8b-712b-42ef-a32e-1316018368eb",
    rsvpLabel: "RSVP via Bunch App",
  },
  {
    slug: "office-hours-2nd-thursdays",
    title: "Monthly Office Hours (2nd Thursdays)",
    category: "Virtual",
    start: "2026-05-14T19:00:00",
    dateLabel: "May 14, 2026",
    timeLabel: "7:00 pm – 8:00 pm",
    cost: "Free",
    excerpt:
      "Virtual group brainstorming hours for our BIPOC business owners community — meet other brand leaders or get focused work done.",
    body: [
      "VIRTUAL OFFICE HOURS 💻 Uplift 2 Thrive will be hosting virtual group brainstorming hours for our BIPOC business owners community! This 60-minute online event is a great opportunity to meet other passionate brand leaders and build community. You can use this time to jump into a lively group chat session or simply use it to get some focused work done.",
      "This session is offered to all BIPOC business owners every 2nd Thursday and 4th Thursday of each month.",
    ],
    tags: ["brainstorm", "business development", "community"],
    venue: { name: "Live Webinar" },
    organizer: {
      name: "Chanté Ramsey",
      email: "chante@uplift2thriveconsulting.com",
    },
    rsvpUrl: "https://cramsey.clickmeeting.com/u2t-monthly-office-hours",
    rsvpLabel: "Join the Webinar",
    recurring: "Every 2nd & 4th Thursday",
  },
  {
    slug: "fill-these-storefronts-eny",
    title: "Fill These Storefronts ENY",
    category: "In person",
    start: "2026-05-02T11:00:00",
    dateLabel: "May 2, 2026",
    timeLabel: "11:00 am – 3:00 pm",
    cost: "Free",
    excerpt:
      "A panel event focused on revitalizing East New York, Brooklyn by elevating local small businesses from home-based to brick-and-mortar.",
    body: [
      "Join us at this EXCITING event on May 2nd focused on revitalizing East NY, Brooklyn by transitioning and elevating local small businesses from home-based/virtual to brick-and-mortar.",
      "This event is open to all businesses based in NYC. Uplift 2 Thrive will be a panelist as we dive into these important discussions on real estate opportunities.",
    ],
    tags: ["business development", "community", "support local business"],
    venue: {
      name: "United Community Centers",
      address: "613 New Lots",
      cityLine: "Brooklyn, NY",
      mapHref:
        "https://maps.google.com/maps?q=613+New+Lots+Brooklyn+NY+United+States",
    },
    organizer: { name: "Innovative Resilience – East Brooklyn Village" },
    rsvpUrl:
      "https://www.eventbrite.com/e/lets-fill-these-storefronts-tickets-1985280799313",
    rsvpLabel: "RSVP on Eventbrite",
  },
  {
    slug: "made-in-nyc-week-networking",
    title: "Made in NYC Week Networking Event",
    category: "In person",
    start: "2026-05-01T17:00:00",
    dateLabel: "May 1, 2026",
    timeLabel: "5:00 pm – 8:00 pm",
    cost: "$25",
    excerpt:
      "Meet fellow members, network with local manufacturers, and toast to NYC's vibrant maker scene.",
    body: [
      "Meet fellow members, network with local manufacturers, and toast to NYC's vibrant maker scene.",
      "RSVP today to join the Made in NYC Week 2026 Opening Night Party.",
    ],
    tags: ["community", "support local business"],
    venue: {
      name: "Essex Market",
      address: "220 Broome Street",
      cityLine: "New York, NY",
      mapHref:
        "https://maps.google.com/maps?q=220+Broome+Street+New+York+NY+United+States",
    },
    organizer: {
      name: "Made in NYC",
      email: "info@madeinnyc.org",
      website: "https://www.madeinnyc.org/",
    },
    rsvpUrl:
      "https://www.eventbrite.com/e/made-in-nyc-week-2026-opening-night-party-tickets-1986009215024",
    rsvpLabel: "RSVP on Eventbrite",
  },
  {
    slug: "mwbe-cert-crash-course",
    title: "Live Webinar! MWBE Certification Crash Course (NYC & NYS)",
    category: "Virtual",
    start: "2026-03-26T18:00:00",
    dateLabel: "March 26, 2026",
    timeLabel: "6:00 pm – 7:00 pm",
    cost: "Free",
    excerpt:
      "A practical, motivating webinar that breaks down NYC & NYS Minority/Women-Owned Business (MWBE) certification — without the overwhelm.",
    body: [
      "Ready to unlock new opportunities for your business? Join us for a practical, motivating webinar that breaks down NYC & NYS Minority/Women-Owned Business (MWBE) certification — without the overwhelm.",
      "A representative from the NYC Department of Small Business Services will walk you through the process, share insider guidance, and help demystify what you actually need to apply with confidence. You'll leave clear, informed, and ready to kick off your application.",
      "🎯 Perfect for minority- and women-owned businesses ready to elevate, scale, and access exclusive opportunities.",
      "Uplift 2 Thrive Consulting is offering this webinar to educate and inspire you to grow your business! We have worked with clients to help them secure their NYS and NYC minority women certifications. Currently, we provide the accountability and expert document review required to get you to the finish line!",
    ],
    tags: ["business development", "support local business", "updates"],
    venue: { name: "Live Webinar" },
    organizer: {
      name: "Chanté Ramsey",
      email: "chante@uplift2thriveconsulting.com",
    },
    rsvpUrl: "https://forms.gle/hXoGtcxHQn1c8boC9",
    rsvpLabel: "RSVP via Google Form",
  },
];

export const eventTags = Array.from(
  new Set(events.flatMap((e) => e.tags)),
).sort();
