// Grow My Therapy internship — used by the homepage card and the
// /experience/grow-my-therapy page. Website case studies and client reviews
// live in ./growMyTherapyWork.js.

export const growMyTherapy = {
  path: "/experience/grow-my-therapy",
  company: "Grow My Therapy",
  companyUrl: "https://growmytherapy.com/",

  // `title` is what the site shows. If your offer letter / certificate uses a
  // different title, put it in `officialTitle` — it is then shown beside the
  // display title on the experience page so nothing is misrepresented.
  title: "Full Stack Engineer Intern",
  officialTitle: "",

  // Leave empty until confirmed, e.g. { start: "Jan 2026", end: "Jun 2026" }.
  dates: { start: "", end: "" },

  summary:
    "Developed and maintained 10+ production websites for therapy practices — including publishing dashboards for clients, full-stack workflow automation, GoHighLevel custom forms and calendar integrations, AWS content infrastructure, WordPress blog publishing workflows, SES email delivery, and voice-generation integrations using ElevenLabs APIs.",

  homepagePoints: [
    "Built and updated responsive pages and React components",
    "Created publishing dashboards for clients to manage content and updates",
    "Set up automations with AWS Lambda and GoHighLevel workflows to streamline internal processes",
    "Worked with AWS Amplify, S3 and DynamoDB for scalable app and content infrastructure",
    "Integrated WordPress-based blog publishing, SES email delivery, and ElevenLabs voice cloning APIs",
    "Custom forms, calendar integrations, Stripe and third-party integrations",
    "AWS Amplify, Cloudflare, DNS and SSL setup and troubleshooting",
  ],

  stack: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Stripe",
    "GoHighLevel",
    "AWS Amplify",
    "AWS S3",
    "AWS DynamoDB",
    "AWS Lambda",
    "AWS SES",
    "WordPress",
    "ElevenLabs API",
    "Cloudflare",
  ],

  // Experience page introduction.
  intro:
    "During my internship at Grow My Therapy, I developed and maintained more than 10 production websites for therapy practices. My work covered responsive frontend development, reusable components, custom forms, calendar integrations, GoHighLevel workflow automations, third-party integrations, and full-stack automation work including publishing dashboards for clients, WordPress-based blog publishing flows, AWS S3 and DynamoDB infrastructure, SES email delivery, and ElevenLabs voice cloning API integrations for automated audio content.",

  overview:
    "Each website belonged to a different practice, with its own content, layout, requested changes and technical setup — and each was already live, so every change had to work without breaking what was there.",

  // Standalone project vs. production websites (overview comparison).
  contrast: {
    standalone: [
      "One codebase, started from scratch",
      "Requirements I define myself",
      "Runs on localhost or a demo URL",
      "Breaking something affects only me",
    ],
    production: [
      "10+ websites, each with its own content and setup",
      "Requests come from real practices",
      "Real domains, DNS, SSL and hosting",
      "Changes go to live sites that people use",
    ],
  },

  responsibilities: [
    {
      title: "Frontend development",
      items: [
        "Building and updating website pages",
        "Creating responsive layouts",
        "Developing and maintaining reusable React components",
        "Working with Next.js, TypeScript and Tailwind CSS",
        "Implementing requested design and functionality changes",
      ],
    },
    {
      title: "Integrations & functionality",
      items: [
        "Implementing custom forms and calendar integrations using GoHighLevel",
        "Building publishing dashboards for clients",
        "Working with APIs and third-party services",
        "Connecting WordPress-based blog publishing workflows",
        "Integrating ElevenLabs voice cloning APIs for generated audio content",
        "Setting up email delivery using AWS SES",
        "Stripe integration where required",
        "Setting up automation flows with AWS Lambda and GoHighLevel workflows",
        "Testing and troubleshooting website behaviour",
      ],
    },
    {
      title: "Deployment & infrastructure",
      items: [
        "Working with AWS Amplify, S3 and DynamoDB",
        "Cloudflare configuration",
        "DNS and domain configuration",
        "SSL and deployment troubleshooting",
        "Maintaining and updating production websites",
      ],
    },
  ],

  // Technologies by the role they played.
  stackGroups: [
    {
      name: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      use: "Building pages, responsive layouts and reusable components.",
    },
    {
      name: "Integrations",
      items: [
        "Stripe",
        "Third-party APIs",
        "Custom forms",
        "GoHighLevel",
        "WordPress",
        "ElevenLabs API",
        "AWS SES",
      ],
      use: "Forms, calendar flows, payments, publishing pipelines and external content services for client workflows.",
    },
    {
      name: "Automation",
      items: ["AWS Lambda", "GoHighLevel Workflows"],
      use: "Setting up automations to streamline publishing, lead routing and repetitive business workflows.",
    },
    {
      name: "Data & storage",
      items: ["AWS S3", "AWS DynamoDB"],
      use: "Storing media assets and managing structured application data for production systems.",
    },
    {
      name: "Deployment",
      items: ["AWS Amplify"],
      use: "Hosting and shipping updates to live websites.",
    },
    {
      name: "Domains & infrastructure",
      items: ["Cloudflare", "DNS", "SSL"],
      use: "Connecting domains, configuring records and certificates, and troubleshooting access.",
    },
  ],

  // Short, general descriptions. Add `example: "..."` to any item once you
  // have a specific, real story to tell — it is shown under the text.
  learning: [
    {
      title: "Read before you change",
      text: "On an existing live site, understanding how a page is built comes before editing it — the fix that looks obvious can break something elsewhere.",
    },
    {
      title: "Requirements become specifics",
      text: "A client’s description of what they want has to turn into concrete layout, spacing and content changes they can review.",
    },
    {
      title: "Responsive bugs hide at the edges",
      text: "Layouts that work at common widths can break at others, so checking a change across screen sizes became part of finishing it.",
    },
    {
      title: "Third-party services have their own rules",
      text: "Integrations like Stripe and form services are configured by their own docs and settings, not just by the code that calls them.",
    },
    {
      title: "Deployed is different from working locally",
      text: "A change isn't done until it works on the hosted site — builds, environment settings and caching can all differ from local development.",
    },
    {
      title: "Domains, DNS and SSL",
      text: "When a site isn't reachable, the cause can sit in DNS records, Cloudflare settings or the certificate rather than in the code.",
    },
  ],
};

export function formatDates({ start, end }) {
  if (start && end) return `${start} – ${end}`;
  if (start) return `${start} – Present`;
  return "";
}
