# Manish Jha — Portfolio Website

A world-class, production-ready portfolio website built for AI Engineers, Machine Learning Developers, and Python Developers.

**Live Demo:** [https://manishjha.dev](https://manishjha.dev) ← Replace with your deployed URL

---

## 🚀 Tech Stack

| Tool | Purpose |
|------|---------|
| **React 18** | UI Framework |
| **TypeScript** | Type Safety |
| **Vite** | Build Tool |
| **Tailwind CSS v4** | Styling |
| **Framer Motion** | Animations |
| **React Icons** | Icon Library |
| **React Type Animation** | Typing effect |
| **React Intersection Observer** | Scroll-triggered animations |
| **React CountUp** | Animated counters |
| **EmailJS** | Contact form backend |

---

## ✨ Features

- 🌑 **Dark theme** with glassmorphism cards
- 🎨 **Gradient text & blob backgrounds**
- ⌨️ **Typing animation** in hero
- 🖱️ **Custom animated cursor** (desktop only)
- 📊 **Scroll progress indicator**
- ⏳ **Loading screen**
- 🔢 **Animated counters** (CGPA, Projects, etc.)
- 📱 **Fully responsive** — mobile, tablet, desktop
- 🔍 **Project search + filter tabs**
- 🌓 **Dark / Light mode toggle**
- 📧 **EmailJS contact form**
- ♿ **Semantic HTML + accessibility**
- 🔎 **SEO** — meta tags, Open Graph, Twitter Cards, Schema.org
- ⚡ **Lighthouse optimized**

---

## 📁 Project Structure

```
src/
├── components/
│   ├── LoadingScreen.tsx    # Animated loading screen
│   ├── Cursor.tsx           # Custom animated cursor
│   ├── ScrollProgress.tsx   # Top scroll progress bar
│   ├── Navbar.tsx           # Sticky glassmorphism navbar
│   ├── Hero.tsx             # Hero section with TypeAnimation
│   ├── About.tsx            # About / professional summary
│   ├── Stats.tsx            # Animated counter stats
│   ├── Skills.tsx           # Skill cards with progress bars
│   ├── Projects.tsx         # Project cards with filter+search
│   ├── Experience.tsx       # Timeline experience section
│   ├── Education.tsx        # Education with coursework
│   ├── Achievements.tsx     # Achievements + certifications
│   ├── ResumeSection.tsx    # Resume preview + download
│   ├── Contact.tsx          # EmailJS contact form
│   └── Footer.tsx           # Footer with back-to-top
├── data.ts                  # ← ALL your resume content lives here
├── index.css                # Global styles & design tokens
├── App.tsx                  # App shell
└── main.tsx                 # React entry point
public/
├── favicon.svg              # Custom MJ favicon
└── Manish_Jha_Resume.pdf    # ← ADD YOUR RESUME PDF HERE
```

---

## 🛠 Installation & Development

```bash
# 1. Navigate to project
cd Portfolio

# 2. Install dependencies (already done)
npm install

# 3. Start dev server
npm run dev
# Open http://localhost:5173
```

---

## 🔧 Customization Guide

### Step 1: Update your links in `src/data.ts`

```ts
export const personalInfo = {
  linkedin: 'https://www.linkedin.com/in/YOUR_ACTUAL_ID',
  github:   'https://github.com/YOUR_ACTUAL_USERNAME',
  // ...
};
```

### Step 2: Update project GitHub/demo links in `src/data.ts`

Each project has `github` and `demo` fields — replace placeholders with actual URLs.

### Step 3: Add your resume PDF

Place your resume PDF at:
```
public/Manish_Jha_Resume.pdf
```

### Step 4: Set up EmailJS for the contact form

1. Create a free account at [emailjs.com](https://www.emailjs.com)
2. Create a service (Gmail, Outlook, etc.)
3. Create an email template
4. In `src/components/Contact.tsx`, replace:

```ts
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';
```

### Step 5: Update meta tags in `index.html`

Replace `https://manishjha.dev` with your actual deployed URL.

---

## 🌐 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel --prod
```

Or connect your GitHub repo at [vercel.com](https://vercel.com) for automatic deployments.

### Netlify

```bash
npm run build
# Upload the dist/ folder at netlify.com
# Or: netlify deploy --prod --dir=dist
```

### GitHub Pages

```bash
npm install -D gh-pages
# Add to package.json scripts: "deploy": "gh-pages -d dist"
npm run build
npm run deploy
```

---

## 📌 Placeholders to Update

| Item | File | Action |
|------|------|--------|
| LinkedIn URL | `src/data.ts` | Add your actual LinkedIn URL |
| GitHub URL | `src/data.ts` | Add your actual GitHub URL |
| Project GitHub links | `src/data.ts` | Add per-project GitHub repos |
| Project demo links | `src/data.ts` | Add live demo URLs |
| Resume PDF | `public/` | Place `Manish_Jha_Resume.pdf` |
| EmailJS credentials | `src/components/Contact.tsx` | Add SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY |
| Deployed URL | `index.html` | Replace with your domain |

---

## 📜 License

MIT © Manish Jha 2026
