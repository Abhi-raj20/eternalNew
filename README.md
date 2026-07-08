# Eternal — Next.js Conversion

Original WordPress (http://localhost:3000) homepage ko Next.js 14 (App Router, JavaScript) mein convert kiya gaya hai.

## Run karne ke liye

```bash
npm install
npm run dev
```

Browser mein kholo: http://localhost:3000

## Build for production

```bash
npm run build
npm start
```

## Structure

```
app/
  layout.js        -> fonts, header, footer wrap
  page.js           -> homepage
  globals.css       -> saari styling
components/
  Header.jsx        -> nav + mobile menu (client component)
  Hero.jsx          -> autoplay hero carousel
  IntroSection.jsx  -> "For over 30 years..." text+image blocks
  DivisionsCarousel.jsx
  FeaturedProjects.jsx
  LatestNews.jsx
  Footer.jsx
data/
  content.js        -> saara data (divisions, projects, news, hero slides)
```

## Notes

- Images abhi original site (`http://localhost:3000`) se directly load ho rahi hain via `next/image` + `remotePatterns` (dekho `next.config.js`).
- Production ke liye recommend hai ki images `public/images/` mein download karke local path use karo — load speed aur reliability better hogi.
- `data/content.js` edit karke divisions/projects/news add ya remove kar sakte ho — UI automatically update ho jayega.
- Baaki pages (`/projects`, `/divisions/[slug]`, `/news/[slug]`, etc.) abhi banaye nahi gaye — sirf homepage complete hai. Wo bhi chahiye to bata dena.
