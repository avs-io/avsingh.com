// Mark the document as JS-ready so reveal styles activate
document.documentElement.classList.add('js-ready');

// Reveal strategy:
// - Above-the-fold elements: stagger from 0ms based on --d
// - Below-the-fold elements: stay opacity 1 (no animation) for resilience
//   so the page is always complete, even with broken IO / slow JS / printed pages
const reveals = document.querySelectorAll('.reveal');
const vh = window.innerHeight;

requestAnimationFrame(() => {
  reveals.forEach(el => {
    const r = el.getBoundingClientRect();
    if (r.top < vh * 0.92) {
      // Above the fold — staggered animation
      el.classList.add('in');
    } else {
      // Below the fold — reveal immediately, no animation, just visible
      el.style.opacity = '1';
      el.style.transform = 'none';
      el.style.transition = 'none';
    }
  });
});
