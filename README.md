# MasterNotes UGC NET – How to Use Guide

A single-page promotional guide for [MasterNotes UGC NET](https://ugc-net-master-notes.vercel.app/), built with Vite, vanilla JS and Tailwind (CDN). No backend.

Screenshots in `public/screenshots/` were captured from the live site with Playwright (desktop 1280×800, mobile 390×844).

## Run locally

Requires Node.js 18+.

```bash
npm install
npm run dev        # http://localhost:5173
```

## Build

```bash
npm run build      # output in dist/
npm run preview    # serve the built site locally
```

## Deploy to GitHub Pages

The repo includes `.github/workflows/deploy.yml`, which builds and publishes the site on every push to `main`.

1. Create a GitHub repository and push this project:
   ```bash
   git init && git add . && git commit -m "Initial guide"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. On GitHub, open **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Wait for the **Deploy to GitHub Pages** workflow under **Actions** to finish. The site goes live at `https://<your-username>.github.io/<repo-name>/`.

`vite.config.js` uses `base: './'`, so the same build also works on Vercel, Netlify or any static host.

## Editing content

All steps, feature cards, phone screens and FAQs are plain arrays at the top of `src/main.js`. To replace a screenshot, overwrite the file in `public/screenshots/` with the same name.
