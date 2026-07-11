document.documentElement.classList.add('js-ready');

const reveals = document.querySelectorAll('.reveal');
const vh = window.innerHeight;

requestAnimationFrame(() => {
  reveals.forEach(el => {
    const r = el.getBoundingClientRect();
    if (r.top < vh * 0.92) {
      el.classList.add('in');
    } else {
      el.style.opacity = '1';
      el.style.transform = 'none';
      el.style.transition = 'none';
    }
  });
});
