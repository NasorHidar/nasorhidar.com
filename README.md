# Nasor Hidar | Full-Stack Software Engineer · AI & Cybersecurity

<div align="center">
  <img alt="Three.js WebGL" src="https://img.shields.io/badge/WebGL-Three.js_r160-6366f1?style=for-the-badge&logo=three.js&logoColor=white"/>
  <img alt="GSAP 3" src="https://img.shields.io/badge/Motion-GSAP_3_&_ScrollTrigger-88ce02?style=for-the-badge&logo=greensock&logoColor=white"/>
  <img alt="Lenis Smooth Scroll" src="https://img.shields.io/badge/Scroll-Lenis_Inertia-22d3ee?style=for-the-badge"/>
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-v3-0ea5e9?style=for-the-badge&logo=tailwindcss&logoColor=white"/>
  <img alt="Zero Build GitHub Pages" src="https://img.shields.io/badge/Deploy-GitHub_Pages_Ready-10b981?style=for-the-badge&logo=github"/>
</div>

<br/>

An **Awwwards-inspired, high-performance 3D interactive portfolio** built for **Nasor Hidar** (Full-Stack Software Engineer, Machine Learning Researcher, and Usable Cybersecurity Enthusiast). Designed around a **Cyber-Spatial Obsidian** visual identity, the site couples a lightweight zero-build static architecture with a persistent Three.js WebGL spatial engine, Lenis inertia scrolling, GSAP 3 choreography, and real 3D CSS perspective physics.

