# jmie-portfolio (Next.js + Tailwind)

## Run locally
```bash
npm install
npm run dev
```

## Replace images
- `public/logo.svg` -> your logo (or replace with `logo.png` and update `components/Header.tsx`)
- `public/hero.svg` -> your hero portrait image (or `hero.png`)
- `public/thumb-*.svg` -> your 4 thumbnails

## Orbiting text
The labels (front-end / designer / back-end / QA Tester) orbit and drift around the portrait.
You can tweak radiuses/durations in `components/Hero.tsx` and keyframes in `app/globals.css`.
