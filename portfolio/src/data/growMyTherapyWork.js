// Websites and client reviews for the Grow My Therapy experience page.
// Nothing here is shown until an entry has `published: true`.
// Put screenshots in public/images/gmt/ (WebP, ~1200px wide works well).

// ── Websites I worked on (website showcase) ───────────────────────────────
// Screenshots are in public/images/gmt/ (optimised from public/projectsatgmt/).
// `context` is taken from what each site's homepage shows.
// Optional fields you can add per site:
//   contribution: "What I built, updated, integrated or fixed on this site."
//   technologies: ["Next.js", "Tailwind CSS", "Stripe"]
//   gallery: ["/images/gmt/name-2.webp", "/images/gmt/name-3.webp"]  // extra screenshots
//   review: "id of a testimonial below" — shows that client's words on the slide
// Live-site links are off until you confirm the clients are happy to be linked:
// set SHOW_SITE_LINKS to true and a "Visit site" link appears.
export const SHOW_SITE_LINKS = false;

const site = (name, file, url, context, extra = {}) => ({
  published: true,
  name,
  image: `/images/gmt/${file}.webp`,
  url,
  context,
  ...extra,
});

export const caseStudies = [
  site("Drew Miller, MA, LPC", "drewmiller", "https://drewmillerlpc.com",
    "Counselling practice offering mindfulness-based cognitive therapy, with a free-consultation booking on the homepage.",
    { review: "drew-miller" }),
  site("Love in the World — Loving Reminders", "loveintheworld", "https://loveintheworld.org",
    "Daily “Loving Reminders” sign-up page, with an email form, on LoveInTheWorld.org.",
    { review: "betty-lue-lieber" }),
  // File name suggests this is Shannon Ferrelli's practice — confirm before relying on the review link.
  site("Core Resilience Counseling", "shannon", "https://coreresiliencecounseling.com",
    "Online therapy for anxiety in Massachusetts, from a clinical social worker.",
    { review: "shannon-ferrelli" }),
  site("Happy Camper Therapy", "happycampertherapy", "https://happycampertherapy.com",
    "Child and family therapy practice, with sections for adults, kids and families, specialised experiences and events."),
  site("Ventura OCD Therapy", "venturaocd", "https://venturaocdtherapy.com",
    "Specialised OCD treatment, in person in Ventura County and online across California."),
  site("Dr. Sandra Shachar", "sandrashachar", "https://drsandrashachar.com",
    "Relationship repair for individuals and couples affected by betrayal, trauma and addiction, via telehealth across 40+ states."),
  site("R.A.N. Counseling", "rancounseling", "https://rancounseling.com",
    "Therapy for anxiety, depression, and eating and body-image concerns."),
  site("Happyish Humans", "happyishhumans", "https://happyishhumans.com",
    "Psychology resource site with a searchable digital library and session booking."),
  site("Flora", "flora", "https://flora.growmytherapy.com",
    "Business-consulting site for therapy practices, on a Grow My Therapy subdomain."),
];

// ── Client testimonials ───────────────────────────────────────────────────
// Complete, exact wording transcribed from the screenshots in public/clientreviews/
// (optimised copies in public/images/gmt/reviews/). Each card links to its screenshot.
// Fields: quote, title (optional), name, role, source, date, image, imageAlt,
//         note (optional extra line, e.g. Grow My Therapy's reply).
const review = (file) => `/images/gmt/reviews/${file}.webp`;

export const testimonials = [
  {
    id: "perfection",
    published: true,
    title: "Perfection.",
    quote:
      "I am thrilled with my beautiful new website! Hanee and Seth were so great to work with as well. In building my site, Hanee was technically skilled, friendly, professional, and beyond patient. She combed over every detail until the site was perfect. Truly a pleasure collaborating with both Seth and Hanee, who were quick to respond to my questions and very particular style requests. Seamless experience from start to finish.",
    name: "Verified client",
    source: "Trustpilot",
    date: "Jul 13, 2026",
    image: review("review-perfection"),
    imageAlt: "Trustpilot review titled Perfection, five stars, July 13, 2026",
  },
  {
    id: "betty-lue-lieber",
    published: true,
    title: "Amazingly proficient",
    quote:
      "Amazingly proficient at optimizing my Loving Reminders, BettyLue.org and LoveInTheWorld.org website. She is highly skillful at doing a beautiful job of creating what is efficient, helpful, attractive and offers views inspiration to learn, heal and grow in their personal health and success in life. I recommend her as a respectful, responsible creative website creator. Her work on the GrowMyTherapy.com team is exceptional.",
    name: "Betty Lue Lieber, PhD MFT",
    role: "Director, Therapist at Reunion ReSource Center",
    source: "LinkedIn recommendation",
    date: "Oct 9, 2026",
    image: review("recommendation-betty-lue-lieber"),
    imageAlt: "LinkedIn recommendation from Betty Lue Lieber, PhD MFT, October 9, 2026",
  },
  {
    id: "shannon-ferrelli",
    published: true,
    title: "Highly recommend!",
    quote:
      "Seth and Hanee were both great, professional, and easy to work with. They created a website that captured the essence of my private practice and the heart of what I do. Hanee was prompt and responsive to any edits throughout the website design process. Seth provided thoughtful feedback and suggestions on how to make the most of my website. I am very happy with the outcome and highly recommend their services!",
    name: "Shannon Ferrelli",
    source: "Trustpilot",
    date: "Jun 23, 2026",
    image: review("review-shannon-ferrelli"),
    imageAlt: "Trustpilot review from Shannon Ferrelli titled Highly recommend, five stars, June 23, 2026",
  },
  {
    id: "great-team",
    published: true,
    title: "Great Team",
    quote:
      "Hanee and Seth have done a fantastic job improving my website from where it was, and being timely with my website edits. Though I haven't seen referrals come in yet, I am hopeful that they will come.",
    name: "Verified client",
    source: "Trustpilot",
    date: "Aug 1, 2026",
    image: review("review-great-team"),
    imageAlt: "Trustpilot review titled Great Team, five stars, August 1, 2026",
  },
  {
    id: "drew-miller",
    published: true,
    title: "Seth and the team at Grow My Therapy…",
    quote:
      "Seth and the team at Grow My Therapy are amazing! I'm so grateful for the help they offered me to upgrade my old website. The process was a pleasure! They are experts at making websites user friendly and efficient. Communication during the process was consistently prompt and helpful. If you need to market and upgrade your therapy website, please do yourself a favor and contact Grow My Therapy. They will take good care of you and your business. Thank you!",
    name: "Drew Miller",
    source: "Trustpilot",
    date: "May 30, 2026",
    note: "Grow My Therapy’s reply: “A special shoutout to Hanee, who deserves a lot of the credit here. She put a great deal of care, creativity, and attention into making sure everything came together smoothly.”",
    image: review("review-drew-miller"),
    imageAlt: "Trustpilot review from Drew Miller with Grow My Therapy's reply crediting Hanee, May 30, 2026",
  },
];

export const findTestimonial = (id) => testimonials.find((t) => t.id === id && t.published);

export const publishedCaseStudies = caseStudies.filter((c) => c.published && c.name && c.image);
export const publishedTestimonials = testimonials.filter((t) => t.published && (t.quote || t.image));
