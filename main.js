/* VANDERLOO landing page: quiet entrances, nothing more */
(() => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.querySelectorAll('section, footer').forEach(s =>
    s.querySelectorAll('.rise').forEach((el, i) => el.style.setProperty('--i', i % 5)));

  const watch = document.querySelectorAll('.rise, .photo, .wide');
  if ('IntersectionObserver' in window && !reduce) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
    watch.forEach(el => io.observe(el));
  } else {
    watch.forEach(el => el.classList.add('is-in'));
  }

  const video = document.querySelector('.hero-video');
  if (video && reduce) { video.removeAttribute('autoplay'); video.pause(); }
})();
