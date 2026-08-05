# ARAX LABS - Startup Context & Conversation Summary

## Founder
**Arash Javan Mojarad**
- Master's in Data Science — FH Technikum Wien
- Background: MLOps, distributed systems, energy systems, supercomputing ops (MUSICA, TU Wien VSC-4/VSC-5)

---

## What ARAX LABS Is

An AI-driven predictive scaling startup that commercializes research from Arash's Master's thesis. The core engine minimizes energy waste in AI/HPC data centers using ML-based telemetry optimization.

**Thesis Title:** "Predictive Telemetry Scaling for Energy-Efficient Observability in Kubernetes-Based AI Platforms"

---

## The Problem

~30% of data center energy is wasted due to:
- Zombie workloads (processes running with no real purpose)
- Static resource allocation that doesn't adapt to actual load
- Inefficient hardware and software orchestration
- Observability systems (Prometheus, OpenTelemetry) scraping metrics constantly — even when nothing is happening

---

## The Solution

An **AI-driven predictive scaling engine** that:
- Uses **eBPF + Kepler** for low-level energy telemetry
- Predicts system instability before it happens
- Dynamically adjusts monitoring intensity — scrapes more when risky, backs off when stable
- Works across **Kubernetes, Slurm, MPI, Ansible, Terraform, OpenShift** — tool-agnostic
- Targets **15–30% OPEX reduction** for data center operators

**Best ML Model:** LightGBM
- 10x better RMSE than linear baselines
- 2x faster inference than LSTM
- ~4ms inference latency

---

## Unique Positioning

Sits at the intersection of **three domains**:
```
     Energy Systems
          ▲
          │
          ●  ← ARAX LABS
         / \
        /   \
  MLOps     Distributed Systems
```
Most tools optimize one. ARAX connects all three.

---

## Business Model

| Phase | Target Customer | Value Proposition |
|-------|----------------|-------------------|
| Phase 1 | Cloud providers, AI data centers (B2B) | 15–30% energy/OPEX reduction |
| Phase 2 | Energy utility providers (B2B2B) | Predictive load forecasting to manage grid congestion caused by AI infrastructure |

---

## Tech Stack

| Layer | Technologies |
|-------|-------------|
| Telemetry | eBPF, Kepler, Prometheus, OpenTelemetry |
| ML Models | LightGBM, XGBoost, LSTM, SGD Online |
| Orchestration | Kubernetes, Slurm, MPI, Ansible, Terraform, OpenShift |
| Cloud | Azure, GCP, AWS, OpenStack |
| Data | Python, pandas, scikit-learn, PyTorch |
| CI/CD | GitHub Actions, Tekton, GitOps |

---

## Current Status

- **INiTS ScaleUp Program** — accepted Dec 2025, Vienna's top high-tech incubator, eligible for up to €100,000 STARTKapital
- **AWS First Incubator 2026** — pitch video submitted
- **Research:** ML pipeline complete, LightGBM validated on mock data, real-world chaos experiments pending
- **Roadmap:** 12-month plan from research → production-ready MVP
- **Needs from AWS:** Infrastructure credits, testing environment, enterprise sales mentorship

---

## Pitch Video

**YouTube:** https://www.youtube.com/watch?v=Dwwd1z-8Ch4
- Submitted for AWS First Incubator 2026
- Professional, data-driven slides
- Venn diagram showing Energy Systems + MLOps + Distributed Systems intersection
- Clear 12-month roadmap presented

---

## Assets Available

- Logo: `/workspaces/thesis/CV/arax_labs_logo_square_gradient_clean.png`
- CV (LaTeX): `/workspaces/thesis/CV/CV_Arash_Javan_Mojarad_OPTIMIZED.tex`
- Full thesis + implementation: `/workspaces/thesis/`
- Detailed business/tech summary: `/workspaces/thesis/CV/THESIS_ARAX_SUMMARY.md`

---

## Website Plans

Next step: Build the ARAX LABS website in `/workspaces/arax.org/`
- Stack TBD (Next.js + Tailwind recommended)
- Sections: Hero, Problem, Solution, Technology, About, Contact
- Tone: Professional, technical, data-driven (matching pitch video style)

---

## Email Infrastructure (Configured Aug 2026)

### Domain & DNS
- **Domain:** `araxlabs.org` (purchased via Helloly)
- **DNS Manager:** Cloudflare Free Plan (nameservers delegated from Helloly)
- **Email Routing:** Cloudflare Email Routing (inbound)

### Email Address
- **Primary:** `arash.javan@araxlabs.org`

### Inbound (Receiving)
- **Service:** Cloudflare Email Routing → forwards to personal Gmail
- **MX Record:** Cloudflare auto-managed

### Outbound (Sending)
- **Service:** Oracle Cloud Email Delivery (3,000 free emails/month)
- **SMTP Server:** `smtp.email.us-ashburn-1.oci.oraclecloud.com`
- **Port:** 587 (TLS)
- **Approved Sender:** `arash.javan@araxlabs.org`
- **Gmail Integration:** Configured as "Send mail as" in Gmail

### DNS Records (Cloudflare)

| Type | Host | Value | Purpose |
|------|------|-------|---------|
| MX | `@` | `10 feedback-smtp.us-ashburn-1.oraclecloud.com` | Inbound routing |
| TXT | `@` | `v=spf1 include:cloudflare.net include:mail.app.oraclecloud.com ~all` | SPF |
| TXT | `_dmarc` | `v=DMARC1; p=none; rua=mailto:arash.javan@araxlabs.org` | DMARC |
| TXT | `mail._domainkey` | *(Provided by Oracle Cloud Email Delivery)* | DKIM |

### Session Learnings
- **Brevo blocks Google IPs** on free accounts — SMTP relay from Gmail "Send mail as" fails
- **Oracle Cloud Email Delivery** is the best free SMTP relay for OCI users (no Google IP blocks)
- **SMTP2GO** (1,000 free/month) is a solid alternative if Oracle relay has issues
- Cloudflare Email Routing is ideal for inbound — zero config, free, reliable

---

## Email Signature

```
Arash Javan Mojarad
Founder, ARAX LABS
arash.javan@araxlabs.org
https://araxlabs.org
```
