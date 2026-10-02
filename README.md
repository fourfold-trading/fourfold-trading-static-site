# Fourfold Crackers — Website

A fast, static landing page and online price list for **Fourfold Crackers**, a Diwali &
festival fireworks/crackers business, built with plain HTML, Tailwind CSS (compiled via
the Tailwind CLI), and a small amount of vanilla JS. No frameworks, no build tooling
beyond Tailwind, no checkout/e-commerce — this is a price list + landing page only.

Live site: **https://fourfold-trading.github.io/fourfold-trading-static-site/**
(updates automatically whenever changes are merged to `main` — see [Deployment](#deployment) below).

## Project structure

```
.
├── public/                 # Everything that gets deployed to GitHub Pages
│   ├── index.html          # The whole site (single page, anchor-linked sections)
│   ├── css/style.css       # Built Tailwind output (generated, not committed)
│   └── js/
│       ├── main.js                  # Mobile nav, renders price list/info/FAQ, footer year
│       ├── products-data.js         # <-- EDIT to update products & prices
│       ├── business-info-data.js    # <-- EDIT to update delivery/ordering/policy info
│       └── faq-data.js              # <-- EDIT to update the FAQ accordion
├── src/
│   └── input.css           # Tailwind source (directives + small custom classes)
├── tailwind.config.js      # Tailwind theme (colors, fonts, content paths)
├── package.json
└── .github/workflows/deploy.yml   # CI/CD: builds & deploys to GitHub Pages
```

## Updating products & prices

You never need to touch the HTML/CSS to change the price list. Everything shown in the
**Price List** section is generated from one file:

```
public/js/products-data.js
```

It exports a `menuCategories` array. Each category has a `name` and a list of `items`,
and each item looks like this:

```js
{
  name: "Product Name",
  description: "Short one-line description.",
  price: "₹150",              // the current (discounted) price — shown exactly as written
  originalPrice: "₹300",      // optional: shown struck through next to the price, Amazon-style
}
```

Every product currently has an `originalPrice` (the catalog runs a site-wide 50% discount), but it's
optional — omit it entirely on an item and only its `price` shows, with no strikethrough. There's no
separate "discount percentage" setting; the site just displays whatever `price`/`originalPrice` you give it.

The price list is rendered as a table (grouped by category), not image cards. Above it,
a search box and "All" + per-category filter buttons are generated automatically from
this same data — there's nothing to configure, the category buttons always match
whatever categories exist in `menuCategories`. Search matches product names
(case-insensitive) within whichever category is currently selected.

Each row has a checkbox and a quantity stepper so visitors can build an order list as they
browse — there's no checkout, this is purely to help them total up what they want before
calling or WhatsApp-ing it in. Selections persist in memory (not saved across a page
reload) regardless of search/filter changes, and a summary bar at the bottom of the page
shows the running item count and total, with a "Clear" button to reset. This is all in
`public/js/main.js` (the `cart` Map and the functions around it) — no data file changes
needed for it.

To add a new category, copy an existing category object (with its own unique `id`) and
add it to the array. To add/remove/edit products, add/remove/edit objects inside an
`items` array. Reload the page (or wait for the next deploy) to see the change — no other
file needs to change.

The catalog currently loaded is the real 2026 price list (106 products, grouped into 6
broad categories rather than the ~17 narrower ones on the original supplier sheet, so the
category filter row on the site stays short). Keep it updated the same way — add/remove/
edit objects directly in this file whenever prices or stock change, and prefer adding new
products to an existing category over creating a new one unless the list grows enough to
justify it.

## Updating business info (delivery, ordering, hours)

The **Ordering, Delivery & Policies** section (`#info`) is generated from:

```
public/js/business-info-data.js
```

It exports one `businessInfo` object with a fixed set of keys (`deliveryAreas`,
`howToOrder`, `orderPolicy`, `paymentMethods`, `hours`). Each is `{ icon, title, lines }`
— edit the `lines` to update what's shown; each key renders as one card in the grid.

## Updating the FAQ

The FAQ accordion (`#faq`) is generated from:

```
public/js/faq-data.js
```

It exports a `faqItems` array of `{ question, answer }` objects, rendered as a
collapsible accordion (one answer open at a time). Add, remove, or edit items freely —
keep answers to 2-3 lines for the best fit.

## Running locally

Requires [Node.js](https://nodejs.org/) 18+.

```bash
npm install

# Build the CSS once
npm run build

# Or, while developing: watch Tailwind for changes AND serve the site locally
npm run dev
```

`npm run dev` runs two things in parallel:
- `tailwindcss --watch`, which rebuilds `public/css/style.css` whenever you edit
  `src/input.css`, `public/index.html`, or any file under `public/js/`
- a static file server (via `npx serve`) for the `public/` folder

Then open the URL it prints (typically `http://localhost:3000`).

If you'd rather not install `serve`, any static server works, e.g.:

```bash
python3 -m http.server --directory public 8080
```

## Customizing colors / branding

The color palette is a warm cream/terracotta theme defined in `tailwind.config.js` under
`theme.extend.colors`: `cream` (page background), `spice` (terracotta — primary
accent/CTAs/prices), `turmeric` (secondary accent), and `espresso` (ink/text). Change the
hex values there to adjust the whole site's palette consistently. The hero section also
has a few hero-only accent classes in `src/input.css` (`.hero-badge`, `.hero-glow`,
`.hero-btn-glow`, `.firework-burst`) that reuse the same `spice` tones — they're not used
elsewhere on the site. Fonts are loaded from Google Fonts in `public/index.html`
(`Poppins` for headings, `Inter` for body text) and mapped in `tailwind.config.js` under
`theme.extend.fontFamily`.

The business name, tagline, about text, and contact details (phone numbers, email) in
`public/index.html` are real — search for the phone/email markup in the `#contact`
section to update them if they change. The hero background is an animated CSS/SVG firework
graphic (three looping `.firework-burst` instances defined inline in `public/index.html`,
animated via `@keyframes firework-burst` in `src/input.css`, and respecting
`prefers-reduced-motion`) — there's no photo to swap in unless you want to replace it
with one.

## Deployment (GitHub Pages via GitHub Actions)

This repo deploys automatically via `.github/workflows/deploy.yml`, which on every push to
`main`:
1. Installs dependencies (`npm ci`)
2. Builds the Tailwind CSS (`npm run build`)
3. Uploads `public/` as a Pages artifact and deploys it with the official
   `actions/upload-pages-artifact` + `actions/deploy-pages` actions

### One-time repo setup (do this in GitHub Settings)

1. Go to **Settings → Pages**
2. Under **Build and deployment → Source**, select **GitHub Actions** (not "Deploy from a branch")
3. Merge/push to `main` — the workflow will run automatically and the site will be published
   at `https://<org>.github.io/<repo>/`

No other configuration is required — the workflow already requests the `pages: write` and
`id-token: write` permissions it needs.
