# Jack -- 3D Creator Portfolio

A dark-themed 3D creator portfolio landing page built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Setup

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Structure

- `src/sections/` -- HeroSection, MarqueeSection, AboutSection, ServicesSection, ProjectsSection (rendered in that order in `App.tsx`)
- `src/components/` -- FadeIn (scroll-reveal wrapper), Magnet (mouse-following magnetic effect), ContactButton, LiveProjectButton, AnimatedText (character-by-character scroll reveal)
- `src/index.css` -- global reset, `#0C0C0C` background, Kanit font, and the `.hero-heading` gradient-text class

## Notes

- All imagery is pulled from the external URLs specified in the brief (figma.site portrait/decorative assets, motionsites.ai marquee GIFs, and higgs.ai/CloudFront project screenshots). Swap these for your own hosted assets if you'd like faster, more reliable loading.
- The Projects section's sticky-stacking card effect and the Marquee section's scroll-linked rows both read `window.scrollY` — they work best in a normal browser scroll container (avoid nesting the page in an iframe with its own scroll).
- Reduced-motion users get animations shortened automatically via a `prefers-reduced-motion` media query in `index.css`.
