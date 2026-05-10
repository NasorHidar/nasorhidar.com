# Nasor Hidar | QA Engineer & Test Automation Specialist

<div align="center">
  <img alt="Multi-Page" src="https://img.shields.io/badge/Architecture-Multi--Page-10b981?style=for-the-badge"/>
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-v3-0ea5e9?style=for-the-badge&logo=tailwindcss&logoColor=white"/>
  <img alt="Responsive" src="https://img.shields.io/badge/Responsive-All_Devices-2dd4bf?style=for-the-badge"/>
  <img alt="Design" src="https://img.shields.io/badge/Design-Dark_Glassmorphism-34d399?style=for-the-badge"/>
</div>

<br/>

A premium, **multi-page personal portfolio** showcasing expertise in **Software Quality Assurance**, **Test Automation**, and **Security-focused QA**. Built with a dark-first **slate/navy + emerald/green** aesthetic — the QA "pass" palette — with smooth scroll animations and a shared component architecture.

🌍 **Live Portfolio:** [nasorhidar.com](https://nasorhidar.com)

---

## 📸 Design Highlights

- **Theme:** Deep `slate-950` base with `emerald-400` / `teal-400` accent gradient — reflects a QA/testing mindset ("green = passing")
- **Amber accents:** Used for bug/defect indicators — contextually meaningful color language
- **Typography:** Inter (headings & body) + Roboto Mono (stats, code blocks, tech tags)
- **Glassmorphism:** Backdrop-blur cards with hover lift, emerald glow borders on featured content
- **Animations:** Custom AOS (Animate on Scroll) via IntersectionObserver with staggered delays
- **Hero:** QA-focused typing effect cycling through 4 phrases, animated emerald orbs
- **QA Metrics Strip:** Visual stat cards below the hero — test coverage, bug detection approach, CI/CD, OWASP

---

## 🚀 Key Features

- **4-Page Architecture:** Home, Open Source, Projects, Achievements — each with a unique illustrated hero
- **Shared Navbar (`nav.js`):** Single source of truth injected into all pages — handles active link (emerald), scroll shrink, hamburger mobile menu
- **Hire Me CTA:** Smart routing — smooth-scrolls to `#contact` on home page, navigates to `index.html#contact` from sub-pages
- **Real-time Contact Form:** Formspree API integration with loading/success/error states
- **QA Metrics Strip:** 4-column stat grid highlighting testing philosophy and tool ecosystem
- **No Build Step:** Tailwind CSS loaded via CDN — open any `.html` directly in a browser

---

## 📂 Project Structure

```text
├── index.html              # Home — Hero, QA Metrics, Skills Grid, About/Education, Contact Form
├── open-source.html        # Open Source — OWASP DefectDojo PR, terminal patch view, community engagement
├── projects.html           # Projects — SkillCurrency, ChatNest, Queue System + Academic accordion
├── achievements.html       # Achievements — CP Dashboard, Contest Timeline, Certifications
│
├── nav.js                  # Shared navbar injection (active state emerald, scroll shrink, hamburger)
├── script.js               # AOS observer, typing effect (QA phrases), accordion, Formspree handler
├── styles.css              # Design system — emerald palette, glassmorphism, qa-metric-card, badges
├── Nasor Hidar's Resume.pdf # Downloadable CV — linked from hero "Read Resume" button
│
├── qa_hero_bg.png          # Hero background — QA test pipeline abstract
├── cyber_hero_bg.png       # Legacy hero background
├── chatnest_preview_*.png  # ChatNest project preview image
├── hero_opensource.png     # Open Source page hero illustration
├── hero_projects.png       # Projects page hero illustration
└── hero_achievements.png   # Achievements page hero illustration
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Structure | HTML5 (semantic) |
| Styling | Tailwind CSS v3 (CDN) + Custom CSS |
| Logic | Vanilla ES6+ JavaScript |
| Icons | Font Awesome 6.5 |
| Fonts | Google Fonts — Inter, Roboto Mono |
| Contact | Formspree API |

---

## 🧪 QA Skills Showcased

| Area | Tools & Methods |
|---|---|
| **Test Types** | Unit · Integration · E2E · Regression · Smoke · VAPT |
| **Automation** | Selenium · PyTest · Jest · Playwright · Cypress |
| **CI/CD** | GitHub Actions · Docker · Jenkins · GitLab CI |
| **Bug Tracking** | OWASP DefectDojo · Jira · TestRail · GitHub Issues |
| **Security QA** | OWASP Top 10 · Pen Testing · AES-256 · RBAC |

---

## 💻 Featured Work

| Project | Stack | QA Highlights |
|---|---|---|
| **SkillCurrency** | Django, PostgreSQL, RBAC | Integration tests, role-based access validation |
| **ChatNest** | MERN, JWT, AES-256, WebSockets | Concurrency testing, encrypted routing verification |
| **Queue System** | Python, Tkinter | Algorithm correctness testing, Gantt chart validation |

---

## 🏆 Open Source

**OWASP DefectDojo** — Enterprise vulnerability management platform. Contributed patches to defect tracking workflows, integrating security findings into automated QA pipelines.

---

## 📥 Local Development

```bash
# Clone the repository
git clone https://github.com/NasorHidar/nasorhidar.com.git
cd nasorhidar.com

# Option 1: Open directly in browser
# Just open index.html in any modern browser

# Option 2: Run a local server (recommended for nav.js to work correctly)
python -m http.server 5501
# Then visit http://localhost:5501
```

---

<div align="center">
  <i>Built with ❤ Love.</i>
  <br/>
  <b>© 2026 Nasor Hidar</b>
</div>
