# Nasor Hidar | Software Engineer & Full-Stack Developer

<div align="center">
  <img alt="Multi-Page" src="https://img.shields.io/badge/Architecture-Multi--Page-6366f1?style=for-the-badge"/>
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-v3-0ea5e9?style=for-the-badge&logo=tailwindcss&logoColor=white"/>
  <img alt="Responsive" src="https://img.shields.io/badge/Responsive-All_Devices-22d3ee?style=for-the-badge"/>
  <img alt="Design" src="https://img.shields.io/badge/Design-Dark_Glassmorphism-818cf8?style=for-the-badge"/>
</div>

<br/>

A premium, **multi-page personal portfolio** showcasing expertise in **Software Engineering**, **Full-Stack Web Development**, and **Algorithmic Problem Solving**. Built with a modern dark-first **slate-950 + indigo-500 / cyan-400** aesthetic — reflecting deep tech and logic — with smooth scroll animations and a shared component architecture.

🌍 **Live Portfolio:** [nasorhidar.com](https://nasorhidar.com)  
📄 **Latest Resume:** [Nasor_Hidar's_Resume.pdf](./Nasor_Hidar's_Resume.pdf)

---

## 📸 Design Highlights

- **Theme:** Deep `slate-950` base with `indigo-500` / `cyan-400` accent gradients — representing a modern software engineering and development environment
- **Typography:** Inter (headings & body) + Roboto Mono (stats, CP ratings, code blocks)
- **Glassmorphism:** Backdrop-blur cards with hover lift, cyan glow borders on featured projects
- **Animations:** Custom AOS (Animate on Scroll) via IntersectionObserver with staggered delays
- **Hero:** Developer-focused typing effect cycling through phrases like *"Building Scalable Web Apps"*, *"500+ CP Problems Solved"*, *"Django & MERN Stack Expert"*
- **Engineering Metrics Strip:** Visual stat cards below the hero — CP Solves (500+), Languages (8+), Frameworks (MERN + Django), Community Leadership (IEEE / UNDP)

---

## 🚀 Key Features

- **4-Page Architecture:** Home, Open Source, Projects, Achievements — each updated with software engineering-focused illustrations
- **Shared Navbar (`nav.js`):** Single source of truth injected into all pages — includes a dedicated **Resume** button (always visible), active link highlight (cyan-400), scroll shrink, and hamburger mobile menu
- **Hire Me CTA:** Smart routing — smooth-scrolls to `#contact` on the home page, navigates to `index.html#contact` from sub-pages
- **Real-time Contact Form:** Formspree API integration with loading / success / error states
- **Engineering Metrics Strip:** 4-column stat grid highlighting CP achievements, language breadth, framework expertise, and community leadership
- **No Build Step:** Tailwind CSS loaded via CDN — open any `.html` directly in a browser

---

## 📂 Project Structure

```text
├── index.html              # Home — Hero, Engineering Metrics, Skills Grid, About/Education, Contact Form
├── open-source.html        # Open Source — OWASP DefectDojo PR #14754, CI/CD pipeline navigation
├── projects.html           # Projects — SkillCurrency, ChatNest, CPU Simulator
├── achievements.html       # Achievements — Codeforces/CodeChef CP Dashboard, ICPC, Certifications
│
├── nav.js                  # Shared navbar injection (active state cyan, dedicated Resume link, hamburger)
├── script.js               # AOS observer, typing effect (Engineering phrases), accordion, Formspree handler
├── styles.css              # Design system — indigo/cyan palette, glassmorphism, eng-metric-card, badges
├── Nasor_Hidar's_Resume.pdf # Downloadable CV — linked from Navbar and Hero CTA
│
├── cyber_hero_bg.png       # Hero background — Abstract code / matrix theme
├── chatnest_preview_*.png  # ChatNest UI preview
├── hero_opensource.png     # Open Source page hero illustration
├── hero_projects.png       # Projects page hero illustration
└── hero_achievements.png   # Achievements page hero illustration
```

---

## 🛠️ Tech Stack & Skills Showcased

| Layer | Technology |
|---|---|
| Structure | HTML5 (semantic) |
| Styling | Tailwind CSS v3 (CDN) + Custom CSS |
| Logic | Vanilla ES6+ JavaScript |
| Icons | Font Awesome 6.5 |
| Fonts | Google Fonts — Inter, Roboto Mono |
| Contact | Formspree API |

---

## 💻 Languages, Frameworks & Tools

| Area | Technologies |
|---|---|
| **Languages** | Python · JavaScript (ES6+) · C · C++ · Java · SQL · HTML · CSS |
| **Frameworks** | Django · React.js · Node.js · Express.js · Tkinter · NumPy · Pandas |
| **Databases** | PostgreSQL · MongoDB |
| **Tools & Arch.** | Git · GitHub · Linux · RESTful APIs · RBAC · Socket.IO |
| **Security** | OWASP Top 10 · AES-256 · RBAC · Pen Testing |
| **CP Platforms** | Codeforces · CodeChef · ICPC · IEEE Xtreme |

---

## 💡 Featured Work

| Project | Stack | Highlights |
|---|---|---|
| **SkillCurrency** | Django · PostgreSQL · RBAC | Scalable financial & career hub with custom transaction trackers and role-based access |
| **ChatNest** | MERN · Socket.IO · AES-256 | Secure messaging app handling 100+ concurrent socket connections with encrypted routing |
| **CPU Scheduling Simulator** | Python · Tkinter | Interactive OS simulator benchmarking wait times with real-time Gantt charts |

---

## 🏆 Open Source & Leadership

**OWASP DefectDojo** — Engineered missing `django-filter` timestamp logic within the core backend. PR #14754 was merged after passing a 150+ check CI/CD pipeline.

**Community Leadership:**
- 🎓 **Treasurer** — IEEE Student Branch, Jahangirnagar University
- 🌍 **Volunteer** — Futurenations (UNDP & Grameenphone Initiative), Apr 2026 – Present

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
