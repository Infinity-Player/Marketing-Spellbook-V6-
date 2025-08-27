Repository history was rewritten to remove tracked node_modules directories and large files.

If you previously cloned this repository, follow these steps to resync safely:

1. Backup any local uncommitted changes (stash or copy your work).

2. Fetch the updated remote and reset your local main to match it exactly:

   git fetch origin
   git reset --hard origin/main

3. Reinstall dependencies locally (do not commit node_modules):

   # frontend
   cd frontend
   npm ci

   # backend
   cd ../backend
   npm ci

4. If you operate other branches based on old history, rebase or recreate them from the updated main.

Notes:
- This rewrite is destructive to history for the affected branch. After the reset, local history that referenced removed commits will no longer match origin.
- If you need help migrating a branch, ask the repo maintainer for guidance.
