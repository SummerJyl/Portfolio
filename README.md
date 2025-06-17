# 💻 Jylian Summers – Developer Portfolio

A responsive personal portfolio site built with **React**, **Vite**, and **Tailwind CSS**. It showcases my recent projects, technical skills, and work experience, with an accessible design and modern UI best practices.

## 🔧 Tech Stack

- React 18
- Vite
- Tailwind CSS
- gh-pages for GitHub deployment
- React Icons

---

## 🐛 GitHub Pages Background Image Not Rendering (Case Study)

### Problem
After deploying my React + Vite portfolio to GitHub Pages, everything worked **except the background image**, which appeared locally (`localhost`) but not on the live site at [https://summerjyl.github.io/Portfolio/](https://summerjyl.github.io/Portfolio/).

### Diagnosis
Vite uses `import.meta.env.BASE_URL` to resolve asset paths like images. On GitHub Pages, your project is hosted in a **subdirectory** (`/Portfolio/`), **not the root** (`/`). Without the correct base config, asset paths like `/images/bg-hero.png` are incorrectly resolved.

### Root Cause
The Vite config was missing the `base` setting for subdirectory deployment:

```js
// vite.config.js
export default defineConfig({
  base: '/Portfolio/', // ← required for GitHub Pages
  plugins: [react()],
});
