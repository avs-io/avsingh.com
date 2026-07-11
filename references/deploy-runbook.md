# Deploy Runbook — avsingh.com

The build is on disk at `~/avsingh.com/`. Production deploy needs Chief because the GitHub account (`avs-io`) has no token/key on this machine yet.

## Step 1: Get `avs-io` auth working on this machine

Per profile memory: `avs-io` is Chief's canonical GH account.

```bash
# Option A — Personal Access Token (preferred, fastest)
# Chief creates PAT at https://github.com/settings/tokens with `repo` scope
# Then:
gh auth login --hostname github.com --with-token
# paste token, choose account 'avs-io'

# Option B — SSH key, if the avs-io account is configured with the existing ed25519
# Update ~/.ssh/config with a new Host block:
cat >> ~/.ssh/config <<'EOF'

# avs-io
Host github-avs
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519
  IdentitiesOnly yes
EOF
# (will only work if the SSH key is registered to avs-io — confirm with Chief)
```

## Step 2: Create the repo

```bash
gh repo create avs-io/avsingh.com \
  --public \
  --description "Personal site for Aditya Vikram Singh." \
  --source ~/avsingh.com
```

## Step 3: Push and enable Pages

```bash
cd ~/avsingh.com
git init -b main  # if not already
git add -A
git commit -m "initial site: two variants + comparator + design rationale"
git push -u origin main

gh repo edit avs-io/avsingh.com --enable-pages --pages-source-branch=main --pages-source-path=/
```

Wait 1-4 min, then verify:
```bash
gh api repos/avs-io/avsingh.com/pages/builds/latest | grep -E '"status"|"error"'
# expect: "status": "built"
```

## Step 4: Custom domain `avsingh.com`

This is the part that needs Chief's hands on a registrar (Namecheap? Cloudflare? GoDaddy? — per profile, avsingh.com has been registered for years).

GitHub Pages will serve at `https://avs-io.github.io/avsingh.com/`. For `https://avsingh.com`:

1. Add a `CNAME` file to the repo root:
```bash
echo "avsingh.com" > ~/avsingh.com/CNAME
git add CNAME && git commit -m "add custom domain" && git push
```

2. At the registrar, set DNS:
   - `A` records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME`: `www` → `avs-io.github.io`

3. In GitHub repo settings → Pages, type `avsingh.com` as the custom domain. Tick "Enforce HTTPS" once the cert provisions (~15 min).

## Step 5: After deploy

- Update Topmate and LinkedIn placeholders in `variant-b/index.html` when you publish handles
- Mark the file `data-pending="true"` on the relevant `<a>` tags → removed

## What is NOT done and why

- **No Pages trigger fired** — can't run without `avs-io` auth
- **No DNS changes** — registrar account not on this machine
- **HTTPS cert provisioning** — automatic on Pages once custom domain set
- **Topmate / LinkedIn slugs** — not yet known

## Fallback if avs-io can't be set up today

Push under `eoniclife` (current active GH auth):
```bash
gh repo create eoniclife/avsingh.com --public --description "..." --source ~/avsingh.com
gh repo edit eoniclife/avsingh.com --enable-pages --pages-source-branch=main --pages-source-path=/
```

This serves at `eoniclife.github.io/avsingh.com`. Ownership can be transferred to avs-io from GitHub Settings → Danger Zone → Transfer, no rebuild needed.

## Final QA after deploy

1. Visit `https://avsingh.com/` (or pages URL) → should redirect to /variant-b/ via the comparator's "Go directly to Variant B" link
2. Click "Read on Substack" → opens adityavikramsingh8.substack.com (verify external link works)
3. Open `https://avsingh.com/references/critique-of-a.md` → design rationale accessible
4. Lighthouse mobile audit → expect 95+ performance, 100 accessibility (contrast is AA+ on every text/background combo)
5. Tab through the page → focus states visible (gold outline)
