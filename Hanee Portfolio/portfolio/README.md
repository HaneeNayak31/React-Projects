# Hanee Nayak — Portfolio

React 19 + Vite + Tailwind CSS v4. Deployed on Netlify.

```bash
npm install
npm run dev      # local dev server
npm run build    # production build into dist/
npm run lint
```

## Pages

| URL | File |
| --- | --- |
| `/` | `src/pages/HomePage.jsx` |
| `/projects` | `src/pages/ProjectsPage.jsx` |
| `/experience/grow-my-therapy` | `src/pages/GrowMyTherapyPage.jsx` |
| anything else | `src/pages/NotFoundPage.jsx` |

Routing is a small path check in `src/App.jsx` (no router library). `netlify.toml` rewrites every URL to
`index.html`, so every page works when opened directly or refreshed. Dark is the default theme.

## Where the content lives

All copy is in `src/data/` — edit those files, not the components.

- `site.js` — email, social links, resume path, education, hackathons. CGPA and graduation year are
  deliberately left out; add a `detail` line to `education` if you want one shown.
- `skills.js` — skill groups.
- `projects.js` — every project. Projects with `featured: 1`, `2`, `3` appear on the homepage in that order;
  all of them appear on `/projects`.
- `experience.js` — the Grow My Therapy role: `title`, `officialTitle`, `dates`, responsibilities, stack.
- `growMyTherapyWork.js` — website case studies and client testimonials.

### Adding a project screenshot or video (e.g. FinPulse, PerFin)

1. Put the file in `public/images/` (screenshot, WebP ~1200px wide) or `public/` (video, MP4/H.264).
2. In `src/data/projects.js`, set `image: "/images/finpulse.webp"` and/or `video: "/finpulse.mp4"`.
3. If there's a live demo, set `liveUrl`. Empty links are hidden automatically.

Without an `image`, a card shows the project's `architecture` summary instead.

### Grow My Therapy title and dates

In `src/data/experience.js`: `title` is what the site shows. If your official title is different, put it in
`officialTitle` and it is shown alongside. Fill `dates: { start: "…", end: "…" }` once confirmed.

### Websites on the Grow My Therapy page

They appear in a large showcase (big screenshot + details, thumbnail strip, auto-advance with pause).
Each entry in `caseStudies` in `src/data/growMyTherapyWork.js` is made with
`site(name, imageFile, url, context, extra)`. Optional `extra` fields:

```js
{
  contribution: "What I built, updated, integrated or fixed on this site.",
  technologies: ["Next.js", "Tailwind CSS", "Stripe"],
  gallery: ["/images/gmt/name-2.webp"],   // extra screenshots
  review: "drew-miller",                  // id of a testimonial — links the slide to that review
}
```

Screenshots go in `public/images/gmt/`. Set `SHOW_SITE_LINKS = true` to show "Visit site" links.

### Adding a client testimonial

Add to `testimonials` in the same file — exact text, a screenshot of the review, or both:

```js
{
  id: "short-id",
  published: true,
  quote: "Exact approved text.",                // optional if image is set
  image: "/images/gmt/review-1.webp",           // optional screenshot
  imageAlt: "Review from … about …",            // describe the screenshot
  name: "Name", role: "Practice", sourceUrl: "https://…", // all optional
},
```

Until an entry has `published: true`, each section shows a short "coming soon" line.

## Contact form

Uses Netlify Forms. The hidden `<form name="contact">` in `index.html` registers the fields at deploy time;
`src/components/Contact.jsx` submits with `fetch` and only shows "sent" when Netlify returns a success
response. On `npm run dev` there's no Netlify backend, so the form correctly shows an error locally.

## Images and video

- Optimised WebP images are in `public/images/`. The original PNGs are kept alongside.
- Demo videos (`public/*.mp4`) only download when someone presses **Play demo**.
