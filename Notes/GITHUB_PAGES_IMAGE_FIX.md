# GitHub Pages - Images Not Displaying Troubleshooting Guide

## Problem Summary

After switching from branch-based deployment to GitHub Actions for GitHub Pages, images (background images, profile pictures, etc.) were not appearing on the deployed site. The site would load but show:
- White background instead of hero background image
- Missing profile images
- 404 errors when accessing images directly

## Root Causes Discovered

This issue had **multiple layered problems** that needed to be resolved:

1. **Git Submodules Blocking Deployment**
2. **GitHub Pages Deployment Method Changed**
3. **Case Sensitivity Issue (Public vs public)**
4. **.gitignore Blocking Image Files**
5. **Images Not Committed to Repository**

---

## Issue #1: Broken Git Submodules

### Symptom
```
The process '/usr/bin/git' failed with exit code 128
No url found for submodule path '[folder/path]' in .gitmodules
```

### Why This Happened
Git submodules were accidentally created (repositories nested inside the main repository) without proper remote URLs configured. This caused GitHub Pages deployment to fail completely.

### Solution
Remove broken submodules and convert to regular folders:

```bash
# For each broken submodule (replace FOLDER/PATH with actual path)
git rm --cached FOLDER/PATH
rm -rf .git/modules/FOLDER/PATH
git config -f .gitmodules --remove-section submodule.FOLDER/PATH
git add .gitmodules
git commit -m "Remove broken submodule"
git add FOLDER/PATH
git commit -m "Add as regular folder"
git push origin main
```

**Submodules Fixed:**
- `BHDE/BioHealth/DataExplorer`
- `Notes/figma-ui-kit`
- `NutriWell`
- `PFD`
- `node_modules/.cache/gh-pages/...`

**See Also:** `SUBMODULE_FIX.md` for detailed submodule troubleshooting

---

## Issue #2: GitHub Pages Deployment Method

### Symptom
- Site deployed but showed blank white page
- Console error: `Failed to load resource: src/main.jsx 404`
- Site trying to serve source files instead of built files

### Why This Happened
GitHub Pages was originally set to deploy from `gh-pages` branch at `/` (root). When we switched to "Deploy from a branch: main / (root)", it tried to serve source code instead of the built `dist` folder. The `dist` folder couldn't be selected because it wasn't properly configured.

### Solution - Switch to GitHub Actions Deployment

**Step 1: Change GitHub Pages Source**
- Go to: `Settings → Pages`
- Change Source from "Deploy from a branch" to **"GitHub Actions"**

**Step 2: Create Deployment Workflow**

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Setup Pages
        uses: actions/configure-pages@v4
        
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: dist
          
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

**Step 3: Commit and Push**
```bash
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Actions deployment workflow"
git push origin main
```

**Key Points:**
- The workflow builds the site using `npm run build`
- Uploads the `dist` folder (not `./dist` - the `./` caused issues initially)
- Deploys to GitHub Pages automatically on every push to main

---

## Issue #3: Case Sensitivity - Public vs public

### Symptom
After deployment, checking the Actions build log showed:
```
ls: cannot access 'public/': No such file or directory
public folder does not exist
```

But locally, the folder existed as `Public` (capital P).

### Why This Happened
- **macOS/Windows** are case-insensitive: `Public` and `public` are treated as the same
- **Linux/GitHub Actions** are case-sensitive: `Public` and `public` are different folders
- **Vite expects** a folder named `public` (lowercase) to copy assets to `dist` during build
- The folder was named `Public` (capital P), so Vite couldn't find it on Linux/Actions

### Solution - Rename Folder (Two-Step Process)

Git on case-insensitive systems doesn't recognize simple renames like `mv Public public`. We had to use a two-step rename:

```bash
# Step 1: Rename to temp name
git mv Public temp_public
git commit -m "Rename Public to temp"

# Step 2: Rename temp to lowercase public
git mv temp_public public
git commit -m "Rename temp to public (lowercase)"

# Push both commits
git push origin main
```

**Why Two Steps?**
This works around Git's case-insensitivity on macOS/Windows. The intermediate name forces Git to recognize the change.

**Verification:**
After pushing, check GitHub repository - you should see `public` (lowercase) folder.

---

## Issue #4: .gitignore Blocking Images

### Symptom
Even after fixing the folder name, images still weren't in the repository. Running:
```bash
git ls-files public/images/
```
Returned nothing (files not tracked).

### Why This Happened
The `.gitignore` file had multiple patterns blocking the images:

```
# These lines were blocking images
images/              # Blocked ALL folders named "images"
public/bg-hero.*     # Blocked specific image files
public/li-pix.*      # Blocked specific image files
```

### Solution - Update .gitignore

**Remove blocking patterns from `.gitignore`:**

```bash
# Remove or comment out these lines:
# images/
# public/bg-hero.*
# public/li-pix.*
```

