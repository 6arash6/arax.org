# Session Learned — Aug 5, 2026

## What We Did
Migrated araxlabs.org from Reveal.js to Astro + Tailwind CSS. Built 12 components, configured GitHub Pages deploy via GitHub Actions.

## Key Decisions
- **Astro over Reveal.js**: Full static site, better SEO, proper SPA-like experience
- **FormSubmit.co over Formspree**: Free, no setup required, sends to email directly
- **`npm install` over `npm ci` in CI**: Avoids lock file sync issues between Node 24 (local) and Node 22 (CI)

## Gotchas & Fixes
| Issue | Cause | Fix |
|-------|-------|-----|
| GitHub Actions build failed | Lock file generated with npm 11 (Node 24), CI uses npm 10 (Node 22) | Changed `npm ci` → `npm install` in workflow |
| Contact form "Error sending message" | Placeholder Formspree ID `xyzwokvp` | Switched to FormSubmit.co (free, no setup) |
| Old error alert persisted | Browser/CDN cache | User hard-refreshed (Ctrl+Shift+R) |
| Static assets not found in build | `img/` and `video/` at project root | Moved to `public/img/` and `public/video/` |
| CNAME not in build output | `CNAME` at project root | Moved to `public/CNAME` |

## File Structure (Astro)
```
src/
├── layouts/Layout.astro        # HTML shell, meta, gradient CSS, animations
├── pages/index.astro           # Assembles all components
├── styles/global.css           # Tailwind import
└── components/
    ├── Navbar.astro
    ├── Hero.astro
    ├── Problem.astro
    ├── Solution.astro
    ├── GridSaas.astro
    ├── Dashboard.astro
    ├── Technology.astro
    ├── Results.astro
    ├── Market.astro
    ├── Traction.astro
    ├── Team.astro
    ├── Contact.astro
    └── Footer.astro
public/
├── CNAME                       # araxlabs.org
├── img/                        # Logo, thesis figures, dashboard, infographics
└── video/                      # Noteboom recordings
.github/workflows/deploy.yml   # GitHub Pages auto-deploy
```

## Commands
- `npm run build` — build static site to `dist/`
- `npm run dev` — local dev server
- `env -u GITHUB_TOKEN git push origin main` — push (bypasses GITHUB_TOKEN override)

## TODOs for User
- [ ] Add dashboard screenshot to `public/img/dashboard/grafana-preview.png`
- [ ] Create infographics with Nano Banana → `public/img/infographics/`
- [ ] Record dashboard demo with Noteboom → `public/video/`
- [ ] Click FormSubmit.co confirmation email (first submission triggers it)
- [ ] Replace LinkedIn URL in Contact.astro if needed (currently placeholder)
