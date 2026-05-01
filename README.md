# Nasor Hidar | Full-Stack Developer & Secure System Designer

<div align="center">
  <img alt="Multi-Page" src="https://img.shields.io/badge/Architecture-Multi--Page-06b6d4?style=for-the-badge"/>
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-v3-0ea5e9?style=for-the-badge&logo=tailwindcss&logoColor=white"/>
  <img alt="Responsive" src="https://img.shields.io/badge/Responsive-All_Devices-2dd4bf?style=for-the-badge"/>
  <img alt="Performance" src="https://img.shields.io/badge/Design-Dark_Glassmorphism-818cf8?style=for-the-badge"/>
</div>

<br/>

A premium, **multi-page personal portfolio** showcasing expertise in **Full-Stack Development**, **Secure System Design**, and **Competitive Programming**. Built with a dark-first **slate/navy + teal/cyan** cybersecurity aesthetic, smooth scroll animations, and shared component architecture.

🌍 **Live Portfolio:** [nasorhidar.com](https://nasorhidar.com)

---

## 📸 Design Highlights

- **Theme:** Deep `slate-950` base with `cyan-400` / `teal-400` accent gradient — reflects a cybersecurity/developer aesthetic
- **Typography:** Inter (headings & body) + Roboto Mono (stats, code blocks, tech tags)
- **Glassmorphism:** Backdrop-blur cards with hover lift, glow borders on featured content
- **Animations:** Custom AOS (Animate on Scroll) via IntersectionObserver with staggered delays
- **Hero:** Typing effect cycling through 4 phrases, social links, animated CTA buttons
- **CP Dashboard:** Live-fill animated rating bars for Codeforces & CodeChef
- **Terminal Block:** Syntax-highlighted code block showcasing the OWASP DefectDojo PR patch

---

## 🚀 Key Features

- **4-Page Architecture:** Home, Open Source, Projects, Achievements — each with a unique illustrated hero section
- **Shared Navbar (`nav.js`):** Single source of truth injected into all pages — handles active link, scroll shrink, and hamburger mobile menu
- **Hire Me CTA:** Smart routing — smooth-scrolls to `#contact` on home page, navigates to `index.html#contact` from sub-pages
- **Real-time Contact Form:** Formspree API integration with loading/success/error states
- **Collapsible Accordion:** Academic mini-projects section with smooth CSS transitions
- **No Build Step:** Tailwind CSS loaded via CDN — open any `.html` directly in a browser

---

## 📂 Project Structure

```text
├── index.html              # Home — Hero, Skills Grid, About/Education, Contact Form
├── open-source.html        # Open Source — OWASP DefectDojo PR, terminal patch view, community engagement
├── projects.html           # Projects — SkillCurrency, ChatNest, Queue System + Academic accordion
├── achievements.html       # Achievements — CP Dashboard, Contest Timeline, Certifications
│
├── nav.js                  # Shared navbar injection (active state, scroll shrink, hamburger)
├── script.js               # AOS observer, typing effect, accordion, Formspree form handler
├── styles.css              # Design system — glassmorphism, AOS, terminal, rating bars, badges
│
├── cyber_hero_bg.png       # Hero background — circuit board abstract
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

## 💻 Featured Work

| Project | Stack | Highlights |
|---|---|---|
| **SkillCurrency** | Django, PostgreSQL, RBAC | 3-tier role access, escrow transaction module |
| **ChatNest** | MERN, JWT, AES-256, WebSockets | 100+ concurrent connections, encrypted routing |
| **Queue System** | Python, Tkinter | Real-time Gantt charts, CPU scheduling algorithms |

---

## 🏆 Competitive Programming

| Platform | Handle | Rating | Solved |
|---|---|---|---|
| Codeforces | [Undefined_Code](https://codeforces.com/profile/Undefined_Code) | 1254 | 500+ |
| CodeChef | [undefined_code](https://www.codechef.com/users/undefined_code) | 1244 | 50+ |

**Contests:** ICPC Asia Dhaka Regional (2023, 2025) · IEEE Xtreme 19.0

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
