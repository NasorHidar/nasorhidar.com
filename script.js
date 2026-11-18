/**
 * script.js — Interactive Motion Choreography & UI Micro-Physics
 * Integrations: Lenis smooth scroll, GSAP 3 & ScrollTrigger, 3D CSS tilt,
 * cursor-tracking spotlight borders, 3D identity flip card, and kinetic stat counters.
 */

document.addEventListener('DOMContentLoaded', () => {

  // ──────────────────────────────────────────────────────────────────────────
  // 1. TOP SCROLL PROGRESS LASER LINE
  // ──────────────────────────────────────────────────────────────────────────
  let progressLine = document.getElementById('scroll-progress-line');
  if (!progressLine) {
    progressLine = document.createElement('div');
    progressLine.id = 'scroll-progress-line';
    document.body.prepend(progressLine);
  }

  // ──────────────────────────────────────────────────────────────────────────
  // 2. LENIS SMOOTH INERTIA SCROLLING + GSAP TICKER SYNC
  // ──────────────────────────────────────────────────────────────────────────
  let lenisInstance = null;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (typeof Lenis !== 'undefined' && !prefersReducedMotion) {
    try {
      lenisInstance = new Lenis({
        duration: 1.15,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1.0,
        touchMultiplier: 1.8
      });

      function raf(time) {
        lenisInstance.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      if (typeof ScrollTrigger !== 'undefined') {
        lenisInstance.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((time) => {
          lenisInstance.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);
      }
    } catch (e) {
      console.warn('Lenis initialization skipped:', e);
    }
  }

  // Laser progress line update
  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
    progressLine.style.width = `${progress}%`;
  }, { passive: true });

  // ──────────────────────────────────────────────────────────────────────────
  // 3. DESKTOP CUSTOM TACTILE CURSOR
  // ──────────────────────────────────────────────────────────────────────────
  if (window.matchMedia('(pointer: fine)').matches && !prefersReducedMotion) {
    const dot = document.createElement('div');
    dot.className = 'cursor-dot';
    const ring = document.createElement('div');
    ring.className = 'cursor-ring';
    document.body.appendChild(dot);
    document.body.appendChild(ring);

    let mouseX = -100, mouseY = -100;
    let ringX = -100, ringY = -100;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    }, { passive: true });

    function renderRing() {
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
      requestAnimationFrame(renderRing);
    }
    requestAnimationFrame(renderRing);

    // Hover magnification on interactive elements
    const hoverTargets = 'a, button, input, textarea, .tilt-card, .flip-card-inner, .interactive-btn, [data-filter]';
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest(hoverTargets)) {
        document.body.classList.add('cursor-hover');
      }
    });
    document.addEventListener('mouseout', (e) => {
      if (e.target.closest(hoverTargets)) {
        document.body.classList.remove('cursor-hover');
      }
    });
  }

  // ──────────────────────────────────────────────────────────────────────────
  // 4. 3D PERSPECTIVE TILT PHYSICS & RADIAL SPOTLIGHT BORDERS
  // ──────────────────────────────────────────────────────────────────────────
  const tiltCards = document.querySelectorAll('.tilt-card');
  if (window.matchMedia('(pointer: fine)').matches && !prefersReducedMotion) {
    tiltCards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // CSS variables for radial cursor spotlight border
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);

        // 3D tilt calculations
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -7.5;
        const rotateY = ((x - centerX) / centerX) * 7.5;

        card.style.transform = `perspective(1100px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.015, 1.015, 1.015)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1100px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        card.style.setProperty('--mouse-x', '-500px');
        card.style.setProperty('--mouse-y', '-500px');
      });
    });
  }

  // ──────────────────────────────────────────────────────────────────────────
  // 5. 3D IDENTITY FLIP CARD (ABOUT SECTION)
  // ──────────────────────────────────────────────────────────────────────────
  const flipCardInner = document.querySelector('.flip-card-inner');
  const flipTriggerBtn = document.getElementById('trigger-flip-card');

  if (flipCardInner) {
    const toggleFlip = () => {
      flipCardInner.classList.toggle('is-flipped');
    };

    flipCardInner.addEventListener('click', toggleFlip);
    if (flipTriggerBtn) {
      flipTriggerBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleFlip();
      });
    }

    // Dynamic specular glare tracking
    flipCardInner.addEventListener('mousemove', (e) => {
      const rect = flipCardInner.getBoundingClientRect();
      const xPercent = ((e.clientX - rect.left) / rect.width) * 100;
      const yPercent = ((e.clientY - rect.top) / rect.height) * 100;
      flipCardInner.style.setProperty('--glare-x', `${xPercent}%`);
      flipCardInner.style.setProperty('--glare-y', `${yPercent}%`);
    });
  }

  // ──────────────────────────────────────────────────────────────────────────
  // 6. MAGNETIC CTA BUTTONS
  // ──────────────────────────────────────────────────────────────────────────
  if (window.matchMedia('(pointer: fine)').matches && !prefersReducedMotion) {
    document.querySelectorAll('.btn-magnetic-primary, .btn-magnetic-secondary').forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.28}px, ${y * 0.28}px) scale(1.02)`;
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0px, 0px) scale(1)';
      });
    });
  }

  // ──────────────────────────────────────────────────────────────────────────
  // 7. KINETIC STAT COUNTER ANIMATIONS
  // ──────────────────────────────────────────────────────────────────────────
  const statElements = document.querySelectorAll('[data-counter]');
  const observerStats = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const targetVal = parseFloat(el.getAttribute('data-counter'));
        const isDecimal = targetVal % 1 !== 0;
        const prefix = el.getAttribute('data-prefix') || '';
        const suffix = el.getAttribute('data-suffix') || '';
        const duration = 1800; // ms
        const startTime = performance.now();

        function updateNumber(now) {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease Out Quart
          const ease = 1 - Math.pow(1 - progress, 4);
          const currentVal = targetVal * ease;

          el.textContent = `${prefix}${isDecimal ? currentVal.toFixed(2) : Math.floor(currentVal)}${suffix}`;

          if (progress < 1) {
            requestAnimationFrame(updateNumber);
          } else {
            el.textContent = `${prefix}${isDecimal ? targetVal.toFixed(2) : targetVal}${suffix}`;
          }
        }
        requestAnimationFrame(updateNumber);
        observerStats.unobserve(el);
      }
    });
  }, { threshold: 0.35 });

  statElements.forEach(el => observerStats.observe(el));

  // ──────────────────────────────────────────────────────────────────────────
  // 8. TYPING EFFECT — CYBER & AI PILLARS
  // ──────────────────────────────────────────────────────────────────────────
  const typedEl = document.getElementById('typed-text');
  if (typedEl) {
    const phrases = [
      'Architecting Scalable Full-Stack Systems.',
      'Human-Centered AI & Computer Vision.',
      'Usable Privacy & Enterprise Cybersecurity.',
      'Merged OWASP DefectDojo Contributor.',
      '500+ Algorithmic Problems Solved.'
    ];
    let pIdx = 0, cIdx = 0, isDeleting = false;

    function runTyping() {
      const phrase = phrases[pIdx];
      typedEl.textContent = phrase.slice(0, cIdx);

      if (!isDeleting) {
        cIdx++;
        if (cIdx > phrase.length) {
          isDeleting = true;
          setTimeout(runTyping, 2200);
          return;
        }
        setTimeout(runTyping, 50);
      } else {
        cIdx--;
        if (cIdx < 1) {
          isDeleting = false;
          pIdx = (pIdx + 1) % phrases.length;
          setTimeout(runTyping, 450);
          return;
        }
        setTimeout(runTyping, 25);
      }
    }
    setTimeout(runTyping, 800);
  }

  // ──────────────────────────────────────────────────────────────────────────
  // 9. FILTERABLE PROJECTS GALLERY (PROJECTS.HTML)
  // ──────────────────────────────────────────────────────────────────────────
  const filterBtns = document.querySelectorAll('[data-filter]');
  const projectCards = document.querySelectorAll('[data-category]');

  if (filterBtns.length > 0 && projectCards.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => {
          b.classList.remove('active', 'bg-indigo-600', 'text-white', 'border-indigo-500');
          b.classList.add('bg-slate-900/60', 'text-slate-400', 'border-white/10');
        });
        btn.classList.add('active', 'bg-indigo-600', 'text-white', 'border-indigo-500');
        btn.classList.remove('bg-slate-900/60', 'text-slate-400', 'border-white/10');

        const filter = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filter === 'all' || category.includes(filter)) {
            card.style.display = 'block';
            if (typeof gsap !== 'undefined') {
              gsap.fromTo(card, { opacity: 0, y: 25, scale: 0.96 }, { opacity: 1, y: 0, scale: 1, duration: 0.45, ease: 'power2.out' });
            }
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // ──────────────────────────────────────────────────────────────────────────
  // 10. FORMSPREE CONTACT FORM SUBMISSION
  // ──────────────────────────────────────────────────────────────────────────
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('#submit-btn');
      const formStatus = document.getElementById('form-status');
      const origText = submitBtn.innerHTML;

      submitBtn.innerHTML = '<i class="fas fa-circle-notch fa-spin mr-2"></i>Encrypting & Dispatching…';
      submitBtn.disabled = true;

      try {
        const formData = new FormData(contactForm);
        const res = await fetch(contactForm.action, {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        });

        if (res.ok) {
          submitBtn.innerHTML = '<i class="fas fa-check-circle mr-2 text-emerald-400"></i>Message Dispatched!';
          submitBtn.style.background = 'linear-gradient(135deg, #059669, #10b981)';
          if (formStatus) {
            formStatus.textContent = "Thank you! Your message was received securely. I'll get back to you within 24 hours.";
            formStatus.className = 'text-cyan-400 text-sm mt-3 text-center block font-mono';
          }
          contactForm.reset();
        } else {
          throw new Error('Server returned non-200');
        }
      } catch (err) {
        submitBtn.innerHTML = '<i class="fas fa-exclamation-triangle mr-2 text-red-400"></i>Delivery Failed';
        submitBtn.style.background = 'rgba(239, 68, 68, 0.7)';
        if (formStatus) {
          formStatus.textContent = 'Network or submission error. Feel free to email directly: nasorhidar@gmail.com';
          formStatus.className = 'text-red-400 text-sm mt-3 text-center block font-mono';
        }
      } finally {
        setTimeout(() => {
          submitBtn.innerHTML = origText;
          submitBtn.disabled = false;
          submitBtn.style.background = '';
        }, 4500);
      }
    });
  }

  // ──────────────────────────────────────────────────────────────────────────
  // 11. GSAP ENTRANCE CHOREOGRAPHY
  // ──────────────────────────────────────────────────────────────────────────
  if (typeof gsap !== 'undefined') {
    // Hero Elements Staggered Fade Up
    gsap.from('.hero-animate', {
      opacity: 0,
      y: 35,
      stagger: 0.12,
      duration: 1.0,
      ease: 'power3.out',
      delay: 0.2
    });
  }

});
