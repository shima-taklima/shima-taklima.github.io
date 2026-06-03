# 🚀 Deployment Guide
### Shima Taklima — Portfolio Site
**Live URL:** https://shima-taklima.github.io

---

## 📁 Branch Structure

| Branch | Purpose | How it's updated |
|--------|---------|-----------------|
| `source` | Your source code (`src/`, `package.json`, etc.) | `git push origin source` |
| `main` | Built files served by GitHub Pages | `npm run deploy` (automatic) |

> ⚠️ **Never manually edit or push to `main`** — it is fully managed by `npm run deploy`.

---

## 🖥️ Local Development

```bash
# 1. Make sure you're on the source branch
git checkout source

# 2. Install dependencies (first time only, or after pulling new changes)
npm install

# 3. Start local dev server
npm run dev
```

Open your browser at **http://localhost:5173**

Hot reload is enabled — changes in `src/` appear instantly without refreshing.

---

## ✏️ Making Changes & Deploying

Every time you update the portfolio, follow these **4 steps in order**:

### Step 1 — Check you're on source branch
```bash
git branch
```
You should see:
```
* source   ← must show this
  main
```
If you're on `main`, switch back:
```bash
git checkout source
```

### Step 2 — Make your code changes
Edit files inside `src/` as needed. Test locally with `npm run dev` first.

### Step 3 — Save source code to GitHub
```bash
git add .
git commit -m "describe what you changed"
git push origin source
```

### Step 4 — Build and publish live site
```bash
npm run deploy
```

You should see:
```
> npm run build
✓ built in ~500ms

Published
```

Wait **1–2 minutes** then visit https://shima-taklima.github.io to confirm.

---

## 🔍 What `npm run deploy` Does Internally

```
npm run deploy
      │
      ├─ 1. npm run build
      │       └─ Vite compiles src/ → dist/
      │           ├─ dist/index.html
      │           └─ dist/assets/
      │               ├─ index-xxxxx.js   (all JS minified)
      │               └─ index-xxxxx.css  (all CSS minified)
      │
      └─ 2. Pushes dist/ contents → main branch on GitHub
                  └─ GitHub Pages detects push → serves live site
```

Your **source code** stays on `source` branch.  
The **built files** go to `main` branch.  
GitHub Pages serves `main` to visitors.

---

## 📋 Quick Reference Card

```
┌─────────────────────────────────────────────┐
│           EVERY TIME YOU MAKE CHANGES        │
├─────────────────────────────────────────────┤
│                                             │
│  git checkout source      ← check branch   │
│  (make your edits)        ← edit src/      │
│  git add .                                  │
│  git commit -m "message"  ← save code      │
│  git push origin source   ← backup code    │
│  npm run deploy           ← publish site   │
│                                             │
│  Wait ~1 min → shima-taklima.github.io     │
└─────────────────────────────────────────────┘
```

---

## 🌐 Multi-language Content (i18n)

All text content lives in two files — never hardcoded in components:

| File | Language |
|------|----------|
| `src/i18n/en.js` | English |
| `src/i18n/ja.js` | Japanese |

### To update text content

**Example — update your email in both languages:**

`src/i18n/en.js`
```js
contact: {
  links: [
    ['Email', 'your@email.com', 'mailto:your@email.com'],
  ]
}
```

`src/i18n/ja.js`
```js
contact: {
  links: [
    ['メール', 'your@email.com', 'mailto:your@email.com'],
  ]
}
```

Then save, commit and run `npm run deploy`.

---

## 📄 Updating Your CV / Resume

1. Replace the PDF inside the `public/` folder:
```
public/
  履歴書_shima.pdf   ← replace this file with your new version
```

2. Run:
```bash
npm run deploy
```

3. Accessible at:
```
https://shima-taklima.github.io/履歴書_shima.pdf
```

---

## 🔧 Adding a New Project

Open `src/i18n/en.js` and `src/i18n/ja.js`, find the `projects.items` array and add a new entry:

**`src/i18n/en.js`**
```js
{
  num:    '05',
  cat:    'React',
  year:   '2025',
  title:  'Your Project Name',
  desc:   'Short description of what you built and what you learned.',
  tags:   ['React', 'TypeScript', 'Vite'],
  live:   'https://your-live-url.com',
  github: 'https://github.com/shima-taklima/project-repo',
},
```

**`src/i18n/ja.js`**
```js
{
  num:    '05',
  cat:    'React',
  year:   '2025年',
  title:  'プロジェクト名',
  desc:   '制作内容と学んだことの簡単な説明。',
  tags:   ['React', 'TypeScript', 'Vite'],
  live:   'https://your-live-url.com',
  github: 'https://github.com/shima-taklima/project-repo',
},
```

Then deploy:
```bash
git add .
git commit -m "add new project: project name"
git push origin source
npm run deploy
```

---

## 📬 Contact Form (Formspree)

Form submissions are handled by **Formspree** — no backend needed.

- **Form ID:** `xjgznklw`
- **Dashboard:** https://formspree.io/forms/xjgznklw
- **Free tier:** 50 submissions/month

To change the notification email:
1. Log in to https://formspree.io
2. Open your form → **Settings** → **Notifications**
3. Update the email address

---

## ⚙️ Key Configuration Files

| File | What it controls |
|------|-----------------|
| `vite.config.js` | Build settings — `base: '/'` must stay as `/` for user site |
| `tailwind.config.js` | Design tokens — colors, fonts, animations |
| `src/index.css` | Global styles, Tailwind directives |
| `src/i18n/en.js` | All English text content |
| `src/i18n/ja.js` | All Japanese text content |
| `package.json` | Scripts including `npm run deploy` |

---

## 🚨 Troubleshooting

### Blank page after deploying
```bash
# 1. Hard refresh — bypass browser cache
Cmd + Shift + R     (Mac)
Ctrl + Shift + R    (Windows)

# 2. Test in private / incognito window first
# If it works in private → it was just browser cache

# 3. Force clean redeploy
git checkout source
rm -rf dist
npm run deploy
```

### "Published" shows in terminal but site not updated
- GitHub Pages takes **1–2 minutes** to propagate
- Check the **Actions** tab on GitHub — wait for green ✅
- Check **Settings → Pages** shows Branch: `main`, Folder: `/ (root)`

### Accidentally committed to main branch
```bash
git checkout source   # switch back immediately and work from here
```

### npm run deploy fails
```bash
# Reinstall dependencies and retry
npm install
npm run deploy
```

---

## 📊 Project Structure

```
portfolio/                    ← source branch
├── public/
│   ├── favicon.svg
│   └── 履歴書_shima.pdf      ← CV / resume file
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Marquee.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── Cursor.jsx
│   ├── i18n/
│   │   ├── en.js             ← English content
│   │   ├── ja.js             ← Japanese content
│   │   └── LangContext.jsx   ← language switching logic
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js            ← base: '/' — do not change
├── tailwind.config.js
├── package.json
└── DEPLOYMENT_GUIDE.md       ← this file
```

---

*Last updated: June 2025*
