# Pane & Simple — website

Next.js (App Router) + TypeScript + Tailwind site for Pane & Simple Services
(window cleaning & power washing, Napa, CA). Built to push to GitHub and deploy
on Vercel.

## Run it locally

You'll need [Node.js](https://nodejs.org) 18.18+ installed.

```bash
npm install
cp .env.example .env.local   # then fill in values, see below
npm run dev
```

Open http://localhost:3000.

## Editing content

Almost all business info (name, tagline, email, phone, service area, nav
links) lives in one place: **`lib/site-config.ts`**. Edit that file and it
updates everywhere on the site.

Page copy (headlines, service descriptions, the About story) lives directly
in each page file under `app/` — `app/page.tsx` (home), `app/services/page.tsx`,
`app/about/page.tsx`, `app/contact/page.tsx`. They're plain JSX/text, safe to
edit without touching any logic.

The About page has a placeholder founding story — swap in your own words
whenever you're ready.

## Connecting your Jobber quote form

The Contact page shows a live Jobber "Request a Quote" form once you give it
a link, and falls back to a simple email/phone card until then, so the page
is never broken.

1. In Jobber: click the gear icon → **Settings** → **Requests**.
2. Hover the form you want to use → click the **`...`** menu → **Share links**.
3. Click **Copy link** (this is the link hosted in Jobber's Client Hub).
4. Paste it as `NEXT_PUBLIC_JOBBER_REQUEST_URL` in `.env.local` (and later in
   Vercel's environment variables — see below).

That's the form embedded directly as a page (via an iframe). If you'd rather
a button that opens the form in a new tab instead of embedding it, that's a
one-line change in `components/JobberEmbed.tsx` — just ask if you want that
swapped.

Note: Jobber also has a dedicated WordPress plugin, but this site isn't
WordPress, so the share-link approach above is the right one here.

## Deploying: GitHub → Vercel

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/pane-and-simple.git
   git push -u origin main
   ```

2. **Import into Vercel**
   - Go to [vercel.com](https://vercel.com) → **Add New → Project**.
   - Select your GitHub repo. Vercel auto-detects Next.js — no config needed.
   - Before the first deploy, add your environment variables (from
     `.env.example`) under **Environment Variables**: at minimum
     `NEXT_PUBLIC_CONTACT_EMAIL` and, once you have it, `NEXT_PUBLIC_JOBBER_REQUEST_URL`.
   - Click **Deploy**.

Every push to `main` after this will auto-deploy.

## Connecting paneandsimple.services (Namecheap domain, Cloudflare DNS)

Since your domain's nameservers point to Cloudflare rather than Namecheap or
Vercel, do this in your **Cloudflare** DNS dashboard, not Namecheap:

1. In Vercel: your project → **Settings → Domains** → add `paneandsimple.services`
   (and `www.paneandsimple.services`). Vercel will show you the exact records
   to add — typically an **A record** for the root domain (`76.76.21.21`) and
   a **CNAME** for `www` pointing at the value Vercel gives you.
2. In Cloudflare: **DNS** tab, add those same A and CNAME records.
3. **Important:** set both records' proxy status to **DNS only** (grey cloud,
   not orange). With the orange-cloud proxy on, Cloudflare intercepts the
   connection and Vercel can't issue its SSL certificate, so verification
   fails.
4. Wait a few minutes for DNS to propagate, then check back in Vercel —
   once it shows the domain as verified, HTTPS is issued automatically.
5. Optional: once it's working, you can turn the proxy back on if you want
   Cloudflare's caching/WAF in front of Vercel — but it's simplest to just
   leave it on DNS-only, since Vercel already handles SSL and its own CDN.

## Notes

- This project is built for Vercel's Node hosting, not a VPS — you don't need
  the Google VPS for this site. If you have other plans for that VPS, this
  doesn't affect it either way.
- Fonts (Yellowtail for headings, Work Sans for body) load from Google Fonts
  automatically at build time via `next/font`.
