# 💻 Jylian Summers – Developer Portfolio

This is my responsive developer portfolio built with **React**, **Vite**, and **Tailwind CSS**. It highlights select projects, technical skills, and experience — all presented with clean UI design and accessible layout practices.

## 🛠 Tech Stack

**Frontend:** React · Vite · Tailwind CSS  
**Deployment:** GitHub Pages  
**Tooling:** ESLint · Prettier · GitHub Actions (CI/CD)  
**Creative Tools:** DaVinci Resolve (video editing for UI demos)

---

## 🧠 Case Study: GitHub Pages & Broken Image Paths

### 🐞 Problem  
After deploying to GitHub Pages, my background image didn’t render — despite working perfectly in local dev.

### 🔍 Root Cause  
Vite's asset paths require special handling for subdirectory deployments (like `/Portfolio/`).

### ✅ Solution  
Add the correct base path in your `vite.config.js`:

```js
export default defineConfig({
  base: '/Portfolio/',
  plugins: [react()],
});
