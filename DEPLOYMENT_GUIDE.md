# 🚀 Frontend Portfolio — Setup & Deployment Guide

## Project Stack
- **React 18** — UI framework
- **Vite** — Build tool (fast HMR, optimized production builds)
- **Tailwind CSS v3** — Utility-first styling
- **gh-pages** — One-command GitHub Pages deployment

---

## 📦 Step 1 — Prerequisites

Make sure you have the following installed:

```bash
node --version   # v18 or higher required
npm --version    # v9 or higher
git --version    # any recent version
```

If Node.js is not installed, download it from https://nodejs.org

---

## 📁 Step 2 — Install Dependencies

Navigate into the project folder and install all packages:

```bash
cd portfolio
npm install
```

---

## 🧑‍💻 Step 3 — Run Locally

Start the development server with hot-reload:

```bash
npm run dev
```

Open your browser at **http://localhost:5173**

You'll see the full portfolio with:
- Animated hero with typewriter effect
- Scrolling skills bars
- Interactive project list
- Timeline experience section
- Working contact form UI
- Custom cursor

---

## ✏️ Step 4 — Personalize the Content

Edit these files to make the portfolio yours:

| File | What to change |
|------|---------------|
| `src/components/Hero.jsx` | Your name, description, CTA buttons |
| `src/components/About.jsx` | Bio, stats, social links |
| `src/components/Skills.jsx` | Your skill names and percentages |
| `src/components/Projects.jsx` | Project titles, descriptions, links |
| `src/components/Experience.jsx` | Companies, roles, dates |
| `src/components/Contact.jsx` | Email, LinkedIn, GitHub links |
| `src/components/Footer.jsx` | Your name, socials |
| `index.html` | Page `<title>` and meta description |
| `vite.config.js` | `base: '/your-repo-name/'` |

### 📧 Setting up the Contact Form

The contact form currently simulates submission. To make it work for real, choose one:

**Option A — Formspree (easiest, free):**
```jsx
// In Contact.jsx, replace the handleSubmit function:
const handleSubmit = async (e) => {
  e.preventDefault()
  setStatus('sending')
  const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  })
  setStatus(res.ok ? 'sent' : 'error')
}
```
Sign up at https://formspree.io, create a form, and paste your form ID.

**Option B — EmailJS (no backend):**
Install: `npm install @emailjs/browser` and follow their React guide at https://emailjs.com

---

## 🐙 Step 5 — Create a GitHub Repository

1. Go to https://github.com/new
2. Create a new repository (e.g. **portfolio**)
3. Make it **Public** (required for free GitHub Pages)
4. Don't initialize with README (you'll push your code)

```bash
# Inside your project folder:
git init
git add .
git commit -m "feat: initial portfolio commit"
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

---

## ⚙️ Step 6 — Update vite.config.js

Open `vite.config.js` and set `base` to your exact repository name:

```js
// vite.config.js
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',   // ← change 'portfolio' to YOUR repo name
})
```

> ⚠️ This is critical. If your repo is named `my-portfolio`, set `base: '/my-portfolio/'`.

---

## 🌍 Step 7 — Deploy to GitHub Pages

Run the deploy command:

```bash
npm run deploy
```

This will:
1. Run `npm run build` (creates optimized files in `/dist`)
2. Push the `/dist` folder to a `gh-pages` branch on GitHub

---

## 🔧 Step 8 — Configure GitHub Pages

1. Go to your GitHub repository
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under **Source**, select **Deploy from a branch**
4. Set branch to **gh-pages** and folder to **/ (root)**
5. Click **Save**

Wait ~60–90 seconds, then visit:

```
https://YOUR_USERNAME.github.io/portfolio/
```

🎉 Your portfolio is live!

---

## 🔁 Updating Your Portfolio Later

Whenever you make changes:

```bash
# 1. Make your edits to any component
# 2. Test locally
npm run dev

# 3. Deploy the update
npm run deploy
```

GitHub Pages will update within ~60 seconds.

---

## 🗂 Project Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Cursor.jsx       # Custom mouse cursor
│   │   ├── Navbar.jsx       # Sticky navigation
│   │   ├── Hero.jsx         # Hero with typewriter
│   │   ├── Marquee.jsx      # Skills ticker
│   │   ├── About.jsx        # About section
│   │   ├── Skills.jsx       # Animated skill bars
│   │   ├── Projects.jsx     # Project list
│   │   ├── Experience.jsx   # Timeline
│   │   ├── Contact.jsx      # Contact form
│   │   └── Footer.jsx       # Footer
│   ├── App.jsx              # Root with scroll animations
│   ├── main.jsx             # Entry point
│   └── index.css            # Tailwind + global styles
├── index.html
├── vite.config.js           # ← set your base here
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## 🎨 Customizing the Design

### Colors (tailwind.config.js)
```js
colors: {
  ink: '#0D0D0D',       // main text / dark
  paper: '#F5F0E8',     // background
  cream: '#EDE8DC',     // section bg
  accent: '#E8572A',    // orange highlight ← change this!
  muted: '#8C8884',     // secondary text
}
```

### Fonts
The portfolio uses **Syne** (display) + **DM Sans** (body) + **JetBrains Mono** (code).
Change them in `index.html` (Google Fonts link) and `tailwind.config.js`.

---

## ❓ Troubleshooting

| Issue | Fix |
|-------|-----|
| Blank page after deploy | Check `base` in `vite.config.js` matches your repo name exactly |
| `npm run deploy` fails | Make sure you've run `git push` to GitHub first |
| Custom cursor not showing | Expected on touch devices — cursor hides on mobile automatically |
| Fonts not loading | Disable ad blockers or check your internet connection |
| Build errors | Run `npm install` again, then `npm run build` |

---

## 📄 Adding a Real Resume PDF

Place your `resume.pdf` in the `/public` folder:

```
public/
  favicon.svg
  resume.pdf    ← add here
```

The "Download CV" button in the About section already points to `/resume.pdf`.

---

*Built with React + Vite + Tailwind CSS. Deployed on GitHub Pages.*
