# MG Motors Pakistan — Next.js 14 Rebuild

A full rebuild of **mgmotors.com.pk** using **Next.js 14 App Router**, **TypeScript**, and **Tailwind CSS**.

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18.17 or later → https://nodejs.org
- **npm** 9+ (comes with Node)

### 1. Install dependencies
```bash
cd mg-motors-pk
npm install
```

### 2. Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production
```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
mg-motors-pk/
├── app/                        # Next.js App Router pages
│   ├── layout.tsx              # Root layout (Header + Footer)
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Global styles + Tailwind
│   ├── not-found.tsx           # 404 page
│   ├── error.tsx               # Error boundary
│   ├── loading.tsx             # Loading skeleton
│   │
│   ├── model/
│   │   ├── phev/               # MG HS PHEV page
│   │   ├── mgu9/               # MG U9 page
│   │   ├── cyberster/          # MG Cyberster page
│   │   └── binguo/             # Binguo EV page
│   │
│   ├── about/                  # About MG
│   ├── book-my-mg/             # Booking form
│   ├── care/                   # MG Care
│   │   └── form/               # Service booking form
│   ├── careers/                # Careers + application form
│   ├── contact/                # Contact page + form
│   ├── dealer/                 # Become a Dealer
│   ├── dealer-locator/         # Find a dealer
│   ├── faqs/                   # FAQ accordion
│   ├── license/                # EULA
│   ├── mg-exchange/            # MG Exchange program
│   ├── mg-history/             # MG Heritage
│   ├── mg-partnerships/        # Bank financing
│   ├── pre-qualify/            # Cyberster pre-qualification
│   ├── privacy/                # Cookie policy
│   ├── privacy-policy/         # Privacy policy
│   ├── start-smart/            # Start Smart campaign
│   ├── test-drive/             # Test drive booking
│   ├── track-my-mg/            # Order tracking
│   └── world-of-mg/            # News & updates
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Sticky header + hamburger nav
│   │   └── Footer.tsx          # Footer with links + social icons
│   ├── home/
│   │   ├── HeroCarousel.tsx    # Auto-advancing image carousel
│   │   ├── ModelsSection.tsx   # Scrollable model cards
│   │   ├── AboutSection.tsx    # About / Drivability section
│   │   ├── TechnologySection.tsx  # MG Pilot tech section
│   │   ├── NewsSection.tsx     # World of MG / news
│   │   └── ContactCardsSection.tsx  # Dealer + contact CTAs
│   └── ui/
│       ├── MGLogo.tsx          # SVG MG logo
│       └── MGButton.tsx        # Reusable button with hover animation
│
├── public/
│   ├── assets/                 # Static images from original site
│   └── favicon.ico
│
├── next.config.js              # Next.js config (remote image domains)
├── tailwind.config.ts          # Tailwind + custom breakpoints + MG colors
├── tsconfig.json
└── package.json
```

---

## 🖼️ Images

All images are loaded from the live MG Motors CDN:
```
https://mgmotors.com.pk/assets/...
```

The `public/assets/` folder contains the static files copied from the original HTTrack download. Images that were not in the download fall back to the live CDN.

### To serve all images locally:
1. Download missing images from `https://mgmotors.com.pk/assets/`
2. Place them in `public/assets/` matching the same folder structure
3. Update image `src` values in components from `https://mgmotors.com.pk/assets/...` to `/assets/...`

---

## 🎨 Design System

### Custom Tailwind Colors
| Token | Value | Usage |
|---|---|---|
| `mg-red` | `#C8102E` | Brand red |
| `mg-dark` | `#181818` | Dark sections |
| `mg-gray` | `#F7F7F7` | Page background |
| `mg-muted` | `#ADADAD` | Muted labels |
| `mg-electric` | `#29C5E8` | EV badges |
| `mg-green` | `#15DB41` | Hybrid badges |

### Custom Breakpoints
| Name | Width |
|---|---|
| `xs` | 400px |
| `lgCustom1` | 1100px |
| `lgCustom2` | 1200px |
| `3xl` | 1800px |

---

## 📄 Pages Summary

| Page | Route | Notes |
|---|---|---|
| Home | `/` | Hero carousel + models + about + tech + news + CTA |
| MG HS PHEV | `/model/phev` | Full model page with specs, safety, performance, color picker |
| MG U9 | `/model/mgu9` | Truck model with smart hatch, off-road, comfort sections |
| MG Cyberster | `/model/cyberster` | EV roadster with performance stats, specs table |
| Binguo EV | `/model/binguo` | City EV with MAGIC battery, exterior gallery |
| Book My MG | `/book-my-mg` | Full booking form with bank financing option |
| Test Drive | `/test-drive` | Test drive booking form |
| MG Exchange | `/mg-exchange` | Trade-in program + certified used + enquiry form |
| MG Care | `/care` | Service overview with motor oil, parts, warranty |
| Schedule Service | `/care/form` | Service appointment form |
| Dealer Locator | `/dealer-locator` | City-filtered dealer cards |
| Contact | `/contact` | Message form + contact info |
| Careers | `/careers` | Job application form with CV upload |
| FAQs | `/faqs` | Accordion FAQ by category |
| World of MG | `/world-of-mg` | News articles + YouTube video + newsletter |
| About | `/about` | Brand story + models + 7 Promises + partnerships |

---

## 🔧 Customization

### Adding a new page
```bash
mkdir app/my-new-page
# Create app/my-new-page/page.tsx
```

### Changing the hero slides
Edit `components/home/HeroCarousel.tsx` → update the `slides` array.

### Adding a new dealer
Edit `app/dealer-locator/page.tsx` → add to the `dealers` array.

### Adding a new model
1. Create `app/model/your-model/page.tsx`
2. Add to `navLinks` in `components/layout/Header.tsx`
3. Add to `footerLinks.MODELS` in `components/layout/Footer.tsx`
4. Add a card to `components/home/ModelsSection.tsx`

---

## 🚢 Deployment

### Vercel (recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Deploy the .next folder
```

### Self-hosted (Node)
```bash
npm run build
npm start
# Runs on port 3000 by default
```

### Environment Variables
No environment variables are required for the base project.
If you add analytics (Google Analytics, Meta Pixel etc.), create `.env.local`:
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## 📞 Support

Built by rebuilding mgmotors.com.pk from the HTTrack snapshot.
All MG branding, trademarks, and assets belong to MG JW Automobile Pakistan Pvt. Ltd.
# t_workshop
# ch_kp
