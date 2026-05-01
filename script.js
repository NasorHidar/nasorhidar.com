document.addEventListener('DOMContentLoaded', () => {

  // ── Scroll progress bar ─────────────────────────────
  const bar = document.createElement('div');
  bar.className = 'scroll-progress';
  document.body.prepend(bar);
  window.addEventListener('scroll', () => {
    const pct = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    bar.style.width = pct + '%';
  }, { passive: true });

  // ── AOS (Animate on Scroll) ─────────────────────────
  const aosObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('aos-animate');
        // Trigger rating fills
        entry.target.querySelectorAll('.rating-fill[data-width]').forEach(fill => {
          fill.style.width = fill.dataset.width;
        });
        aosObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('[data-aos]').forEach(el => aosObs.observe(el));

  // Also watch rating fills directly (when parent is already visible)
  const ratingObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.width = entry.target.dataset.width;
        ratingObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.rating-fill[data-width]').forEach(el => ratingObs.observe(el));

  // ── Accordion ────────────────────────────────────────
  document.querySelectorAll('.accordion-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const content = trigger.nextElementSibling;
      const icon = trigger.querySelector('.accordion-icon');
      const isOpen = content.classList.contains('open');
      document.querySelectorAll('.accordion-content.open').forEach(c => {
        c.classList.remove('open');
        c.previousElementSibling.querySelector('.accordion-icon').style.transform = '';
      });
      if (!isOpen) {
        content.classList.add('open');
        icon.style.transform = 'rotate(180deg)';
      }
    });
  });

  // ── Contact form (Formspree) ─────────────────────────
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = form.querySelector('#submit-btn');
      const status = document.getElementById('form-status');
      btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Sending…';
      btn.disabled = true;
      try {
        const res = await fetch(form.action, {
          method: 'POST', body: new FormData(form), headers: { 'Accept': 'application/json' }
        });
        if (res.ok) {
          btn.innerHTML = '<i class="fas fa-check mr-2"></i>Sent!';
          btn.classList.add('!bg-teal-500');
          status.textContent = "Message received! I'll reply within 24 hours.";
          status.className = 'text-teal-400 text-sm mt-3 text-center block';
          form.reset();
        } else throw new Error();
      } catch {
        btn.innerHTML = '<i class="fas fa-times mr-2"></i>Failed';
        btn.classList.add('!bg-red-500');
        status.textContent = 'Something went wrong — email me at nasorhidar@gmail.com';
        status.className = 'text-red-400 text-sm mt-3 text-center block';
      } finally {
        setTimeout(() => {
          btn.innerHTML = 'Send Message <i class="fas fa-paper-plane ml-2"></i>';
          btn.disabled = false;
          btn.classList.remove('!bg-teal-500','!bg-red-500');
        }, 4000);
      }
    });
  }

  // ── Typing effect (hero subtitle) ───────────────────
  const typedEl = document.getElementById('typed-text');
  if (typedEl) {
    const phrases = [
      'Building scalable Django & MERN applications.',
      'Engineering secure, RBAC-driven systems.',
      'Contributing to enterprise open-source.',
      'Solving algorithmic challenges on Codeforces.'
    ];
    let pi = 0, ci = 0, deleting = false;
    function type() {
      const phrase = phrases[pi];
      typedEl.textContent = phrase.slice(0, ci);
      if (!deleting) {
        ci++;
        if (ci > phrase.length) { deleting = true; setTimeout(type, 1800); return; }
        setTimeout(type, 55);
      } else {
        ci--;
        if (ci < 1) { deleting = false; pi = (pi + 1) % phrases.length; setTimeout(type, 400); return; }
        setTimeout(type, 28);
      }
    }
    setTimeout(type, 800);
  }
});