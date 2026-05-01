(function () {
  const navHTML = `
  <nav id="navbar" class="fixed top-0 left-0 w-full z-50 transition-all duration-500">
    <div id="nav-inner" class="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between transition-all duration-300">
      <a href="index.html" class="flex items-center gap-1">
        <span class="text-2xl font-black tracking-tight text-white font-['Inter']">NASOR<span class="text-cyan-400">.</span></span>
      </a>
      <div class="hidden md:flex items-center gap-8">
        <a href="index.html"          data-page="index"         class="nav-link text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors duration-300 relative group">About<span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span></a>
        <a href="open-source.html"    data-page="open-source"   class="nav-link text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors duration-300 relative group">Open Source<span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span></a>
        <a href="projects.html"       data-page="projects"      class="nav-link text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors duration-300 relative group">Projects<span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span></a>
        <a href="achievements.html"   data-page="achievements"  class="nav-link text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors duration-300 relative group">Achievements<span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span></a>
        <a id="hire-me-btn" href="index.html#contact" class="px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-sm font-bold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-0.5">Hire Me</a>
      </div>
      <button id="hamburger" class="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5" aria-label="Menu">
        <span class="ham-line w-6 h-0.5 bg-white rounded transition-all duration-300 origin-center"></span>
        <span class="ham-line w-6 h-0.5 bg-white rounded transition-all duration-300 origin-center"></span>
        <span class="ham-line w-4 h-0.5 bg-white rounded transition-all duration-300 origin-center self-end"></span>
      </button>
    </div>
    <div id="mobile-menu" class="md:hidden hidden flex-col border-t border-slate-800 bg-slate-950/98 backdrop-blur-xl">
      <div class="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
        <a href="index.html"         data-page="index"        class="mobile-link py-3 text-slate-400 hover:text-cyan-400 border-b border-slate-800/50 transition-colors text-sm font-medium">About</a>
        <a href="open-source.html"   data-page="open-source"  class="mobile-link py-3 text-slate-400 hover:text-cyan-400 border-b border-slate-800/50 transition-colors text-sm font-medium">Open Source</a>
        <a href="projects.html"      data-page="projects"     class="mobile-link py-3 text-slate-400 hover:text-cyan-400 border-b border-slate-800/50 transition-colors text-sm font-medium">Projects</a>
        <a href="achievements.html"  data-page="achievements" class="mobile-link py-3 text-slate-400 hover:text-cyan-400 transition-colors text-sm font-medium">Achievements</a>
        <a id="hire-me-mobile" href="index.html#contact" class="mt-3 text-center py-3 bg-cyan-500 text-slate-950 font-bold rounded-xl text-sm">Hire Me</a>
      </div>
    </div>
  </nav>`;

  document.body.insertAdjacentHTML('afterbegin', navHTML);

  // Smart "Hire Me" routing — scroll on index, navigate on other pages
  const isIndex = (window.location.pathname.split('/').pop() || 'index.html') === 'index.html';
  document.querySelectorAll('#hire-me-btn, #hire-me-mobile').forEach(btn => {
    if (isIndex) {
      btn.setAttribute('href', '#contact');
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Close mobile menu if open
        document.getElementById('mobile-menu')?.classList.add('hidden');
        document.getElementById('mobile-menu')?.classList.remove('flex');
      });
    }
  });

  // Active page highlight
  const file = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
  const page = file === '' ? 'index' : file;
  document.querySelectorAll('[data-page]').forEach(el => {
    if (el.dataset.page === page) {
      el.classList.replace('text-slate-400', 'text-cyan-400');
      el.classList.add('font-semibold');
    }
  });

  // Scroll shrink
  const navbar = document.getElementById('navbar');
  const inner = document.getElementById('nav-inner');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.style.cssText = 'background:rgba(2,8,23,0.92);backdrop-filter:blur(20px);border-bottom:1px solid rgba(148,163,184,0.08);box-shadow:0 4px 30px rgba(0,0,0,0.5)';
      inner.style.paddingTop = '0.75rem';
      inner.style.paddingBottom = '0.75rem';
    } else {
      navbar.style.cssText = '';
      inner.style.paddingTop = '1.25rem';
      inner.style.paddingBottom = '1.25rem';
    }
  });

  // Hamburger
  const burger = document.getElementById('hamburger');
  const menu = document.getElementById('mobile-menu');
  const lines = document.querySelectorAll('.ham-line');
  let open = false;
  burger.addEventListener('click', () => {
    open = !open;
    menu.classList.toggle('hidden', !open);
    menu.classList.toggle('flex', open);
    lines[0].style.transform = open ? 'translateY(8px) rotate(45deg)' : '';
    lines[1].style.transform = open ? 'rotate(-45deg)' : '';
    lines[2].style.opacity = open ? '0' : '1';
  });
})();
