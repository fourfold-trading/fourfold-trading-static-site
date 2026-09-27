# Fourfold Crackers — Website

A fast, static landing page and online price list for **Fourfold Crackers**, a Diwali &
festival fireworks/crackers business, built with plain HTML, Tailwind CSS (compiled via
the Tailwind CLI), and a small amount of vanilla JS. No frameworks, no build tooling
beyond Tailwind, no checkout/e-commerce — this is a price list + landing page only.

Live site: **https://fourfold-trading.github.io/fourfold-trading-static-site/**
(goes live once the branch is merged to `main` — see [Deployment](#deployment) below).

## Project structure

```
.
├── public/                 # Everything that gets deployed to GitHub Pages
│   ├── index.html          # The whole site (single page, anchor-linked sections)
│   ├── css/style.css       # Built Tailwind output (generated, not committed)
│   └── js/
│       ├── main.js             # Mobile nav toggle, renders the price list, footer year
│       └── products-data.js    # <-- EDIT THIS FILE to update products & prices
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
  price: "₹150",            // shown exactly as written — use whatever currency/format you like
  image: null,               // set to a path like "images/my-photo.jpg" once you have real photos
  emoji: "🎇"                 // shown as a placeholder visual when `image` is null
}
```

To add a new category, copy an existing category object (with its own unique `id`) and
add it to the array. To add/remove/edit products, add/remove/edit objects inside an
`items` array. Reload the page (or wait for the next deploy) to see the change — no other
file needs to change.

All current names, descriptions, and prices are **placeholders**. Replace them with the
real catalog whenever it's ready.

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

The color palette (warm tones suited to a festival/fireworks brand) is defined in
`tailwind.config.js` under `theme.extend.colors` (`cream`, `spice`, `turmeric`, `espresso`).
Change the hex values there to adjust the whole site's palette consistently. Fonts are
loaded from Google Fonts in `public/index.html` (`Poppins` for headings, `Inter` for body
text) and mapped in `tailwind.config.js` under `theme.extend.fontFamily`.

The business name, tagline, about text, contact details, and map embed in
`public/index.html` are all placeholders — search for the placeholder address, phone,
email, and WhatsApp link and replace them with real details.

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
