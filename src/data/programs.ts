/** Cohort coaching tracks (Aspire Higher) and workshop offerings (Labs & Workshops). */

export interface AspireTrack {
  name: string;
  format: string;
  description: string;
}

export const aspireTracks: AspireTrack[] = [
  {
    name: "Aspire Higher — Intensive",
    format: "120-minute group session + 4 community brainstorms",
    description:
      "A 120-minute group session followed by four guided community brainstorm sessions to keep your momentum compounding.",
  },
  {
    name: "Aspire Higher — 60 Day",
    format: "Four-week cohort • 1:1 coaching + group brainstorming",
    description:
      "A four-week, cohort-based experience that blends 1:1 personalized coaching with guided group brainstorming.",
  },
];

export const aspireGains: string[] = [
  "Clear Direction — know exactly what to focus on, and what to stop doing.",
  "Aligned Growth Strategy — a realistic plan you can implement immediately.",
  "Action & Momentum — weekly accountability that moves ideas into execution.",
  "Stronger Brand Messaging — clarity and confidence in how you show up.",
  "A Solid Foundation — key systems and priorities for sustainable growth.",
  "Ongoing Support — coaching and community that keep you moving forward.",
];

export const aspireForWhom: string[] = [
  "BIPOC entrepreneurs seeking to realign their brand vision and direction",
  "Business leaders feeling stuck, scattered, or ready to evolve their approach",
  "Purpose-driven professionals looking for actionable strategies — not generic advice",
];

export interface Workshop {
  name: string;
  duration: string;
  pitch: string;
  bullets: string[];
  outcome: string;
}

export const workshops: Workshop[] = [
  {
    name: "Brand Builder Seminars",
    duration: "90 minutes",
    pitch:
      "Define what you stand for and communicate it clearly. For entrepreneurs and organizations ready to sharpen their identity and messaging.",
    bullets: [
      "Clarify their core purpose and audience",
      "Identify brand positioning",
      "Craft a message people instantly understand",
      "Establish communication consistency",
    ],
    outcome: "A defined brand foundation and message framework",
  },
  {
    name: "Roadmap 2 Vision Seminar",
    duration: "120 minutes",
    pitch:
      "Turn vision into a focused execution plan. This workshop bridges big ideas with practical structure.",
    bullets: [
      "Map short-term and long-term goals",
      "Prioritize initiatives that matter",
      "Align resources with strategy",
      "Build a sustainable growth plan",
    ],
    outcome: "A clear roadmap with defined priorities",
  },
  {
    name: "Business Clinics",
    duration: "60 minutes each",
    pitch:
      "Targeted support for immediate progress. Interactive, working sessions designed for problem-solving and implementation.",
    bullets: [
      "Reevaluate direction and rebuild alignment",
      "Troubleshoot current challenges",
      "Translate brand stories into a compelling narrative",
    ],
    outcome: "Immediate next steps and guided solutions",
  },
];

export const workshopAudiences = [
  "Entrepreneurs",
  "Nonprofits",
  "Schools",
  "Community Organizations",
  "Leadership Teams",
];
