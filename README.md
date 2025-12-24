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
---

## 💭 My Engineering Philosophy

**Written December 2025**

### On Building Software in the AI Era

AI has fundamentally changed what it means to be a software engineer. The skill is no longer *memorizing syntax* - it's *exercising judgment*.

I build extensively with AI tools. But I've learned that AI-generated code is a **first draft**, not a final product.

#### What AI Does Well
- ✅ Generate boilerplate instantly
- ✅ Recall framework syntax perfectly  
- ✅ Produce working code from descriptions
- ✅ Explain error messages
- ✅ Suggest common patterns

#### What AI Misses
- ❌ Edge cases that appear in production
- ❌ System-level thinking (how components interact)
- ❌ User experience implications
- ❌ When "working" code is actually wrong
- ❌ Performance and scalability concerns
- ❌ Maintainability for future developers

#### My Approach

Before accepting AI-generated code, I ask:

**Technical Questions:**
- Does this handle edge cases?
- What happens when this scales?
- How does this perform under load?
- Is this maintainable?

**User Questions:**
- What's the user experience?
- What if users do the unexpected?
- Are error messages helpful?
- Would this confuse anyone?

**Production Questions:**
- What breaks when this fails?
- How do we monitor this?
- What's the deployment strategy?
- What's the rollback plan?

#### Evidence From My Projects

**Example 1: CORS Configuration** (BHDE)
- **AI gave me:** Hardcoded port in controller annotation
- **I refactored to:** Global configuration supporting multiple environments
- **Why it matters:** Production-ready, maintainable, follows best practices

**Example 2: In-Memory Storage** (BHDE)
- **AI implemented:** User auth with HashMap storage
- **I recognized:** Creates terrible UX when server restarts
- **My solution:** Document as tech debt, plan PostgreSQL migration
- **Why it matters:** Honest about limitations, production-focused thinking

**Example 3: Form Validation** (Patient Login)
- **AI generated:** Registration form with optional name fields
- **I caught:** "Welcome, !" confuses users
- **My fix:** Required fields, helpful error messages, backend validation
- **Why it matters:** User experience over technical correctness

**Example 4: Browser Caching** (BHDE)
- **AI couldn't:** Debug why changes weren't appearing
- **I systematically:** Tried 10+ solutions over 2 hours
- **Result:** Found multi-layer caching issue, documented solution
- **Why it matters:** Persistence through ambiguous problems

#### The Real Skill

In 2024, the valuable engineering skill isn't:
- ❌ Writing code faster than AI
- ❌ Memorizing framework APIs
- ❌ Knowing more syntax

It's:
- ✅ Spotting what AI missed
- ✅ Understanding system implications
- ✅ Making architectural decisions
- ✅ Ensuring production readiness
- ✅ Creating good user experiences

**AI writes code. Engineers make it work in the real world.**

#### For Interviewers

If you're evaluating my projects, don't ask: *"Did you write this code yourself?"* (Of course I used AI - everyone should)

Ask instead:
- *"What problems did you catch that AI missed?"*
- *"How did you decide between technical approaches?"*
- *"What would you change for production?"*
- *"How did you ensure good UX?"*

**That's where the engineering judgment lives.**

---

### The Bottom Line

Knowledge matters less. **Wisdom matters more.**

I don't compete with AI on syntax. I compete on:
- System thinking
- Edge case identification  
- User empathy
- Production readiness
- Debugging persistence

**That's the job now.**
