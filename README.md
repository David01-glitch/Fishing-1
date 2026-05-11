# Fishing & Outdoor Club

Premium outdoor adventure and nature lifestyle magazine — built with React, Vite, Tailwind CSS, Framer Motion, Lucide React, and React Router DOM. Served in production by an Express server with compression and SPA fallback routing.

## Features

- Cinematic, magazine-grade UI with glassmorphism and motion
- Multi-page React Router setup (15+ routes)
- Inline expandable category cards and inline blog post expansion
- Google Analytics (GA4) with Consent Mode v2 cookie banner
- SEO-ready (Open Graph, Twitter Cards, JSON-LD Organization schema, sitemap)
- 100% local images bundled by Vite — no external image hotlinking
- Accessible: keyboard nav, focus-visible, reduced-motion support
- Express server with compression + SPA fallback for production

## Stack

- React 18 + Vite 5
- Tailwind CSS 3
- Framer Motion 11
- Lucide React
- React Router DOM 6
- Express 4 + compression
- Node 20

## Local development

```bash
npm install
npm run dev
```

Then visit `http://localhost:5173`.

## Production build

```bash
npm install
npm run build
npm start
```

The Express server (`server.js`) serves `dist/` with compression and SPA fallback on `process.env.PORT` (defaults to 3000).

## Deploying to Heroku

```bash
heroku create fishing-outdoor-club
git push heroku main
```

Heroku uses `Procfile` (`web: node server.js`), `app.json`, the `engines` field in `package.json` (Node 20), and `heroku-postbuild` to build before boot.

## Deploying to Vercel

1. Import the repo in the Vercel dashboard.
2. Framework preset: **Vite**.
3. Build command: `npm run build`.
4. Output directory: `dist`.
5. Add a rewrite for SPA routing: `/(.*)` → `/index.html`.

## Deploying to Netlify

1. New site from Git.
2. Build command: `npm run build`.
3. Publish directory: `dist`.
4. Create `_redirects` in `public/` or use this site's existing config: `/* /index.html 200`.

## Environment

No environment variables are required to run the site. The Google Analytics tag is hard-coded in `index.html` (`G-4J046JXWVC`) per the brand brief. Consent Mode v2 defaults to "denied" until the cookie banner is accepted.

## Project structure

```
src/
  assets/images/      # All real outdoor photos bundled locally
  components/         # Header, Footer, Hero, CategoryGrid, ...
  pages/              # Home, About, Blog, Tutorials, Community, Contact, ...
  utils/              # analytics.js, seo.js
  data/content.js     # All copy, articles, categories, faqs
  App.jsx             # Routes
  main.jsx            # Entry point
public/               # robots.txt, sitemap.xml, favicon.svg
server.js             # Express production server
Procfile / app.json   # Heroku
```

## Routes

- `/` `/about` `/blog` `/tutorials` `/community` `/contact`
- `/fishing-guides` `/camping-tips` `/outdoor-gear` `/lake-adventures` `/hiking-trails` `/survival-skills`
- `/privacy` `/terms` `/refund`
- `/404` (and any unknown route)

## Contact

89 Lakeview Blvd, Denver, CO 80201, USA — fishingoutdoorclub@gmail.com