🌍 **Live Website:** [nasorhidar.com](https://nasorhidar.com)  
📄 **Official Resume:** [Nasor_Hidar_Resume.pdf](./Nasor_Hidar_Resume.pdf)

---

## 🌌 Architectural Design & 3D Motion System

### 1. Cyber-Spatial Obsidian Aesthetic
- **Color Palette:** Deep Obsidian Void (`#06070d`), elevated slate glass (`rgba(15, 23, 42, 0.55)`), electric indigo (`#6366f1`), luminous lavender (`#a78bfa`), cyber cyan (`#22d3ee`), and status emerald (`#10b981`).
- **Typography:** Architectural display pairing: `Space Grotesk` (headings), `Inter` (body copy), and `JetBrains Mono` (code, metrics, telemetry).
- **Zero-Build Pipeline:** Pure ES6+ modules with native browser `importmap` support—zero bundler overhead, instant GitHub Pages deployment.

### 2. Multi-Scene WebGL Engine (`scene3d.js`)
- **Shared Background Engine:** A single persistent WebGL `<canvas>` fixed across all pages running at 60fps with device pixel ratio capped at `Math.min(window.devicePixelRatio, 2)`.
- **Automatic Lifecycle Management:** Pauses `requestAnimationFrame` automatically when the browser tab is hidden (`document.hidden`) and recovers smoothly upon refocus.
- **Page-Specific 3D Formations:**
  - **Home (`index.html`):** *Interactive Neural-Security Core* — Outer wireframe icosahedron, pulsing cyan octahedron lattice, and dense dodecahedron nucleus surrounded by orbiting encrypted data nodes that dynamically generate proximity connection lines when within Euclidean threshold distance. Mouse parallax smoothly rotates the rig, and scroll depth glides the camera along the Z-axis.
  - **Projects (`projects.html`):** *Holographic Spatial Planes* — Double perspective grid planes with orbiting project polyhedra reacting to mouse tilt.
  - **Open Source (`open-source.html`):** *Holographic Cyber Torus Knot* — Wireframe `TorusKnotGeometry` with traveling CI/CD telemetry packets homage to 150+ upstream verification checks.
  - **Achievements (`achievements.html`):** *Gyroscopic Celestial Constellation* — Triple concentric orbital rings with gimbals rotating at varying angular velocities around a golden milestone core.

### 3. Tactile 3D Micro-Physics (`script.js` & `styles.css`)
- **3D Layered Tilt Cards:** Real CSS 3D perspective (`perspective(1100px)`) with cursor-tracking spotlight border shaders powered by dynamic CSS variables (`--mouse-x`, `--mouse-y`) and elevated `translateZ` child layers.
- **3D Hologram Identity Flip Card:** Interactive double-sided flip card toggling between `./Nasor%20Hidar.jpeg` (front) and `./Avater-Nasor.jpg` (back) with cursor-tracked specular glare lighting.
- **Kinetic Stat Counters:** GPU-eased numerical counters (`500+` CP solves, `40%` pipeline acceleration, `150+` CI checks, `100+` WebSockets).
- **Magnetic Controls & Laser Line:** Interactive buttons drawn toward the cursor and a glowing cyan-indigo scroll progress laser line at the top viewport.

---

## 🛠️ Technical Skills & Engineering Pillars

| Domain | Technologies & Capabilities |
|---|---|
| **Scalable Systems & Full-Stack** | Django · Node.js · Express.js · React · Next.js · PostgreSQL · MongoDB · Docker · Kafka · WebSockets · REST APIs · ACID Transactions |
| **Human-Centered AI & Vision** | Python · TensorFlow · Scikit-Learn · YOLOv8 · OpenCV · Pandas · NumPy · Multi-Agent Systems · Data Wrangling · Edge AI |
| **Usable Privacy & Cybersecurity** | OWASP Top 10 · VAPT · Burp Suite · AES-256 · Stateless JWT · 3-Tier RBAC · CI/CD AppSec · Linux Hardening |
| **Competitive Programming** | Codeforces (Rating 1254, Pupil) · CodeChef (Rating 1244, 2★) · ICPC Asia Dhaka Regional · IEEEXtreme · 500+ Solves |

---

## 💡 Featured Projects & Deployments

| Project | Domain | Architecture & Highlights |
|---|---|---|
| **Krishi Bondhu AI** | Human-Centered AI | Multi-agent decision-support platform delivering climate-resilient crop rotation, soil parameter analysis, and real-time yield forecasting. Earned **Galactic Problem Solver** recognition at **NASA Space Apps Challenge 2026** with Team Nokkhotro. |
| **ChatNest** | Usable Privacy & Security | Full-stack secure messaging web application with stateless JWT auth and client-side AES-256 encrypted payload routing. Stress-tested and verified at **100+ concurrent WebSocket connections** with zero packet drop. |
| **SkillCurrency** | FinTech & Systems | Scalable financial and skills exchange hub built on Django and PostgreSQL with a 3-tier Role-Based Access Control matrix (Admin, Skilled Provider, Client), atomic escrow transactions, and query optimization (`select_related`). |
| **Real-Time Mosquito Detection** | Edge Computer Vision | Ongoing thesis research at IIT, Jahangirnagar University. Custom bounding-box dataset and low-latency YOLOv8 model inference for automated vector-borne disease alert telemetry. |
| **CPU Queue Simulator** | Operating Systems | Interactive OS scheduling simulator benchmarking 5 algorithms (FCFS, SJF, RR, Priority) with dynamic real-time Gantt charts rendered in Tkinter. |

---

## 🛡️ Open Source Upstream Engineering

- **OWASP DefectDojo (Merged PR #14754):**
  - Enhanced data retrieval capabilities for API consumers across the global enterprise vulnerability management platform.
  - Engineered missing `django-filter` timestamp logic (`DateTimeFromToRangeFilter`, `DateTimeFilter` with `lte` and `gte`) in the core Python/Django backend.
  - Successfully navigated and passed a **150+ check CI/CD pipeline** (linters, PyTest matrix across Python 3.10/3.11, Docker integration, and security scans).
  - Executed upstream syncing and rebase workflows directly with maintainers.

---

## 🏆 Key Achievements, Honors & Leadership

- **2nd Place, Bangladesh Region (Global Rank 908):** IEEEXtreme 20.0 (Team `JUx404NOTFOUND`, 24-hour global programming marathon).
- **Galactic Problem Solver:** NASA Space Apps Challenge 2026 (Nov 14–15, 2026, Team Nokkhotro).
- **Academic Performance Scholarship:** Jahangirnagar University (Awarded for 3.73 CGPA in 2nd Year, Department of ICT).
- **Executive Leadership (Treasurer):** IEEE Student Branch Jahangirnagar University (Feb 2026 – Present; Active Member since Nov 2023).
- **National Volunteer:** Futurenation (UNDP & Grameenphone Initiative, Apr 2026 – Present).
- **Contest Participations:** ICPC Asia Dhaka Regional Preliminary (2023 & 2025), IEEEXtreme 19.0 & 20.0, BUET CSE Fest CTF 2026, BUP CSE Fest Hackathon 2026.
- **Industry Certifications:**
  - Stanford University: Code in Place (*Probability for AI*, Oct 2026)
  - HackerRank: *Software Engineer Intern* (Credential ID: `OD02023FD131`, Mar 2026)
  - Arena Web Security: *Cyber Security & Ethical Hacking AWCP / VAPT* (Credential ID: `A58W0302S061`, Feb 2026)

---

## 📂 Repository File Structure

```text
├── index.html                           # Home — Hero, 3D Core, Telemetry, Pillars, Experience, 3D Flip Card, Contact
├── projects.html                        # Projects — Filterable gallery (Krishi Bondhu AI, ChatNest, SkillCurrency, etc.)
├── open-source.html                     # Open Source — OWASP DefectDojo PR #14754, CI/CD Pipeline Visual Tracker
├── achievements.html                    # Achievements — IEEEXtreme 20.0 #2 BD, NASA Space Apps, CP Dashboard, Certs
│
├── scene3d.js                           # Core Three.js WebGL Engine (ES Module with 4 page presets)
├── nav.js                               # Floating 3D glassmorphic dock, active route indicator, mobile drawer
├── script.js                            # Lenis smooth scroll, GSAP choreography, 3D tilt physics, cursor ring
├── styles.css                           # Cyber-spatial obsidian tokens, 3D depth system, spotlight shaders
│
├── Nasor_Hidar_Resume.pdf               # Active Official Resume (downloadable & linked across all routes)
├── Nasor%20Hidar.jpeg                   # Formal identity portrait (Front face of 3D Flip Card)
├── Avater-Nasor.jpg                     # Cyber avatar portrait (Back face of 3D Flip Card)
├── chatnest_preview_1777009619710.png   # ChatNest UI preview in 3D angled device frame
├── preview.png                          # Social share preview card
├── hero_projects.png                    # Spatial projects accent visual
├── hero_opensource.png                  # Spatial open-source accent visual
└── hero_achievements.png                # Spatial achievements accent visual
```

---

## 💻 Local Development & Verification

Because the site leverages standard ES Modules and WebGL, run a lightweight local HTTP server rather than opening files via `file://`:

### Option A: Python 3 (Recommended)
```bash
python -m http.server 8000
```
Then navigate to: `http://localhost:8000`

### Option B: Node.js (npx serve)
```bash
npx serve .
```

---

## 🛡️ Performance & Accessibility Guarantees

- **Pointer Events Pass-Through:** The WebGL canvas uses `pointer-events: none; z-index: 0;` ensuring text selection, links, and buttons are never blocked.
- **Mobile Responsive:** Touch devices (`pointer: coarse` or `< 768px`) automatically reduce particle counts by 60%, disable heavy tilt physics, and optimize geometry segments.
- **Reduced Motion:** Fully adheres to `prefers-reduced-motion: reduce`, dampening continuous rotations and preserving immediate visual accessibility.
- **Zero Horizontal Overflow:** Strict layout bounds guarantee clean responsiveness across desktop (1440x900+) down to mobile viewports (390x844).

---

## 👤 Author & Contact

**Nasor Hidar**  
*Full-Stack Software Engineer &middot; Machine Learning &middot; Usable Cybersecurity*  
- **Email:** [nasorhidar@gmail.com](mailto:nasorhidar@gmail.com)  
- **Phone:** [+880 1877695242](tel:+8801877695242)  
- **Location:** Savar, Dhaka, Bangladesh  
- **LinkedIn:** [linkedin.com/in/nasor-hidar](https://www.linkedin.com/in/nasor-hidar)  
- **GitHub:** [github.com/NasorHidar](https://github.com/NasorHidar)  
- **Codeforces:** [codeforces.com/profile/Undefined_Code](https://codeforces.com/profile/Undefined_Code)  
- **CodeChef:** [codechef.com/users/undefined_code](https://www.codechef.com/users/undefined_code)
