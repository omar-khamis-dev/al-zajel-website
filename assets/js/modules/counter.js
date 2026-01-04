export function initCounters() {
  const counters = document.querySelectorAll(".counter");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const el = entry.target;
      const target = +el.dataset.target;
      let current = 0;
      const step = target / 80;

      function animate() {
        current += step;
        if (current < target) {
          el.textContent = Math.floor(current);
          requestAnimationFrame(animate);
        } else {
          el.textContent = target;
        }
      }

      animate();
      observer.unobserve(el);
    });
  }, { threshold: 0.6 });

  counters.forEach(c => observer.observe(c));
}
