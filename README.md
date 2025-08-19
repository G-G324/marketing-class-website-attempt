 
## Tech Stack
- **Front-End:** React + Vite + Tailwind CSS
- **Back-End:** Node.js + Express (MongoDB-ready, can connect later)
- **CMS:** Sanity or Contentful (stubbed in code)
- **Database:** MongoDB (stub connection shown, can be enabled)
- **eCommerce Engine:** Shopify/Shopify Plus (placeholder integration points)
- **Hosting:** Vercel/Netlify (frontend), Render/Heroku/AWS (backend)
- **Analytics:** GA4 + Hotjar placeholders
- **Payments:** Stripe/PayPal placeholders
- **IG Feed:** Embed + API-ready placeholder

## Project Structure
```
go-figure-more/
├─ frontend/               # React + Vite + Tailwind app
│  ├─ index.html
│  ├─ src/
│  │  ├─ main.jsx          # (Main) app bootstrap
│  │  ├─ App.jsx
│  │  ├─ routes.jsx        # Route definitions
│  │  ├─ pages/            # Content pages
│  │  ├─ components/       # UI building blocks
│  │  ├─ data/             # Local demo data
│  │  └─ styles/           # Tailwind & global styles
│  ├─ tailwind.config.js
│  ├─ postcss.config.js
│  └─ package.json
├─ backend/                # Node + Express API
│  ├─ server.js            # (Index) entry point for API server
│  ├─ routes/
│  │  ├─ products.js
│  │  ├─ b2b.js
│  │  └─ journal.js
│  ├─ data/
│  │  ├─ products.json
│  │  └─ journal.json
│  ├─ services/
│  │  ├─ shopify.js        # Shopify placeholder
│  │  └─ cms.js            # CMS placeholder
│  ├─ package.json
│  └─ .env.example
├─ README.md               # (README) this file
└─ .gitignore
```

> ✅ Per your ask, this repo includes **Index (index.html)**, **Main (main.jsx)**, and **README.md**, plus a runnable backend.

---

## Getting Started

### 1) Requirements
- Node.js 18+
- npm 9+ (or pnpm/yarn)

### 2) Install
```bash
# Root is just docs; install each workspace separately
cd backend && npm i
cd ../frontend && npm i
```

### 3) Run (Dev)
```bash
# Terminal A: API
cd backend
npm run dev

# Terminal B: Frontend
cd frontend
npm run dev
```
- Frontend runs at: `http://localhost:5173`
- Backend runs at:  `http://localhost:4000`

### 4) Environment Variables
Copy `backend/.env.example` to `backend/.env` and set values. Stripe/PayPal/Shopify/CMS are optional; the app runs with demo data.

### 5) Build (Prod)
```bash
# Frontend
cd frontend && npm run build
# Serve the dist folder via your static host (Vercel/Netlify/etc.)
```

---

## Features Implemented (Demo)
- B2C Storefront with categories & filtering (client-side; API-ready)
- Product Detail page with reviews stub
- Lookbook (editorial grid)
- Social Shopping: IG embed + link out
- Street Journal (blog) pulling from backend JSON
- B2B wholesale registration form + basic approval workflow stub
- B2B dashboard (linesheets, invoices, order tracking placeholders)
- Brand storytelling: Hero video section, The Movement timeline, Voices testimonials, In the Streets map placeholder
- Responsive, mobile‑first layout with Tailwind
- Analytics placeholders for GA4 & Hotjar
- Accessible, SEO‑friendly tags and meta

## Next Integrations (Hooks ready)
- Shopify: replace demo products with Shopify Storefront API
- Stripe/PayPal: connect backend payment webhooks
- CMS (Sanity/Contentful): move pages and journal content
- MongoDB: persist B2B accounts, orders, approvals
- Instagram Graph API: replace embed with dynamic media

## Scripts
See `frontend/package.json` and `backend/package.json` for dev scripts.

## License
MIT (starter scaffolding).
