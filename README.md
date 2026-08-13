# Midnight Celebration

A Next.js 14 (App Router) + Tailwind + Framer Motion site combining four pages:

- `/` — Home (hero, live "days together" counter, story timeline, gallery, love analytics, dreams, wishes)
- `/letters` — "Open When" envelope letters with a wax-seal-break modal
- `/dream-map` — interactive pin map of future travel dreams
- `/reasons` — the "100 Reasons Why" page with a marquee ticker and an "Add Your Own" list (saved in the browser)

## Personalize it

Everything editable lives in **`lib/site-config.ts`** — names, the "together since" date/time,
milestones, gallery photos, dream destinations, letters, and the reasons list. Change values there
and every page updates automatically.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm run start
```

## Deploy

This is a standard Next.js app — it deploys as-is to Vercel, Netlify, or any Node host.
