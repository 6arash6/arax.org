# ARAX LABS Website — Implementation Plan

## Overview

Build an investor/grant-focused pitch deck website for ARAX LABS using Reveal.js on GitHub Pages. The site tells the broader startup story — not just the thesis — covering the Grid-SaaS vision, market sizing, and traction.

**Domain:** `araxlabs.org` (Cloudflare DNS, email already configured)
**Repo:** `/workspaces/arax.org`
**Hosting:** GitHub Pages

---

## 1. Content Strategy

### Slide Structure (11 slides)

| # | Slide | Content | Media |
|---|-------|---------|-------|
| 1 | **Hero** | Logo + tagline: "AI-Driven Predictive Scaling for Energy-Efficient Infrastructure" | Logo animation (Nano Banana) |
| 2 | **Problem** | ~30% energy waste in data centers + grid stress from AI boom | Infographic (Nano Banana) |
| 3 | **Solution** | Predictive scaling engine — tool-agnostic, 15–30% OPEX reduction | Architecture diagram (Nano Banana) |
| 4 | **Grid-SaaS Vision** | The pivot: from data center optimization to energy utility SaaS (B2B → B2B2B) | Flow diagram (Nano Banana) |
| 5 | **Dashboard Preview** | Live demo of Grafana dashboard — chaos experiments, CPU metrics, stability timeline | Embedded dashboard screenshot/video |
| 6 | **Technology** | eBPF + Kepler + LightGBM, ~4ms inference, works across K8s/Slurm/OpenStack | Thesis figures (fig3_*) |
| 7 | **Results** | Model benchmarks, feature importance, detection delay, Pareto analysis | Thesis figures |
| 8 | **Market** | B2B (data centers) → B2B2B (energy utilities), €37.5K–€3M ARR potential | Infographic (Nano Banana) |
| 9 | **Traction** | INiTS ScaleUp (Dec 2025), AWS First Incubator 2026, TRL 6 | YouTube embed (@AraX-Labs) |
| 10 | **Team** | Arash Javan Mojarad — MSc EE + MSc Data Science, TU Wien MUSICA | Photo + credentials |
| 11 | **Contact** | Formspree form + email (arash.javan@araxlabs.org) | — |

### Key Messages

1. **Problem:** ~30% of data center energy is wasted. AI boom is stressing energy grids.
2. **Solution:** AI-driven predictive scaling — 15–30% OPEX reduction, tool-agnostic.
3. **Vision:** Grid-SaaS for energy utilities — predictive load forecasting to manage grid congestion.
4. **Proof:** Live dashboard demo + thesis results validate the approach.
5. **Edge:** Tool-agnostic + energy-focused + predictive (not reactive).
6. **Traction:** INiTS incubator, AWS Incubator, thesis R&D pipeline, TRL 6.

---

## 2. Multimedia Assets

### Existing Assets (from thesis)

| Asset | Path | Use |
|-------|------|-----|
| Logo | `thesis/CV/arax_labs_logo_square_gradient_clean.png` | Hero, favicon |
| Grafana Dashboard | `config/grafana-live-demo-dashboard.json` | Dashboard preview slide |
| Story Dashboard | `config/story-dashboard-v2.json` | Dashboard preview slide |
| Feature Importance | `thesis/figures/fig3_2_top20_mi.png` | Technology slide |
| SHAP Analysis | `thesis/figures/fig3_3_shap.png` | Technology slide |
| Stability Timeline | `thesis/figures/fig3_4_stability_timeline.png` | Results slide |
| Detection Delay | `thesis/figures/fig3_5_detection_delay.png` | Results slide |
| Pareto Analysis | `thesis/figures/fig3_6_pareto.png` | Results slide |
| ROC Curves | `reinvestigation/results/exp2_roc_curves.png` | Results slide |
| Model Comparison | `reinvestigation/results/summary_model_comparison.png` | Results slide |

### New Assets to Create

| Asset | Tool | Purpose |
|-------|------|---------|
| Logo animation | Nano Banana | Hero slide entrance |
| Problem infographic | Nano Banana | Energy waste stats visualization |
| Architecture diagram | Nano Banana | Solution overview |
| Grid-SaaS flow | Nano Banana | B2B → B2B2B pivot explanation |
| Market sizing infographic | Nano Banana | ARR potential visualization |
| Dashboard demo video | Noteboom | Record Grafana dashboard in action |
| Explainer video | Noteboom | 60-second startup pitch |

