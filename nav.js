/**
 * nav.js — Floating 3D Glassmorphic Dock & Responsive Navigation
 * Features: Spatial glass dock, magnetic hover interactions, active route highlight,
 * unified Resume CTA (Nasor_Hidar_Resume.pdf), and mobile slide-out drawer.
 */

(function () {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const currentPage = currentPath.replace('.html', '') || 'index';
  const isHome = currentPage === 'index';

  const navHTML = `
  <header id="site-header" class="fixed top-0 left-0 w-full z-50 transition-all duration-500 py-3.5 px-4 sm:px-6">
    <div class="max-w-6xl mx-auto flex items-center justify-between">
      
      <!-- Logo / Brand -->
      <a href="index.html" class="flex items-center gap-2 group focus:outline-none" aria-label="Nasor Hidar Home">
        <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-400/20 border border-indigo-500/30 flex items-center justify-center text-cyan-400 font-mono font-bold text-base group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all duration-300">
          NH
        </div>
        <span class="font-display font-bold text-lg tracking-tight text-white group-hover:text-cyan-400 transition-colors">
          NASOR<span class="text-cyan-400">.</span>
        </span>
      </a>

      <!-- Floating 3D Glassmorphic Center Dock (Desktop) -->
      <nav id="glass-dock" class="hidden md:flex items-center gap-1.5 p-1.5 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/10 shadow-[0_10px_35px_-5px_rgba(0,0,0,0.6)]">
        <a href="index.html" data-route="index" class="nav-item relative px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300 text-slate-300 hover:text-white">
          <span>About</span>
        </a>
        <a href="projects.html" data-route="projects" class="nav-item relative px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300 text-slate-300 hover:text-white">
          <span>Projects</span>
        </a>
        <a href="open-source.html" data-route="open-source" class="nav-item relative px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300 text-slate-300 hover:text-white">
          <span>Open Source</span>
        </a>
        <a href="achievements.html" data-route="achievements" class="nav-item relative px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300 text-slate-300 hover:text-white">
          <span>Achievements</span>
        </a>
      </nav>

      <!-- Right Action Controls (Resume + Hire Me) -->
      <div class="hidden md:flex items-center gap-3">
        <a href="Nasor_Hidar_Resume.pdf" target="_blank" rel="noopener noreferrer" id="nav-resume-btn"
           class="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-mono font-semibold rounded-xl text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-400 hover:shadow-[0_0_18px_rgba(34,211,238,0.3)] transition-all duration-300">
          <i class="fas fa-file-pdf text-xs"></i>
          <span>Resume</span>
        </a>
        <a href="${isHome ? '#contact' : 'index.html#contact'}" id="nav-hire-btn"
           class="btn-magnetic-primary text-xs py-2 px-4 shadow-[0_4px_14px_rgba(99,102,241,0.35)]">
          <span>Hire Me</span>
          <i class="fas fa-arrow-right text-[10px]"></i>
        </a>
      </div>

      <!-- Mobile Hamburger Button -->
      <button id="mobile-hamburger" class="md:hidden w-10 h-10 rounded-xl bg-slate-900/70 border border-white/10 flex flex-col justify-center items-center gap-1.5 focus:outline-none" aria-label="Toggle Navigation">
        <span class="ham-bar w-5 h-0.5 bg-white rounded-full transition-transform duration-300"></span>
        <span class="ham-bar w-5 h-0.5 bg-white rounded-full transition-opacity duration-300"></span>
        <span class="ham-bar w-5 h-0.5 bg-white rounded-full transition-transform duration-300"></span>
      </button>

    </div>

    <!-- Mobile Navigation Drawer -->
    <div id="mobile-drawer" class="md:hidden hidden flex-col mt-3 p-4 rounded-2xl bg-slate-950/95 backdrop-blur-2xl border border-white/10 shadow-2xl">
      <div class="flex flex-col gap-1">
        <a href="index.html" data-route="index" class="mobile-item py-3 px-4 rounded-xl text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-white/5 transition-all">About</a>
        <a href="projects.html" data-route="projects" class="mobile-item py-3 px-4 rounded-xl text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-white/5 transition-all">Projects</a>
        <a href="open-source.html" data-route="open-source" class="mobile-item py-3 px-4 rounded-xl text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-white/5 transition-all">Open Source</a>
        <a href="achievements.html" data-route="achievements" class="mobile-item py-3 px-4 rounded-xl text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-white/5 transition-all">Achievements</a>
      </div>
      <div class="pt-3 mt-2 border-t border-white/10 flex flex-col gap-2.5">
        <a href="Nasor_Hidar_Resume.pdf" target="_blank" rel="noopener noreferrer"
           class="py-2.5 text-center rounded-xl text-xs font-mono font-semibold text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20 transition-colors">
          <i class="fas fa-file-pdf mr-1.5"></i>Download Resume
        </a>
        <a href="${isHome ? '#contact' : 'index.html#contact'}" id="mobile-hire-btn"
           class="btn-magnetic-primary py-2.5 text-center text-xs">
          <span>Get in Touch</span>
        </a>
      </div>
    </div>
  </header>
  `;

  document.body.insertAdjacentHTML('afterbegin', navHTML);

  // Active Route Highlighting
  document.querySelectorAll(`[data-route="${currentPage}"]`).forEach(el => {
    el.classList.add('active-route', 'text-white', 'bg-indigo-600/20', 'border', 'border-indigo-500/30');
    el.classList.remove('text-slate-300');
    const dot = document.createElement('span');
    dot.className = 'w-1.5 h-1.5 rounded-full bg-cyan-400 mr-1.5 inline-block animate-pulse';
    el.querySelector('span')?.prepend(dot);
  });

  // Header Scroll Shrink & Glass Intensity
  const header = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('bg-slate-950/70', 'backdrop-blur-md', 'border-b', 'border-white/5', 'py-2.5');
      header.classList.remove('py-3.5');
    } else {
      header.classList.remove('bg-slate-950/70', 'backdrop-blur-md', 'border-b', 'border-white/5');
      header.classList.add('py-3.5');
    }
  }, { passive: true });

  // Mobile Menu Toggle
  const burger = document.getElementById('mobile-hamburger');
  const drawer = document.getElementById('mobile-drawer');
  const bars = burger.querySelectorAll('.ham-bar');
  let isOpen = false;

  burger.addEventListener('click', () => {
    isOpen = !isOpen;
    if (isOpen) {
      drawer.classList.remove('hidden');
      drawer.classList.add('flex');
      bars[0].style.transform = 'translateY(8px) rotate(45deg)';
      bars[1].style.opacity = '0';
      bars[2].style.transform = 'translateY(-8px) rotate(-45deg)';
    } else {
      drawer.classList.add('hidden');
      drawer.classList.remove('flex');
      bars[0].style.transform = '';
      bars[1].style.opacity = '1';
      bars[2].style.transform = '';
    }
  });

  // Close drawer on mobile link click
  drawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      isOpen = false;
      drawer.classList.add('hidden');
      drawer.classList.remove('flex');
      bars[0].style.transform = '';
      bars[1].style.opacity = '1';
      bars[2].style.transform = '';
    });
  });

  // Magnetic hover states on desktop nav items
  if (window.matchMedia('(pointer: fine)').matches) {
    document.querySelectorAll('.nav-item').forEach(item => {
      item.addEventListener('mousemove', (e) => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        item.style.transform = `translate(${x * 0.22}px, ${y * 0.22}px)`;
      });
      item.addEventListener('mouseleave', () => {
        item.style.transform = 'translate(0px, 0px)';
      });
    });
  }
})();
