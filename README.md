# JG University Landing Page — Redesign

A modern, visually stunning landing page for JG University, built with Next.js 14 and Tailwind CSS.

## ✨ Features

- **Fully Responsive** — Mobile-first design, works on all screen sizes
- **Animated Hero** — Star particle field, staggered text reveals, glowing accents
- **Count-Up Stats** — Numbers animate into view on scroll
- **Program Filter** — UG/PG filter tabs with smooth transitions
- **Testimonials Carousel** — Auto-rotating with manual controls
- **Application Form** — Built-in lead capture with validation
- **Scroll Animations** — IntersectionObserver-powered reveal effects
- **Dark Navy + Gold Theme** — Premium, editorial aesthetic

## 🚀 Getting Started

```bash
# Clone this repo
git clone <your-repo-url>
cd jguni-landing

# Install dependencies
npm install

# Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 🌐 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project on [vercel.com](https://vercel.com)
3. Deploy with zero configuration

### Other Platforms
Any platform supporting Node.js 18+.

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles, fonts, CSS variables
│   ├── layout.tsx       # Root layout with SEO metadata
│   └── page.tsx         # Main page composition
└── components/
    ├── Navbar.tsx        # Sticky nav with mobile hamburger
    ├── Hero.tsx          # Full-height hero with particles
    ├── Stats.tsx         # Animated stat counters
    ├── About.tsx         # About section with feature cards
    ├── Programs.tsx      # Filterable program cards
    ├── Features.tsx      # Why JG University section
    ├── Testimonials.tsx  # Auto-rotating testimonials
    ├── CTA.tsx           # Apply now section with form
    └── Footer.tsx        # Links, contact, accreditations
```

## 🎨 Design Decisions

- **Color Palette**: Deep navy (#0a0f2e) + gold (#f5c842) = premium academic feel
- **Typography**: Playfair Display (headings) + DM Sans (body) — editorial yet modern
- **Motion**: CSS animations + IntersectionObserver scroll reveals
- **Layout**: Grid-based with intentional asymmetry and generous negative space

## 🛠️ Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React 18**
- **Google Fonts** (Playfair Display, DM Sans, JetBrains Mono)

---

Built with ❤️ as part of an internship assignment for Coding Jr.