### YouTube Channel (@AraX-Labs)

- Embed pitch video on Traction slide
- Link to channel for more content
- Future: dashboard walkthroughs, technical deep dives

---

## 3. Tech Stack

| Component | Choice | Rationale |
|-----------|--------|-----------|
| Framework | Reveal.js (CDN) | No build step, pitch-native, fast to ship |
| Hosting | GitHub Pages | Free, version-controlled |
| Contact Form | Formspree (free tier) | No backend needed |
| Domain | araxlabs.org → GitHub Pages | CNAME in Cloudflare |
| Design | Dark theme + custom CSS | Professional tech aesthetic |
| Infographics | Nano Banana | Quick, professional visuals |
| Video | Noteboom | Dashboard demos, explainer videos |

---

## 4. File Structure

```
arax.org/
├── index.html              # Main reveal.js presentation
├── css/
│   └── custom.css          # ARAX branding (dark theme, colors)
├── js/
│   └── custom.js           # Form handling, animations
├── img/
│   ├── arax_logo.png       # Copy from thesis/CV/
│   ├── infographics/       # Nano Banana outputs
│   │   ├── problem.png
│   │   ├── solution.png
│   │   ├── gridsaas.png
│   │   └── market.png
│   ├── thesis/             # Thesis figures
│   │   ├── fig3_2_top20_mi.png
│   │   ├── fig3_3_shap.png
│   │   ├── fig3_4_stability_timeline.png
│   │   ├── fig3_5_detection_delay.png
│   │   └── fig3_6_pareto.png
│   └── dashboard/          # Dashboard screenshots
│       └── grafana-preview.png
├── video/
│   └── dashboard-demo.mp4  # Noteboom recording
├── CNAME                   # araxlabs.org
├── README.md               # Updated project description
└── PLAN.md                 # This file
```

---

## 5. DNS Setup (Cloudflare)

| Type | Host | Value | Purpose |
|------|------|-------|---------|
| CNAME | `@` | `6arash6.github.io` | GitHub Pages apex |
| CNAME | `www` | `araxlabs.org` | www redirect |

---

## 6. Design Decisions

- **Theme:** Dark background (#0a0a0a) with gradient accent matching logo colors
- **Transitions:** Smooth fade between slides
- **Animations:** Subtle fade-in on scroll for key stats
- **Dashboard:** Screenshot with click-to-play video overlay
- **Contact:** Formspree form (name, email, message)
- **Mobile:** Responsive reveal.js layout
- **YouTube:** Embedded on Traction slide, channel link in footer

---

## 7. Implementation Steps

### Phase 1: Core Website
1. **Copy logo** from `/workspaces/thesis/CV/arax_labs_logo_square_gradient_clean.png`
2. **Copy thesis figures** to `img/thesis/`
3. **Create `index.html`** with reveal.js CDN, 11 slides
4. **Create `css/custom.css`** — dark theme, ARAX branding
5. **Create `js/custom.js`** — Formspree form handler
6. **Create `CNAME`** — `araxlabs.org`
7. **Update `README.md`** — project description

### Phase 2: Multimedia (User creates)
8. **Create infographics** with Nano Banana (problem, solution, Grid-SaaS, market)
9. **Record dashboard demo** with Noteboom
10. **Upload assets** to `img/infographics/` and `video/`

### Phase 3: Deploy
11. **Test locally** — open `index.html` in browser
12. **Configure DNS** — Cloudflare CNAME records
13. **Enable GitHub Pages** — Settings → Pages → Deploy from main
14. **Verify** — check araxlabs.org loads correctly

---

## 8. Open Questions

- [ ] Color scheme: match logo gradient or different palette?
- [ ] Dashboard: screenshot only, or embedded video?
- [ ] Nano Banana: what style for infographics (minimal, technical, colorful)?
- [ ] Noteboom: dashboard demo length (30s, 60s, 2min)?
- [ ] YouTube: embed pitch video or dashboard walkthrough on Traction slide?