**Keep these (they're correct):**
```
node_modules/
dist/
.env
.DS_Store
```

**After editing `.gitignore`:**
```bash
git add .gitignore
git commit -m "Remove image blocking patterns from gitignore"
git push origin main
```

---

## Issue #5: Images Not Committed

### Symptom
After fixing `.gitignore`, files still weren't in repository.

### Solution - Force Add Images

```bash
# Force add images (overrides any remaining gitignore rules)
git add -f public/images/bg-hero.png
git add -f public/images/li-pix.jpg
git add -f public/images/li-pix.png

# Or add entire public folder
git add -f public/

# Commit and push
git commit -m "Add public folder with images"
git push origin main
```

**Verification:**
- Go to: `https://github.com/[username]/Portfolio/tree/main/public/images`
- Confirm images are visible on GitHub
- Go to Actions tab, wait for green checkmark
- Visit site and hard refresh (Cmd/Ctrl + Shift + R)

---

## Complete Resolution Timeline

1. ✅ **Fixed broken git submodules** (multiple folders)
2. ✅ **Changed deployment method** from branch-based to GitHub Actions
3. ✅ **Created proper deployment workflow** (deploy.yml)
4. ✅ **Renamed Public → public** (case sensitivity fix)
5. ✅ **Updated .gitignore** (removed image blocking patterns)
6. ✅ **Force added images** to git repository
7. ✅ **Verified deployment** (images appear in dist during build)
8. ✅ **Site working** (background and images load correctly)

---

## Debugging Tools Used

### 1. Check What's Being Ignored
```bash
git check-ignore -v public/images/bg-hero.png
```
Shows which `.gitignore` rule is blocking a file.

### 2. Check What's Tracked
```bash
git ls-files public/images/
```
Lists files Git is tracking in that folder.

### 3. Check Ignored Files
```bash
git status --ignored
```
Shows all ignored files.

### 4. List Submodules
```bash
git ls-files --stage | grep 160000
```
Lists all folders Git thinks are submodules.

### 5. View .gitmodules
```bash
cat .gitmodules
```
Shows submodule configuration.

### 6. Debug GitHub Actions Build

Add debug steps to `.github/workflows/deploy.yml`:

```yaml
- name: Debug - Check public folder BEFORE build
  run: |
    echo "Contents of public folder:"
    ls -laR public/ || echo "public folder does not exist"

- name: Build
  run: npm run build

- name: Debug - List dist contents AFTER build
  run: |
    echo "Contents of dist folder:"
    ls -laR dist/
```

These steps show:
- Whether source files exist before build
- Whether built files exist after build
- Exact folder structure in Actions environment

---

## Prevention Tips

### 1. Avoid Creating Accidental Submodules
**Don't** run `git init` inside an existing Git repository unless you specifically want a submodule.

### 2. Use Lowercase Folder Names
For cross-platform compatibility:
- Use `public` not `Public`
- Use `images` not `Images`
- Consistent lowercase prevents case-sensitivity issues

### 3. Be Careful With .gitignore
Before adding broad patterns like `images/` or `assets/`, consider:
- Will this block important files?
- Use specific paths: `node_modules/` instead of `*_modules/`
- Test with: `git check-ignore -v [filepath]`

### 4. Verify Files Are Tracked
After adding files:
```bash
git ls-files [folder/]
```
Confirms files are actually tracked.

### 5. Test Builds Locally
Before pushing:
```bash
npm run build
ls dist/images/
```
Verify images are being copied to dist.

### 6. Monitor GitHub Actions
- Check Actions tab after every push
- Read build logs when errors occur
- Add debug steps to troubleshoot

---

## Quick Reference Commands

### Force Trigger Deployment
```bash
git commit --allow-empty -m "Trigger deployment"
git push origin main
```

### Hard Refresh Browser
- **Windows/Linux:** Ctrl + Shift + R
- **Mac:** Cmd + Shift + R
- Or open in incognito/private window

### Check Image Paths
Local:
```bash
ls -la public/images/
ls -la dist/images/
```

Deployed:
- https://[username].github.io/[repo]/images/bg-hero.png

### Common File Locations
```
Portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── public/                      # Source assets (lowercase!)
│   └── images/
│       ├── bg-hero.png
│       ├── li-pix.jpg
│       └── li-pix.png
├── dist/                        # Build output (gitignored)
│   └── images/                  # Vite copies from public/
├── src/
│   └── App.jsx                  # References images
├── .gitignore                   # Don't block public/ or images/
├── vite.config.js               # base: '/Portfolio/'
└── package.json
```

---

## Related Issues

### Images Load Locally But Not on Deployed Site
**Check:**
1. Are images in `public/` folder (not `src/assets/`)?
2. Is `public` lowercase?
3. Are images committed to GitHub?
4. Does `vite.config.js` have correct `base` path?
5. Did GitHub Actions build succeed?

### Background Image Specific Syntax
```jsx
// Correct way to reference public images in Vite
style={{
  backgroundImage: `url('${import.meta.env.BASE_URL}images/bg-hero.png')`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center top',
}}
```

### Profile Image Syntax
```jsx
<img 
  src={`${import.meta.env.BASE_URL}images/li-pix.jpg`}
  alt="Profile"
/>
```

---

## Summary

**The core issue:** Multiple problems compounded to prevent images from deploying:
- Broken submodules blocked initial deployments
- Wrong deployment method tried to serve source code
- Case-sensitive folder name `Public` vs `public` 
- `.gitignore` blocked image files
- Images never committed to repository

**The solution:** Systematic debugging to identify each issue, fixing them in order, and verifying at each step using GitHub Actions debug logs and command-line tools.

**Key lesson:** When deploying to GitHub Pages with a build process (Vite, React, etc.), ensure:
1. Source files are committed to repository
2. Folder names are lowercase and match build tool expectations
3. .gitignore doesn't block necessary files
4. GitHub Actions workflow is properly configured
5. Build process successfully creates dist folder with all assets

---

## Additional Resources

- **GitHub Pages Documentation:** https://docs.github.com/pages
- **Vite Static Asset Handling:** https://vitejs.dev/guide/assets.html
- **Git Submodules:** https://git-scm.com/book/en/v2/Git-Tools-Submodules
- **GitHub Actions:** https://docs.github.com/actions

---

**Document Created:** October 17, 2024  
**Issue Duration:** ~2 days of troubleshooting  
**Final Status:** ✅ Resolved - All images displaying correctly