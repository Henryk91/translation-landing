# 🧠 Translation Practice — React + Tailwind Landing Page

A **single-page React (Vite) + TailwindCSS landing page** built for the [**Translation Practice**](https://henryk.co.za/translation-practice/) web app.  
It’s designed to attract **English speakers learning German**, optimised for **SEO** and organic discovery, and styled to match Henryk’s dark-theme branding.

---

## 🚀 Overview

This project provides a fast, lightweight, and SEO-optimised **landing page** that introduces users to the *Translation Practice* app — an interactive tool for mastering German translation and grammar through levels (A1–C2), articles, declension, and conjugation drills.

### ✨ Key features
- **Fully client-side SPA** (built with Vite + React 18)
- **SEO optimised**
  - Rich metadata (Open Graph, Twitter cards, canonical URL)
  - `robots.txt` + `sitemap.xml`
  - Structured data (`WebSite`, `Organization`, `FAQPage`)
- **TailwindCSS styling** for quick customization and theming
- **Dark minimalist design** matching the main site palette
- **Responsive & performant** (Lighthouse-friendly)
- **Ready for global keyword targeting** (“practice German online”, “German grammar drills”, etc.)
- **Easily deployed** to GitHub Pages, Netlify, or your custom domain

---

## 🧩 Tech Stack

| Category | Technology |
|-----------|-------------|
| Framework | [React 18](https://react.dev/) |
| Bundler | [Vite 5](https://vitejs.dev/) |
| CSS | [TailwindCSS 3](https://tailwindcss.com/) |
| Language | TypeScript |
| Deployment | Any static host (GitHub Pages / Netlify / Cloudflare Pages / custom domain) |

---

## 📦 Installation

```bash
# 1. Clone the repo
git clone https://github.com/henryk91/translation-landing.git
cd translation-landing

# 2. Install dependencies
npm install

# 3. Add the Vite React plugin
npm install -D @vitejs/plugin-react

# 4. Start local dev server
npm run dev
```

The dev server runs at:
👉 **http://localhost:5173**

---

## 🛠️ Project Structure

```
translation-landing/
├─ index.html
├─ package.json
├─ vite.config.ts
├─ postcss.config.cjs
├─ tailwind.config.cjs
├─ public/
│  ├─ translation-practice/
│  │   ├─ hero-preview.png
│  │   ├─ og-image.png
│  │   ├─ logo.svg
│  │   ├─ favicon.ico
│  │   ├─ robots.txt
│  │   └─ sitemap.xml
└─ src/
   ├─ main.tsx
   ├─ App.tsx
   ├─ index.css
   └─ components/
      ├─ Header.tsx
      ├─ Hero.tsx
      ├─ Features.tsx
      ├─ Levels.tsx
      ├─ Topics.tsx
      ├─ Testimonials.tsx
      ├─ FAQ.tsx
      └─ Footer.tsx
```

---

## 🧱 Configuration

### 🗺️ Sitemap & Robots
Located in `public/`:

- `robots.txt` allows crawling and points to the sitemap.
- `sitemap.xml` includes key routes (`/`, `#features`, `#faq`).

These files help Google, Bing, and other search engines discover the landing page easily.

### 🎨 Branding
Edit brand colors in `tailwind.config.cjs`:

```js
brand: {
  bg: "#0b0f14",
  text: "#e6f1ff",
  accent: "#31c48d",
  fg: "#9fb3c8"
}
```

### 🏷️ Metadata
Edit `<head>` inside `index.html`:
- Title and description
- Keywords
- Open Graph / Twitter tags
- Canonical URL

---

## 🖼️ App Preview Images

Located under `public/translation-practice/`

| File | Purpose | Recommended Size |
|-------|----------|------------------|
| `hero-preview.png` | On-page preview image in Hero section | ~1200×700 px |
| `og-image.png` | Social & search preview (Open Graph) | 1200×630 px |

You can take a real screenshot of your app or use a browser mockup.

---

## 📄 SEO & Structured Data

The landing page includes JSON-LD snippets for:
- **`WebSite`** – identifies your site for Google Search
- **`Organization`** – brand info
- **`BreadcrumbList`** – navigation context
- **`FAQPage`** – enables Google “People also ask” snippets

Edit or extend them in:
```tsx
src/App.tsx  (inside useEffect for FAQ)
index.html   (in <head> for WebSite / Organization / Breadcrumb)
```

---

## 🧭 Deployment

Build static assets:
```bash
npm run build
```

Then deploy the `/build` folder to:
- GitHub Pages (`gh-pages` branch)
- Netlify (drag & drop `/build`)
- Cloudflare Pages

---

## 📈 Keywords Targeted

- practice German online
- German translation exercises
- German grammar drills
- German for English speakers
- A1–C2 German practice
- German articles / declension / conjugation
- translate English to German

These keywords are naturally embedded throughout the landing page copy and metadata.

---

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch
3. Commit changes (`git commit -m "Add feature"`)
4. Push and open a PR

---

## 🧾 License

This project is open source under the [MIT License](LICENSE).

---

## 📬 Contact

Built by **Henryk** — [henryk.co.za](https://henryk.co.za)  
If you’d like help integrating your app or improving SEO, reach out via the site’s contact page.
