# 🧠 Git Cheatsheet

## Common Commands

```bash
git init               # Initialize a new repo
git clone <url>        # Clone repo
git status             # Check status
git add .              # Stage all changes
git commit -m "msg"    # Commit changes
git push origin main   # Push to remote
git pull origin main   # Pull latest from remote

```branching
git checkout -b new-feature   # Create new branch
git switch main               # Switch branches
git merge new-feature         # Merge into current branch

```Fixes
git stash             # Save work in progress
git reset --hard      # Reset to last commit (⚠️)
git rebase --continue # Continue rebase
