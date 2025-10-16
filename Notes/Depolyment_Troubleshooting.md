# GitHub Pages Deployment Troubleshooting Guide

## Overview
This guide helps you diagnose and fix issues when your GitHub Pages site isn't showing your latest updates.

## Common Symptoms
- ✅ Code changes are in VS Code locally
- ✅ `git status` shows "working tree clean"
- ✅ Changes appear on GitHub repository
- ❌ **Live site doesn't show updates**

## Diagnostic Checklist

### 1. Verify Changes Are on GitHub

**Check locally:**
```bash
git status
# Should show: "Your branch is up to date with 'origin/main'"
```

**Then visit GitHub:**
- Go to `github.com/[username]/[repository]`
- Navigate to the file you changed
- Use `Ctrl+F` to search for your new content
- **Confirm it's there**

---

### 2. Check GitHub Actions / Deployment Status

**Go to:** `github.com/[username]/[repository]/actions`

**Look for:**
- Recent workflow runs
- Green ✓ (success), Yellow ⚪ (running), or Red ✗ (failed)
- When was the last successful deployment?

#### No Recent Deployments?
**Solution:** Trigger a new deployment
```bash
echo " " >> README.md
git add README.md
git commit -m "Trigger deployment"
git push origin main
```

#### Red ✗ Failed Deployment?
**Solution:** Click the failed run → identify error → see specific fixes below

---

### 3. Check GitHub Pages Settings

**Go to:** `github.com/[username]/[repository]/settings/pages`

**Verify:**
- Source: Deploy from a branch
- Branch: **main** (or your working branch)
- Folder: **/ (root)**

**Common Issue:** Deploying from `gh-pages` but pushing to `main`

---

### 4. Browser Cache Issues

**Try:**
1. **Hard Refresh:** `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
2. **Incognito/Private Window**
3. **Clear Browser Cache**

---

## Common Error Fixes

### Submodule Issues (exit code 128)
See separate Submodule_Fix.md guide

### Build/Compile Failures
```bash
# Test build locally first
npm install
npm run build
# Fix any errors, then push
```

### 404 Page Not Found
Check base URL in config:
```js
// vite.config.js
base: '/repository-name/'
```

### Assets Not Loading
Use proper paths:
```jsx
<img src={`${import.meta.env.BASE_URL}images/photo.jpg`} />
```

---

## Quick Commands
```bash
# Check status
git status
git branch

# Force deployment
git commit --allow-empty -m "Trigger deployment"
git push origin main

# Check for updates
git pull origin main
```

---

## Most Common Issues
1. Not pushing to GitHub
2. Deploying from wrong branch
3. Broken submodules
4. Browser cache
5. Build failures

**Golden Rule:** If Actions shows green ✓ but site doesn't update → Hard refresh browser