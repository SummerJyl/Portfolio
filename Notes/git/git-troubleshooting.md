# 🧩 Git Troubleshooting Cheatsheet

## 🔄 Fix "divergent branches" or push rejection

```bash
git pull origin main --allow-unrelated-histories
# OR (if safer)
git pull origin main --rebase

If error persists:
git config pull.rebase true
git pull origin main

🧨 "fatal: refusing to merge unrelated histories"
git pull origin main --allow-unrelated-histories

🧼 Abort a stuck rebase
git rebase --abort

✅ Continue after resolving conflict
git add .
git rebase --continue

❌ Remove old rebase
rm -fr .git/rebase-merge

🧭 Set upstream (to fix "no tracking info")
git branch --set-upstream-to=origin/main main

💡 Tip: Always git status before and after big commands.